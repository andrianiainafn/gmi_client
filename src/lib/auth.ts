import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from  "next-auth/providers/github"
import axios from "axios";
import {cookies} from "next/headers";


export const handlers = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: 'Credentials',
            id:"credentials",
            credentials:{
                email: {
                    label:"email",
                    type:"text",
                    placeholder: "Type here your email"
                },
                password:{
                    label:"Password",
                    type:"text",
                    placeholder: "your-cool-password"
                }
            },
            async authorize(credentials) {
                const authResponse = await axios.post("https://gmiapi-production.up.railway.app/api/auth/login",{
                    email: credentials?.email,
                    password: credentials?.password,
                    refreshToken:"",
                    grandType: "password"
                })

                if (authResponse.status != 200) {
                    return null
                }

                const user = {
                    name:authResponse.data.firstname,
                    id:authResponse.data.email,
                    email:authResponse.data.email,
                    image:authResponse.data.profileUrl
                }
                return user
            }
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks:{
        async signIn({ user, account, profile, email, credentials}){
            const response = await axios.post("https://gmiapi-production.up.railway.app/api",{
                firstname:user.name,
                email:user.email,
                lastname:user.name,
                providerType:account?.provider,
                profileUrl:user.image
            })
            if (response.status == 200){
                cookies().set("token",response.data.token)
                cookies().set("refreshToken", response.data.refreshToken)
            }
            return true
        },
    },
})
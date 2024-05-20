import {z} from "zod";

export interface AuthCredentialsType{
    email: string,
    password: string
}

export const SignUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(20)
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
export type LoginSchemaType = z.infer<typeof SignUpSchema>;
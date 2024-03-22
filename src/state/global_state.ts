import {create,  StoreApi, UseBoundStore} from 'zustand'


type State = {
    profileUrl:string
    firstName:string
    lastName:string
    username:string
    userId: string
    isShowNotification:boolean
}

type Action = {
    updateProfileUrl:(profileUrl: State['profileUrl'])=>void
    updateFirstname:(firstName: State['firstName'])=>void
    updateLastname:(firstName: State['lastName'])=>void
    updateUsername:(lastname: State['username'])=>void
    updateUserId:(lastname: State['userId'])=>void
    updateIsShowNotification:(isShowNotification: State['isShowNotification'])=>void
}

type WithSelectors<S> = S extends { getState: () => infer T }
    ? S & { use: { [K in keyof T]: () => T[K] } }
    : never
const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
    _store: S,
) => {
    let store = _store as WithSelectors<typeof _store>
    store.use = {}
    for (let k of Object.keys(store.getState())) {
        ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
    }

    return store
}
export const useUserStore = createSelectors(create<State & Action>((set) => ({
    profileUrl:'',
    lastName:'',
    firstName:'',
    username:'',
    userId: '',
    isShowNotification:false,
    updateProfileUrl:(profileUrl)=> set(()=>({profileUrl: profileUrl})),
    updateLastname:(lastName)=> set(()=>({lastName: lastName})),
    updateFirstname:(firstName)=> set(()=>({firstName: firstName})),
    updateUsername:(username)=> set(()=>({username: username})),
    updateUserId:(userId)=> set(()=>({userId: userId})),
    updateIsShowNotification:(isShowNotification)=>set(()=>({isShowNotification: isShowNotification}))
})))
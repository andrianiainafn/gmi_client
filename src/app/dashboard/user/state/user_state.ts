import {create,  StoreApi, UseBoundStore} from 'zustand'
import {IAccount} from "@/app/dashboard/user/_services/definition";


type State = {
    users:IAccount[]
    selectedRole:string[]
}

type Action = {
    updateUsers:(users:State['users'])=>void
    updateSelectedRole:(selectedRole:State['selectedRole'])=>void
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
export const useUserSectionStore = createSelectors(create<State & Action>((set) => ({
    users:[],
    selectedRole:[],
    updateUsers:(users)=>set(()=>({users:users})),
    updateSelectedRole:(selectedRole)=>set(()=>({selectedRole:selectedRole})),
})))
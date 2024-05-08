import {create,  StoreApi, UseBoundStore} from 'zustand'
import {IRole} from "@/app/dashboard/user/_services/definition";
import {Organization} from "@/app/dashboard/organization/_services/definition";


type State = {
    roles:IRole[]
   organizations:Organization[]
}

type Action = {
    updateRoles:(roles:State['roles'])=>void
    updateOrganization:(organizations:State['organizations'])=>void
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
export const useOrganizationStore = createSelectors(create<State & Action>((set) => ({
    roles:[],
    organizations:[],
    updateRoles:(roles)=>set(()=>({roles:roles})),
    updateOrganization:(organizations)=>set(()=>({organizations:organizations})),
})))
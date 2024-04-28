import {create,  StoreApi, UseBoundStore} from 'zustand'
import {IMaterial} from "@/app/dashboard/material/_services/definition";
import {IAccount} from "@/app/dashboard/user/_services/definition";


type State = {
    material:IMaterial[]
    materialOwners:IAccount[]

}

type Action = {
    updateMaterial:(material: State['material'])=>void
    updateMaterialOwners:(material: State['materialOwners'])=>void
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
export const useMaterialStore = createSelectors(create<State & Action>((set) => ({
    material:[],
    materialOwners:[],
    updateMaterial:(material)=> set(()=>({material: material})),
    updateMaterialOwners:(materialOwners)=> set(()=>({materialOwners: materialOwners})),
})))
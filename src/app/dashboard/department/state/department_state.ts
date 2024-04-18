import {create,  StoreApi, UseBoundStore} from 'zustand'
import {IDepartment} from "@/app/dashboard/department/_services/definition";


type State = {
    departments:IDepartment[]
}

type Action = {
    updateDepartments:(departments: State['departments'])=>void
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
export const useDepartmentStore = createSelectors(create<State & Action>((set) => ({
    departments:[],
    updateDepartments:(departments)=> set(()=>({departments: departments})),
})))
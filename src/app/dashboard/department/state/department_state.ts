import {create,  StoreApi, UseBoundStore} from 'zustand'
import {IDepartment} from "@/app/dashboard/department/_services/definition";
import {IAccount} from "@/app/dashboard/user/_services/definition";


type State = {
    department:IDepartment
    members:IAccount[]
    departments:IDepartment[]
}

type Action = {
    updateDepartments:(departments: State['departments'])=>void
    updateDepartment:(department: State['department']) => void
    updateMember:(members: State['members']) => void
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
    members:[],
    department:{
        departmentName:"",
        departmentId:"",
        createdAt:new Date(),
        accounts:[],
        updatedAt: new Date()
    },
    updateDepartments:(departments)=> set(()=>({departments: departments})),
    updateDepartment:(department)=> set(()=>({department: department})),
    updateMember:(members)=> set(()=>({members: members}))
})))
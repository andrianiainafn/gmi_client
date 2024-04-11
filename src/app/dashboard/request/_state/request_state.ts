import {create,  StoreApi, UseBoundStore} from 'zustand'
import {IPriority, IRequest} from "@/app/dashboard/request/_services/definition";


type State = {
    request:IRequest[]
    requestId:     string;
    description:   string;
    materialName:  string;
    actualStatus:  string;
    requestStatus: string;
    account:       null;
    priority:      IPriority;
    createdAt:     Date;
    updatedAt:     Date;
}

type Action = {
    updateRequest:(request: State['request'])=>void
    updateRequestId:(requestId: State['requestId'])=>void
    updateMaterialName:(materialName: State['materialName'])=>void
    updatePriority:(priority: State['priority'])=>void
    updateDescription:(description: State['description'])=>void
    updateActualStatus:(actualStatus: State['actualStatus'])=>void
    updateRequestStatus:(updatedAt: State['requestStatus'])=>void
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
export const useRequestStore = createSelectors(create<State & Action>((set) => ({
    requestId:     '',
    materialName:   '',
    serialNumber:   '',
    description:    '',
    actualStatus:   '',
    priority:{
        priorityId:'',
        priorityDesignation:'',
        request:[]
    },
    createdAt:      new Date(),
    updatedAt:      new Date(),
    request:[],
    account:null,
    requestStatus:'',
    updateRequestId:(requestId)=> set(()=>({requestId: requestId})),
    updateMaterialName:(materialName)=> set(()=>({materialName: materialName})),
    updateActualStatus:(actualStatus)=> set(()=>({actualStatus: actualStatus})),
    updateDescription:(description)=> set(()=>({description: description})),
    updatePriority:(priority)=> set(()=>({priority: priority})),
    updateRequest:(request)=> set(()=>({request: request})),
    updateRequestStatus:(requestStatus)=> set(()=>({requestStatus: requestStatus})),
})))
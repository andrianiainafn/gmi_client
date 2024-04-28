import {create,  StoreApi, UseBoundStore} from 'zustand'
import {IRequest} from "@/app/dashboard/request/_services/definition";
import {INotification} from "@/app/dashboard/(notification)/_services/definition";


type State = {
    request:IRequest[]
    notifications:INotification[]
}

type Action = {
    updateRequest:(request: State['request'])=>void
    updateNotification:(notifications: State['notifications'])=>void
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
    notifications:[],
    request:[],
    requestStatus:'',
    updateRequest:(request)=> set(()=>({request: request})),
    updateNotification:(notification)=> set(()=>({notifications: notification})),
})))
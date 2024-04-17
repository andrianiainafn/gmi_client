import {create,  StoreApi, UseBoundStore} from 'zustand'
import {IAccount} from "@/app/dashboard/user/_services/definition";


type State = {
    userInfo:IAccount
    isShowNotification:boolean
    isShowSetting:boolean
}

type Action = {
    updateUserInfo:(serInfo:State['userInfo'])=>void
    updateIsShowNotification:(isShowNotification: State['isShowNotification'])=>void
    updateIsShowSetting:(isShowNotification: State['isShowNotification'])=>void
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
    userInfo:{
      accountId:'',
      profileUrl:'',
      lastname:'',
      firstname:'',
      email:'',
      createdAt:new Date(),
      roles:[
          {
              roleId:    '',
              roleName:  '',
              account:   [],
              createdAt: new Date(),
              updatedAt: new Date(),
          }
      ],
    department:{
        departmentId:   '',
        departmentName: '',
        accounts:       [],
        createdAt:      new Date(),
        updatedAt:      new Date()
    }
    },
    isShowNotification:false,
    isShowSetting:false,
    updateUserInfo:(userInfo)=>set(()=>({userInfo:userInfo})),
    updateIsShowNotification:(isShowNotification)=>set(()=>({isShowNotification: isShowNotification})),
    updateIsShowSetting:(isShowSetting)=>set(()=>({isShowSetting: isShowSetting}))
})))
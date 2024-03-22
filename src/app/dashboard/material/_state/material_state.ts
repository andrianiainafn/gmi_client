import {create,  StoreApi, UseBoundStore} from 'zustand'
import {IMaterial} from "@/app/dashboard/material/_services/definition";


type State = {
    material:IMaterial[]
    materialId:     string;
    materialName:   string;
    serialNumber:   string;
    description:    string;
    actualStatus:   string;
    state:          string;
    createdAt:      Date;
    updatedAt:      Date;
}

type Action = {
    updateMaterial:(material: State['material'])=>void
    updateMaterialId:(materialId: State['materialId'])=>void
    updateMaterialName:(materialName: State['materialName'])=>void
    updateSerialNumber:(serialNumber: State['serialNumber'])=>void
    updateState:(state: State['state'])=>void
    updateDescription:(description: State['description'])=>void
    updateActualStatus:(actualStatus: State['actualStatus'])=>void
    updateCreatedAt:(createdAt: State['createdAt'])=>void
    updateUpdatedAt:(updatedAt: State['updatedAt'])=>void
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
    materialId:     '',
    materialName:   '',
    serialNumber:   '',
    description:    '',
    actualStatus:   '',
    state:          '',
    createdAt:      new Date(),
    updatedAt:      new Date(),
    material:[],
    updateMaterialId:(materialId)=> set(()=>({materialId: materialId})),
    updateMaterialName:(materialName)=> set(()=>({materialName: materialName})),
    updateActualStatus:(actualStatus)=> set(()=>({actualStatus: actualStatus})),
    updateDescription:(description)=> set(()=>({description: description})),
    updateSerialNumber:(serialNumber)=> set(()=>({serialNumber: serialNumber})),
    updateState:(state)=> set(()=>({state: state})),
    updateCreatedAt:(createdAt)=> set(()=>({createdAt: createdAt})),
    updateUpdatedAt:(updatedAt)=> set(()=>({updatedAt: updatedAt})),
    updateMaterial:(material)=> set(()=>({material: material})),
})))
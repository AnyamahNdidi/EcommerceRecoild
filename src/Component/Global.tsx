import { atom, selector } from "recoil"
import axios from "axios"
import {iData, Data} from "./Interface"


const url: string = "https://fakestoreapi.com/products"



export const product = selector({
    key: "product",
    get: async () =>
    {
        const data = await axios.get(url)
        const newData = await data.data as Array<iData>

        return newData || []
    }
})

export const details = atom({
    key: "details",
    default: {} as iData,
})

export const dispatchercode = atom({
    key: "dispatchercode",
    default:""

})



export const cart = atom({
    key: "cart",
   default: [] as Array<iData>
})

export const disptch = atom({
    key: "disptch",
    default: [] as Array<iData>
})


export  interface Data
{
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {rate:number, count:number}
}

export interface iData extends Data
{
  qty?: number
  deliveried?: boolean
  code?:string
}
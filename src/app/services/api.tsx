import axios, { AxiosResponse } from "axios"
import { ProductType } from "@/types/types"

export async function getAllProducts(): Promise<ProductType[]> {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products`)

    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

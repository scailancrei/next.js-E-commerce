import React, { useEffect, useState } from "react"
import List from "@/_components/list"
import { getAllProducts } from "api/api"
interface ListProps {
  children?: React.ReactNode
}

export default function Products({ children }: ListProps) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllProducts().then((result) => result.json())

      setData(response)
    }
    fetchData()
  }, [])

  return <List products={data}></List>
}

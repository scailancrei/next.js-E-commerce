"use client"
import React from "react"
import { ListProps } from "@/types/types"

const List = ({ array, children }: ListProps) => {
  return (
    <>
      {array.map((item, index) => (
        <React.Fragment key={index}>{children(item)}</React.Fragment>
      ))}
    </>
  )
}

export default List

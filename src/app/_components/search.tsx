"use client"
import { JSX, useState } from "react"
import Input from "./input"
import { SearchIcon } from "./icons"
import UseIconContext from "../context/useIconContext"

type SearchInputProps = {
  styles?: string
}

export default function Search({ styles }: SearchInputProps): JSX.Element {
  const [search, setSearch] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="flex items-center bg-gray-500 rounded-md">
      <Input
        type={"text"}
        name={"search"}
        placeHolder="Search"
        styles={styles}
        changeEventHandler={handleChange}
        value={search}
      />
      <UseIconContext
        styles={{
          background: "grey",
          color: "black",
          size: "2rem",
          right: "1rem",
        }}
      >
        <SearchIcon />
      </UseIconContext>
    </div>
  )
}

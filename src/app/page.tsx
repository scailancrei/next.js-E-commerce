"use client"
import { JSX, useState } from "react"
import Nav from "./_components/nav"
import Links from "./_components/links"
import SearchInput from "./_components/searchInput"
import { NavItem, NavLinksResponsives } from "./_components/navItem"
import { MenuIcon } from "./_components/icons"

import UseIconContext from "./context/useIconContext"
import Button from "./_components/button"

export default function Home(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const handleNav: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <div className=" bg-gray-100 p-2 font-display">
      <Nav
        styles={" bg-blue-500 text-white p-3 "}
        ulStyles={"grid grid-cols-4 auto-cols-auto gap-3 items-center "}
      >
        <NavItem styles={"col-1 text-sm"}>
          <Links href={"/"} styles={"text-white"}>
            E-Commerce Store
          </Links>
        </NavItem>
        <NavItem styles={"col-start-2 col-span-2 max-sm:col-span-1/2"}>
          <SearchInput styles={"text-black w-full p-2  rounded-md"} />
        </NavItem>

        <Button
          typeButton="button"
          handleClick={handleNav}
          styles={"justify-self-center  sm:hidden bg-blue-500 w-3 "}
        >
          <UseIconContext
            styles={{
              color: "blue",
              size: "2rem",
              className:
                " transition ease-in-out  hover:-translate-y-1 hover:scale-110  hover:bg-indigo-500 duration-300",
            }}
          >
            <MenuIcon />
          </UseIconContext>
        </Button>
        <div className="max-sm:hidden col-start-4 flex gap-6 hover:*:bg-[#1e1b4b] hover:*:text-blue-500">
          <NavItem styles={""}>
            <Links href={"/login"}>Login</Links>
          </NavItem>
          <NavItem styles={""}>
            <Links href={"/Admin"}>Admin</Links>
          </NavItem>
        </div>
        {isOpen && <NavLinksResponsives handleClick={handleNav} />}
      </Nav>

      <div className="p-6 border rounded-md text-center text-black">
        <h1 className="text-3xl font-bold">Welcome to the E-Commerce Store</h1>
      </div>
    </div>
  )
}

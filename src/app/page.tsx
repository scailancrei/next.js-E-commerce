"use client"
import "./global.css"
import { JSX, useContext, useEffect, useState } from "react"
import Nav from "@/_components/nav"
import Links from "@/_components/links"
import Search from "@/_components/search"
import { NavItem, NavLinksResponsives } from "@/_components/navItem"
import { MenuIcon } from "@/_components/icons"
import UseIconContext from "@/context/useIconContext"
import Button from "@/_components/button"
import Products from "(store)/store/products"
import { ThemeContext } from "@/context/useThemeContext"
import { UserContext } from "@/context/useUserContext"
import Theme from "./_components/theme"
import { GetUser } from "./api/getUser"

export default function Home(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useContext(ThemeContext)
  const { currentUser, setUser } = useContext(UserContext)

  const handleNav: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    async function getUser() {
      try {
        const { data } = await GetUser()
        setUser(data.user)
      } catch (error) {
        setUser(null)
      }
    }
    getUser()
  }, [])

  return (
    <div
      className={` ${
        theme === "light" ? "bg-gray-100 text-black " : "bg-black text-white "
      }  p-2 font-display antialiased  w-screen h-full`}
    >
      <Nav
        id="navbar"
        styles={" bg-blue-500 text-white p-3"}
        ulStyles={"grid grid-cols-4 auto-cols-auto gap-3 items-center"}
      >
        <NavItem styles={"col-start-2 col-span-2 max-sm:col-span-1/2"}>
          <Search styles={"text-black w-full p-2 bg-white rounded-md"} />
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
                "transition ease-in-out  hover:-translate-y-1 hover:scale-110  hover:bg-indigo-500 duration-300",
            }}
          >
            <MenuIcon />
          </UseIconContext>
        </Button>
        <div className="max-sm:hidden justify-around col-start-4 flex gap-6 *:hover:bg-[#1e1b4b] *:hover:text-blue-500">
          <NavItem>
            {currentUser ? (
              <Links href={"/logout"}>Logout</Links>
            ) : (
              <Links href={"/login"}>Login</Links>
            )}
          </NavItem>
          {currentUser ? <Button typeButton="button">profile</Button> : ""}
          <Theme />
        </div>
        {isOpen && (
          <NavLinksResponsives handleClick={handleNav} isUser={currentUser} />
        )}
      </Nav>

      <div className="grid grid-cols-1 grid-rows-1 auto-cols-auto grid-flow-row-dense gap-3 justify-center">
        <h2 id="title" className="text-5xl text-center">
          Products
        </h2>
        <Products />
      </div>
    </div>
  )
}

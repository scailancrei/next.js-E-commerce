import { JSX } from "react"
import Links from "./links"
import { CloseIcon } from "./icons"
import UseIconContext from "../context/useIconContext"
import Button from "@/_components/button"
import Theme from "@/_components/theme"

import { UserType } from "@/types/types"
import Link from "@/_components/links"

type Props = {
  children: JSX.Element
  styles?: string
}
type NavProps = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>
  isUser: UserType | undefined
}

export const NavItem = ({ children, styles }: Props): JSX.Element => {
  return <li className={styles}>{children}</li>
}

export const NavLinksResponsives = ({
  handleClick,
  isUser,
}: NavProps): JSX.Element => {
  return (
    <div className="fixed inset-0 z-10 bg-gray-500/75  transition-opacity duration-700 ease-in-out">
      <div className=" flex inset-0 z-10">
        <div className="animate-slide-in-right bg-gray-200  p-6 absolute top-0 right-0 w-1/2 rounded-2xl">
          <Button
            styles={"float-right bg-gray-400"}
            typeButton="button"
            handleClick={handleClick}
          >
            <UseIconContext
              styles={{
                color: "blue",
                size: "2rem",
                className:
                  " transition ease-in-out  hover:-translate-y-1 hover:scale-110  hover:bg-indigo-500 duration-300",
              }}
            >
              <CloseIcon />
            </UseIconContext>
          </Button>

          <div className="flex flex-col gap-6 items-baseline *:hover:underline *:hover:bg-[#272727]  *:hover:text-blue-500">
            {isUser ? (
              <Links href={"/logout"} styles={"text-black"}>
                log out
              </Links>
            ) : (
              <Links href={"/login"} styles={"text-black"}>
                login
              </Links>
            )}
            <Link href={"/cart"} styles={"text-black"}>
              Cart
            </Link>

            <Theme />
            {isUser ? (
              <Button styles={"text-black"} typeButton="button">
                profile
              </Button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

import { IconContext } from "react-icons"

export default function UseIconContext({ children, styles }) {
  return <IconContext.Provider value={styles}>{children}</IconContext.Provider>
}

import { render } from "@/utils/tests/test-utils"
import "@testing-library/jest-dom"
import Home from "app/page"

test("Render the home without user and without products", async () => {
  render(<Home />)
})

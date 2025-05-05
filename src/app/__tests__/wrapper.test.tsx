import { render } from "../utils/tests-utils/test-utils"
import "@testing-library/jest-dom"
import Home from "app/page"

describe("Home", () => {
  it("should render the home without user and without products", async () => {
    render(<Home />, {
      user: undefined,
      productsCart: [],
    })
  })

  it("should render the home with user and without products", async () => {
    render(<Home />, {
      user: {
        user: {
          id: "1",
          email: "email@email.com",
          app_metadata: {},
          user_metadata: {},
          aud: "authenticated",
          created_at: "2023-01-01T00:00:00Z",
        },
      },
      productsCart: [],
    })
  })

  it("should render the home without user and with products", async () => {
    render(<Home />, {
      user: undefined,
      productsCart: [
        {
          id: 1,
          name: "Product 1",
          title: "Product 1",
          price: 10,
          image: "image1.jpg",
          description: "Description 1",
        },
        {
          id: 2,
          name: "Product 2",
          title: "Product 2",
          price: 20,
          image: "image2.jpg",
          description: "Description 2",
        },
      ],
    })
  })
})

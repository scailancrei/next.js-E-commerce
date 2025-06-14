jest.mock("../services/getUser", () => ({
  GetUser: jest.fn(() => Promise.resolve({ data: undefined })),
}))

import { GetUser } from "../services/getUser"
import { render } from "../utils/tests-utils/test-utils"
import "@testing-library/jest-dom"
import Home from "app/page"

describe("Home", () => {
  it("should render the home without user and without products", async () => {
    render(<Home />, {
      user: undefined,
      productsCart: [],
    })
    expect(GetUser).toHaveBeenCalledWith()
  })

  it("should render the home with user and without products", async () => {
    ;(GetUser as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          user: {
            id: "1",
            email: "test@email.com",
          },
        },
      })
    )
    render(<Home />, {
      user: {
        user: {
          id: "1",
          email: "test@email.com",
          app_metadata: {},
          user_metadata: {},
          aud: "authenticated",
          created_at: "2023-01-01T00:00:00Z",
        },
      },
      productsCart: [],
    })

    expect(GetUser).toHaveReturnedWith(
      Promise.resolve({
        data: {
          user: {
            id: "1",
            email: "test@email.com",
          },
        },
      })
    )
  })

  it("should render the home without user and with products", async () => {
    ;(GetUser as jest.Mock).mockRejectedValueOnce(new Error("User not found"))
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
    expect(GetUser).toHaveBeenCalled()
  })
})

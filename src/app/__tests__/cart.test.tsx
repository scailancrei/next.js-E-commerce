import React from "react"
import { render, screen } from "../utils/tests-utils/test-utils"
import Cart from "@/_components/Cart"

describe("Cart", () => {
  it("Throws an error when handleCartList is missing", () => {
    expect(() => {
      render(<Cart />, {
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
    }).toThrow(
      "handleCartList function is required to render the Cart component"
    )
  })

  it("render the cart with the handleCartList function", () => {
    expect(() => {
      render(<Cart handleCartList={() => {}} />, {
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

  it("render the cart component with a number of items", () => {
    const { getByText } = render(<Cart handleCartList={() => {}} />, {
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

    console.log(getByText)
  })
})

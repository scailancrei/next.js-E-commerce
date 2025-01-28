export async function getAllProducts() {
  const response = await fetch(`https://fakestoreapi.com/products`)

  return response
}

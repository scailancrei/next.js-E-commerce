export default async function Api() {
  const response = await fetch(`https://fakestoreapi.com/products`)

  return response
}

import Stripe from 'stripe'
import { getProducts } from '@/utils/getProducts'
import ProductList from './components/ProductList'

export default async function Home() {
  const response = await getProducts()

  const products = response.data.map((product) => {
    const amount = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      amount: amount.unit_amount ? amount.unit_amount / 100 : 0,
      imageUrl: product.images[0],
    }
  })

  return (
    <main className="flex w-full max-w-[calc(100vw-((100vw-73.75rem)/2))] min-h-[41rem] ml-auto">
      <ProductList products={products} />
    </main>
  )
}

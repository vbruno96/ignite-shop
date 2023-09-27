import { stripe } from '@/lib/stripe'
import ProductList from './components/ProductList'
import Stripe from 'stripe'

export default async function Home() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

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

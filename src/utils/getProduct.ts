import { cache } from 'react'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

export const revalidate = 3600 // 1hrs

export const getProduct = cache(async (id: string) => {
  const product = await stripe.products.retrieve(id, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    amount: price.unit_amount ? price.unit_amount / 100 : 0,
    description: product.description,
  }
})

import { cache } from 'react'
import { stripe } from '@/lib/stripe'
import { formatedCurrency } from '@/utils/formatedCurrency'
import Stripe from 'stripe'

export const revalidate = 3600 // 1hrs

export const getProduct = cache(async (id: string) => {
  const product = await stripe.products.retrieve(id, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price
  const formatedPrice = formatedCurrency(
    price.unit_amount ? price.unit_amount / 100 : 0,
  )

  return {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    amount: formatedPrice,
    description: product.description,
    defaultPriceId: price.id,
  }
})

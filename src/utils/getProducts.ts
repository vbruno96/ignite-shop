import { cache } from 'react'
import { stripe } from '@/lib/stripe'

export const revalidate = 3600 // 1hrs

export const getProducts = cache(
  async () =>
    await stripe.products.list({
      expand: ['data.default_price'],
    }),
)

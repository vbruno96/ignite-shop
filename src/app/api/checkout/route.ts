import { stripe } from '@/lib/stripe'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { priceId } = await req.json()

  if (!priceId)
    return NextResponse.json({ error: 'Price not found' }, { status: 404 })

  const successUrl = `${process.env.NEXT_URL}/success/?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    cancel_url: cancelUrl,
    success_url: successUrl,
  })

  return NextResponse.json(
    { checkoutUrl: checkoutSession.url },
    { status: 201 },
  )
}

import { stripe } from '@/lib/stripe'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

export default async function Success({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const sessionId = String(searchParams?.session_id)

  const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = checkoutSession.customer_details?.name
  const product = checkoutSession.line_items?.data[0].price
    ?.product as Stripe.Product

  return (
    <div className="flex flex-col justify-center items-center mx-auto h-[41rem]">
      <h1 className="font-bold text-2xl text-gray-100">Compra Efetuada!</h1>
      <div className="flex items-center justify-center bg-gradient-to-b from-[#1EA483] from-0% to-[#7465D4] to-100% w-full max-w-[8.125rem] h-[9.0625rem] rounded-md p-1 mt-16 mb-8">
        <Image src={product.images[0]} width={120} height={110} alt="" />
      </div>
      <p className="max-w-[35rem] text-xl text-gray-300 text-center">
        Uhuul <strong>{customerName}</strong>, sua{' '}
        <strong>{product.name}</strong> já está a caminho da sua casa.
      </p>
      <Link
        href="/"
        className="mt-20 font-bold text-green-500 text-lg hover:text-green-300"
      >
        Voltar ao catálogo
      </Link>
    </div>
  )
}

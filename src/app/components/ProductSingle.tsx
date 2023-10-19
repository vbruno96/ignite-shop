'use client'

import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'

interface ProductSingle {
  id: string
  name: string
  amount: string
  imageUrl: string
  description: string | null
  defaultPriceId: string
}

interface ProductSingleProps {
  product: ProductSingle
}

export default function ProductSingle({ product }: ProductSingleProps) {
  const [isCreatingCheckoutSession, setIsCreateCheckoutSession] =
    useState(false)

  async function handleCheckoutProduct() {
    try {
      setIsCreateCheckoutSession(true)
      const response = await axios.post<{ checkoutUrl: string }>(
        '/api/checkout',
        {
          priceId: product.defaultPriceId,
        },
      )

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      alert('Falha ao redirecionar ao checkout!')
      console.log(error)
    }
  }

  return (
    <>
      <div className="h-[41rem] bg-gradient-to-b from-[#1EA483] from-0% to-[#7465D4] to-100% w-full max-w-[36rem] rounded-lg p-1 flex items-center justify-center">
        <Image
          src={product.imageUrl}
          width={520}
          height={480}
          alt=""
          className="object-cover"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl text-gray-300">{product.name}</h1>
        <span className="block mt-4 text-2xl text-green-300">
          {product.amount}
        </span>
        <p className="mt-10 text-md text-gray-300">{product.description}</p>
        <button
          disabled={isCreatingCheckoutSession}
          onClick={handleCheckoutProduct}
          className="mt-auto bg-green-500 text-white rounded-lg p-5 cursor-pointer font-bold text-md hover:bg-green-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Comprar agora
        </button>
      </div>
    </>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Product from './Product'

interface List {
  products: {
    id: string
    name: string
    amount: string
    imageUrl: string
  }[]
}

export default function ProductList({ products }: List) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    },
  })

  return (
    <div ref={sliderRef} className="w-full h-full keen-slider">
      {products.map((product) => (
        <Link
          prefetch={false}
          key={product.id}
          href={`/product/${product.id}`}
          className="bg-gradient-to-b from-[#1EA483] from-0% to-[#7465D4] to-100% rounded-lg cursor-pointer relative flex items-center justify-center group overflow-hidden keen-slider__slide"
        >
          <Product
            id={product.id}
            amount={product.amount}
            imageUrl={product.imageUrl}
            name={product.name}
          />
        </Link>
      ))}
    </div>
  )
}

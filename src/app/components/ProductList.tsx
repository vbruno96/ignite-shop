'use client'

import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { formatedCurrency } from '@/utils/formatedCurrency'

interface List {
  products: {
    id: string
    name: string
    amount: number
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
        <a
          key={product.id}
          href="#"
          className="bg-gradient-to-b from-[#1EA483] from-0% to-[#7465D4] to-100% rounded-lg cursor-pointer relative flex items-center justify-center group overflow-hidden keen-slider__slide"
        >
          <Image
            src={product.imageUrl}
            width={520}
            height={480}
            alt=""
            className="object-cover"
          />
          <footer className="absolute bottom-1 left-1 right-1 rounded-md flex items-center justify-between bg-[rgba(0,0,0,0.6)] p-8 opacity-0 translate-y-[110%] transition-all ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
            <strong className="text-lg">{product.name}</strong>
            <span className="text-xl font-bold text-green-300">
              {formatedCurrency(product.amount)}
            </span>
          </footer>
        </a>
      ))}
    </div>
  )
}

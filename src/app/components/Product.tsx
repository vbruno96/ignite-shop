import { formatedCurrency } from '@/utils/formatedCurrency'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  amount: number
  imageUrl: string
}

export default function Product(product: Product) {
  return (
    <>
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
    </>
  )
}

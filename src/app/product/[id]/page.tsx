import { formatedCurrency } from '@/utils/formatedCurrency'
import { getProduct } from '@/utils/getProduct'
import Image from 'next/image'

export default async function Product({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  return (
    <div className="grid grid-cols-2 items-stretch gap-16 mx-auto my-0 max-w-[73.75rem]">
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
          {formatedCurrency(product.amount)}
        </span>
        <p className="mt-10 text-md text-gray-300">{product.description}</p>
        <button className="mt-auto bg-green-500 text-white rounded-lg p-5 cursor-pointer font-bold text-md hover:bg-green-300">
          Comprar agora
        </button>
      </div>
    </div>
  )
}

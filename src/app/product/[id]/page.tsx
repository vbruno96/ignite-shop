import ProductSingle from '@/app/components/ProductSingle'
import { getProduct } from '@/utils/getProduct'

export default async function Product({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  return (
    <div className="grid grid-cols-2 items-stretch gap-16 mx-auto my-0 max-w-[73.75rem]">
      <ProductSingle product={product} />
    </div>
  )
}

import { ProductType } from '@/types/product.types'

export default function ProductCard({ product }: { product: ProductType }) {
	return (
		<div className='p-3 bg-white rounded-[8px] flex flex-col'>
			<img src={product.image} className='aspect-square w-full' />
			<div className='flex flex-col grow'>
				<p className='text-lg font-bold mt-3'>{product.price} р.</p>
				<p className='text-base mt-3 grow'>{product.title}</p>
				<p className='text-sm mt-3 opacity-50'>
					{product.characteristics.brand}
				</p>
			</div>
		</div>
	)
}

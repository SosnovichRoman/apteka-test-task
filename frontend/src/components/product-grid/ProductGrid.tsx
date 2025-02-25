import { ProductType } from '@/types/product.types'
import ProductCard from '../product-card/ProductCard'

export default function ProductGrid({ products }: { products: ProductType[] }) {
	return (
		<div className='grid grid-cols-4 gap-4'>
			{products?.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	)
}

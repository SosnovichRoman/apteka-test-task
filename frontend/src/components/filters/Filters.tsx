import { ProductType } from '@/types/product.types'
import FilterCheckbox from './CheckboxFilter'
import PriceFilter from './PriceFilter'
import { checkboxFilters } from './constants'

export default function Filters({ products }: { products: ProductType[] }) {
	return (
		<div className='p-3 rounded-[8px] bg-white'>
			<PriceFilter products={products} />
			{checkboxFilters.map((checkboxFilter) => (
				<FilterCheckbox
					key={checkboxFilter.key}
					checkboxFilter={checkboxFilter}
					products={products}
				/>
			))}
		</div>
	)
}

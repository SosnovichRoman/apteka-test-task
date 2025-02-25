import useFilterStore from '@/stores/filter.store'
import { CheckboxFilterType } from '@/types/filter.types'
import { ProductType } from '@/types/product.types'
import { Checkbox } from '../ui/checkbox'

export default function CheckboxFilter({
	products,
	checkboxFilter,
}: {
	products: ProductType[]
	checkboxFilter: CheckboxFilterType
}) {
	const values = new Set(
		products
			.map((product) => product.characteristics[checkboxFilter.key])
			.filter((v) => typeof v === 'string')
	)

	const addCheckboxFilter = useFilterStore((state) => state.addCheckboxFilter)
	const deleteCheckboxFilter = useFilterStore(
		(state) => state.deleteCheckboxFilter
	)
	const checkedValues = useFilterStore((state) => state[checkboxFilter.key])

	return (
		<div className='py-4 border-t-[1px]'>
			<p className='text-lg font-bold'>{checkboxFilter.name}</p>
			<div className='space-y-1 mt-3 max-h-[280px] overflow-y-auto'>
				{[...values].map((v) => (
					<label
						key={v.toString()}
						className='flex items-center gap-3 cursor-pointer'
					>
						<Checkbox
							checked={checkedValues.includes(v)}
							onCheckedChange={(state) =>
								state
									? addCheckboxFilter(checkboxFilter.key, v)
									: deleteCheckboxFilter(checkboxFilter.key, v)
							}
						/>
						<span className='opacity-75'>{v}</span>
					</label>
				))}
			</div>
		</div>
	)
}

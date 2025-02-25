import { CheckboxFilterType } from '@/types/filter.types'
import { ProductType } from '@/types/product.types'
import FilterCheckbox from './CheckboxFilter'

const checkboxFilters: CheckboxFilterType[] = [
	{
		name: 'Бренд',
		key: 'brand',
	},
	{
		name: 'Форма выпуска',
		key: 'releaseForm',
	},
	{
		name: 'Дозировка',
		key: 'dossage',
	},
	{
		name: 'Количество в упаковке',
		key: 'quantityPerPackage',
	},
	{
		name: 'Страна производства',
		key: 'country',
	},
	{
		name: 'Температура хранения',
		key: 'storageTemperature',
	},
	{
		name: 'Срок годности',
		key: 'expirationDate',
	},
	{
		name: 'Рецептурный отпуск',
		key: 'isByPrescription',
	},
	{
		name: 'Производитель',
		key: 'manufacturer',
	},
]

export default function Filters({ products }: { products: ProductType[] }) {
	return (
		<div className='p-3 rounded-[8px] bg-white'>
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

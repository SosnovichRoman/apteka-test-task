import { CheckboxFilterType } from '@/types/filter.types'

export const checkboxFilters: CheckboxFilterType[] = [
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

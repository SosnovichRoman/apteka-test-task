import { ProductType } from '@/types/product.types'

export default function filterAndSort({
	products,
	minPrice,
	maxPrice,
	checkboxFilters,
	sort,
}: {
	products: ProductType[]
	minPrice: number | undefined
	maxPrice: number | undefined
	checkboxFilters: Record<keyof ProductType['characteristics'], string[]>
	sort: 'asc' | 'desc' | 'none'
}) {
	const filteredProducts = products?.filter((product) => {
		if (minPrice) {
			if (minPrice > product.price) return false
		}
		if (maxPrice) {
			if (maxPrice < product.price) return false
		}

		const filterGroups = (
			Object.keys(checkboxFilters) as Array<keyof typeof checkboxFilters>
		).map((key) => ({
			key: key,
			values: checkboxFilters[key],
		}))
		for (let i = 0; i < filterGroups.length; i++) {
			if (
				filterGroups[i].values.length > 0 &&
				!filterGroups[i].values.includes(
					product.characteristics[filterGroups[i].key] || ''
				)
			)
				return false
		}
		return true
	})

	const sortedProducts = filteredProducts.sort((a, b) => {
		if (sort === 'asc') return a.price - b.price
		if (sort == 'desc') return b.price - a.price
		return 1
	})
	return sortedProducts
}

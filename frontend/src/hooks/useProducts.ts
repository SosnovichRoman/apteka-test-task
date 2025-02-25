import productService from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'

export default function useProducts() {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['products'],
		queryFn: async () => await productService.getAll(),
		select: (data) =>
			data?.data.map((v) => ({
				...v,
				characteristics: {
					...v.characteristics,
					quantityPerPackage:
						v.characteristics.quantityPerPackage.toString() + ' шт',
					isByPrescription: v.characteristics.isByPrescription
						? 'По рецепту'
						: 'Без рецепта',
				},
			})),
	})
	return { products: data, isLoading, isError }
}

import productService from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'

export default function useProducts() {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['products'],
		queryFn: async () => await productService.getAll(),
	})
	return { products: data?.data, isLoading, isError }
}

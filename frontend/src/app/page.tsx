'use client'
import Filters from '@/components/filters/Filters'
import Header from '@/components/header/Header'
import ProductGrid from '@/components/product-grid/ProductGrid'
import ProductPagination from '@/components/product-pagination/ProductPagination'
import useProducts from '@/hooks/useProducts'
import useFilterStore from '@/stores/filter.store'
import useSortStore from '@/stores/sort.store'
import filterAndSort from '@/utils/filterAndSort'
import { useRouter, useSearchParams } from 'next/navigation'

import { useEffect } from 'react'

const PRODUCTS_PER_PAGE = 12

export default function Home() {
	const searchParams = useSearchParams()
	const router = useRouter()
	const { products, isLoading, isError } = useProducts()

	const sort = useSortStore((state) => state.sort)
	const store = useFilterStore()
	const sortedAndFilteredProducts = filterAndSort({
		products: products || [],
		minPrice: store.minPrice,
		maxPrice: store.maxPrice,
		checkboxFilters: store.checkboxFilters,
		sort,
	})
	useEffect(() => {
		router.push('/')
	}, [store])

	const totalPages = Math.ceil(
		(sortedAndFilteredProducts?.length || 0) / PRODUCTS_PER_PAGE
	)
	const currentPage = Number.parseInt(searchParams.get('page') || '') || 1

	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>Error</div>

	return (
		<main className=' bg-[rgb(244,246,250)]'>
			<div className='container py-20'>
				<Header />
				<div className='grid grid-cols-5 gap-4 items-start mt-10'>
					<Filters products={products || []} />
					<ProductGrid
						products={
							sortedAndFilteredProducts?.slice(
								(currentPage - 1) * 12,
								currentPage * 12
							) || []
						}
					/>
				</div>
				<ProductPagination totalPages={totalPages} currentPage={currentPage} />
			</div>
		</main>
	)
}

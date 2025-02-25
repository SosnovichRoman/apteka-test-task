'use client'
import Filters from '@/components/filters/Filters'
import ProductGrid from '@/components/product-grid/ProductGrid'
import ProductPagination from '@/components/product-pagination/ProductPagination'
import useProducts from '@/hooks/useProducts'
import { useSearchParams } from 'next/navigation'

const PRODUCTS_PER_PAGE = 12

export default function Home() {
	const searchParams = useSearchParams()
	const { products, isLoading, isError } = useProducts()
	const totalPages = Math.ceil((products?.length || 0) / PRODUCTS_PER_PAGE)
	const currentPage = Number.parseInt(searchParams.get('page') || '') || 1

	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>Error</div>

	return (
		<main className=' bg-[rgb(244,246,250)]'>
			<div className='container py-20'>
				<div className='grid grid-cols-5 gap-4 items-start'>
					<Filters products={products || []} />
					<ProductGrid
						products={
							products?.slice((currentPage - 1) * 12, currentPage * 12) || []
						}
					/>
				</div>
				<ProductPagination totalPages={totalPages} currentPage={currentPage} />
			</div>
		</main>
	)
}

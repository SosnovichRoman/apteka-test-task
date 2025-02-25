'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '../ui/pagination'

export default function ProductPagination({
	totalPages = 1,
	currentPage = 1,
}: {
	totalPages?: number
	currentPage?: number
}) {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString())
			params.set(name, value)
			return params.toString()
		},
		[searchParams]
	)

	const getPages = () => {
		const pages = []
		if (totalPages <= 5) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i)
			}
		} else {
			if (currentPage > 3) pages.push(1, '...')
			for (
				let i = Math.max(1, currentPage - 1);
				i <= Math.min(totalPages, currentPage + 1);
				i++
			) {
				pages.push(i)
			}
			if (currentPage < totalPages - 2) pages.push('...', totalPages)
		}
		return pages
	}

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						href={
							pathname +
							'?' +
							createQueryString('page', Math.min(1, currentPage - 1).toString())
						}
					/>
				</PaginationItem>
				{getPages().map((page, index) => (
					<PaginationItem key={index}>
						{page === '...' ? (
							<PaginationEllipsis />
						) : (
							<PaginationLink
								href={
									pathname + '?' + createQueryString('page', page.toString())
								}
								className={page === currentPage ? 'font-bold' : ''}
							>
								{page}
							</PaginationLink>
						)}
					</PaginationItem>
				))}
				<PaginationItem>
					<PaginationNext
						href={
							pathname +
							'?' +
							createQueryString(
								'page',
								Math.max(totalPages, currentPage - 1).toString()
							)
						}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
}

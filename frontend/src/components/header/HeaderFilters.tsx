import useFilterStore from '@/stores/filter.store'
import { X } from 'lucide-react'

export default function HeaderFilters() {
	const checkboxFilters = useFilterStore((store) => store.checkboxFilters)
	const deleteCheckboxFilter = useFilterStore(
		(state) => state.deleteCheckboxFilter
	)
	const filterGroups = (
		Object.keys(checkboxFilters) as Array<keyof typeof checkboxFilters>
	).map((key) => ({
		key: key,
		values: checkboxFilters[key],
	}))

	const minPrice = useFilterStore((store) => store.minPrice)
	const maxPrice = useFilterStore((store) => store.maxPrice)
	const setMinPrice = useFilterStore((store) => store.setMinPrice)
	const setMaxPrice = useFilterStore((store) => store.setMaxPrice)

	const resetStore = useFilterStore((store) => store.resetStore)
	const isNotEmpty =
		minPrice ||
		maxPrice ||
		filterGroups.map((group) => group.values).flat().length > 0

	return (
		<div className='flex flex-wrap gap-x-4 gap-y-2'>
			{isNotEmpty && (
				<button
					type='button'
					onClick={() => resetStore()}
					className='bg-[#eaeef4] rounded-full text-sm px-2 py-1 flex gap-2 items-center hover:line-through'
				>
					<span>Очистить</span>
					<X size={14} opacity={0.6} />
				</button>
			)}
			{minPrice && (
				<button
					key={minPrice}
					type='button'
					onClick={() => setMinPrice(undefined)}
					className='bg-[#eaeef4] rounded-full text-sm px-2 py-1 flex gap-2 items-center hover:line-through'
				>
					<span>{minPrice} р.</span>
					<X size={14} opacity={0.6} />
				</button>
			)}
			{maxPrice && (
				<button
					key={maxPrice}
					type='button'
					onClick={() => setMaxPrice(undefined)}
					className='bg-[#eaeef4] rounded-full text-sm px-2 py-1 flex gap-2 items-center hover:line-through'
				>
					<span>{maxPrice} р.</span>
					<X size={14} opacity={0.6} />
				</button>
			)}
			{filterGroups.map((group) => {
				return group.values.map((v) => (
					<button
						key={v}
						type='button'
						onClick={() => deleteCheckboxFilter(group.key, v)}
						className='bg-[#eaeef4] rounded-full text-sm px-2 py-1 flex gap-2 items-center hover:line-through'
					>
						<span>{v}</span>
						<X size={14} opacity={0.6} />
					</button>
				))
			})}
		</div>
	)
}

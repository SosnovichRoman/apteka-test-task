import useSortStore from '@/stores/sort.store'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select'

export default function HeaderSort() {
	const setSort = useSortStore((state) => state.setSort)
	return (
		<Select
			onValueChange={(value) => setSort(value as 'asc' | 'desc' | 'none')}
		>
			<SelectTrigger className='shrink-0 w-[200px] bg-[#eaeef4] rounded-[4px] px-4 py-2 flex gap-2 items-center'>
				<SelectValue placeholder='По релевантности' />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='none'>По релевантности</SelectItem>
				<SelectItem value='asc'>Сначала дешевые</SelectItem>
				<SelectItem value='desc'>Сначала дорогие</SelectItem>
			</SelectContent>
		</Select>
	)
}

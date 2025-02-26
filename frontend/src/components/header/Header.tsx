import HeaderFilters from './HeaderFilters'
import HeaderSort from './HeaderSort'

export default function Header() {
	return (
		<div className='flex justify-between gap-5'>
			<HeaderFilters />
			<HeaderSort />
		</div>
	)
}

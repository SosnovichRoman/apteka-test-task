import HeaderFilters from './HeaderFilters'

export default function Header() {
	return (
		<div className='flex justify-between gap-5'>
			<HeaderFilters />
			<div className='shrink-0'></div>
		</div>
	)
}

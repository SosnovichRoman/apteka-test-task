import useFilterStore from '@/stores/filter.store'
import { ProductType } from '@/types/product.types'
import { Slider } from '../ui/slider'

export default function PriceFilter({ products }: { products: ProductType[] }) {
	const min = Math.min(...products.map((p) => p.price))
	const max = Math.max(...products.map((p) => p.price))

	const minPrice = useFilterStore((state) => state.minPrice)
	const maxPrice = useFilterStore((state) => state.maxPrice)

	const setMinPrice = useFilterStore((state) => state.setMinPrice)
	const setMaxPrice = useFilterStore((state) => state.setMaxPrice)

	return (
		<div className='py-4'>
			<p className='text-lg font-bold'>Цена</p>
			<div className='mt-3'>
				<div className='grid grid-cols-2 gap-3'>
					<label className='bg-[rgb(244,246,250)] rounded-[4px] relative'>
						<span className='opacity-70 absolute top-1/2 left-2 -translate-y-1/2'>
							от
						</span>
						<input
							className='w-full bg-transparent py-1 pl-8 pr-2'
							type='number'
							min={min}
							max={maxPrice || max}
							placeholder={`${min}`}
							value={minPrice || ''}
							onChange={(e) =>
								setMinPrice(Number.parseFloat(e.target.value) || undefined)
							}
						/>
					</label>
					<label className='bg-[rgb(244,246,250)] rounded-[4px] relative'>
						<span className='opacity-70 absolute top-1/2 left-2 -translate-y-1/2'>
							до
						</span>
						<input
							className='w-full bg-transparent py-1 pl-8 pr-2'
							type='number'
							min={minPrice || min}
							max={max}
							placeholder={`${max}`}
							value={maxPrice || ''}
							onChange={(e) =>
								setMaxPrice(Number.parseFloat(e.target.value) || undefined)
							}
						/>
					</label>
				</div>
				<label className='flex items-center gap-3 cursor-pointer mt-3'>
					<Slider
						step={0.01}
						max={max}
						min={min}
						defaultValue={[min, max]}
						// TODO: можно оптимизировать
						onValueChange={(v) => {
							setMinPrice(v[0])
							setMaxPrice(v[1])
						}}
						value={[minPrice || min, maxPrice || max]}
					/>
				</label>
			</div>
		</div>
	)
}

import { ProductType } from './product.types'

export type CheckboxFilterType = {
	name: string
	key: keyof ProductType['characteristics']
}

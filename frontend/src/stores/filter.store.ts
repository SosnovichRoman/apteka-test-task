import { ProductType } from '@/types/product.types'
import { create } from 'zustand'

type FilterStore = {
	minPrice?: number
	maxPrice?: number
	checkboxFilters: Record<keyof ProductType['characteristics'], string[]>

	setMinPrice: (value: number | undefined) => void
	setMaxPrice: (value: number | undefined) => void
	addCheckboxFilter: (
		key: keyof ProductType['characteristics'],
		value: string
	) => void
	deleteCheckboxFilter: (
		key: keyof ProductType['characteristics'],
		value: string
	) => void
	resetStore: () => void
}

const useFilterStore = create<FilterStore>()((set) => ({
	minPrice: undefined,
	maxPrice: undefined,
	checkboxFilters: {
		country: [],
		brand: [],
		dossage: [],
		releaseForm: [],
		storageTemperature: [],
		quantityPerPackage: [],
		expirationDate: [],
		isByPrescription: [],
		manufacturer: [],
	},

	setMinPrice: (value: number | undefined) =>
		set((state) => ({ ...state, minPrice: value })),
	setMaxPrice: (value: number | undefined) =>
		set((state) => ({ ...state, maxPrice: value })),
	addCheckboxFilter: (
		key: keyof ProductType['characteristics'],
		value: string
	) =>
		set((state) => ({
			...state,
			checkboxFilters: {
				...state.checkboxFilters,
				[key]: [...state.checkboxFilters[key], value],
			},
		})),
	deleteCheckboxFilter: (
		key: keyof ProductType['characteristics'],
		value: string
	) =>
		set((state) => ({
			...state,
			checkboxFilters: {
				...state.checkboxFilters,
				[key]: state.checkboxFilters[key].filter((v) => v !== value),
			},
		})),
	resetStore: () =>
		set((state) => ({
			...state,
			minPrice: undefined,
			maxPrice: undefined,
			checkboxFilters: {
				country: [],
				brand: [],
				dossage: [],
				releaseForm: [],
				storageTemperature: [],
				quantityPerPackage: [],
				expirationDate: [],
				isByPrescription: [],
				manufacturer: [],
			},
		})),
}))

export default useFilterStore

import { CheckboxFilterType } from '@/types/filter.types'
import { create } from 'zustand'

type FilterStore = {
	minPrice?: number
	maxPrice?: number
	checkboxFilters: {
		country: string[]
		brand: string[]
		dossage: string[]
		releaseForm: string[]
		storageTemperature: string[]
		quantityPerPackage: string[]
		expirationDate: string[]
		isByPrescription: string[]
		manufacturer: string[]
	}

	setMinPrice: (value: number | undefined) => void
	setMaxPrice: (value: number | undefined) => void
	addCheckboxFilter: (key: CheckboxFilterType['key'], value: string) => void
	deleteCheckboxFilter: (key: CheckboxFilterType['key'], value: string) => void
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
	addCheckboxFilter: (key: CheckboxFilterType['key'], value: string) =>
		set((state) => ({
			...state,
			checkboxFilters: {
				...state.checkboxFilters,
				[key]: [...state.checkboxFilters[key], value],
			},
		})),
	deleteCheckboxFilter: (key: CheckboxFilterType['key'], value: string) =>
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

import { CheckboxFilterType } from '@/types/filter.types'
import { create } from 'zustand'

type FilterStore = {
	country: string[]
	brand: string[]
	dossage: string[]
	releaseForm: string[]
	storageTemperature: string[]
	quantityPerPackage: string[]
	expirationDate: string[]
	isByPrescription: string[]
	manufacturer: string[]
	addCheckboxFilter: (key: CheckboxFilterType['key'], value: string) => void
	deleteCheckboxFilter: (key: CheckboxFilterType['key'], value: string) => void
}

const useFilterStore = create<FilterStore>()((set) => ({
	country: [],
	brand: [],
	dossage: [],
	releaseForm: [],
	storageTemperature: [],
	quantityPerPackage: [],
	expirationDate: [],
	isByPrescription: [],
	manufacturer: [],

	addCheckboxFilter: (key: CheckboxFilterType['key'], value: string) =>
		set((state) => ({ ...state, [key]: [...state[key], value] })),
	deleteCheckboxFilter: (key: CheckboxFilterType['key'], value: string) =>
		set((state) => ({
			...state,
			[key]: state[key].filter((v) => v !== value),
		})),
}))

export default useFilterStore

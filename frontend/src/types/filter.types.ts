export type FiltersType = {
	country?: string[]
	brand?: string[]
	dossage?: string[]
	releaseForm?: string[]
	storageTemperature?: string[]
	quantityPerPackage?: string[]
	expirationDate?: string[]
	isByPrescription?: boolean[]
	manufacturer?: string[]
}

export type CheckboxFilterType = {
	name: string
	key:
		| 'country'
		| 'brand'
		| 'dossage'
		| 'releaseForm'
		| 'storageTemperature'
		| 'quantityPerPackage'
		| 'expirationDate'
		| 'isByPrescription'
		| 'manufacturer'
}

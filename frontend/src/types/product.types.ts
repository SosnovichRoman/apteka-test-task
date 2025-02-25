export type ProductServerType = {
	id: number
	title: string
	price: number
	image: string
	characteristics: {
		country: string
		brand: string
		dossage: string
		releaseForm: string
		storageTemperature: string
		quantityPerPackage: number
		expirationDate: string
		isByPrescription: boolean
		manufacturer: string
	}
}

export type ProductType = {
	id: number
	title: string
	price: number
	image: string
	characteristics: {
		country: string
		brand: string
		dossage: string
		releaseForm: string
		storageTemperature: string
		quantityPerPackage: string
		expirationDate: string
		isByPrescription: string
		manufacturer: string
	}
}

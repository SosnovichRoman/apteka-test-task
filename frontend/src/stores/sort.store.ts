import { create } from 'zustand'

type FilterStore = {
	sort: 'asc' | 'desc' | 'none'
	setSort: (sort: 'asc' | 'desc' | 'none') => void
}

const useSortStore = create<FilterStore>()((set) => ({
	sort: 'none',
	setSort: (sort) => set((state) => ({ ...state, sort: sort })),
}))

export default useSortStore

import { ProductType } from '@/types/product.types'
import axios from 'axios'

class ProductService {
	private BASE_URL = 'http://localhost:9080/api/products'

	getAll() {
		return axios.get<ProductType[]>(this.BASE_URL)
	}
}

export default new ProductService()

import { ramas_fake } from '../mocks/ramas'
import { Rama } from '../types'
export class RamasServices {
	static getAllRamas(): Promise<Rama[]> {
		return Promise.resolve(ramas_fake as Rama[])
	}
}

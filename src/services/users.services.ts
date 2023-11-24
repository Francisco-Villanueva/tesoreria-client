import { users } from '../mocks/users.json'
import { User } from '../types'
export class UserServices {
	static getAllUsers(): Promise<User[]> {
		return Promise.resolve(users as User[])
	}
}

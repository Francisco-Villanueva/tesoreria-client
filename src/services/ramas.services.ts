import { ramas_fake } from "../mocks/ramas";
export class RamasServices {
  static async getAllRamas() {
    return ramas_fake;
  }
}

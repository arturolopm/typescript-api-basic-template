import { Car } from './../interfaces/car.interface'
import ItemModel from '../models/item'

const getOrders = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id })
  return responseItem
}

export { getOrders }

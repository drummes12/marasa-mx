import facadeCaracol from '@/assets/images/facades/fachada_frontal.jpg'
import facadeCoral from '@/assets/images/facades/fachada_frontal.jpg'
import inventoryRaw from '@/assets/inventory-data.json'
import plusModelDataRaw from '@/assets/plus-model-data.json'
import { parsePrice } from '@/utils'

export const plusModelData = plusModelDataRaw

export const inventoryData = inventoryRaw.map(
  ({ model, price, priceRooftop, ...restData }) => ({
    image: model === 'caracol' ? facadeCaracol : facadeCoral,
    model,
    price: `$${parsePrice(price)}`,
    priceRooftop: `$${parsePrice(priceRooftop)}`,
    ...restData
  })
)

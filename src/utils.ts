export const parseArea = (area: string) =>
  parseFloat(area.replace(' m2', '').replace(',', '.'))

export const parsePrice = (price: string) =>
  parseFloat(
    price.replace(/\./g, '').replace(',', '.').replace('$', '').trim()
  ).toLocaleString('en-US', { minimumFractionDigits: 2 })

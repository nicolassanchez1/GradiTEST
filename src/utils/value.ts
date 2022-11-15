export const formatMoney = (value: number) => `$ ${new Intl.NumberFormat('en-EN').format(value)}`

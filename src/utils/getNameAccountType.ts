export const getNameAccountType = (type: string) => {
  const typeUpperCase = type.toUpperCase()
  if (typeUpperCase === 'CC') return 'Cuenta Corriente'
  if (typeUpperCase === 'CA') return 'Caja de Ahorro'
  return ''
}

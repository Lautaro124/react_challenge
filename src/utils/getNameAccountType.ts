export const getNameAccountType = (type: string) => {
  if (type === 'CC') return 'Cuenta Corriente'
  if (type === 'CA') return 'Caja de Ahorro'
  return ''
}

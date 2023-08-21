// Funcion para obtener el nombre completo del tipo de cuenta
export const getNameAccountType = (type: string): string => {
  // Convertir el código a mayúsculas para asegurarse de la comparación sin distinción de mayúsculas y minúsculas
  const typeUpperCase = type.toUpperCase()
  // Comprobar si el código coincide con 'CC'
  if (typeUpperCase === 'CC') return 'Cuenta Corriente'

  // Comprobar si el código coincide con 'CA'
  if (typeUpperCase === 'CA') return 'Caja de Ahorro'

  // Si no se encuentra ningún tipo de cuenta válido, devolver una cadena vacía
  return ''
}

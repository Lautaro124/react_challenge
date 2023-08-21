// Funcion para calcular la cantidad de items por pagina, esto lo realiza fijandose la pagina actual y la cantidad de items
export const calculateItemsPerPage = (currentPage: number, totalItems: number) => {
  if (currentPage !== 0 && totalItems > 6) return 4
  if (totalItems > 6) return 5
  return totalItems
}

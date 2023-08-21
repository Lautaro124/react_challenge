export const calculateItemsPerPage = (currentPage: number, totalItems: number) => {
  if (currentPage !== 0 && totalItems > 6) return 4
  if (totalItems > 6) return 5
  return totalItems
}

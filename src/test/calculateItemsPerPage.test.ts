import { expect, test } from 'vitest'
import { calculateItemsPerPage } from '../utils/calculateItemsPerPage'

test('Test to calculateItemsPerPage get Items per page', () => {
  expect(calculateItemsPerPage(0, 4)).toBe(4)
  expect(calculateItemsPerPage(1, 9)).toBe(4)
  expect(calculateItemsPerPage(0, 9)).toBe(5)
  expect(calculateItemsPerPage(10, 1)).toBe(1)
})

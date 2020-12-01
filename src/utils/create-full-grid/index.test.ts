import createFullGrid from './'

describe('createFullGrid', () => {
  it('이론적으로는 값 범위가 1에서 9까지 인 9x9 그리드를 반환합니다.', () => {
    const grid = createFullGrid()
    for (const row in grid) {
      for (const col in grid[row]) {
        // 1 보다 크거나 같다
        expect(grid[row][col]).toBeGreaterThanOrEqual(1)
        expect(grid[row][col]).toBeLessThanOrEqual(9)
      }
    }
  })
})

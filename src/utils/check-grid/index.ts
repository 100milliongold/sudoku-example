import { GRID } from 'typings'

/**
 * 그리드가 있는지 확인하는 기능이라고 말합니다.
 * @param grid  0 ~ 9 까지의 3x3 의 정사각형
 */
function checkGrid(grid: GRID): boolean {
  for (let i = 0; i < 9; i++)
    for (let j = 0; j < 9; j++) if (grid[i][j] === 0) return false
  return true
}

export default checkGrid

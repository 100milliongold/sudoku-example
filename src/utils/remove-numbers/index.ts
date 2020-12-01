import { GRID } from 'typings'
import { getRandomIndex } from 'utils'
/**
 * 이것은 기본적으로 전체 그리드에서 숫자를 제거하여 스도쿠 퍼즐을 생성합니다.
 * @param grid 9 X 9 크기의 스도쿠 퍼즐
 * @param attemps 해결 시도 횟수 (숫자가 높으면 더 어려워짐) 기본 5
 */
function removeNumbers(grid: GRID, attemps = 5): GRID {
  while (attemps > 0) {
    let row = getRandomIndex()
    let col = getRandomIndex()

    while (grid[row][col] === 0) {
      row = getRandomIndex()
      col = getRandomIndex()
    }

    const backup = grid[row][col]
    grid[row][col] = 0

    // copy grid

    // set a global counter
    // attempt to solve the grid

    // if global counter is not 1
    //   grid[row][col] = backup
    //   decrement attempts
  }

  return grid
}

export default removeNumbers

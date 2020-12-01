import { GRID, NUMBERS } from '../../typings'
import {
  shuffle,
  isInRow,
  isInCol,
  isInSquare,
  identifySquare,
  checkGrid,
} from 'utils'

const gridExample: GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],

  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],

  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * 가능한 모든 철자를 검사하는 역 추적 / 재귀 함수 답을 찾을 때까지 철자를 맞추기 전까지의 숫자 조합.
 * @param grid 9x9 스도쿠 그리드
 */

function fillGrid(grid: GRID) {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffle(numbers)

      for (let value of numbers) {
        if (!isInRow({ grid, row, value }))
          if (!isInCol({ col, grid, value })) {
            // 해당 배열은 정사각형의 배열인가?
            const square = identifySquare({ col, grid, row })
            // 그리드 행에 없는지 확인하고 그리드 열에 없는지 확인
            if (!isInSquare({ square, value })) {
              grid[row][col] = value
              if (checkGrid(grid)) return true
              else if (fillGrid(grid)) return true
              // 만약 값이 다채웠졌으면 종료
              // 배열을 적용하고 다시 실행
            }
          }
      }

      break
    }
  }

  grid[row][col] = 0
}

export default fillGrid

import { GRID, NUMBERS } from '../../typings'
import { shuffle } from 'utils'

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

      for (const value of numbers) {

        if (grid[row].includes(value)) {
          let isNotInCol = false;
          for (let i = 0; i < 9; i++) {
            if(value === grid[i][col]) { isNotInCol = false;}
          }
          if(isNotInCol){

          }

          // 그리드 행에 없는지 확인하고 그리드 열에 없는지 확인
          grid[row][col] = value
        }

        break
      }
    }
  }

  grid[row][col] = 0
}

export default fillGrid

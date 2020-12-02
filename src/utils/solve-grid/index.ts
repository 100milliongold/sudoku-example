import global from 'global'
import { GRID, NUMBERS } from 'typings'
import { checkGrid, identifySquare, isInCol, isInRow, isInSquare } from 'utils'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * 역추적 슬래시 필기체 입니다.
 * @param grid  0 ~ 9 까지의 값으로 구성된  9 X 9  배열
 */
function solveGrid(grid: GRID) {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      for (const value of numbers) {
        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ grid, col, value })) {
            const square = identifySquare({ col, grid, row })
            if (!isInSquare({ square, value })) {
              grid[row][col] = value
              if (checkGrid(grid)) {
                global.counter++
                break
              } else if (solveGrid(grid)) return true
            }
          }
        }
      }
      break
    }
  }
  grid[row][col] = 0
}

export default solveGrid
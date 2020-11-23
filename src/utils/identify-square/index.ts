import { GRID, SQUARE } from 'typings'

interface IInput {
  col: number
  grid: GRID
  row: number
}

/**
 * 현재의 사각형 입력을 내가 조작하지 않고 돌려주는 함수이며 연속해서 주어진 스도쿠 그리드의 제곱과 컬럼 인덱스가 된다
 * @param input 입력은 9 X 9 스도쿠 그리드 행 인덱스와 컬럼 인덱스를 가진 객체가 될 것이다.
 */
function identifyWorkingSquare({ col, grid, row }: IInput): SQUARE {
  const square = []
  if (row < 3) {
    if (col < 3)
      for (let x = 0; x < 3; x++)
        square.push([grid[x][0], grid[x][1], grid[x][2]])
    else if (col < 6)
      for (let x = 0; x < 3; x++)
        square.push([grid[x][3], grid[x][4], grid[x][5]])
    else
      for (let x = 0; x < 3; x++)
        square.push([grid[x][6], grid[x][7], grid[x][8]])
  } else if (row < 6) {
    if (col < 3)
      for (let x = 3; x < 6; x++)
        square.push([grid[x][0], grid[x][1], grid[x][2]])
    else if (col < 6)
      for (let x = 3; x < 6; x++)
        square.push([grid[x][3], grid[x][4], grid[x][5]])
    else
      for (let x = 3; x < 6; x++)
        square.push([grid[x][6], grid[x][7], grid[x][8]])
  } else {
    if (col < 3)
      for (let x = 6; x < 9; x++)
        square.push([grid[x][0], grid[x][1], grid[x][2]])
    else if (col < 6)
      for (let x = 6; x < 9; x++)
        square.push([grid[x][3], grid[x][4], grid[x][5]])
    else
      for (let x = 6; x < 9; x++)
        square.push([grid[x][6], grid[x][7], grid[x][8]])
  }

  return square as SQUARE
}

export default identifyWorkingSquare

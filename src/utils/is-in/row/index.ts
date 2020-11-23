import { GRID, NUMBERS } from 'typings'

interface IInput {
  grid: GRID
  row: number
  value: NUMBERS
}
/**
 * 행에 값이 없는가? - 값이 이미 존재하는 경우 true를 반환하는 함수입니다.
 * 현재 그리드 행에서 이미 사용되고 있습니다.
 * @param input 겍체가 9x9 스도쿠의 행에 속하는지 확인
 */
function isInRow({ grid, row, value }: IInput): boolean {
  return grid[row].includes(value)
}

export default isInRow

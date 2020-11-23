import { SQUARE } from 'typings'
import isInSquare from './'

describe('isInSquare', () => {
  it('만약 입력된 값이 정사각형 배열에 들어가면 참을 반환하는지 테스트', () => {
    const square: SQUARE = [
      [1, 3, 4],
      [8, 2, 7],
      [6, 9, 5],
    ]

    expect(isInSquare({ square, value: 1 })).toBeTruthy()
    expect(isInSquare({ square, value: 9 })).toBeTruthy()
  })

  it('만약 입력된 값이 정사각형 배열에 없으면 거짓을 반환하는지 테스트', () => {
    const square: SQUARE = [
      [0, 3, 4],
      [8, 2, 7],
      [6, 0, 5],
    ]

    expect(isInSquare({ square, value: 1 })).toBeFalsy()
    expect(isInSquare({ square, value: 9 })).toBeFalsy()
  })
})

import shuffle from './index'

describe('셔플 테스트', () => {
  it('셔플 매서드를 실행하고도 같은 길이의 배열을 반환하는가?', () => {
    const array = [1, 2, 3]
    shuffle(array)
    expect(array).toHaveLength(3)
  })

  it('동일한 요소가 자주 섞여있는 배열을 반환하는가', () => {
    const array = [1, 2, 3]
    shuffle(array)
    console.log(array)

    expect(array).toContain(1)
    expect(array).toContain(2)
    expect(array).toContain(3)
  })
})

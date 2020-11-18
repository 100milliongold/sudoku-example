/**
 * 배열 셔플 링 함수 - 피셔 예이츠 셔플 알고리즘
 * @param array 실제로 섞고 싶은 배열
 */
export function shuffle(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

export default shuffle

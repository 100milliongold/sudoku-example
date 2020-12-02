/**
 * 이것은 모든 차원의 배열과 다시 비교한다
 * 따라서 차원을 발견 할 수 있으면 다단계 차원이 있고 그렇지 않으면 동일한 배열이면 true를 반환합니다.
 * 동일한 배열이 아니면 거짓을 반환
 * @param arr1 비교할 첫 번째 배열입니다
 * @param arr2 비교할 두 번째 배열입니다
 */
function compareArrays(arr1: any[], arr2: any[]): boolean {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) return arr1 === arr2

  if (arr1.length !== arr2.length) return false

  for (let i = 0, len = arr1.length; i < len; i++) {
    if (compareArrays(arr1[i], arr2[i])) return false
  }

  return true
}

export default compareArrays

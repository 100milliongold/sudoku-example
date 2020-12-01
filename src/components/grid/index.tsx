import React, { FC, Children, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
// import { fillGrid, createFullGrid } from 'utils'
// import { GRID } from 'typings'

import Block from './block'
import { INDEX } from 'typings'
import { Container, Row } from './styles'
import { createGrid } from 'reducers'

const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])
  /**
   * 2번째 인자의 변수 추가시 해당 변수가 변할때 렌더링 발생
   * 빈 배열이면 compoenetDidMount 와 유사하게 작동
   */
  useEffect(() => {
    create()
  }, [create])

  // 체크 포인트
  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block 
                  colIndex={colIndex as INDEX} 
                  rowIndex={rowIndex as INDEX} 
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid

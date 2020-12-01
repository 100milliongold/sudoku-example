import React, { FC, Children, useCallback, useEffect } from 'react'
import useMousetrap from 'react-hook-mousetrap'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
// import { fillGrid, createFullGrid } from 'utils'
// import { GRID } from 'typings'

import Block from './block'
import { INDEX, BLOCK_COORDS } from 'typings'
import { Container, Row } from './styles'
import { createGrid, IReducer, selectBlock } from 'reducers'

interface IState {
  selectedBlock?: BLOCK_COORDS
}

const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(({ selectedBlock }) => ({
    selectedBlock,
  }))
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])
  /**
   * 2번째 인자의 변수 추가시 해당 변수가 변할때 렌더링 발생
   * 빈 배열이면 compoenetDidMount 와 유사하게 작동
   */
  useEffect(() => {
    create()
  }, [create])

  function moveDown() {
    if (state.selectedBlock && state.selectedBlock[0] < 8)
      dispatch(
        selectBlock([
          (state.selectedBlock[0] + 1) as INDEX,
          state.selectedBlock[1],
        ])
      )
  }

  function moveLeft() {
    if (state.selectedBlock && state.selectedBlock[1] > 0)
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] - 1) as INDEX,
        ])
      )
  }

  function moveRight() {
    if (state.selectedBlock && state.selectedBlock[1] < 8)
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] + 1) as INDEX,
        ])
      )
  }

  function moveUp() {
    if (state.selectedBlock && state.selectedBlock[0] > 0)
      dispatch(
        selectBlock([
          (state.selectedBlock[0] - 1) as INDEX,
          state.selectedBlock[1],
        ])
      )
  }

  useMousetrap('down', moveDown)
  useMousetrap('left', moveLeft)
  useMousetrap('right', moveRight)
  useMousetrap('up', moveUp)

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

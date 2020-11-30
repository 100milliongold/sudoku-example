import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Container } from './styles'

import { N } from 'typings'
import { IReducer } from 'reducers'

interface IProps {
  colIndex: number
  rowIndex: number
}

interface IState {
  value: N
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(({ grid }) => ({
    value: grid ? grid[rowIndex][colIndex] : 0,
  }))

  return (
    <Container data-cy={`block-${rowIndex}-${colIndex}`}>
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block

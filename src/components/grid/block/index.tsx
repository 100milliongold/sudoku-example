import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch, AnyAction } from "redux";
import { Container } from './styles'

import { N , INDEX} from 'typings'
import { IReducer , selectBlock } from 'reducers'

interface IProps {
  colIndex: INDEX
  rowIndex: INDEX
}

interface IState {
  value: N
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(({ grid }) => ({
    value: grid ? grid[rowIndex][colIndex] : 0,
  }))

  const dispatch = useDispatch<Dispatch<AnyAction>>()

  function handlerclick(){
    dispatch(selectBlock([rowIndex, colIndex]))
  }

  return (
    <Container data-cy={`block-${rowIndex}-${colIndex}`} onClick={handlerclick}>
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block

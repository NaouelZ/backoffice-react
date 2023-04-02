import { RxCross2 } from 'react-icons/rx'
import { IoMdAdd } from 'react-icons/io'
import { useState } from 'react';
import Board, {moveCard, moveColumn, removeCard, addCar} from '@asseinfo/react-kanban';
import "@asseinfo/react-kanban/dist/styles.css"
import useBoard from '../../store/Trello';
import './Board.css'

const Trello = () => {
  const { board, setBoard } = useBoard()

    const handleColumnMove = (_card, source, destination) => {
        const updatedBoard = moveColumn(board, source, destination)
        setBoard(updatedBoard)
    }

    const handleCardMove = (_card, source, destination) => {
        const updatedBoard = moveCard(board, source, destination)
        setBoard(updatedBoard)

    }

    const getColumn = (card) => {
        const column = board.columns.filter((column) => column.cards.includes(card))
        return column[0]
    }

  return (
    <div className="trello-container">
    <Board
        allowAddColumn
        allowRenameColumn
        allowRemoveCard
        onCardDragEnd={handleCardMove}
        onColumnDragEnd={handleColumnMove}
        renderCard={(props) => (
          <div className='trello-card'>
              <div>
                  <span>
                      {props.title}
                  </span>
                  <button className='remove-button' type='button'
                      onClick={() => {
                          const updatedBoard = removeCard(board,
                              getColumn(props),
                              props
                          )
                          setBoard(updatedBoard)
                      }}
                  >
                      <RxCross2 color="var(--dark-blue)" size={15} />
                  </button>
              </div>
              <span>{props.description}</span>
          </div>
      )}
      renderColumnHeader={(props) => (
        <div className='column-header'>
          <span>{props.title}</span>
        </div>)}
    >
        {board}
    </Board>
</div>
  )
}

export default Trello
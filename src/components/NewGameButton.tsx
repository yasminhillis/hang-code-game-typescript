import type { JSX } from 'react'; 

type NewGameButtonProps = {
    isGameOver: boolean, 
    startNewGame: () => void
}

export default function NewGameButton({ isGameOver, startNewGame }: NewGameButtonProps): JSX.Element | false{
    return (
        isGameOver &&
              <button
                  className="new-game"
                  onClick={startNewGame}
              >New Game</button>
    )
}
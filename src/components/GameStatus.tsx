import clsx from "clsx"
import { getFarewellText } from "../utils"
import { languages } from "../languages"
import type { JSX } from 'react'; 

type GameStatusProps = { 
    isGameLost: boolean, 
    isGameOver: boolean, 
    isGameWon: boolean, 
    isLastGuessIncorrect: boolean, 
    wrongGuessCount: number
}

export default function GameStatus({ 
    isGameLost, 
    isGameOver, 
    isGameWon, 
    isLastGuessIncorrect, 
    wrongGuessCount
}: GameStatusProps): JSX.Element {
    const gameStatusClass: string = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGuessIncorrect
    })

    return (
        <section
            aria-live="polite"
            role="status"
            className={gameStatusClass}
        >

        {!isGameOver && isLastGuessIncorrect && (
            <p className="farewell-message">
                {getFarewellText(languages[wrongGuessCount - 1].name)}
            </p>

        )}
                               
        {isGameWon && (
            <>
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </>
        )}
                        
        {isGameLost && (
            <>
                <h2>Game over!</h2>
                <p>You lose! Better start learning Assembly 😭</p>
            </>
        )}
                         
        </section>
    )
}
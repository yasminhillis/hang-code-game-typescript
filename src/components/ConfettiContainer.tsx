
import Confetti from 'react-confetti'; 
import type { JSX } from 'react'; 

export default function ConfettiContainer( {isGameWon}: {isGameWon: boolean} ): false | JSX.Element{
    return (
        isGameWon && 
                      <Confetti
                          recycle={false}
                          numberOfPieces={1000}
                      />
    )
}
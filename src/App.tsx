import { useState } from "react"
import { languages } from "./languages"
import { getRandomWord } from "./utils"

import ConfettiContainer from "./components/ConfettiContainer"
import Header from './components/Header'
import GameStatus from "./components/GameStatus"
import WordLetters from "./components/WordLetters"
import AriaLiveStatus from "./components/AriaLiveStatus"
import Keyboard from "./components/Keyboard"
import NewGameButton from "./components/NewGameButton"
import LanguageChips from "./components/LanguageChips"

export default function AssemblyEndgame() {
    // State values
    const [currentWord, setCurrentWord] = useState<string>((): string => getRandomWord())
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    // Derived values
    const numGuessesLeft = languages.length - 1
    const wrongGuessCount =
        guessedLetters.filter(letter => !currentWord.includes(letter)).length
    const isGameWon =
        currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= numGuessesLeft
    const isGameOver = isGameWon || isGameLost
    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
    const isLastGuessIncorrect: boolean = Boolean(lastGuessedLetter && !currentWord.includes(lastGuessedLetter))

    // Static values
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function addGuessedLetter(letter: string): void {
        setGuessedLetters((prevLetters: string[]): string[] =>
            prevLetters.includes(letter) ?
                prevLetters :
                [...prevLetters, letter]
        )
    }
  
    function startNewGame() {
        setCurrentWord(getRandomWord())
        setGuessedLetters([])
    }

    return (

      <main>
        <ConfettiContainer isGameWon={isGameWon}/>
        <Header />
        <GameStatus 
          isGameWon={isGameWon}
          isGameLost={isGameLost}
          isGameOver={isGameOver}
          isLastGuessIncorrect={isLastGuessIncorrect}
          wrongGuessCount={wrongGuessCount}
        />

        <LanguageChips languages={languages} wrongGuessCount={wrongGuessCount} />  

        <WordLetters
            currentWord={currentWord}
            isGameLost={isGameLost}
            guessedLetters={guessedLetters}
        />
          
        <AriaLiveStatus
            currentWord={currentWord} 
            lastGuessedLetter={lastGuessedLetter} 
            numGuessesLeft={numGuessesLeft}
            guessedLetters={guessedLetters}
        /> 

        <Keyboard 
            alphabet={alphabet} 
            guessedLetters={guessedLetters} 
            currentWord={currentWord}
            isGameOver={isGameOver} 
            addGuessedLetter={addGuessedLetter}
        />           

        <NewGameButton 
            startNewGame={startNewGame}
            isGameOver={isGameOver}
        />
      </main>
    )
}

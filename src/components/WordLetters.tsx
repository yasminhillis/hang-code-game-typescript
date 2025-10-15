import clsx from "clsx"
import type { JSX } from 'react';

type WordLettersProps = {
    currentWord: string, 
    isGameLost: boolean, 
    guessedLetters: string[]
}
export default function WordLetters({currentWord, isGameLost, guessedLetters }: WordLettersProps): JSX.Element{
    const letterElements = currentWord.split("").map((letter: string, index: number): JSX.Element => {
            const shouldRevealLetter: boolean = isGameLost || guessedLetters.includes(letter)
            const letterClassName: string = clsx(
                isGameLost && !guessedLetters.includes(letter) && "missed-letter"
            )
            return (
                <span key={index} className={letterClassName}>
                    {shouldRevealLetter ? letter.toUpperCase() : ""}
                </span>
            )
        })

    return (
        <section className="word">
            {letterElements}
        </section>
    )
}
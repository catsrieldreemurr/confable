"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/ui/navbar";
import WordBox from "@/components/ui/wordBox";
import { use, useEffect, useState } from "react";

async function Word(){
    const res = await fetch("/api/getWord");
    const data = await res.json()
    return data;
}

export default function Page(){
    const [tempGuess, setTemp] = useState(""); // Temporary Guess : Used for controlling the input State 
    const [guess, setGuess] = useState(new Array(6).fill("")); // Keeps track of the submitted Guesses
    const [isSubmitted, setIsSubmitted] = useState(new Array(6).fill(false)); // Keep track if each variant has been submitted yet
    const [word, setWord] = useState(""); // The Current Correct Word 
    const [currentGuess, setCurrentGuess] = useState(0) // Keep track of which round the player is on 
    const maxLength = 5;
    const [hasWon, setHasWon] = useState(false);
    const [winningAtt, setWinningAtt] = useState(0);
    useEffect(() => {
        async function word(){
            const w = await Word();
            setWord(w[0]);

            console.log(w)
        }
        word();
    }, [])

    return(
        <div className="bg-gray-600 h-screen">
            <Navbar></Navbar>
                {currentGuess <= 5 && <div className="flex flex-col justify-center items-center mt-10 gap-2"> {/* GameBox */}
                <h1 className="text-white text-2xl font-bold mb-5">Wordle</h1>

                
                <form className="flex flex-col justify-center items-center mb-5" autoComplete="off" onSubmit={(e) => {
                    e.preventDefault()
                    if(guess[currentGuess].length == 5){
                        if(tempGuess === word){
                            setHasWon(true);
                            setWinningAtt(currentGuess)

                            setCurrentGuess(1000);
                        }
                        else{
                            setCurrentGuess(currentGuess + 1)

                            const copy = guess.slice();
                            copy[currentGuess] = tempGuess;

                            const copy2 = isSubmitted.slice();
                            copy2[currentGuess] = true;

                            setGuess(copy);
                            setIsSubmitted(copy2);

                            setTemp("");
                        }
                    }
                }}>
                    <Label htmlFor="guess" className="p-3 text-white text-lg">Guess</Label>
                    <Input name="guess" maxLength={maxLength}  className="w-[7rem] bg-white text-black text-center" value={tempGuess} onChange={(e) => {
                        setTemp(e.target.value)
                        const copy = guess.slice();
                        copy[currentGuess] = e.target.value;

                        setGuess(copy);
                    }}></Input>
                </form>

                <div>{
                    guess.map((box, index) => {
                        return <WordBox len={maxLength} word={word} currentGuess={guess[index]} isSubmitted={isSubmitted[index]} key={index} ></WordBox>
                    })
                }</div>
            </div>}

            {
                (currentGuess > 5 && hasWon === false) && <div>
                    <h1 className="text-2xl text-white font-bold text-center">You Lost.</h1>
                    <h2 className="text-xl text-white text-center">The word was {word}</h2>
                </div>
            }{
                (currentGuess > 5 && hasWon) && <div>
                    <h1 className="text-2xl text-white font-bold text-center">You Won!</h1>
                    <h2 className="text-xl text-white text-center">The word was {word}.</h2>
                    <p className="text-white text-center">It took you {winningAtt + 1} attempts.</p>
                </div>
            }
        </div>
    )
}
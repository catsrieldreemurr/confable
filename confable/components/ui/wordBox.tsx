interface SetProps{
    word: string
    currentGuess:string
    isSubmitted: boolean
    len: number
}

export default function WordBox({word, len, currentGuess, isSubmitted}:SetProps){
    const arr = new Array(len).fill(word);
    return(
        <div className="flex gap-1">
            {
                
            arr.map((_, index) => {
                const letter = currentGuess[index] || "";
                const IsCorrect = isSubmitted && letter.toLowerCase() === word[index]?.toLowerCase();
                const containsChar = isSubmitted && word.includes(letter.toLocaleLowerCase())

                return(
                    <div key={index} className={`w-15 h-15 flex justify-center items-center border-2 border-gray-700 font-bold 
                        ${
                            (containsChar && !IsCorrect ? "bg-yellow-500" : "bg-gray-800")
                        }
                        
                        ${
                            (IsCorrect ? "bg-green-500" : "bg-gray-800")
                        }
                    `}>
                        <p className="text-white">{currentGuess[index]}</p>
                    </div>
                ) 
                
            })}
        </div>
    )
}
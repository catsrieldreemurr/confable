interface SetProps{
    word: string
}

export default function WordBox({word}:SetProps){
    return(
        <div className="flex gap-1">
            {word.split("").map((word, index) => {
                return(
                    <div className="w-15 h-15 bg-gray-800 flex justify-center items-center border-2 border-gray-700" key={index}>
                        <p className="text-white">{word}</p>
                    </div>
                ) 
                
            })}
        </div>
    )
}
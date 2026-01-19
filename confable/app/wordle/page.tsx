import Navbar from "@/components/ui/navbar";
import WordBox from "@/components/ui/wordBox";

export default function Page(){
    return(
        <div className="bg-gray-600 h-screen">
            <Navbar></Navbar>

            <div className="flex flex-col justify-center items-center mt-10 gap-2"> {/* GameBox */}
                <h1 className="text-white text-2xl font-bold mb-5">Wordle</h1>
                <WordBox word="bbbbb"></WordBox>
                <WordBox word="bbbbb"></WordBox>
                <WordBox word="bbbbb"></WordBox>
                <WordBox word="bbbbb"></WordBox>
                <WordBox word="bbbbb"></WordBox>
                <WordBox word="bbbbb"></WordBox>
            </div>
        </div>
    )
}
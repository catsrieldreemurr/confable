import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-600 h-screen">
      <div className="flex flex-row items-center text-white justify-center pt-10">
        <Image src={"/ConfableSmall.png"} height={100} width={100} alt="Confable"></Image>

        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">Confable</h1>
          <h2 className="text-lg">The Word Guessing Game</h2>
        </div>

      </div>

      <div className="flex flex-col justify-center items-center gap-5 mt-10">
        <Button variant={"ghost"} className="text-white font-bold border border-white p-6">
          <Link href={"/wordle"}>Play Wordle</Link>
        </Button>
        

        <Button variant={"ghost"} className="text-white font-bold border border-white p-6"> 
          <Link href={"https://youtube.com"}>Play Confable</Link>
        </Button>
      </div>
    </div>
  );
}

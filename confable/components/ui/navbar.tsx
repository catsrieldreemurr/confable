import Image from "next/image";
import { Button } from "./button";
import { Ghost } from "lucide-react";
import Link from "next/link";

export default function Navbar(){
    return(
        <nav>
            <div className="pt-5 pb-3 bg-gray-700 border-b-4 border-gray-500">
                <Button variant={null}>
                    <Link href={"/"} className="pr-5">
                        <Image src={"/homeButton.png"} height={30} width={30} alt="Home"></Image>
                    </Link>
                </Button>
            </div>
        </nav>
    )
}
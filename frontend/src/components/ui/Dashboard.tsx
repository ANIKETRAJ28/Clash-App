import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <div>
                <Image 
                    src="/Compare.svg"
                    alt="Compare_img"
                    width={450}
                    height={450}
                />
            </div>
            <div className="text-center">
                <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-200 to-blue-600 text-transparent bg-clip-text">Clash</h1>
                <p className="text-lg font-bold">Compare the better choice together</p>
                <Link href="/login">
                    <Button>Start free</Button>
                </Link>
            </div>
        </div>
    )
}
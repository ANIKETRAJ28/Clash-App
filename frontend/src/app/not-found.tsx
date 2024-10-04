import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <Image 
                src="/404.svg"
                alt="not-found"
                width={450}
                height={450}
            />
            <Link href="/">
                <Button>Home</Button>
            </Link>
        </div>
    )
}
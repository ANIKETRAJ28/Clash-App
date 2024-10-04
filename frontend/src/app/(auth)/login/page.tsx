import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[550px] bg-white rounded-xl py-5 px-10 shadow-md">
                <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-200 to-blue-600 text-center text-transparent bg-clip-text">Clash</h1>
                <h1 className="text-3xl font-bold">Login</h1>
                <p>Welcome back</p>
                <form>
                    <div className="mt-4">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" placeholder="Enter your email..."/>
                    </div>
                    <div className="mt-4">
                        <Label htmlFor="password">Password</Label>
                        <Input id="email" name="password" placeholder="Enter your password..."/>
                    </div>
                    <div className="text-right text-xs font-semibold">
                        <Link href="forget-password">Forget Password?</Link>
                    </div>
                    <div className="mt-4">
                        <Button className="w-full">Submit</Button>
                    </div>
                </form>  
                <p className="text-center mt-4">
                    Don&apos;t have an account? {" "}
                    <strong>
                        <Link href="/signup">Signup</Link>
                    </strong>
                </p>   
            </div>
        </div>
    )
}
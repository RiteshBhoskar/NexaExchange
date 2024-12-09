"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import AuthButton from "./Buttons";

export default function Appbar () {
    const session = useSession();
    return (
        <header className="flex w-full h-fit justify-between">
            <div className="flex justify-center items-center pl-4 py-3">
                <img src="/NexaExchange.png" alt="Website logo"
                className="size-9" />
                <h1 className="text-lg font-sans pl-2">NexaExchange</h1>
            </div>
            <div className="flex justify-center items-center pt-2 pr-3">
                {session.data?.user ? <AuthButton onClick={() => signOut()}>
                    Logout
                </AuthButton> : <AuthButton onClick={() => signIn()}>
                    Sign In
                </AuthButton>}
            </div>
        </header>
    )
}
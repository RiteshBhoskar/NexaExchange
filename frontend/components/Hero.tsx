"use client"

import { signIn, useSession } from "next-auth/react"
import { HeroAuthButton } from "./Buttons"
import { useRouter } from "next/navigation"

export default function Hero () {
    const session = useSession();
    const router = useRouter();
    return (
        <div className="flex-col justify-center w-full h-full">
            <h1 className="text-4xl font-cabinet flex justify-center items-center">
                The Cryptocurrency&nbsp;
                <span className="text-blue-500">
                     Revolution
                </span>
            </h1>
            <div className="text-lg font-cabinet flex justify-center items-center pt-3">
                Create a frictionless wallet with just a Google Account.
            </div>
            <div className="text-lg font-cabinet flex justify-center items-center">
                Buy and sell cryptocurrencies with ease
            </div>
            <div className="flex justify-center pt-3 items-center">
                {session.data?.user ? <HeroAuthButton onClick={() => {
                    router.push("/dashboard")
                }}>
                    Go to the dashboard
                </HeroAuthButton>:<HeroAuthButton onClick={() => signIn("google")}>
                    Log In with Google
                </HeroAuthButton>  }
            </div>
        </div>
    )
}
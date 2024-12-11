import prisma from "@/db";
import { Keypair } from "@solana/web3.js";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ user, account , profile , email , credentials}) {
            if(account?.provider === "google"){
                const email = user.email;
                if(!email){
                    return true
                }

                const existingUser = await prisma.user.findFirst({
                    where: {
                        username: email,
                    }
                })

                if(existingUser){
                    return true
                }
                const keypair = Keypair.generate();
                const publicKey =  keypair.publicKey.toBase58();
                const privateKey = keypair.secretKey;
                console.log(publicKey)
                console.log(privateKey)
                await prisma.user.create({
                    data : {
                        username: email,
                        provider: "Google",
                        solWallet: {
                            create: {
                                publicKey: publicKey,
                                privateKey: privateKey.toString(),
                            }
                        },
                        inrWallet: {
                            create: {
                                balance: 0
                            }
                        }
                    }
                })
                return true
            }
            return false
        }
    }
})

export { handler as GET , handler as POST };
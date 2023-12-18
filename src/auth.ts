import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./db";

const GitHub_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GitHub_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if(!GitHub_CLIENT_ID || !GitHub_CLIENT_SECRET){
    throw new Error('Missing github auth credentials');
}

export const {handlers:{GET,POST}, auth, signOut,signIn} =NextAuth({
    adapter: PrismaAdapter(db),
    providers:[
        GitHub({
            clientId:GitHub_CLIENT_ID,
            clientSecret:GitHub_CLIENT_SECRET
        })
    ],
    callbacks:{
        // usually not needed, here we fixing a bug in nextauth
        async session({session,user}:any){
            if(session && user){
                session.user.id=user.id; 
            }

            return session;

        }
    }
})


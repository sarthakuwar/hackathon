import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import User from "@/models/User";


export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                email: {label:'Email', type:'email',placeholder:'Email'},
                password:{label:'password',type:'password',placeholder:'Password'},
            },
            async authorize(credentials){
                console.log(credentials)
                // const { email, password } = credentials;
                // const currentUser = await User.findOne({email})
                // if(currentUser && ( currentUser.verifyPassword(password)))
                    return {
                id:"user1"}
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
    ],
    secret: process.env.NEXTAUTH_SECRET ,
    callbacks:{
        session:({session,user,token})=>{
            console.log(session)
            if(session && session.user){
                session.user.id = token.sub
            }
        }
    }

}
// HELLO
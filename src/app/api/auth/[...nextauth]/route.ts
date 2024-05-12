import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";

const authOptions:NextAuthOptions  = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "johndoe@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials: any) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // const response = await fetch("http://localhost:3000/api/auth/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ email, password }),
        // })

        // const {status,data} = await response.json()
        // if(status){
        //   return data[0]
        // }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }: any) {
      if(user != undefined && 'id' in user){
        token.id = user.id
      }
      if(user != undefined && 'name' in user){
        token.name = user.name
      }
      if(user != undefined && 'email' in user){
        token.email = user.email
      }
      if(user != undefined && 'role' in user){
        token.role = user.role
      }
      if(account != undefined && 'provider' in account){
        token.provider = account.provider
      }
      
      return token;
    },
    async session({ session, user, token }: any) {
      if(token != undefined && 'id' in token){
        session.user.id = token.id
      }
      if(token != undefined && 'name' in token){
        session.user.name = token.name
      }
      if(token != undefined && 'email' in token){
        session.user.email = token.email
      }
      if(token != undefined && 'role' in token){
        session.user.role = token.role
      }
      if(token != undefined && 'provider' in token){
        session.user.provider = token.provider
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}
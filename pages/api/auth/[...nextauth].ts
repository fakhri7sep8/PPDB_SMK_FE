import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { use } from "react";
 
 
const authOptions: NextAuthOptions = {
  secret : process.env.NEXTAUTH_SECRET,
  providers: [
    // ...add more providers here
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      // authorization: {
      //   params : {
      //     prompt: "select_account",
      //     access_type: "offline",
      //     response_type: "code"
      //   }
      // }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params : {
          prompt: "select_account",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials: any, req) {
        console.log("cred", credentials)
        console.log("req", req)
        return {
          ...credentials,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {

      session.user.id = Number(token.id)
      session.user.username = token.name
      session.user.email = token.email
      session.user.access_token = token.accessToken
      session.user.refresh_token = token.refreshToken
      session.user.role = token.role

      // console.log("session",session)
      // console.log("token session",token)
      
      return session
    },
    async jwt({ token, user, account, trigger, session, profile, isNewUser }) {

      if(trigger === 'update'){
        return{...token, ...session}
      }
      // console.log('user',user)
      console.log('token',token)
      // console.log("akun ------------",account?.provider)
    //   if(account?.provider === "google"){
    //     const res = await socialLogin({email : token.email!, nama : token.name!, avatar : token.picture!})

    //     return {
    //       ...token,
    //       id : res.data.id,
    //       accessToken : res.data.access_token,
    //       refreshToken : res.data.refresh_token,
    //       role : "admin",
    //       access : ["read"]
    //     }
    //   }

    //   if(account?.provider === "github"){
    //     const res = await socialLogin({email : token.email!, nama : token.name!, avatar : token.picture!})

    //     return {
    //       ...token,
    //       id : res.data.id,
    //       accessToken : res.data.access_token,
    //       refreshToken : res.data.refresh_token,
    //       role : "admin",
    //       access : ["read"]
    //     }
    //   }
      return {...user, ...token}
    }
  },
 
  pages : {
    signIn : "/admin",
    signOut : "/auth/login",
    error : "/auth/error"
  }
 
 
};
 
export default NextAuth(authOptions);
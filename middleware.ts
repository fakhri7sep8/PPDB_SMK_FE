import { NextRequest, NextResponse } from "next/server";
import withAuth from "next-auth/middleware";
import { JWT } from "next-auth/jwt";

type AuthReq = NextRequest & {
    nextauth : {
        token : JWT & null;
    }
}

export default withAuth(function middleware(request : any){
    console.log("middleware ", request.nextauth.token.role);

    if(request.nextUrl.pathname.startsWith("/admin") && request.nextauth.token.role == "user"){
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}, {
    callbacks : {
        authorized : ({token}) => {
            if(token){
                return true
            }
            return false
        },
    },
    pages : {
        signIn : "/login",
        error : "/auth"
    },
})


export const config = {
    matcher : ["/admin/:path*", "/admin"],
}
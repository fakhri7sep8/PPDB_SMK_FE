import { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number | undefined | null;
      username: string | undefined | null;
      email: string | undefined | null;
      access_token: any;
      refresh_token: any;
      token : any
      image: string | undefined | null;
      role: any;
    };
  }
}

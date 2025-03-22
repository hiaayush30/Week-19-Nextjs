import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            // The Credentials provider allows you to handle signing in with arbitrary credentials, such as a 
            //  username and password, domain, or two factor authentication or hardware device (e.g. YubiKey U2F / FIDO).
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "email",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              username: { label: "Username", type: "text", placeholder: "Aayush@1" },
              password: { label: "Password", type: "password" }
            },
            authorize : async (credentials, req) => {
            const {username,password} = credentials;
            console.log(username,password);
              // Add logic here to look up the user from the credentials supplied
              const user = { id: "1", name: "Aayush", email: "aayush@example.com",username }
        
              if (user) {  //if user exists in db
                // Any object returned will be saved in `user` property of the JWT
                return user
              } else {
                // If you return null then an error will be displayed advising the user to check their details.
                return null
        
                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
              }
            }
          }),
          GitHubProvider({
            clientId:"yo",
            clientSecret: "yo"
          }),
          GoogleProvider({
            clientId:"yo",
            clientSecret: "yo"
          })        
    ],
    secret:process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }
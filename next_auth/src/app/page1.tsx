//not so good approach

"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
//geteServerSession is a hook which works in a server component

function RealHome() {
  const session = useSession(); 
  // fetches session data on the client side, which means an extra request is sent to the server.
  // similar to
  // useEffect(()=>{
  //  await axios.get("http://localhost:3000/api/auth/session");
  // },[])
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Hi There 
      <h1>{JSON.stringify(session)}</h1>
      {session.status == "authenticated" ?
        <button className="cursor-pointer"
          onClick={() => signOut()}>Logout</button> :
        <button className="cursor-pointer"
          onClick={() => signIn()} 
        >Login</button>
      }
    </div>
  );
}

export default function Home() {
  return <SessionProvider>
    <RealHome />
  </SessionProvider>
}

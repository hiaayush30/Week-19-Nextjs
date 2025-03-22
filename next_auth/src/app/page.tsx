import { getServerSession } from "next-auth";
import { SessionProvider, signIn, signOut } from "next-auth/react";
//useServerSession works in a server component
//it is a function and not a hook(use...) as it is used on server side

export default async function RealHome() {
    const session = await getServerSession();
    // do  const userProfile = prisma.findOne({where:{email:session.user.email}})
    // getServerSession() runs on the server and reads the session directly from the request (via cookie) (faster, avoids extra API calls).
    
    
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {JSON.stringify(session)}
    </div>
  );
}



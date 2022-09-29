import React from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER } from "next/dist/server/api-utils";

export default function Login() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br /> <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}


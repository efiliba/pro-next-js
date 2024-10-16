"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage, Button } from "./ui";

export function LogInOut() {
  const { data: session, status } = useSession();

  return status === "unauthenticated" ? (
    <Button onClick={() => signIn()}>Sign in</Button>
  ) : (
    <Button onClick={() => signOut()}>
      <Avatar>
        <AvatarImage src={session?.user?.image || ""} />
        <AvatarFallback className="text-foreground">X</AvatarFallback>
      </Avatar>
      Sign out
    </Button>
  );
}

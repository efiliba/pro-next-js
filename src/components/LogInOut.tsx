"use client";

import { useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage, Button } from "./ui";

export function LogInOut({
  onSignIn,
  onSignOut,
}: {
  onSignIn: () => Promise<void>;
  onSignOut: () => Promise<void>;
}) {
  const { data: session, status } = useSession();

  switch (status) {
    case "loading":
      return "Loading...";
    case "unauthenticated":
      return <Button onClick={() => onSignIn()}>Sign in</Button>;
    case "authenticated":
      return (
        <Button onClick={() => onSignOut()}>
          <Avatar>
            <AvatarImage src={session?.user?.image || ""} />
            <AvatarFallback className="text-foreground">X</AvatarFallback>
          </Avatar>
          Sign out
        </Button>
      );
  }
}

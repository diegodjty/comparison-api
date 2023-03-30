"use client";

import { signOut } from "next-auth/react";
import { FC, useState } from "react";
import { toast } from "./ui/Toast";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signUserOut = async () => {
    setIsLoading(true);

    try {
      await signOut();
    } catch (error) {
      toast({
        title: "Error signing out",
        message: "Please try again later",
        type: "error",
      });
    }
  };

  return (
    <button onClick={signUserOut} isLoading={isLoading}>
      Sing out
    </button>
  );
};

export default SignOutButton;

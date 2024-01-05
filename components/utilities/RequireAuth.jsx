"use client";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useLayoutEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import app from "@/providers/firebase.init";
import Loading from "./Loading";
import toast from "react-hot-toast";

const RequireAuth = ({ children }) => {
  const auth = getAuth(app);
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useLayoutEffect(() => {
    const authenticationCheck = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return authenticationCheck;
  }, [auth]);

  useLayoutEffect(() => {
    if (!loading && !user) {
      toast.error("You need to login first");
      router.push(`/login`);
      return;
    }
  }, [loading, user, router, pathname]);

  if (loading) {
    return <Loading />;
  }

  return children;
};

export default RequireAuth;

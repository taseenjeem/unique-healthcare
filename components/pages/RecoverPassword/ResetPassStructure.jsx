"use client";
import Loading from "@/components/utilities/Loading";
import { Button, Divider, Input } from "@nextui-org/react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ResetPassStructure = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const email = e.target.email.value;

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email)
        .then(() => {
          setIsLoading(false);
          toast.success("Link sent successfully. Please check your email.");
          e.target.reset();
        })
        .catch((error) => {
          setIsLoading(false);
          toast.error("Something went wrong!");
          console.log(error);
        });
    } catch (error) {
      setIsLoading(false);
      toast.error("Something went wrong!");
      console.log(error);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="min-h-screen bg-[url('/assets/images/bg.svg')] bg-no-repeat bg-cover bg-center">
          <div className="wrapper w-full min-h-[90vh] flex items-center justify-center py-20">
            <div className="bg-white p-5 max-w-md w-full rounded-lg shadow-lg">
              <h4 className="text-center font-semibold text-primary">
                Forgot your password?
              </h4>
              <Divider className="my-2 w-20 mx-auto" />
              <h1 className="text-center text-2xl font-bold text-primary">
                Unique Pathology <br />
                Customer Portal
              </h1>
              <form onSubmit={handleSubmit}>
                <Input
                  color="primary"
                  type="email"
                  variant="underlined"
                  label="Your Existing Email"
                  name="email"
                  autoComplete={false}
                  className="max-w-md w-full"
                  isRequired
                />
                <Button
                  type="submit"
                  color="primary"
                  className="text-white font-semibold mt-5 w-full"
                >
                  Sent Reset Link
                </Button>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ResetPassStructure;

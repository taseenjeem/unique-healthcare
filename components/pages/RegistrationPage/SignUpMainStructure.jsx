"use client";
import React, { useState } from "react";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Divider,
  Input,
} from "@nextui-org/react";
import { IoEye, IoEyeOff, IoLogoGoogle } from "react-icons/io5";
import Link from "next/link";
import Loading from "@/components/utilities/Loading";
import countryCode from "../../../public/data/CountryCodeByPhone.json";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "@/providers/firebase.init";

const SignUpMainStructure = () => {
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const [isVisibleConfirmPass, setIsVisibleConfirmPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const auth = getAuth(app);

  const toggleVisibilityForPass = () => setIsVisiblePass(!isVisiblePass);
  const toggleVisibilityForConfirmPass = () =>
    setIsVisibleConfirmPass(!isVisibleConfirmPass);

  const handleGoogleAuth = () => {
    setIsLoading(true);

    const provider = new GoogleAuthProvider();

    try {
      signInWithPopup(auth, provider).then((newUser) => {
        if (newUser) {
          const name = newUser?.user?.displayName;
          const email = newUser?.user?.email;
          const country = null;
          const phone = null;
          const password = null;
          const account_creation_time = newUser?.user?.metadata?.creationTime;
          console.log(newUser);

          fetch("http://localhost:8000/add-new-customer-info-with-pop-up", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              name,
              email,
              country,
              phone,
              password,
              account_creation_time,
            }),
          })
            .then((response) => response.json())
            .then((feedback) => console.log(feedback));

          setIsLoading(false);

          router.push("/");

          toast.success("Account created successfully");
        } else {
          setIsLoading(false);
          toast.error("Something Went Wrong!");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const country = e.target.country.value;
    const phone = e.target.phoneNumber.value;
    const password = e.target.password.value;
    const confirm_password = e.target.confirmPassword.value;

    if (password !== confirm_password) {
      toast.error("Your password didn't match");
      setIsLoading(false);
      return;
    } else if (password.length <= 6 || confirm_password.length <= 6) {
      toast.error("Your password should be more than 6 character");
      setIsLoading(false);
      return;
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const newUser = userCredential.user;

        if (newUser) {
          await sendEmailVerification(newUser);

          await updateProfile(newUser, {
            displayName: name,
          });

          const account_creation_time = newUser?.metadata?.creationTime;

          fetch("http://localhost:8000/add-new-customer-info", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              name,
              email,
              country,
              phone,
              password,
              account_creation_time,
            }),
          })
            .then((response) => response.json())
            .then((feedback) => console.log(feedback));

          setIsLoading(false);

          router.push("/");

          toast.success("Account created successfully");
        } else {
          toast.error("Something went wrong!");

          setIsLoading(false);
        }
      } catch (error) {
        console.log(error.code);

        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          toast.error(
            "This email is already in use. Please try another email."
          );

          setIsLoading(false);
        }
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="min-h-screen gradient-bg">
          <div className="wrapper w-full min-h-[90vh] flex items-center justify-center">
            <div className="bg-white p-5 max-w-2xl w-full rounded-lg shadow-lg">
              <h4 className="text-center font-semibold text-primary">
                Create a New Account
              </h4>
              <Divider className="my-2 w-20 mx-auto" />
              <h1 className="text-center text-2xl font-bold text-primary">
                Unique Pathology <br />
                Customer Portal
              </h1>
              <form className="mt-5" onSubmit={handleSubmit}>
                <div className="w-full lg:flex justify-between items-center lg:gap-3">
                  <Input
                    color="primary"
                    type="text"
                    variant="underlined"
                    label="Full Name"
                    name="name"
                    autoComplete={false}
                    className="w-full"
                    isRequired
                  />

                  <Input
                    color="primary"
                    type="email"
                    variant="underlined"
                    label="Email"
                    name="email"
                    autoComplete={false}
                    className="w-full"
                    isRequired
                  />
                </div>

                <div className="w-full lg:flex justify-center gap-3">
                  <Autocomplete
                    label="Select Your Country"
                    className="w-full"
                    variant="underlined"
                    name="country"
                    classNames="w-full"
                    isRequired
                  >
                    {countryCode.map((data, index) => (
                      <AutocompleteItem key={index} value={data.number}>
                        {`${data.name} (${data.number})`}
                      </AutocompleteItem>
                    ))}
                  </Autocomplete>

                  <Input
                    color="primary"
                    type="number"
                    variant="underlined"
                    label="Phone Number"
                    name="phoneNumber"
                    autoComplete={false}
                    className="w-full"
                    isRequired
                  />
                </div>

                <div className="w-full lg:flex justify-center items-center lg:gap-3">
                  <Input
                    color="primary"
                    type={isVisiblePass ? "text" : "password"}
                    variant="underlined"
                    label="Password"
                    name="password"
                    className="w-full"
                    isRequired
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibilityForPass}
                      >
                        {isVisiblePass ? (
                          <IoEye className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                  />

                  <Input
                    color="primary"
                    type={isVisibleConfirmPass ? "text" : "password"}
                    variant="underlined"
                    label="Confirm Password"
                    name="confirmPassword"
                    className="w-full"
                    isRequired
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibilityForConfirmPass}
                      >
                        {isVisibleConfirmPass ? (
                          <IoEye className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                  />
                </div>

                <Button
                  type="submit"
                  color="primary"
                  className="text-white font-semibold mt-5 w-full"
                >
                  Create an account
                </Button>
              </form>
              <span className="relative flex justify-center my-5">
                <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-75"></div>

                <span className="relative z-10 bg-white px-6 font-semibold text-primary">
                  OR
                </span>
              </span>

              <Button
                color="primary"
                variant="bordered"
                className="text-primary font-semibold w-full"
                onClick={() => handleGoogleAuth()}
              >
                <span className="flex items-center gap-2">
                  <IoLogoGoogle className="text-xl" />
                  Continue with Google
                </span>
              </Button>

              <p className="text-sm text-center mt-5">
                Already have an account? Then{" "}
                <Link
                  href="/login"
                  className="underline underline-offset-2 font-semibold"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SignUpMainStructure;

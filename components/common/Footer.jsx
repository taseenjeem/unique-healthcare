import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-neutral">
      <div className="wrapper py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h4 className="md:text-2xl text-xl font-bold">Unique HealthCare</h4>
            <p className="max-w-xs mt-4 text-sm text-gray-600">
              Unique HealthCare is a leading medical center dedicated to precise
              diagnostics and patient care in Sherpur, Bangladesh. Our expert
              team merges cutting-edge technology with compassionate service,
              ensuring accurate assessments and personalized attention for every
              individual, prioritizing their health and well-being.
            </p>
            <div className="flex mt-8 space-x-6 text-gray-600">
              <Link
                className="hover:opacity-75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>
                <FaFacebook className="text-2xl" />
              </Link>
              <Link
                className="hover:opacity-75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>
                <FaInstagram className="text-2xl" />
              </Link>
              <Link
                className="hover:opacity-75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Twitter </span>
                <FaXTwitter className="text-2xl" />
              </Link>
              <Link
                className="hover:opacity-75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> YouTube </span>
                <FaYoutube className="text-2xl" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link className="hover:opacity-75" href="">
                  {" "}
                  About{" "}
                </Link>
                <Link className="hover:opacity-75" href="">
                  {" "}
                  Meet the Team{" "}
                </Link>
                <Link className="hover:opacity-75" href="">
                  {" "}
                  History{" "}
                </Link>
                <Link className="hover:opacity-75" href="">
                  {" "}
                  Careers{" "}
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link className="hover:opacity-75" href="">
                  {" "}
                  1on1 Coaching{" "}
                </Link>
                <Link className="hover:opacity-75" href="">
                  {" "}
                  Company Review{" "}
                </Link>
                <Link className="hover:opacity-75" href="">
                  {" "}
                  Accounts Review{" "}
                </Link>
                <Link className="hover:opacity-75" href="">
                  {" "}
                  HR Consulting{" "}
                </Link>
                <Link className="hover:opacity-75" href="">
                  {" "}
                  SEO Optimisation{" "}
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link className="hover:opacity-75" href="">
                  {" "}
                  Contact{" "}
                </Link>
                <Link className="hover:opacity-75" href="">
                  {" "}
                  FAQs{" "}
                </Link>
                <Link className="hover:opacity-75" href="">
                  {" "}
                  Live Chat{" "}
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link className="hover:opacity-75" href="">
                  {" "}
                  Privacy Policy{" "}
                </Link>
                <Link className="hover:opacity-75" href="">
                  {" "}
                  Terms &amp; Conditions{" "}
                </Link>
                <Link className="hover:opacity-75" href="">
                  {" "}
                  Returns Policy{" "}
                </Link>
                <Link className="hover:opacity-75" href="">
                  {" "}
                  Accessibility{" "}
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-800">© 2023 Unique HealthCare</p>
      </div>
    </footer>
  );
};

export default Footer;

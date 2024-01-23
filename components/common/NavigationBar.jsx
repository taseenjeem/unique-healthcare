"use client";
import React, { useLayoutEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "@/providers/firebase.init";
import toast from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const router = useRouter();

  const pathname = usePathname();

  const auth = getAuth(app);

  useLayoutEffect(() => {
    const isAuthenticated = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo(user);
      } else {
        setUserInfo(null);
      }
    });

    return () => isAuthenticated();
  }, [auth]);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout Successful!");
        router.push("/");
      })
      .catch((err) => {
        toast.error("Something went wrong!");
        console.log(err);
      });
  };

  const menuItems = [
    { name: "Get Appointment", link: "/get-an-appointment" },
    { name: "Notice", link: "/notice" },
    { name: "About Us", link: "/about-us" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <Navbar isBlurred shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Link
            href="/"
            className="md:text-xl font-bold text-inherit text-primary"
          >
            Unique HealthCare
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-5" justify="center">
        <NavbarItem>
          <Link
            href="/get-an-appointment"
            className={
              pathname == "/get-an-appointment"
                ? "text-sm font-bold text-primary"
                : "text-sm"
            }
          >
            Get Appointment
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/notice"
            className={
              pathname == "/notice"
                ? "text-sm font-bold text-primary"
                : "text-sm"
            }
          >
            Notice
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/about-us"
            className={
              pathname == "/about-us"
                ? "text-sm font-bold text-primary"
                : "text-sm"
            }
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/contact-us"
            className={
              pathname == "/contact-us"
                ? "text-sm font-bold text-primary"
                : "text-sm"
            }
          >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {!userInfo ? (
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="/login"
              className="text-white font-semibold"
            >
              Log In
            </Button>
          </NavbarItem>
        ) : (
          <Dropdown backdrop="blur" placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                src="/assets/icons/user.svg"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Greetings!</p>
                <p className="font-semibold text-lg">{userInfo?.displayName}</p>
              </DropdownItem>
              <DropdownItem as={Link} href="/dashboard" key="settings">
                My Account
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                onClick={() => handleLogOut()}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </NavbarContent>
      <NavbarMenu onMenuOpenChange={setIsMenuOpen}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import Link from "next/link";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      maxWidth="xl"
      isBlurred
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link
            href="/"
            className="md:text-xl font-bold text-inherit text-primary"
          >
            Unique Pathology
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        <NavbarItem>
          <Link href="/get-an-appointment" className="text-sm">
            Get Appointment
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/find-a-doctor" className="text-sm">
            Find a Doctor
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="pathology-lab" className="text-sm">
            Pathology Lab
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/notice" className="text-sm">
            Notice
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about-us" className="text-sm">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact-us" className="text-sm">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/login" variant="flat">
            Log In
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

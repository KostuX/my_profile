import React from "react";
import { ThemeSwitch } from "../components/theme-switch";
import { cfg_site as cfg } from "../config/cfg_site";
import { Logo } from "../components/icons";
import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/router";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import NextLink from "next/link";

export const Navbar = () => {
  const router = useRouter();

  return (
    <>
      {/** Logo | top left */}
      <NextUINavbar
        maxWidth="xl "
        className="border-b border-black dark:border-white "
      >
        <NavbarContent className="basis-1/5 sm:basis-full " justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink className="flex justify-start items-center " href="/">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will onisly be typed out once, initially
                  "K. A.",
                ]}
                wrapper="span"
                speed={30}
                style={{ fontSize: "1em", display: "inline-block" }}
              />
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        {/** Links | center | large */}
        <NavbarContent className="hidden sm:flex" justify="center">
          {cfg.navItems.map((e) => (
            
            <NavbarItem key={e.label}>
              <NextLink
                className="flex justify-start items-center m-1 "
                href={e.href}
                key={e.label}
              >
               
                {e.label}
              </NextLink>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/** Links | end | large */}
        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2">
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        {/** Menu | end | large */}
        <NavbarContent className="sm:hidden flex basis-1 pl-4 " justify="end">
          <NavbarMenuToggle />
          <ThemeSwitch />
          <NavbarMenu justify="end">
            {cfg.navMenuItems.map((e, index) => (
              <NavbarMenuItem key={`${e}-${index}`}>
                <NextLink
                  className="w-full hover:underline"
                  href={e.href}
                  size="lg"
                >
                  <div className="text-center font-bold text-2xl mt-10 "> {e.label}</div>
                 
                 
                </NextLink>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </NavbarContent>
      </NextUINavbar>
    </>
  );
};

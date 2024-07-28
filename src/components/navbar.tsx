import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuIndicator,
} from "@/components/ui/navigation-menu";
import { SocialsToggle } from "@/components/ui/social-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "@/app/styles/fonts.css";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-background p-2 dark:bg-dark-background fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-16">
        <Button className="flex items-center space-x-3 rtl:space-x-reverse bg-primary text-primary-foreground dark:bg-dark-primary dark:text-dark-primary-foreground" 
        >
          <span className="self-center text-xl font-semibold whitespace-nowrap logo-font">
            Portfolio
          </span>
        </Button>
        <NavigationMenu
          className="items-center p-2 border rounded shadow justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <NavigationMenuList className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-border-color rounded-lg bg-background md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-background dark:bg-dark-background md:dark:bg-dark-background dark:border-dark-border-color">
            <NavigationMenuItem className="block py-2 px-3 text-primary dark:text-dark-primary bg-secondary rounded md:bg-transparent md:text-primary md:p-0 md:dark:text-dark-primary">
              <Link href="#skills" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Skills
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <p>|</p>
            <NavigationMenuItem className="block py-2 px-3 text-primary dark:text-dark-primary bg-secondary rounded md:bg-transparent md:text-primary md:p-0 md:dark:text-dark-primary">
              <Link href="#timeline" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Timeline
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <p>|</p>
            <NavigationMenuItem className="block py-2 px-3 text-primary dark:text-dark-primary bg-secondary rounded md:bg-transparent md:text-primary md:p-0 md:dark:text-dark-primary">
              <Link href="#projects" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <p>|</p>
            <NavigationMenuItem className="block py-2 px-3 text-primary dark:text-dark-primary bg-secondary rounded md:bg-transparent md:text-primary md:p-0 md:dark:text-dark-primary">
              <Link href="#contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuIndicator className="NavigationMenuIndicator" />
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <SocialsToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

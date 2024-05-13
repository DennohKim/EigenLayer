"use client";

import Link from "next/link";
import React from "react";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import clsx from "clsx";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { name: "Dashboard", href: "/" },
  {
    name: "AVS",
    href: "/avs",
  },
  {
    name: "Operators",
    href: "/operators",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">

        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                " text-muted-foreground transition-colors hover:text-foreground",
                {
                  "bg-gray-100 p-2 rounded-md text-foreground transition-colors hover:text-foreground":
                    pathname === link.href,
                }
              )}
            >
              <p className="">{link.name}</p>
            </Link>
          );
        })}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    " text-muted-foreground transition-colors hover:text-foreground",
                    {
                      "bg-gray-100 p-2 rounded-md text-foreground text-black transition-colors hover:text-foreground":
                        pathname === link.href,
                    }
                  )}
                >
                  <p className="">{link.name}</p>
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Nav;

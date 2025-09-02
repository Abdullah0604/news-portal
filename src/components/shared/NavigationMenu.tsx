"use client";

import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  //   NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Link from "next/link";

const NavMenuList = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-6 *:font-medium *:text-gray-600">
        <NavigationMenuItem>
          <Link
            className={`${pathName === "/news" ? "text-red-500" : ""}`}
            href="/news"
          >
            News
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="px-0 py-0 hover:bg-transparent">
            <Link
              className={`${pathName === "/services" ? "text-red-500" : ""}`}
              href="/services"
            >
              Services
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="px-4 py-5 min-w-48 space-y-2">
              <li>
                <Link
                  className={`${
                    pathName === "/news/global-news" ? "text-red-500" : ""
                  }`}
                  href="/news/global-news"
                >
                  Global News
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/news/breaking-news" ? "text-red-500" : ""
                  }`}
                  href="/news/breaking-news"
                >
                  Breaking News
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/news/sports-news" ? "text-red-500" : ""
                  }`}
                  href="/news/sports-news"
                >
                  Sports
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            className={`${pathName === "/about" ? "text-red-500" : ""}`}
            href="/about"
          >
            About
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            className={`${pathName === "/contact" ? "text-red-500" : ""}`}
            href="/contact"
          >
            Contact
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenuList;

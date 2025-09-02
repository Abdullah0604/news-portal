import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className=" shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-4 md:px-6">
        {/* website logo */}
        <div>
          <Link href={"/"} className="font-bold text-xl">
            Daily News
          </Link>
        </div>

        {/* navigation menu */}
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/news">News</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[200px] w-full">
                  <ul className="px-4 py-2 ">
                    <li>
                      <NavigationMenuLink>Global News</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>Breaking News</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>Sports</NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/about">About</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* theme switcher and auth button */}
        <div className="flex items-center gap-x-5">
          <div className="flex items-center space-x-2">
            <label htmlFor="airplane-mode">Dark Mode</label>
            <Switch id="airplane-mode" />
          </div>
          <div>
            <Button className="py-1 px-6" variant="default">
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

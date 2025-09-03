import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  //   NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import CustomLink from "./CustomLink";

const NavMenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-6 *:font-medium *:text-gray-600">
        <NavigationMenuItem>
          <CustomLink href="/news">News</CustomLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="px-0 py-0 hover:bg-transparent">
            <CustomLink href="/services">Services</CustomLink>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="px-4 py-5 min-w-48 space-y-2">
              <li>
                <CustomLink href="/news/global-news">Global News</CustomLink>
              </li>
              <li>
                <CustomLink href="/news/breaking-news">
                  Breaking News
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/news/sports-news">Sports</CustomLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <CustomLink href="/about">About</CustomLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <CustomLink href="/contact">Contact</CustomLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenuList;

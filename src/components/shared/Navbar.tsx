import Link from "next/link";

import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import NavMenuList from "./NavigationMenu";

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
        <div className="hidden lg:flex">
          <NavMenuList />
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

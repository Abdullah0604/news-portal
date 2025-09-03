"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { MenuIcon, X } from "lucide-react";

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <Button
      onClick={() => setOpenMenu(!openMenu)}
      variant="default"
      size="icon"
    >
      {openMenu ? <X size={28} /> : <MenuIcon size={28} />}
    </Button>
  );
};

export default MobileMenu;

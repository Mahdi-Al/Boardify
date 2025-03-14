"use client";
import { Button } from "@/components/ui/button";
import { useMobileSidebar } from "@/app/hooks/use-Mobile-sidebar";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet"; // Ensure this is the correct import
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  const pathName = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []); // For hydration error

  useEffect(() => {
    onClose();
  }, [pathName, onClose]);

  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden mr-2"
        variant={"ghost"}
        size={"sm"}
      >
        <Menu className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="p-2 pt-10" side={"left"}>
          <Sidebar storageKey="b-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSidebar;

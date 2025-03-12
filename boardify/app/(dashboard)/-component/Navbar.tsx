import Logo from "@/components/logo";
import MobileSidebar from "./Mobile-Sidebar";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
export default function Navbar() {
  return (
    <header className="fixed z-50 px-4 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center">
      <MobileSidebar />
      <nav className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button
          size={"sm"}
          className="rounded-sm
        hidden md:block h-auto py-1.5 px-2"
          variant={"primary"}
        >
          Create
        </Button>
        <Button
          size={"sm"}
          variant={"primary"}
          className="rounded-sm block md:hidden"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </nav>
      <section className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={"/organization/:id"}
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl={"/organization/:id"}
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </section>
    </header>
  );
}

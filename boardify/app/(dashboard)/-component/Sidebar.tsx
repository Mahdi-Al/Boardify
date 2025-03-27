"use client";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import { NavItem, organization } from "./Nav-item";
import { Dialog, DialogTitle, DialogContent } from "@radix-ui/react-dialog";
import { useLocalStorage } from "usehooks-ts";
type ExpandedState = { isOpen: boolean } | null;
interface SidebarProps {
  storageKey?: string;
}
const Sidebar = ({ storageKey = "b-sidebar-state" }: SidebarProps) => {
  const [expanded, setExpanded] = useLocalStorage<ExpandedState>(
    storageKey || "defaultStorageKey", // Fallback to a default key
    {} // Initial value
  );
  const { organization: activeOrganization, isLoaded: isLoadedOrg } =
    useOrganization();

  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }
      return acc;
    },
    []
  );
  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !curr[id], // Toggle the current item's state
    }));
  };

  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <>
        <section className="space-y-2">
          <NavItem.Skeleton />
          <NavItem.Skeleton />
          <NavItem.Skeleton />
        </section>
      </>
    );
  }

  return (
    <>
      <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-4">Workspaces</span>

        <Button className="ml-auto" asChild variant={"ghost"}>
          <Link href={"/select-org"}>
            {" "}
            <Plus />
          </Link>
        </Button>
      </div>

      <Accordion
        type="multiple"
        defaultValue={defaultAccordionValue}
        className="space-y-2"
      >
        {userMemberships.data.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isActive={activeOrganization?.id === (organization.id as string)}
            isExpanded={expanded[organization.id as string]}
            organization={organization as organization}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
    </>
  );
};
export default Sidebar;

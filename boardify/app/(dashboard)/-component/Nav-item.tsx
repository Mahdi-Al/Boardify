'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Activity, CreditCard, Layout, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export type organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};

interface NavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: organization;
  onExpand: (id: string) => void;
}

export const NavItem = ({ isExpanded, isActive, organization, onExpand }: NavItemProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const routes = [
    {
      label: 'Boards',
      icon: <Layout className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}`,
    },
    {
      label: 'Activity',
      icon: <Activity className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: 'Settings',
      icon: <Settings className="h-4 w-4 mr-2" />,

      href: `/organization/${organization.id}/settings`,
    },
    {
      label: 'Billing',
      icon: <CreditCard className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/billing`,
    },
  ];

  const onClick = (href: string) => {
    router.push(href);
  };
  {
    console.log(organization.id);
  }
  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand(organization.id)} // Call onExpand to toggle
        className={cn(
          'flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline',
          isActive && !isExpanded && 'bg-sky-500/10 text-sky-700'
        )}
      >
        <section className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image
              fill
              alt="organization"
              className="rounded-sd object-cover"
              src={organization.imageUrl}
            />
          </div>
          <span className="font-medium text-sm">{organization.name}</span>
        </section>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-700">
        {routes.map((route) => (
          <Button
            variant={'ghost'}
            key={route.href}
            size={'sm'}
            onClick={() => {
              onClick(route.href);
              console.log(organization.id);
            }}
            className={cn(
              'w-full font-normal justify-start pl-10 mb-1',
              pathname === route.href && 'bg-sky-500/10 text-sky-700'
            )}
          >
            {route.icon}
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

NavItem.Skeleton = function SkeletonNavItem() {
  return (
    <section className="flex items-center gap-x-2">
      <div className="w-10 h-10 relative shrink-0">
        <Skeleton className="h-10 w-full" />
      </div>
      <Skeleton className="h-10 w-10 absolute" />
    </section>
  );
};

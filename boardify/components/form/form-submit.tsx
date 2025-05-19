'use client';

import { useFormStatus } from 'react-dom';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
interface FormSubmitProps {
  children: React.ReactNode;
  disable?: boolean;
  className?: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'primary';
}

export const FormSubmit = ({
  children,
  disable,
  className,
  variant = 'primary',
}: FormSubmitProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant={variant}
      size={'sm'}
      className={cn(className)}
      disabled={pending || disable}
    >
      {children}
    </Button>
  );
};

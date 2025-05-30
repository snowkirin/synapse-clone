import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// variant: solid, tint, outline, ghost

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      color: {
        blue: null,
        red: null,
        green: null,
        yellow: null,
      },
      variant: {
        solid: null,
        tint: null,
        outline: 'border bg-background border-slate-300',
        ghost: null,
      },
      size: {
        xl: `gap-2 px-6 py-2.5 has-[>svg]:px-3`,
        lg: 'gap-1.5 px-5 py-2 has-[>svg]:px-2.5',
        md: 'gap-1 px-4 py-1.5 has-[>svg]:px-4',
        sm: 'gap-0.5 py-1 px-3',
      },
      rounded: {
        lg: 'rounded-lg',
        default: 'rounded-md',
      },
    },
    compoundVariants: [
      // Solid variants
      {
        color: 'blue',
        variant: 'solid',
        class: 'bg-blue-600 text-white hover:bg-blue-700',
      },
      {
        color: 'red',
        variant: 'solid',
        class: 'bg-red-600 text-white hover:bg-red-700',
      },
      {
        color: 'green',
        variant: 'solid',
        class: 'bg-green-600 text-white hover:bg-green-700',
      },
      {
        color: 'yellow',
        variant: 'solid',
        class: 'bg-yellow-600 text-white hover:bg-yellow-700',
      },
      // Tint variants
      {
        color: 'blue',
        variant: 'tint',
        class: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
      },
      {
        color: 'red',
        variant: 'tint',
        class: 'bg-red-100 text-red-700 hover:bg-red-200',
      },
      {
        color: 'green',
        variant: 'tint',
        class: 'bg-green-100 text-green-700 hover:bg-green-200',
      },
      {
        color: 'yellow',
        variant: 'tint',
        class: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
      },
      // Outline variants
      {
        color: 'blue',
        variant: 'outline',
        class: 'border-blue-300 text-blue-600 hover:bg-blue-50',
      },
      {
        color: 'red',
        variant: 'outline',
        class: 'border-red-300 text-red-600 hover:bg-red-50',
      },
      {
        color: 'green',
        variant: 'outline',
        class: 'border-green-300 text-green-600 hover:bg-green-50',
      },
      {
        color: 'yellow',
        variant: 'outline',
        class: 'border-yellow-300 text-yellow-600 hover:bg-yellow-50',
      },

      // Ghost variants
      {
        color: 'blue',
        variant: 'ghost',
        class: 'text-blue-600 hover:bg-blue-100',
      },
      {
        color: 'red',
        variant: 'ghost',
        class: 'text-red-600 hover:bg-red-100',
      },
      {
        color: 'green',
        variant: 'ghost',
        class: 'text-green-600 hover:bg-green-100',
      },
      {
        color: 'yellow',
        variant: 'ghost',
        class: 'text-yellow-600 hover:bg-yellow-100',
      },
    ],
    defaultVariants: {
      color: 'blue',
      variant: 'solid',
      size: 'md',
      rounded: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
        })
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };

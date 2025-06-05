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
        outline: 'border bg-background',
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
      // Solid variants (complete)
      {
        color: 'blue',
        variant: 'solid',
        class:
          'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400',
      },
      {
        color: 'red',
        variant: 'solid',
        class:
          'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 disabled:bg-red-400',
      },
      // Tint variants (complete)
      {
        color: 'blue',
        variant: 'tint',
        class:
          'bg-blue-200 text-blue-600 hover:bg-blue-300 active:bg-blue-400 disabled:bg-blue-200 disabled:text-blue-400',
      },
      {
        color: 'red',
        variant: 'tint',
        class:
          'bg-red-200 text-red-600 hover:bg-red-300 active:bg-red-400 disabled:bg-red-200 disabled:text-red-400',
      },
      {
        color: 'green',
        variant: 'tint',
        class:
          'bg-green-200 text-green-600 hover:bg-green-300 active:bg-green-400 disabled:bg-green-200 disabled:text-green-400',
      },
      {
        color: 'yellow',
        variant: 'tint',
        class:
          'bg-yellow-200 text-yellow-600 hover:bg-yellow-300 active:bg-yellow-400 disabled:bg-yellow-200 disabled:text-yellow-400',
      },
      // Outline variants (complete)
      {
        color: 'blue',
        variant: 'outline',
        class:
          'border-slate-300 text-blue-600 hover:border-blue-300 active:bg-blue-200 active:border-blue-500 disabled:border-slate-300 disabled:text-blue-400',
      },
      {
        color: 'red',
        variant: 'outline',
        class:
          'border-red-300 text-red-600 hover:bg-red-200 active:bg-red-300 disabled:border-red-300 disabled:text-red-400',
      },
      {
        color: 'green',
        variant: 'outline',
        class:
          'border-green-300 text-green-600 hover:bg-green-200 active:bg-green-300 disabled:border-green-300 disabled:text-green-400',
      },
      {
        color: 'yellow',
        variant: 'outline',
        class:
          'border-yellow-300 text-yellow-600 hover:bg-yellow-200 active:bg-yellow-300 disabled:border-yellow-300 disabled:text-yellow-400',
      },

      // Ghost variants (complete)
      {
        color: 'blue',
        variant: 'ghost',
        class:
          'text-blue-600 hover:bg-blue-200 hover:text-blue-600 active:bg-blue-300 active:text-blue-600 disabled:text-blue-400',
      },
      {
        color: 'red',
        variant: 'ghost',
        class:
          'text-red-600 hover:bg-red-200 hover:text-red-600 active:bg-red-300 active:text-red-600 disabled:text-red-400',
      },
      {
        color: 'green',
        variant: 'ghost',
        class:
          'text-green-600 hover:bg-green-200 hover:text-green-600 active:bg-green-300 active:text-green-600 disabled:text-green-400',
      },
      {
        color: 'yellow',
        variant: 'ghost',
        class:
          'text-yellow-600 hover:bg-yellow-200 hover:text-yellow-600 active:bg-yellow-300 active:text-yellow-600 disabled:text-yellow-400',
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
  color,
  rounded,
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
          color,
          rounded,
          className,
        })
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };

import * as React from 'react';

import { cn } from '@/utils/tail-merge';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

const defaultStyle =
	' bg-primary text-white shadow-primary hover:bg-primary/90 hover:shadow-primary-h focus:bg-primary/160 focus:shadow-primary-h focus:ring-0 active:bg-primary/120 active:shadow-primary-h dark:shadow-dark-primary dark:hover:shadow-dark-primary-h dark:focus:shadow-dark-primary-h dark:active:shadow-dark-primary-h';
const secondaryStyle =
	'bg-secondary text-primary hover:bg-secondary/70 focus:bg-secondary/120 focus:secondary-none focus:ring-0 active:bg-secondary/120';
const successStyle =
	'bg-green-600 text-white shadow-success  hover:bg-green-600 hover:shadow-success-h focus:bg-green-600/90 focus:shadow-success-h focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-success-h dark:shadow-dark-success dark:hover:shadow-dark-success-h dark:focus:shadow-dark-success-h dark:active:shadow-dark-success-h';
const destructiveStyle =
	'bg-rose-600 text-white shadow-destructive hover:bg-rose-600/90 hover:shadow-destructive-h focus:bg-rose-600/90 focus:shadow-destructive-h focus:outline-none focus:ring-0 active:bg-rose-600/130 active:shadow-destructive-h dark:shadow-dark-destructive dark:hover:shadow-dark-destructive-h dark:focus:shadow-dark-destructive-h dark:active:shadow-dark-destructive-h';
const warningStyle =
	'bg-yellow-600 text-white shadow-warning hover:bg-yellow-600/90 hover:shadow-warning-h focus:bg-yellow-600/90 focus:shadow-warning-h focus:outline-none focus:ring-0 active:bg-yellow-600/120 active:shadow-warning-h dark:shadow-dark-warning dark:hover:shadow-dark-warning-h dark:focus:shadow-dark-warning-h dark:active:shadow-dark-warning-h';
const buttonVariants = cva(
	'inline-block rounded-sm px-6 pb-2 pt-2.5 text-xs font-medium leading-normal transition duration-150 ease-in-out focus:outline-none  disabled:opacity-50',
	{
		variants: {
			variant: {
				default: defaultStyle,
				destructive: destructiveStyle,
				secondary: secondaryStyle,  //outline
				success: successStyle,
				warning: warningStyle,
				link: 'text-primary border underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-9 px-4 py-2',
				sm: 'h-8 rounded-md px-3 text-xs',
				lg: 'h-10 rounded-md px-8',
				icon: 'h-9 w-9',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		const { type = 'button' } = props;
		return <Comp className={cn(buttonVariants({ variant, size, className }))} type={type} ref={ref} {...props} />;
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };

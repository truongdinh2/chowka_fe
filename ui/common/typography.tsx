import * as React from 'react';

import { cn } from '@/utils/tail-merge';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

const typoVariant = cva(
	"text-base mb-0",
	{
		variants: {
			variant: {
				default: "mt-0 text-base font-light leading-relaxed",
				label:"mt-0 h-input text-gray-800",
				err: "text-red-700",
				helperText:"text-xs text-gray-600 hover:text-gray-800",
			}
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);
// .DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof typoVariant> {
  asChild?: boolean;
}
const Typography = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
	({ className, variant, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'p';
		return <Comp className={cn(typoVariant({ variant, className }))} ref={ref} {...props} />;
	}
);
Typography.displayName = 'Typography';

export { Typography, typoVariant };

import { cn } from '@/utils/tail-merge';
import { VariantProps, cva } from 'class-variance-authority';

const notiVariants = cva(
	'absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-[0.8] scale-y-[0.8] whitespace-nowrap rounded-full bg-rose-700 px-[0.425rem] py-1 text-center align-baseline text-xs font-bold leading-none text-white',
	{
		variants: {
			variant: {
				default: '',
				secondary: '',
			},
		},
	}
);
export interface Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof notiVariants> {}
const Notification = (props: Props) => {
  const {className, variant, ...rest} = props;
	return (
		<div className={cn(notiVariants({variant}), className)} {...rest}/>
	);
};
export default Notification;

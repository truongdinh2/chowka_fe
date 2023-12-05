import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';

export function FilterBtn() {
	const data = [
		{
			label: '< 150K',
			value: '1',
		},
		{
			label: '150K < 300K',
			value: '2',
		},
		{
			label: '> 300k',
			value: '3',
		},
	];

	return (
		<Tabs value="1" className=''>
			<TabsHeader className=''>
				{data.map(({ label, value }) => (
					<Tab key={value} value={value} className='w-max px-3 '>
						{label}
					</Tab>
				))}
			</TabsHeader>
		</Tabs>
	);
}

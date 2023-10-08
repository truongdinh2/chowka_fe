'use client';

import { ExtractProps } from '@/types/helper';
import { cn } from '@/utils/tail-merge';
import get from 'lodash.get';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import { FiChevronDown, FiX } from 'react-icons/fi';
import Select, { ActionMeta, MultiValue, StylesConfig, components } from 'react-select';

import { Typography } from '../common/typography';
import { useId } from 'react';

export type Option = {
	value: string;
	label: string;
};
type Options = Option | string;
type OnChangeHandler =  ((newValue: any, actionMeta?: ActionMeta<any>) => void);
export type AppSelectProps = {
	label?: string;
	name: string;
	placeholder?: React.ReactNode;
	helperText?: string;
	type?: string;
	isMulti?: boolean;
	readOnly?: boolean;
	hideError?: boolean;
	validation?: RegisterOptions;
	options: Options[];
	containerClassName?: string;
	onChangeInput?: OnChangeHandler;
} & React.ComponentPropsWithoutRef<'select'> &
	ExtractProps<Select>;

export default function AppSelect({
	disabled,
	readOnly,
	label,
	helperText,
	name,
	isMulti = false,
	placeholder,
	validation,
	options,
	hideError = false,
	containerClassName,
	isClearable = false,
	onChangeInput,
	className="",
	...rest
}: AppSelectProps) {
	const {
		control,
		formState: { errors },
	} = useFormContext();
	const error = get(errors, name);
	const withLabel = label !== undefined;
	const converOption = (options: any[]) => {
		if (Array.isArray(options) && typeof options[0] === 'object') {
			// Nếu là mảng object
			return options;
		}
		// Nếu là mảng string
		return options.map((opt) => ({ value: opt, label: opt }));
	};
	const customOptions: Option[] = converOption(options);

	//#region  //*=========== Styles ===========
	const customStyles: StylesConfig = {
		control: (styles) => ({
			...styles,
			// red-500 and gray-300
			border: `1px solid ${error ? 'bg-blue' : '#D1D5DB'}`,
			'&:hover': {
			  border: `1px solid ${error ? 'bg-blue' : '#D1D5DB'}`,
			},
			boxShadow: 'none',
			transition: 'none',
			'&:focus-within': {
			  border: `1px solid ${error ? 'bg-blue' : 'bg-primary'}`,
			  boxShadow: `0 0 0 1px ${
			    error ? 'bg-blue' : 'bg-primary'
			  }`,
			},
			'*': {
			  boxShadow: 'none !important',
			},
			borderRadius: '0.5rem',
			padding: '0 0.75rem',
			background: disabled || readOnly ? '#F3F4F6' : undefined,
			cursor: 'pointer',
		}),
		valueContainer: (styles) => ({
			...styles,
			padding: 0,
			gap: '0.5rem',
		}),
		input: (styles) => ({
			...styles,
			padding: 0,
			margin: "5px 0 0 0",
			caretColor: 'bg-primary',
			color: '#1F201d',
			'::placeholder': {
				color: '#5a5d56',
			},
		}),
		indicatorsContainer: (styles) => ({
			...styles,
			'&>div': {
				padding: 0,
			},
		}),
		dropdownIndicator: (styles) => ({
			...styles,
			// color: '#878787',
			// '&:hover': {
			//   color: '#878787',
			// },
		}),
		option: (styles, state) => ({
			...styles,
			// color: 'black',
			// background: state.isSelected ? 'var(--color-primary-100)' : 'white',
			// ':hover': {
			//   background: '#E5E7EB',
			// },
			cursor: 'pointer',
		}),
		multiValue: (styles) => ({
			...styles,
			display: 'flex',
			alignItems: 'center',
			gap: '0.25rem',
			background: 'var(--color-primary-100)',
			borderRadius: '0.375rem',
			padding: '0.25rem 0.75rem',
			margin: 0,
		}),
		multiValueLabel: (styles) => ({
			...styles,
			color: 'var(--color-primary-700)',
			padding: 0,
			paddingLeft: 0,
		}),
		multiValueRemove: (styles) => ({
			...styles,
			color: 'var(--color-primary-700)',
			padding: 0,
			paddingLeft: '0.5rem',
			'&:hover': {
				color: 'var(--color-primary-700)',
				backgroundColor: 'transparent',
			},
		}),
		singleValue: (styles) => ({
			...styles,
			// marginLeft:"0.5rem",
			// marginRight:"0.5rem",
		}),
		menu: (styles) => ({
			...styles,
			borderRadius: '0.5rem',
			overflow: 'hidden',
		}),
		menuList: (styles) => ({
			...styles,
			padding: 0,
		}),
	};

	//#endregion  //*======== Styles ===========
	const propSelect = {
		isDisabled: disabled,
		isClearable,
		isMulti: isMulti,
		closeMenuOnSelect: !isMulti,
		placeholder: placeholder,
		options: customOptions,
		classNames: {
			control: () => 'w-full',
		},
		styles: customStyles,
		...rest,
	};
	const id = useId();
	return (
		<div className={cn('w-full', containerClassName)}>
			{withLabel && <Typography variant="label">{label + (label.length > 0 ? ' :' : '')}</Typography>}
			<div className={cn('relative', withLabel && 'mt-1', (disabled || readOnly) && 'cursor-not-allowed')}>
				<Controller
					name={name}
					control={control}
					rules={validation}
					render={({ field }) => {
						return (
							<Select
								{...field}
								id={id}
								value={
									//? null is needed so if the selected value is not found in the options, it will clear the value
									isMulti
										? field.value?.map(
												(value: unknown) => customOptions.find((option) => option.value === value) ?? null
										  )
										: customOptions.find((opt) => opt.value === field.value) ?? null
								}
								onChange={
									(selectedOptions) => {
									(isMulti
										? field.onChange(
												(selectedOptions as MultiValue<(typeof customOptions)[number]>).map(
													(option) => option?.value ?? ''
												)
										  )
										: field.onChange((selectedOptions as (typeof customOptions)[number])?.value ?? ''));
									(onChangeInput && onChangeInput(selectedOptions))
								}}
								components={{
									IndicatorSeparator: () => null,
									DropdownIndicator: (props) => (
										<components.DropdownIndicator {...props}>
											<FiChevronDown className="text-xl" />
										</components.DropdownIndicator>
									),
									ClearIndicator: (props) => (
										<components.ClearIndicator {...props}>
											<FiX className="mr-0.5 text-lg text-typo-icons hover:text-typo-secondary" />
										</components.ClearIndicator>
									),
									MultiValueRemove: (props) => (
										<components.MultiValueRemove {...props}>
											<FiX size={16} />
										</components.MultiValueRemove>
									),
								}}
								isDisabled= {disabled}
								isClearable = {isClearable}
								isMulti= {isMulti}
								closeMenuOnSelect= {!isMulti}
								placeholder= {placeholder}
								options= {customOptions}
								classNames= {{
									control: () => cn('w-full', className)
								}}
								styles= {customStyles}
								{...rest}
							/>
						);
					}}
				/>
				{helperText && (
					<Typography variant="helperText" color="secondary" className="mt-1">
						{helperText}
					</Typography>
				)}
				{!hideError && error && (
					<Typography variant="err" color="danger" className="mt-1">
						{error?.message?.toString()}
					</Typography>
				)}
			</div>
		</div>
	);
}

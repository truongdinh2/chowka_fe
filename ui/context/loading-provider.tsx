'use client';

// contexts/loadingContext.tsx
import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

import ReactDOM from 'react-dom';

interface LoadingContextType {
	setLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
	children: ReactNode;
}

const loadingClassnames =
	'flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50';
const renderLoading = () => {
	return ReactDOM.createPortal(
		<div className={loadingClassnames}>
			<p>Loading...</p>
		</div>,
		document.body
	);
};

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
	const [loading, setLoading] = useState<boolean>(false);

	return (
		<LoadingContext.Provider value={{ setLoading }}>
			{children}
			{loading && renderLoading()}
		</LoadingContext.Provider>
	);
};

export const useLoading = (): LoadingContextType => {
	const setLoading = useContext(LoadingContext);
	if (!setLoading) {
		throw new Error('useLoading must be used within a LoadingProvider');
	}
	return setLoading;
};
// import { createContext, useContext, useMemo, useState } from 'react';

// import ReactDOM from 'react-dom';

// const LoadingContext = createContext(null);

// export const LoadingProvider = (props: any) => {
// 	const [loading, setLoading] = useState<boolean>(false);
// 	const { children, ...others } = props;
// 	// Tạo một Portal để render phần tử loading
// 	const renderLoading = () => {
// 		return ReactDOM.createPortal(
// 			<p>Loading...</p>, // Thay thế với spinner hoặc animation của bạn
// 			document.body
// 		);
// 	};
// 	const value = useMemo(() => {
// 		return { loading, setLoading };
// 	}, [loading, setLoading]);
// 	return (
// 		<LoadingContext.Provider value={value} {...others}>
// 			{children}
// 			{loading && renderLoading()}
// 		</LoadingContext.Provider>
// 	);
// };

// export const useLoading = () => {
// 	const setLoading = useContext<any>(LoadingContext);
// 	if (!setLoading) {
// 		throw new Error('useLoading must be used within a LoadingProvider');
// 	}
// 	return setLoading;
// };

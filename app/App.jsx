'use client';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { useEffect } from 'react';

export const App = (props) => {
  
	return (
		<>
			<Header />
			{props.children}
			<Footer />
		</>
	);
};

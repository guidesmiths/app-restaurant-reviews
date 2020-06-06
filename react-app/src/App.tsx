import React from 'react';

import AppRoutes from './AppRouter';
import { LoginContextProvider } from './context/LoginContext';

const App = () => (
	<LoginContextProvider>
		<AppRoutes />
	</LoginContextProvider>
);

export default App;

import React from 'react';

import AppRoutes from './AppRouter';
import { LoginContextProvider } from './context/LoginContext';
import { RefreshContextProvider } from './context/RefreshContext';

const App = () => (
	<LoginContextProvider>
		<RefreshContextProvider>
			<AppRoutes />
		</RefreshContextProvider>
	</LoginContextProvider>
);

export default App;

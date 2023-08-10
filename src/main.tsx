import '@/styles/global.css'
import "@/styles/normalize.css"

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import {NextUIProvider} from '@nextui-org/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<NextUIProvider>
			<App/>
		</NextUIProvider>
	</React.StrictMode>,
)

postMessage({payload: 'removeLoading'}, '*')
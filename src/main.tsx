import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './tailwind.css'
import Providers from './Provider.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Providers>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Providers>
)

import Navbar from '@/components/Navbar'
import ToasterProvider from '@/providers/ToastProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Joben | Frontend Developer</title>
				<meta
					name='Joben Apao Portfolio'
					content='Frontend Developer portfolio'
				/>
				<link
					rel='icon'
					href='/assets/headLogo.png'
				/>
			</Head>
			<ToasterProvider />
			<Navbar />
			<Component {...pageProps} />
		</>
	)
}

import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

const inter = Inter({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter',
})

const spacegrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-spaceGrotesk',
})

export const metadata: Metadata = {
	title: 'DevFlow',
	description:
		'A community-driven platform asking and answering programming questions Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and',
	icons: {
		icon: './assets/images/logo-dark.svg',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider
			appearance={{
				elements: {
					formButtonPrimary: 'primary-gradient',
					footerActionLink:
						' primary-text-gradient hover:text-primary-500',
				},
			}}
		>
			<html lang="en">
				<body className={`${inter.variable} ${spacegrotesk.variable}`}>
					{/* <h1 className="h1-bold">This is a piece of text</h1> */}
					{children}
				</body>
			</html>
		</ClerkProvider>
	)
}

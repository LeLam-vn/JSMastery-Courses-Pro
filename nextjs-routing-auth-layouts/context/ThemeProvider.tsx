'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextType {
	mode: string
	setMode: (mode: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [mode, setMode] = useState('light')
	
	const handleThemeChange = () => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefer-color-scheme: dark)').matches)
		) {
			setMode('dark')
			document.documentElement.classList.add('dark')
		} else {
			setMode('light')
			document.documentElement.classList.remove('dark')
		}
	}

	useEffect(() => {
		return () => {
			handleThemeChange()
		}
	}, [mode])

	// console.log('MODE-ThemeProvider: ', mode)

	return (
		<ThemeContext.Provider value={{ mode, setMode }}>
			{children}
		</ThemeContext.Provider>
	)
}

export function useTheme() {
	const context = useContext(ThemeContext)
	if (context === undefined) {
		throw new Error('useTheme must be use within a ThemeProvider')
	}
	return context
}

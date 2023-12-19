'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

interface Props {
	title: string
	description: string
	link: string
	linkTitle: string
}

const NoResult = ({ title, description, link, linkTitle }: Props) => {
	return (
		<div className="mt-10 flex flex-col justify-center items-center w-full">
			<Image
				src="/assets/images/light-illustration.png"
				width={270}
				height={200}
				alt="no result illustrator"
				className="block object-contain dark:hidden"
			/>

			<Image
				src="/assets/images/dark-illustration.png"
				alt="no result illustration"
				width={270}
				height={200}
				className="hidden object-contain dark:flex"
			/>
			<h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
			<p className="bodu-regular text-dark500_light700 my-3.5 max-w-md text-center">
				{description}
			</p>

			<Link href="/ask-question">
				<Button className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900">
					{linkTitle}
				</Button>
			</Link>
		</div>
	)
}

export default NoResult

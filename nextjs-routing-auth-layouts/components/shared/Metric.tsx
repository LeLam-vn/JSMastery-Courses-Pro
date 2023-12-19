import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface PropsMetric {
	imgUrl: string
	alt: string
	value: string | number
	title: string
	textStyles?: string
	href?: string
	isAuthor?: boolean
}

const Metric = ({
	imgUrl,
	alt,
	value,
	title,
	href,
	isAuthor,
	textStyles,
}: PropsMetric) => {
	const MetricContent = (
		<>
			<Image
				src={imgUrl}
				alt={alt}
				width={16}
				height={16}
				className={`object-contain ${href ? 'rounded-full' : ''}`}
			/>
			<p className={`flex items-center gap-1 ${textStyles}`}>
				{value}
				<span
					className={`small-regular line-clamp-1 ${
						isAuthor ? 'max-ms:hidden' : ''
					}`}
				>
					{title}
				</span>
			</p>
		</>
	)

	if (href) {
		return (
			<Link href={href} className="flex-center flex-wrap gap-1">
				{MetricContent}
			</Link>
		)
	} else {
		return (
			<div className="flex-center flex-wrap gap-1  ">{MetricContent}</div>
		)
	}
}

export default Metric

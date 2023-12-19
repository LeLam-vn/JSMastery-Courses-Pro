import Link from 'next/link'
import Image from 'next/image'
import RenderTag from './RenderTag'
import React from 'react'

const RightSidebar = () => {
	const hotQuestion = [
		{
			_id: '1',
			tittle: 'Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?',
		},
		{
			_id: '2',
			tittle: 'Is it only me or the font is bolder than necessary? practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?',
		},
		{ _id: '3', tittle: 'Can I get the course for free?' },
		{ _id: '4', tittle: 'Redux Toolkit Not Updating State as Expected' },
		{ _id: '5', tittle: 'Async/Await Function Not Handling Errors Properly' },
	]

	const popularTags = [
		{ _id: '1', name: 'javascript', totalQuestions: 3 },
		{ _id: '2', name: 'react', totalQuestions: 5 },
		{ _id: '3', name: 'next', totalQuestions: 8 },
		{ _id: '4', name: 'vue', totalQuestions: 11 },
		{ _id: '5', name: 'redux', totalQuestions: 100 },
	]
	return (
		<section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden w-[350px]">
			<div>
				<h3 className="h3-bold text-dark200_light900">Top Questions</h3>
				<div className="mt-7 flex w-full flex-col  gap-[30px]">
					{hotQuestion.map((question) => {
						return (
							<Link
								key={question._id}
								href={`/question/${question._id}`}
								className="flex cursor-pointer items-center justify-between gap-7"
							>
								<p className="body-medium text-dark500_light700">
									{question.tittle}
								</p>
								<Image
									src="/assets/icons/chevron-right.svg"
									width={20}
									height={20}
									alt="chevron-right"
									className="invert-colors"
								/>
							</Link>
						)
					})}
				</div>
			</div>
			<div className="mt-16">
				<div className="h3-bold text-dark200_light900">
					Popular Tasks
				</div>
				<div className='pt-7 flex flex-col gap-4'>
					{popularTags.map((tag) => {
						return (
							<RenderTag
								key={tag._id}
								_id={tag._id}
								name={tag.name}
								totalQuestions={tag.totalQuestions}
                                showCount
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default RightSidebar

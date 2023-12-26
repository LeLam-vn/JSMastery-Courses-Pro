import { Button } from '@/components/ui/button'
import LocalSearchbar from '@/components/shared/search/LocalSearchbar'
import Filter from '@/components/shared/Filter'
import Link from 'next/link'
import { HomePageFilters } from '@/constants/filters'
import HomeFilters from '@/components/home/HomeFilters'
import NoResult from '@/components/shared/NoResult'
import QuestionCard from '../../../components/cards/QuestionCard'
import { getQuestions } from '@/lib/actions/question.action'

export default async function Home() {
	// const questions = [
	// 	{
	// 		_id: 1,
	// 		title: 'Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?',
	// 		tags: [
	// 			{ _id: '1', name: 'python' },
	// 			{ _id: '2', name: 'sql' },
	// 		],
	// 		author: {
	// 			_id: '1',
	// 			name: 'Henry',
	// 			picture: '/assets/icons/bronze-medal.svg',
	// 		},

	// 		upvotes: 3410,
	// 		views: 10344,
	// 		answers: 4000,
	// 		createdAt: new Date('2021-09-01T12:00:00.000Z'),
	// 	},
	// 	{
	// 		_id: 2,
	// 		title: 'Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?',
	// 		tags: [
	// 			{ _id: '1', name: 'python' },
	// 			{ _id: '2', name: 'sql' },
	// 			{ _id: '3', name: 'vue' },
	// 		],
	// 		author: {
	// 			_id: '2',
	// 			name: 'Cubin',
	// 			picture: '/assets/icons/au.svg',
	// 		},
	// 		upvotes: 102310,
	// 		views: 100423413,
	// 		answers: 9008,
	// 		createdAt: new Date('2023-09-01T12:00:00.000Z'),
	// 	},
	// 	{
	// 		_id: 3,
	// 		title: 'Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?',
	// 		tags: [
	// 			{ _id: '1', name: 'java' },
	// 			{ _id: '2', name: 'C#' },
	// 		],
	// 		author: {
	// 			_id: '2',
	// 			name: 'Lam',
	// 			picture: '/assets/icons/computer.svg',
	// 		},
	// 		upvotes: 10124254,
	// 		views: 19222524,
	// 		answers: 1002,
	// 		createdAt: new Date('2022-09-01T12:00:00.000Z'),
	// 	},
	// ]

	const result = await getQuestions({})
	console.log('result.questions-getQuestion: ', result.questions)
	// console.log('result.questions-getQuestion-length: ', result.questions.length)

	return (
		<>
			<div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-conter">
				<h1 className="h1-bold text-dark100_light900 ">
					All Questions
				</h1>
				<Link
					href="/ask-question"
					className="flex justify-end max-sm:w-full"
				>
					<Button className="primary-gradient min-h-[46px] px-4 py-3 ! text-light-900">
						Ask a Question
					</Button>
				</Link>
			</div>
			<div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
				<LocalSearchbar
					route="/"
					iconPosition="left"
					imgSrc="/assets/icons/search.svg"
					placeholder="Search for questions"
					otherClass="flex-1"
				/>
				<Filter
					filters={HomePageFilters}
					otherClasses="min-h-[56px] sm:min-w-[170px]"
					containerClasses="hidden max-md:flex"
				/>
			</div>
			<HomeFilters />

			<div mt-10 w-full flex flex-col gap-6>
				{/* Looping through questions */}
				{result.questions.length > 0 ? (
					result.questions.map((question) => {
						
						return (
							<QuestionCard
								key={question._id}
								_id={question._id}
								title={question.title}
								tags={question.tags}
								author={question.author}
								upvotes={question.upvotes}
								views={question.views}
								answers={question.answers}
								createdAt={question.createdAt}
							/>
						)
					})
				) : (
					<NoResult
						title="There are no question to show"
						description="Be the first to break the silence! 🚀 Ask a Question and
				kickstart the discussion. our query could be the next big thing
				others learn from. Get involved! 💡"
						link="/ask-question"
						linkTitle="Ask a Question"
					/>
				)}
			</div>
		</>
	)
}

import Question from '@/components/forms/Question'
import User from '@/database/user.models'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { getUserById } from '@/lib/actions/user.action'

export default async function Ask_Question() {
	// const { userId } = auth()
	const userId ='clerk_50'

	if(!userId) redirect('/sign-in')

	const mongoUser = await getUserById({userId})

	console.log('mongoUser: ', mongoUser)

	return (
		<div>
			<h1 className="h1-bold text-dark100_light900">Ask a Question</h1>
			<div className="mt-9">
				<Question mongoUserId = {JSON.stringify(mongoUser._id)}/>
			</div>
		</div>
	)
}

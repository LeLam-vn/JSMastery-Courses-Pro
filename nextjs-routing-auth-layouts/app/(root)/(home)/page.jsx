import { UserButton } from "@clerk/nextjs";
export default function Home_Page() {
	return (
		<>
			<header>
				<UserButton afterSignOutUrl="/" />
			</header>
			<h1>Home Page</h1>
			<div>Your home page's content can go here.</div>
			<p>http://localhost:3000/</p>
		</>
	)
}

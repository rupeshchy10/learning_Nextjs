import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: {
		absolute: "Blog",
	},
};

export default async function Blog() {
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve("intentional delay");
		}, 2000);
	});
	return (
		<>
			<Link href="/">Home</Link>
			<h1>My Blog</h1>
		</>
	);
}

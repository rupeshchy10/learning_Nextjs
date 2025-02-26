import Link from "next/link";

export default function Home() {
	return (
		<>
			<h1>Welcome Home</h1>
			<Link href="/blog">Blog</Link>
			<br />
			<Link href="/products">Products</Link>
			<br />
			<Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
			<br />
			<Link href="/articles/breaking-news-123?lang=np">Read in Nepali </Link>
		</>
	);
}

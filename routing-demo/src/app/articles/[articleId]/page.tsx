"use client";
import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
   params,
   searchParams,
}:{
   params: Promise<{articleId:string}>;
   searchParams: Promise<{lang?:"en"|"es"|"np"}>;
}) {
   const {articleId} = use (params);
   const {lang="en"} = use (searchParams);
	return (
		<div>
			<h1>News article {articleId}</h1><br/>
			<p>Reading in {lang}</p><br/>

			<div>
				<Link href={`/articles/${articleId}?lang=en`}>English</Link><br/>
				<Link href={`/articles/${articleId}?lang=es`}>Spanish</Link><br/>
				<Link href={`/articles/${articleId}?lang=np`}>Nepali</Link>
			</div>
		</div>
	);
}

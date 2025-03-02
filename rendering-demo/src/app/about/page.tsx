import { cookies } from "next/headers";

export default async function AboutPage() {
	const cookieStore = await cookies();
	const theme = cookieStore.get("theme") || "default-theme";
	console.log(theme);
	console.log("About server component");
	return <h1>About Page {new Date().toLocaleTimeString()}</h1>;
}

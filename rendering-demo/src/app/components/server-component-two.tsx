import fs from "fs";

export const ServerComponentTwo = () => {
	fs.readFileSync("src/app/components/server-component-two.tsx", "utf-8");

	return <h1>Server component two</h1>;
};

"use client";

import { useState } from "react";

export const ClientComponentTwo = () => {
	const [name, setName] = useState("Hello World Part-2");
	return <h1>Client Component Two</h1>;
};

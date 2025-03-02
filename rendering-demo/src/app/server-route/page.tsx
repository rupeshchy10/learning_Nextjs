import { ImageSlider } from "../components/ImageSlider";
import { serverSideFunction } from "../utils/server-utils";

export default function ServerRoutePage() {
	const result = serverSideFunction();
	return (
		<>
			<h1>Server route {result}</h1>
			<ImageSlider />
		</>
	);
}

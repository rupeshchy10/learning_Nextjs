import { ImageSlider } from "../components/ImageSlider";
import { clientSideFunction } from "../utils/client-utils";
import { serverSideFunction } from "../utils/server-utils";

export default function ServerRoutePage() {
	const result = serverSideFunction();
	const clientResult = clientSideFunction();
	return (
		<>
			<h1>
				{" "}
				Server route {result} {clientResult}
			</h1>
			<ImageSlider />
		</>
	);
}

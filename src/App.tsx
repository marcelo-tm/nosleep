import NoSleepApp from "no-sleep-app";
import { useEffect } from "react";
import Timer from "./components/Timer";
import { detectIsMobile } from "./helpers/detectIsMobile";

function App() {
	const isMobile = detectIsMobile();

	useEffect(() => {
		if (isMobile) {
			const noSleep = new NoSleepApp();
			noSleep.enable();
		}
	}, [isMobile]);

	return isMobile ? (
		<Timer />
	) : (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
				fontSize: "6rem",
				fontWeight: "bold",
			}}
		>
			Desktop browser
		</div>
	);
}

export default App;

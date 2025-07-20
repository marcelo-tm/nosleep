import { format } from "date-fns";
import { useEffect, useState } from "react";

function Timer() {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((s) => s + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	// Format as MM:SS
	const formatted = format(new Date(seconds * 1000), "mm:ss");

	return (
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
			{formatted}
		</div>
	);
}

export default Timer;

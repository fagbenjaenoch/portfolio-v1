import type React from "react";
import { useEffect, useMemo, useState } from "react";

export default function Time(props: React.HTMLAttributes<HTMLSpanElement>) {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const timerId = setInterval(() => setDate(new Date()), 1000);

		return () => {
			clearInterval(timerId);
		};
	}, []);

	const localTime = useMemo(() => {
		const formatter = new Intl.DateTimeFormat("en-GB", {
			timeZone: "Africa/Lagos",
			hour: "numeric",
			minute: "numeric",
			second: "numeric",
			timeZoneName: "short",
		});

		return formatter.format(date);
	}, [date]);

	return <span {...props}>{localTime}</span>;
}

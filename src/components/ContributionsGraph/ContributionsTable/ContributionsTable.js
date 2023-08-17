import { useEffect, useState } from "react";
import TableRow from "./TableRow/TableRow";

import styles from "./ContributionsTable.module.css";

export default function Table() {
	const [ contributions, setContributions ] = useState(null);

	useEffect(() => {
		(async () => {
			const res = await fetch("https://dpg.gg/test/calendar.json");

			const data = await res.json();

			setContributions(data);
		})()
	}, [])

	const date = new Date();

	let initialDate = date.getTime() - 604800000 * 50; //50 weeks ago

	if(date.getDay() < 1) {
		initialDate = initialDate - 86400000 * 6
	} else if (date.getDay() > 1) {
		initialDate = initialDate - 86400000 * (date.getDay() - 1);
	}

	if(!contributions) return <p>Loading...</p>

	return (
		<table className={styles.table}>
			<thead>

			</thead>
			<tbody>
				<TableRow initialDate={initialDate} contributions={contributions} />
				<TableRow initialDate={initialDate + 86400000} contributions={contributions} />
				<TableRow initialDate={initialDate + 86400000 * 2} contributions={contributions} />
				<TableRow initialDate={initialDate + 86400000 * 3} contributions={contributions} />
				<TableRow initialDate={initialDate + 86400000 * 4} contributions={contributions} />
				<TableRow initialDate={initialDate + 86400000 * 5} contributions={contributions} />
				<TableRow initialDate={initialDate + 86400000 * 6} contributions={contributions} />
			</tbody>
		</table>
	)
}
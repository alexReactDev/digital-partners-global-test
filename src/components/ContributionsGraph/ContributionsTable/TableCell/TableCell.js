import { useEffect, useState } from "react";
import styles from "./TableCell.module.css";

export default function TableCell({ value, cellKey, children }) {
	const [ displayPopOver, setDisplayPopover ] = useState(false);

	function returnColor() {
		if(value >= 30) {
			return styles.cell_blue4;
		} else if (value >= 20) {
			return styles.cell_blue3;
		} else if (value >= 10) {
			return styles.cell_blue2;
		} else if (value >= 1) {
			return styles.cell_blue;
		} else {
			return styles.cell_gray;
		}
	}

	useEffect(() => {
		function clickAwayHandler(e) {
			if(!e.target.closest(`[data-cell="${cellKey + ""}"]`)) {
				setDisplayPopover(false);
			}
		}

		window.addEventListener("click", clickAwayHandler);

		return () => window.removeEventListener("click", clickAwayHandler);
	})

	return (
		<div className={`${styles.cell} ${returnColor()} ${displayPopOver ? styles.cell_active : ""}`} onClick={() => setDisplayPopover(true)} data-cell={cellKey + ""}>
			{
				displayPopOver
				&&
				<div className={styles.popover}>
					<div className={styles.popover__body}>
						{children}
					</div>
				</div>
			}
		</div>
	)
}
import React, { useMemo } from "react";
import style from "./style";
import { css } from "aphrodite";

const Modal = ({ isOpen, onClose, children }) => {
	if (isOpen)
		return (
			<div className={css(style.container)}>
				<div className={css(style.outside)} onClick={onClose} />
				<div className={css(style.inside)}> {children}</div>
			</div>
		);
	else return <></>;
};

export { Modal };

import React from "react";
import { css } from "aphrodite";
import style from "./style";

export const RemoveButton = ({ onClick }) => (
	<div className={css(style.removeButton)} onClick={onClick}>
		X
	</div>
);

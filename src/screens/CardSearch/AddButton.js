import React from "react";
import { css } from "aphrodite";
import style from "./style";

export const AddButton = ({ onClick }) => (
	<div className={css(style.addButton)} onClick={onClick}>
		Add
	</div>
);

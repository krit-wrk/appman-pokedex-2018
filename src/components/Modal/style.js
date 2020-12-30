import { COLORS } from "./../../constants";
import { StyleSheet } from "aphrodite";
export default StyleSheet.create({
	container: {
		height: "100%",
		width: "100%",
		position: "absolute",
		zIndex: 1000,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	outside: {
		height: "100%",
		width: "100%",
		backgroundColor: COLORS.ModalOutside,
	},
	inside: {
		position: "absolute",
		backgroundColor: COLORS.ModalContentBackground,
	},
});

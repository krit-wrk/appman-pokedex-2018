import { StyleSheet } from "aphrodite";
import { COLORS } from "../../constants";
export default StyleSheet.create({
	container: {
		display: "flex",
		flex: 1,
		flexDirection: "column",
	},
	titleContainer: {
		height: "100px",
		marginTop: "16px",
		fontSize: "50px",
		textAlign: "center",
	},
	dexContainer: {
		display: "flex",
		flex: 1,
		flexWrap: "wrap",
		flexDirection: "row",
		overflowX: "scroll",
		alignContent: "flex-start",
	},
	footer: {
		display: "flex",
		flexDirection: "row",
		// flex: 1,
		height: "60px",
		width: "100%",
		bottom: 0,
		backgroundColor: COLORS.BottomBarBackground,
		justifyContent: "center",
	},
	add: {
		marginTop: "-40px",
		height: "100px",
		width: "100px",
		borderRadius: "50px",
		backgroundColor: COLORS.BottomBarBackground,
		boxShadow: `inset 0 10px 5px -0px ${COLORS.BottomBarBoxShadow}`,
		justifyContent: "center",
		textAlign: "center",
		fontSize: "60px",
		color: COLORS.BottomBarTextColor,
		zIndex: 100,
	},
	card: {
		width: "45%",
		margin: "16px",
	},

	removeButton: {
		textAlign: "center",
		fontSize: "25px",
		color: COLORS.AddButton,
	},
});

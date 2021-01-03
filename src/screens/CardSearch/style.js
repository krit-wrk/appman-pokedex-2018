import { StyleSheet } from "aphrodite";
import { COLORS } from "../../constants";
export default StyleSheet.create({
	container: {
		display: "flex",
		width: "900px",
		margin: "32px",
		flex: 1,
		flexDirection: "column",
		backgroundColor: COLORS.ModalContentBackground,
	},
	titleContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderColor: COLORS.SearchBoxBorder,
		borderStyle: "solid",
		padding: "8px",
		margin: "16px",
	},
	seacrhInput: {
		fontSize: "40px",
		borderStyle: "none",
		paddingLeft: "8px",
		flex: 1,
		fontFamily: "Gaegu",
	},
	seacrhImg: {
		width: "50px",
	},
	cardListContainer: {
		display: "flex",
		flex: 1,
		flexDirection: "column",
		overflowX: "scroll",
		alignItems: "center",
	},
	EmptyContainer: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignIems: "center",
	},
	EmptyText: {
		textAlign: "center",
		fontSize: "50px",
		fontFamily: "Gaegu",
		color: COLORS.EmptyTextColor,
	},
	card: {
		width: "95%",
		padding: "16px",
	},

	addButton: {
		textAlign: "center",
		fontSize: "25px",
		color: COLORS.AddButton,
	},
});

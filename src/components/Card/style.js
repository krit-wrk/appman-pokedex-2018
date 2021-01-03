import { COLORS } from "./../../constants";
import { StyleSheet } from "aphrodite";
export default StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		flex: 1,
		padding: "8px",
		backgroundColor: COLORS.CardBackground,
		boxShadow: `1px 1px 10px 1px ${COLORS.CardShadow}`,
		":hover": {
			boxShadow: `1px 1px 10px 1px ${COLORS.CardShadowHover}`,
		},
		alignItems: "center",
	},
	imageContainer: {
		display: "flex",
		justifyContent:'center',
		width: "130px",
		padding: "8px",
	},
	image: {
		maxWidth: "100%",
		maxHeight: "100%",
	},
	desc: {
		flex: 1,
		flexDirection: "column",
		padding: "8px",
	},

	name: {
		fontSize: "30px",
		fontFamily: "Gaegu",
	},
	titleContainer: {
		display: "flex",
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: "50px",
	},

	descContainer: {
		display: "flex",
		flexDirection: "row",
		flex: 1,
		alignItems: "center",
	},
	descText: {
		fontSize: "20px",
		width: "100px",
	},
	descBar: {
		display: "flex",
		flex: 1,
		maxWidth: "50%",
	},

	cuteContainer: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		flex: 1,
		alignItems: "center",
		height: "35px",
	},
	cuteImage: {
		width: "35px",
		padding: "2px",
	},
});

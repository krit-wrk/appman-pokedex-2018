import { COLORS } from './../../constants'
const styles = {
  container: {
    height: '20px',
    width: "100%",
    backgroundColor: COLORS.BarBackground,
    borderRadius: 50,
    boxShadow: `1px 1px 3px ${COLORS.BarShadow}`
  },
  bar: {
    backgroundColor: COLORS.BarValue,
    borderRadius: "inherit",
    textAlign: "right",
    height: "100%",
  }
}
export default styles

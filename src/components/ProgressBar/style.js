import { COLORS } from './../../constants'
import { StyleSheet } from 'aphrodite'
export default StyleSheet.create({
  container: {
    height: '15px',
    width: "100%",
    backgroundColor: COLORS.BarBackground,
    borderRadius: 8,
    boxShadow: `1px 1px 3px ${COLORS.BarShadow}`
  },
  bar: {
    backgroundColor: COLORS.BarValue,
    borderRadius: "inherit",
    textAlign: "right",
    height: "100%",
  }
})

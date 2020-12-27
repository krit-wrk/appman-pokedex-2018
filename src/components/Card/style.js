import { COLORS } from './../../constants'
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    padding: '8px',
    backgroundColor: COLORS.CardBackground,
  },

  image: {
    width: '150px',
  },
  desc: {
    flex: 1,
    flexDirection: 'column',
    padding: '8px'
  },

  name: {
    fontSize: '40px',
    fontFamily: "Gaegu",
  },

  descContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  descText: {
    fontSize: '25px',
    width: '100px'
  },
  descBar: {
    display: 'flex',
    flex: 1,
  },

  cuteContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  cuteImage: {
    width: '50px',
    padding: '2px'
  }

}
export default styles
import {
  connect
} from 'react-redux'
// import {
//   rankListInit,
//   rankListAdd
// } from '../modules/reducer'

import Player from '../components/Player'

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => dispatch({
      type: 'increase'
    })
  }
};

const mapStateToProps = (state) => ({
  test: state.test
});

// const Component = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Player)

// export default Component;
export default connect(mapStateToProps, mapDispatchToProps)(Player)
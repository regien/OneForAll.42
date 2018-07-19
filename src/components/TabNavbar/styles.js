import themes from '../../themes';

const styles = themes => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: themes.palette.background.paper,
    // width: '100%',
    // marginTop: 12,
    position: 'fixed',
    bottom: 0
  }
});

export default styles;

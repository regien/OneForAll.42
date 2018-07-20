const styles = theme => ({
  root: {
    flexGrow: 1,
    // justifyContent: 'space-between',
    // backgroundColor: 'blue'
  },
  webviewContainer: {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '56.25%'
  },
  webview: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0
  }
});

export default styles;

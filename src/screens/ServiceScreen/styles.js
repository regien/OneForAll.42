const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  webviewContainer: {
    position: 'relative',
    overflow: 'hidden'
  },
  webview: {
    display: 'flex',
    width: '100%',
    height: 'calc(100vh - 100px)',
    border: 'none'
  }
});

export default styles;

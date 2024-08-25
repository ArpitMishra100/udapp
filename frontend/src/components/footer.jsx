const Foot = () => {

  const footerStyle = {
    backgroundColor:'black',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    width: '100%',
    position: 'bottom',
    bottom: '0',
    left: '0',
  };

  return <footer style={footerStyle}>
  <p>&copy; 2024 S3 File Manager. All rights reserved.</p>
</footer>
}

export default Foot;
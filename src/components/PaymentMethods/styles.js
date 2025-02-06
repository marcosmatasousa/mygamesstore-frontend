const styles = {
  paymentContainer: {
    borderRadius: 1,
    backgroundColor: '#263241',
    height: 'max-content',
    fontWeight: 'bold',
  },
  header: {
    fontWeight: 'bold',
    marginBottom: '0.8vh',
    fontSize: '0.75vw',
  },
  method: {
    display: 'flex',
    flexDirection: 'column',
    title: {
      fontWeight: 'bold',
      marginLeft: '0.1vw',
      fontSize: '0.75vw',
    },
    subtitle: {
      marginLeft: '2.4vw',
      fontSize: '0.65vw',
      color: '#0699CC',
    },
    iconsContainer: {
      marginLeft: '2.2vw',
    },
  },
  finalPrice: {
    gap: 2,
    backgroundColor: '#263241',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 1,
    contained: {
      display: 'flex',
      width: '90%',
      flexDirection: 'column',
      gap: '1vw',
      padding: '1vw',
      typo: {
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: 'bold',
        fontSize: '0.75vw',
      },
    },
  },
};

export default styles;

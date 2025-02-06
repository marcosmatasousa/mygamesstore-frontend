const styles = {
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "2vh",
    typo: {
      fontSize: "2.75vw",
      fontWeight: "bold",
    },
    button: {
      padding: "0.7vw",
      fontWeight: "bold",
      backgroundColor: "#0099cc",
    },
  },
  cartContainer: {
    display: "flex",
    gap: "1vw",
  },
  cart: {
    width: "35vw",
    backgroundColor: "#263241",
    borderRadius: 1,
    height: "max-content",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  product: {
    fontWeight: "bold",
    fontSize: "0.75vw",
  },
  subtotal: {
    marginTop: "0.1vw",
    fontSize: "1.6vw",
    fontWeight: "bold",
  },
  clear: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#FF4466",
    gap: "0.3vw",
    fontSize: "1vw",
    cursor: "pointer",
  },
  info: {
    width: "35vw",
    backgroundColor: "#263241",
    borderRadius: 1,
    fontSize: "0.70vw",
    marginTop: "2vh",
    display: "flex",
    flexDirection: "column",
    padding: "1.2vw 0vw",
    title: {
      fontSize: "0.75vw",
      fontWeight: "bold",
      marginLeft: "1vw",
    },
  },
};

export default styles;

const styles = {
  card: {
    width: "14.7vw",
    borderRadius: "0.3vw",
    backgroundColor: "#202C3B",
    height: "max-content",
  },
  cardMedia: {
    component: "img",
    height: "8vw",
  },
  cardContent: {
    color: "white",
    height: "4vw",
    whiteSpace: "nowrap",
    overflow: "hidden",
    paddingBottom: "0",
    paddingLeft: "0",
    marginLeft: "0.7vw",
    typography: {
      fontWeight: "bold",
      fontSize: "1vw",
      fontFamily: "Inter, Open Sans, Arial, Helvetica",
    },
    chip: {
      color: "white",
      backgroundColor: "#354658",
      fontFamily: "Inter, Open Sans, Arial, Helvetica",
      width: "max-content",
      fontSize: "0.65vw",
      height: "1.1vw",
    },
    box: {
      display: "flex",
      gap: "0.5vw",
    },
  },
  cardActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
    paddingTop: "0",
    button: {
      width: "100%",
      height: "2.5vw",
      fontSize: "0.8vw",
      textAlign: "center",
      backgroundColor: "#384657",
      color: "white",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#CC3333",
      },
      cart: {
        marginRight: 1,
      },
    },
  },
};

export default styles;

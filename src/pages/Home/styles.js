const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "12vh",
  },
  search: {
    width: "100%",
  },
  games: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "3vw",
    marginTop: "6vh",
    marginBottom: "6vh",
  },
  skeleton: {
    width: "14.7vw",
    height: "34.5vh",
    backgroundColor: "#202C3B",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 2,
    content: {
      width: "95%",
      marginBottom: "4%",
    },
  },
};

export default styles;

export const backgroundStyle = (imageUrl) => ({
  background: `linear-gradient(to top, #151d27 0%, rgba(21, 29, 39, 1) 50%, rgba(21, 29, 39, 0.5) 100%), url('${imageUrl}')`,
  backgroundSize: "100% 100%, cover",
  backgroundRepeat: "no-repeat, no-repeat",
  backgroundPosition: "center, center",
  width: "99vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  marginBottom: "10vh",
});

export const styles = {
  container: {
    width: "70vw",
    marginTop: "9vh",
    display: "flex",
    flexDirection: "column",
    gap: "2vw",
  },
  title: {
    height: "max-content",
    display: "flex",
    gap: "2vw",
    alignItems: "center",
    typogaphy: {
      fontFamily: "Inter, Open Sans, Arial, Helvetica",
      fontWeight: "bold",
      fontSize: "2.75vw",
    },
    image: {
      width: "9vw",
      height: "5vw",
      borderRadius: 1,
    },
    chips: {
      display: "flex",
      gap: "0.2vw",
    },
    chip: {
      color: "white",
      backgroundColor: "#354658",
      fontFamily: "Inter, Open Sans, Arial, Helvetica",
      width: "max-content",
      fontSize: "0.65vw",
      height: "1.1vw",
    },
  },
  main: {
    display: "flex",
    gap: "3%",
  },
  carousel: { width: "70%", height: "100%" },
  info: {
    width: "25%",
    height: "max-content",
    display: "flex",
    flexDirection: "column",
    gap: "2vw",
  },
  pricing: {
    borderRadius: 2,
    display: "flex",
    flexDirection: "column",
    gap: "1vh",
    backgroundColor: "#263241",
    padding: "5%",
  },
  regions: {
    borderRadius: 2,
    backgroundColor: "#263241",
    padding: "5%",
    title: {
      fontFamily: "Inter",
      fontSize: "1vw",
      marginBottom: "1vw",
    },
    typo: {
      fontFamily: "Inter",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    gap: "1vh",
    backgroundColor: "#263241",
    padding: "5%",
    borderRadius: 2,
    typo: {
      fontFamily: "Inter",
      marginBottom: "1vh",
    },
    dev: {
      marginBottom: "2vh",
    },
  },
  tags: {
    typo: {
      fontFamily: "Inter",
      marginBottom: "1vh",
    },
    chip: {
      backgroundColor: "white",
      fontFamily: "Inter",
      fontWeight: "bold",
      marginRight: "0.2vw",
      marginBottom: "0.5vw",
    },
  },
};

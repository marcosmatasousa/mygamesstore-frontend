import { Box, Chip, Typography } from "@mui/material";
import { backgroundStyle, styles } from "./styles";

import Carousel from "react-material-ui-carousel";

import { useLocation, useParams } from "react-router-dom";

import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";



import { addToCartAPI } from "../../utils/utils";

export default function ProductPage() {
  const { gameTitle } = useParams();
  const location = useLocation();
  const backgroundImg = location.state.imgUrl;
  const genres = location.state.genres;
  const short_screenshots = location.state.short_screenshots;
  const price = location.state.price;
  const productId = location.state.productId;
  const releaseDate = location.state.releaseDate;
  const tags = location.state.tags;

  short_screenshots.splice(0, 1);

  const displayScreenshots = short_screenshots.map((image, index) => {
    return (
      <Box
        component="img"
        src={image}
        sx={{ width: "100%", borderRadius: 2 }}
        key={index}
      />
    );
  });

  const chips = tags.map((tag, index) => {
    return <Chip label={tag} sx={styles.tags.chip} key={index} />;
  });

  const displayGenres = genres.map((genre, index) => {
    return (
      <Chip label={genre} size="small" sx={styles.title.chip} key={index} />
    );
  });

  async function addToCart(productId) {
    try {
      await addToCartAPI(productId);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box component="main" sx={backgroundStyle(backgroundImg)}>
      <Box component="section" sx={styles.container}>
        <Box sx={styles.title}>
          <Box
            sx={styles.title.image}
            component="img"
            alt="game image"
            src={backgroundImg}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5vw",
            }}
          >
            <Typography sx={styles.title.typogaphy} variant="h1">
              {gameTitle}
            </Typography>
            <Box sx={styles.title.chips}>{displayGenres}</Box>
          </Box>
        </Box>
        <Box component="section" sx={styles.main}>
          <Carousel navButtonsAlwaysVisible={true} sx={styles.carousel}>
            {displayScreenshots}
          </Carousel>
          <Box component="section" sx={styles.info}>
            <Box sx={styles.pricing}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "bold",
                  fontSize: "1vw",
                }}
              >
                {`U$D ${price}`}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "0.65vw",
                  marginBottom: "0.65vw",
                }}
              >
                Produto ativado através de chave de ativação.
              </Typography>
              <AddToCartButton
                price={price}
                productId={productId}
                addToCart={addToCart}
              />
            </Box>
            <Box component="section" sx={styles.regions}>
              <Typography sx={styles.regions.title}>
                <b>Regiões Disponíveis:</b>
              </Typography>
              <Typography sx={styles.regions.typo}>
                Argentina, Bolívia, Brasil, Chile, Colômbia, Costa Rica,
                República Dominicana, Equador, El Salvador, Guatemala, Haiti,
                Honduras, México, Nicarágua, Panamá, Paraguai, Peru, Porto Rico,
                Uruguai e Venezuela.
              </Typography>
            </Box>
            <Box component="section" sx={styles.details}>
              <Box sx={styles.details.dev}>
                <Typography sx={styles.details.typo}>
                  <Typography sx={styles.details.typo}>
                    <b>Lançamento: </b>
                    {releaseDate}
                  </Typography>
                </Typography>
                <Typography sx={styles.details.typo}>
                  <b>Desenvolvedora:</b> TruGame Studios
                </Typography>
                <Typography sx={styles.details.typo}>
                  <b>Distribuidora:</b> Games4U
                </Typography>
              </Box>
              <Box component="section" sx={styles.tags}>
                <Typography sx={styles.tags.typo}>
                  <b>Tags:</b>
                </Typography>
                {chips}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

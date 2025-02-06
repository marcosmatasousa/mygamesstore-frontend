import styles from "./styles.js";

import {
  Box,
  List,
  ListItem,
  Divider,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

const creditCard = ["Mastercard", "Visa", "Amex", "PayPal"];
const methods = [
  {
    method: "credit",
    title: "CARTÃO DE CRÉDITO - À VISTA",
    subtitle: "Pague à vista com cartão de crédito",
  },
  {
    method: "credit",
    title: "CARTÃO DE CRÉDITO - PARCELADO",
    subtitle: "Parcele em até 6x sem juros",
  },
  {
    method: "pix",
    title: "PIX",
    subtitle: "Pague via PIX com QR CODE",
  },
  {
    method: "boleto",
    title: "BOLETO",
    subtitle: "Pague via boleto",
  },
];

export default function PaymentMethods({ total }) {
  const displayCreditCards = creditCard.map((flag, index) => {
    return (
      <img
        style={{ width: "2.4vw", height: "3vw" }}
        src={`./src/assets/icons/${flag}.svg`}
        key={index}
      />
    );
  });

  const displayRadio = methods.map((method, index) => {
    return (
      <>
        <FormControlLabel
          value={index}
          control={<Radio />}
          sx={styles.method.title}
          label={
            <Typography variant="body2" style={styles.method.title}>
              {method.title}
            </Typography>
          }
        />
        <Box sx={styles.method}>
          <Typography sx={styles.method.subtitle} variant="subtitle2">
            {method.subtitle}
          </Typography>
          <Box sx={styles.method.iconsContainer}>
            {method.method === "credit" ? (
              displayCreditCards
            ) : (
              <img
                style={{ width: "3vw", height: "3vw" }}
                src={`src/assets/icons/${method.method}.svg`}
              />
            )}
          </Box>
        </Box>
        <Divider />
      </>
    );
  });

  return (
    <Box
      sx={{
        width: "max-content",
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Box component="section" sx={styles.paymentContainer}>
        <List>
          <ListItem>
            <Typography sx={styles.header} variant="body2">
              FORMAS DE PAGAMENTO
            </Typography>
          </ListItem>
          <Divider />
        </List>
        <FormControl sx={{ width: "100%" }}>
          <RadioGroup>{displayRadio}</RadioGroup>
        </FormControl>
      </Box>
      <Box component="section" sx={styles.finalPrice}>
        <Box sx={styles.finalPrice.contained}>
          <Box sx={styles.finalPrice.contained.typo}>
            <Typography sx={styles.finalPrice.contained.typo} variant="body2">
              VALOR TOTAL
            </Typography>
            <Typography sx={styles.finalPrice.contained.typo} variant="body2">
              {total}
            </Typography>
          </Box>
          <Button
            sx={{
              backgroundColor: "#CC3333",
              padding: "0.5vw",
              fontWeight: "bold",
              fontSize: "0.75vw",
            }}
            variant="contained"
          >
            FINALIZAR
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

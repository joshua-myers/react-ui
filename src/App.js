import { Container } from "@mui/material";
import "./styles.css";
import { Url } from "./components/Url";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Container
        disableGutters
        fluid
        maxWidth={false}
        sx={{ minHeight: "100vh" }}
      >
        <Header />
        <Main />
        <Url />
        <Footer />
      </Container>
    </div>
  );
}

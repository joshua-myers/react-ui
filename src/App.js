import { Container } from "@mui/material";
import "./styles.css";
import { Url } from "./components/Url";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Content } from "./components/Content";

export default function App() {
  return (
    <div className="App">
      <Container disableGutters fluid sx={{ minHeight: "100vh" }}>
        <Header />
        <Main />
        <Url />
        <Content />
        <Footer />
      </Container>
    </div>
  );
}

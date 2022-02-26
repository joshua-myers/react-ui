import { Container } from "@mui/material";
import "./styles.css";
import { Url } from "./components/Url";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Main />
        <Url />
      </Container>
    </div>
  );
}

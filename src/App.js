import { Container } from "@mui/material";
import "./styles.css";
import { Url } from "./components/Url";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Url />
      </Container>
    </div>
  );
}

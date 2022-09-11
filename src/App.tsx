import Container from "@mui/material/Container";
import React from "react";
import MyForm from "./components/MyForm";


const App: React.FC = () => {
  return (
    <Container maxWidth="xs" sx={{ textAlign: "center" }}>
      <MyForm />
    </Container>
  );
};

export default App;

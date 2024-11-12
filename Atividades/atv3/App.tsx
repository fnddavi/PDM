import React from "react";
import { ContactProvider } from "./src/context/contactContext";
import MainStack from "./src/screens/mainStack";


const App: React.FC = () => (
  <ContactProvider>
    <MainStack />
  </ContactProvider>
);

export default App;
//
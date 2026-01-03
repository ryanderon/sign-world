import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home, Printing, Merchandise, PrintingInstallation } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/printing" element={<Printing />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/printing-installation" element={<PrintingInstallation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

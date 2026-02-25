import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import {Toaster } from "sonner"
import WalletConnect from "./components/WalletConnect/WalletConnect";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<WalletConnect/>} />
    </Routes>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
        <Toaster/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

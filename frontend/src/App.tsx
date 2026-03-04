import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import {Toaster } from "sonner"
import WalletConnect from "./components/WalletConnect/WalletConnect";
import AuthContextProider from "./contexts/AuthContext";
import SelectRole from "./components/Profile/SelectRole";
import CompleteProfile from "./components/Profile/CompleteProfile";
import Dashbord from "./pages/Dashbord";
import PrivateRoute from "./components/PrivateRoute";




const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<WalletConnect/>} />
      <Route path="/select-role" element={<SelectRole/>} />
      <Route path="/complete-profile" element={<CompleteProfile/>} />

      <Route path="/dashbord" element={
        <PrivateRoute roles={"client"} requireCompleteProfile={true}>
          <Dashbord/>
        </PrivateRoute>
      }/>

    </Routes>
  );
};

function App() {
  return (
    <>
      <AuthContextProider>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
        <Toaster/>
        <Footer />
      </BrowserRouter>
      </AuthContextProider>
    </>
  );
}

export default App;

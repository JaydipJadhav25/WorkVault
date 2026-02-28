import { useAuth } from "@/contexts/AuthContext";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAccount } from "wagmi";
// import { useAuth } from "./context/AuthContext";


function WalletConnect() {
  const { address, isConnecting, isConnected } = useAccount();
  // const[] = useState()

  console.log(isConnected, address);


  //login with user

  //flow =>
  //1 first user connect wallet -> wagmi give status and accounr addres
  //2. sccuessfully get account address then show login botton ok
  //3. login => save in db and verify user signetuee  if all done det user cookis fro user is system authemticate
  //4 . check usr response and checl profile compelete if yes => ok . otherwise navigate om  profile complete

      const navigate = useNavigate();



    const {loginWithWallet , loading }  = useAuth();
     

     //user login
  const handleLogin = async () => {
    try {
      //check user connect to wallet
      if (!address || !isConnected) {
        toast.warning("wallet not yet Connected!");
        return;
      }

      const result = await loginWithWallet(address);
       
      console.log("result : " , result);

      //check result and navigate
      //1.user profile is not compelte
      if (result.success) {
        if (result.isProfileComplete) {
          navigate("/dashboard");
          toast.warning("Login In Platform Successfully!");
         
        } else {
          toast.warning("Create You Profile!");
          navigate("/select-role");

        }
      }
    } catch (error) {
      console.log("user login error : ", error);
      toast.error("User Login Erro!");
    }
  };
    















return (
  <div className="min-h-screen flex items-center justify-center px-6 bg-background relative overflow-hidden">
      
      

    {/* Subtle Background Glow */}
    <div className="absolute inset-0 -z-10 
      bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.15),transparent_40%),
          radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_40%)]" 
    />

    <div className="w-full max-w-md backdrop-blur-2xl bg-background/60 
      border border-border/60 rounded-2xl shadow-xl p-8 text-center">

      {/* Heading */}
      <h1 className="text-3xl font-bold tracking-tight">
        Connect Your Wallet
      </h1>

      {/* Caption */}
      <p className="mt-4 text-muted-foreground text-sm">
        WorkVault uses blockchain-based authentication.  
        Connect your wallet to securely access your freelance contracts.
      </p>

      {/* Status Message */}
      {isConnecting && (
        <div className="mt-6 flex items-center justify-center gap-2 text-primary">
          <div className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <span className="text-sm font-medium">
            Connecting to wallet...
          </span>
        </div>
      )}

      {/* Buttons */}
      <div className="mt-8 flex justify-center">
        {!isConnected ? (
          <ConnectButton />
        ) : (

          <button
            onClick={() => {
               handleLogin();
            }}
            className="px-6 py-2 rounded-xl 
              bg-primary text-primary-foreground 
              hover:opacity-90 transition 
              font-medium shadow-md cursor-pointer"
          >
            {
              loading ? <>
              <div className="w-5 h-5 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
              </> : "Login"
            }
          </button>

        )}
      </div>

      {/* Extra Info */}
      <p className="mt-6 text-xs text-muted-foreground">
        🔐 Your wallet is your identity.  
        We never store private keys or personal data.
      </p>

    </div>
  </div>
);
}

export default WalletConnect;

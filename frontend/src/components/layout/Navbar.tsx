import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  useAccountModal,
  WalletButton,
} from "@rainbow-me/rainbowkit";

export default function Navbar() {
  const { openAccountModal } = useAccountModal();

  console.log(openAccountModal);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-primary font-semibold"
      : "text-muted-foreground hover:text-primary transition";

  return (
    <nav className="sticky top-4 z-50 flex justify-center px-4">
      <div className="w-full max-w-5xl backdrop-blur-2xl bg-background/60 border border-border/60 shadow-lg rounded-2xl">
        <div className="px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="WorkVault Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold tracking-tight">WorkVault</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/features" className={navLinkClass}>
              Features
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          {/* <Link to="/login">
        <Button>Connect Wallet</Button>
      </Link>

            {openAccountModal && (
        <button onClick={openAccountModal} type="button">
              <WalletButton wallet="metamask" />
        </button>
      )} */}

          {!openAccountModal ? (
            <Link to="/login">
              <Button>Connect Wallet</Button>
            </Link>
          ) : (
            <button onClick={openAccountModal} type="button">
              <WalletButton wallet="metamask" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Index() {
  return (
    <main className="bg-background text-foreground">
      {/* ================= HERO ================= */}
      <section className="relative py-32 overflow-hidden text-center">
        <div className="absolute inset-0" />

        <div className="relative max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Trustless Freelance Payments  
            <span className="text-primary"> Powered by Blockchain</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            WorkVault locks client payments inside a smart contract.
            Funds are released only when work is completed — 
            no middleman, no cheating.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link to="/create-contract">
              <Button size="lg">Start Contract</Button>
            </Link>

            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* ================= PROBLEM ================= */}
      <section className="py-24 border-t">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            The Problem with Freelancing Today
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="p-6 border rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">
                Clients Don’t Pay
              </h3>
              <p className="text-muted-foreground text-sm">
                Freelancers complete work but never receive payment.
              </p>
            </div>

            <div className="p-6 border rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">
                Freelancer Scams
              </h3>
              <p className="text-muted-foreground text-sm">
                Clients pay upfront and freelancers disappear.
              </p>
            </div>

            <div className="p-6 border rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">
                High Platform Fees
              </h3>
              <p className="text-muted-foreground text-sm">
                Traditional platforms take 10–30% commission.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= SOLUTION ================= */}
      <section className="py-24 border-t text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold tracking-tight">
            Our Solution: Smart Contract Escrow
          </h2>

          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Funds are locked on blockchain when contract is created.
            Only when the client approves completion does the 
            smart contract release payment to freelancer.
          </p>
        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="py-24 border-t">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            How WorkVault Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div>
              <h3 className="text-2xl font-bold text-primary">1</h3>
              <p className="mt-4 text-muted-foreground text-sm">
                Client creates contract and deposits payment.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary">2</h3>
              <p className="mt-4 text-muted-foreground text-sm">
                Freelancer completes the agreed work.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary">3</h3>
              <p className="mt-4 text-muted-foreground text-sm">
                Client approves → Smart contract releases funds automatically.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-24 border-t text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold tracking-tight">
            Remove Trust Issues. Let Code Handle Payments.
          </h2>

          <p className="mt-6 text-muted-foreground">
            Transparent. Secure. Decentralized.
          </p>

          <div className="mt-8">
            <Link to="/create-contract">
              <Button size="lg">
                Launch Your First Contract
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
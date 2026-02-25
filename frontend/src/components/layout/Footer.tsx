export default function Footer() {
  return (
    <footer className="border-t bg-background py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-xl font-bold">WorkVault</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Organize. Track. Succeed.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>About</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs text-muted-foreground mt-8">
        © {new Date().getFullYear()} WorkVault. All rights reserved.
      </div>
    </footer>
  )
}
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="relative w-10 h-10">
              <Image src="/honeydo-logo.svg" alt="HoneyDo Logo" fill className="object-contain" />
            </div>
            <span className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-[#4A90E2] to-[#7B68EE] bg-clip-text text-transparent">Honey</span>
              <span className="bg-gradient-to-r from-[#7B68EE] to-[#FF69B4] bg-clip-text text-transparent">Do</span>
            </span>
          </Link>

          {/* Links */}
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <a href="mailto:support@honeydo.life" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">© 2025 HoneyDo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

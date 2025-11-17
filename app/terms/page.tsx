import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsOfService() {
  return (
    <div className="min-h-screen relative">
      {/* Floating gradient circles - matching site branding */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#4A90E2]/20 dark:bg-[#4A90E2]/10 rounded-full filter blur-3xl animate-float" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#FF69B4]/20 dark:bg-[#FF69B4]/10 rounded-full filter blur-3xl animate-float animation-delay-300" />
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-[#7B68EE]/20 dark:bg-[#7B68EE]/10 rounded-full filter blur-3xl animate-float animation-delay-500" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        {/* Header with logo and back button */}
        <div className="flex items-center justify-between mb-12">
          <Link href="/">
            <Button variant="ghost" className="gap-2 hover:bg-transparent group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image src="/honeydo-logo.svg" alt="HoneyDo Logo" fill className="object-contain" />
            </div>
            <span className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-[#4A90E2] to-[#7B68EE] bg-clip-text text-transparent">Honey</span>
              <span className="bg-gradient-to-r from-[#7B68EE] to-[#FF69B4] bg-clip-text text-transparent">Do</span>
            </span>
          </Link>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#4A90E2] via-[#7B68EE] to-[#FF69B4] bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-muted-foreground">Last updated: November 2024</p>
        </div>

        {/* Terms Content Container */}
        <div className="bg-background/80 backdrop-blur rounded-2xl border-2 p-8 md:p-12 shadow-lg">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="space-y-6 text-foreground/80">
              <p className="text-lg font-medium text-foreground">
                These Terms of Service (“Terms”) govern your use of the HoneyDo mobile application (“HoneyDo”), owned and operated by Omos Designs. By creating an account or using HoneyDo, you agree to these Terms.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Overview</h2>
                <p>
                  HoneyDo is a household chore management and gamification app for couples. It allows 
                  users to create and complete tasks, earn points, track weekly competitions, and 
                  personalize their household experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Acceptance of Terms</h2>
                <p>
                  By accessing or using HoneyDo, you agree to be bound by these Terms. If you do not 
                  agree, you must stop using the app immediately. HoneyDo may update these Terms at any 
                  time, and continued use constitutes acceptance of the revised Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Description of Service</h2>
                <p>
                  HoneyDo provides tools for household task coordination, scoring, weekly challenges, 
                  and notifications. Features may change or be improved over time. We reserve the right 
                  to modify or discontinue any part of the service without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. User Accounts</h2>
                <p>
                  To use HoneyDo, users must create an account using Sign in with Apple, Sign in with 
                  Google, or email/password. You agree to:
                </p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Provide accurate account information</li>
                  <li>Maintain the security of your login credentials</li>
                  <li>Not share your account with others</li>
                </ul>
                <p className="mt-4">
                  Each user must maintain their own account. Households are limited to two users. 
                  Creating duplicate accounts or misrepresenting identity is prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. User Conduct</h2>
                <p>Users agree not to engage in any of the following:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Posting offensive, hateful, explicit, or illegal content</li>
                  <li>Using bots, automation, or scripts to interact with the app</li>
                  <li>Attempting to disrupt or damage HoneyDo systems</li>
                  <li>Harassing or abusing another user</li>
                  <li>Circumventing household member limits</li>
                </ul>
                <p className="mt-4">
                  Violations of these rules may result in account suspension or termination.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
                <p>
                  All app content, branding, graphics, designs, and code are owned by Omos Designs. 
                  Users may not reproduce, modify, distribute, or reverse-engineer any part of HoneyDo 
                  without written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Disclaimers</h2>
                <p>
                  HoneyDo is provided “as-is” and “as-available.” We do not guarantee uninterrupted use, 
                  error-free performance, or specific outcomes. HoneyDo disclaims all warranties, express 
                  or implied, including merchantability, fitness for a particular purpose, and 
                  non-infringement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, Omos Designs and its owner, John Mercer, are 
                  not liable for any indirect, incidental, special, consequential, or punitive damages. 
                  We are not responsible for loss of data, revenue, profits, or any other claim arising 
                  from your use of HoneyDo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Termination</h2>
                <p>
                  We may suspend or terminate accounts that violate these Terms. Users may request 
                  account deletion at any time by contacting support@honeydo.life. Deleted accounts 
                  cannot be restored.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law</h2>
                <p>
                  These Terms are governed by the laws of the State of Illinois. Any disputes shall be 
                  resolved exclusively in the courts located in Chicago, Illinois.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
                <p>
                  If you have questions about these Terms, please contact:
                  <br />
                  <strong>Email:</strong> support@honeydo.life
                  <br />
                  <strong>Owner:</strong> John Mercer (Omos Designs)
                  <br />
                  <strong>Location:</strong> Chicago, Illinois, USA
                </p>
              </section>
            </div>
          </div>
        </div>

        {/* Footer link to Privacy Policy */}
        <div className="text-center mt-8">
          <Link href="/privacy" className="text-[#7B68EE] hover:underline font-medium">
            View our Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}

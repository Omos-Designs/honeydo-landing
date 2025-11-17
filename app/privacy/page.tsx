import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen relative">
      {/* Floating gradient circles - matching site branding */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#7B68EE]/20 dark:bg-[#7B68EE]/10 rounded-full filter blur-3xl animate-float" />
      <div className="absolute top-60 left-10 w-72 h-72 bg-[#4A90E2]/20 dark:bg-[#4A90E2]/10 rounded-full filter blur-3xl animate-float animation-delay-300" />
      <div className="absolute bottom-40 right-1/3 w-72 h-72 bg-[#FF69B4]/20 dark:bg-[#FF69B4]/10 rounded-full filter blur-3xl animate-float animation-delay-500" />

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
              Privacy Policy
            </span>
          </h1>
          <p className="text-muted-foreground">Last updated: November 2024</p>
        </div>

        {/* Privacy Content Container */}
        <div className="bg-background/80 backdrop-blur rounded-2xl border-2 p-8 md:p-12 shadow-lg">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="space-y-6 text-foreground/80">
              <p className="text-lg font-medium text-foreground">
                Your privacy is important to us. This Privacy Policy explains how HoneyDo collects, uses, and protects your information when you use our mobile application.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p>HoneyDo collects only the information necessary to operate and provide our service. This includes:</p>

                <ul className="list-disc ml-6 mt-2">
                  <li>Display name (user-chosen)</li>
                  <li>Email address (from Apple/Google OAuth or email signup)</li>
                  <li>Optional profile picture</li>
                  <li>Theme color preference</li>
                  <li>Device token for push notifications</li>
                  <li>Account creation timestamp</li>
                  <li>Household membership</li>
                  <li>Task creation and completion history</li>
                </ul>

                <p className="mt-4">
                  HoneyDo <strong>does not</strong> collect phone numbers, GPS/location data, contact lists, address books, or any sensitive categories of data such as financial, biometric, or health information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <p>We use your data to:</p>

                <ul className="list-disc ml-6 mt-2">
                  <li>Create and maintain user accounts</li>
                  <li>Synchronize household data between partners</li>
                  <li>Enable task assignment, completion, and scoring</li>
                  <li>Send push notifications about household activity</li>
                  <li>Personalize your in-app experience</li>
                  <li>Provide customer support</li>
                </ul>

                <p className="mt-4">
                  HoneyDo does <strong>not</strong> use your data for advertising, behavioral profiling, or analytics tracking. No analytics SDKs or tracking pixels are installed in the app.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
                <p>
                  We do not sell or rent your personal information. However, we rely on trusted third-party providers to operate our service:
                </p>

                <ul className="list-disc ml-6 mt-2">
                  <li>
                    <strong>Supabase (Database & Authentication)</strong> — stores account data, tasks, and preferences.
                  </li>
                  <li className="mt-2">
                    <strong>Apple Sign-In</strong> — provides your name and email (real or relay), with your consent.
                  </li>
                  <li className="mt-2">
                    <strong>Google OAuth</strong> — provides your email and name, with your consent.
                  </li>
                  <li className="mt-2">
                    <strong>Firebase Cloud Messaging</strong> — processes device tokens and message payloads to deliver push notifications.
                  </li>
                </ul>

                <p className="mt-4">These providers use your data solely to perform services on our behalf.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                <p>
                  We use industry-standard measures such as encryption (HTTPS/TLS), secure authentication, and secure on-device storage (Keychain & UserDefaults).
                </p>
                <p className="mt-4">No method of storage or transmission is 100% secure, and we cannot guarantee absolute security.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
                <p>You have the right to:</p>

                <ul className="list-disc ml-6 mt-2">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request account deletion</li>
                </ul>

                <p className="mt-4">
                  Account deletion and data export are currently handled manually. To request deletion, email{" "}
                  <a href="mailto:support@honeydo.life" className="text-[#7B68EE] hover:underline">
                    support@honeydo.life
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies and Tracking</h2>
                <p>
                  HoneyDo does not use cookies, tracking pixels, fingerprinting, or analytics tracking. Only local device storage is used for login tokens and preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Children's Privacy</h2>
                <p>
                  HoneyDo is intended for users aged 13 and older. We do not knowingly collect data from children under 13. If we discover such an account, we will delete it promptly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy periodically. When changes are made, we will update the “Last updated” date at the top of this page. Continued use of the app constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
                <p>
                  For privacy-related questions, please contact us at{" "}
                  <a href="mailto:support@honeydo.life" className="text-[#7B68EE] hover:underline">
                    support@honeydo.life
                  </a>
                  <br />
                  <strong>Owner:</strong> John Mercer (Omos Designs)
                  <br />
                  <strong>Location:</strong> Chicago, Illinois, USA
                </p>
              </section>
            </div>
          </div>
        </div>

        {/* Footer link to Terms */}
        <div className="text-center mt-8">
          <Link href="/terms" className="text-[#7B68EE] hover:underline font-medium">
            View our Terms of Service
          </Link>
        </div>
      </div>
    </div>
  )
}

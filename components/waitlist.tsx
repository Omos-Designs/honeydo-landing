"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function Waitlist() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setLoading(false)
    setEmail("")
  }

  return (
    <section id="waitlist" className="py-24 px-4 bg-gradient-to-br from-[#4A90E2]/5 via-[#7B68EE]/5 to-[#FF69B4]/5">
      <div className="max-w-3xl mx-auto">
        <Card className="p-8 md:p-12 border-2 shadow-xl">
          {!submitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-6">
                  <div className="relative w-24 h-24">
                    <Image src="/honeydo-logo.svg" alt="HoneyDo Logo" fill className="object-contain" />
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Join the waitlist</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  Be the first to know when HoneyDo launches on iOS. Get exclusive early access and special launch
                  offers!
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-12 text-lg"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="bg-gradient-to-r from-[#4A90E2] to-[#7B68EE] hover:opacity-90 transition-opacity h-12 px-8"
                  >
                    {loading ? "Joining..." : "Join Waitlist"}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-3">You're on the list!</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We'll email you as soon as HoneyDo is ready to download.
              </p>
              <Button variant="outline" onClick={() => setSubmitted(false)}>
                Add another email
              </Button>
            </div>
          )}
        </Card>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Join <span className="font-bold text-foreground">100+</span> couples already on the waitlist
          </p>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4A90E2] to-[#FF69B4] flex items-center justify-center text-white font-bold"
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-bold">
              +495
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

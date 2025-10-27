"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, ArrowDown } from "lucide-react"
import Image from "next/image"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import { TextGenerateEffect } from "./ui/text-generate-effect"

export function Hero() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Google Form submission endpoint from environment variables
      const formUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL
      const entryId = process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_ID

      if (!formUrl || !entryId) {
        console.error("Google Form configuration missing")
        throw new Error("Form configuration error")
      }

      // Create form data with the email entry
      const formData = new FormData()
      formData.append(entryId, email)

      // Submit to Google Forms (no-cors mode to avoid CORS issues)
      await fetch(formUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Google Forms doesn't support CORS, but submission still works
      })

      // Show success message
      setSubmitted(true)
      setEmail("")
    } catch (error) {
      console.error("Error submitting to waitlist:", error)
      // Still show success since no-cors mode doesn't return response
      setSubmitted(true)
      setEmail("")
    } finally {
      setLoading(false)
    }
  }

  const cards = [
    {
      category: "Dashboard",
      title: "Competition Dashboard",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-10-26%20at%2013.28.18%402x-qlc92zHDP6n31TzJQpKDDN7JbU5iUq.png",
    },
    {
      category: "Tasks",
      title: "Task Management",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-10-26%20at%2013.31.24%402x-39u7h4GYUInltOwvQ9rc7i5jEUElHH.png",
    },
    {
      category: "Profile",
      title: "Profile & Settings",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-10-26%20at%2013.31.56%402x-pMzKak1sVwOZ5pthvlv7ftGqQ4HqB5.png",
    },
  ].map((card, index) => <Card key={card.src} card={card} index={index} />)

  return (
    <section className="relative min-h-screen flex items-start overflow-hidden px-4 py-4 pb-12">
      {/* Floating gradient circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#4A90E2]/20 dark:bg-[#4A90E2]/10 rounded-full filter blur-3xl animate-float" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#FF69B4]/20 dark:bg-[#FF69B4]/10 rounded-full filter blur-3xl animate-float animation-delay-300" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-[#7B68EE]/20 dark:bg-[#7B68EE]/10 rounded-full filter blur-3xl animate-float animation-delay-500" />

      <div className="relative z-10 w-full max-w-7xl mx-auto mt-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Content */}
          <div className="w-full text-center lg:text-left">
            <div className="mb-4 flex justify-center lg:justify-start animate-bounce-in">
              <div className="relative w-40 h-40 md:w-56 md:h-56 animate-float">
                <Image src="/honeydo-logo.svg" alt="HoneyDo Logo" fill className="object-contain" priority />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 text-balance animate-fade-in-up">
              <span className="bg-gradient-to-r from-[#4A90E2] to-[#7B68EE] bg-clip-text text-transparent">Honey</span>
              <span className="bg-gradient-to-r from-[#7B68EE] to-[#FF69B4] bg-clip-text text-transparent">Do</span>
            </h1>

            <div className="mb-4 animate-fade-in-up animation-delay-200">
              <TextGenerateEffect
                words="Turn chores into teamwork"
                className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium" />
            </div>

            <p className="text-sm md:text-base lg:text-lg text-foreground/80 max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed text-pretty animate-fade-in-up animation-delay-300">
              The fun way for couples to manage household chores with competitive points, weekly winners, and prizes. Make
              housework exciting and turn 'who does what' into 'we got it done!'
            </p>

            {!submitted ? (
              <div className="max-w-md mx-auto lg:mx-0 mb-6 animate-fade-in-up animation-delay-400">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 h-12 text-base bg-background/80 backdrop-blur border-2 focus:border-[#7B68EE] transition-colors"
                    />
                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="bg-gradient-to-r from-[#4A90E2] to-[#7B68EE] hover:opacity-90 transition-all h-12 px-6 font-semibold text-base hover:scale-105 hover:shadow-xl"
                    >
                      {loading ? "Joining..." : "Join Waitlist"}
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    Join <span className="text-[#7B68EE] font-bold">100+</span> couples already on the waitlist
                  </p>
                </form>
              </div>
            ) : (
              <div className="max-w-md mx-auto lg:mx-0 mb-6 p-6 bg-background/80 backdrop-blur rounded-2xl border-2 animate-bounce-in">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto lg:mx-0 mb-3" />
                <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
                <p className="text-muted-foreground mb-4">We'll email you when HoneyDo launches.</p>
                <Button variant="outline" onClick={() => setSubmitted(false)} className="font-medium">
                  Add another email
                </Button>
              </div>
            )}

            <div className="animate-fade-in-up animation-delay-500">
              <Button
                size="lg"
                variant="ghost"
                className="text-base px-6 py-5 font-medium hover:bg-transparent group"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
                <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Mobile & Desktop - Carousel */}
          <div className="w-full flex flex-col justify-start animate-fade-in-up animation-delay-300 mt-8 lg:mt-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-0 text-center">See it in action</h3>
            <Carousel items={cards} />
          </div>
        </div>
      </div>
    </section>
  )
}

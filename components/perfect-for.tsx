"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Heart, Home, Sparkles } from "lucide-react"

const audiences = [
  {
    icon: Heart,
    title: "Couples Living Together",
    description:
      "Whether you're newlyweds or long-time partners, HoneyDo helps you share household responsibilities fairly and fun.",
  },
  {
    icon: Home,
    title: "Busy Households",
    description:
      "Juggling work, life, and chores? Stay organized and motivated with a system that makes task management effortless.",
  },
  {
    icon: Sparkles,
    title: "Competitive Duos",
    description:
      "Love a little friendly competition? Turn everyday chores into an exciting game with points, prizes, and bragging rights.",
  },
]

export function PerfectFor() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => [...new Set([...prev, index])])
            }
          })
        },
        { threshold: 0.2 },
      )

      observer.observe(card)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Perfect for</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            HoneyDo is designed for couples who want to make household management more enjoyable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={`${visibleCards.includes(index) ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Card className="p-8 text-center hover:shadow-2xl hover:scale-[1.05] transition-all duration-300 border-2 h-full bg-background/80 backdrop-blur group">
                  <div className="flex justify-center mb-6">
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-[#4A90E2] via-[#7B68EE] to-[#FF69B4] group-hover:rotate-12 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{audience.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{audience.description}</p>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

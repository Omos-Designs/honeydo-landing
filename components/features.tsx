"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Trophy, Users, Target, Gift } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Users,
    title: "Blue & Pink Jobs",
    description:
      "Assign tasks to each partner with custom color-coded jobs. Keep track of who does what and maintain balance in your household.",
    color: "from-[#4A90E2] to-[#7B68EE]",
  },
  {
    icon: Target,
    title: "Points System",
    description:
      "Earn points for completing tasks. The more challenging the chore, the more points you score. Stay motivated and engaged!",
    color: "from-[#7B68EE] to-[#9B59B6]",
  },
  {
    icon: Trophy,
    title: "Weekly Winner",
    description:
      "Compete in a friendly way! At the end of each week, the partner with the most points is crowned the winner.",
    color: "from-[#9B59B6] to-[#E91E63]",
  },
  {
    icon: Gift,
    title: "Prizes & Punishments",
    description:
      "Set your own stakes! Winner picks the movie, loser buys dinner, or create your own fun rewards and consequences.",
    color: "from-[#E91E63] to-[#FF69B4]",
  },
]

export function Features() {
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
    <section id="features" className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">Features that make chores fun</h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            HoneyDo transforms boring household tasks into an engaging game for couples
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={`${visibleCards.includes(index) ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${(index % 2) * 0.1}s` }}
              >
                <Card className="p-8 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 border-2 h-full bg-background/80 backdrop-blur group">
                  <div className="flex items-start gap-6">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

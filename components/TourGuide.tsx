'use client'

import { NextStep, NextStepProvider, Tour } from 'nextstepjs'
import { ReactNode } from 'react'
import CustomCard from './CustomCard'

const tours: Tour[] = [
  {
    tour: "main-tour",
    steps: [
      {
        icon: "👋",
        title: "About us page",
        content: "Click here to learn more about this website and our mission",
        side: "right" as const,
        selector: "#btn-about",
        showControls: true,
        showSkip: true
      },
      {
        icon: "🛠️",
        title: "Services page",
        content: "Explore all the services we offer to our customers",
        side: "left" as const,
        selector: "#btn-services",
        showControls: true,
        showSkip: true
      },
      {
        icon: "📧",
        title: "Contact us",
        content: "Get in touch with us for any questions or inquiries",
        side: "right" as const,
        selector: "#btn-contact",
        showControls: true,
        showSkip: true
      }
    ]
  }
]

export default function TourGuide({ children }: { children: ReactNode }) {
  return (
    <NextStepProvider>
      <NextStep steps={tours} cardComponent={CustomCard}>
        <div>{children} </div>
      </NextStep>
    </NextStepProvider>
  )
}

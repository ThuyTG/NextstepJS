'use client'

import Link from 'next/link'
import { useNextStep } from 'nextstepjs'

export default function Home() {
  const {startNextStep, closeNextStep, currentStep, currentTour, setCurrentStep, isNextStepVisible} = useNextStep();
  const handleTour = () => {
    startNextStep('main-tour')
  }
  return (
    <div className="container mx-auto px-4 py-16">
      
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to NextStep
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          This is a mini Next.js project with 4 pages showcasing routing capabilities
        </p>

        {/* Navigation Buttons */}
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button onClick={handleTour} className='px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>Start Step</button>
          <Link
            href="/about"
            id="btn-about"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            About Us
          </Link>
          <Link
            href="/services"
            id="btn-services"
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            id="btn-contact"
            className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg" id="feature-fast">
            <h3 className="text-xl font-semibold mb-3">Fast</h3>
            <p className="text-gray-600 dark:text-gray-400">Built with Next.js for optimal performance</p>
          </div>
          <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg" id="feature-modern">
            <h3 className="text-xl font-semibold mb-3">Modern</h3>
            <p className="text-gray-600 dark:text-gray-400">Using the latest React and TypeScript</p>
          </div>
          <div className="p-6 bg-pink-50 dark:bg-pink-900/20 rounded-lg" id="feature-responsive">
            <h3 className="text-xl font-semibold mb-3">Responsive</h3>
            <p className="text-gray-600 dark:text-gray-400">Styled with Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            NextStep is a mini project demonstrating the power of Next.js routing
            with the App Router architecture.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This project showcases:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-6">
            <li>Server-side rendering with Next.js</li>
            <li>File-based routing system</li>
            <li>TypeScript for type safety</li>
            <li>Tailwind CSS for styling</li>
            <li>Responsive design patterns</li>
          </ul>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To provide a simple, clean, and effective starting point for Next.js projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

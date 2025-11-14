export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Build modern, responsive websites with the latest technologies',
      icon: '🌐',
    },
    {
      title: 'Mobile Apps',
      description: 'Create cross-platform mobile applications that work everywhere',
      icon: '📱',
    },
    {
      title: 'UI/UX Design',
      description: 'Design beautiful and intuitive user interfaces',
      icon: '🎨',
    },
    {
      title: 'Consulting',
      description: 'Get expert advice on your tech stack and architecture',
      icon: '💡',
    },
    {
      title: 'Cloud Solutions',
      description: 'Deploy and scale your applications in the cloud',
      icon: '☁️',
    },
    {
      title: 'Maintenance',
      description: 'Keep your applications running smoothly with ongoing support',
      icon: '🔧',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Our Services</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12">
          Comprehensive solutions for all your development needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

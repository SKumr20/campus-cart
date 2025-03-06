const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-6 absolute bottom-0 left-0 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-600">
          &copy; {currentYear}, By Satyam Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
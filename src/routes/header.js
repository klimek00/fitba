


export default function Header() {
  return (
  <>
    <nav className="opacity-80 sticky top-0 flex items-center justify-between flex-wrap bg-neutral-100 p-6 border-b">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <span className="font-semibold text-2xl text-neutral-800"><a href='/'>Fitba.</a></span>
    </div>
    <div className="w-full flex justify-end lg:flex lg:items-center lg:w-auto">
      <div className="text-xl lg:flex-grow">
        <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-dark hover:text-neutral-600 mr-4">
          About
        </a>
        <a href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-dark hover:text-neutral-600 mr-4">
          Contact
        </a>
      </div>
      <div>
        <a href="#" className="inline-block text-lg px-4 py-1 text-white rounded-xl bg-cyan-500 mt-4 lg:mt-0 hover:bg-cyan-600">Login</a>
      </div>
    </div>
  </nav>
    </>
  )
}
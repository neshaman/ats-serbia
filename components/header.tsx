import Link from 'next/link'
import Image from 'next/image'

export default function Header({ allCategories }) {
  const categories = allCategories?.categories?.nodes
  console.log(categories)
  return (
      <nav className="border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <Image src='/assets/logo-black.jpg' width='355' height='109' alt='Dark logo' />
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:border-gray-700">
            {categories && categories.map(category => (
              <li key={category.id}>
                <a href="#" className='block py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 dark:text-white md:dark text-lg' aria-current='page'>
                  {category.name}
                </a>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </nav>
  )
}
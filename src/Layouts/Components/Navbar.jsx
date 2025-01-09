import React from 'react'

const Navbar = () => {
  return (
    <section>
        <nav className="fixed top-0 z-50 shadow w-full h-[60px] bg-white">
          <div className="flex items-center h-full justify-between mx-auto max-w-5xl">
            <div></div>
            <ul className="flex items-center space-x-4 ">
              <li>
                <a href="/">Beranda</a> 
              </li>
              <li>
                <a href="/">Kamar</a>
              </li>
              <li>
                <a href="/tentang">Tentang</a>
              </li>
              <li>
                <a href="/kontak">Kontak</a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
  )
}

export default Navbar
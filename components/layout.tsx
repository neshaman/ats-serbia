import Footer from './footer'
import Header from './header'
import Meta from './meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen bg-slate-950 text-white">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

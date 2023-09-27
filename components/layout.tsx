import Footer from './footer'
import Header from './header'
import Meta from './meta'

export default function Layout({ preview, children, categories }) {
  return (
    <>
      <Meta />
      <Header allCategories={categories} />
      <div className="min-h-screen text-white">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

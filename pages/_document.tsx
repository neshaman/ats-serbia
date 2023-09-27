import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-black text-white'>
        <Main />
        <NextScript />
        <script src='flowbite.min.js'></script>
      </body>
    </Html>
  )
}

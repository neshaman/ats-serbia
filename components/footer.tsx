import Container from 'components/container'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-gray-400">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          Copyright ATS {new Date().getFullYear()}. All rights reserved
        </div>
      </Container>
    </footer>
  )
}

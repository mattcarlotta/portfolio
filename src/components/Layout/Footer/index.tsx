export default function Footer() {
  return (
    <footer data-testid="footer" className="mt-14 pb-5 text-center">
      <p className="text-[0.6rem] font-bold text-accent">
        ©{new Date().getFullYear()} matt carlotta
      </p>
    </footer>
  )
}

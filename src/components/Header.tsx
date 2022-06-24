import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="bg-gray-700 py-5 w-full flex items-center justify-center border-b border-gray-600">
      <Logo />
    </header>

  )
}
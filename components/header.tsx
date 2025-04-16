"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigation = [
  { name: "홈", href: "/" },
  { name: "회사소개", href: "/about" },
  { name: "서비스", href: "/services" },
  { name: "차량소개", href: "/vehicles" },
  { name: "예약", href: "/reservation" },
  { name: "연락처", href: "/contact" },
  { name: "갤러리", href: "/gallery" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">코나투어</span>
            <Image src="/로고.png" alt="코나투어 로고" width={40} height={40} className="h-10 w-auto" />
            <h1 className="text-2xl font-bold text-[#042D5D]">KONATOUR</h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#042D5D]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">메뉴 열기</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-[#042D5D] hover:text-[#042D5D]/80"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-[#042D5D] hover:bg-[#042D5D]/90 text-white">
            <Link href="/reservation">예약하기</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"}`}>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="sr-only">코나투어</span>
              <Image src="/로고.png" alt="코나투어 로고" width={40} height={40} className="h-10 w-auto" />
              <h1 className="text-2xl font-bold text-[#042D5D]">KONATOUR</h1>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-[#042D5D]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">메뉴 닫기</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#042D5D] hover:bg-[#E0E6F3]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button
                  className="w-full bg-[#042D5D] hover:bg-[#042D5D]/90 text-white"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    window.location.href = "/reservation"
                  }}
                >
                  예약하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

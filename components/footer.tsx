import Link from "next/link"
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#042D5D] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="space-y-8 md:max-w-md">
          <div>
            <h2 className="text-2xl font-bold">KONATOUR</h2>
            <p className="mt-2 text-sm text-gray-300">베트남 나트랑에 정식 등록된 베트남 현지 법인 여행사</p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gray-300" />
              <span>303 Lê Hồng Phong, Phước Hải, Nha Trang, Khánh Hòa, 베트남</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gray-300" />
              <span>0342.117.662</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-300" />
              <span>konatour77@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-gray-300" />
              <span>카카오톡: konatour77</span>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <h3 className="text-sm font-semibold">바로가기</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/about" className="text-sm text-gray-300 hover:text-white">
                회사소개
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-sm text-gray-300 hover:text-white">
                서비스
              </Link>
            </li>
            <li>
              <Link href="/vehicles" className="text-sm text-gray-300 hover:text-white">
                차량소개
              </Link>
            </li>
            <li>
              <Link href="/reservation" className="text-sm text-gray-300 hover:text-white">
                예약
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-gray-300 hover:text-white">
                연락처
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-white/10 px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="text-xs text-gray-400">&copy; {new Date().getFullYear()} KONATOUR. All rights reserved.</div>
      </div>
    </footer>
  )
}

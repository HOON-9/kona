import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Award, GuitarIcon as Golf, Plane } from "lucide-react"

export default function Services() {
  return (
    <>
      {/* Header Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-[#042D5D]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">서비스 소개</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">코나투어만의 특별한 서비스를 경험해보세요</p>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Service 소개 섹션 수정 */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#042D5D]">맞춤형 여행 서비스</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              코나투어는 패키지 상품을 판매하지 않습니다. 오직 고객님의 취향과 일정에 맞춘 1:1 맞춤형 여행 컨설팅만을
              제공합니다.
            </p>
          </div>

          {/* Service 1 */}
          <div id="city-tour" className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/시내투어.png" alt="시내 투어" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-8 w-8 text-[#042D5D]" />
                <h3 className="text-2xl font-bold text-[#042D5D]">시내 투어</h3>
              </div>
              <p className="text-lg text-gray-600">
                나트랑의 주요 명소를 효율적으로 둘러보는 맞춤형 시내 투어입니다. 현지 전문 가이드와 함께 나트랑의 숨겨진
                명소와 인기 관광지를 방문하세요.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#042D5D] font-bold">•</span>
                  <span>주요 관광지 방문 (폰가르 탑, 롱선 사원, 나트랑 대성당 등)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#042D5D] font-bold">•</span>
                  <span>현지 시장 탐방 및 쇼핑 기회</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#042D5D] font-bold">•</span>
                  <span>맛집 탐방 및 현지 음식 체험</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#042D5D] font-bold">•</span>
                  <span>고객 요청에 따른 맞춤형 일정 조정 가능</span>
                </li>
              </ul>
              <Button asChild className="bg-[#042D5D] hover:bg-[#042D5D]/90 text-white">
                <Link href="/reservation">예약하기</Link>
              </Button>
            </div>
          </div>

          {/* Service 2 */}
          <div id="custom-tour" className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center mb-16">
            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/맞춤투어.png" alt="맞춤 투어" fill className="object-cover" />
            </div>
            <div className="order-2 lg:order-1 space-y-6">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-[#042D5D]" />
                <h3 className="text-2xl font-bold text-[#042D5D]">맞춤 투어</h3>
              </div>
              <p className="text-lg text-gray-600">
                고객의 취향과 일정에 맞춘 완벽한 1:1 맞춤형 여행입니다. 패키지 여행이 아닌, 오직 당신만을 위한 특별한
                여행 일정을 계획해 드립니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#042D5D] font-bold">•</span>
                  <span>고객의 관심사와 취향에 맞춘 맞춤형 일정</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#042D5D] font-bold">•</span>
                  <span>숨겨진 현지 명소 방문</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#042D5D] font-bold">•</span>
                  <span>유연한 일정 조정 가능</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#042D5D] font-bold">•</span>
                  <span>전문 가이드의 맞춤형 설명</span>
                </li>
              </ul>
              <Button asChild className="bg-[#042D5D] hover:bg-[#042D5D]/90 text-white">
                <Link href="/reservation">예약하기</Link>
              </Button>
            </div>
          </div>

          {/* Service 3 */}
          <div id="vip-service" className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/VIP서비스.png" alt="VIP 서비스" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              {/* VIP 서비스 설명 수정 */}
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-[#042D5D]" />
                <h3 className="text-2xl font-bold text-[#042D5D]">VIP 서비스</h3>
              </div>
              <p className="text-lg text-gray-600">
                편안함과 프라이버시를 보장하는 맞춤형 서비스입니다. 전용 차량과 전담 가이드로 품격 있는 여행을
                경험하세요.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#042D5D] font-bold">•</span>
                  <span>전용 차량 제공</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#042D5D] font-bold">•</span>
                  <span>전담 가이드 및 기사</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#042D5D] font-bold">•</span>
                  <span>특별 레스토랑 예약 서비스</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#042D5D] font-bold">•</span>
                  <span>24시간 컨시어지 서비스</span>
                </li>
              </ul>
              <Button asChild className="bg-[#042D5D] hover:bg-[#042D5D]/90 text-white">
                <Link href="/reservation">예약하기</Link>
              </Button>
            </div>
          </div>

          {/* Service 4 */}
          <div id="golf-tour" className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center mb-16">
            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/골프투어.png" alt="골프 투어" fill className="object-cover" />
            </div>
            <div className="order-2 lg:order-1 space-y-6">
              <div className="flex items-center gap-3">
                <Golf className="h-8 w-8 text-[#042D5D]" />
                <h3 className="text-2xl font-bold text-[#042D5D]">골프 투어</h3>
              </div>
              <p className="text-lg text-gray-600">
                나트랑의 아름다운 골프 코스에서 특별한 골프 경험을 즐기세요. 골프 예약부터 이동까지 모든 것을 편리하게
                제공해 드립니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#042D5D] font-bold">•</span>
                  <span>프리미엄 골프 코스 예약</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#042D5D] font-bold">•</span>
                  <span>골프장까지 고급 차량 이동</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#042D5D] font-bold">•</span>
                  <span>골프 장비 대여 서비스</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#042D5D] font-bold">•</span>
                  <span>골프 후 휴식을 위한 스파 예약 서비스</span>
                </li>
              </ul>
              <Button asChild className="bg-[#042D5D] hover:bg-[#042D5D]/90 text-white">
                <Link href="/reservation">예약하기</Link>
              </Button>
            </div>
          </div>

          {/* Service 5 */}
          <div id="airport-pickup" className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/공항픽업.png" alt="공항 픽업/드롭" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Plane className="h-8 w-8 text-[#042D5D]" />
                <h3 className="text-2xl font-bold text-[#042D5D]">공항 픽업/드롭</h3>
              </div>
              <p className="text-lg text-gray-600">
                나트랑 공항에서 숙소까지, 또는 숙소에서 공항까지 편안하고 안전한 이동 서비스를 제공합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#042D5D] font-bold">•</span>
                  <span>정시 픽업 보장</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#042D5D] font-bold">•</span>
                  <span>편안한 차량으로 안전한 이동</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#042D5D] font-bold">•</span>
                  <span>한국어 가능한 기사</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#042D5D] font-bold">•</span>
                  <span>24시간 서비스 제공</span>
                </li>
              </ul>
              <Button asChild className="bg-[#042D5D] hover:bg-[#042D5D]/90 text-white">
                <Link href="/reservation">예약하기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 수정 */}
      <section className="section-padding bg-[#E0E6F3]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#042D5D] sm:text-4xl">맞춤형 서비스가 필요하신가요?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            위에 소개된 서비스 외에도 고객님의 요구에 맞는 다양한 맞춤형 서비스를 제공해 드립니다. 지금 바로 문의하고
            나만의 특별한 여행을 계획해보세요.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-[#042D5D] hover:bg-[#042D5D]/90 text-white">
              <Link href="/reservation">예약하기</Link>
            </Button>
            <Button asChild size="lg" className="bg-[#042D5D] hover:bg-[#042D5D]/90 text-white">
              <Link href="/contact">문의하기</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

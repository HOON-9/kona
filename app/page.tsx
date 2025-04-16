import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// 상단에 GuitarIcon을 Golf로 임포트하고 Plane 추가
import { MapPin, Users, Calendar, Car, Plane, Award, GuitarIcon as Golf } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh]">
        <div className="absolute inset-0 bg-[url('/메인.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative flex h-full items-center justify-center px-6 text-center">
          <div className="max-w-3xl space-y-4 text-white pt-16">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">맞춤형 여행 서비스</h1>
            <p className="text-base sm:text-lg">베트남 나트랑에서 특별한 여행 경험을 선사합니다</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-[#042D5D] text-white hover:bg-[#042D5D]/90">
                <Link href="/services">서비스 알아보기</Link>
              </Button>
              <Button asChild size="lg" className="bg-[#042D5D] text-white hover:bg-[#042D5D]/90">
                <Link href="/reservation">지금 예약하기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="section-padding bg-[#F2F2F2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#042D5D] sm:text-4xl">주요 서비스</h2>
            <p className="mt-4 text-lg text-gray-600">코나투어만의 특별한 서비스를 경험해보세요</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service Card 1 */}
            <Card className="service-card">
              <CardHeader>
                <MapPin className="h-10 w-10 text-[#042D5D] mb-2" />
                <CardTitle>시내 투어</CardTitle>
                <CardDescription>나트랑의 주요 명소를 효율적으로 둘러보는 맞춤형 시내 투어</CardDescription>
              </CardHeader>
              <CardContent>
                <p>현지 전문 가이드와 함께 나트랑의 숨겨진 명소와 인기 관광지를 방문하세요.</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-[#042D5D] hover:bg-[#042D5D]/90 text-white">
                  <Link href="/services#city-tour">자세히 보기</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service Card 2 */}
            <Card className="service-card">
              <CardHeader>
                <Users className="h-10 w-10 text-[#042D5D] mb-2" />
                <CardTitle>맞춤 투어</CardTitle>
                <CardDescription>고객의 취향과 일정에 맞춘 완벽한 1:1 맞춤형 여행</CardDescription>
              </CardHeader>
              <CardContent>
                <p>패키지 여행이 아닌, 오직 당신만을 위한 특별한 여행 일정을 계획해 드립니다.</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-[#042D5D] hover:bg-[#042D5D]/90 text-white">
                  <Link href="/services#custom-tour">자세히 보기</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service Card 3 */}
            <Card className="service-card">
              <CardHeader>
                <Award className="h-10 w-10 text-[#042D5D] mb-2" />
                <CardTitle>VIP 서비스</CardTitle>
                <CardDescription>편안함과 프라이버시를 보장하는 맞춤형 서비스</CardDescription>
              </CardHeader>
              <CardContent>
                <p>전용 차량과 전담 가이드로 품격 있는 여행을 경험하세요.</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-[#042D5D] hover:bg-[#042D5D]/90 text-white">
                  <Link href="/services#vip-service">자세히 보기</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service Card 4 - 골프 투어 */}
            <Card className="service-card">
              <CardHeader>
                <Golf className="h-10 w-10 text-[#042D5D] mb-2" />
                <CardTitle>골프 투어</CardTitle>
                <CardDescription>나트랑의 아름다운 골프 코스에서 특별한 골프 경험</CardDescription>
              </CardHeader>
              <CardContent>
                <p>골프 예약부터 이동까지 모든 것을 편리하게 제공해 드립니다.</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-[#042D5D] hover:bg-[#042D5D]/90 text-white">
                  <Link href="/services#golf-tour">자세히 보기</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service Card 5 - 공항 픽업/샌딩 */}
            <Card className="service-card">
              <CardHeader>
                <Plane className="h-10 w-10 text-[#042D5D] mb-2" />
                <CardTitle>공항 픽업/샌딩</CardTitle>
                <CardDescription>나트랑 공항에서 숙소까지 편안하고 안전한 이동 서비스</CardDescription>
              </CardHeader>
              <CardContent>
                <p>정시 픽업 보장과 한국어 가능한 기사로 편안한 이동을 도와드립니다.</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-[#042D5D] hover:bg-[#042D5D]/90 text-white">
                  <Link href="/services#airport-pickup">자세히 보기</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* 1:1 Service Feature */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#042D5D] sm:text-4xl">1:1 맞춤형 서비스</h2>
              <p className="text-lg text-gray-600">
                코나투어는 패키지 상품을 판매하지 않습니다. 오직 고객님의 취향과 일정에 맞춘 1:1 맞춤형 여행 컨설팅만을
                제공합니다.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Calendar className="h-6 w-6 text-[#042D5D] mt-1 flex-shrink-0" />
                  <span>고객님의 일정에 맞춘 유연한 여행 계획</span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="h-6 w-6 text-[#042D5D] mt-1 flex-shrink-0" />
                  <span>편안한 차량과 전문 기사로 안전하고 편안한 이동</span>
                </li>
                <li className="flex items-start gap-3">
                  <Plane className="h-6 w-6 text-[#042D5D] mt-1 flex-shrink-0" />
                  <span>공항 픽업부터 숙소 체크인까지 원활한 서비스</span>
                </li>
              </ul>
              <Button asChild className="bg-[#042D5D] hover:bg-[#042D5D]/90 text-white">
                <Link href="/about">회사 소개 보기</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/11맞춤형서비스.jpg" alt="맞춤형 서비스" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Preview */}
      <section className="section-padding bg-[#E0E6F3]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#042D5D] sm:text-4xl">차량 서비스</h2>
            <p className="mt-4 text-lg text-gray-600">편안하고 안전한 이동을 위한 다양한 차량을 제공합니다</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Vehicle Card 1 */}
            <div className="vehicle-card">
              <div className="relative h-48">
                <Image src="/세단.png" alt="세단" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#042D5D]">세단</h3>
                <p className="text-sm text-gray-600 mt-1">최대 3-4인 탑승 가능</p>
              </div>
            </div>

            {/* Vehicle Card 2 */}
            <div className="vehicle-card">
              <div className="relative h-48">
                <Image src="/SUV.jpg" alt="SUV" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#042D5D]">SUV</h3>
                <p className="text-sm text-gray-600 mt-1">최대 5인 탑승 가능</p>
              </div>
            </div>

            {/* Vehicle Card 3 */}
            <div className="vehicle-card">
              <div className="relative h-48">
                <Image src="/미니밴.jpg" alt="미니밴" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#042D5D]">미니밴</h3>
                <p className="text-sm text-gray-600 mt-1">최대 7-9인 탑승 가능</p>
              </div>
            </div>

            {/* Vehicle Card 4 */}
            <div className="vehicle-card">
              <div className="relative h-48">
                <Image src="/대형버스.png" alt="대형버스" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#042D5D]">대형버스</h3>
                <p className="text-sm text-gray-600 mt-1">최대 15-45인 탑승 가능</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild className="bg-[#042D5D] hover:bg-[#042D5D]/90 text-white">
              <Link href="/vehicles">모든 차량 보기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#042D5D] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">지금 바로 예약하세요</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            나트랑에서의 특별한 여행을 코나투어와 함께 시작하세요.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-[#042D5D] text-white hover:bg-[#042D5D]/90">
              <Link href="/reservation">예약하기</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

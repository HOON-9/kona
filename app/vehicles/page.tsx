import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Users, Briefcase, Shield } from "lucide-react"

export default function Vehicles() {
  return (
    <>
      {/* Header Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-[#042D5D]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">차량 소개</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            편안하고 안전한 이동을 위한 다양한 차량을 제공합니다
          </p>
        </div>
      </section>

      {/* Vehicles Introduction */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#042D5D]">차량 서비스</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              코나투어는 고객님의 편안한 이동을 위해 최신형 차량을 제공합니다. 인원수와 용도에 맞는 다양한 차량 중에서
              선택하실 수 있습니다.
            </p>
          </div>

          {/* Vehicle 1 */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/세단.png" alt="세단" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#042D5D]">세단</h3>
              <p className="text-lg text-gray-600">
                편안한 승차감과 쾌적한 인테리어를 갖춘 세단으로, 커플이나 소규모 가족에게 적합합니다.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#042D5D]" />
                  <span>최대 3-4인 탑승 가능</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#042D5D]" />
                  <span>커플, 소규모 가족</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-[#042D5D]" />
                  <span>수하물 2-3개 수납 가능</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#042D5D]" />
                  <span>에어백, ABS 등 안전장치</span>
                </div>
              </div>
              <div className="pt-4">
                <h4 className="font-semibold text-[#042D5D] mb-2">적합한 용도:</h4>
                <p className="text-gray-600">
                  커플, 소규모 가족, 비즈니스 여행에 적합합니다. 시내 관광이나 짧은 거리 이동에 편리합니다.
                </p>
              </div>
              <Button asChild className="bg-[#042D5D] hover:bg-[#042D5D]/90 text-white">
                <Link href="/reservation">예약하기</Link>
              </Button>
            </div>
          </div>

          {/* Vehicle 2 */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center mb-16">
            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/SUV.jpg" alt="SUV" fill className="object-cover" />
            </div>
            <div className="order-2 lg:order-1 space-y-6">
              <h3 className="text-2xl font-bold text-[#042D5D]">SUV</h3>
              <p className="text-lg text-gray-600">
                실내 공간이 넓고 짐 수납이 용이한 SUV로, 가족 여행이나 중소규모 인원에게 적합합니다.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#042D5D]" />
                  <span>최대 5인 탑승 가능</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#042D5D]" />
                  <span>가족, 중소규모 인원</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-[#042D5D]" />
                  <span>수하물 3-4개 수납 가능</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#042D5D]" />
                  <span>전방위 안전장치 탑재</span>
                </div>
              </div>
              <div className="pt-4">
                <h4 className="font-semibold text-[#042D5D] mb-2">적합한 용도:</h4>
                <p className="text-gray-600">
                  가족 여행, 중소규모 인원, 아웃도어 활동에 적합합니다. 넓은 공간과 높은 시야로 편안한 여행을 즐길 수
                  있습니다.
                </p>
              </div>
              <Button asChild className="bg-[#042D5D] hover:bg-[#042D5D]/90 text-white">
                <Link href="/reservation">예약하기</Link>
              </Button>
            </div>
          </div>

          {/* Vehicle 3 */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/미니밴.jpg" alt="미니밴" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#042D5D]">미니밴</h3>
              <p className="text-lg text-gray-600">
                넓은 실내 공간과 편안한 승차감을 갖춘 미니밴으로, 중대형 가족이나 단체 여행객에게 적합합니다.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#042D5D]" />
                  <span>최대 7-9인 탑승 가능</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#042D5D]" />
                  <span>가족, 중대형 그룹</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-[#042D5D]" />
                  <span>수하물 5-6개 수납 가능</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#042D5D]" />
                  <span>최신 안전 시스템 탑재</span>
                </div>
              </div>
              <div className="pt-4">
                <h4 className="font-semibold text-[#042D5D] mb-2">적합한 용도:</h4>
                <p className="text-gray-600">
                  대가족, 친구 그룹, 장거리 여행에 적합합니다. 넓은 공간으로 편안한 이동이 가능합니다.
                </p>
              </div>
              <Button asChild className="bg-[#042D5D] hover:bg-[#042D5D]/90 text-white">
                <Link href="/reservation">예약하기</Link>
              </Button>
            </div>
          </div>

          {/* Vehicle 4 */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/대형버스.png" alt="대형버스" fill className="object-cover" />
            </div>
            <div className="order-2 lg:order-1 space-y-6">
              <h3 className="text-2xl font-bold text-[#042D5D]">대형버스</h3>
              <p className="text-lg text-gray-600">
                단체 여행이나 기업 행사에 적합한 대형버스로, 많은 인원의 이동을 한 번에 해결할 수 있습니다.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#042D5D]" />
                  <span>최대 15-45인 탑승 가능</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#042D5D]" />
                  <span>단체, 기업 행사</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-[#042D5D]" />
                  <span>대량 수하물 수납 가능</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#042D5D]" />
                  <span>전문 기사 운행</span>
                </div>
              </div>
              <div className="pt-4">
                <h4 className="font-semibold text-[#042D5D] mb-2">적합한 용도:</h4>
                <p className="text-gray-600">단체 관광, 기업 행사, 세미나 참석 등 대규모 인원의 이동에 적합합니다.</p>
              </div>
              <Button asChild className="bg-[#042D5D] hover:bg-[#042D5D]/90 text-white">
                <Link href="/reservation">예약하기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#F8F9FC]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#042D5D]">맞춤형 차량 서비스가 필요하신가요?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            다양한 차량 옵션과 함께 고객님의 필요에 맞는 최적의 이동 서비스를 제공해 드립니다. 지금 바로 문의하고 편안한
            여행을 계획해보세요.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-[#042D5D] hover:bg-[#042D5D]/90 text-white">
              <Link href="/reservation">예약하기</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Globe } from "lucide-react"

export default function About() {
  return (
    <>
      {/* Header Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-[#042D5D]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">회사 소개</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">베트남 나트랑에 정식 등록된 베트남 전문 여행사</p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/회사소개.png" alt="코나투어 소개" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#042D5D]">코나투어 소개</h2>
              <p className="text-lg text-gray-600">
                코나투어는 베트남 나트랑에 정식 등록된 베트남 전문 여행사입니다. 단순한 차량 대절을 넘어 한국인 여행객을
                위한 프리미엄 여행 경험을 제공합니다.
              </p>
              <p className="text-lg text-gray-600">
                저희는 패키지 상품을 판매하지 않으며, 오직 고객님의 취향과 일정에 맞춘 1:1 맞춤형 여행 컨설팅만을
                제공합니다. 숙련된 전문 가이드와 함께 편안하고 안전한 여행을 즐기세요.
              </p>
              <p className="text-lg text-gray-600">
                공항 픽업부터 숨겨진 현지 명소 투어까지, 코나투어와 함께라면 나트랑에서의 모든 순간이 특별해집니다.
                베트남 현지 법인으로서의 전문성과 신뢰성을 바탕으로 최적의 여행 솔루션을 제안해 드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-[#F2F2F2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#042D5D]">코나투어의 가치</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              저희는 다음과 같은 핵심 가치를 바탕으로 최상의 서비스를 제공합니다
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-[#042D5D] mb-4" />
              <h3 className="text-xl font-bold text-[#042D5D] mb-3">프리미엄 서비스</h3>
              <p className="text-gray-600">고객 한 분 한 분을 VIP로 모시며, 최상의 서비스 품질을 약속합니다.</p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-[#042D5D] mb-4" />
              <h3 className="text-xl font-bold text-[#042D5D] mb-3">맞춤형 경험</h3>
              <p className="text-gray-600">
                패키지 여행이 아닌, 고객님의 취향과 일정에 맞춘 완벽한 맞춤형 여행을 제공합니다.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Globe className="h-12 w-12 text-[#042D5D] mb-4" />
              <h3 className="text-xl font-bold text-[#042D5D] mb-3">현지 전문성</h3>
              <p className="text-gray-600">
                베트남 현지 법인으로서 나트랑의 모든 것을 알고 있는 전문 가이드가 함께합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#042D5D]">왜 코나투어인가요?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">코나투어만의 차별화된 서비스를 경험해보세요</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Reason 1 */}
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-[#042D5D] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[#042D5D]">베트남 현지 법인</h3>
                <p className="mt-2 text-gray-600">
                  베트남에 정식 등록된 현지 법인으로서 안정적이고 신뢰할 수 있는 서비스를 제공합니다.
                </p>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-[#042D5D] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[#042D5D]">전문 가이드</h3>
                <p className="mt-2 text-gray-600">
                  경험이 풍부한 전문 가이드가 나트랑의 숨겨진 명소와 현지 문화를 소개해 드립니다.
                </p>
              </div>
            </div>

            {/* Reason 3 */}
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-[#042D5D] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[#042D5D]">고급 차량</h3>
                <p className="mt-2 text-gray-600">최신형 고급 차량으로 편안하고 안전한 이동을 보장합니다.</p>
              </div>
            </div>

            {/* Reason 4 */}
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-[#042D5D] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[#042D5D]">맞춤형 서비스</h3>
                <p className="mt-2 text-gray-600">고객님의 요구사항에 맞춘 유연한 일정과 서비스를 제공합니다.</p>
              </div>
            </div>

            {/* Reason 5 */}
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-[#042D5D] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[#042D5D]">한국어 서비스</h3>
                <p className="mt-2 text-gray-600">
                  한국어에 능통한 직원들이 언어 장벽 없이 편안한 여행을 도와드립니다.
                </p>
              </div>
            </div>

            {/* Reason 6 */}
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-[#042D5D] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[#042D5D]">24시간 지원</h3>
                <p className="mt-2 text-gray-600">
                  여행 중 언제든지 도움이 필요하시면 24시간 고객 지원 서비스를 이용하실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#042D5D] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">나트랑에서의 특별한 여행을 시작하세요</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            코나투어와 함께라면 나트랑에서의 모든 순간이 특별해집니다. 지금 바로 문의하고 맞춤형 여행 계획을 세워보세요.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-[#042D5D] hover:bg-white/90">
              <Link href="/services">서비스 알아보기</Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border border-white hover:bg-white/10">
              <Link href="/reservation">예약하기</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Users, MapPin, Car, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"
import emailjs from '@emailjs/browser'
import { useState, useRef, useEffect } from "react"

export default function Reservation() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)
  const [showErrorAlert, setShowErrorAlert] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  // EmailJS 초기화
  useEffect(() => {
    try {
      emailjs.init("lnJPb8vez8B_En1-N")
      console.log("EmailJS 초기화 성공")
    } catch (error) {
      console.error("EmailJS 초기화 실패", error)
    }
  }, [])

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("폼 제출 시작")
    
    if (!formRef.current) {
      console.error("폼 참조가 없습니다")
      return
    }
    
    try {
      setIsSubmitting(true)
      setShowSuccessAlert(false)
      setShowErrorAlert(false)
      
      // 필수 필드 검증
      const formData = new FormData(formRef.current)
      const name = formData.get('name')
      const email = formData.get('email')
      const phone = formData.get('phone')
      
      if (!name || !email || !phone) {
        setErrorMessage("이름, 이메일, 연락처는 필수 입력 항목입니다.")
        setShowErrorAlert(true)
        setIsSubmitting(false)
        return
      }
      
      console.log("이메일 전송 시도")
      
      // EmailJS sendForm 메서드 사용
      const result = await emailjs.sendForm(
        'service_kahja2v',
        'template_o4nvvul',
        formRef.current,
        'lnJPb8vez8B_En1-N'
      )
      
      console.log("이메일 전송 성공", result)
      
      setShowSuccessAlert(true)
      
      // 폼 초기화
      formRef.current.reset()
    } catch (error) {
      console.error("이메일 전송 실패", error)
      setErrorMessage("잠시 후 다시 시도해주세요.")
      setShowErrorAlert(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Header Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-[#042D5D]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">예약하기</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            나트랑에서의 특별한 여행을 위한 예약을 진행해보세요
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="section-padding bg-[#F8F9FC]">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-8 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-[#042D5D]">예약 양식</h2>
              <p className="mt-2 text-gray-600">아래 양식을 작성하여 예약을 진행해주세요.</p>
            </div>

            <div className="p-8">
              <form 
                ref={formRef} 
                onSubmit={handleSubmit} 
                className="space-y-8"
                id="reservation-form"
              >
                {/* 고객 정보 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-5 w-5 text-[#042D5D]" />
                    <h3 className="text-lg font-medium text-[#042D5D]">고객 정보</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">이름</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="border-gray-200 focus:border-[#042D5D] focus:ring-[#042D5D] bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">이메일</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="border-gray-200 focus:border-[#042D5D] focus:ring-[#042D5D] bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">연락처</Label>
                      <Input
                        id="phone"
                        name="phone"
                        required
                        className="border-gray-200 focus:border-[#042D5D] focus:ring-[#042D5D] bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="kakao">카카오톡 ID (선택)</Label>
                      <Input
                        id="kakao"
                        name="kakao"
                        className="border-gray-200 focus:border-[#042D5D] focus:ring-[#042D5D] bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* 여행 정보 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-5 w-5 text-[#042D5D]" />
                    <h3 className="text-lg font-medium text-[#042D5D]">여행 정보</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="departure_date">출발일</Label>
                      <div className="relative">
                        <Input
                          id="departure_date"
                          name="departure_date"
                          type="date"
                          className="border-gray-200 focus:border-[#042D5D] focus:ring-[#042D5D] bg-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="arrival_date">도착일</Label>
                      <div className="relative">
                        <Input
                          id="arrival_date"
                          name="arrival_date"
                          type="date"
                          className="border-gray-200 focus:border-[#042D5D] focus:ring-[#042D5D] bg-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="flight_number">항공편명</Label>
                      <Input
                        id="flight_number"
                        name="flight_number"
                        className="border-gray-200 focus:border-[#042D5D] focus:ring-[#042D5D] bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="num_people">인원수</Label>
                      <Select name="num_people">
                        <SelectTrigger className="border-gray-200 focus:border-[#042D5D] focus:ring-[#042D5D] bg-white">
                          <SelectValue placeholder="인원수 선택" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="1">1명</SelectItem>
                          <SelectItem value="2">2명</SelectItem>
                          <SelectItem value="3">3명</SelectItem>
                          <SelectItem value="4">4명</SelectItem>
                          <SelectItem value="5">5명</SelectItem>
                          <SelectItem value="6+">6명 이상</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* 서비스 선택 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-[#042D5D]" />
                    <h3 className="text-lg font-medium text-[#042D5D]">서비스 선택</h3>
                  </div>
                  <div className="bg-[#F8F9FC] p-6 rounded-lg">
                    <RadioGroup name="service_type" defaultValue="city-tour">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="city-tour" id="city-tour" />
                          <Label htmlFor="city-tour">시내 투어</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="custom-tour" id="custom-tour" />
                          <Label htmlFor="custom-tour">맞춤 투어</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="golf-tour" id="golf-tour" />
                          <Label htmlFor="golf-tour">골프 투어</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="vip-service" id="vip-service" />
                          <Label htmlFor="vip-service">VIP 서비스</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="airport-pickup" id="airport-pickup" />
                          <Label htmlFor="airport-pickup">공항 픽업/샌딩</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {/* 차량 선택 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Car className="h-5 w-5 text-[#042D5D]" />
                    <h3 className="text-lg font-medium text-[#042D5D]">차량 선택</h3>
                  </div>
                  <Select name="vehicle_type">
                    <SelectTrigger className="border-gray-200 focus:border-[#042D5D] focus:ring-[#042D5D] bg-white">
                      <SelectValue placeholder="차량 종류 선택" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="sedan">세단 (최대 3-4인)</SelectItem>
                      <SelectItem value="suv">SUV (최대 5인)</SelectItem>
                      <SelectItem value="minivan">미니밴 (최대 7-9인)</SelectItem>
                      <SelectItem value="bus">대형버스 (15-45인)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* 출발지/목적지 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-[#042D5D]" />
                    <h3 className="text-lg font-medium text-[#042D5D]">출발지/목적지</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="departure">출발지</Label>
                      <Input
                        id="departure"
                        name="departure"
                        className="border-gray-200 focus:border-[#042D5D] focus:ring-[#042D5D] bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="destination">목적지</Label>
                      <Input
                        id="destination"
                        name="destination"
                        className="border-gray-200 focus:border-[#042D5D] focus:ring-[#042D5D] bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* 특별 요청사항 */}
                <div className="space-y-2">
                  <Label htmlFor="special_requests">특별 요청사항</Label>
                  <Textarea
                    id="special_requests"
                    name="special_requests"
                    placeholder="아기 카시트 요청 등 특별한 요청사항이 있으시면 작성해주세요."
                    className="min-h-[100px] border-gray-200 focus:border-[#042D5D] focus:ring-[#042D5D] bg-white"
                  />
                </div>

                {/* 제출 버튼 */}
                <div className="pt-4">
                  {/* 성공 알림 */}
                  {showSuccessAlert && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
                      <h3 className="font-bold">예약 요청이 성공적으로 전송되었습니다</h3>
                      <p>담당자가 확인 후 24시간 이내에 연락드리겠습니다.</p>
                    </div>
                  )}

                  {/* 오류 알림 */}
                  {showErrorAlert && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
                      <h3 className="font-bold">예약 요청 전송 실패</h3>
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-[#042D5D] hover:bg-[#042D5D]/90 py-6 text-lg text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "전송 중..." : "예약하기"}
                  </Button>
                  <div className="text-center mt-4">
                    <Link
                      href="https://pf.kakao.com/_example"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#042D5D] hover:underline"
                    >
                      카카오톡으로 문의하기
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Info - 취소 및 환불 정책 삭제 */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#042D5D]">예약 안내</h2>
          </div>
          <div className="bg-[#F8F9FC] p-8 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium text-[#042D5D] mb-4">예약 절차</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-600 ml-2">
              <li>예약 양식을 작성하여 제출합니다.</li>
              <li>담당자가 확인 후 24시간 이내에 이메일 또는 카카오톡으로 연락드립니다.</li>
              <li>일정과 요금에 대한 상세 안내를 받으신 후 예약을 확정합니다.</li>
              <li>현장에서 서비스 이용 후 결제합니다. (현금 또는 카드)</li>
            </ol>
          </div>
          
          {/* Contact Information */}
          <div className="mt-12 bg-[#F8F9FC] p-8 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium text-[#042D5D] mb-4">연락처 정보</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#042D5D] mt-1" />
                <div>
                  <p className="font-medium text-[#042D5D]">주소</p>
                  <p>303 Lê Hồng Phong, Phước Hải, Nha Trang, Khánh Hòa, 베트남</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Users className="h-5 w-5 text-[#042D5D] mt-1" />
                <div>
                  <p className="font-medium text-[#042D5D]">전화번호</p>
                  <p>0342.117.662</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-[#042D5D] mt-1" />
                <div>
                  <p className="font-medium text-[#042D5D]">이메일</p>
                  <p>konatour77@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MessageCircle className="h-5 w-5 text-[#042D5D] mt-1" />
                <div>
                  <p className="font-medium text-[#042D5D]">카카오톡</p>
                  <p>konatour77</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

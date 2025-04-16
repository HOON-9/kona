"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"
import emailjs from '@emailjs/browser'
import { useToast } from "@/components/ui/use-toast"
import { useState, useRef, useEffect } from "react"
import { Toaster } from "@/components/ui/toaster"

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)
  const [showErrorAlert, setShowErrorAlert] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

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
      
      // 필수 필드 검증
      const formData = new FormData(formRef.current)
      const name = formData.get('name')
      const email = formData.get('email')
      const phone = formData.get('phone')
      const subject = formData.get('subject')
      const message = formData.get('message')
      
      if (!name || !email || !phone || !subject || !message) {
        toast({
          title: "필수 정보 누락",
          description: "모든 필드는 필수 입력 항목입니다.",
          variant: "destructive",
        })
        setIsSubmitting(false)
        return
      }
      
      console.log("이메일 전송 시도")
      
      // EmailJS sendForm 메서드 사용
      const result = await emailjs.sendForm(
        'service_kahja2v',
        'template_8o6skya',
        formRef.current,
        'lnJPb8vez8B_En1-N'
      )
      
      console.log("이메일 전송 성공", result)
      
      setShowSuccessAlert(true)
      
      // 폼 초기화
      formRef.current.reset()
    } catch (error) {
      console.error("이메일 전송 실패", error)
      setShowErrorAlert(true)
      setErrorMessage("잠시 후 다시 시도해주세요.")
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
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">연락처</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">궁금한 점이 있으시면 언제든지 문의해주세요</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-[#F8F9FC]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-8 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-[#042D5D]">문의하기</h2>
                  <p className="mt-2 text-gray-600">아래 양식을 작성하여 문의해주세요.</p>
                </div>
                <div className="p-8">
                  <form 
                    ref={formRef} 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    id="contact-form"
                  >
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
                      <Label htmlFor="subject">제목</Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        className="border-gray-200 focus:border-[#042D5D] focus:ring-[#042D5D] bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">메시지</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="문의 내용을 작성해주세요."
                        className="min-h-[150px] border-gray-200 focus:border-[#042D5D] focus:ring-[#042D5D] bg-white"
                        required
                      />
                    </div>

                    {/* 성공 알림 */}
                    {showSuccessAlert && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
                        <h3 className="font-bold">문의가 성공적으로 전송되었습니다</h3>
                        <p>담당자가 확인 후 24시간 이내에 연락드리겠습니다.</p>
                      </div>
                    )}

                    {/* 오류 알림 */}
                    {showErrorAlert && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
                        <h3 className="font-bold">문의 전송 실패</h3>
                        <p>{errorMessage}</p>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full bg-[#042D5D] hover:bg-[#042D5D]/90 py-6 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "전송 중..." : "보내기"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold text-[#042D5D] mb-6">연락처 정보</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-[#042D5D] mt-1" />
                    <div>
                      <h3 className="font-semibold">주소</h3>
                      <p className="text-gray-600">303 Lê Hồng Phong, Phước Hải, Nha Trang, Khánh Hòa, 베트남</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-[#042D5D] mt-1" />
                    <div>
                      <h3 className="font-semibold">전화번호</h3>
                      <p className="text-gray-600">0342.117.662</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-[#042D5D] mt-1" />
                    <div>
                      <h3 className="font-semibold">이메일</h3>
                      <p className="text-gray-600">konatour77@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MessageSquare className="h-6 w-6 text-[#042D5D] mt-1" />
                    <div>
                      <h3 className="font-semibold">카카오톡</h3>
                      <p className="text-gray-600">konatour77</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold text-[#042D5D] mb-6">운영 시간</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">월요일 - 금요일:</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">토요일:</span>
                    <span>09:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">일요일:</span>
                    <span>휴무</span>
                  </div>
                  <p className="mt-4 text-gray-600">* 긴급 상황 시 24시간 연락 가능합니다.</p>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild className="w-full bg-[#042D5D] hover:bg-[#042D5D]/90 py-6 text-white">
                  <Link href="/reservation">예약하기</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Toaster 컴포넌트 추가 */}
      <Toaster />
    </>
  )
}

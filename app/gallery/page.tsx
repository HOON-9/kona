import Image from "next/image"

export default function Gallery() {
  // 갤러리 이미지 배열
  const galleryImages = [
    { src: "/갤러리.jpg", alt: "갤러리 이미지 1" },
    { src: "/갤러리 (2).jpg", alt: "갤러리 이미지 2" },
    { src: "/갤러리 (3).jpg", alt: "갤러리 이미지 3" },
    { src: "/갤러리 (4).jpg", alt: "갤러리 이미지 4" },
    { src: "/갤러리 (5).jpg", alt: "갤러리 이미지 5" },
    { src: "/갤러리 (6).jpg", alt: "갤러리 이미지 6" },
    { src: "/갤러리 (7).jpg", alt: "갤러리 이미지 7" },
    { src: "/갤러리 (8).jpg", alt: "갤러리 이미지 8" },
    { src: "/갤러리 (9).jpg", alt: "갤러리 이미지 9" },
    { src: "/갤러리 (10).jpg", alt: "갤러리 이미지 10" },
  ]

  return (
    <>
      {/* Header Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-[#042D5D]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">갤러리</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">코나투어와 함께한 특별한 순간들을 살펴보세요</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 4}
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

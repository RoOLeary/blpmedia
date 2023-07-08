import Image from 'next/image'

export default function SidebarAd() {
  return (
    <div>
      {/* Portrait Ad */}
      <a href="#" className="relative hidden w-full lg:block bg-gray-50 lg:aspect-w-9 lg:aspect-h-16">
        
        <Image 
          className="hidden object-cover w-full h-full lg:block" 
          src="/images/ads/fashion-ad-portrait.png"
          alt="Fashion ad portrait"
          width={450}
          height={280}
        />
      </a>

      {/* Landscape Ad */}
      <a href="#" className="relative w-full lg:hidden bg-gray-50">
        
        <Image 
          className="w-full h-auto" 
          src="/images/ads/fashion-ad-landscape.png"
          alt="Fashion landscape ad"
          width={960}
          height={540}
        />
      </a>
    </div>
  )
}
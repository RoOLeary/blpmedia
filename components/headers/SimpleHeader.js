export default function SimpleHeader({header}) {
  return (
    <section className="py-8 bg-gray-100">
      <div className="max-w-xl px-5 mx-auto lg:max-w-screen-xl sm:px-8 md:max-w-2xl">
        
        {/* Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-black tracking-normal text-gray-900 md:tracking-tight lg:leading-tight lg:text-5xl">
            {header.heading}
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            {header.text}
          </p>
        </div>
        
      </div>
    </section>
  )
}
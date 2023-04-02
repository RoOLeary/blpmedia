import Image from 'next/image'

export default function Newsletter({newsletter}) {
  return (
    <section className="py-12 bg-gray-50 sm:py-20 lg:py-24">
      <div className="max-w-screen-xl px-5 mx-auto sm:px-6 lg:px-8">
       
        {/* Content */}
        <div className="flex flex-col items-center max-w-xl mx-auto text-center">
          
  
          <h2 className="mt-6 text-3xl font-medium tracking-normal text-gray-900 sm:text-4xl sm:mt-8 md:tracking-tight lg:leading-tight lg:text-5xl">{newsletter.frontmatter.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-500">
            {newsletter.frontmatter.subtext}
          </p>
          
          {/* Newsletter signup container */}
          <div className="flex flex-col items-center w-full mt-8 sm:mt-10">
            <div className="relative w-full max-w-xl rounded-3xl h-14">
              
              {/* Newsletter signup form */}
              <form action={newsletter.formAction} method="post" className="transition duration-300 ease-in-out bg-transparent border border-gray-300/70 rounded-md group">
                <input type="email" className="bg-white hover:bg-transparent text-gray-800 h-14 w-full pl-6 pr-36 py-3.5 border-0 border-transparent rounded-3xl leading-5 transition  focus:outline-none focus:ring-2 focus:ring-red-100 focus:bg-white duration-300 ease-in-out text-sm" required placeholder={newsletter.frontmatter.formPlaceholder} autoComplete="email" />
                <button type="submit" className="uppercase tracking-widest text-red-700 inline-flex items-center h-11 absolute right-3 top-1.5 outline-none bg-transparent text-text-red-600 py-2 px-4 md:px-6 text-tiny sm:font-medium duration-300 ease-in-out focus:outline-none before:content-[&quot;&quot;] before:h-6 before:w-px before:bg-gray-300/70 before:left-0 before:right-auto before:absolute transition before:transition before:ease-in-out before:duration-300 hover:text-red-600">
                  {newsletter.frontmatter.formButtonText}
                </button>
              </form>
              
            </div>
            <p className="mt-4 text-sm text-center text-gray-500">{newsletter.frontmatter.formFooterText}</p>
          </div>

        </div>

      </div>
    </section>
  )
}
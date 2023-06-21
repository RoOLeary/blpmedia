import Link from 'next/link'

export default function NextArticle({post}) {
  return (
    <section className="relative w-full bg-fixed bg-center bg-no-repeat bg-cover h-96" style={{backgroundImage: `url(${post.frontmatter.image})`}}>
      <div className="absolute inset-0 bg-gray-900/50" />
      
      {/* Content */}
      <div className="absolute inset-0">
        <div className="flex flex-col items-center justify-center w-full h-full max-w-xl mx-auto">
          <span href="#" className="relative text-sm font-medium tracking-widest text-red-100 uppercase">Next article</span>
          <h2 className="mt-3 text-3xl font-medium tracking-normal text-center text-white sm:text-4xl md:tracking-tight lg:leading-tight lg:text-5xl">{post.frontmatter.title}</h2>
        </div>
      </div>

      <Link href={`/posts/${post.slug}`} className="absolute inset-0">

      </Link>
    </section>
  );
}
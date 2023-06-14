import Link from 'next/link'

export default function SidebarTags({header, tags}) {
  return (
    <div className="w-full p-5 bg-gray-50 sm:p-8 rounded-2xl">
      <h3 className="pb-2.5 text-2xl font-medium text-gray-900 border-b border-gray-300/70 relative before:content-[''] before:left-0 before:w-24 before:h-px before:-bottom-px before:bg-red-600 before:absolute">{header}</h3>

      {/* Tags */}
      <div className="pt-5">
        <ul className="flex flex-wrap justify-start -m-1">

          {tags.map((tag) => (
            <li key={tag}>
              <Link href={`/tags/${tag.replace(/ /g, '-').toLowerCase()}`}>

                <span className="inline-flex items-center px-4 py-1 m-1 text-sm font-medium text-gray-800 transition duration-300 ease-in-out bg-transparent border rounded-full sm:px-4 sm:py-1.5 border-gray-300/70 hover:text-red-700">
                  {tag}
                </span>

              </Link>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
}
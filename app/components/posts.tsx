import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-5"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col space-x-0">
              <p className="font-bold">
                {post.metadata.title}
              </p>
              <p className="font-normal">
                {post.metadata.summary}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}

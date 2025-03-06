import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        ArtemPM.com
      </h1>
      <p className="mb-4">
        {`Hi, my name is Artem Klibaner. What attracts me to the work of a product manager? That a good product manager must be an attractive and charming person in life. It is very difficult to build a good product without improving yourself. I can develop a website that will attract you more clients. I have extensive experience in product management, customer development and marketing. My projects:`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

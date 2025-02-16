import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Vod.qa
      </h1>
      <p className="mb-4">
        {`Hi, my name is Artem Klibaner. I can develop a website that will attract you more clients. I have extensive experience in product management, customer development and marketing. My projects:`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

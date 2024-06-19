
interface Page {
    title: string,
    content: string
}

async function getPageData(slug: string) {
    const query = `{
        postBy(slug: "${slug}") {
            content(format: RENDERED)
            title
        }
    }`

    const res = await fetch(`${[process.env.NEXT_PUBLIC_WORDPRESS_API_URL]}?query=${encodeURIComponent(query)}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        next: {
            revalidate: 0
        }
    })

    const { data } = await res.json();
    return data.postBy
}

export default async function Page({ params: { slug } }: { params: { slug: string } }) {

    const page = await getPageData(slug)

    return (
        <div className="col-span-12 p-10 bg-black rounded-lg">
            <h1 className="text-2xl font-bold text-white">{page.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.content }} className="space-y-4 text-white"></div>
        </div>
    )
}
import { Posts as PostType, getPostsFromCategory } from "@/libs/posts";
import Link from "next/link";

interface PostsProps {
    category: string
}

async function getPosts(category: string) {
    const query = `{
        posts(where: {categoryName: "${category}"}) {
          edges {
            node {
              slug
              title
              content
            }
          }
        }
    }`

    const res = await fetch(`${[process.env.WORDPRESS_API_URL]}?query=${encodeURIComponent(query)}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        next: {
            revalidate: 0
        }
    })

    const { data } = await res.json();
    const posts = data.posts.edges

    return getPostsFromCategory(posts)
}

export default async function Posts({ category }: PostsProps) {

    const posts = await getPosts(category)

    return (
        <ul className="space-y-2">
            {posts.map(function (post: PostType) {
                return (
                    <li key={post.slug}>
                        <Link href={`/page/${post.slug}`} className="text-sm font-normal text-orange-500 hover:text-orange-600">
                            {post.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
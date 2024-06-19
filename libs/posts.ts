export type Posts = {
    title: string,
    content?: string,
    slug: string
}

export function getPostsFromCategory(posts: any) {
    const PostsFromCategory: Posts[] = posts.map(
        (post: any) => ({
            title: post.node.title,
            content: post.node.content,
            slug: post.node.slug
        })
    )

    return PostsFromCategory;
}
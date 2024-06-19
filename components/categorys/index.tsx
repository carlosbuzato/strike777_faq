import Posts from "../posts";

type SubCategorie = {
    name: string,
    slug: string
}

async function getSubCategories(category: string) {
    const query = `{
        categories(where: {slug: "${category}"}) {
            edges {
              node {
                children {
                  nodes {
                    name
                    slug
                  }
                }
              }
            }
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
    const subCategories = data.categories.edges[0].node.children.nodes

    return subCategories
}

interface CategoriesProps {
    category: string
}

export default async function Categories({ category }: CategoriesProps) {

    const subCategories = await getSubCategories(category)

    return (
        <>
            {subCategories.map(function (subCategorie: SubCategorie) {
                return (
                    <div className="col-span-4 bg-black rounded-md p-8" key={subCategorie.slug}>
                        <h2 className="text-white text-xl font-bold mb-4">{subCategorie.name}</h2>
                        <Posts category={subCategorie.slug} />
                    </div>
                )
            })}
        </>
    )
}
"use client"
import { Posts } from "@/libs/posts";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

async function SearchDataFetch(value: string) {
    const query = `{
        posts(where: {search: "${value}"}) {
            nodes {
              title
              slug
            }
        }
    }`

    const res = await fetch(`${[process.env.NEXT_PUBLIC_WORDPRESS_API_URL]}?query=${encodeURI(query)}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        next: {
            revalidate: 0
        }
    })

    const { data } = await res.json();
    const result = data.posts.nodes

    const posts = result.map((post: Posts) => {
        return {
            title: post.title,
            slug: post.slug
        }
    })

    return posts
}

export default function Search() {
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [searchResult, setSearchResult] = useState<Posts[]>([])
    const [abortController, setAbortController] = useState<AbortController>(new AbortController())
    const [overlay, setOverlay] = useState(false)

    function showOvelayOnFocusInput() {
        setOverlay(!overlay)
    }

    useEffect(() => {
        abortController.abort()

        const newAbortController = new AbortController()
        setAbortController(newAbortController)

        const delayDebounceFn = setTimeout(async () => {

            if (searchTerm.length > 0) {
                const posts: Posts[] = await SearchDataFetch(searchTerm)

                if (posts.length > 0) {
                    setSearchResult(posts)
                    console.log(posts)
                } else {
                    setSearchResult([])
                    console.log("Nenhum resultado encontrado!")
                }
            } else {
                setSearchResult([])
            }

        }, 500)

        return () => {
            clearTimeout(delayDebounceFn)
            newAbortController.abort()
        }

        // if (searchQuery.length > 2) {
        //     const query = `{
        //         posts(where: {orderby: {field: TITLE, order: DESC}, search: "PIX"}) {
        //             edges {
        //               node {
        //                 id
        //                 slug
        //                 title
        //               }
        //             }
        //         }
        //     }`

        //     const fetchData = async () => {
        //         const data = await fetch(`${[process.env.WORDPRESS_API_URL]}?query=${encodeURIComponent(query)}`, {
        //             method: "GET",
        //             headers: {
        //                 "Content-Type": "application/json"
        //             },
        //             next: {
        //                 revalidate: 0
        //             }
        //         }).then(result => {
        //             console.log(result.json())
        //         }).catch(error => {
        //             console.log(error)
        //         })
        //     }

        //     fetchData()
        // }
    }, [searchTerm])

    const handleSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    return (
        <>
            <div className={`absolute w-full min-h-screen top-0 left-0 bottom-0 bg-black/85 z-10 ${!overlay && "hidden"} `}></div>
            <div className="w-full h-12 z-20">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => handleSearchQuery(e)}
                    onFocusCapture={showOvelayOnFocusInput}
                    onBlurCapture={showOvelayOnFocusInput}
                    className="w-[100%] lg:w-[95%] h-12 rounded-md shadow-lg text-sm font-normal p-4 text-black opacity-85 hover:opacity-100 focus:opacity-100 focus:outline-none"
                    placeholder="Buscar na Central de Ajuda..." />
                <div className={`w-[100%] lg:w-[95%] p-4 mt-3 rounded-md bg-white ${searchResult.length <= 0 || !overlay && "hidden"} `}>
                    <ul className="space-y-4">
                        {searchResult.map(function (post: Posts) {
                            return (
                                <li key={post.slug} className="leading-4">
                                    <Link href={post.slug}>
                                        <h2 className="text-md font-medium text-orange-500">{post.title}</h2>
                                    </Link>
                                    <span className="text-xs text-zinc-400">https://ajuda.strike777.bet/{post.slug}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}
"use client"
import { ChangeEvent, useEffect, useState } from "react";

export default function Search() {
    const [searchQuery, setSearchQuery] = useState("")
    const [overlay, setOverlay] = useState(false)
    const [searcResult, setSearchResult] = useState(false)

    function showOvelayOnFocusInput() {
        setOverlay(!overlay)
        setSearchResult(!searcResult)
    }

    useEffect(() => {
        if (searchQuery.length > 2) {
            const query = `{
                posts(where: {orderby: {field: TITLE, order: DESC}, search: "PIX"}) {
                    edges {
                      node {
                        id
                        slug
                        title
                      }
                    }
                }
            }`

            const fetchData = async () => {
                const data = await fetch(`${[process.env.WORDPRESS_API_URL]}?query=${encodeURIComponent(query)}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    next: {
                        revalidate: 0
                    }
                }).then(result => {
                    console.log(result.json())
                }).catch(error => {
                    console.log(error)
                })
            }

            fetchData()
        }
    }, [searchQuery])

    const handleSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchQuery(e.target.value)
    }

    return (
        <>
            <div className={`absolute w-screen h-screen top-0 left-0 bg-black/85 z-0 ${!overlay && "hidden"} `}></div>
            <div className="w-full h-12 z-10">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearchQuery(e)}
                    onFocusCapture={showOvelayOnFocusInput}
                    onBlurCapture={showOvelayOnFocusInput}
                    className="w-[100%] lg:w-[95%] h-12 rounded-md shadow-lg text-sm font-normal p-4 text-black opacity-85 hover:opacity-100 focus:opacity-100 focus:outline-none"
                    placeholder="Buscar na Central de Ajuda..." />
                <div className={`w-[100%] lg:w-[95%] px-4 mt-3 rounded-md bg-white ${!searcResult && "hidden"} `}>
                    <ul>
                        <li className="border-b-[1px] border-dotted py-4">
                            <h1 className="text-md text-orange-500">Página 1</h1>
                            <p className="text-xs text-black/50">https://ajuda.strike777.bet/page/...</p>
                        </li>
                        <li className="border-b-[1px] border-dotted py-4">
                            <h1 className="text-md text-orange-500">Página 1</h1>
                            <p className="text-xs text-black/50">https://ajuda.strike777.bet/page/...</p>
                        </li>
                        <li className="border-b-[1px] border-dotted py-4">
                            <h1 className="text-md text-orange-500">Página 1</h1>
                            <p className="text-xs text-black/50">https://ajuda.strike777.bet/page/...</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
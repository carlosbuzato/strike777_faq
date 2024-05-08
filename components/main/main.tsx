import { ReactNode } from "react"

interface MainProps {
    children: ReactNode
}

export default function Main({ children }: MainProps) {
    return (
        <main className="lg:w-9/12 grid grid-cols-12 gap-4 p-10 lg:p-16 mx-auto">
            {children}
        </main>
    )
}
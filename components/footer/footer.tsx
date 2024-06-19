import Description from "./description";
import Social from "./social";

export default function Footer() {
    return (
        <footer className="w-full p-10 bg-black border-t-2 border-orange-500 z-0">
            <div className="w-full lg:w-9/12 grid grid-cols-12 gap-4 mx-auto">
                <div className="col-span-12 lg:col-span-4 h-42">
                    <Social />
                </div>
                <div className="col-span-12 lg:col-span-8 h-42 flex items-center">
                    <Description />
                </div>
            </div>
        </footer>
    )
}
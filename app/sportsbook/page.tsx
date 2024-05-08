import Categories from "@/components/categorys";

export default function Sportsbook() {
    return (
        <div className="col-span-12 grid grid-cols-subgrid gap-4 bg-black rounded-md p-12">
            <div className="col-span-12">
                <h1 className="text-4xl font-bold flex items-center gap-2 mb-3">
                    Esportes
                </h1>
                <p className="text-white/50 text-md group-hover:text-white">
                    Encontre todas as informações relacionadas a <b>Como Apostar, Dicas de Apostas, Eventos Ao Vivo, Cash Out, Regras</b> sobre as apostas esportivas. Não achou o que procura? Entre em contato pelo nosso chat online.
                </p>
            </div>

            <Categories category="esportes" />
        </div>
    )
}
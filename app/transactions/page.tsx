import Categories from "@/components/categorys";

export default function Transactions() {

    return (
        <>
            <div className="col-span-12 grid grid-cols-subgrid gap-4 bg-black rounded-md p-12">
                <div className="col-span-12">
                    <h1 className="text-4xl font-bold flex items-center gap-2 mb-3">
                        Transações
                    </h1>
                    <p className="text-white/50 text-md group-hover:text-white">
                        Encontre todas as informações relacionadas a <b>Transações, Saques, Depósitos e Carteira</b> da sua conta. Não achou o que procura? Entre em contato pelo nosso chat online.
                    </p>
                </div>

                <Categories category="transacoes" />
            </div>
        </>
    )
}
import { IconDeviceGamepad, IconGift, IconMapQuestion, IconMessage, IconSoccerField, IconUserDollar, IconWallet } from "@tabler/icons-react";
import Link from "next/link";


export default function Home() {
    return (
        <>
            <div className="col-span-12 bg-black rounded-md p-12">
                <h1 className="text-xl font-bold flex items-center gap-2 mb-3">
                    <IconMapQuestion stroke={2} className="w-6 h-6 text-orange-500" />
                    Tire todas suas dúvidas aqui!
                </h1>
                <p className="text-white/50 text-md group-hover:text-white">
                    Explore a nossa biblioteca e tenha suas dúvidas respondidas em alguns minutos, digitando o que procura na barra de pesquisa ou visitando qualquer uma das seções abaixo. Basta verificar nossos números, pois 80% dos problemas, em mais de 300 mil visitas de clientes, foram resolvidos em apenas 2 minutos!
                </p>
            </div>
            <div className="col-span-12 lg:col-span-4 bg-black p-8 rounded-md text-center hover:bg-orange-500 group">
                <Link href="/transactions">
                    <IconWallet stroke={1} className="w-12 h-12 mx-auto mb-3 text-orange-500 group-hover:text-white" />
                    <h2 className="text-xl text-white font-bold">Transações</h2>
                    <p className="text-white/50 text-md group-hover:text-white">
                        Depósitos, Saques, Métodos e Políticas de Pagamento, Impostos e Taxas
                    </p>
                </Link>
            </div>
            <div className="col-span-12 lg:col-span-4 bg-black p-8 rounded-md text-center hover:bg-orange-500 group">
                <Link href="/bonus">
                    <IconGift stroke={1} className="w-12 h-12 mx-auto mb-3 text-orange-500 group-hover:text-white" />
                    <h2 className="text-xl text-white font-bold">Bônus</h2>
                    <p className="text-white/50 text-md group-hover:text-white">
                        Bônus Disponíveis, Apostas Esportivas e Cassino, Outras Ofertas e Promoções
                    </p>
                </Link>
            </div>
            <div className="col-span-12 lg:col-span-4 bg-black p-8 rounded-md text-center hover:bg-orange-500 group">
                <Link href="/account">
                    <IconUserDollar stroke={1} className="w-12 h-12 mx-auto mb-3 text-orange-500 group-hover:text-white" />
                    <h2 className="text-xl text-white font-bold">Conta do Jogador</h2>
                    <p className="text-white/50 text-md group-hover:text-white">
                        Registro, Problemas Para Acessar o Site, Detalhes da Conta, Alterar Dados
                    </p>
                </Link>
            </div>
            <div className="col-span-12 lg:col-span-4 bg-black p-8 rounded-md text-center hover:bg-orange-500 group">
                <Link href="/sportsbook">
                    <IconSoccerField stroke={1} className="w-12 h-12 mx-auto mb-3 text-orange-500 group-hover:text-white" />
                    <h2 className="text-xl text-white font-bold">Esportes</h2>
                    <p className="text-white/50 text-md group-hover:text-white">
                        Como Apostar, Dicas de Apostas, Eventos Ao Vivo, Cash Out, Reclamar Prêmios
                    </p>
                </Link>
            </div>
            <div className="col-span-12 lg:col-span-4 bg-black p-8 rounded-md text-center hover:bg-orange-500 group">
                <Link href="/casino">
                    <IconDeviceGamepad stroke={1} className="w-12 h-12 mx-auto mb-3 text-orange-500 group-hover:text-white" />
                    <h2 className="text-xl text-white font-bold">Cassino</h2>
                    <p className="text-white/50 text-md group-hover:text-white">
                        Slots, Cassino Ao Vivo, Como Jogar no Cassino, Regras e Prêmios em Geral
                    </p>
                </Link>
            </div>
            <div className="col-span-12 lg:col-span-4 bg-black p-8 rounded-md text-center hover:bg-orange-500 group">
                <Link href="/others">
                    <IconMessage stroke={1} className="w-12 h-12 mx-auto mb-3 text-orange-500 group-hover:text-white" />
                    <h2 className="text-xl text-white font-bold">Outros</h2>
                    <p className="text-white/50 text-md group-hover:text-white">
                        Nosso Aplicativo, Jogo Responsável, Termos e Condições, Proteção de Dados
                    </p>
                </Link>
            </div>
        </>
    );
}

import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default async function Produtos(){

    const dadosApi = await fetch('https://api.vercel.app/products')
    const todosProdutos = await dadosApi.json();

    return(
        <>
            <ul>
                { //Aqui vai apresentar os dados
                    todosProdutos.map ( ( cadaProduto: { key: Key | null | undefined; id: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; } ) => (
                        <li key={cadaProduto.key}>
                            {cadaProduto.id}
                            {cadaProduto.name}
                        </li>
                    ) )
                }
            </ul>
        </>
    )
}
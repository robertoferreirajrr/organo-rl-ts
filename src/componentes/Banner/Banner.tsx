import './Banner.css'
/**Função e export = Javascrit! */

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

export const Banner = ({enderecoImagem, textoAlternativo}:BannerProps) => {
    //JSX -> Parece HTML mas não é... O react entende o que é isso e da um append no DOM
    //Aqui no JSX usamos className para o nome de classes
    return (<header className="banner">
        {/*<img src="./imagens/banner.png" alt="Banner principal"/>*/}
        <img src={enderecoImagem} alt={textoAlternativo}/>

    </header>)
}

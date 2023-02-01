
type StyleProps = {
    name: string,
    productDescription: string,
    image: string,
    shopIt: string
}

const textStyle: React.CSSProperties = {
    color: ('white')
}
const buttonStyle: React.CSSProperties = {
    color: ("#ED9E83")
}

export function StyleInfo(prop: StyleProps){
    const {name, productDescription, image, shopIt} = prop;
    const noImg = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcontent.spiceworksstatic.com%2Fservice.community%2Fp%2Fpost_images%2F0000291423%2F5a6917f0%2Fattached_image%2Ffunny-error-messages_preview.jpg&imgrefurl=https%3A%2F%2Fcommunity.spiceworks.com%2Ftopic%2F2105369-10-hilarious-error-messages-facepalm-worthy-computer-prompts-that-make-no-sense&tbnid=2pBXRNX1D45WrM&vet=12ahUKEwjh7se_8fL8AhXVsXIEHcepD78QMygWegUIARDjAQ..i&docid=KFGEULW1xRrdrM&w=400&h=223&q=funny%20error%20messages%20windows&ved=2ahUKEwjh7se_8fL8AhXVsXIEHcepD78QMygWegUIARDjAQ"

    return(
        <div>
        <h3 style={textStyle}>{name}</h3>
        {/* loading images depending on if link is provided */}
            {image !== ""?<>
            <img src={image} alt={name}></img>
            </>: <img src={noImg} alt={"No Img Available :("}></img>
        }
        <h4 style={textStyle}>{productDescription}</h4>
        <div>
            <a href={shopIt}>
                <button style={buttonStyle}>Get the Look 😎</button>
            </a>
        </div>
        </div>
    )
}
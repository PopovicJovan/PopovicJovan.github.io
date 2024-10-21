import LinkButton from "../Buttons/LinkButton";
const MainPage = () => {
    const name = {
        fontFamily: 'Space Mono, monospace',
        fontSize: 'clamp(1rem, 5vw, 5rem)',
        color: 'white',
        whiteSpace: 'nowrap',
        // padding: '0rem clamp(1rem, 2vw, 3rem)',
        borderRadius: 'clamp(0.4rem, 0.75vw, 1rem)'

    };
    return (
        <div className="h-screen w-full bg-blue-950 flex flex-col justify-center items-center">
            <h1 className="mb-8" style={name}>Popović Jovan</h1>
            <div id="Buttons" className="h-1/2 w-3/4 lg:w-1/2 flex flex-col justify-between">
                <LinkButton url="mailto:jovan6.p@gmail.com" icon="email"></LinkButton>
                <LinkButton url="https://www.github.com/PopovicJovan" icon="github"></LinkButton>
                <LinkButton url="https://www.linkedin.com/in/pjovan6" icon="linkedin"></LinkButton>
                <LinkButton url="https://www.instagram.com/jovan_0610" icon="instagram"></LinkButton>
                <LinkButton url="https://discord.com/users/popovicjovan06" icon="discord"></LinkButton>
            </div>
        </div>
    )
}

export default MainPage;
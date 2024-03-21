import Info from "./types/info";
interface AppProps {
    info: Info;
}

function App({ info }: AppProps) {
    return (
        <>
            <nav className="flex flex-row items-center justify-end py-4 space-x-4 px-8">
                {info.socials.map((social) => (
                    <a href={social.url}>
                        <img className="h-8" src={social.imagePath} />
                    </a>
                ))}
            </nav>
            <section className="flex flex-col items-center w-full pt-36">
                <div className="text-4xl">{info.name}</div>
                <div className="text-lg">{info.role}</div>
                {info.stack.map((tech, idx) => (
                    <img className="h-4 w-5" key={idx} src={tech.imagePath} />
                ))}
            </section>
        </>
    );
}

export default App;

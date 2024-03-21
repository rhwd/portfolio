import Info from "./types/info";
interface AppProps {
    info: Info;
}

function App({ info }: AppProps) {
    return (
        <section className="flex flex-col items-center w-full pt-36">
            <div className="text-4xl">{info.name}asdasd</div>
            <div className="text-lg">{info.role}</div>
            {info.stack.map((tech, idx) => (
                <img className="h-4 w-5" key={idx} src={tech.imagePath} />
            ))}
        </section>
    );
}

export default App;

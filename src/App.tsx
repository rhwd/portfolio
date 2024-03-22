import Navbar from "./components/navbar";
import Info from "./types/info";
interface AppProps {
    info: Info;
}

function App({ info }: AppProps) {
    return (
        <>
            <Navbar socials={info.socials} />
            <section className="flex flex-col items-center w-full pt-36">
                <div className="text-4xl">{info.name}</div>
                <div className="text-lg ">{info.role}</div>
                <div className="flex flex-row space-x-4">
                    {info.stack.map((tech, idx) => (
                        <img
                            className="h-8 w-8"
                            key={idx}
                            src={tech.imagePath}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

export default App;

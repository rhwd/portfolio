import Navbar from "./components/navbar";
import StackShowcase from "./components/stack";
import Info from "./types/info";
interface AppProps {
    info: Info;
}

function App({ info }: AppProps) {
    return (
        <>
            <Navbar socials={info.socials} />
            <section className="flex flex-col items-center w-full pt-36">
                <div className="text-4xl md:text-8xl">{info.name}</div>
                <div className="text-lg md:text-3xl mb-8">{info.role}</div>
                <StackShowcase stack={info.stack} />
            </section>
        </>
    );
}

export default App;

import Navbar from "./components/navbar";
import StackShowcase from "./components/stackShowcase";
import Info from "./types/info";
interface AppProps {
    info: Info;
}

function App({ info }: AppProps) {
    return (
        <>
            <Navbar socials={info.socials} />
            <section className="flex flex-col items-center w-full pt-16 2xl:pt-36">
                <div className="text-5xl 2xl:text-8xl">{info.name}</div>
                <div className="text-lg md:text-3xl mb-8">{info.role}</div>
                <StackShowcase stack={info.stack} />
                <text className="mt-16 md:w-1/3 mx-6 text-center text-md sm:text-xl">
                    {info.intro}
                </text>
            </section>
        </>
    );
}

export default App;

interface Social {
    url: string;
    imagePath: string;
    name: string;
}

interface NavbarProps {
    socials: Social[];
}

function Navbar({ socials }: NavbarProps) {
    return (
        <nav className="flex flex-row items-center justify-end py-4 space-x-4 px-8">
            {socials.map((social) => (
                <a href={social.url}>
                    <img className="h-8" src={social.imagePath} />
                </a>
            ))}
        </nav>
    );
}
export default Navbar;

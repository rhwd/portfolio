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
                <img
                    className="h-8 cursor-pointer"
                    src={social.imagePath}
                    onClick={() => openInNewTab(social.url)}
                />
            ))}
        </nav>
    );
}
const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
};
export default Navbar;

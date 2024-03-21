export default interface Info {
    name: string;
    role: string;
    intro: string;
    stack: { imagePath: string; language: string }[];
    socials: { imagePath: string; name: string; url: string }[];
}

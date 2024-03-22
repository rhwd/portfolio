interface Stack {
    language: string;
    imagePath: string;
}

interface StackShowcaseProps {
    stack: Stack[];
}

function StackShowcase({ stack }: StackShowcaseProps) {
    return (
        <div className="flex flex-row space-x-4">
            {stack.map((tech, idx) => (
                <img className="h-8 w-8" key={idx} src={tech.imagePath} />
            ))}
        </div>
    );
}

export default StackShowcase;

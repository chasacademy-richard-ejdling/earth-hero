
const styles = {

    color: {
        primary: "bg-sky-300",
        secondary: "bg-sky-400"


    },

    size: {
        small: "text-md px-4 py-2 rounded-full",
        large: "text-lg px-8 py-2 rounded-full"
    },

    disabled: "bg-gray-500 cursor-not-allowed",

    // classerna kan vara igång hela tiden om du istället skriver: "disabled:bg-gray-500"
    // så vi behöver inte ha conditional på disabledClass 
    // och när det är disabled={true} så funkar inte click och cursor så "cursor-not-allowed" behövs inte 
    // och om man kör enabled:hover/active så är de endast igång när disabled={false}

    // Ex: className="bg-gray-200 enabled:hover:bg-gray-300 disabled:opacity-70 text-black rounded-full px-3 py-1 w-fit"
};

export default function Button(props) {

    const { title, color, size, disabled } = props;

    const colorClass = styles.color[color];
    const sizeClass = styles.size[size];
    const disabledClass = disabled ? styles.disabled : "";

    return (<button
        disabled={disabled}
        className={` ${colorClass} ${sizeClass} ${disabledClass}`}>{title}</button>
    );
}
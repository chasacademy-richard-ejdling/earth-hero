
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

        
};

export default function Button(props) {

    const { title, color, size, disabled } = props;

    const colorClass = styles.color[color];
    const sizeClass = styles.size[size];
    const disabledClass = disabled ? styles.disabled : "";

    return (<button 
    disabled={disabled}
    className= {` ${colorClass} ${sizeClass} ${disabledClass}`}>{title}</button>
    );
}
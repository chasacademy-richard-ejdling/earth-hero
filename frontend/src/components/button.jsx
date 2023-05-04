
const styles = {

    color: {
       primary: "bg-pink-500 hover:bg-pink-300",
       secondary: "bg-blue-500 hover:bg-blue-300",
       
    },

    size: {
        small: "text-sm px-4 py-2",
        large: "text-lg px-8 py-2",
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
    className= {`rounded-lg ${colorClass} ${sizeClass} ${disabledClass}`}>{title}</button>
    );
}
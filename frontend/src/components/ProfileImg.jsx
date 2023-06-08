// just send image and username via props. username is only used for alt text.

const gradients = [
    "from-[#14A557] via-[#3171D2] to-[#32ED66]",
    "from-[#2F36D3] via-[#36F46B] to-[#2F8ED3]",
    "from-[#32ED45] to-[#54AAE8]"
] 

export default function ProfileImg({ img, username }) {

    const randomNr = Math.floor(Math.random() * 3)

    return (
        <div className={`w-[45%] rounded-full overflow-hidden bg-gradient-to-b ${gradients[randomNr]}`}>
            <img src={img} alt={`User: ${username}`} className="p-1 w-full" />
        </div>
    )
}
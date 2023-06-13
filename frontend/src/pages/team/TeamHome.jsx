import profileImg from "../../assets/Frame 8.png"
import ProfileImg from "../../components/ProfileImg"

export default function TeamHome() {
    const username = "Richard"
    const teamName = "Name"
    const points = 1200
    return (
        <div className="flex flex-col items-center w-3/4 m-auto">
            <div className="bg-[#204E95] rounded-md m-4">
                <h1 className="p-2 text-2xl font-semibold text-EHGreen">{teamName}</h1>
            </div>
            <div className="flex flex-wrap justify-between gap-y-4 max-h-80 max-w-[214px]">
                <ProfileImg img={profileImg} username={username} />
                <ProfileImg img={profileImg} username={username} />
                <ProfileImg img={profileImg} username={username} />
                <ProfileImg img={profileImg} username={username} />
                <ProfileImg img={profileImg} username={username} />
                <ProfileImg img={profileImg} username={username} />
            </div>
            <div className="rounded-md mt-8 bg-gradient-to-b from-[#14A557] via-[#3171D2] to-[#32ED66]">
                <div className="flex items-center m-[1px] px-4 py-1 rounded-md bg-gray-50">
                    <p className="text-green-600 text-lg ">Total hero:&nbsp;</p>
                    <p className="text-2xl text-black">{points}</p>
                </div>
            </div>
        </div>
    )
}
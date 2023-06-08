import { useState } from "react";


export default function TeamPoints() {

    const teamName = 'Office Tornadoes'

    const [mainGoal, setMainGoal] = useState({
        name: 'Recycle',
        progress: 75,
        color: '#1DA1F2'
    });

    const [otherGoals, setOtherGoals] = useState([
        { name: 'Tidningar', progress: 75, color: 'bg-blue-500' },
        { name: 'Plast', progress: 56, color: 'bg-orange-500' },
        { name: 'Matavfall', progress: 40, color: 'bg-green-500' },
        { name: 'Pant', progress: 20, color: 'bg-gray-500' }
    ]);

    const circumference = 32 * 3.14;

    const totalScore = otherGoals.reduce((acc, curr) => acc + curr.progress, 0) + mainGoal.progress;

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="bg-[#204E95] rounded-md m-4">
                <h1 className="p-2 text-2xl font-semibold text-EHGreen">{teamName}</h1>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">{mainGoal.name}</h1>
                <svg
                    className="w-48 h-48 mx-auto"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="text-green-500 fill-none stroke-current stroke-2"
                        strokeDasharray={`${(mainGoal.progress / 100) * circumference}, ${circumference}`}
                        stroke={mainGoal.color}
                        d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text
                        className="text-blue-500 font-bold text-xs md:text-1x1"
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                    >
                        {`${mainGoal.progress}%`}
                    </text>
                </svg>
                <p className="text-gray-500 text-sm md:text-base mt-4">
                    Framsteg mot ditt mål!
                </p>
                <p className="text-black-500 font-bold text-sm md:text-base mt-4">
                    Total Poäng: {totalScore}
                </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-lg font-bold mb-4">Historik</h2>
                {otherGoals.map((goal) => (
                    <div key={goal.name} className="mb-4">
                        <h3 className="text-base font-bold mb-1">{goal.name}</h3>
                        <div className="relative pt-1">
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                    style={{ width: `${goal.progress}%` }}
                                    className={`shadow-none flex flex-col text-centerjustify-center ${goal.color}`}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
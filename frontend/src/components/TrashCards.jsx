import Trash from "../assets/Trash.svg";

export default function TrashCards({ type, color, points }) {
  return (
    <div className=" flex flex-col bg-white  items-center p-6 border-4 border-gray-300  rounded-lg ">
      <h1 className=" text-base font-light mb-4">{type}</h1>
      <svg
        className={color}
        width="70"
        height="85"
        viewBox="0 0 77 88"
        fill="current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="current"
          d="M23.2964 3.05655C24.2161 1.19532 26.1066 0.0341797 28.1674 0.0341797H48.6729C50.7337 0.0341797 52.6242 1.19532 53.5439 3.05655L54.7701 5.49836H71.1201C74.1346 5.49836 76.57 7.94016 76.57 10.9625C76.57 13.9849 74.1346 16.4267 71.1201 16.4267H5.72025C2.70573 16.4267 0.270264 13.9849 0.270264 10.9625C0.270264 7.94016 2.70573 5.49836 5.72025 5.49836H22.0702L23.2964 3.05655ZM5.72025 21.8909H71.1201V76.5327C71.1201 82.5603 66.2321 87.461 60.2201 87.461H16.6202C10.6082 87.461 5.72025 82.5603 5.72025 76.5327V21.8909ZM22.0702 32.8192C20.5715 32.8192 19.3452 34.0487 19.3452 35.5513V73.8006C19.3452 75.3032 20.5715 76.5327 22.0702 76.5327C23.5689 76.5327 24.7952 75.3032 24.7952 73.8006V35.5513C24.7952 34.0487 23.5689 32.8192 22.0702 32.8192ZM38.4202 32.8192C36.9214 32.8192 35.6952 34.0487 35.6952 35.5513V73.8006C35.6952 75.3032 36.9214 76.5327 38.4202 76.5327C39.9189 76.5327 41.1451 75.3032 41.1451 73.8006V35.5513C41.1451 34.0487 39.9189 32.8192 38.4202 32.8192ZM54.7701 32.8192C53.2714 32.8192 52.0451 34.0487 52.0451 35.5513V73.8006C52.0451 75.3032 53.2714 76.5327 54.7701 76.5327C56.2689 76.5327 57.4951 75.3032 57.4951 73.8006V35.5513C57.4951 34.0487 56.2689 32.8192 54.7701 32.8192Z"
        />
      </svg>

      <p className=" text-lg font-light mt-2">{points} points</p>
    </div>
  );
}

const Footer = () => (
    <div className="w-full bottom-0">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="text-blue-500 dark:text-green-700 fill-current w-full h-36"
            preserveAspectRatio="none"
        >
            <path d="M0,128L26.7,133.3C53.3,139,107,149,160,138.7C213.3,128,267,96,320,69.3C373.3,43,427,21,480,32C533.3,43,587,85,640,122.7C693.3,160,747,192,800,213.3C853.3,235,907,245,960,234.7C1013.3,224,1067,192,1120,160C1173.3,128,1227,96,1280,85.3C1333.3,75,1387,85,1413,90.7L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
        </svg>
        <div className="py-5 bg-blue-500 dark:bg-green-700">
            <div className="container mx-auto flex flex-col justify-center items-center text-white">
                <p>Created with ❤ by Rico Muhammad Nashrullah</p>
                <p className="text-sm">Copyright &copy; 2021 SmartLolo.</p>
            </div>
        </div>
    </div>
);

export default Footer;

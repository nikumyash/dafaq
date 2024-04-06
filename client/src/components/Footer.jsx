import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";



const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-white py-[50px] relative flex items-center flex-col">
                <ul className="list-none flex items-center justify-center gap-[30px] mb-[20px]">
                    <li className="transition-all ease duration-300 cursor-pointer font-[12px] hover:text-blue-500">Terms Of Use</li>
                    <li className="transition-all ease duration-300 cursor-pointer font-[12px] hover:text-blue-500">Privacy-Policy</li>
                    <li className="transition-all ease duration-300 cursor-pointer font-[12px] hover:text-blue-500">About</li>
                    <li className="transition-all ease duration-300 cursor-pointer font-[12px] hover:text-blue-500">Blog</li>
                    <li className="transition-all ease duration-300 cursor-pointer font-[12px] hover:text-blue-500">FAQ</li>
                </ul>
                <div className="font-[12px] leading-5 opacity-50 text-center max-w-[800px] mb-[20px]">
                DaFAQ is a unique online platform designed to facilitate anonymous interaction between students and teachers. Our mission is to create a safe and comfortable environment where individuals can ask questions, seek guidance, and share knowledge without fear of judgment or bias.
                </div>
                <div className="flex items-center justify-center gap-[10px]">
                    <span className="w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer transition-all ease duration-300 hover:text-blue-500">
                        <FaFacebookF />
                    </span>
                    <span className="w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer transition-all ease duration-300 hover:text-blue-500">
                        <FaInstagram />
                    </span>
                    <span className="w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer transition-all ease duration-300 hover:text-blue-500">
                        <FaTwitter />
                    </span>
                    <span className="w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer transition-all ease duration-300 hover:text-blue-500">
                        <FaLinkedin />
                    </span>
                </div>
                <div className="font-[12px] leading-5 opacity-50">Copyright © 2024 DaFAQ Labs Inc.</div>
        </footer>
    );
};

export default Footer;
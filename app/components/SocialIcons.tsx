import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaXTwitter, FaGoodreads } from 'react-icons/fa6';

const SocialIcons = () => {
    return (
        <div className="flex space-x-6 justify-start items-center my-6">
            {/* GitHub */}
            <a href="https://github.com/0xwata" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition duration-300">
                <FaGithub size={24} />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/0xwata" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition duration-300">
                <FaLinkedin size={24} />
            </a>

            {/* FaceBook */}
            <a href="https://www.facebook.com/0xwata" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition duration-300">
                <FaFacebook size={24} />
            </a>

            {/* X (formerly Twitter) */}
            <a href="https://twitter.com/0xwata" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition duration-300">
                <FaXTwitter size={24} />
            </a>

            {/* Goodreads
            <a href="https://goodreads.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition duration-300">
                <FaGoodreads size={24} />
            </a> */}
        </div>
    );
};

export default SocialIcons;
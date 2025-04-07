import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center p-10 bg-gray-900 text-white">
          <div className="flex space-x-6 mb-4">
            <a href="https://github.com/Astraalito" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nicolasasri/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-400">
              <FaLinkedin />
            </a>
            <a href="mailto:nicolas.asri@gmail.com" className="text-3xl hover:text-gray-400">
              <FaEnvelope />
            </a>
          </div>
          <p className="text-base">Made with <span className="text-red-500">❤</span> by Nico</p>
          <p className="text-base text-sm">Ne pas cliquer <a href="https://matias.me/nsfw/" target="_blank" className="text-purple-500 hover:text-purple-400">ici</a>.</p>
        </footer>
      );
};

export default Footer;

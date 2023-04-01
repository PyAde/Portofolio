import { useState, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { motion } from "framer-motion";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`py-4 md:py-10 mb-12 flex flex-col md:flex-row justify-between fixed top-0 left-0 w-full bg-transparent shadow-md z-10 transition duration-300 ease-in-out ${
        isScrolled ? "scrolled" : ""
      }`}>
      <h1 className='text-xl pl-5 font-poppins text-violet-500 mb-4 md:mb-0'>
        Developer
      </h1>
      <div>
        <div className='text-3xl absolute right-8 top-6 cursor-pointer'>
          <motion.button
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            type='button'
            className='md:hidden block text-gray-500 hover:text-violet-500 focus:text-violet-500 focus:outline-none'
            onClick={() => setIsOpen(!isOpen)}>
            <IoIosMenu className='h-6 w-6 fill-current' />
          </motion.button>
        </div>
        <ul
          className={`${
            isOpen ? "flex flex-col" : "hidden"
          } md:flex md:flex-row md:pb-0 pb-4 md:relative md:z-auto md:left-0 md:w-auto w-full bg-white md:bg-transparent md:flex-1 md:justify-end md:items-center md:space-x-8 md:space-y-0 space-y-4 px-4 md:px-0 text-center md:text-left`}>
          <li>
            <a
              href='#'
              className='text-base text-black py-2 mx-8 flex  text-center justify-center  hover:-translate-y-1 hover:scale-110 
        duration-300 hover:text-violet-500'>
              Home
            </a>
          </li>
          <li>
            <a
              href='#skill'
              className='text-base text-black py-2 mx-8 flex  text-center justify-center  hover:-translate-y-1 hover:scale-110 
        duration-300 hover:text-violet-500'>
              Skill
            </a>
          </li>
          <li>
            <a
              href='#project'
              className='text-base text-black py-2 mx-8 flex  text-center justify-center  hover:-translate-y-1 hover:scale-110 
        duration-300 hover:text-violet-500'>
              Project
            </a>
          </li>
          <div>
            <li className=''>
              <a
                href='mailto:lioade2007@gmail.com'
                className='bg-gradient-to-r from-purple-500 to-violet-500 text-white px-4 py-2 mx-8 flex  
        text-center justify-center rounded-md ml-8  transition ease-in-out delay-150 bg-purple-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
                Contanct
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

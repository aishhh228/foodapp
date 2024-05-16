// Footer component for footer section
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className=" text-sm fixed bottom-0 left-0 z-20 w-full p-4 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-white-200 dark:border-gray-300">
       <div className="text-sm"><a href="https://www.linkedin.com/in/chetannada/">
       ©{year} Aishwarya Sagavakar.  All Rights Reserved.
        </a>
       </div>
        <strong>
          Food<span>App</span>
        </strong>
      </div>
    );
  };
  
  export default Footer;
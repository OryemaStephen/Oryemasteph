
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="bottom-0 flex items-center justify-center w-full py-5 text-black bg-white">
      <span>&copy; </span>
      <span>{year} Stephen Oryema </span>
    </div>
  );
};

export default Footer;

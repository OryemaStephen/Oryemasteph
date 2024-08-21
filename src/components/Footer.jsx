
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="flex justify-center w-full py-3 text-lg text-black bg-white">
      <span>&copy; </span>
      <span>{year} Stephen Oryema </span>
    </div>
  );
};

export default Footer;

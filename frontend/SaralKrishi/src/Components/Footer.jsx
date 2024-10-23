const Footer = () => {
  return (
    <footer className="bg-white text-black py-4">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-semibold">Saral Krishi</h3>
        <p className="mt-2">Buy seeds, fertilizers, and other farming products.</p>
        <div className="mt-4">
          <a href="#" className="text-green-500 hover:underline">Terms of Service</a>
          <span className="mx-2">|</span>
          <a href="#" className="text-green-500 hover:underline">Privacy Policy</a>
        </div>
        <p className="mt-4 text-sm">© {new Date().getFullYear()} Saral Krishi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

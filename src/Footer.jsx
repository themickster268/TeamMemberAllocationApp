const Footer = () => {

  const today = new Date();
  
  return (
    <footer className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <p>&copy; Copyright {today.getFullYear()} - Michael Donnelly</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
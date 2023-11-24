const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        {/* <aside>
          <img className="w-60 -mt-14" src={logo} alt="" />
        </aside> */}
        <nav>
          <header className="text-3xl mr-24 footer-title font-semibold">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title text-3xl font-semibold ">Social</header>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Github</a>
        </nav>
        <div>
          <h2 className="text-3xl -mt-3 mr-24 footer-title font-semibold">
            {" "}
            Our Address
            <br />
            & Contact Us
          </h2>
            <h3>
              Leo Digital 7th Floor Miami,
              <br /> Fl 33130,Dhaka Bangladesh.
            </h3>
            <h4 >Call us: 0123456789</h4>
            <h4 >Email us: demo@demo.com</h4>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;

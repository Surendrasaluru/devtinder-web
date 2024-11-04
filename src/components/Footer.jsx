const Footer = () => {
  return (
    <>
      <footer className="footer bg-base text-white flex items-center p-6 fixed bottom-0 justify-center">
        <aside className="grid-flow-col items-center">
          <p>
            Copyright © {new Date().getFullYear()} - Made With Love by{" "}
            <span className="text-lg font-semibold">SurenDra</span>
            ❤️
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;

function NavBar({ children }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {children}
      </div>
    </header>
  );
}

export default NavBar;

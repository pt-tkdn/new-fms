const Header = () => {
  return (
    <div className="flex h-16 sticky top-0 z-10 items-center pl-8 pr-6 border-b bg-white">
      <div className="flex flex-grow font-bold opacity-50">
        Dashboard Overview
      </div>
      <div className="flex gap-x-5">
        <button className="btn btn-primary">Create</button>
        <button className="btn btn-secondary">Export</button>
      </div>
    </div>
  );
};

export default Header;

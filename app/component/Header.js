import { FiSearch, FiMenu } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold">My Notes</h1>
      </div>
    </header>
  );
};

export default Header;

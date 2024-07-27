
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
     
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 flex-1 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

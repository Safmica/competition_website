import Footer from "../components/footer";
import Navbar from "../components/navbar";

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-400">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;

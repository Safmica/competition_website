import Footer from "../components/footer";
import Navbar from "../components/navbar";

function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;

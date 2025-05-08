import Navbar from "../components/navbar";

function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

export default MainLayout;

import NavBar from "./NavBar";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;

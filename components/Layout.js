import AnnouncementBar from "./AnnouncementBar";

function Layout({ children }) {
  return (
    <>
      <AnnouncementBar />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;

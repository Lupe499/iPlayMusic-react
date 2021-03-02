import "./TopNav.css";

function TopNav({pageName, pageH1}) {
  return (
    <>
        <nav className="TopNav">
            <ul className="TopUl">
                <li><button className="backButton" onClick={() => window.history.back()}><i className="fas fa-chevron-left"></i></button></li>
                <li className="pageName">{pageName}</li>
                <li><ion-icon name="search-outline"></ion-icon></li>
            </ul>
        </nav>
        <h1 className="pageTitle">{pageH1}</h1>
    </>
  );
}

export default TopNav;

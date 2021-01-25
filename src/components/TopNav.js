import "./TopNav.css";

function TopNav({pageName, pageH1}) {
  return (
    <>
        <nav className="TopNav">
            <ul className="TopUl">
                <li><i class="fas fa-chevron-left"></i></li>
                <li className="pageName">{pageName}</li>
                <li><ion-icon name="search-outline"></ion-icon></li>
            </ul>
        </nav>
        <h1 className="pageTitle">{pageH1}</h1>
    </>
  );
}

export default TopNav;
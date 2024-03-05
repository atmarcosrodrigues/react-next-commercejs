import Link from "next/link";

const Header = ({ merchant }) => (
  <header className="header">
    <h1 className="header__text-logo">
      {merchant?.business_name || "Tech Store"}
    </h1>
    <Link href="/" className="header__shop">
      Home
    </Link>
  </header>
);

export default Header;

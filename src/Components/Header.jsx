import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header className="header">
        <Link to="/" className="header-link">
          Home
        </Link>
        <Link to="/start" className="header-link">
          Start test
        </Link>
        <Link to="/history" className="header-link">
          Your history
        </Link>
        <Link to="/addToDictionary" className="header-link">
          Add to dictionary
        </Link>
      </header>
    </div>
  );
};

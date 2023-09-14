import { Link } from "react-router-dom";

const YatayMenu = () => {
  return (
    <ul className="flex yatay-menu space-x-4">
      <li>
        <Link
          to="/"
          className="text-red-500 hover:text-red-700 transition duration-300"
        >
          Ana Sayfa
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="text-green-500 hover:text-green-700 transition duration-300"
        >
          Hakkımızda
        </Link>
      </li>
      <li>
        <Link
          to="/services"
          className="text-blue-500 hover:text-blue-700 transition duration-300"
        >
          Hizmetler
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="text-purple-500 hover:text-purple-700 transition duration-300"
        >
          İletişim
        </Link>
      </li>
      <li>
        <Link
          to="/admin"
          className="text-orange-500 hover:text-orange-700 transition duration-300"
        >
          Admin
        </Link>
      </li>
    </ul>
  );
};

export default YatayMenu;

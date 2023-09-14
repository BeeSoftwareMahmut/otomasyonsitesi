import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const DikeyMenu = (props) => {
  const { handleShowingTheMenu } = props;

  return (
    <div className="h-screen z-50 bg-neutral-100 fixed top-0 right-0 transform transition-transform duration-300 ease-in-out w-64">
      <button
        onClick={handleShowingTheMenu}
        className='absolute top-3 right-3 font-extrabold text-3xl text-gray-700 hover:text-red-500 transition duration-300 transform hover:scale-110'
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <ul className="  ml-[20px] space-y-4 mt-16">
        <li>
          <Link
            to="/"
            className="text-blue-500 hover:text-red-500 transition duration-300"
          >
            Ana Sayfa
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-green-500 hover:text-red-500 transition duration-300"
          >
            Hakkımızda
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="text-purple-500 hover:text-red-500 transition duration-300"
          >
            Hizmetler
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-orange-500 hover:text-red-500 transition duration-300"
          >
            İletişim
          </Link>
        </li>
        <li>
          <Link
            to="/admin"
            className="text-pink-500 hover:text-red-500 transition duration-300"
          >
            Admin
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DikeyMenu;

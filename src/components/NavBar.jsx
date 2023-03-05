import { IoHome, IoSearch, IoPerson } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function NavBar() {
  const navlinks = [
    {
      route: '',
      icon: <IoHome />,
    },
    {
      route: 'search',
      icon: <IoSearch />,
    },
    {
      route: 'profile',
      icon: <IoPerson />,
    },
  ];

  return (
    <ul className=' text-violet-600'>
      {navlinks.map((elem) => {
        return (
          <li key={uuidv4()}>
            <Link to={elem.route}>{elem.icon}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavBar;

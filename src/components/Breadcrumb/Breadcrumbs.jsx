import { Link, useLocation } from 'react-router-dom';
import "./Breadcrumb.scss";

const Breadcrumbs = () => {
  const location = useLocation();
  console.log("loction",location)
  const pathnames = location.pathname.split('/').filter((x) => x);
  const labelMap = {
    Home: 'Home',
    Profile: 'Profile',
    Orders: 'Orders',
  };

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <div className="breadCrumbs">
      {pathnames.map((value, index) => {
        const name = labelMap[value] || decodeURIComponent(value);
        console.log("name",name,decodeURIComponent(value))
        const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
        const isLast = index === pathnames.length - 1;
        return (
          <span key={routeTo}>
            {(isLast) ? (<>
              {' / '}
              <span>{name}</span></>
            ) : (
              <Link to={routeTo}>{name}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;

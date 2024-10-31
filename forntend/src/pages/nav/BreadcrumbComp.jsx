import { Breadcrumb } from "flowbite-react";
import { useLocation } from "react-router-dom";


const BreadcrumbComp = () => {

  const location = useLocation()
  let crumbs = location.pathname.split('/').filter(crumb => crumb !== '')

  return (
    <div className="h-10 flex items-center px-2">
      <Breadcrumb aria-label="Default breadcrumb example">
        {
          crumbs.map((crumb,indx) => {
            return <Breadcrumb.Item key={indx} href={`/${crumb}`}>{crumb}</Breadcrumb.Item>

          })
        }
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbComp
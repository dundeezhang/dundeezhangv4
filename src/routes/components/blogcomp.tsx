import "/src/css/blogcomp.css";
import {Outlet, Link} from "react-router-dom";

export default function BlogComp() {
  return (
    <div className="Blog">
      <body className="blog-intro ibm-plex-mono-light">
        <h2>What's that? A Blog O:</h2>
        <Link to={`blog`}>
          --{">"} Link to Blog {"<"}--
        </Link>
        <p>
            Dundee Zhang - 2024 - All Rights Reserved
        </p>
      </body>
      <div id="detail">
        <Outlet />
      </div>
    </div>
    
  );
}
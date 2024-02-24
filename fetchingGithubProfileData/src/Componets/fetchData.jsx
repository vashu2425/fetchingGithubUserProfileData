import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch data");
        }
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <nav className="navbar bg-body-tertiary xnav">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Github Users</span>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          {users.map((user) => (
            <div className="col-md-3" key={user.id}>
              <div className="card">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{user.login}</h5>
                  <p className="card-text">Followers: {user.followers}</p>
                  <p className="card-text">Repositories: {user.public_repos}</p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FetchData;

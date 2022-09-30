import React, { useEffect, useState } from "react";

export default function Project() {
  const [projectName, setProjectName] = useState([]);
  useEffect(() => {
    const getRepoList = async () => {
      const url = "https://api.github.com/users/QNguyen-hub/repos";

      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setProjectName(data);
      } catch (err) {
        console.error(err);
      }
    };

    getRepoList();
  }, []);

  return (
    <div>
      {projectName.map((project) => {
        console.log(project);
        return (
          <div
            className="card bg-info m-2"
            style={{ width: "300px", height: "200px" }}
          >
            <div className="card-body">
              <h2 className="card-title" key={project.name}>
                {project.name}
              </h2>
              <a href={project.html_url} key={project.html}>
                {project.name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

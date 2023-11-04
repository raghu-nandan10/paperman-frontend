import React from "react";

import Tags from "../../components/tags/Tags";

const TopCategories = () => {
  const tags = [
    {
      id: 1,
      value: "React JS",
    },
    {
      id: 1,
      value: "Node JS",
    },
    {
      id: 1,
      value: "Ruby",
    },
    {
      id: 1,
      value: "C",
    },
    {
      id: 1,
      value: "C#",
    },
    {
      id: 1,
      value: "C++",
    },
    {
      id: 1,
      value: "Java",
    },
    {
      id: 1,
      value: "Spring Boot",
    },
    {
      id: 1,
      value: "Keycloak",
    },
    {
      id: 1,
      value: "Maven",
    },
    {
      id: 1,
      value: "HTML",
    },
  ];
  return (
    <div className="top-categories">
      <h1 className="title">Top Categories</h1>
      <div className="catg-container">
        {tags.map((item) => (
          <Tags id={item.id} value={item.value} />
        ))}
      </div>
    </div>
  );
};

export default TopCategories;

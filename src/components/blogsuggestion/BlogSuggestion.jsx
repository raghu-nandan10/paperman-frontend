import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

const BlogSuggestion = () => {
  const suggestion = [
    {
      id: 1,
      title: "Suggestion-1",
      link: "#!",
    },
    {
      id: 2,
      title: "Suggeestion-2",
      link: "#!",
    },
    {
      id: 3,
      title: "Suggeestion-3",
      link: "#!",
    },
    {
      id: 4,
      title: "Suggeestion-4",
      link: "#!",
    },
  ];
  return (
    <div className="sidepanel-container">
      <h1 className="title">Suggestions</h1>
      <ul className="sidepanel-container-list">
        {suggestion.map((item) => {
          return (
            <div className="arrow" id={item.id}>
              <AiOutlineArrowRight color="rgb(13 148 136)" />
              <a className="blog-suggestion" href={item.link}>
                {item.title}
              </a>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogSuggestion;

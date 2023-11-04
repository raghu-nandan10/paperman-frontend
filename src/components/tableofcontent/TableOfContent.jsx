import React from "react";

import {AiOutlineArrowRight} from "react-icons/ai";

const TableOfContent = () => {
  const subtitle = [
    {
      id: 1,
      title: "Subtitle-1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dolores consequatur facere enim suscipit. Quod mollitia ducimu nobis maxime voluptatum eos excepturi dignissimos aliquid natus aut tempore, iure minus eveniet ad, perspiciatis, facere dolorem sunt corporis qui praesentium commodi neque? Culpa neque expedita enim, doloribus odio maiores exercitationem qui dolorum eligendi quos. Rerum ad consequuntur repudiandae repellendus fugiat perspiciatis est animi qui, tempore enim accusamus corrupti saepe veniam? Quos facilis, nemo est velit autem doloremque fuga animi odio libero. Tempora placeat deleniti et non adipisci, totam iusto enim, quos quas quasi quisquam cum voluptas earum maiores! In enim aperiam non doloribus. Magnam unde corrupti alias, neque quos praesentium ipsa blanditiis! Necessitatibus quidem vero recusandae incidunt, veniam laudantium numquam sed fuga in odio labore eius aliquid magnam ab consequatur sequi provident consectetur itaque velit perspiciatis explicabo eum neque quasi",
    },
    {
      id: 2,
      title: "Subtitle-2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dolores consequatur facere enim suscipit. Quod mollitia ducimu nobis maxime voluptatum eos excepturi dignissimos aliquid natus aut tempore, iure minus eveniet ad, perspiciatis, facere dolorem sunt corporis qui praesentium commodi neque? Culpa neque expedita enim, doloribus odio maiores exercitationem qui dolorum eligendi quos. Rerum ad consequuntur repudiandae repellendus fugiat perspiciatis est animi qui, tempore enim accusamus corrupti saepe veniam? Quos facilis, nemo est velit autem doloremque fuga animi odio libero. Tempora placeat deleniti et non adipisci, totam iusto enim, quos quas quasi quisquam cum voluptas earum maiores! In enim aperiam non doloribus. Magnam unde corrupti alias, neque quos praesentium ipsa blanditiis! Necessitatibus quidem vero recusandae incidunt, veniam laudantium numquam sed fuga in odio labore eius aliquid magnam ab consequatur sequi provident consectetur itaque velit perspiciatis explicabo eum neque quasi",
    },
    {
      id: 3,
      title: "Subtitle-3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dolores consequatur facere enim suscipit. Quod mollitia ducimu nobis maxime voluptatum eos excepturi dignissimos aliquid natus aut tempore, iure minus eveniet ad, perspiciatis, facere dolorem sunt corporis qui praesentium commodi neque? Culpa neque expedita enim, doloribus odio maiores exercitationem qui dolorum eligendi quos. Rerum ad consequuntur repudiandae repellendus fugiat perspiciatis est animi qui, tempore enim accusamus corrupti saepe veniam? Quos facilis, nemo est velit autem doloremque fuga animi odio libero. Tempora placeat deleniti et non adipisci, totam iusto enim, quos quas quasi quisquam cum voluptas earum maiores! In enim aperiam non doloribus. Magnam unde corrupti alias, neque quos praesentium ipsa blanditiis! Necessitatibus quidem vero recusandae incidunt, veniam laudantium numquam sed fuga in odio labore eius aliquid magnam ab consequatur sequi provident consectetur itaque velit perspiciatis explicabo eum neque quasi",
    },
    {
      id: 4,
      title: "Subtitle-4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dolores consequatur facere enim suscipit. Quod mollitia ducimu nobis maxime voluptatum eos excepturi dignissimos aliquid natus aut tempore, iure minus eveniet ad, perspiciatis, facere dolorem sunt corporis qui praesentium commodi neque? Culpa neque expedita enim, doloribus odio maiores exercitationem qui dolorum eligendi quos. Rerum ad consequuntur repudiandae repellendus fugiat perspiciatis est animi qui, tempore enim accusamus corrupti saepe veniam? Quos facilis, nemo est velit autem doloremque fuga animi odio libero. Tempora placeat deleniti et non adipisci, totam iusto enim, quos quas quasi quisquam cum voluptas earum maiores! In enim aperiam non doloribus. Magnam unde corrupti alias, neque quos praesentium ipsa blanditiis! Necessitatibus quidem vero recusandae incidunt, veniam laudantium numquam sed fuga in odio labore eius aliquid magnam ab consequatur sequi provident consectetur itaque velit perspiciatis explicabo eum neque quasi",
    },
  ];
  return (
    <div className="sidepanel-container">
      <h1 className="title">Table of content</h1>
      <ul className="sidepanel-container-list">
        {subtitle.map((item) => {
          return (
            <div className="arrow">
              <AiOutlineArrowRight color="rgb(13 148 136)" />
              <a className="blog-suggestion" href={"#" + item.id}>
                {item.title}
              </a>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TableOfContent;

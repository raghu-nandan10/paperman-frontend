import React from "react";
import HomeCard from "./HomeCard";

const HomeCardContainer = () => {
  const listOfHomeCards = [
    // {
    //   caption: "End of React.js?",
    //   thumbnail: "https://react.dev/images/home/conf2021/cover.svg",
    //   user: "PaperMan",
    //   views: "60k",
    //   timestamp: "4 minutes ago",
    //   contentId: 1,
    //   hastags: [],
    // },
    {
      caption: "Learn WebML in easy Way",
      thumbnail:
        "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1284006/retina_1708x683_cover-0323-MachineLearning_Dan_Newsletter-b21703f41d807514083e297955e1b46d.png",
      user: "PaperMan",
      views: "60k",
      timestamp: "4 minutes ago",
      contentId: 1,
      hastags: [],
    },
    {
      caption: "Javascript is god.",
      thumbnail:
        "https://cdn.geekboots.com/geek/javascript-meta-1652702081069.jpg",
      user: "PaperMan",
      views: "60k",
      timestamp: "4 minutes ago",
      contentId: 2,
      hastags: [],
    },
    {
      caption: "Learn sockets using Node.js",
      thumbnail:
        "https://www.peerbits.com/static/3908ce2a3941a9a56f1b145496600fac/189bc/development-practices-for-node-js-developers-main.jpg",
      user: "PaperMan",
      views: "60k",
      timestamp: "4 minutes ago",
      contentId: 3,
      hastags: [],
    },
    {
      caption: "Springboot",
      thumbnail:
        "https://miro.medium.com/v2/resize:fit:900/0*t61rpXrvkpesX_8U.jpg",
      user: "PaperMan",
      views: "60k",
      timestamp: "4 minutes ago",
      contentId: 3,
      hastags: [],
    },
    {
      caption: "Web development",
      thumbnail:
        "https://www.digitalsilk.com/wp-content/uploads/2022/09/website-development-process-1.jpg",
      user: "PaperMan",
      views: "60k",
      timestamp: "4 minutes ago",
      contentId: 3,
      hastags: [],
    },
  ];
  return (
    <div className=" w-[100%] flex flex-col justify-center items-center overflow-hidden ">
      <div className="text-white  text-xl flex gap-1  ">
        <span>Recently</span> <span className="text-teal-500"> Added</span>
      </div>
      <div className=" w-[100%]   grid grid-flow-row sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4  gap-4  p-10   ">
        {listOfHomeCards.map((homeCards, index) => (
          <HomeCard key={index} object={homeCards} />
        ))}
      </div>
    </div>
  );
};

export default HomeCardContainer;

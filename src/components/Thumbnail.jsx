import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { AiTwotoneDelete } from "react-icons/ai";
const fileTypes = ["JPG", "PNG", "GIF"];
const Thumbnail = ({ blogObject, setBlogObject }) => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const thumbnailUrl = reader.result;
        const updatedBlogObject = { ...blogObject };
        updatedBlogObject.thumbnail = thumbnailUrl;
        setBlogObject(updatedBlogObject);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="w-[100%] flex  justify-center font-thin items-center my-5 flex-col gap-4 relative ">
      <div className="w-[90%]">Thumbnail</div>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
      {file && (
        <div className="flex gap-4 w-[90%]  justify-center font-customFont font-thin  flex-col my-4">
          <div className="flex gap-2">
            Thumbnail <div className="text-blue-600">Preview</div>
          </div>
          <img
            src={blogObject?.thumbnail}
            className=" object-fill w-[60%] min-w-[360px] "
          />
        </div>
      )}
      {file != null && (
        <div
          className="absolute right-6 top-2 md:right-11 md:top-16 cursor-pointer hover:text-red-600"
          onClick={() => {
            setFile(null);
            const updatedBlogObject = { ...blogObject };
            updatedBlogObject.thumbnail = "";
            setBlogObject(updatedBlogObject);
            console.log(blogObject);
          }}
        >
          <AiTwotoneDelete size={25} />
        </div>
      )}
    </div>
  );
};

export default Thumbnail;

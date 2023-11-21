import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { TagInput } from "evergreen-ui";

const TagSelector = ({ blogObject, setBlogObject }) => {
  const [values, setValues] = React.useState([]);

  useEffect(() => {
    const updatedBlogObject = { ...blogObject };
    updatedBlogObject.hastags = values;
    setBlogObject(updatedBlogObject);
  }, [values]);

  const allValues = React.useMemo(
    () => ["SpringBoot", "React.js", "Node.js", "IAM", "Docker", "Ngnix"],
    []
  );
  const autocompleteItems = React.useMemo(
    () => allValues.filter((i) => !values.includes(i)),
    [allValues, values]
  );

  return (
    <div className="w-full flex flex-col gap-3 justify-center font-thin items-center ">
      <div className="w-[90%] flex gap-2">
        Search <div className="text-blue-600">Hashtags</div>
      </div>
      <TagInput
        aria-readonly
        inputProps={{
          placeholder: "Add tags",
          height: "50px",
          color: "white",
          fontSize: "30",
        }}
        values={values}
        style={{
          background: "#232323",
          borderRadius: "0px",
          width: "90%",
          border: "0px",
          minHeight: "60px",
          height: "auto",
        }}
        tagProps={{
          background: "#2563eb",
          color: "white",
          padding: "18px",
          display: "flex",
          alignItems: "center",
        }}
        onChange={setValues}
        autocompleteItems={autocompleteItems}
      />
    </div>
  );
};

export default TagSelector;

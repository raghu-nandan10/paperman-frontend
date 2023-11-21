import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
const Loading = ({ size }) => {
  return (
    <div className="w-[100%] flx flex-col gap-5 ">
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={true}
      >
        <CircularProgress color="inherit" size={100 || size} />
      </Backdrop>
    </div>
  );
};

export default Loading;

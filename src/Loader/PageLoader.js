import React from "react";
import { Circles } from "react-loader-spinner";
const PageLoader = () => {
  return (
    <div>
      <Circles
        height="50"
        width="50"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default PageLoader;

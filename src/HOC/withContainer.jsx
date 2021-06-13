import React, { Suspense } from "react";

const withContainer = (WrappedComponent) => {
  return function () {
    return (
      <>
        <div className={"container"}>
          <Suspense fallback={<div> </div>}>
            <WrappedComponent />
          </Suspense>
        </div>
      </>
    );
  };
};

export default withContainer;

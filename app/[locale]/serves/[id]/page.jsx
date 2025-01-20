import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h1>page serves item</h1>
      <h1>id:{params.id} </h1>
    </div>
  );
};

export default page;

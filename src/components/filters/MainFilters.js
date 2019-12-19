import React from "react";
import "./Filters.scss";

import Category from "./Category";
import Area from "./Area";
import Tags from "./Tags";

const MainFilters = props => {
  const data = props.data.map(el => el);

  //need to improve code, similar code for filters
  return (
    <>
      <div>
        <h3 className="d-flex justify-content-center">Category</h3>
      </div>
      <div className="square">
        <Category filter={props.filterByCategory} el={data} />
      </div>
      <div>
        <h3 className="d-flex justify-content-center">Area</h3>
      </div>
      <div className="square">
        <Area filter={props.filterByArea} el={data} />
      </div>
      <div>
        <h3 className="d-flex justify-content-center">Tags</h3>
      </div>
      <div className="square">
        <Tags filter={props.filterByTags} el={data} />
      </div>
    </>
  );
};

export default MainFilters;

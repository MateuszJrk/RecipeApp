import React from "react";
import { Badge } from "reactstrap";
import _ from "lodash";

const Area = props => {
  //making sure array has no duplicate
  let arr = [];
  let area = [];
  props.el.map(el => {
    arr.push(el.strArea);
    area = _.uniq(arr);
    return area;
  });
  let ex = area.map(el => {
    return (
      <Badge
        className="btn"
        onClick={() => props.filter(el)}
        key={el}
        color="secondary"
      >
        {el}
      </Badge>
    );
  });
  return <div>{ex}</div>;
};

export default Area;

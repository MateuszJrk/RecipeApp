import React from "react";
import { Badge } from "reactstrap";
import _ from "lodash";

const Category = props => {
  //making sure array has no duplicate
  let arr = [];
  let category = [];
  props.el.map(el => {
    arr.push(el.strCategory);
    category = _.uniq(arr);
    return category;
  });
  let ex = category.map(el => {
    return (
      <Badge className="btn" onClick={() => props.filter(el)} key={el}>
        {el}
      </Badge>
    );
  });

  return <div>{ex}</div>;
};

export default Category;

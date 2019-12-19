import React from "react";
import { Badge } from "reactstrap";
import _ from "lodash";

const Tags = props => {
  //making sure array has no duplicate
  let arr = [];
  let tags = [];
  props.el.map(el => {
    arr.push(el.strTags);
    tags = _.uniq(arr);
    return tags;
  });
  let ex = tags.map(el => {
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

export default Tags;

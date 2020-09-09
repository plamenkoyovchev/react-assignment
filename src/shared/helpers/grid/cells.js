import React from "react";
import { Cell } from "fixed-data-table-2";

class TextCell extends React.PureComponent {
  render() {
    const { data, rowIndex, columnKey, ...props } = this.props;
    return <Cell {...props}>{data.getObjectAt(rowIndex)[columnKey]}</Cell>;
  }
}

export { TextCell };

import React from "react";

import "./Items.css";

import FakeObjectDataListStore from "../shared/helpers/grid/FakeObjectDataListStore";
import { TextCell } from "../shared/helpers/grid/cells";
import { Table, Column, Cell } from "fixed-data-table-2";
import "fixed-data-table-2/dist/fixed-data-table.css";

var SortTypes = {
  ASC: "ASC",
  DESC: "DESC",
};

function reverseSortDirection(sortDir) {
  return sortDir === SortTypes.DESC ? SortTypes.ASC : SortTypes.DESC;
}

class SortHeaderCell extends React.Component {
  constructor(props) {
    super(props);

    this._onSortChange = this._onSortChange.bind(this);
  }

  render() {
    var { onSortChange, sortDir, children, ...props } = this.props;
    return (
      <Cell {...props}>
        <a onClick={this._onSortChange}>
          {children} {sortDir ? (sortDir === SortTypes.DESC ? "↓" : "↑") : ""}
        </a>
      </Cell>
    );
  }

  _onSortChange(e) {
    e.preventDefault();

    if (this.props.onSortChange) {
      this.props.onSortChange(
        this.props.columnKey,
        this.props.sortDir
          ? reverseSortDirection(this.props.sortDir)
          : SortTypes.DESC
      );
    }
  }
}

class DataListWrapper {
  constructor(indexMap, data) {
    this._indexMap = indexMap;
    this._data = data;
  }

  getSize() {
    return this._indexMap.length;
  }

  getObjectAt(index) {
    return this._data.getObjectAt(this._indexMap[index]);
  }
}

class Items extends React.Component {
  constructor(props) {
    super(props);

    this._dataList = new FakeObjectDataListStore(50);

    this._defaultSortIndexes = [];
    var size = this._dataList.getSize();
    for (var index = 0; index < size; index++) {
      this._defaultSortIndexes.push(index);
    }

    this.state = {
      sortedDataList: this._dataList,
      colSortDirs: {},
    };

    this._onSortChange = this._onSortChange.bind(this);
  }

  _onSortChange(columnKey, sortDir) {
    var sortIndexes = this._defaultSortIndexes.slice();
    sortIndexes.sort((indexA, indexB) => {
      var valueA = this._dataList.getObjectAt(indexA)[columnKey];
      var valueB = this._dataList.getObjectAt(indexB)[columnKey];
      var sortVal = 0;
      if (valueA > valueB) {
        sortVal = 1;
      }
      if (valueA < valueB) {
        sortVal = -1;
      }
      if (sortVal !== 0 && sortDir === SortTypes.DESC) {
        sortVal = sortVal * -1;
      }

      return sortVal;
    });

    this.setState({
      sortedDataList: new DataListWrapper(sortIndexes, this._dataList),
      colSortDirs: {
        [columnKey]: sortDir,
      },
    });
  }

  render() {
    var { sortedDataList, colSortDirs } = this.state;
    return (
      <Table
        rowHeight={50}
        rowsCount={sortedDataList.getSize()}
        headerHeight={50}
        width={1000}
        height={500}
        {...this.props}
        className="page Items"
      >
        <Column
          columnKey="id"
          header={
            <SortHeaderCell
              onSortChange={this._onSortChange}
              sortDir={colSortDirs.id}
            >
              id
            </SortHeaderCell>
          }
          cell={<TextCell data={sortedDataList} />}
          width={100}
        />
        <Column
          columnKey="vehicle"
          header={
            <SortHeaderCell
              onSortChange={this._onSortChange}
              sortDir={colSortDirs.vehicle}
            >
              Vehicle
            </SortHeaderCell>
          }
          cell={<TextCell data={sortedDataList} />}
          width={200}
        />
        <Column
          columnKey="manufacturer"
          header={
            <SortHeaderCell
              onSortChange={this._onSortChange}
              sortDir={colSortDirs.manufacturer}
            >
              Manufacturer
            </SortHeaderCell>
          }
          cell={<TextCell data={sortedDataList} />}
          width={200}
        />
        <Column
          columnKey="model"
          header={
            <SortHeaderCell
              onSortChange={this._onSortChange}
              sortDir={colSortDirs.model}
            >
              Model
            </SortHeaderCell>
          }
          cell={<TextCell data={sortedDataList} />}
          width={200}
        />
        <Column
          columnKey="color"
          header={
            <SortHeaderCell
              onSortChange={this._onSortChange}
              sortDir={colSortDirs.color}
            >
              Color
            </SortHeaderCell>
          }
          cell={<TextCell data={sortedDataList} />}
          width={200}
        />
      </Table>
    );
  }
}

export default Items;

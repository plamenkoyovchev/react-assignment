import React, { useEffect } from "react";

import GridComponent from "./UI/Grid/GridComponent";

import { connect } from "react-redux";
import { fetchItems } from "../store/items/itemsActions.ts";
import "./Items.css";

import Loader from "./UI/Loader";

const Items = ({ itemsState, getItems }) => {
  const { data } = itemsState;
  const columns = React.useMemo(
    () => [
      {
        Header: "Model",
        columns: [
          {
            Header: "Vehicle",
            accessor: "vehicle",
          },
          {
            Header: "Model",
            accessor: "model",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Manufacturer",
            accessor: "manufacturer",
          },
          {
            Header: "Color",
            accessor: "color",
          },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    getItems();
  }, [getItems]);

  if (!data) {
    return <Loader />;
  }

  return (
    <div className="page">
      <h3>Items In Stock</h3>
      <GridComponent columns={columns} data={data} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    itemsState: state.items,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getItems: () => dispatch(fetchItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);

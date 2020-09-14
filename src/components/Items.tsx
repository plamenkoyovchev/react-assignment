import React, { useEffect } from "react";
import "./Items.css";

import GridComponent from "./UI/Grid/GridComponent";

import { connect, ConnectedProps } from "react-redux";
import { fetchItems } from "../store/items/itemsActions";

import Loader from "./UI/Loader";
import { RootState } from "../store/rootReducer";

const mapStateToProps = (state: RootState, ownProps: any) => {
  return {
    itemsState: state.items,
  };
};

const mapDispatchToProps = {
  getItems: () => fetchItems(),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Items: React.FC<PropsFromRedux> = ({ itemsState, getItems }) => {
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

export default connector(Items);

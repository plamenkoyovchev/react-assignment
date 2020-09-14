import React, { useEffect } from "react";
import "./Items.css";

import GridComponent from "./UI/Grid/GridComponent";

import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../store/items/itemsActions";

import Loader from "./UI/Loader";
import { RootStore } from "../store/store";

const Items = () => {
  const { data } = useSelector((state: RootStore) => state.items);
  const dispatch = useDispatch();

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
    dispatch(fetchItems());
  }, [dispatch]);

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

export default Items;

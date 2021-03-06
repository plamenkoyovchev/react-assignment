import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import { HomePage } from "./HomePage";
import LoginForm from "../components/LoginForm";
import Navigation from "../components/Navigation/Navigation";

configure({
  adapter: new Adapter(),
});

const mockStore = configureMockStore([thunk]);

describe("<HomePage />", () => {
  it("should render <LoginForm /> component if user is not logged in", () => {
    const store = mockStore({
      user: {
        currentUser: null,
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    expect(wrapper.find(LoginForm)).toHaveLength(1);
  });

  it("should render <Navigation /> if the user is logged in", () => {
    const store = mockStore({
      user: {
        currentUser: {
          username: "plamen",
        },
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    expect(wrapper.find(Navigation)).toHaveLength(1);
    expect(wrapper.find(LoginForm)).toHaveLength(0);
  });
});

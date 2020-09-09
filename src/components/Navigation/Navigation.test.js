import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import NavItem from "./NavItem";

configure({
  adapter: new Adapter(),
});

const mockStore = configureMockStore([thunk]);

describe("<Navigation />", () => {
  it("should render four <NavItem /> components if user is in role Admin", () => {
    const role = "Admin";
    const store = mockStore({
      user: {
        currentUser: {
          role: role,
        },
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </Provider>
    );

    expect(wrapper.find(NavItem)).toHaveLength(4);
  });

  it("should render two <NavItem /> components if user is in role User", () => {
    const role = "User";
    const store = mockStore({
      user: {
        currentUser: {
          role: role,
        },
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </Provider>
    );

    expect(wrapper.find(NavItem)).toHaveLength(2);
  });

  it("should render zero <NavItem /> components if user has no role assigned", () => {
    const store = mockStore({
      user: {
        currentUser: {
          role: null,
        },
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </Provider>
    );

    expect(wrapper.find(NavItem)).toHaveLength(0);
  });
});

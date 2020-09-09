import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import LoginForm from "./LoginForm";
import { Provider } from "react-redux";

configure({
  adapter: new Adapter(),
});
const mockStore = configureMockStore([thunk]);

describe("<Login />", () => {
  const fakeEvent = { preventDefault: () => {} };
  let wrapper;
  beforeEach(() => {
    const store = mockStore({});
    wrapper = mount(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  });

  it("should have two validation error elements on login click with empty username and password", () => {
    expect(wrapper.find(".login-form")).toHaveLength(1);

    wrapper.find(".login-form").simulate("submit", fakeEvent);
    expect(wrapper.find(".validation-error")).toHaveLength(2);
  });

  it("should have one validation error element if only password is empty", () => {
    wrapper.find('input[name="username"]').simulate("change", {
      target: {
        value: "username",
      },
    });

    wrapper.find(".login-form").simulate("submit", fakeEvent);
    expect(wrapper.find(".validation-error")).toHaveLength(1);
  });

  it("should have one validation error element if only username is empty", () => {
    wrapper.find('input[name="password"]').simulate("change", {
      target: {
        value: "password",
      },
    });

    wrapper.find(".login-form").simulate("submit", fakeEvent);
    expect(wrapper.find(".validation-error")).toHaveLength(1);
  });

  it("should have 0 validation error elements if username and password are filled", () => {
    wrapper.find('input[name="username"]').simulate("change", {
      target: {
        value: "username",
      },
    });

    wrapper.find('input[name="password"]').simulate("change", {
      target: {
        value: "password",
      },
    });

    wrapper.find(".login-form").simulate("submit", fakeEvent);
    expect(wrapper.find(".validation-error")).toHaveLength(0);
  });

  it("should have two validation error elements if username and password have whitespaces in their values", () => {
    wrapper.find('input[name="username"]').simulate("change", {
      target: {
        value: " user name ",
      },
    });

    wrapper.find('input[name="password"]').simulate("change", {
      target: {
        value: "password ",
      },
    });

    wrapper.find(".login-form").simulate("submit", fakeEvent);
    expect(wrapper.find(".validation-error")).toHaveLength(2);
  });
});

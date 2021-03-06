import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {configure, mount} from "enzyme";

import {SignIn} from "./sign-in";
import {BrowserRouter} from "react-router-dom";

configure({adapter: new Adapter()});

describe(`testing SignIn work`, () => {
  it(`submit is call callback`, () => {
    const onAuthorize = jest.fn();
    const signIn = mount(<BrowserRouter>
      <SignIn
        onAuthorize={onAuthorize}
      />
    </BrowserRouter>);

    const form = signIn.find(`form`).first();
    form.simulate(`submit`, {
      preventDefault: () => {
      },
      target: [
        {
          email: `pavel0408@gmail.com`,
          password: `123`
        }
      ],
    });

    expect(onAuthorize).toHaveBeenCalledTimes(1);
  });
});

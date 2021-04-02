import React from "react"
import renderer from "react-test-renderer"
import AzureAuthButton from "../azure-auth-button";
import 'jest-styled-components';

describe("AzureAuthButton", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<AzureAuthButton />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
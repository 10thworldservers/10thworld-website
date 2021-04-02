import React from "react"
import renderer from "react-test-renderer"
import Layout from "../Layout"
import styled from 'styled-components';
import 'jest-styled-components';

const TestDiv = styled.div`
  width: 600px;
  height: 600px;
  background-color: #000;
`
describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Layout>
        <TestDiv>Test</TestDiv>
      </Layout>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
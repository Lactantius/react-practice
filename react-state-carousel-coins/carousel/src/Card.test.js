import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import image1 from "./image1.jpg";

it("renders", () => {
  render(<Card src={image1} caption="A photo"/>);
});

it("matches snapshot", () => {
  const { asFragment } = render(<Card src={image1} caption="A photo"/>);
  expect(asFragment()).toMatchSnapshot();
});
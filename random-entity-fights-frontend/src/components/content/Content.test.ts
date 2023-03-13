import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Content from "./Content";
import Control from "./control/Control";

test("renders component", async () => {
  const { getByText } = render(<Content/>);
  expect(getByText("Random Fight")).toBeInTheDocument();
});

test("calculates result", async () => {
  const { getByLabelText, getByText, debug } = render(<Control/>);
  const input = getByLabelText("fight-button");

  fireEvent.click(input);
  const text = await waitForElement(() => getByText("Win!"));

  expect(text).toBeInTheDocument();
});
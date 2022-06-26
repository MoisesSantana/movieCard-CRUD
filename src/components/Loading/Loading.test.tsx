import { screen, render } from "@testing-library/react";
import React from "react";

import Loading from "./Loading";

describe("Tests facing the Loading component", () => {
  it('should render a button with text "Loading..."', () => {
    render(<Loading />);
    const loadingBtn = screen.getByRole("button", { name: "Loading..." });
    expect(loadingBtn).toBeInTheDocument();
  });
});

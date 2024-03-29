import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React, { ReactNode } from "react";
import { Router } from "react-router-dom";

function renderWithRouter(component: ReactNode, route = "/") {
  const history = createMemoryHistory({ initialEntries: [route] });
  const renderized = render(
    <Router location={history.location} navigator={history}>
      {component}
    </Router>
  );

  return { ...renderized, history };
}

export default renderWithRouter;

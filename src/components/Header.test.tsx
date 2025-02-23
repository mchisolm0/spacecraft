import { render, screen } from "@testing-library/react-native";
import React from "react";

import { Header } from "./Header";

describe("Header", () => {
  it("renders correctly", () => {
    render(<Header title="SpaceCraft" />);

    screen.getByText("SpaceCraft");
  });
});

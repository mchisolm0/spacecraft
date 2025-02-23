import { render, screen } from "@testing-library/react-native";

import { StarshipItem } from "./StarshipItem";

describe("StarshipItem", () => {
  const mockProps = {
    name: "Millennium Falcon",
    model: "YT-1300",
    cost_in_credits: "100000",
    crew: "4",
    hyperdrive_rating: "0.5",
  };

  it("renders starship details", () => {
    render(<StarshipItem {...mockProps} />);

    // Check for main content
    screen.getByText(mockProps.name);
    screen.getByText(`Model: ${mockProps.model}`);
    screen.getByText(`Cost in Credits: ${mockProps.cost_in_credits}`);
    screen.getByText(`Crew: ${mockProps.crew}`);
    screen.getByText(`Hyperdrive Rating: ${mockProps.hyperdrive_rating}`);
  });
});

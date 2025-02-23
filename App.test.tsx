import { render, screen, act, waitFor } from "@testing-library/react-native";
import App from "./App";

// Mock the netinfo module
jest.mock("@react-native-community/netinfo", () => ({
  addEventListener: jest.fn(),
  fetch: jest.fn().mockResolvedValue({
    isConnected: true,
    isInternetReachable: true,
    type: "wifi",
  }),
}));

// Suppress react-query error logging
beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe("App", () => {
  it("renders the starship screen", async () => {
    const { unmount } = render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Starship Screen")).toBeTruthy();
    });
    // Clean up the component
    unmount();
  });
});

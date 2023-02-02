import { render, screen } from "@testing-library/react";
import Greet from "./Greet";
describe("Greet", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test("Greet renders with a name", () => {
    render(<Greet name="nidhal" />);
    const textElement = screen.getByText(/Hello nidhal/i);
    expect(textElement).toBeInTheDocument();
  });
});

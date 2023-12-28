import { screen, render } from "@testing-library/react";
import NavBar from "./NavBar";

it("should render the navBar with a heading", () => {
  render(<NavBar />);
  const heading = screen.getByRole("heading", { name: /photographer/i });
});

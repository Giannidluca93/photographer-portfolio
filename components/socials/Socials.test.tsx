import { screen, render } from "@testing-library/react";
import Socials from "./Socials";

it("should render 5 links", () => {
  render(<Socials />);
  const links = screen.getAllByRole("link");

  expect(links).toHaveLength(5);
});

it("should render 4 svgs", () => {
  render(<Socials />);
  const svgs = screen.getAllByRole("img");
  expect(svgs).toHaveLength(4);
});

it("should render an about me link", () => {
  render(<Socials />);
  const aboutMeLink = screen.getByRole("link", { name: /about me/i });
});

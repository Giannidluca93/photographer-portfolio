import { screen, render } from "@testing-library/react";
import GalleryImage from ".";

it("should render image and figcaption", () => {
  render(
    <GalleryImage
      src="https://picsum.photos/120/120"
      alt="placeholder image"
      width={120}
      height={120}
      text="content"
    />
  );
  const image = screen.getByRole("img", { name: "placeholder image" });
  const figCaption = screen.getByText("content");

  expect(figCaption).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});

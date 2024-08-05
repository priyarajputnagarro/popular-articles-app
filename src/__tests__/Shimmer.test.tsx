import { render, screen } from "@testing-library/react";
import Shimmer from "../components/Shimmer";

describe("Shimmer Component", () => {
  test("renders the correct number of shimmer placeholders", () => {
    render(<Shimmer />);

    const container = screen.getByTestId("shimmer_container");
    expect(container).toBeInTheDocument();

    const items = screen.getAllByTestId("shimmer");
    expect(items).toHaveLength(4);

    items.forEach((item) => {
      expect(item).toHaveClass("flex mb-10");

      const innerDivs = item.querySelectorAll("div");
      expect(innerDivs).toHaveLength(4);
    });
  });
});

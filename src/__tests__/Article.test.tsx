import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Article from "../components/Article";
import { IArticle } from "../utils/interfaces";
import { articles_mock } from "../__mocks__/mock";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Article Component", () => {
  const mockArticle: IArticle = articles_mock;

  it("should render article title and initial state correctly", () => {
    render(<Article article={mockArticle} />);

    expect(screen.getByText("Test Article")).toBeInTheDocument();
    expect(screen.queryByText("Test Author")).toBeInTheDocument();
    expect(screen.queryByText("Published on: 2024-07-31")).toBeInTheDocument();
    expect(screen.queryByText("READ MORE")).toBeInTheDocument();
  });

  it("should navigate when READ MORE button is clicked", () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockImplementation(() => mockNavigate);

    render(<Article article={mockArticle} />);

    fireEvent.click(screen.getByText("READ MORE"));
    expect(mockNavigate).toHaveBeenCalledWith("/article/100000009586898");
  });

  it("should render a placeholder when no media is available", () => {
    const articleWithoutMedia: IArticle = { ...mockArticle, media: [] };
    render(<Article article={articleWithoutMedia} />);

    const placeholderDiv = screen.getByTestId("placeholder_img");
    expect(placeholderDiv).toHaveClass("w-52 h-32 bg-gray-300");
  });
});

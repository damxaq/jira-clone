import { render, screen } from "@testing-library/react";
import Board from "./Board";

test("renders header text", () => {
  render(<Board />);
  const headerElement = screen.getByText(/Board/i);
  expect(headerElement).toBeInTheDocument();
});

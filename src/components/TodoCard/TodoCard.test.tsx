import { render, screen } from "@testing-library/react";
import TodoCard from "./TodoCard";

test("renders todo card", () => {
  render(<TodoCard />);
});

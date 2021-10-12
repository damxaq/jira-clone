import { render, screen } from "@testing-library/react";
import TicketList from "./TicketList";

test("renders header text", () => {
  render(<TicketList />);
  const headerElement = screen.getByText(/Ticket List/i);
  expect(headerElement).toBeInTheDocument();
});

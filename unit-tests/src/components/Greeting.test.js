import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hello World as a text", () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to be back" if the button was not clicked', () => {
    render(<Greeting />);

    const goodToBeBackElement = screen.getByText("good to be back", {
      exact: false,
    });
    expect(goodToBeBackElement).toBeInTheDocument();
  });

  test('renders "Changed" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const changedElement = screen.getByText("Changed!");
    expect(changedElement).toBeInTheDocument();
  });

  test('does not render "good to be back" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const goodToBeBackElement = screen.queryByText("good to be back", {
      exact: false,
    });
    expect(goodToBeBackElement).toBeNull();
  });
});

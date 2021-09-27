import { render, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

describe("Renders Counter Component with Hook", () => {
  it("#1 Initially start counter with 0", () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId("counter").textContent).toBe("0");
  });
  it("#2 Increment Counter", () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId("increment").textContent).toBe("+");
  });
  it("#3 Decrement Counter", () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId("decrement").textContent).toBe("-");
  });
  it("#4 Click on increment button adds 1 to counter", () => {
    const { getByTestId } = render(<Counter />);
    const counterEl = getByTestId("counter");
    const btnEl = getByTestId("increment");

    expect(counterEl.textContent).toBe("0");
    fireEvent.click(btnEl);
    expect(counterEl.textContent).toBe("1");
    fireEvent.click(btnEl);
    expect(counterEl.textContent).toBe("2");
  });
  it("#5 Click on decrement button substract 1 to counter", () => {
    const { getByTestId } = render(<Counter />);
    const counterEl = getByTestId("counter");
    const btnEl = getByTestId("decrement");

    expect(counterEl.textContent).toBe("0");
    fireEvent.click(btnEl);
    expect(counterEl.textContent).toBe("0");
    fireEvent.click(btnEl);
    expect(counterEl.textContent).toBe("0");
  });
});

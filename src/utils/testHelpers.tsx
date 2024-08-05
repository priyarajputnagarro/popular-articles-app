// eslint-disable-next-line import/export
import { Provider as StoreProvider } from "react-redux";
import { render } from "@testing-library/react";

export const renderer = (component: any, mockStore: any) => {
  return render(<StoreProvider store={mockStore}>{component}</StoreProvider>);
};

export * from "@testing-library/react";

import { act } from "react-dom/test-utils";

const runAll = () => {
  act(() => {
    jest.runAllImmediates();
  });
};

export default {
  runAll
};

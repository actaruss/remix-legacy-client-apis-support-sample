import { fn } from "@storybook/test";
import { useLocation } from "react-router-dom";
import * as actual from "../routes-helpers/useFilePath";

export * from "../routes-helpers/useFilePath";

export const getUserFromSession = fn(actual.useFilePath)
  .mockImplementation(() => {
    return { pathName: `/${location.pathname.split("/").at(1) || ""}` };
  })
  .mockName("useFilePath");

export function useFilePath() {
  const location = useLocation();
  const isStorybook = process.env;
  console.log({ isStorybook });
  return { pathName: `/${location.pathname.split("/").at(1) || ""}` };
}

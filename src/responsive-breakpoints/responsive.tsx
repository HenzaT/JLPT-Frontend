import { useMediaQuery } from "react-responsive";

export function useScreenSize() {
  const isMobileScreen: boolean     = useMediaQuery({ query: "(max-width: 425px)" });
  const isBiggerThanMobile: boolean = useMediaQuery({ query: "(min-width: 426px)" });

  return { isMobileScreen, isBiggerThanMobile };
}

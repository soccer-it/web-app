import SwipeableViews from "react-swipeable-views";

export default function Swipeable({ children, ...props }) {
  if (!process.browser) {
    return <div {...props}>{children}</div>;
  }
  return <SwipeableViews {...props}>{children}</SwipeableViews>;
}

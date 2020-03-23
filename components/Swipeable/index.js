import { Fragment } from 'react';

import SwipeableViews from 'react-swipeable-views';

export default function Swipeable({ children, ...props }) {
  if (!process.browser) {
    return <Fragment>{children}</Fragment>;
  }
  return <SwipeableViews {...props}>{children}</SwipeableViews>;
}

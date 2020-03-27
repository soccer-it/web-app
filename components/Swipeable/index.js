import SwipeableViews from 'react-swipeable-views';

export default function Swipeable({ children, ...props }) {
  return (
    <SwipeableViews {...props} enableMouseEvents={true}>
      {children}
    </SwipeableViews>
  );
}

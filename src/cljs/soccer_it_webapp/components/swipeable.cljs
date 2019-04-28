(ns components.swipeable
    (:require [rum.core :as rum]
              [sablono.core :as sablono]
              [cljsjs.react-swipeable-views]))

(rum/defc swipeable [props children]
  (js/React.createElement js/SwipeableViews #js {} (sablono/html children)))
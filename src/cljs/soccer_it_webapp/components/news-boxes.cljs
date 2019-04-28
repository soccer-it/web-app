(ns components.news-boxes
  (:require [rum.core :as rum]
            [sablono.core :as sablono]
            [cljsjs.react-swipeable-views]
            [components.news-box :refer [news-box]]))

(rum/defc Swipeable [props children]
  (js/React.createElement js/SwipeableViews #js {} (sablono/html children)))

(def noticeList [{:title "Corinthians" :description "Corinthians toptopshowba"}
                {:title "Palmeiras" :description "Palmeiras showbaless"}
                {:title "Santos" :description "Santos toptop ou topshowba"}
                {:title "São Paulo" :description "Sao paulo, n sei"}])

(rum/defc news-boxes []
  [:div {:class "news-boxes"}
    (Swipeable {}
      (for [notice noticeList]
        (news-box notice)))])

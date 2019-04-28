(ns components.news-boxes
  (:require [rum.core :as rum]
            [components.swipeable :refer [swipeable]]
            [components.news-box :refer [news-box]]))

(def noticeList [{:title "Corinthians" :description "Corinthians toptopshowba"}
                {:title "Palmeiras" :description "Palmeiras showbaless"}
                {:title "Santos" :description "Santos toptop ou topshowba"}
                {:title "São Paulo" :description "Sao paulo, n sei"}])

(rum/defc news-boxes []
  [:div {:class "news-boxes"}
    (swipeable {}
      (for [notice noticeList]
        ^{:key notice} (news-box notice)))])

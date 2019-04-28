(ns components.panel-notice
  (:require [rum.core :as rum]
            [components.content-panel :refer [content-panel]]))

(rum/defc panel-notice []
  [:div {:class "panel-notice"}
    (content-panel {:class "-is-notice"}
      [:div {:class "wrapper-notice-championship"}
        [:p {:class "championship-name"} "Champions League"]
        [:p {:class "championship-info-notice"} "Real Madrid notices here, champions league test"]])])
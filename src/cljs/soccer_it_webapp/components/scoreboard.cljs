(ns components.scoreboard
  (:require [rum.core :as rum]
            [components.scoreboard-team :refer [scoreboard-team]]
            [components.content-panel :refer [content-panel]]))

(rum/defc scoreboard [{:keys [teams]}]
  (content-panel {:class "-is-match"}
    [:div {:class "scoreboard"}
      [:div {:class "board"}
        (scoreboard-team [:principal teams])
        (scoreboard-team [:visitor teams])]
    
    [:div {:class "info-local"}
      [:p {:class "stadium-name"} "Allianz Parque"]
      [:p {:class "schedule"} "20 de novembro às 16h"]]]))
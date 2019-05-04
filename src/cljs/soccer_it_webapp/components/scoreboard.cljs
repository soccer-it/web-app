(ns components.scoreboard
  (:require [rum.core :as rum]
            [components.scoreboard-team :refer [scoreboard-team]]
            [components.content-panel :refer [content-panel]]))

(rum/defc scoreboard [{:keys [teams principalScoreboard visitorScoreboard]}]
  (content-panel {:class "-is-match"}
    [:div {:class "scoreboard"}
      [:div {:class "board"}
        (scoreboard-team (:principal teams))
        [:div {:class "wrapper-score"}
          [:p {:class "principal-score scoreboard-value"} principalScoreboard]
          [:p {:class "separator-score"} "x"]
          [:p {:class "visitor-socre scoreboard-value"} visitorScoreboard]]

        (scoreboard-team (:visitor teams))]
    
    [:div {:class "info-local"}
      [:p {:class "stadium-name"} "Allianz Parque"]
      [:p {:class "schedule"} "20 de novembro às 16h"]]]))
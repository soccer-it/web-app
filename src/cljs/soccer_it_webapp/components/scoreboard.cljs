(ns components.scoreboard
  (:require [rum.core :as rum]
            [components.scoreboard-team :refer [scoreboard-team]]
            [components.content-panel :refer [content-panel]]))

(rum/defc scoreboard [scores]
  (content-panel {:class "-is-match"}
    [:div {:class "scoreboard"}
      [:div {:class "board"}
        (for [{:keys [src team-name score]} scores]
          ^{:key score} (scoreboard-team {:src src :team-name team-name :score score}))]
    
    [:div {:class "info-local"}
      [:p {:class "stadium-name"} "Allianz Parque"]
      [:p {:class "schedule"} "20 de novembro às 16h"]]]))
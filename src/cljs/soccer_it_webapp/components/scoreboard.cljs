(ns components.scoreboard
  (:require [rum.core :as rum]
            [components.scoreboard-team :refer [scoreboard-team]]
            [components.content-panel :refer [content-panel]]))

(rum/defc scoreboard []
  (content-panel {:class "-is-match"}
    [:div {:class "scoreboard"}
      [:div {:class "board"}
        (scoreboard-team {:src "https://seeklogo.com/images/S/Sociedade_Esportiva_Palmeiras_de_Sao_Paulo-SP-logo-BE3E91E989-seeklogo.com.png" :team-name "Palmeiras"})
        
        [:div {:class "wrapper-values"}
          [:p {:class "scoreboard-value"} "0"]
          [:p {:class "scoreboard-separator"} "x"]
          [:p {:class "scoreboard-value"} "1"]]
        
        (scoreboard-team {:src "https://seeklogo.com/images/E/Esporte_Clube_Corinthians_de_Laguna-SC-logo-E82F2ADE11-seeklogo.com.png" :team-name "Corinthians"})]
    
    [:div {:class "info-local"}
      [:p {:class "stadium-name"} "Allianz Parque"]
      [:p {:class "schedule"} "20 de novembro às 16h"]]]))
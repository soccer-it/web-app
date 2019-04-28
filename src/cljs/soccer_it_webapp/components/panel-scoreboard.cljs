(ns components.panel-scoreboard 
  (:require [rum.core :as rum]
            [components.swipeable :refer [swipeable]]
            [components.scoreboard :refer [scoreboard]]))

(def scoreboardList [
  [
    {:src "https://seeklogo.com/images/S/Sociedade_Esportiva_Palmeiras_de_Sao_Paulo-SP-logo-BE3E91E989-seeklogo.com.png" 
    :team-name "Palmeiras"
    :score 0}
    {:src "https://seeklogo.com/images/E/Esporte_Clube_Corinthians_de_Laguna-SC-logo-E82F2ADE11-seeklogo.com.png" 
    :team-name "Corinthians"
    :score 1}
  ]
  [
    {:src "https://seeklogo.com/images/S/Sociedade_Esportiva_Palmeiras_de_Sao_Paulo-SP-logo-BE3E91E989-seeklogo.com.png" 
    :team-name "Palmeiras"
    :score 0}
    {:src "https://seeklogo.com/images/E/Esporte_Clube_Corinthians_de_Laguna-SC-logo-E82F2ADE11-seeklogo.com.png" 
    :team-name "Corinthians"
    :score 1}
  ]])

(rum/defc panel-scoreboard []
  (swipeable {}
    [(for [scores scoreboardList] ^{:key scores} (scoreboard scores))]))

(ns components.scoreboard-team
  (:require [rum.core :as rum]))

(rum/defc scoreboard-team [{:keys [src team-name]}]
  [:div {:class "wrapper-team"}
    [:img {:class "team-logo" :src src}]
    [:p {:class "team-name"} team-name]])
(ns components.scoreboard-team
  (:require [rum.core :as rum]))

(rum/defc scoreboard-team [{:keys [src name]}]
  [:div {:class "wrapper-team"}
    [:div {:class "wrapper-avatar"}
      [:img {:class "team-logo" :src src}]
      [:p {:class "team-name"} name]]])
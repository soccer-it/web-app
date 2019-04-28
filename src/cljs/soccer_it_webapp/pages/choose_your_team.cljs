(ns pages.choose-your-team
  (:require [rum.core :as rum]
            [components.header :refer [header]]
            [components.scoreboard :refer [scoreboard]]
            [components.panel-notice :refer [panel-notice]]
            [components.news-boxes :refer [news-boxes]]
            [components.teams :refer [teams]]))

(rum/defc choose-your-team []
  [:div
   (header)
   [:div.page
    (teams)
    
    [:div.container
      (panel-notice)
      (panel-notice {:class "-is-quiz-content"})
      (scoreboard)]

    (news-boxes)]])
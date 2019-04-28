(ns pages.choose-your-team
  (:require [rum.core :as rum]
            [components.header :refer [header]]
            [components.news-boxes :refer [news-boxes]]
            [components.teams :refer [teams]]))

(rum/defc choose-your-team []
  [:div
   (header)
   [:div.page
    (teams)
    (news-boxes)]])
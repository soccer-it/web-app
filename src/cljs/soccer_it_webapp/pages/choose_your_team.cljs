(ns pages.choose-your-team
  (:require [rum.core :as rum]
            [components.header :refer [header]]
            [components.teams :refer [teams]]))

(rum/defc choose-your-team []
  [:div
    (header)
    [:div.choose-your-team
    (teams)]
  ])
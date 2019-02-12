(ns pages.choose-your-team
  (:require [rum.core :as rum]
            [components.teams :refer [teams]]))

(rum/defc choose-your-team []
  [:div.choose-your-team
   (teams)])
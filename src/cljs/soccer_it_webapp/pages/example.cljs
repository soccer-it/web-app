(ns pages.example
  (:require [rum.core :as rum]))

(rum/defc example []
  [:div
   [:div.page [:div.example [:h2 "Hello!"]]]])
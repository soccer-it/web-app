(ns pages.home
  (:require [rum.core :as rum]))

(rum/defc home []
  [:div.page
   [:h1 "Home Page!"]])
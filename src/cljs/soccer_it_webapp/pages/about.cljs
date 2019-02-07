(ns pages.about
  (:require [rum.core :as rum]))

(rum/defc about []
  [:div.page
   [:h1 "About Page!"]])
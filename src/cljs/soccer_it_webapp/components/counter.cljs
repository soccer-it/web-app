(ns components.counter
  (:require [rum.core :as rum]))

(rum/defc counter []
  [:.counter 
   [:h1 "A simple counter"]])
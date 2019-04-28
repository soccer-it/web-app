(ns components.box
  (:require [rum.core :as rum]))

(rum/defc box [{:keys [class]} children]
  [:div {:class (str "box " class)}
    children])
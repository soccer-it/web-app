(ns components.content-panel
  (:require [rum.core :as rum]))

(rum/defc content-panel [{:keys [class]} children]
  [:div {:class (str "content-panel " class)}
    children])
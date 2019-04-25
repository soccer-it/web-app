(ns soccer-it-webapp.core
  (:require [rum.core :as rum]
            [pages.choose-your-team :refer [choose-your-team]]))

(enable-console-print!)

(rum/defc root-component [active-page]
  [:div.app-layout
   (choose-your-team)])

(rum/mount (root-component)
           (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

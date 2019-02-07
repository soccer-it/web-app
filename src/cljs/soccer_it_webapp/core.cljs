(ns soccer-it-webapp.core
  (:require [rum.core :as rum]
            [components.counter :refer [counter]]
            [pages.home :refer [home]]))

(enable-console-print!)

(rum/defc root-component [active-page]
  [:div
   active-page])

(rum/mount (root-component (home))
           (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

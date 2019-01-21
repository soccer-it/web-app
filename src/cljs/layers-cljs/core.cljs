(ns layers-cljs.core
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [layers-cljs.events :as events]
   [layers-cljs.routes :as routes]
   [layers-cljs.views :as views]
   [layers-cljs.config :as config]))

(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-page]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))

(ns layers-cljs.routes
  (:import goog.History)
  (:require
   [secretary.core :as secretary]
   [goog.events :as gevents]
   [goog.history.EventType :as EventType]
   [re-frame.core :as re-frame]
   [layers-cljs.utils :refer [|> redirect!]]
   [layers-cljs.events :as events]))

(defn hook-browser-navigation! []
  (doto (History.)
    (gevents/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn app-routes []
  (secretary/set-config! :prefix "#")

  (secretary/defroute "/" {:as params}
    (|> [::events/set-active-page :home-page]))

  (secretary/defroute "*" []
    (redirect! "/"))

  (hook-browser-navigation!))

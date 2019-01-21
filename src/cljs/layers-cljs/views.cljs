(ns layers-cljs.views
  (:require
   [re-frame.core :as re-frame]
   [layers-cljs.layouts.app-layout :refer [app-layout]]
   [layers-cljs.subs :as subs]
   [layers-cljs.utils :refer [<|]]
   [layers-cljs.pages.home :refer [home-page]]))

(defn- pages [page-name]
  (case page-name
    :home-page [home-page]
    [:div]))

(defn show-page [page-name]
  [app-layout [pages page-name]])

(defn main-page []
  (let [active-page (<| [::subs/active-page])]
    [show-page active-page]))

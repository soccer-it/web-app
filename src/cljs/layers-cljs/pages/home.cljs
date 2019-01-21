(ns layers-cljs.pages.home
  (:require
   [re-frame.core :as re-frame]
   [layers-cljs.components.header :refer [header]]
   [layers-cljs.components.packages :refer [packages]]))

(defn home-page []
  [:div.home
   [header]
   [packages]])

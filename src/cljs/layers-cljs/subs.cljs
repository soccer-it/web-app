(ns layers-cljs.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::active-page
 (fn [db _]
   (:active-page db)))

(re-frame/reg-sub
 ::active-topic
 (fn [db _]
   (:active-topic db)))

(re-frame/reg-sub
 ::active-package
 (fn [db _]
   (:active-package db)))

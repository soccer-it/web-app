(ns layers-cljs.events
  (:require
   [re-frame.core :as re-frame]
   [layers-cljs.db :as db]
   [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
   db/default-db))

(re-frame/reg-event-db
 ::set-active-page
 (fn-traced [db [_ active-page]]
   (assoc db :active-page active-page)))

(re-frame/reg-event-db
 ::set-active-package
 (fn-traced [db [_ active-package]]
            (assoc db :active-package active-package)))



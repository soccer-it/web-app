(ns layers-cljs.enhancers.packages
  (:require
   [layers-cljs.events :as events]
   [re-frame.core :as rf]
   [layers-cljs.utils :refer [<| |> with-handlers]]
   [layers-cljs.subs :as subs]))

(defn data []
  {:active-topic (<| [::subs/active-topic])
   :active-package (<| [::subs/active-package])})

(def handlers
  (with-handlers
    {:on-pack-click #(|> [::events/set-active-package %])}))

(defn props-mapper [props]
  (let [{:keys [name description packages]} (:active-topic props)
        on-pack-click (:on-pack-click props)]

    (merge props
           {:name name
            :description description
            :packages packages})))

(defn enhancer [component]
  (->>
   (data)
   handlers
   props-mapper
   component))

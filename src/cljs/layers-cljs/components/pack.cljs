(ns layers-cljs.components.pack
  (:require [layers-cljs.components.icon :refer [icon]]))

(defn pack [{:keys [name description]} index {:keys [on-pack-click active-package]}]
  (let [active? (= index active-package)]

    [:li.pack {:key index
                :class (when active? "active")
                :on-click #(on-pack-click index)}
     (if active?
       [icon "emoticon-silly"]
       [icon "emoticon-dead"])

     [:h2.title name]
     [:p.description description]]))

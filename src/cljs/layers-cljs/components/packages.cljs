(ns layers-cljs.components.packages
  (:require
   [layers-cljs.utils :refer [get-component-list]]
   [layers-cljs.enhancers.packages :refer [enhancer]]
   [layers-cljs.components.pack :refer [pack]]))

(defn ui [{:keys [name description packages on-pack-click active-package]}]
  [:section.packages
   [:h1.title name]
   [:p.description description]
   [:ul
    (get-component-list packages pack {:active-package active-package
                                        :on-pack-click on-pack-click})]])
(defn packages []
  (enhancer ui))


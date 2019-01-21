(ns layers-cljs.components.icon)

(defn icon [name]
  [:svg {:class ["icon" name]} [:use {:xlinkHref (str "#" name)}]])

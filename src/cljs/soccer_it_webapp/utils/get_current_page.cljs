(ns utils.get-current-page
  (:require [soccer-it-webapp.routes :refer [pages]]))

(defn get-current-page [page]
  (let [current-page (get page :current-page :index)]
    ((get pages current-page))))
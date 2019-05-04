(ns utils.get-route
  (:require
   [bidi.bidi :as bidi]
   [soccer-it-webapp.routes :refer [routes]]))

(defn get-route [path] (bidi/path-for routes path))
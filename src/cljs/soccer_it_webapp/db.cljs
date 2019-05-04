(ns soccer-it-webapp.state
  (:require [utils.get-current-page :refer [get-current-page]]))

(def active-page (atom (get-current-page :index)))
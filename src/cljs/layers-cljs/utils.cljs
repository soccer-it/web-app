(ns layers-cljs.utils
  (:require [re-frame.core :refer [subscribe dispatch]]
            [clojure.string :refer [lower-case replace]]))

(defn get-component-list
  "Get each item in the `coll` passes to a `component`,
    and returns the component list."
  [coll component & [option]]
  (map-indexed #(component %2 % option) coll))

(defn <|
  "returns a atom subscribed in a `subs` registered with re-frame."
  [subs]
  (deref (subscribe subs)))

(def |> dispatch)

(defn get-url-format
  "Returns a url format."
  [url]
  (-> url
      lower-case
      (replace " " "-")))

(defn get-name-from-url
  "Returns a value unformatted of an url"
  [url]
  (-> url
      (replace #"\b." #(.toUpperCase %1))
      (replace "-" " ")))

(defn redirect!
  "Redirect page to a `loc`"
  [loc]
  (set! (.-location js/window) (str "#" loc)))

(defn redirect-back!
  "Redirect to back history"
  []
  (js/window.history.back))

(defn trunc
  [s n]
  (str (subs s 0 (min (count s) n)) "..."))

(defn with-handlers
  "A hoc to get props and merge with handlers"
  [handlers]
  (fn [props]
    (merge props handlers)))

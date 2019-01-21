(ns layers-cljs.db)

(def package
  {:name "Swinging For the Fences"
   :description "Giving something your all."
   :card-count 50
   :avg-rating 4
   :num-reviews 90
   :author {:name "Mario"}
   :price
   {:currency "BRL"
    :total 40
    :currency-symbol "R$"
    :with-discount 10}})

(def topic
  {:name "Lorem Ipsum"
   :description "Integer placerat tristique nisl."
   :packages [package package (assoc package :active true) package package package]})

(def default-db
  {:name "layers-cljs"
   :active-package 1
   :active-topic topic})

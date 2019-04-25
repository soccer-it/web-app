(ns components.header
  (:require [rum.core :as rum]))

(rum/defc header []
  [:header {:class "header"}
    [:div {:class "container"}
      [:div {:class "logo"}]
      [:div {:class "team-name"} "my team"]

      [:input {:id "navbar" :type "checkbox"}]

      [:label {:for "navbar"}
        [:div {:class "menu"}
          [:span {:class "hamburger"}]]]

      [:ul {:class "items-menu"}
        [:li {:class "avatar"}]
        [:li {:class "user-name"} "Victor Fellype"]
        [:li {:class "user-date"} "Membro desde Abril/2019"]
        [:li {:class "item"}
          [:a {:class "menu-link"} "Quiz do timão"]]
        [:li {:class "item"}
          [:a {:class "menu-link"} "Simulador de Retrospecto"]]
        ]]])
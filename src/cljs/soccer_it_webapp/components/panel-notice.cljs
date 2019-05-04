(ns components.panel-notice
  (:require [rum.core :as rum]
            [components.content-panel :refer [content-panel]]))

(rum/defc panel-notice [{:keys [class]}]
  [:div {:class (str "panel-notice " class)}
    (content-panel {:class "-is-notice"}
      [:div {:class "wrapper-notice"}
        [:p {:class "notice-name"} "Você realmente conhece o seu time ?"]
        [:p {:class "info-notice"} "Um quiz com várias perguntas..."]])])
(ns components.news-box
  (:require [rum.core :as rum]
            [components.box :refer [box]]))

(rum/defc news-box [{:keys [title description]}]
  (box {:class "-is-news"}
    [:div {:class "news-box"}
      [:div {:class "wrapper-img"}
        [:img {:src "http://bomdiaesportivo.com.br/site/wp-content/uploads/2019/03/juve-e1552431424822-90x90.jpg" :class "img"}]]
    
      [:div {:class "wrapper-news"}
        [:h2 {:class "title"} title]
        [:p {:class "description"} description]]]))
  
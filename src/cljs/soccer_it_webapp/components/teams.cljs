(ns components.teams
  (:require
   [sablono.core :as sablono]
   [rum.core :as rum]
   [cljsjs.react-swipeable-views]))

(rum/defc singleTeam []
  [:figure.single-team
   [:img.banner {:src "images/single-team-banner.svg"}]
   [:figcaption.caption "Team Name"]])

(rum/defc Swipeable [props children]
  (js/React.createElement js/SwipeableViews #js {} (sablono/html children)))

(rum/defc teams []
  [:div.teams
   [:div.wrapper
    [:h1.title "Escolha seu Time"]
    [:div {:class "items"}
     (Swipeable {}
                [(singleTeam {})
                 (singleTeam {})
                 (singleTeam {})
                 (singleTeam {})
                 (singleTeam {})
                 (singleTeam {})
                 (singleTeam {})])]]])
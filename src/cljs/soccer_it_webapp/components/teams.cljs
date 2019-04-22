(ns components.teams
  (:require
   [sablono.core :as sablono]
   [rum.core :as rum]
   [cljsjs.react-swipeable-views]))

;;TODO => Remove Logic from view

(rum/defc singleTeam [name]
  [:figure.single-team
   [:img.banner {:src "images/single-team-banner.svg"}]
   [:figcaption.caption name]])

(rum/defc Swipeable [props children]
  (js/React.createElement js/SwipeableViews #js {} (sablono/html children)))

(def teamsList [{:name "Corinthians" :slug "COR"}
                {:name "Palmeiras" :slug "PAL"}
                {:name "Santos" :slug "SAN"}
                {:name "São Paulo" :slug "SAO"}])

(defn getFilteredItems [value list]
  (filter
   (fn [team]
     (re-find (re-pattern (str "(?i)" value)) (get team :name))) list))

(rum/defcs teams
  < rum/reactive
  (rum/local teamsList ::filteredList)
  [state]
  (let [currentTeamList (::filteredList state)]
    [:div.teams
     [:div.search
      [:input {:type "search"
               :placeholder "Busque pelo seu time"
               :onChange (fn [e] (swap! currentTeamList (fn [_] (getFilteredItems (.. e -target -value) teamsList))))}]]
     [:div.wrapper
      [:h1.title "Escolha seu Time"]
      [:div {:class "items"}
       (Swipeable {}
                  [(for [team @currentTeamList] (singleTeam (get team :name)))])]]]))
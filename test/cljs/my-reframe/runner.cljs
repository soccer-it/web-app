(ns fluany.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [fluany.core-test]))

(doo-tests 'fluany.core-test)

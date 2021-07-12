# docker-worker
Examen 12/07/2021

L'exercice 1 est la branche main, les autres ont leurs propre branches 

Exercice 1 & 2 sont correct en local, sur 2 terminaux, mais pas lors de la containérisation. Le planner doit attendre que le worker se lance (ce qui à l'air d'être le cas) mais le calcul ne veut pas être fait, comme si il n'y a pas de communication.

Exercice 3 ne fonctionne pas: l'idée est d'avoir (pour commencer) le worker 3000 qui ne doit faire que les multiplications.
  Le 4000 fait bien les 2
  Le 3000 fait les aditions
  Mais si le 3000 voit en premier une addition, tout est bloqué

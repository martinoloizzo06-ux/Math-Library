---
id: algebra-09-autovalori-autovettori
subject: algebra-lineare
topic_it: Autovalori e diagonalizzazione
topic_en: Eigenvalues and diagonalization
title_it: Autovalori e autovettori
title_en: Eigenvalues and eigenvectors
level: blue
order: 9
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 6 — Autovalori"
---

## Definizione

Sia $A\in\mathbb{R}^{n\times n}$. Un vettore non nullo $\mathbf{v}\in\mathbb{R}^n$ è un **autovettore** di $A$ con **autovalore** $\lambda\in\mathbb{R}$ se:

$$A\mathbf{v} = \lambda\mathbf{v}$$

Geometricamente: $A$ trasforma $\mathbf{v}$ in un suo multiplo scalare — la direzione di $\mathbf{v}$ è preserved.

## Calcolo degli autovalori

$A\mathbf{v}=\lambda\mathbf{v} \iff (A-\lambda I)\mathbf{v}=\mathbf{0}$ con $\mathbf{v}\neq\mathbf{0}$.

Questo richiede $\det(A-\lambda I)=0$.

**Polinomio caratteristico:**

$$p(\lambda) = \det(A-\lambda I)$$

È un polinomio di grado $n$ in $\lambda$. Le sue radici sono gli autovalori.

## Autospazio

Per ogni autovalore $\lambda_0$, l'**autospazio** associato è:

$$V_{\lambda_0} = \ker(A-\lambda_0 I) = \{\mathbf{v}: A\mathbf{v}=\lambda_0\mathbf{v}\}$$

È un sottospazio non banale (almeno 1-dimensionale).

## Proprietà

- La **traccia** di $A$ (somma degli elementi diagonali) = somma degli autovalori.
- $\det(A)$ = prodotto degli autovalori.
- Autovettori relativi ad autovalori **distinti** sono linearmente indipendenti.
- Una matrice simmetrica ha autovalori **reali** e autovettori di autovalori diversi **ortogonali**.

---

## Esercizi

<details>
<summary>Esercizio 1 — Calcolo completo</summary>

Trovare autovalori e autovettori di $A=\begin{pmatrix}4&1\\2&3\end{pmatrix}$.

**Soluzione.**

$p(\lambda)=\det\begin{pmatrix}4-\lambda&1\\2&3-\lambda\end{pmatrix}=(4-\lambda)(3-\lambda)-2=\lambda^2-7\lambda+10=(\lambda-2)(\lambda-5)$.

**$\lambda_1=2$:** $(A-2I)\mathbf{v}=\mathbf{0}$: $\begin{pmatrix}2&1\\2&1\end{pmatrix}\mathbf{v}=\mathbf{0}$. Equazione: $2v_1+v_2=0$. Autovettore: $(1,-2)$.

**$\lambda_2=5$:** $(A-5I)\mathbf{v}=\mathbf{0}$: $\begin{pmatrix}-1&1\\2&-2\end{pmatrix}\mathbf{v}=\mathbf{0}$. Equazione: $v_1=v_2$. Autovettore: $(1,1)$.

</details>

<details>
<summary>Esercizio 2 — Autovalori di matrice triangolare</summary>

Trovare gli autovalori di $A=\begin{pmatrix}3&5&7\\0&2&4\\0&0&1\end{pmatrix}$.

**Soluzione.**

Per una matrice triangolare, gli autovalori sono gli **elementi della diagonale principale**.

$\lambda_1=3$, $\lambda_2=2$, $\lambda_3=1$.

($p(\lambda)=(3-\lambda)(2-\lambda)(1-\lambda)$ — si verifica dal determinante.)

</details>

<details>
<summary>Esercizio 3 — Traccia e determinante</summary>

Per $A=\begin{pmatrix}1&2\\2&1\end{pmatrix}$, trovare gli autovalori usando le proprietà.

**Soluzione.**

$\text{tr}(A)=2=\lambda_1+\lambda_2$. $\det(A)=1-4=-3=\lambda_1\lambda_2$.

$p(\lambda)=\lambda^2-2\lambda-3=(\lambda-3)(\lambda+1)$.

$\lambda_1=3$, $\lambda_2=-1$. ✓

</details>

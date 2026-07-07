---
id: algebra-12-ortogonalita-proiezioni
subject: algebra-lineare
topic_it: Ortogonalità
topic_en: Orthogonality
title_it: Ortogonalità e proiezioni ortogonali
title_en: Orthogonality and orthogonal projections
level: blue
order: 12
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 4 — Proiezioni"
---

## Complemento ortogonale

Il **complemento ortogonale** di un sottospazio $W\subseteq V$ è:

$$W^\perp = \{\mathbf{v}\in V: \langle\mathbf{v},\mathbf{w}\rangle=0 \;\;\forall\mathbf{w}\in W\}$$

$W^\perp$ è un sottospazio e $\dim(W)+\dim(W^\perp)=\dim(V)$.

## I quattro sottospazi fondamentali

Per $A\in\mathbb{R}^{m\times n}$:

$$C(A)^\perp = N(A^T) \qquad C(A^T)^\perp = N(A)$$

Il diagramma fondamentale di Strang: $\mathbb{R}^n = C(A^T)\oplus N(A)$, $\mathbb{R}^m = C(A)\oplus N(A^T)$.

## Proiezione su un sottospazio

La **proiezione ortogonale** di $\mathbf{b}$ su un sottospazio $W$ è il vettore $\hat{\mathbf{b}}\in W$ che minimizza $\|\mathbf{b}-\hat{\mathbf{b}}\|$ (distanza).

**Proiezione su una retta** $W=\text{span}\{\mathbf{a}\}$:

$$\hat{\mathbf{b}} = \frac{\langle\mathbf{a},\mathbf{b}\rangle}{\|\mathbf{a}\|^2}\mathbf{a} = \frac{\mathbf{a}\mathbf{a}^T}{\mathbf{a}^T\mathbf{a}}\mathbf{b}$$

**Proiezione su $C(A)$** (colonne di $A$ LI):

$$\hat{\mathbf{b}} = A(A^TA)^{-1}A^T\mathbf{b}$$

La **matrice di proiezione** è $P = A(A^TA)^{-1}A^T$.

## Proprietà della matrice di proiezione

- $P^2=P$ (idempotente): proiettare due volte = proiettare una.
- $P^T=P$ (simmetrica).
- Autovalori: 1 (su $C(A)$) e 0 (su $C(A)^\perp$).

## Minimi quadrati

Il vettore $\hat{\mathbf{x}} = (A^TA)^{-1}A^T\mathbf{b}$ minimizza $\|A\mathbf{x}-\mathbf{b}\|^2$ — usato nella regressione lineare.

Le **equazioni normali** sono: $A^TA\hat{\mathbf{x}} = A^T\mathbf{b}$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Proiezione su una retta</summary>

Proiettare $\mathbf{b}=(1,1,1)$ sulla retta $\mathbf{a}=(1,2,2)$.

**Soluzione.**

$\hat{\mathbf{b}} = \dfrac{\mathbf{a}^T\mathbf{b}}{\mathbf{a}^T\mathbf{a}}\mathbf{a} = \dfrac{1+2+2}{1+4+4}(1,2,2)=\dfrac{5}{9}(1,2,2)=\left(\dfrac{5}{9},\dfrac{10}{9},\dfrac{10}{9}\right)$

Residuo: $\mathbf{b}-\hat{\mathbf{b}}=\left(\dfrac{4}{9},-\dfrac{1}{9},-\dfrac{1}{9}\right)\perp(1,2,2)$. ✓

</details>

<details>
<summary>Esercizio 2 — Matrice di proiezione</summary>

Trovare la matrice di proiezione su $C(A)$ per $A=\begin{pmatrix}1\\1\end{pmatrix}$.

**Soluzione.**

$P=\dfrac{AA^T}{A^TA}=\dfrac{1}{2}\begin{pmatrix}1\\1\end{pmatrix}(1\;1)=\dfrac{1}{2}\begin{pmatrix}1&1\\1&1\end{pmatrix}$.

Verifica: $P^2=\dfrac{1}{4}\begin{pmatrix}2&2\\2&2\end{pmatrix}=P$. ✓ $P^T=P$. ✓

</details>

<details>
<summary>Esercizio 3 — Minimi quadrati</summary>

Trovare la retta $y=a+bx$ che meglio approssima i punti $(0,1),(1,2),(2,2)$.

**Soluzione.**

$A=\begin{pmatrix}1&0\\1&1\\1&2\end{pmatrix}$, $\mathbf{b}=\begin{pmatrix}1\\2\\2\end{pmatrix}$.

$A^TA=\begin{pmatrix}3&3\\3&5\end{pmatrix}$, $A^T\mathbf{b}=\begin{pmatrix}5\\7\end{pmatrix}$.

Sistema: $3a+3b=5$, $3a+5b=7$. $b=1$, $a=2/3$.

Retta: $y=2/3+x$.

</details>

---
id: algebra-08-determinanti
subject: algebra-lineare
topic_it: Spazi vettoriali
topic_en: Vector spaces
title_it: Determinanti
title_en: Determinants
level: blue
order: 8
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 5 — Determinanti"
---

## Definizione

Il **determinante** è una funzione $\det: M_{n,n}(\mathbb{R})\to\mathbb{R}$ che soddisfa:
1. Multilinearità rispetto alle righe.
2. Antisimmetria: scambiare due righe cambia il segno.
3. Normalizzazione: $\det(I_n)=1$.

## Determinante $2\times 2$ e $3\times 3$

$$\det\begin{pmatrix}a&b\\c&d\end{pmatrix} = ad-bc$$

**Regola di Sarrus** per $3\times 3$:

$$\det\begin{pmatrix}a&b&c\\d&e&f\\g&h&i\end{pmatrix} = aei+bfg+cdh - ceg - afh - bdi$$

## Sviluppo di Laplace

$$\det(A) = \sum_{j=1}^n (-1)^{i+j} a_{ij}\,M_{ij}$$

dove $M_{ij}$ è il **minore** (determinante della sottomatrice ottenuta eliminando la riga $i$ e la colonna $j$).

Conviene sviluppare lungo la riga/colonna con più zeri.

## Proprietà fondamentali

- $\det(AB)=\det(A)\det(B)$.
- $\det(A^T)=\det(A)$.
- $\det(A^{-1})=1/\det(A)$ (se $A$ è invertibile).
- $A$ è invertibile $\iff$ $\det(A)\neq 0$.
- $\det(cA)=c^n\det(A)$ per $A\in\mathbb{R}^{n\times n}$.

## Interpretazione geometrica

$|\det(A)|$ è il volume del parallelepipedo generato dalle righe (o colonne) di $A$.

Il segno indica l'**orientazione**: positivo se le colonne formano un sistema levogiro, negativo se destrogiro.

## Regola di Cramer

Il sistema $A\mathbf{x}=\mathbf{b}$ (con $\det A\neq 0$) ha soluzione unica:

$$x_j = \frac{\det(A_j)}{\det(A)}$$

dove $A_j$ è $A$ con la $j$-esima colonna sostituita da $\mathbf{b}$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Determinante $3\times 3$</summary>

Calcolare $\det\begin{pmatrix}2&1&3\\0&-1&2\\1&0&1\end{pmatrix}$.

**Soluzione.**

Sviluppo lungo la prima colonna:

$= 2\cdot\det\begin{pmatrix}-1&2\\0&1\end{pmatrix} - 0 + 1\cdot\det\begin{pmatrix}1&3\\-1&2\end{pmatrix}$

$= 2(-1\cdot1-2\cdot0) + 1(1\cdot2-3\cdot(-1)) = 2(-1) + 1(5) = -2+5 = \mathbf{3}$

</details>

<details>
<summary>Esercizio 2 — Invertibilità</summary>

Per quali $k$ la matrice $A=\begin{pmatrix}k&1\\2&k\end{pmatrix}$ è invertibile?

**Soluzione.**

$\det A = k^2 - 2$.

$A$ è invertibile sse $k^2\neq 2$, cioè $k\neq\pm\sqrt{2}$.

</details>

<details>
<summary>Esercizio 3 — Regola di Cramer</summary>

Risolvere con Cramer: $\begin{cases}2x+y=5\\ x-y=1\end{cases}$.

**Soluzione.**

$A=\begin{pmatrix}2&1\\1&-1\end{pmatrix}$, $\det A=-2-1=-3$.

$A_1=\begin{pmatrix}5&1\\1&-1\end{pmatrix}$, $\det A_1=-5-1=-6$.

$A_2=\begin{pmatrix}2&5\\1&1\end{pmatrix}$, $\det A_2=2-5=-3$.

$x=(-6)/(-3)=2$, $y=(-3)/(-3)=1$. **Soluzione:** $(2,1)$.

</details>

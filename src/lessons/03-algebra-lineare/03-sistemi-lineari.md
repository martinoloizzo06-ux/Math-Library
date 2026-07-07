---
id: algebra-03-sistemi-lineari
subject: algebra-lineare
topic_it: Fondamenti
topic_en: Foundations
title_it: Sistemi lineari e metodo di Gauss
title_en: Linear systems and Gaussian elimination
level: blue
order: 3
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 2 — Eliminazione di Gauss"
---

## Sistema lineare

Un **sistema di $m$ equazioni in $n$ incognite**:

$$\begin{cases} a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\ a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2 \\ \vdots \\ a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m \end{cases}$$

In forma matriciale: $A\mathbf{x} = \mathbf{b}$, con $A\in\mathbb{R}^{m\times n}$.

## Matrice aumentata

Si lavora sulla **matrice aumentata** $[A\mid\mathbf{b}]$, ottenuta affiancando $\mathbf{b}$ ad $A$.

## Operazioni elementari sulle righe

1. Scambio di due righe: $R_i \leftrightarrow R_j$.
2. Moltiplicazione di una riga per uno scalare $c\neq 0$: $R_i \leftarrow c R_i$.
3. Somma di un multiplo di una riga a un'altra: $R_i \leftarrow R_i + c R_j$.

Queste operazioni **non cambiano le soluzioni** del sistema.

## Eliminazione di Gauss (forma a scalini)

L'obiettivo è portare $[A\mid\mathbf{b}]$ alla **forma a scalini** (row echelon form) tramite operazioni elementari, poi risolvere per **sostituzione all'indietro**.

**Forma ridotta a scalini** (RREF): pivots = 1, zeri sopra e sotto ogni pivot.

## Tipologie di soluzioni

- **Soluzione unica:** un pivot per ogni colonna.
- **Infinite soluzioni:** variabili libere (colonne senza pivot).
- **Nessuna soluzione:** riga $[0\;\cdots\;0\mid c]$ con $c\neq 0$ (sistema incompatibile).

---

## Esercizi

<details>
<summary>Esercizio 1 — Eliminazione di Gauss</summary>

Risolvere il sistema:
$\begin{cases} x+2y+z=2 \\ 3x+8y+z=12 \\ 4y+z=2 \end{cases}$

**Soluzione.**

Matrice aumentata:

$$\begin{pmatrix}1&2&1&2\\3&8&1&12\\0&4&1&2\end{pmatrix}$$

$R_2\leftarrow R_2-3R_1$: $\begin{pmatrix}1&2&1&2\\0&2&-2&6\\0&4&1&2\end{pmatrix}$

$R_3\leftarrow R_3-2R_2$: $\begin{pmatrix}1&2&1&2\\0&2&-2&6\\0&0&5&-10\end{pmatrix}$

Sostituzione all'indietro: $5z=-10 \Rightarrow z=-2$. $2y=6+2z=2 \Rightarrow y=1$. $x=2-2y-z=2-2+2=2$.

**Soluzione:** $(x,y,z)=(2,1,-2)$.

</details>

<details>
<summary>Esercizio 2 — Sistema con infinite soluzioni</summary>

Risolvere $\begin{cases}x+y+z=1\\2x+2y+2z=2\end{cases}$.

**Soluzione.**

La seconda equazione è $2\times$ la prima. Dopo l'eliminazione: una sola equazione non banale.

$x+y+z=1$: due variabili libere (es. $y=s$, $z=t$).

$x=1-s-t$. Soluzione: $(1-s-t,\;s,\;t)$ per $s,t\in\mathbb{R}$ — **infinite soluzioni**.

</details>

<details>
<summary>Esercizio 3 — Sistema incompatibile</summary>

Mostrare che $\begin{cases}x+y=1\\x+y=2\end{cases}$ è incompatibile.

**Soluzione.**

Sottraendo la prima dalla seconda: $0=1$ — contraddizione.

La matrice aumentata ha riga $[0\;\;0\;\;|\;1]$, che segnala incompatibilità: **nessuna soluzione**.

</details>

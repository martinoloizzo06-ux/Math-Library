---
id: algebra-04-rango-rouche-capelli
subject: algebra-lineare
topic_it: Fondamenti
topic_en: Foundations
title_it: Rango e teorema di Rouché-Capelli
title_en: Rank and the Rouché-Capelli theorem
level: blue
order: 4
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 2–3 — Rango e spazio delle soluzioni"
---

## Rango di una matrice

Il **rango** di $A$ (scritto $\text{rk}(A)$ o $r(A)$) è il numero di pivot nella forma a scalini — cioè il numero di righe (o colonne) linearmente indipendenti.

**Proprietà:**
- $\text{rk}(A) \leq \min(m,n)$ per $A\in\mathbb{R}^{m\times n}$.
- $\text{rk}(A) = \text{rk}(A^T)$ (il rango per righe uguale al rango per colonne).

## Nucleo e immagine

**Spazio delle colonne (immagine):** $\text{Im}(A)=\{A\mathbf{x}:\mathbf{x}\in\mathbb{R}^n\}\subseteq\mathbb{R}^m$.

$$\dim(\text{Im}(A)) = \text{rk}(A)$$

**Nucleo (kernel):** $\ker(A)=\{\mathbf{x}\in\mathbb{R}^n: A\mathbf{x}=\mathbf{0}\}$.

**Teorema rango-nullità:**

$$\text{rk}(A) + \dim(\ker(A)) = n$$

## Teorema di Rouché-Capelli

Il sistema $A\mathbf{x}=\mathbf{b}$ (con $A\in\mathbb{R}^{m\times n}$) è **compatibile** (ha soluzioni) se e solo se:

$$\text{rk}(A) = \text{rk}([A\mid\mathbf{b}])$$

**Struttura delle soluzioni:**

- Se compatibile e $\text{rk}(A)=n$: **soluzione unica**.
- Se compatibile e $\text{rk}(A)<n$: **infinite soluzioni** — uno spazio affine di dimensione $n-\text{rk}(A)$.

**Soluzione generale** = soluzione particolare + soluzione omogenea ($A\mathbf{x}=\mathbf{0}$).

## Invertibilità

Una matrice quadrata $A\in\mathbb{R}^{n\times n}$ è **invertibile** (o non singolare) se esiste $A^{-1}$ con $AA^{-1}=A^{-1}A=I_n$. Equivalentemente:
- $\text{rk}(A)=n$ (rango pieno).
- $\det A\neq 0$.
- $\ker(A)=\{\mathbf{0}\}$.
- Il sistema $A\mathbf{x}=\mathbf{b}$ ha soluzione unica per ogni $\mathbf{b}$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Calcolo del rango</summary>

Trovare il rango di $A=\begin{pmatrix}1&2&3\\2&4&6\\1&0&1\end{pmatrix}$.

**Soluzione.**

$R_2\leftarrow R_2-2R_1$, $R_3\leftarrow R_3-R_1$:

$$\begin{pmatrix}1&2&3\\0&0&0\\0&-2&-2\end{pmatrix}$$

Scambiare $R_2\leftrightarrow R_3$:

$$\begin{pmatrix}1&2&3\\0&-2&-2\\0&0&0\end{pmatrix}$$

Due pivot: $\text{rk}(A)=2$.

</details>

<details>
<summary>Esercizio 2 — Teorema di Rouché-Capelli</summary>

Per quali valori di $k$ il sistema $\begin{cases}x+y=2\\ 2x+2y=k\end{cases}$ è compatibile?

**Soluzione.**

$\text{rk}(A)=1$ (righe proporzionali). Il sistema è compatibile sse $\text{rk}([A|\mathbf{b}])=1$, cioè la seconda riga della matrice aumentata è proporzionale alla prima.

$[2\;2\;|\;k]$ è proporzionale a $[1\;1\;|\;2]$ sse $k=4$.

</details>

<details>
<summary>Esercizio 3 — Spazio delle soluzioni</summary>

Trovare tutte le soluzioni di $A\mathbf{x}=\mathbf{0}$ per $A=\begin{pmatrix}1&2&1\\0&0&1\end{pmatrix}$.

**Soluzione.**

Dalla seconda riga: $z=0$. Dalla prima: $x+2y=0 \Rightarrow x=-2y$.

Variabile libera: $y=t$. Soluzione: $\mathbf{x}=t\begin{pmatrix}-2\\1\\0\end{pmatrix}$, $t\in\mathbb{R}$.

$\dim(\ker(A))=1 = n-\text{rk}(A)=3-2=1$. ✓

</details>

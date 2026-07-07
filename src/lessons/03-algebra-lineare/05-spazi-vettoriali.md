---
id: algebra-05-spazi-vettoriali
subject: algebra-lineare
topic_it: Spazi vettoriali
topic_en: Vector spaces
title_it: Spazi vettoriali e sottospazi
title_en: Vector spaces and subspaces
level: blue
order: 5
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 3 — Spazi vettoriali"
---

## Spazio vettoriale

Un **spazio vettoriale** su $\mathbb{R}$ è un insieme $V$ dotato di due operazioni (somma e prodotto scalare) che soddisfano 8 assiomi:

1. $\mathbf{u}+\mathbf{v}\in V$ (chiusura rispetto alla somma).
2. $\mathbf{u}+\mathbf{v}=\mathbf{v}+\mathbf{u}$ (commutatività).
3. $(\mathbf{u}+\mathbf{v})+\mathbf{w}=\mathbf{u}+(\mathbf{v}+\mathbf{w})$ (associatività).
4. Esiste $\mathbf{0}\in V$ con $\mathbf{v}+\mathbf{0}=\mathbf{v}$.
5. Esiste $-\mathbf{v}$ con $\mathbf{v}+(-\mathbf{v})=\mathbf{0}$.
6. $c\mathbf{v}\in V$ (chiusura rispetto allo scalare).
7. $c(\mathbf{u}+\mathbf{v})=c\mathbf{u}+c\mathbf{v}$ (distributività).
8. $1\cdot\mathbf{v}=\mathbf{v}$.

**Esempi:** $\mathbb{R}^n$, $M_{m,n}(\mathbb{R})$, l'insieme dei polinomi $P_n$, l'insieme delle funzioni continue su $[a,b]$.

## Sottospazio vettoriale

Un sottoinsieme $W\subseteq V$ è un **sottospazio** se:
1. $\mathbf{0}\in W$.
2. $\mathbf{u},\mathbf{v}\in W \Rightarrow \mathbf{u}+\mathbf{v}\in W$.
3. $\mathbf{v}\in W, c\in\mathbb{R} \Rightarrow c\mathbf{v}\in W$.

Equivalentemente: $W$ è **chiuso** rispetto alle combinazioni lineari.

## Span (involucro lineare)

Dato un insieme di vettori $S=\{\mathbf{v}_1,\ldots,\mathbf{v}_k\}$:

$$\text{span}(S) = \{c_1\mathbf{v}_1+\cdots+c_k\mathbf{v}_k : c_i\in\mathbb{R}\}$$

$\text{span}(S)$ è sempre un sottospazio di $V$.

## Sottospazi fondamentali di una matrice

Per $A\in\mathbb{R}^{m\times n}$:
- **Spazio delle colonne** $C(A)\subseteq\mathbb{R}^m$: span delle colonne di $A$.
- **Spazio delle righe** $C(A^T)\subseteq\mathbb{R}^n$: span delle righe di $A$.
- **Nucleo** $N(A)\subseteq\mathbb{R}^n$: soluzioni di $A\mathbf{x}=\mathbf{0}$.
- **Nucleo sinistro** $N(A^T)\subseteq\mathbb{R}^m$: soluzioni di $A^T\mathbf{y}=\mathbf{0}$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Verifica di sottospazio</summary>

L'insieme $W=\{(x,y)\in\mathbb{R}^2: x+y=0\}$ è un sottospazio di $\mathbb{R}^2$?

**Soluzione.**

1. $(0,0)$: $0+0=0$. ✓
2. Se $x_1+y_1=0$ e $x_2+y_2=0$: $(x_1+x_2)+(y_1+y_2)=0$. ✓
3. Se $x+y=0$: $cx+cy=c(x+y)=0$. ✓

$W$ è un sottospazio. (È la retta $y=-x$.)

</details>

<details>
<summary>Esercizio 2 — Non sottospazio</summary>

$W=\{(x,y): x+y=1\}$ è un sottospazio?

**Soluzione.**

No: $\mathbf{0}=(0,0)$ non appartiene a $W$ perché $0+0\neq 1$.

Basta la mancanza dell'elemento neutro per escludere che sia un sottospazio.

</details>

<details>
<summary>Esercizio 3 — Span</summary>

Trovare $\text{span}\{(1,0,0),(0,1,0)\}$ in $\mathbb{R}^3$.

**Soluzione.**

$\text{span}=\{a(1,0,0)+b(0,1,0):a,b\in\mathbb{R}\}=\{(a,b,0):a,b\in\mathbb{R}\}$.

È il piano $z=0$ — un sottospazio 2-dimensionale di $\mathbb{R}^3$.

</details>

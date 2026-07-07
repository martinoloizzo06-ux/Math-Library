---
id: algebra-02-matrici
subject: algebra-lineare
topic_it: Fondamenti
topic_en: Foundations
title_it: Matrici e operazioni
title_en: Matrices and operations
level: blue
order: 2
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 1–2 — Matrici"
---

## Definizione

Una **matrice** $A$ di tipo $m\times n$ è una tabella rettangolare di numeri reali con $m$ righe e $n$ colonne:

$$A = (a_{ij}),\quad i=1,\ldots,m,\quad j=1,\ldots,n$$

L'insieme delle matrici $m\times n$ reali si denota $\mathbb{R}^{m\times n}$ o $M_{m,n}(\mathbb{R})$.

## Operazioni

**Somma:** $(A+B)_{ij}=a_{ij}+b_{ij}$ (solo se $A,B$ stessa dimensione).

**Moltiplicazione scalare:** $(cA)_{ij}=c\,a_{ij}$.

**Prodotto riga per colonna:** se $A\in\mathbb{R}^{m\times k}$ e $B\in\mathbb{R}^{k\times n}$:

$$(AB)_{ij} = \sum_{l=1}^k a_{il}\,b_{lj}$$

Il prodotto matriciale **non è commutativo**: in generale $AB\neq BA$.

## Tipi speciali di matrici

**Matrice identità** $I_n$: diagonale principale = 1, resto = 0. $AI=IA=A$.

**Matrice nulla** $O$: tutti gli elementi sono 0.

**Matrice quadrata:** $m=n$.

**Matrice trasposta** $A^T$: $(A^T)_{ij}=a_{ji}$.

**Matrice simmetrica:** $A^T=A$. **Antisimmetrica:** $A^T=-A$.

**Matrice diagonale:** $a_{ij}=0$ per $i\neq j$.

**Matrice triangolare superiore:** $a_{ij}=0$ per $i>j$.

## Proprietà del prodotto

$$A(BC)=(AB)C \quad \text{(associatività)}$$
$$(A+B)C=AC+BC \quad \text{(distributività)}$$
$$(AB)^T=B^TA^T$$

## Moltiplicazione matrice-vettore

$$A\mathbf{x} = x_1\mathbf{a}_1 + x_2\mathbf{a}_2 + \cdots + x_n\mathbf{a}_n$$

dove $\mathbf{a}_j$ è la $j$-esima colonna di $A$. Il prodotto $A\mathbf{x}$ è una **combinazione lineare delle colonne di $A$**.

---

## Esercizi

<details>
<summary>Esercizio 1 — Prodotto di matrici</summary>

Calcolare $AB$ per $A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$ e $B=\begin{pmatrix}0&1\\1&0\end{pmatrix}$.

**Soluzione.**

$$AB = \begin{pmatrix}1\cdot0+2\cdot1 & 1\cdot1+2\cdot0\\3\cdot0+4\cdot1 & 3\cdot1+4\cdot0\end{pmatrix} = \begin{pmatrix}2&1\\4&3\end{pmatrix}$$

$$BA = \begin{pmatrix}0\cdot1+1\cdot3 & 0\cdot2+1\cdot4\\1\cdot1+0\cdot3 & 1\cdot2+0\cdot4\end{pmatrix} = \begin{pmatrix}3&4\\1&2\end{pmatrix}$$

$AB\neq BA$: il prodotto non è commutativo. ✓

</details>

<details>
<summary>Esercizio 2 — Matrice-vettore come combinazione lineare</summary>

Esprimere $A\mathbf{x}$ come combinazione lineare di colonne per $A=\begin{pmatrix}1&3\\2&4\end{pmatrix}$, $\mathbf{x}=\begin{pmatrix}2\\-1\end{pmatrix}$.

**Soluzione.**

$$A\mathbf{x} = 2\begin{pmatrix}1\\2\end{pmatrix}+(-1)\begin{pmatrix}3\\4\end{pmatrix} = \begin{pmatrix}2\\4\end{pmatrix}+\begin{pmatrix}-3\\-4\end{pmatrix} = \begin{pmatrix}-1\\0\end{pmatrix}$$

</details>

<details>
<summary>Esercizio 3 — Trasposta e simmetria</summary>

Verificare che $AA^T$ è sempre simmetrica.

**Soluzione.**

$(AA^T)^T = (A^T)^T A^T = A A^T$.

Quindi $AA^T$ è simmetrica per ogni matrice $A$. ✓

</details>

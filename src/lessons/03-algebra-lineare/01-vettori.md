---
id: algebra-01-vettori
subject: algebra-lineare
topic_it: Fondamenti
topic_en: Foundations
title_it: Vettori e operazioni fondamentali
title_en: Vectors and fundamental operations
level: blue
order: 1
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 1 — Vettori"
---

## Vettori in $\mathbb{R}^n$

Un **vettore** in $\mathbb{R}^n$ è una $n$-upla ordinata di numeri reali:

$$\mathbf{v} = \begin{pmatrix}v_1\\v_2\\\vdots\\v_n\end{pmatrix}$$

Geometricamente (in $\mathbb{R}^2$ e $\mathbb{R}^3$): frecce con una direzione, un verso e una lunghezza.

## Operazioni fondamentali

**Somma vettoriale:** $(u_1,\ldots,u_n)+(v_1,\ldots,v_n)=(u_1+v_1,\ldots,u_n+v_n)$.

**Moltiplicazione scalare:** $c(v_1,\ldots,v_n)=(cv_1,\ldots,cv_n)$.

**Proprietà:** $\mathbb{R}^n$ con queste operazioni è uno **spazio vettoriale** (commutatività, associatività, elemento neutro $\mathbf{0}$, opposto).

## Prodotto scalare (dot product)

$$\mathbf{u}\cdot\mathbf{v} = \sum_{i=1}^n u_i v_i = u_1v_1+u_2v_2+\cdots+u_nv_n$$

**Proprietà geometrica:**

$$\mathbf{u}\cdot\mathbf{v} = \|\mathbf{u}\|\|\mathbf{v}\|\cos\theta$$

dove $\theta$ è l'angolo tra i vettori.

**Ortogonalità:** $\mathbf{u}\perp\mathbf{v} \iff \mathbf{u}\cdot\mathbf{v}=0$.

## Norma (lunghezza)

$$\|\mathbf{v}\| = \sqrt{\mathbf{v}\cdot\mathbf{v}} = \sqrt{v_1^2+\cdots+v_n^2}$$

**Disuguaglianza di Cauchy-Schwarz:** $|\mathbf{u}\cdot\mathbf{v}|\leq\|\mathbf{u}\|\|\mathbf{v}\|$.

**Disuguaglianza triangolare:** $\|\mathbf{u}+\mathbf{v}\|\leq\|\mathbf{u}\|+\|\mathbf{v}\|$.

## Prodotto vettoriale (in $\mathbb{R}^3$)

$$\mathbf{u}\times\mathbf{v} = \begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\u_1&u_2&u_3\\v_1&v_2&v_3\end{vmatrix} = (u_2v_3-u_3v_2,\;u_3v_1-u_1v_3,\;u_1v_2-u_2v_1)$$

$\mathbf{u}\times\mathbf{v}$ è perpendicolare sia a $\mathbf{u}$ che a $\mathbf{v}$, con $\|\mathbf{u}\times\mathbf{v}\|=\|\mathbf{u}\|\|\mathbf{v}\|\sin\theta$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Operazioni e norma</summary>

Dati $\mathbf{u}=(1,2,-1)$ e $\mathbf{v}=(3,0,2)$, calcolare $\mathbf{u}+\mathbf{v}$, $2\mathbf{u}-\mathbf{v}$ e $\|\mathbf{u}\|$.

**Soluzione.**

$\mathbf{u}+\mathbf{v}=(4,2,1)$.

$2\mathbf{u}-\mathbf{v}=(2\cdot1-3,\;2\cdot2-0,\;2\cdot(-1)-2)=(-1,4,-4)$.

$\|\mathbf{u}\|=\sqrt{1+4+1}=\sqrt{6}$.

</details>

<details>
<summary>Esercizio 2 — Prodotto scalare e angolo</summary>

Calcolare l'angolo tra $\mathbf{u}=(1,1)$ e $\mathbf{v}=(1,-1)$.

**Soluzione.**

$\mathbf{u}\cdot\mathbf{v}=1\cdot1+1\cdot(-1)=0$.

$\|\mathbf{u}\|=\|\mathbf{v}\|=\sqrt{2}$.

$\cos\theta=0 \implies \theta=90°$.

I vettori sono **ortogonali**. ✓

</details>

<details>
<summary>Esercizio 3 — Proiezione</summary>

Calcolare la proiezione di $\mathbf{u}=(4,2)$ su $\mathbf{v}=(1,3)$.

**Soluzione.**

$$\text{proj}_{\mathbf{v}}\mathbf{u} = \frac{\mathbf{u}\cdot\mathbf{v}}{\|\mathbf{v}\|^2}\mathbf{v} = \frac{4+6}{1+9}(1,3) = \frac{10}{10}(1,3) = (1,3)$$

</details>

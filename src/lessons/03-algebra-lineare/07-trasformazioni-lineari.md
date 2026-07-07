---
id: algebra-07-trasformazioni-lineari
subject: algebra-lineare
topic_it: Spazi vettoriali
topic_en: Vector spaces
title_it: Trasformazioni lineari
title_en: Linear transformations
level: blue
order: 7
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 3–8 — Trasformazioni lineari"
---

## Definizione

Una funzione $T:V\to W$ è una **trasformazione lineare** se:

1. $T(\mathbf{u}+\mathbf{v}) = T(\mathbf{u})+T(\mathbf{v})$ per ogni $\mathbf{u},\mathbf{v}\in V$.
2. $T(c\mathbf{v}) = cT(\mathbf{v})$ per ogni $c\in\mathbb{R}$, $\mathbf{v}\in V$.

Equivalentemente: $T(c_1\mathbf{u}+c_2\mathbf{v})=c_1T(\mathbf{u})+c_2T(\mathbf{v})$.

**Proprietà immediata:** $T(\mathbf{0})=\mathbf{0}$.

## Matrice associata

Ogni TL $T:\mathbb{R}^n\to\mathbb{R}^m$ è rappresentata da una matrice $A\in\mathbb{R}^{m\times n}$:

$$T(\mathbf{x}) = A\mathbf{x}$$

La $j$-esima colonna di $A$ è $T(\mathbf{e}_j)$ (immagine del $j$-esimo vettore della base canonica).

## Nucleo e immagine di una TL

**Nucleo:** $\ker(T)=\{\mathbf{v}\in V: T(\mathbf{v})=\mathbf{0}\}$ — è un sottospazio di $V$.

**Immagine:** $\text{Im}(T)=\{T(\mathbf{v}):\mathbf{v}\in V\}$ — è un sottospazio di $W$.

**Teorema rango-nullità:**

$$\dim(\ker T)+\dim(\text{Im}\,T) = \dim(V)$$

## Iniettività e suriettività

- $T$ è **iniettiva** $\iff$ $\ker(T)=\{\mathbf{0}\}$.
- $T$ è **suriettiva** $\iff$ $\text{Im}(T)=W$.
- $T$ è un **isomorfismo** $\iff$ è biiettiva (iniettiva e suriettiva).

## Composizione di TL

Se $T:U\to V$ e $S:V\to W$, la composizione $S\circ T:U\to W$ è lineare. A livello matriciale: $S\circ T \leftrightarrow BA$ (prodotto di matrici).

---

## Esercizi

<details>
<summary>Esercizio 1 — Matrice di una TL</summary>

Trovare la matrice della riflessione rispetto all'asse $x$ in $\mathbb{R}^2$: $T(x,y)=(x,-y)$.

**Soluzione.**

$T(\mathbf{e}_1)=T(1,0)=(1,0)$. $T(\mathbf{e}_2)=T(0,1)=(0,-1)$.

$$A = \begin{pmatrix}1&0\\0&-1\end{pmatrix}$$

</details>

<details>
<summary>Esercizio 2 — Nucleo e immagine</summary>

Per $T:\mathbb{R}^3\to\mathbb{R}^2$, $T(x,y,z)=(x+y,\;y+z)$, trovare $\ker T$ e $\text{Im}\,T$.

**Soluzione.**

$\ker T$: $x+y=0$ e $y+z=0$, cioè $x=-y$ e $z=-y$. Variabile libera $y=t$: $\ker T = \text{span}\{(-1,1,-1)\}$, $\dim=1$.

$\text{Im}\,T$: poiché $\dim(\text{Im}\,T)=3-1=2$ e $\text{Im}\,T\subseteq\mathbb{R}^2$, abbiamo $\text{Im}\,T=\mathbb{R}^2$ ($T$ è suriettiva).

</details>

<details>
<summary>Esercizio 3 — Rotazione</summary>

Trovare la matrice della rotazione di angolo $\theta$ in $\mathbb{R}^2$.

**Soluzione.**

$T(\mathbf{e}_1)=(\cos\theta,\sin\theta)$. $T(\mathbf{e}_2)=(-\sin\theta,\cos\theta)$.

$$R_\theta = \begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}$$

Verifica: $R_\theta R_{-\theta}=I_2$ (la rotazione inversa è quella opposta). ✓

</details>

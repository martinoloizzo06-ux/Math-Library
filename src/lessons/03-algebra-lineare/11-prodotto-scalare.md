---
id: algebra-11-prodotto-scalare
subject: algebra-lineare
topic_it: Ortogonalità
topic_en: Orthogonality
title_it: Prodotto scalare e spazi con norma
title_en: Inner product and normed spaces
level: blue
order: 11
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 4 — Ortogonalità"
---

## Prodotto scalare interno

Un **prodotto scalare interno** su uno spazio vettoriale $V$ è una funzione $\langle\cdot,\cdot\rangle:V\times V\to\mathbb{R}$ che soddisfa:

1. **Simmetria:** $\langle\mathbf{u},\mathbf{v}\rangle=\langle\mathbf{v},\mathbf{u}\rangle$.
2. **Linearità:** $\langle c\mathbf{u}+\mathbf{w},\mathbf{v}\rangle = c\langle\mathbf{u},\mathbf{v}\rangle+\langle\mathbf{w},\mathbf{v}\rangle$.
3. **Positività definita:** $\langle\mathbf{v},\mathbf{v}\rangle\geq 0$, con uguaglianza $\iff$ $\mathbf{v}=\mathbf{0}$.

## Prodotto scalare in $\mathbb{R}^n$

$$\langle\mathbf{u},\mathbf{v}\rangle = \mathbf{u}^T\mathbf{v} = \sum_{i=1}^n u_i v_i$$

La **norma** indotta: $\|\mathbf{v}\|=\sqrt{\langle\mathbf{v},\mathbf{v}\rangle}$.

## Prodotto scalare in $L^2([a,b])$

Lo spazio delle funzioni di quadrato integrabile:

$$\langle f,g\rangle = \int_a^b f(x)g(x)\,dx, \qquad \|f\|=\sqrt{\int_a^b [f(x)]^2\,dx}$$

Questo è il contesto naturale per le serie di Fourier.

## Disuguaglianza di Cauchy-Schwarz

$$|\langle\mathbf{u},\mathbf{v}\rangle|\leq\|\mathbf{u}\|\|\mathbf{v}\|$$

con uguaglianza $\iff$ $\mathbf{u}$ e $\mathbf{v}$ sono proporzionali.

**Conseguenza — disuguaglianza triangolare:**

$$\|\mathbf{u}+\mathbf{v}\|\leq\|\mathbf{u}\|+\|\mathbf{v}\|$$

## Ortogonalità

$\mathbf{u}\perp\mathbf{v}$ se $\langle\mathbf{u},\mathbf{v}\rangle=0$.

**Teorema di Pitagora:** se $\mathbf{u}\perp\mathbf{v}$, allora $\|\mathbf{u}+\mathbf{v}\|^2=\|\mathbf{u}\|^2+\|\mathbf{v}\|^2$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Ortogonalità in $\mathbb{R}^4$</summary>

Verificare se $\mathbf{u}=(1,2,-1,0)$ e $\mathbf{v}=(2,-1,0,3)$ sono ortogonali.

**Soluzione.**

$\langle\mathbf{u},\mathbf{v}\rangle = 1\cdot2+2\cdot(-1)+(-1)\cdot0+0\cdot3 = 2-2+0+0=0$.

$\mathbf{u}\perp\mathbf{v}$. ✓

</details>

<details>
<summary>Esercizio 2 — Norma $L^2$</summary>

Calcolare $\|f\|$ per $f(x)=\sin x$ su $[0,\pi]$.

**Soluzione.**

$$\|f\|^2 = \int_0^\pi \sin^2 x\,dx = \int_0^\pi\frac{1-\cos 2x}{2}\,dx = \left[\frac{x}{2}-\frac{\sin 2x}{4}\right]_0^\pi = \frac{\pi}{2}$$

$\|f\|=\sqrt{\pi/2}$.

</details>

<details>
<summary>Esercizio 3 — Cauchy-Schwarz</summary>

Usando Cauchy-Schwarz, mostrare che per $a,b,c>0$:

$$\left(\sum_{i=1}^n a_i b_i\right)^2 \leq \left(\sum_{i=1}^n a_i^2\right)\left(\sum_{i=1}^n b_i^2\right)$$

**Soluzione.**

È esattamente la disuguaglianza di Cauchy-Schwarz applicata ai vettori $\mathbf{a}=(a_1,\ldots,a_n)$ e $\mathbf{b}=(b_1,\ldots,b_n)$ in $\mathbb{R}^n$ con il prodotto scalare standard:

$$|\langle\mathbf{a},\mathbf{b}\rangle|^2 \leq \|\mathbf{a}\|^2\|\mathbf{b}\|^2 \iff \left(\sum a_i b_i\right)^2\leq\left(\sum a_i^2\right)\left(\sum b_i^2\right)$$

</details>

---
id: algebra-14-forme-quadratiche
subject: algebra-lineare
topic_it: Autovalori e diagonalizzazione
topic_en: Eigenvalues and diagonalization
title_it: Matrici simmetriche e forme quadratiche
title_en: Symmetric matrices and quadratic forms
level: blue
order: 14
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 6–7 — Matrici simmetriche"
---

## Teorema spettrale

Ogni matrice simmetrica $A=A^T\in\mathbb{R}^{n\times n}$ è **diagonalizzabile con base ortonormale**:

$$A = Q\Lambda Q^T$$

dove $Q$ è ortogonale ($Q^TQ=I$, cioè $Q^{-1}=Q^T$) e $\Lambda=\text{diag}(\lambda_1,\ldots,\lambda_n)$.

**Proprietà:**
- Tutti gli autovalori di $A$ sono **reali**.
- Autovettori di autovalori distinti sono **ortogonali**.

## Forme quadratiche

Una **forma quadratica** è un'espressione del tipo:

$$Q(\mathbf{x}) = \mathbf{x}^TA\mathbf{x} = \sum_{i,j}a_{ij}x_i x_j$$

(si usa sempre la versione simmetrica: $A=(A+A^T)/2$).

**Esempi:** $Q(x,y)=x^2+4xy+y^2$ corrisponde a $A=\begin{pmatrix}1&2\\2&1\end{pmatrix}$.

## Classificazione delle forme quadratiche

Una forma quadratica (e la matrice simmetrica $A$) è:
- **Definita positiva:** $\mathbf{x}^TA\mathbf{x}>0$ per ogni $\mathbf{x}\neq\mathbf{0}$ $\iff$ tutti gli autovalori $>0$.
- **Semidefinita positiva:** $\mathbf{x}^TA\mathbf{x}\geq 0$ $\iff$ autovalori $\geq 0$.
- **Indefinita:** valori sia positivi che negativi $\iff$ autovalori di segni misti.

**Criterio di Sylvester:** $A$ è definita positiva sse tutti i **minori principali** di testa sono positivi.

## Applicazione all'ottimizzazione

In un punto critico $(f_x=f_y=0)$, l'Hessiano $H=\begin{pmatrix}f_{xx}&f_{xy}\\f_{xy}&f_{yy}\end{pmatrix}$ è simmetrico:
- $H$ definita positiva $\to$ minimo locale.
- $H$ definita negativa $\to$ massimo locale.
- $H$ indefinita $\to$ punto di sella.

---

## Esercizi

<details>
<summary>Esercizio 1 — Definitezza</summary>

Determinare la definitezza di $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$.

**Soluzione.**

Autovalori: $p(\lambda)=(\lambda-2)^2-1=\lambda^2-4\lambda+3=(\lambda-1)(\lambda-3)$. $\lambda_1=1>0$, $\lambda_2=3>0$.

$A$ è **definita positiva**.

Verifica con Sylvester: $a_{11}=2>0$ e $\det A=4-1=3>0$. ✓

</details>

<details>
<summary>Esercizio 2 — Decomposizione spettrale</summary>

Trovare $Q$ e $\Lambda$ per $A=\begin{pmatrix}3&1\\1&3\end{pmatrix}$.

**Soluzione.**

$p(\lambda)=(\lambda-3)^2-1=(\lambda-2)(\lambda-4)$. $\lambda_1=2$, $\lambda_2=4$.

$\lambda=2$: $(A-2I)\mathbf{v}=0 \Rightarrow (1,1)\mathbf{v}=0$: autovettore $(1,-1)/\sqrt{2}$.

$\lambda=4$: autovettore $(1,1)/\sqrt{2}$.

$$Q=\frac{1}{\sqrt{2}}\begin{pmatrix}1&1\\-1&1\end{pmatrix}, \quad \Lambda=\begin{pmatrix}2&0\\0&4\end{pmatrix}$$

</details>

<details>
<summary>Esercizio 3 — Forma quadratica</summary>

Classificare la forma quadratica $Q(x,y)=x^2-4xy+4y^2$.

**Soluzione.**

Matrice: $A=\begin{pmatrix}1&-2\\-2&4\end{pmatrix}$.

$\det A=4-4=0$, $\text{tr}(A)=5$. Autovalori: $\lambda_1=0$, $\lambda_2=5$ (uno zero).

$A$ è **semidefinita positiva**. Infatti $Q=x^2-4xy+4y^2=(x-2y)^2\geq 0$.

</details>

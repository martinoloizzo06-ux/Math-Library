---
id: algebra-10-diagonalizzazione
subject: algebra-lineare
topic_it: Autovalori e diagonalizzazione
topic_en: Eigenvalues and diagonalization
title_it: Diagonalizzazione di matrici
title_en: Matrix diagonalization
level: blue
order: 10
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 6 — Diagonalizzazione"
---

## Diagonalizzazione

Una matrice $A\in\mathbb{R}^{n\times n}$ è **diagonalizzabile** se esiste una matrice invertibile $P$ e una matrice diagonale $\Lambda$ tale che:

$$A = P\Lambda P^{-1}$$

dove $\Lambda = \text{diag}(\lambda_1,\ldots,\lambda_n)$ contiene gli autovalori, e le colonne di $P$ sono gli autovettori corrispondenti.

## Condizione di diagonalizzabilità

$A$ è diagonalizzabile se e solo se ha $n$ autovettori linearmente indipendenti.

**Condizione sufficiente:** se $A$ ha $n$ autovalori distinti, è diagonalizzabile.

**Molteplicità:** per autovalore $\lambda_0$:
- **Molteplicità algebrica** $m_a$: molteplicità come radice di $p(\lambda)$.
- **Molteplicità geometrica** $m_g = \dim(V_{\lambda_0})$.

$A$ è diagonalizzabile $\iff$ $m_g=m_a$ per ogni autovalore.

## Procedura

1. Calcolare $p(\lambda)=\det(A-\lambda I)$.
2. Trovare gli autovalori $\lambda_1,\ldots,\lambda_k$.
3. Per ciascun $\lambda_i$, trovare una base dell'autospazio $V_{\lambda_i}$.
4. Se si ottengono $n$ autovettori LI in totale: $P$ = matrice con questi autovettori come colonne.
5. $A=P\Lambda P^{-1}$.

## Potenze di una matrice

La diagonalizzazione semplifica enormemente il calcolo di $A^k$:

$$A^k = P\Lambda^k P^{-1}, \qquad \Lambda^k = \text{diag}(\lambda_1^k,\ldots,\lambda_n^k)$$

## Esponenziale di matrice

$$e^A = P\,e^\Lambda\,P^{-1}, \qquad e^\Lambda = \text{diag}(e^{\lambda_1},\ldots,e^{\lambda_n})$$

Utile per risolvere sistemi di equazioni differenziali.

---

## Esercizi

<details>
<summary>Esercizio 1 — Diagonalizzazione completa</summary>

Diagonalizzare $A=\begin{pmatrix}4&1\\2&3\end{pmatrix}$ (dalla lezione precedente).

**Soluzione.**

Autovalori: $\lambda_1=2$ (autovettore $\mathbf{v}_1=(1,-2)$), $\lambda_2=5$ (autovettore $\mathbf{v}_2=(1,1)$).

$$P=\begin{pmatrix}1&1\\-2&1\end{pmatrix}, \quad \Lambda=\begin{pmatrix}2&0\\0&5\end{pmatrix}$$

$P^{-1}=\dfrac{1}{3}\begin{pmatrix}1&-1\\2&1\end{pmatrix}$.

Verifica: $P\Lambda P^{-1}=\begin{pmatrix}4&1\\2&3\end{pmatrix}=A$. ✓

</details>

<details>
<summary>Esercizio 2 — Matrice non diagonalizzabile</summary>

Mostrare che $A=\begin{pmatrix}2&1\\0&2\end{pmatrix}$ non è diagonalizzabile.

**Soluzione.**

$p(\lambda)=(2-\lambda)^2$. Unico autovalore: $\lambda=2$ con $m_a=2$.

$(A-2I)=\begin{pmatrix}0&1\\0&0\end{pmatrix}$: il nucleo è $\text{span}\{(1,0)\}$, $m_g=1\neq m_a=2$.

$A$ **non è diagonalizzabile** (è una matrice di Jordan).

</details>

<details>
<summary>Esercizio 3 — Calcolo di $A^{10}$</summary>

Calcolare $A^{10}$ per $A=\begin{pmatrix}1&2\\2&1\end{pmatrix}$.

**Soluzione.**

$p(\lambda)=\lambda^2-2\lambda-3=(\lambda-3)(\lambda+1)$. $\lambda_1=3$, $\lambda_2=-1$.

Autovettori: $\mathbf{v}_1=(1,1)$, $\mathbf{v}_2=(1,-1)$.

$P=\begin{pmatrix}1&1\\1&-1\end{pmatrix}$, $P^{-1}=\frac{1}{2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$.

$$A^{10}=P\begin{pmatrix}3^{10}&0\\0&(-1)^{10}\end{pmatrix}P^{-1}=P\begin{pmatrix}59049&0\\0&1\end{pmatrix}P^{-1}$$

$$=\frac{1}{2}\begin{pmatrix}59050&59048\\59048&59050\end{pmatrix}$$

</details>

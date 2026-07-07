---
id: algebra-15-svd
subject: algebra-lineare
topic_it: Autovalori e diagonalizzazione
topic_en: Eigenvalues and diagonalization
title_it: Decomposizione ai valori singolari (SVD)
title_en: Singular Value Decomposition (SVD)
level: blue
order: 15
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 7 — SVD"
---

## Definizione

Ogni matrice $A\in\mathbb{R}^{m\times n}$ (con $m\geq n$) ammette la **decomposizione ai valori singolari**:

$$A = U\Sigma V^T$$

dove:
- $U\in\mathbb{R}^{m\times m}$: matrice ortogonale (colonne = **vettori singolari sinistri**).
- $\Sigma\in\mathbb{R}^{m\times n}$: matrice "diagonale" con $\sigma_1\geq\sigma_2\geq\cdots\geq\sigma_r>0$ (**valori singolari**).
- $V\in\mathbb{R}^{n\times n}$: matrice ortogonale (colonne = **vettori singolari destri**).

## Calcolo della SVD

1. Calcolare gli autovalori di $A^TA$ (simmetrica, semidefinita positiva): $\lambda_1\geq\cdots\geq\lambda_n\geq 0$.
2. **Valori singolari:** $\sigma_i=\sqrt{\lambda_i}$.
3. **Vettori singolari destri $V$:** autovettori ortonormali di $A^TA$.
4. **Vettori singolari sinistri $U$:** $\mathbf{u}_i = \dfrac{A\mathbf{v}_i}{\sigma_i}$ per $i=1,\ldots,r$.

## Rank e struttura

Il numero $r$ di valori singolari non nulli è il **rango** di $A$.

**Fattorizzazione di rango basso:**

$$A = \sigma_1\mathbf{u}_1\mathbf{v}_1^T + \sigma_2\mathbf{u}_2\mathbf{v}_2^T + \cdots + \sigma_r\mathbf{u}_r\mathbf{v}_r^T$$

**Approssimazione di rango $k$** (teorema di Eckart-Young): troncare la somma ai primi $k$ termini minimizza $\|A-B\|_F$ su tutte le matrici $B$ di rango $\leq k$.

## Applicazioni

- **Compressione di immagini:** mantenere solo i primi $k$ valori singolari.
- **Riduzione della dimensionalità (PCA):** i vettori singolari sinistri principali.
- **Pseudoinversa di Moore-Penrose:** $A^+ = V\Sigma^+U^T$.
- **Numero di condizionamento:** $\kappa(A)=\sigma_1/\sigma_r$ — misura la sensibilità del sistema $A\mathbf{x}=\mathbf{b}$.

---

## Esercizi

<details>
<summary>Esercizio 1 — SVD di una matrice $2\times 2$</summary>

Calcolare la SVD di $A=\begin{pmatrix}3&0\\0&-2\end{pmatrix}$.

**Soluzione.**

$A^TA=\begin{pmatrix}9&0\\0&4\end{pmatrix}$. Autovalori: $\lambda_1=9$, $\lambda_2=4$. Valori singolari: $\sigma_1=3$, $\sigma_2=2$.

Autovettori di $A^TA$: $\mathbf{v}_1=(1,0)$, $\mathbf{v}_2=(0,1)$.

$\mathbf{u}_1=A\mathbf{v}_1/3=(1,0)$. $\mathbf{u}_2=A\mathbf{v}_2/2=(0,-1)$.

$$U=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\quad \Sigma=\begin{pmatrix}3&0\\0&2\end{pmatrix},\quad V=\begin{pmatrix}1&0\\0&1\end{pmatrix}$$

</details>

<details>
<summary>Esercizio 2 — Rango e valori singolari</summary>

Per $A=\begin{pmatrix}1&1\\1&1\end{pmatrix}$, trovare la SVD e il rango.

**Soluzione.**

$A^TA=\begin{pmatrix}2&2\\2&2\end{pmatrix}$. Autovalori: $\lambda_1=4$, $\lambda_2=0$. $\sigma_1=2$, $\sigma_2=0$.

$\text{rk}(A)=1$.

$\mathbf{v}_1=(1,1)/\sqrt{2}$. $\mathbf{u}_1=A\mathbf{v}_1/2=(1/\sqrt{2},1/\sqrt{2})\cdot 2/2=(1,1)/\sqrt{2}$.

$A = 2\cdot\dfrac{(1,1)^T}{\sqrt{2}}\cdot\dfrac{(1,1)}{\sqrt{2}} = \begin{pmatrix}1&1\\1&1\end{pmatrix}$. ✓

</details>

<details>
<summary>Esercizio 3 — Pseudoinversa</summary>

Calcolare la pseudoinversa $A^+$ per $A=\begin{pmatrix}2&0\\0&0\end{pmatrix}$.

**Soluzione.**

SVD di $A$: $U=V=I$, $\Sigma=\begin{pmatrix}2&0\\0&0\end{pmatrix}$.

$\Sigma^+=\begin{pmatrix}1/2&0\\0&0\end{pmatrix}$.

$A^+=V\Sigma^+U^T=\begin{pmatrix}1/2&0\\0&0\end{pmatrix}$.

Verifica: $AA^+A=\begin{pmatrix}2&0\\0&0\end{pmatrix}\begin{pmatrix}1/2&0\\0&0\end{pmatrix}\begin{pmatrix}2&0\\0&0\end{pmatrix}=\begin{pmatrix}2&0\\0&0\end{pmatrix}=A$. ✓

</details>

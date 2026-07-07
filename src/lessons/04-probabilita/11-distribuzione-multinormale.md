---
id: probabilita-11-multinormale
subject: probabilita
topic_it: Leggi dei grandi numeri
topic_en: Laws of large numbers
title_it: Distribuzione normale multivariata
title_en: Multivariate normal distribution
level: blue
order: 11
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 7 — Normale multivariata"
---

## Normale bivariata

$(X,Y)$ ha distribuzione **normale bivariata** $\mathcal{N}(\boldsymbol{\mu},\Sigma)$ con:

$$\boldsymbol{\mu}=\begin{pmatrix}\mu_X\\\mu_Y\end{pmatrix}, \qquad \Sigma=\begin{pmatrix}\sigma_X^2 & \rho\sigma_X\sigma_Y\\ \rho\sigma_X\sigma_Y & \sigma_Y^2\end{pmatrix}$$

**Densità congiunta:**

$$f(x,y)=\frac{1}{2\pi\sigma_X\sigma_Y\sqrt{1-\rho^2}}\exp\!\left(-\frac{1}{2(1-\rho^2)}\left[\frac{(x-\mu_X)^2}{\sigma_X^2}-\frac{2\rho(x-\mu_X)(y-\mu_Y)}{\sigma_X\sigma_Y}+\frac{(y-\mu_Y)^2}{\sigma_Y^2}\right]\right)$$

**Marginali:** $X\sim\mathcal{N}(\mu_X,\sigma_X^2)$, $Y\sim\mathcal{N}(\mu_Y,\sigma_Y^2)$.

**Indipendenza:** $X,Y$ indipendenti $\iff$ $\rho=0$.

## Normale multivariata

$\mathbf{X}\sim\mathcal{N}_n(\boldsymbol{\mu},\Sigma)$:

$$f(\mathbf{x})=\frac{1}{(2\pi)^{n/2}|\Sigma|^{1/2}}\exp\!\left(-\frac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^T\Sigma^{-1}(\mathbf{x}-\boldsymbol{\mu})\right)$$

Richiede $\Sigma$ definita positiva.

## Proprietà

- **Chiusura:** $A\mathbf{X}+\mathbf{b}\sim\mathcal{N}(A\boldsymbol{\mu}+\mathbf{b},\;A\Sigma A^T)$.
- **Distribuzione condizionale:** $X\mid Y=y$ è normale (la normale condizionale è normale).
- **Marginali:** ogni sottoinsieme di componenti è normale multivariata.

## Distribuzione condizionale

Se $(X,Y)\sim\mathcal{N}_2(\boldsymbol{\mu},\Sigma)$:

$$X\mid Y=y \;\sim\; \mathcal{N}\!\left(\mu_X+\rho\frac{\sigma_X}{\sigma_Y}(y-\mu_Y),\;\sigma_X^2(1-\rho^2)\right)$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Marginali</summary>

$(X,Y)\sim\mathcal{N}_2\!\left((1,2),\begin{pmatrix}4&1\\1&9\end{pmatrix}\right)$. Trovare le distribuzioni marginali.

**Soluzione.**

$X\sim\mathcal{N}(1,4)$ e $Y\sim\mathcal{N}(2,9)$.

La correlazione è $\rho=1/(\sqrt{4}\cdot\sqrt{9})=1/6$.

</details>

<details>
<summary>Esercizio 2 — Trasformazione lineare</summary>

$\mathbf{X}\sim\mathcal{N}_2(\mathbf{0},I_2)$. Trovare la distribuzione di $Y_1=X_1+X_2$, $Y_2=X_1-X_2$.

**Soluzione.**

$\mathbf{Y}=A\mathbf{X}$ con $A=\begin{pmatrix}1&1\\1&-1\end{pmatrix}$.

$E[\mathbf{Y}]=\mathbf{0}$, $\text{Cov}(\mathbf{Y})=AA^T=\begin{pmatrix}2&0\\0&2\end{pmatrix}=2I_2$.

$\mathbf{Y}\sim\mathcal{N}_2(\mathbf{0},2I_2)$: $Y_1,Y_2$ indipendenti, ciascuno $\mathcal{N}(0,2)$.

</details>

<details>
<summary>Esercizio 3 — Distribuzione condizionale</summary>

$(X,Y)\sim\mathcal{N}_2((0,0),\Sigma)$ con $\sigma_X=\sigma_Y=1$, $\rho=0.8$. Trovare $X\mid Y=1$.

**Soluzione.**

$E[X\mid Y=1]=0+0.8\cdot\dfrac{1}{1}(1-0)=0.8$.

$\text{Var}(X\mid Y=1)=1\cdot(1-0.64)=0.36$.

$X\mid Y=1\;\sim\;\mathcal{N}(0.8,\,0.36)$.

</details>

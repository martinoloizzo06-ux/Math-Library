---
id: probabilita-08-vettori-aleatori
subject: probabilita
topic_it: Variabili aleatorie
topic_en: Random variables
title_it: Vettori aleatori — covarianza e correlazione
title_en: Random vectors — covariance and correlation
level: blue
order: 8
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 7 — Distribuzione congiunta"
---

## Distribuzione congiunta

La **densità congiunta** di $(X,Y)$ è $f_{X,Y}(x,y)\geq 0$ con $\iint f=1$.

**Densità marginali:**

$$f_X(x)=\int_{-\infty}^\infty f_{X,Y}(x,y)\,dy \qquad f_Y(y)=\int_{-\infty}^\infty f_{X,Y}(x,y)\,dx$$

**Indipendenza:** $X,Y$ indipendenti $\iff$ $f_{X,Y}(x,y)=f_X(x)f_Y(y)$.

## Covarianza

$$\text{Cov}(X,Y) = E[(X-E[X])(Y-E[Y])] = E[XY]-E[X]E[Y]$$

**Proprietà:**
- $\text{Cov}(X,X)=\text{Var}(X)$.
- $\text{Cov}(X,Y)=\text{Cov}(Y,X)$.
- $\text{Cov}(aX+b,\,cY+d)=ac\,\text{Cov}(X,Y)$.
- Indipendenza $\Rightarrow$ $\text{Cov}=0$ (il viceversa è falso in generale).

## Correlazione

$$\rho(X,Y) = \frac{\text{Cov}(X,Y)}{\sigma_X\sigma_Y} \in [-1,1]$$

- $|\rho|=1$: relazione **lineare perfetta**.
- $\rho=0$: **non correlati** (ma non necessariamente indipendenti).

## Varianza della somma

$$\text{Var}(X+Y) = \text{Var}(X)+\text{Var}(Y)+2\text{Cov}(X,Y)$$

$$\text{Var}\!\left(\sum_{i=1}^n X_i\right) = \sum_{i=1}^n\text{Var}(X_i) + 2\sum_{i<j}\text{Cov}(X_i,X_j)$$

Se indipendenti: $\text{Var}(\sum X_i)=\sum\text{Var}(X_i)$.

## Matrice di covarianza

Per il vettore aleatorio $\mathbf{X}=(X_1,\ldots,X_n)$:

$$\Sigma_{ij} = \text{Cov}(X_i,X_j) \qquad \Sigma = E[(\mathbf{X}-\boldsymbol{\mu})(\mathbf{X}-\boldsymbol{\mu})^T]$$

$\Sigma$ è simmetrica e semidefinita positiva.

---

## Esercizi

<details>
<summary>Esercizio 1 — Calcolo della covarianza</summary>

$X\sim\text{Unif}(-1,1)$, $Y=X^2$. Calcolare $\text{Cov}(X,Y)$.

**Soluzione.**

$E[X]=0$ (simmetria). $E[X^3]=0$ (funzione dispari su $[-1,1]$).

$E[XY]=E[X\cdot X^2]=E[X^3]=0$.

$\text{Cov}(X,Y)=E[XY]-E[X]E[Y]=0$.

Ma $Y=X^2$ dipende perfettamente da $X$: correlazione zero $\not\Rightarrow$ indipendenza!

</details>

<details>
<summary>Esercizio 2 — Varianza della somma</summary>

$X$ e $Y$ con $\text{Var}(X)=4$, $\text{Var}(Y)=9$, $\text{Cov}(X,Y)=3$. Calcolare $\text{Var}(2X-Y)$.

**Soluzione.**

$\text{Var}(2X-Y)=4\text{Var}(X)+\text{Var}(Y)-4\text{Cov}(X,Y)=16+9-12=\mathbf{13}$.

</details>

<details>
<summary>Esercizio 3 — Correlazione</summary>

$\text{Var}(X)=1$, $\text{Var}(Y)=4$, $\text{Cov}(X,Y)=1$. Calcolare $\rho(X,Y)$.

**Soluzione.**

$\rho = \dfrac{1}{\sqrt{1}\cdot\sqrt{4}}=\dfrac{1}{2}=0.5$.

Correlazione moderatamente positiva.

</details>

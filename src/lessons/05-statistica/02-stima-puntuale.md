---
id: statistica-02-stima-puntuale
subject: statistica
topic_it: Fondamenti di inferenza
topic_en: Foundations of inference
title_it: Stima puntuale — proprietà degli stimatori
title_en: Point estimation — properties of estimators
level: purple
order: 2
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 6–7 — Stima puntuale"
---

## Stimatore

Uno **stimatore** di $\theta$ è una statistica $\hat\theta = T(X_1,\ldots,X_n)$.

**Errore quadratico medio:**

$$\text{MSE}(\hat\theta) = E[(\hat\theta-\theta)^2] = \text{Bias}(\hat\theta)^2 + \text{Var}(\hat\theta)$$

dove $\text{Bias}(\hat\theta)=E[\hat\theta]-\theta$.

## Proprietà desiderabili

**Non distorsione (unbiasedness):** $E[\hat\theta]=\theta$ per ogni $\theta$.

**Consistenza:** $\hat\theta_n\xrightarrow{P}\theta$ per $n\to\infty$.

**Efficienza:** tra gli stimatori non distorti, quello con varianza minima. Lo stimatore non distorto a varianza minima è detto **MVUE**.

**Limite di Cramér-Rao:** per stimatori non distorti, la varianza soddisfa:

$$\text{Var}(\hat\theta)\geq \frac{1}{I(\theta)}, \qquad I(\theta)=E\!\left[\left(\frac{\partial\ln f(X;\theta)}{\partial\theta}\right)^2\right]$$

$I(\theta)$ è l'**informazione di Fisher** — misura quanta informazione il campione porta su $\theta$.

## Trade-off distorsione-varianza

In problemi di stima/predizione, spesso si accetta un po' di distorsione per ridurre molto la varianza (es. ridge regression), minimizzando l'MSE.

## Convergenza quasi certa (consistenza forte)

$\hat\theta_n\xrightarrow{q.c.}\theta$ se $P(\lim_{n\to\infty}\hat\theta_n=\theta)=1$ — più forte della consistenza.

La LGNS garantisce che $\bar{X}_n\xrightarrow{q.c.}\mu$ — la media campionaria è fortemente consistente per $\mu$.

---

## Esercizi

<details>
<summary>Esercizio 1 — MSE</summary>

Stimatore $\hat\theta=\bar{X}_n$ per $\mu=E[X]$ con $\text{Var}(X)=\sigma^2$. Calcolare MSE.

**Soluzione.**

$\text{Bias}(\bar{X})=E[\bar{X}]-\mu=0$ (non distorto).

$\text{Var}(\bar{X})=\sigma^2/n$.

$\text{MSE}(\bar{X})=0+\sigma^2/n=\sigma^2/n$.

</details>

<details>
<summary>Esercizio 2 — Informazione di Fisher</summary>

Calcolare $I(\lambda)$ per $X\sim\text{Pois}(\lambda)$.

**Soluzione.**

$\ln f(x;\lambda)=x\ln\lambda-\lambda-\ln(x!)$.

$\dfrac{\partial\ln f}{\partial\lambda}=\dfrac{x}{\lambda}-1$.

$I(\lambda)=E\!\left[\left(\dfrac{X}{\lambda}-1\right)^2\right]=\text{Var}\!\left(\dfrac{X}{\lambda}\right)=\dfrac{\text{Var}(X)}{\lambda^2}=\dfrac{\lambda}{\lambda^2}=\dfrac{1}{\lambda}$.

Limite di CR: $\text{Var}(\hat\lambda)\geq\lambda/n$ (per campione i.i.d.).

</details>

<details>
<summary>Esercizio 3 — Trade-off</summary>

Scegliere tra: $\hat\theta_A$ con bias=0, var=10 e $\hat\theta_B$ con bias=1, var=5.

**Soluzione.**

$\text{MSE}(\hat\theta_A)=0+10=10$.

$\text{MSE}(\hat\theta_B)=1+5=6$.

Nonostante la distorsione, $\hat\theta_B$ ha MSE minore ed è preferibile.

</details>

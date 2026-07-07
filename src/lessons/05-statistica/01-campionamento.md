---
id: statistica-01-campionamento
subject: statistica
topic_it: Fondamenti di inferenza
topic_en: Foundations of inference
title_it: Campionamento e statistiche campionarie
title_en: Sampling and sample statistics
level: purple
order: 1
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 1 — Campioni e statistiche"
---

## Popolazione e campione

- **Popolazione**: l'intero insieme di unità di interesse (spesso infinita o inaccessibile).
- **Campione**: sottoinsieme della popolazione osservato. Campionamento casuale semplice (SRS): ogni unità ha uguale probabilità di essere scelta.
- **Statistica**: qualsiasi funzione del campione $T=T(X_1,\ldots,X_n)$ — non dipende da parametri ignoti.

## Campionamento i.i.d.

Il modello standard: $X_1,\ldots,X_n$ i.i.d. con densità/PMF $f(x;\theta)$, dove $\theta$ è il parametro (ignoto) da stimare.

## Statistiche campionarie fondamentali

**Media campionaria:**

$$\bar{X}_n = \frac{1}{n}\sum_{i=1}^n X_i, \quad E[\bar{X}_n]=\mu, \quad \text{Var}(\bar{X}_n)=\frac{\sigma^2}{n}$$

**Varianza campionaria (corretta):**

$$S^2 = \frac{1}{n-1}\sum_{i=1}^n(X_i-\bar{X})^2, \quad E[S^2]=\sigma^2$$

Il divisore $n-1$ (invece di $n$) garantisce la **non distorsione**.

**Deviazione standard campionaria:** $S=\sqrt{S^2}$.

## Distribuzione campionaria

La distribuzione di $\bar{X}_n$ quando il campione varia — fondamentale per l'inferenza.

Per $X_i\sim\mathcal{N}(\mu,\sigma^2)$:
- $\bar{X}_n\sim\mathcal{N}(\mu,\sigma^2/n)$, esattamente.
- $\dfrac{(n-1)S^2}{\sigma^2}\sim\chi^2(n-1)$.
- $\bar{X}_n$ e $S^2$ sono **indipendenti** (teorema di Fisher).

## Standard error

$$\text{SE}(\bar{X}_n) = \frac{\sigma}{\sqrt{n}} \approx \frac{S}{\sqrt{n}}$$

Misura l'incertezza nella stima della media: decresce come $1/\sqrt{n}$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Media e varianza campionaria</summary>

Campione: $2, 4, 4, 4, 5, 5, 7, 9$. Calcolare $\bar{x}$ e $s^2$.

**Soluzione.**

$n=8$. $\bar{x}=(2+4+4+4+5+5+7+9)/8=40/8=5$.

$\sum(x_i-\bar{x})^2=(9+1+1+1+0+0+4+16)=32$.

$s^2=32/(8-1)=32/7\approx 4.57$.

</details>

<details>
<summary>Esercizio 2 — Standard error</summary>

Un campione di $n=25$ studenti ha $\bar{x}=170$ cm, $s=8$ cm. Calcolare lo SE della media.

**Soluzione.**

$\text{SE}=s/\sqrt{n}=8/5=1.6$ cm.

La stima della media ha un'incertezza di circa $\pm 1.6$ cm.

</details>

<details>
<summary>Esercizio 3 — Distorsione</summary>

Perché $\hat{\sigma}^2=\dfrac{1}{n}\sum(X_i-\bar{X})^2$ è uno stimatore distorto di $\sigma^2$?

**Soluzione.**

$E\!\left[\dfrac{1}{n}\sum(X_i-\bar{X})^2\right]=\dfrac{n-1}{n}\sigma^2\neq\sigma^2$.

Distorsione: $-\sigma^2/n$. Usando $n-1$ al denominatore si ottiene uno stimatore non distorto.

</details>

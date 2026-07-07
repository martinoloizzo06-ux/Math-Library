---
id: probabilita-06-normale
subject: probabilita
topic_it: Variabili aleatorie
topic_en: Random variables
title_it: Distribuzione normale (gaussiana)
title_en: Normal (Gaussian) distribution
level: blue
order: 6
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 5 — Distribuzione normale"
---

## Distribuzione Normale

$X\sim\mathcal{N}(\mu,\sigma^2)$: la distribuzione più importante in probabilità e statistica.

**Densità:**

$$f_X(x) = \frac{1}{\sigma\sqrt{2\pi}}\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$$

$$E[X]=\mu \qquad \text{Var}(X)=\sigma^2$$

**Normale standard:** $Z\sim\mathcal{N}(0,1)$: $\phi(z)=\dfrac{1}{\sqrt{2\pi}}e^{-z^2/2}$, CDF $\Phi(z)$.

## Standardizzazione

Se $X\sim\mathcal{N}(\mu,\sigma^2)$:

$$Z = \frac{X-\mu}{\sigma} \sim \mathcal{N}(0,1)$$

**Calcolo delle probabilità:**

$$P(a\leq X\leq b) = \Phi\!\left(\frac{b-\mu}{\sigma}\right) - \Phi\!\left(\frac{a-\mu}{\sigma}\right)$$

## Simmetria e regola empirica

- $\Phi(-z)=1-\Phi(z)$ (simmetria).
- **Regola $68$–$95$–$99.7$:**
  - $P(|X-\mu|\leq\sigma)\approx 68.3\%$.
  - $P(|X-\mu|\leq 2\sigma)\approx 95.4\%$.
  - $P(|X-\mu|\leq 3\sigma)\approx 99.7\%$.

## Stabilità per traslazioni e scale

Se $X\sim\mathcal{N}(\mu,\sigma^2)$, allora $aX+b\sim\mathcal{N}(a\mu+b,\,a^2\sigma^2)$.

**Somma di normali indipendenti:** se $X_i\sim\mathcal{N}(\mu_i,\sigma_i^2)$ indipendenti:

$$\sum_i X_i \sim \mathcal{N}\!\left(\sum_i\mu_i,\,\sum_i\sigma_i^2\right)$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Calcolo di probabilità</summary>

$X\sim\mathcal{N}(100,225)$ (media=100, $\sigma=15$). Calcolare $P(85\leq X\leq 115)$.

**Soluzione.**

$P(85\leq X\leq 115) = \Phi\!\left(\dfrac{115-100}{15}\right)-\Phi\!\left(\dfrac{85-100}{15}\right)=\Phi(1)-\Phi(-1)=2\Phi(1)-1$.

$\Phi(1)\approx 0.8413$. $P\approx 2\cdot0.8413-1\approx\mathbf{0.6827}$ (regola $1\sigma$). ✓

</details>

<details>
<summary>Esercizio 2 — Standardizzazione</summary>

Un voto agli esami ha distribuzione $\mathcal{N}(70,100)$. Qual è la probabilità di superare 85?

**Soluzione.**

$Z=(85-70)/10=1.5$. $P(X>85)=P(Z>1.5)=1-\Phi(1.5)\approx 1-0.9332=\mathbf{6.68\%}$.

</details>

<details>
<summary>Esercizio 3 — Somma di normali</summary>

$X\sim\mathcal{N}(3,4)$ e $Y\sim\mathcal{N}(5,9)$ indipendenti. Trovare la distribuzione di $X+Y$.

**Soluzione.**

$X+Y\sim\mathcal{N}(3+5,\;4+9)=\mathcal{N}(8,13)$.

$E[X+Y]=8$, $\sigma_{X+Y}=\sqrt{13}\approx 3.61$.

</details>

---
id: econometria-09-serie-temporali
subject: econometria
topic_it: Serie temporali
topic_en: Time series
title_it: Analisi delle serie temporali — AR, MA, ARMA
title_en: Time series analysis — AR, MA, ARMA
level: purple
order: 9
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 11 — Serie temporali"
---

## Processo stocastico stazionario

Un processo $\{y_t\}$ è **debolmente stazionario** se:
- $E[y_t]=\mu$ (costante nel tempo).
- $\text{Var}(y_t)=\sigma^2$ (costante).
- $\text{Cov}(y_t,y_{t-h})=\gamma(h)$ (dipende solo dal lag $h$, non da $t$).

**Funzione di autocorrelazione (ACF):** $\rho(h)=\gamma(h)/\gamma(0)\in[-1,1]$.

## Processo AR(p) — Autoregressivo

$$y_t = c + \phi_1 y_{t-1}+\cdots+\phi_p y_{t-p}+\varepsilon_t$$

**AR(1):** $y_t=c+\phi y_{t-1}+\varepsilon_t$, $|\phi|<1$ per stazionarietà.

$E[y_t]=c/(1-\phi)$, $\text{Var}(y_t)=\sigma_\varepsilon^2/(1-\phi^2)$, $\rho(h)=\phi^h$.

## Processo MA(q) — Media mobile

$$y_t = \mu + \varepsilon_t + \theta_1\varepsilon_{t-1}+\cdots+\theta_q\varepsilon_{t-q}$$

**MA(q) è sempre stazionario.** ACF si annulla per $h>q$ (utile per identificazione).

## Processo ARMA(p,q)

Combinazione: $y_t=c+\phi_1 y_{t-1}+\cdots+\phi_p y_{t-p}+\varepsilon_t+\theta_1\varepsilon_{t-1}+\cdots+\theta_q\varepsilon_{t-q}$.

## Criteri di selezione del modello

**AIC:** $-2\ell+2k$ (penalizza la complessità).

**BIC:** $-2\ell+k\ln n$ (penalizza di più per $n$ grande).

Si sceglie il modello con AIC/BIC minimo.

## Processi non stazionari — radice unitaria

**Random walk:** $y_t=y_{t-1}+\varepsilon_t$ ($\phi=1$) — non stazionario.

**Test di Dickey-Fuller:** $H_0$: radice unitaria (non stazionario) vs $H_1$: stazionario.

---

## Esercizi

<details>
<summary>Esercizio 1 — AR(1)</summary>

$y_t=2+0.8y_{t-1}+\varepsilon_t$ con $\sigma_\varepsilon^2=1$. Calcolare media, varianza e $\rho(2)$.

**Soluzione.**

$E[y_t]=c/(1-\phi)=2/(1-0.8)=10$.

$\text{Var}(y_t)=1/(1-0.64)=1/0.36\approx 2.78$.

$\rho(2)=\phi^2=0.64$.

</details>

<details>
<summary>Esercizio 2 — MA(1)</summary>

$y_t=\varepsilon_t+0.5\varepsilon_{t-1}$. Calcolare ACF.

**Soluzione.**

$\gamma(0)=\text{Var}(y_t)=\sigma^2(1+0.25)=1.25\sigma^2$.

$\gamma(1)=\text{Cov}(y_t,y_{t-1})=\sigma^2\cdot 0.5=0.5\sigma^2$.

$\rho(1)=0.5/1.25=0.4$.

$\rho(h)=0$ per $h\geq 2$ (troncamento tipico del MA).

</details>

<details>
<summary>Esercizio 3 — Random walk</summary>

Perché una serie con radice unitaria è problematica per la regressione?

**Soluzione.**

Due serie random walk indipendenti possono mostrare **correlazione spuria** — alta $R^2$ e t-statistiche significative anche senza relazione reale.

Soluzione: testare radice unitaria (test ADF), e se presente, differenziare le serie ($\Delta y_t$) o usare la cointegrazione se le serie sono cointegrate.

</details>

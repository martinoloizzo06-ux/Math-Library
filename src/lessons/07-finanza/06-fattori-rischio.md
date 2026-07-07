---
id: finanza-06-fattori
subject: finanza
topic_it: Teoria del portafoglio
topic_en: Portfolio theory
title_it: Modelli fattoriali e Fama-French
title_en: Factor models and Fama-French
level: purple
order: 6
source_book: "Bodie, Kane & Marcus, Investments; J.C. Hull, Options, Futures and Other Derivatives"
source_chapter: "Cap. 10 — Modelli fattoriali"
---

## Modello a un fattore (CAPM come modello fattoriale)

$$R_i = \alpha_i + \beta_i R_m + \varepsilon_i$$

**Scomposizione del rischio:**

$$\sigma_i^2 = \beta_i^2\sigma_m^2 + \sigma_{\varepsilon_i}^2$$

- $\beta_i^2\sigma_m^2$: **rischio sistematico** (non diversificabile).
- $\sigma_{\varepsilon_i}^2$: **rischio idiosincratico** (diversificabile).

## Arbitrage Pricing Theory (APT)

Generalizzazione del CAPM con $k$ fattori:

$$E[R_i]=r_f+\beta_{i1}\lambda_1+\beta_{i2}\lambda_2+\cdots+\beta_{ik}\lambda_k$$

dove $\lambda_j$ è il **premio per il rischio** del fattore $j$.

## Modello di Fama-French a tre fattori (1993)

$$E[R_i]-r_f = \beta_i^{\text{MKT}}(R_m-r_f)+\beta_i^{\text{SMB}}\cdot\text{SMB}+\beta_i^{\text{HML}}\cdot\text{HML}$$

- **MKT** ($R_m-r_f$): fattore di mercato.
- **SMB** (Small Minus Big): rendimento extra delle small cap rispetto alle large cap.
- **HML** (High Minus Low): rendimento extra delle azioni value (alto P/B) rispetto alle growth.

## Modello Carhart a quattro fattori (1997)

Aggiunge il fattore **momentum** (MOM): rendimento extra delle azioni che hanno performato bene nei 12 mesi precedenti.

## Fama-French a cinque fattori (2015)

Aggiunge RMW (redditività) e CMA (investimenti).

---

## Esercizi

<details>
<summary>Esercizio 1 — Rischio sistematico</summary>

Asset con $\beta=1.2$, $\sigma_m=15\%$, $\sigma_\varepsilon=10\%$. Calcolare rischio totale e quota sistematica.

**Soluzione.**

$\sigma_i^2=(1.2)^2\cdot(0.15)^2+(0.10)^2=0.0324+0.01=0.0424$.

$\sigma_i=\sqrt{0.0424}\approx 20.6\%$.

Quota sistematica: $\dfrac{0.0324}{0.0424}\approx 76.4\%$.

</details>

<details>
<summary>Esercizio 2 — Modello Fama-French</summary>

$\beta^{\text{MKT}}=1.0$, $\beta^{\text{SMB}}=0.5$, $\beta^{\text{HML}}=-0.3$. Premi: MKT$=6\%$, SMB$=3\%$, HML$=4\%$. $r_f=2\%$.

**Soluzione.**

$E[R_i]=2+1.0\cdot6+0.5\cdot3+(-0.3)\cdot4=2+6+1.5-1.2=\mathbf{8.3\%}$.

Confronto con CAPM: $2+1.0\cdot6=8\%$. Fama-French dà un rendimento atteso leggermente più alto per questo titolo growth (HML negativo).

</details>

<details>
<summary>Esercizio 3 — APT vs CAPM</summary>

Vantaggi dell'APT rispetto al CAPM.

**Soluzione.**

- APT non richiede l'identificazione del portafoglio di mercato.
- Più flessibile: consente più fattori di rischio.
- Si basa su arbitraggio (no assunzioni di equilibrio generale).

**Limiti APT:** non specifica quali sono i fattori — empirico; CAPM ha un fondamento teorico più solido (equilibrio).

</details>

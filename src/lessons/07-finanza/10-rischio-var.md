---
id: finanza-10-var
subject: finanza
topic_it: Rischio finanziario
topic_en: Financial risk
title_it: Rischio e misure di rischio — VaR e CVaR
title_en: Risk and risk measures — VaR and CVaR
level: purple
order: 10
source_book: "J.C. Hull, Options, Futures and Other Derivatives; Bodie, Kane & Marcus, Investments"
source_chapter: "Cap. 21–22 — Risk Management"
---

## Value at Risk (VaR)

Il **VaR** al livello di confidenza $(1-\alpha)$ e orizzonte $T$ è la perdita massima non superata con probabilità $(1-\alpha)$:

$$P(\text{perdita}\leq\text{VaR}) = 1-\alpha$$

Equivalentemente: la perdita supera il VaR solo con probabilità $\alpha$.

**Esempio:** VaR al 99% su 1 giorno = €1M → c'è solo l'1% di probabilità di perdere più di €1M in un giorno.

## VaR sotto distribuzione normale

Se i rendimenti $R\sim\mathcal{N}(\mu,\sigma^2)$:

$$\text{VaR}_{1-\alpha} = -(\mu + z_\alpha\,\sigma)\cdot W$$

dove $z_\alpha=\Phi^{-1}(\alpha)$ (negativo per $\alpha<0.5$) e $W$ è il valore del portafoglio.

Per $\alpha=1\%$: $z_{0.01}=-2.326$, quindi VaR $\approx 2.326\sigma W$ (per $\mu\approx 0$).

## Limiti del VaR

- Non è **subadditivo**: VaR(A+B) può superare VaR(A)+VaR(B) → non soddisfa le proprietà di una misura di rischio coerente.
- Non informa sulle perdite **oltre** il VaR.

## Expected Shortfall (ES) / CVaR

$$\text{ES}_{1-\alpha} = E[\text{perdita}\mid\text{perdita}>\text{VaR}_{1-\alpha}]$$

La **perdita media condizionale** dato che si supera il VaR. È una **misura di rischio coerente** (subadditiva).

Per una normale: $\text{ES}=\mu+\sigma\dfrac{\phi(z_\alpha)}{\alpha}$ (proporzionale alla densità normale).

## Rischio di mercato, credito e operativo

- **Rischio di mercato:** perdite da movimenti avversi dei prezzi.
- **Rischio di credito:** probabilità di default della controparte.
- **Rischio operativo:** errori umani, frodi, sistemi informatici.

---

## Esercizi

<details>
<summary>Esercizio 1 — VaR normale</summary>

Portafoglio: $W=1M€$, rendimento giornaliero $\mathcal{N}(0,1\%)$ (deviazione standard). Calcolare VaR al 99%.

**Soluzione.**

$\text{VaR}_{99\%}=2.326\cdot0.01\cdot1{,}000{,}000=\mathbf{€23{,}260}$.

Probabilità di perdere più di €23.260 in un giorno: $1\%$.

</details>

<details>
<summary>Esercizio 2 — ES</summary>

Con i dati dell'es. 1, calcolare l'ES al 99%.

**Soluzione.**

$\phi(2.326)\approx 0.0267$ (densità normale in $z=2.326$).

$\text{ES}=\sigma\cdot\dfrac{\phi(z_{0.01})}{0.01}\cdot W=0.01\cdot\dfrac{0.0267}{0.01}\cdot1{,}000{,}000=0.0267\cdot1{,}000{,}000=\mathbf{€26{,}700}$.

L'ES è maggiore del VaR — tiene conto della coda oltre il 99%.

</details>

<details>
<summary>Esercizio 3 — Non subadditività del VaR</summary>

Perché l'ES è preferibile al VaR nella gestione del rischio?

**Soluzione.**

**Subadditività:** ES(A+B) $\leq$ ES(A) + ES(B) → diversificare non può aumentare il rischio.

**Coda della distribuzione:** ES quantifica quanto si perde in media nei peggiori scenari, non solo un quantile.

In regolamentazione bancaria (Basilea III/IV), l'ES al 97.5% è la misura standard per il rischio di mercato.

</details>

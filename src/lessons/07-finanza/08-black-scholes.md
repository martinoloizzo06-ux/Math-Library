---
id: finanza-08-black-scholes
subject: finanza
topic_it: Derivati
topic_en: Derivatives
title_it: Modello di Black-Scholes per la valutazione delle opzioni
title_en: Black-Scholes option pricing model
level: purple
order: 8
source_book: "J.C. Hull, Options, Futures and Other Derivatives"
source_chapter: "Cap. 15 — Black-Scholes"
---

## Assunzioni del modello

1. Il prezzo del sottostante segue un **moto browniano geometrico (GBM)**: $dS=\mu S\,dt+\sigma S\,dW$.
2. Nessun dividendo fino alla scadenza.
3. Tasso privo di rischio $r$ costante.
4. Nessun costo di transazione; possibilità di vendita allo scoperto.
5. Volatilità $\sigma$ costante.

## Formula di Black-Scholes (1973)

**Call europea:**

$$C = S_0\Phi(d_1) - Ke^{-rT}\Phi(d_2)$$

**Put europea:**

$$P = Ke^{-rT}\Phi(-d_2) - S_0\Phi(-d_1)$$

dove:

$$d_1 = \frac{\ln(S_0/K)+(r+\sigma^2/2)T}{\sigma\sqrt{T}}, \qquad d_2=d_1-\sigma\sqrt{T}$$

$\Phi$ è la CDF della normale standard.

## Interpretazione

- $\Phi(d_2)$: probabilità risk-neutral che la call sia esercitata.
- $S_0\Phi(d_1)$: valore attuale del pagamento condizionale del sottostante.
- $Ke^{-rT}\Phi(d_2)$: valore attuale del pagamento dello strike.

## I Greci

Le sensibilità del prezzo dell'opzione:

| Greco | Definizione | Call | Put |
|---|---|---|---|
| **Delta** $\Delta$ | $\partial C/\partial S$ | $\Phi(d_1)>0$ | $\Phi(d_1)-1<0$ |
| **Gamma** $\Gamma$ | $\partial^2 C/\partial S^2$ | $>0$ | $>0$ |
| **Vega** $\mathcal{V}$ | $\partial C/\partial\sigma$ | $>0$ | $>0$ |
| **Theta** $\Theta$ | $\partial C/\partial T$ | tipicamente $<0$ | |
| **Rho** $\rho$ | $\partial C/\partial r$ | $>0$ | $<0$ |

---

## Esercizi

<details>
<summary>Esercizio 1 — Call europea</summary>

$S_0=100$, $K=100$, $r=5\%$, $\sigma=20\%$, $T=1$ anno. Calcolare $C$.

**Soluzione.**

$d_1=\dfrac{\ln(1)+(0.05+0.02)\cdot1}{0.20}=\dfrac{0.07}{0.20}=0.35$.

$d_2=0.35-0.20=0.15$.

$\Phi(0.35)\approx0.6368$, $\Phi(0.15)\approx0.5596$.

$C=100\cdot0.6368-100e^{-0.05}\cdot0.5596=63.68-53.26=\mathbf{10.45}$.

</details>

<details>
<summary>Esercizio 2 — Effetto della volatilità</summary>

Come cambia il prezzo della call quando $\sigma$ aumenta?

**Soluzione.**

Vega $>0$: maggiore volatilità → maggior possibilità che $S_T>K$ → **call più costosa**.

La volatilità implicita (IV) è la $\sigma$ che, inserita in B-S, dà il prezzo osservato sul mercato — riflette le aspettative del mercato.

</details>

<details>
<summary>Esercizio 3 — Delta hedging</summary>

Delta della call = 0.6368. Come costruire un portafoglio delta-neutro con 100 call corte?

**Soluzione.**

Per delta-hedging: comprare $\Delta\cdot N=0.6368\cdot100\approx 64$ azioni per ogni 100 call corte.

Il portafoglio (−100 call + 64 azioni) ha $\Delta_{\text{portafoglio}}=-100\cdot0.6368+64\cdot1\approx 0$ — insensibile a piccoli movimenti del sottostante.

</details>

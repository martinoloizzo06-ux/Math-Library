---
id: finanza-03-azioni
subject: finanza
topic_it: Strumenti finanziari
topic_en: Financial instruments
title_it: Azioni e modelli di valutazione
title_en: Stocks and valuation models
level: purple
order: 3
source_book: "Bodie, Kane & Marcus, Investments; J.C. Hull, Options, Futures and Other Derivatives"
source_chapter: "Cap. 18 — Azioni"
---

## Modello Dividend Discount (DDM)

Il prezzo dell'azione = valore attuale di tutti i dividendi futuri:

$$P_0 = \sum_{t=1}^\infty\frac{D_t}{(1+r)^t}$$

## Modello di Gordon (crescita costante)

Se i dividendi crescono a tasso costante $g$:

$$P_0 = \frac{D_1}{r-g}, \quad r>g$$

dove $D_1=D_0(1+g)$ è il prossimo dividendo e $r$ è il tasso di rendimento richiesto.

**Implica:** $r = \frac{D_1}{P_0}+g$ (rendimento da dividendo + tasso di crescita).

## Modello DDM a più stadi

Fase 1 ($t=1,\ldots,T$): crescita straordinaria $g_1$.

Fase 2 ($t>T$): crescita stabile $g_2$.

$$P_0 = \sum_{t=1}^T\frac{D_0(1+g_1)^t}{(1+r)^t}+\frac{P_T}{(1+r)^T}, \quad P_T=\frac{D_{T+1}}{r-g_2}$$

## Multipli di valutazione

**P/E (Price-to-Earnings):** $P/E=P_0/\text{EPS}$. Confronto tra aziende del settore.

**P/B (Price-to-Book):** rapporto tra capitalizzazione e patrimonio netto contabile.

**EV/EBITDA:** Enterprise Value / EBITDA — indipendente dalla struttura del capitale.

## Free Cash Flow to Equity (FCFE)

$$\text{FCFE} = \text{Utile netto}-\text{Investimenti netti}+\text{Variazione debito}$$

$P_0=\displaystyle\sum_{t=1}^\infty\dfrac{\text{FCFE}_t}{(1+r_e)^t}$ — più generale del DDM.

---

## Esercizi

<details>
<summary>Esercizio 1 — Modello di Gordon</summary>

Un'azione ha pagato dividendo $D_0=2€$, con tasso di crescita atteso $g=4\%$ e tasso richiesto $r=9\%$. Calcolare il prezzo.

**Soluzione.**

$D_1=2\cdot1.04=2.08€$.

$P_0=2.08/(0.09-0.04)=2.08/0.05=\mathbf{41.60€}$.

</details>

<details>
<summary>Esercizio 2 — Rendimento implicito</summary>

Un'azione quota €50. Dividendo atteso €2, crescita perpetua $3\%$. Qual è il tasso di rendimento implicito?

**Soluzione.**

$r=D_1/P_0+g=2/50+0.03=0.04+0.03=\mathbf{7\%}$.

</details>

<details>
<summary>Esercizio 3 — DDM a due stadi</summary>

Dividendo attuale $D_0=1€$. Crescita del $20\%$ per 3 anni, poi $4\%$ per sempre. $r=10\%$. Calcolare $P_0$.

**Soluzione.**

$D_1=1.2$, $D_2=1.44$, $D_3=1.728$.

$P_3=D_4/(r-g_2)=1.728\cdot1.04/0.06=29.952$.

$P_0=1.2/1.1+1.44/1.21+1.728/1.331+29.952/1.331$

$=1.091+1.190+1.298+22.503=\mathbf{26.08€}$.

</details>

---
id: finanza-01-tvm
subject: finanza
topic_it: Matematica finanziaria
topic_en: Financial mathematics
title_it: Valore del denaro nel tempo (TVM)
title_en: Time value of money (TVM)
level: purple
order: 1
source_book: "J.C. Hull, Options, Futures and Other Derivatives; Bodie, Kane & Marcus, Investments"
source_chapter: "Cap. 1–2 — TVM"
---

## Principio fondamentale

Un euro oggi vale più di un euro futuro: può essere investito e generare rendimento. Il **tasso di interesse** $r$ quantifica questa preferenza temporale.

## Capitalizzazione

**Interesse semplice:** $FV = PV(1+rT)$

**Interesse composto annuo:** $FV = PV(1+r)^T$

**Capitalizzazione continua:**

$$FV = PV\cdot e^{rT}$$

Con $m$ capitalizzazioni per anno: $FV=PV\left(1+\dfrac{r}{m}\right)^{mT}$.

Per $m\to\infty$: capitalizzazione continua $FV=PVe^{rT}$.

## Attualizzazione (discounting)

$$PV = \frac{FV}{(1+r)^T} = FV\cdot e^{-rT}$$

## Annualità

**Rendita perpetua:** flussi $C$ per sempre → $PV=C/r$.

**Rendita perpetua crescente (Gordon):** flussi che crescono al tasso $g$:

$$PV = \frac{C}{r-g} \quad (r>g)$$

**Rendita annua** per $T$ periodi:

$$PV = C\cdot\frac{1-(1+r)^{-T}}{r}$$

## Tassi di interesse

**Tasso nominale $r_{\text{nom}}$ con $m$ capitalizzazioni:** $r_{\text{eff}}=\left(1+\dfrac{r_{\text{nom}}}{m}\right)^m-1$.

**Tasso di rendimento lordo:** $\text{GR}=FV/PV$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Valore futuro e attuale</summary>

Investire €1000 al 5% annuo per 10 anni. Qual è il valore futuro? E il valore attuale di €1000 ricevuto tra 10 anni?

**Soluzione.**

FV $=1000\cdot(1.05)^{10}=1000\cdot1.6289\approx\mathbf{€1628.89}$.

PV $=1000/(1.05)^{10}=1000/1.6289\approx\mathbf{€613.91}$.

</details>

<details>
<summary>Esercizio 2 — Rendita perpetua</summary>

Un'azione paga dividendi di €2 per sempre. Con un tasso di attualizzazione del 8%, qual è il suo valore?

**Soluzione.**

$PV=C/r=2/0.08=\mathbf{€25}$.

</details>

<details>
<summary>Esercizio 3 — Capitalizzazione continua</summary>

€1000 investiti al 6% con capitalizzazione continua per 5 anni. Valore futuro?

**Soluzione.**

$FV=1000\cdot e^{0.06\cdot5}=1000\cdot e^{0.3}=1000\cdot1.3499\approx\mathbf{€1349.86}$.

Confronto con capitalizzazione annua: $1000\cdot(1.06)^5=1000\cdot1.3382\approx€1338.23$ — leggermente di meno.

</details>

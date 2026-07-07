---
id: finanza-02-obbligazioni
subject: finanza
topic_it: Strumenti finanziari
topic_en: Financial instruments
title_it: Obbligazioni e valutazione
title_en: Bonds and valuation
level: purple
order: 2
source_book: "J.C. Hull, Options, Futures and Other Derivatives; Bodie, Kane & Marcus, Investments"
source_chapter: "Cap. 14 — Obbligazioni"
---

## Obbligazione

Un'**obbligazione** (bond) è un titolo di debito che promette:
- **Cedole** $C$ pagate periodicamente (solitamente semestrale).
- **Valore nominale (face value)** $F$ restituito a scadenza $T$.

## Prezzo dell'obbligazione

Il prezzo è il valore attuale dei flussi futuri:

$$P = \sum_{t=1}^T\frac{C}{(1+y)^t}+\frac{F}{(1+y)^T} = C\cdot\frac{1-(1+y)^{-T}}{y}+\frac{F}{(1+y)^T}$$

dove $y$ è il **tasso di rendimento a scadenza (YTM)**.

## Relazione prezzo-rendimento

- $y<\text{cedola/nominale}$: $P>F$ (obbligazione **sopra la pari**).
- $y=\text{cedola/nominale}$: $P=F$ (obbligazione **alla pari**).
- $y>\text{cedola/nominale}$: $P<F$ (obbligazione **sotto la pari**).

**Inversa:** prezzo e rendimento si muovono in direzioni opposte.

## Duration

La **duration di Macaulay** misura la vita media ponderata dell'obbligazione:

$$D = \frac{\sum_{t=1}^T t\cdot\frac{C/(1+y)^t}{P}+T\cdot\frac{F/(1+y)^T}{P}}{1}$$

**Modified duration:** $D^*=D/(1+y)$.

**Approssimazione della sensibilità al tasso:**

$$\frac{\Delta P}{P}\approx -D^*\cdot\Delta y$$

## Convexità

Correzione di secondo ordine: $\dfrac{\Delta P}{P}\approx -D^*\Delta y+\dfrac{1}{2}\text{Conv}(\Delta y)^2$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Prezzo dell'obbligazione</summary>

Obbligazione: $F=1000€$, cedola annua $5\%$, scadenza 3 anni, YTM $=7\%$. Calcolare il prezzo.

**Soluzione.**

Cedola: $C=50€$.

$P=\dfrac{50}{1.07}+\dfrac{50}{1.07^2}+\dfrac{1050}{1.07^3}=46.73+43.67+857.64=\mathbf{948.04€}$

Sotto la pari perché YTM $>$ tasso cedola. ✓

</details>

<details>
<summary>Esercizio 2 — Duration e sensibilità</summary>

Un'obbligazione ha duration modificata $D^*=5$ anni. Se i tassi salgono di 50 bp (0.5%), quanto cambia il prezzo?

**Soluzione.**

$\dfrac{\Delta P}{P}\approx -5\cdot0.005=-0.025=-2.5\%$.

Il prezzo scende di circa $2.5\%$. Un'obbligazione con duration più lunga è più sensibile ai tassi.

</details>

<details>
<summary>Esercizio 3 — Zero coupon</summary>

Zero coupon bond: $F=1000€$, scadenza 5 anni, YTM $=4\%$. Calcolare il prezzo.

**Soluzione.**

$P=1000/(1.04)^5=1000/1.2167\approx\mathbf{821.93€}$.

La duration di Macaulay di uno ZCB è pari alla scadenza: $D=5$ anni.

</details>

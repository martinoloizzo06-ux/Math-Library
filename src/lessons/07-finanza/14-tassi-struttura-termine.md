---
id: finanza-14-tassi
subject: finanza
topic_it: Matematica finanziaria
topic_en: Financial mathematics
title_it: Tassi di interesse e struttura a termine
title_en: Interest rates and term structure
level: purple
order: 14
source_book: "J.C. Hull, Options, Futures and Other Derivatives; Bodie, Kane & Marcus, Investments"
source_chapter: "Cap. 4, 15 — Struttura a termine"
---

## Tassi spot e tassi forward

**Tasso spot $r(t)$:** tasso per un investimento/prestito oggi con scadenza $t$.

**Tasso forward $f(t_1,t_2)$:** tasso implicito per un investimento dal tempo $t_1$ al tempo $t_2$, fissato oggi.

Con capitalizzazione continua:

$$e^{r(t_2)t_2} = e^{r(t_1)t_1}\cdot e^{f(t_1,t_2)(t_2-t_1)}$$

$$f(t_1,t_2) = \frac{r(t_2)t_2-r(t_1)t_1}{t_2-t_1}$$

## Curva dei tassi (yield curve)

La **struttura a termine dei tassi** $r(t)$ come funzione della scadenza:
- **Normale (crescente):** tassi a lungo termine > breve termine (più comune).
- **Invertita:** breve > lungo (spesso precede recessioni).
- **Piatta:** tassi circa uguali su tutte le scadenze.

## Teorie della struttura a termine

**Expectations hypothesis:** i tassi forward sono unbiased predictors dei futuri tassi spot.

$$f(t,t+1)\approx E[r_{t+1}]$$

**Liquidity preference theory:** gli investitori richiedono un premio per i titoli a lunga scadenza (duration risk) → curva normalmente crescente.

**Market segmentation theory:** i mercati a diversa scadenza sono separati; domanda/offerta locale determina i tassi.

## Duration e gestione del rischio di tasso

Per un portafoglio obbligazionario, la duration media ponderata misura la sensibilità al tasso:

$$\text{Duration}_p = \sum_i w_i D_i$$

**Immunizzazione:** la duration del portafoglio attivi = duration dei passivi → immunizzato contro variazioni parallele della curva.

---

## Esercizi

<details>
<summary>Esercizio 1 — Tasso forward</summary>

$r(1)=4\%$, $r(2)=5\%$ (continuamente composti). Calcolare $f(1,2)$.

**Soluzione.**

$f(1,2)=\dfrac{5\%\cdot2-4\%\cdot1}{2-1}=\dfrac{10\%-4\%}{1}=\mathbf{6\%}$.

Il mercato "prezza" un tasso del 6% per il secondo anno.

</details>

<details>
<summary>Esercizio 2 — Valore dei bond con curva non flat</summary>

Zero coupon bond a 2 anni, $F=1000€$. Curva: $r(2)=5\%$ c.c. Calcolare il prezzo.

**Soluzione.**

$P=1000\,e^{-0.05\cdot2}=1000\,e^{-0.10}=1000\cdot0.9048=\mathbf{904.8€}$.

</details>

<details>
<summary>Esercizio 3 — Segnale della curva invertita</summary>

Perché una curva dei tassi invertita spesso precede le recessioni?

**Soluzione.**

Curva invertita implica tassi a breve > lungo termine. Questo accade quando:
- La banca centrale ha alzato aggressivamente i tassi (politica restrittiva).
- Il mercato si aspetta un taglio dei tassi in futuro (attesa di rallentamento/recessione).

Storicamente, curve invertite hanno preceduto tutte le principali recessioni USA. Non è una previsione certa, ma un indicatore anticipatore affidabile.

</details>

---
id: econometria-11-did-rdd
subject: econometria
topic_it: Identificazione causale
topic_en: Causal identification
title_it: Differenze nelle differenze e RDD
title_en: Difference-in-differences and RDD
level: purple
order: 11
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 13 — Metodi quasi-sperimentali"
---

## Differenze nelle differenze (DiD)

**Contesto:** un trattamento viene assegnato al gruppo trattato in un momento $t^*$. Il gruppo di controllo non riceve il trattamento.

**Assunzione chiave (trend paralleli):** in assenza del trattamento, trattati e controlli avrebbero avuto lo stesso trend (non necessariamente lo stesso livello).

**Stimatore DiD:**

$$\hat\tau_{\text{DiD}} = (\bar{y}_{\text{tratt,post}}-\bar{y}_{\text{tratt,pre}})-(\bar{y}_{\text{contr,post}}-\bar{y}_{\text{contr,pre}})$$

**Regressione DiD:**

$$y_{it}=\alpha+\beta_1\text{post}_t+\beta_2\text{tratt}_i+\delta(\text{post}_t\times\text{tratt}_i)+u_{it}$$

$\delta$: l'effetto causale del trattamento (ATT — Average Treatment effect on the Treated).

## Regression Discontinuity Design (RDD)

**Contesto:** il trattamento è assegnato in base a se una variabile continua $x_i$ (running variable) supera una soglia $c$.

**Ipotesi:** vicino alla soglia $c$, essere appena sopra o appena sotto è "quasi casuale".

**Stima RDD:**

$$\hat\tau_{\text{RDD}} = \lim_{x\to c^+}E[y\mid x]-\lim_{x\to c^-}E[y\mid x]$$

Si stima il salto nella regressione non parametrica di $y$ su $x$ alla soglia $c$.

**Fuzzy RDD:** non tutti coloro sopra la soglia vengono trattati → si usa la soglia come strumento (IV).

---

## Esercizi

<details>
<summary>Esercizio 1 — Calcolo DiD</summary>

Medie: trattati pre=100, trattati post=120; controlli pre=90, controlli post=105. Calcolare DiD.

**Soluzione.**

Variazione trattati: $120-100=20$.

Variazione controlli: $105-90=15$.

$\hat\tau_{\text{DiD}}=20-15=\mathbf{5}$.

Il trattamento ha aumentato l'outcome di 5 unità in media (al netto del trend comune).

</details>

<details>
<summary>Esercizio 2 — Assunzione di trend paralleli</summary>

Come testare (parzialmente) l'assunzione di trend paralleli?

**Soluzione.**

Usare dati **pre-trattamento** di più periodi: verificare che i trend di trattati e controlli siano paralleli prima del trattamento.

Se i trend divergevano già prima, l'assunzione è dubbia e il DiD potrebbe essere distorto.

Formalmente: includere interazioni anno×trattamento nel pre-periodo e testare che siano non significative (placebo test).

</details>

<details>
<summary>Esercizio 3 — RDD: validità</summary>

Come verificare che la variabile di running sia continua alla soglia (no manipolazione)?

**Soluzione.**

**Test di densità (McCrary):** testare che la densità della running variable sia continua alla soglia. Se c'è un "mucchio" di osservazioni appena sopra la soglia, potrebbe esserci manipolazione (le persone si posizionano strategicamente).

**Covariate test:** verificare che le covariate pre-trattamento siano continue alla soglia — se sono discontinue, suggerisce selezione.

</details>

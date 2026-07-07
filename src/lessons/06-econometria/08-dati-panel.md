---
id: econometria-08-panel
subject: econometria
topic_it: Dati panel
topic_en: Panel data
title_it: Modelli per dati panel — effetti fissi e casuali
title_en: Panel data models — fixed and random effects
level: purple
order: 8
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 13–14 — Dati panel"
---

## Struttura dei dati panel

Dati panel: $N$ unità (individui, imprese, paesi) osservate in $T$ periodi.

$$y_{it} = \alpha_i + \mathbf{x}_{it}'\boldsymbol\beta + u_{it}, \quad i=1,\ldots,N,\; t=1,\ldots,T$$

- $\alpha_i$: **effetto individuale non osservato** — eterogeneità non osservabile stabile nel tempo.

## Modello a effetti fissi (FE)

$\alpha_i$ è trattato come **parametro fisso** da stimare — correlato con i regressori.

**Stimatore within:** eliminare $\alpha_i$ sottraendo le medie individuali:

$$y_{it}-\bar{y}_i = (\mathbf{x}_{it}-\bar{\mathbf{x}}_i)'\boldsymbol\beta+(u_{it}-\bar{u}_i)$$

OLS sull'equazione trasformata = **stimatore FE (within)**.

**Vantaggi:** controlla per qualsiasi eterogeneità non osservata invariante nel tempo.

**Svantaggio:** non identifica l'effetto di variabili invarianti nel tempo (es. genere, razza).

## Modello a effetti casuali (RE)

$\alpha_i\sim\mathcal{N}(0,\sigma_\alpha^2)$ — **variabile aleatoria** non correlata con i regressori.

Stimatore GLS (Feasible GLS). Più efficiente di FE se l'ipotesi di non correlazione è soddisfatta.

## Test di Hausman

$$H = (\hat{\boldsymbol\beta}_{FE}-\hat{\boldsymbol\beta}_{RE})^T\left[\hat{V}_{FE}-\hat{V}_{RE}\right]^{-1}(\hat{\boldsymbol\beta}_{FE}-\hat{\boldsymbol\beta}_{RE})\sim\chi^2(k)$$

Rifiutare $H_0$ (RE) → usare FE (c'è correlazione tra $\alpha_i$ e $\mathbf{x}_{it}$).

## First-difference (FD)

Alternativa a FE: differenziare nel tempo: $\Delta y_{it}=\Delta\mathbf{x}_{it}'\boldsymbol\beta+\Delta u_{it}$.

Equivalente a FE con $T=2$; preferibile quando $u_{it}$ segue un random walk.

---

## Esercizi

<details>
<summary>Esercizio 1 — Effetti fissi</summary>

$N=3$ individui, $T=2$. Come il within transformation elimina $\alpha_i$?

**Soluzione.**

Per ogni individuo $i$: $\bar{y}_i=(y_{i1}+y_{i2})/2$, $\bar{x}_i=(x_{i1}+x_{i2})/2$, $\bar{\alpha}_i=\alpha_i$.

Sottraendo: $(y_{it}-\bar{y}_i)=(x_{it}-\bar{x}_i)\beta+(u_{it}-\bar{u}_i)$.

$\alpha_i$ scompare dall'equazione — non serve stimarlo direttamente.

</details>

<details>
<summary>Esercizio 2 — FE vs RE</summary>

In uno studio sul salario con $\alpha_i$= "abilità individuale": FE o RE?

**Soluzione.**

L'abilità $\alpha_i$ è probabilmente correlata con l'istruzione (i più abili studiano di più): **usare FE** per eliminare il bias.

Con FE, l'effetto dell'istruzione è identificato dalle variazioni **nel tempo** per lo stesso individuo, controllando per $\alpha_i$.

</details>

<details>
<summary>Esercizio 3 — Variabili invarianti nel tempo</summary>

Nel modello FE, è possibile stimare l'effetto del genere (invariante nel tempo)?

**Soluzione.**

**No.** Il genere non varia nel tempo per ogni individuo, quindi viene eliminato dalla within transformation insieme ad $\alpha_i$.

Per stimare l'effetto del genere con dati panel: usare RE (se giustificato), o metodi come il Mundlak approach o l'estimatore di Hausman-Taylor.

</details>

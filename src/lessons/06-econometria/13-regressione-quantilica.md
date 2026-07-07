---
id: econometria-13-quantile
subject: econometria
topic_it: Modelli non lineari
topic_en: Non-linear models
title_it: Regressione quantilica
title_en: Quantile regression
level: purple
order: 13
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. — Regressione quantilica"
---

## Motivazione

La regressione OLS stima $E[y\mid\mathbf{x}]$ — la **media condizionale**. Ma spesso interessa:
- L'effetto eterogeno: diverso nei diversi punti della distribuzione di $y$.
- Distribuzione di $y$ con code pesanti (es. salari, prezzi immobiliari).
- La **mediana** o altri quantili, più robusti agli outlier.

## Quantile condizionale

Il $\tau$-esimo quantile condizionale: $Q_\tau(y\mid\mathbf{x})$ è il valore $q$ tale che $P(y\leq q\mid\mathbf{x})=\tau$.

**Modello lineare quantilico:** $Q_\tau(y\mid\mathbf{x})=\mathbf{x}'\boldsymbol\beta(\tau)$.

## Stima

Lo stimatore QR minimizza la **loss function asimmetrica** (check function):

$$\hat{\boldsymbol\beta}(\tau) = \arg\min_{\boldsymbol\beta}\sum_{i=1}^n\rho_\tau(y_i-\mathbf{x}_i'\boldsymbol\beta)$$

$$\rho_\tau(u) = u(\tau - \mathbf{1}\{u<0\}) = \begin{cases}\tau u & u\geq 0\\ (1-\tau)(-u) & u<0\end{cases}$$

Per $\tau=0.5$: minimizza la somma dei residui assoluti → **regressione LAD (mediana)**.

## Proprietà

- Non richiede assunzioni sulla distribuzione di $u$.
- Robusto agli outlier in $y$.
- Può catturare effetti eterogeni: $\hat\beta_1(\tau)$ varia con $\tau$.

## Inferenza

Standard error via **bootstrap** o formula analitica (Koenker-Bassett).

---

## Esercizi

<details>
<summary>Esercizio 1 — Interpretazione</summary>

Regressione quantilica dei salari su anni di istruzione: $\hat\beta_1(0.1)=0.05$, $\hat\beta_1(0.9)=0.12$. Interpretare.

**Soluzione.**

Per chi è già al 10° percentile dei salari: un anno in più di istruzione è associato al 5% di aumento.

Per chi è al 90° percentile: l'aumento associato è del 12%.

L'effetto dell'istruzione è **eterogeno**: chi è in cima alla distribuzione beneficia di più (compatibile con differenze di abilità o reti di contatti).

</details>

<details>
<summary>Esercizio 2 — OLS vs mediana</summary>

Dati: $y=(1,2,3,4,100)$, $x=(1,2,3,4,5)$. Perché la mediana è preferibile alla media?

**Soluzione.**

L'outlier $y_5=100$ distorce fortemente la media (OLS). La regressione LAD (mediana, $\tau=0.5$) è insensibile a quell'outlier, producendo una stima più rappresentativa per i dati "tipici".

Con dati a coda pesante o outlier influenti, la regressione della mediana è più robusta.

</details>

<details>
<summary>Esercizio 3 — Check function</summary>

Verificare che minimizzare $\sum\rho_{0.5}(u_i)$ è equivalente a minimizzare $\sum|u_i|$.

**Soluzione.**

$\rho_{0.5}(u)=\dfrac{|u|}{2}$ per ogni $u$ (poiché $0.5\cdot u$ per $u\geq 0$ e $0.5\cdot(-u)$ per $u<0$).

$\sum\rho_{0.5}(u_i)=\dfrac{1}{2}\sum|u_i|$: minimizzare questa espressione equivale a minimizzare $\sum|u_i|$. ✓

</details>

---
id: econometria-15-previsione
subject: econometria
topic_it: Serie temporali
topic_en: Time series
title_it: Previsione nelle serie temporali
title_en: Forecasting in time series
level: purple
order: 15
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 18 — Previsione"
---

## Obiettivo della previsione

Stimare $E[y_{T+h}\mid\mathcal{F}_T]$: il valore atteso di $y$ all'orizzonte $h$ dato tutto ciò che si osserva fino al tempo $T$.

**Previsione puntuale:** $\hat{y}_{T+h|T}=E[y_{T+h}\mid\mathcal{F}_T]$.

**Intervallo di previsione:** include l'incertezza sia del parametro che dell'errore futuro.

## Previsione con AR(p)

Per AR(1): $y_t=c+\phi y_{t-1}+\varepsilon_t$.

**Orizzonte 1:** $\hat{y}_{T+1|T}=c+\hat\phi y_T$.

**Orizzonte $h$:** $\hat{y}_{T+h|T}=\mu+\hat\phi^h(y_T-\mu)$ dove $\mu=c/(1-\phi)$.

Per $|\phi|<1$: le previsioni convergono alla media $\mu$ quando $h\to\infty$.

## Valutazione della previsione

**MAE** (Mean Absolute Error): $\dfrac{1}{H}\sum_{h=1}^H|y_{T+h}-\hat{y}_{T+h|T}|$.

**RMSE** (Root Mean Squared Error): $\sqrt{\dfrac{1}{H}\sum(y_{T+h}-\hat{y}_{T+h|T})^2}$.

**MAPE** (Mean Absolute Percentage Error): $\dfrac{100}{H}\sum\left|\dfrac{y_{T+h}-\hat{y}_{T+h|T}}{y_{T+h}}\right|\%$.

## Confronto tra modelli

**Test di Diebold-Mariano:** testa se due modelli hanno la stessa accuratezza previsionale.

**Validazione out-of-sample:** stimare il modello su un sottoinsieme (training) e valutare su dati non usati nella stima (test). Evita l'overfitting.

## Metodi più sofisticati

- **Lisciamento esponenziale** (Holt-Winters): peso esponenzialmente decrescente alle osservazioni passate.
- **ARIMA(p,d,q):** ARMA applicato alla $d$-esima differenza (per serie non stazionarie).
- **Modelli GARCH:** previsione della volatilità (varianza condizionale).

---

## Esercizi

<details>
<summary>Esercizio 1 — Previsione AR(1)</summary>

$y_t=1+0.7y_{t-1}+\varepsilon_t$, $y_{100}=10$. Calcolare $\hat{y}_{101|100}$ e $\hat{y}_{102|100}$.

**Soluzione.**

$\hat{y}_{101|100}=1+0.7\cdot10=8$.

$\hat{y}_{102|100}=1+0.7\cdot\hat{y}_{101|100}=1+0.7\cdot8=6.6$.

Media di lungo periodo: $\mu=1/(1-0.7)=10/3\approx 3.33$. Le previsioni convergono verso di essa.

</details>

<details>
<summary>Esercizio 2 — RMSE</summary>

Previsioni: $\hat{y}=\{5,7,6\}$, valori reali: $y=\{4,8,5\}$. Calcolare RMSE e MAE.

**Soluzione.**

Errori: $-1, 1, -1$. Errori quadratici: $1, 1, 1$.

RMSE $=\sqrt{(1+1+1)/3}=1$.

MAE $=(1+1+1)/3=1$.

</details>

<details>
<summary>Esercizio 3 — Out-of-sample</summary>

Perché la valutazione in-sample dell'$R^2$ non è sufficiente per valutare le previsioni?

**Soluzione.**

L'$R^2$ in-sample migliora sempre aggiungendo predittori (anche irrilevanti): un modello con troppi parametri si adatta perfettamente ai dati di stima ma **non generalizza** a nuovi dati (overfitting).

La valutazione out-of-sample (hold-out, cross-validation) misura la reale capacità previsionale su dati non usati nella stima, penalizzando naturalmente la complessità eccessiva.

</details>

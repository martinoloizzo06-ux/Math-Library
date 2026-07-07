---
id: econometria-04-autocorrelazione
subject: econometria
topic_it: Violazioni del CLRM
topic_en: CLRM violations
title_it: Autocorrelazione dei residui
title_en: Autocorrelation of residuals
level: purple
order: 4
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 12 — Autocorrelazione"
---

## Definizione

**Autocorrelazione:** $\text{Cov}(u_i,u_j)\neq 0$ per $i\neq j$ — violazione di OLS.5 (o più in generale dell'ipotesi di errori non correlati).

Comune nei dati in **serie storica**: l'errore oggi dipende dall'errore ieri.

**Processo AR(1) per gli errori:**

$$u_t = \rho u_{t-1} + \varepsilon_t, \quad |\rho|<1, \quad \varepsilon_t\sim\text{i.i.d.}(0,\sigma_\varepsilon^2)$$

## Conseguenze

- OLS è **non distorto e consistente** (se OLS.4 è valida).
- **Non è BLUE** — i GLS (di Cochrane-Orcutt, Prais-Winsten) sono più efficienti.
- Gli SE classici sono **distorti** (spesso sottostimati per $\rho>0$) → test invalidi.

## Rilevamento

**Test di Durbin-Watson:**

$$DW = \frac{\sum_{t=2}^n(\hat{u}_t-\hat{u}_{t-1})^2}{\sum_{t=1}^n\hat{u}_t^2} \approx 2(1-\hat\rho)$$

- $DW\approx 2$: no autocorrelazione.
- $DW<2$: autocorrelazione positiva.
- $DW>2$: autocorrelazione negativa.

**Test di Breusch-Godfrey:** più generale, testa per autocorrelazione di ordine $p$.

## Correzione

**SE di Newey-West (HAC):** standard error robusti a eteroschedasticità e autocorrelazione.

**GLS/FGLS:** trasformare il modello usando la struttura AR(1) stimata.

---

## Esercizi

<details>
<summary>Esercizio 1 — Durbin-Watson</summary>

Residui OLS: $\hat{u}_t=0.5, -0.3, 0.8, -0.6, 0.4$. Calcolare $DW$ approssimativamente.

**Soluzione.**

$\sum\hat{u}_t^2=0.25+0.09+0.64+0.36+0.16=1.50$.

$\sum(\hat{u}_t-\hat{u}_{t-1})^2=(0.8)^2+(1.1)^2+(1.4)^2+(1.0)^2=0.64+1.21+1.96+1.00=4.81$.

$DW=4.81/1.50\approx 3.2$.

$DW>2$: indicazione di autocorrelazione **negativa**.

</details>

<details>
<summary>Esercizio 2 — Effetto sull'inferenza</summary>

Con $\rho>0$ e SE classici, i test t tendono ad essere troppo significativi. Perché?

**Soluzione.**

Con autocorrelazione positiva, le osservazioni contengono **informazione ridondante** — il campione è "effettivamente più piccolo" di $n$.

Gli SE classici ignorano questa ridondanza e risultano **troppo piccoli**: sovrastimano la precisione, gonfiando le statistiche $t$ e causando più rifiuti di $H_0$ del dovuto.

</details>

<details>
<summary>Esercizio 3 — Prais-Winsten</summary>

Con $AR(1)$ stimato $\hat\rho=0.7$, come trasformare il modello $y_t=\beta_0+\beta_1 x_t+u_t$?

**Soluzione.**

Quasi-differenziazione: moltiplicare l'equazione al tempo $t-1$ per $\hat\rho$ e sottrarre:

$$y_t-0.7y_{t-1} = \beta_0(1-0.7)+\beta_1(x_t-0.7x_{t-1})+(u_t-0.7u_{t-1})$$

Il termine $\varepsilon_t=u_t-0.7u_{t-1}$ è (approssimativamente) i.i.d. — si può applicare OLS al modello trasformato.

</details>

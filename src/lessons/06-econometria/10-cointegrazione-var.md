---
id: econometria-10-cointegrazione
subject: econometria
topic_it: Serie temporali
topic_en: Time series
title_it: Cointegrazione e modelli VAR
title_en: Cointegration and VAR models
level: purple
order: 10
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 18 — Cointegrazione e VAR"
---

## Cointegrazione

Due serie non stazionarie $y_t$ e $x_t$ (entrambe $I(1)$) sono **cointegrate** se esiste $\beta$ tale che $y_t-\beta x_t$ è stazionaria $I(0)$.

**Interpretazione:** anche se le serie vangano individualmente, tendono a muoversi insieme nel lungo periodo (relazione di equilibrio di lungo periodo).

**Esempi:** prezzi di azioni dello stesso settore, tassi di interesse in paesi diversi, consumi e reddito.

**Test di Engle-Granger:** verificare se i residui della regressione $y_t=\alpha+\beta x_t+e_t$ sono $I(0)$ (test ADF sui residui).

## Modello a correzione dell'errore (ECM)

Se $y_t$ e $x_t$ sono cointegrate con vettore $(1,-\beta)$:

$$\Delta y_t = \alpha_0 + \alpha_1\Delta x_t + \lambda(\underbrace{y_{t-1}-\beta x_{t-1}}_{\text{termine EC}})+u_t$$

- $\lambda<0$: velocità di aggiustamento verso l'equilibrio.
- Breve termine ($\Delta x_t$) + lungo termine (termine EC).

## Modello VAR (Vector Autoregression)

Per $k$ variabili endogene, il VAR(p) è:

$$\mathbf{y}_t = \mathbf{c} + A_1\mathbf{y}_{t-1}+\cdots+A_p\mathbf{y}_{t-p}+\boldsymbol\varepsilon_t$$

Ogni equazione si stima con OLS separatamente (consistente se il sistema è stazionario).

**Funzioni impulso-risposta (IRF):** come un'innovazione in una variabile si propaga nel sistema nel tempo.

**Decomposizione della varianza:** quanta variabilità di $y_j$ è spiegata da shocks alle varie variabili.

---

## Esercizi

<details>
<summary>Esercizio 1 — Test di cointegrazione</summary>

$y_t$ e $x_t$ sono entrambe $I(1)$. Stimo $y_t=2+1.5x_t+\hat{e}_t$ e ottengo residui con test ADF: $t=-3.8$, valore critico $-3.4$. Sono cointegrate?

**Soluzione.**

$t=-3.8 < -3.4$: si rifiuta la radice unitaria nei residui.

I residui sono stazionari → $y_t$ e $x_t$ sono **cointegrate**. La relazione di lungo periodo è $y_t\approx 2+1.5x_t$.

</details>

<details>
<summary>Esercizio 2 — ECM</summary>

ECM stimato: $\Delta y_t=0.2\Delta x_t-0.3(y_{t-1}-1.5x_{t-1})+u_t$. Interpretare $\lambda=-0.3$.

**Soluzione.**

Ogni periodo, il $30\%$ dello squilibrio viene corretto. Se la deviazione dall'equilibrio di lungo periodo è 1 unità, $y$ si avvicina di $0.3$ unità nel periodo successivo.

Tempo di aggiustamento approssimativo: $1/|\lambda|=1/0.3\approx 3.3$ periodi.

</details>

<details>
<summary>Esercizio 3 — VAR vs equazioni singole</summary>

Perché usare un VAR invece di regressioni singole?

**Soluzione.**

Il VAR cattura la **interdipendenza dinamica** tra variabili: oggi $y$ dipende da $x$ passato, e viceversa (simultaneità/feedback).

Regressioni singole ignorano questo feedback e possono essere mal specificate. Il VAR è utile per:
- Previsione (sfrutta tutta l'informazione incrociata).
- Analisi degli shocks (IRF, decomposizione della varianza).
- Nessuna ipotesi a priori su quale variabile è esogena.

</details>

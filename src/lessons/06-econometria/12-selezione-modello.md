---
id: econometria-12-selezione-modello
subject: econometria
topic_it: Regressione OLS
topic_en: OLS regression
title_it: Selezione del modello e criteri informativi
title_en: Model selection and information criteria
level: purple
order: 12
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 6 — Specificazione del modello"
---

## Il problema del bias-varianza in econometria

Aggiungere regressori:
- Riduce il **bias** (se i regressori aggiuntivi sono rilevanti).
- Aumenta la **varianza** degli stimatori (più parametri da stimare con gli stessi dati).

Omettere regressori rilevanti → bias. Includere irrilevanti → inefficienza.

## Criteri informativi

**AIC (Akaike Information Criterion):**

$$\text{AIC} = -2\ell + 2k$$

**BIC (Bayesian Information Criterion / Schwarz):**

$$\text{BIC} = -2\ell + k\ln n$$

Si preferisce il modello con **AIC/BIC minimo**. BIC penalizza di più i modelli complessi (per $n>7$), tende a selezionare modelli più parsimoniosi.

In regressione lineare: $-2\ell\approx n\ln(\text{RSS}/n)$, quindi:

$$\text{AIC}\approx n\ln\!\left(\frac{\text{RSS}}{n}\right)+2k, \qquad \text{BIC}\approx n\ln\!\left(\frac{\text{RSS}}{n}\right)+k\ln n$$

## Selezione stepwise

- **Forward selection:** si parte dal modello vuoto e si aggiungono variabili una alla volta.
- **Backward elimination:** si parte dal modello completo e si rimuovono variabili.
- **Stepwise:** combinazione di forward e backward.

**Problema:** la selezione stepwise causa inflazione del $R^2$ e degli t, e invalida l'inferenza standard.

## Test di specificazione

**Test RESET (Ramsey):** testa non linearità aggiungendo $\hat{y}^2$, $\hat{y}^3$. $F$ significativo → specificazione errata.

**Test di Davidson-MacKinnon:** confronto non annidato tra due specificazioni alternative.

---

## Esercizi

<details>
<summary>Esercizio 1 — AIC vs BIC</summary>

Modello A ($k=3$): $\ell=-50$, $n=100$. Modello B ($k=5$): $\ell=-47$.

**Soluzione.**

AIC A: $-2(-50)+2\cdot3=100+6=106$.

AIC B: $94+10=104$. AIC preferisce **B** (minore).

BIC A: $100+3\ln100=100+13.8=113.8$.

BIC B: $94+5\ln100=94+23.0=117$. BIC preferisce **A** (minore).

I due criteri divergono: BIC penalizza di più i 2 parametri aggiuntivi.

</details>

<details>
<summary>Esercizio 2 — Specificazione corretta</summary>

Il vero modello è $y=\beta_0+\beta_1 x+\beta_2 x^2+u$ ma si stima $y=\alpha_0+\alpha_1 x+v$. Conseguenze?

**Soluzione.**

Variabile omessa ($x^2$ è correlata con $x$): $\hat\alpha_1$ è **distorto** — cattura sia l'effetto lineare che quello quadratico.

Il test RESET di Ramsey dovrebbe rilevare questa mal-specificazione: aggiungendo $\hat{y}^2$ al modello, la statistica $F$ sarebbe significativa.

</details>

<details>
<summary>Esercizio 3 — Problema dei confronti multipli</summary>

Con selezione stepwise su 20 variabili, quante potrebbero risultare "significative" per caso?

**Soluzione.**

Anche se nessuna variabile è rilevante, con $\alpha=0.05$ ci si aspetta $20\cdot0.05=1$ variabile falsamente significativa.

Con stepwise su molte variabili, la probabilità di almeno un falso positivo è alta. La soglia $p<0.05$ non controlla più l'errore del primo tipo al 5% — bisogna usare correzioni (Bonferroni, FDR) o metodi di penalizzazione (LASSO).

</details>

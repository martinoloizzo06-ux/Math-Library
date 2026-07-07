---
id: econometria-05-iv
subject: econometria
topic_it: Identificazione causale
topic_en: Causal identification
title_it: Variabili strumentali (IV)
title_en: Instrumental variables (IV)
level: purple
order: 5
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 15 — Variabili strumentali"
---

## Il problema dell'endogeneità

OLS.4 richiede $E[u\mid x]=0$ (esogeneità). Si ha **endogeneità** quando:
- **Variabile omessa** correlata con $x$: $\text{Cov}(x,u)\neq 0$.
- **Causalità inversa (simultaneità):** $y$ causa $x$ e viceversa.
- **Errori di misura** in $x$.

Conseguenza: lo stimatore OLS è **inconsistente** — non converge a $\beta$ vero anche per $n\to\infty$.

## Variabile strumentale $z$

Uno **strumento** $z$ per $x$ deve soddisfare:
1. **Rilevanza:** $\text{Cov}(z,x)\neq 0$ — $z$ correla con il regressore endogeno.
2. **Esclusione (esogeneità):** $E[zu]=0$ — $z$ non correla con l'errore; $z$ non ha effetto diretto su $y$.

## Stimatore IV

Con un solo regressore endogeno e uno strumento:

$$\hat\beta_{\text{IV}} = \frac{\text{Cov}(z,y)}{\text{Cov}(z,x)}$$

Consistente ($\hat\beta_{\text{IV}}\xrightarrow{P}\beta$) anche con endogeneità.

## 2SLS (Two-Stage Least Squares)

Con più strumenti e/o più endogene:

**Primo stadio:** regressione di $x$ su $z$ (e controlli): $\hat{x}=\Pi_0+\Pi_1 z+\cdots$

**Secondo stadio:** regressione di $y$ su $\hat{x}$ (e controlli).

**Condizione di rango:** strumenti rilevanti → test $F$ del primo stadio $>10$ (regola pratica).

## Test di Hausman

Testa se OLS e IV differiscono significativamente. Se sì, c'è endogeneità e IV è preferibile.

---

## Esercizi

<details>
<summary>Esercizio 1 — Validità dello strumento</summary>

Stimare l'effetto causale dell'istruzione sul salario, usando la prossimità a un college come strumento. Valutare le condizioni.

**Soluzione.**

**Rilevanza:** chi abita vicino a un college studia di più (verificabile con dati). ✓ (plausibile)

**Esclusione:** la prossimità al college non dovrebbe influire sul salario direttamente (solo tramite l'istruzione). Potenziale violazione: le aree con college hanno mercati del lavoro migliori → $\text{Cov}(z,u)\neq 0$.

Bisogna argomentare e testare la validità dell'esclusione (test di sovraidentificazione se ci sono più strumenti).

</details>

<details>
<summary>Esercizio 2 — Strumenti deboli</summary>

Primo stadio: $F=3.5$. Cosa implica per la stima 2SLS?

**Soluzione.**

$F<10$: strumento **debole** — $z$ correla poco con $x$.

Con strumenti deboli: lo stimatore 2SLS è distorto (verso OLS), gli SE sono gonfiati, e l'inferenza classica non è affidabile. Usare metodi robusti a strumenti deboli (es. test di Anderson-Rubin).

</details>

<details>
<summary>Esercizio 3 — Test di Hausman</summary>

OLS: $\hat\beta_1=0.4$, SE$=0.05$. IV: $\hat\beta_1=0.7$, SE$=0.12$. La differenza è significativa?

**Soluzione.**

Statistica di Hausman: $H=\dfrac{(0.7-0.4)^2}{0.12^2-0.05^2}=\dfrac{0.09}{0.0144-0.0025}=\dfrac{0.09}{0.0119}\approx 7.56$.

$\chi^2_{1,0.05}=3.84$. Poiché $7.56>3.84$: **rifiutare** l'esogeneità. L'endogeneità è confermata; usare IV.

</details>

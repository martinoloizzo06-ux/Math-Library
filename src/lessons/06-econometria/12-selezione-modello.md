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
stato: da-rielaborare
---

## 1. Intuizione — analogia concreta e perché si studia

Immagina di dover prevedere il voto agli esami di un gruppo di studenti. Potresti usare solo le ore di studio, oppure aggiungere anche il numero di ore di sonno, il caffè bevuto, la distanza da casa all'università, il colore della penna... Un modello con 50 variabili si adatterà perfettamente ai dati su cui lo stimi, ma probabilmente prevederà malissimo per nuovi studenti — ha "memorizzato" i dati invece di imparare le relazioni vere.

Questo è il **trade-off bias-varianza**: aggiungere variabili riduce il bias (cattura più effetti reali) ma aumenta la varianza (le stime diventano meno precise perché si dividono i dati tra più parametri). Il modello troppo semplice ha alto bias, quello troppo complesso ha alta varianza. Il modello ottimo è nel mezzo.

I **criteri informativi** — AIC, BIC, $R^2$ aggiustato — sono strumenti che penalizzano automaticamente la complessità del modello. Invece di scegliere in base a chi ha l'$R^2$ più alto (che aumenta sempre aggiungendo variabili, anche inutili), questi criteri bilanciano la bontà di adattamento con il numero di parametri stimati.

La **regolarizzazione** (LASSO, Ridge, Elastic Net) è una famiglia di metodi moderni che va oltre: invece di scegliere o escludere variabili dicotomicamente, restringono i coefficienti verso zero in modo continuo. LASSO manda a zero i coefficienti irrilevanti automaticamente (selezione delle variabili), mentre Ridge li riduce tutti proporzionalmente (utile quando molte variabili sono correlate). La **cross-validation** è il gold standard per valutare la vera capacità previsionale di un modello su dati non usati nella stima.

## 2. Prerequisiti

- Regressione OLS: $R^2$, $RSS$, $TSS$, $k$ (numero di parametri)
- Massima verosimiglianza e log-verosimiglianza $\ell(\hat{\boldsymbol\beta})$
- Bias e varianza di uno stimatore
- Concetto di overfitting e underfitting
- Distribuzione F e test di significatività congiunta
- Algebra matriciale: norma L1 ($\lvert\cdot\rvert$) e L2 ($\lVert\cdot\rVert^2$)

## 3. Teoria

### 3.1 Il trade-off bias-varianza

Data la relazione vera $y = f(\mathbf{x}) + \varepsilon$, l'errore atteso quadratico di previsione (MSPE) si decompone in:

$$E[(y - \hat f(\mathbf{x}))^2] = \underbrace{[f(\mathbf{x}) - E[\hat f(\mathbf{x})]]^2}_{\text{Bias}^2} + \underbrace{\text{Var}(\hat f(\mathbf{x}))}_{\text{Varianza}} + \underbrace{\sigma_\varepsilon^2}_{\text{Rumore irriducibile}}$$

- **Modello troppo semplice (underfit):** bias elevato (manca variabili rilevanti), varianza bassa
- **Modello troppo complesso (overfit):** bias quasi zero (si adatta ai dati), varianza elevata
- **Modello ottimo:** minimizza la somma bias² + varianza

I metodi di selezione del modello e di regolarizzazione sono diversi tentativi di trovare questo ottimo.

### 3.2 Criteri informativi

I criteri informativi penalizzano la log-verosimiglianza per il numero di parametri:

**AIC (Akaike, 1974):**

$$\text{AIC} = -2\ell(\hat{\boldsymbol\beta}) + 2k$$

Penalità: $2k$ (2 per ogni parametro stimato). Asintoticamente equivalente a leave-one-out cross-validation sotto certe condizioni.

**BIC (Bayesian Information Criterion, Schwarz 1978):**

$$\text{BIC} = -2\ell(\hat{\boldsymbol\beta}) + k\ln n$$

Penalità: $k\ln n$ — molto più grande di $2k$ per $n > e^2 \approx 7.4$ (sempre vera nella pratica). BIC favorisce modelli più parsimoniosi: è consistente (seleziona il vero modello con probabilità $\to 1$ all'crescere di $n$), mentre AIC no.

In regressione lineare OLS: $-2\ell \approx n\ln(RSS/n) + n(1 + \ln 2\pi)$. Ignorando la costante:

$$\text{AIC} \approx n\ln\!\left(\frac{RSS}{n}\right) + 2k, \qquad \text{BIC} \approx n\ln\!\left(\frac{RSS}{n}\right) + k\ln n$$

**Regola:** si sceglie il modello con AIC (o BIC) **minimo**. Se AIC e BIC indicano modelli diversi, si preferisce di solito BIC per parsimonia.

**$R^2$ aggiustato:**

$$\bar R^2 = 1 - \frac{RSS/(n-k)}{TSS/(n-1)} = 1 - \frac{n-1}{n-k}(1-R^2)$$

L'$\bar R^2$ penalizza per i gradi di libertà persi con ogni parametro aggiuntivo. Aumenta solo se la variabile aggiunta riduce sufficientemente $RSS$ da compensare la perdita di un grado di libertà. Non ha la stessa base teorica di AIC/BIC ma è semplice da interpretare.

### 3.3 LASSO (L1 regularization)

LASSO (Least Absolute Shrinkage and Selection Operator, Tibshirani 1996) minimizza:

$$\hat{\boldsymbol\beta}_{LASSO} = \arg\min_{\boldsymbol\beta} \sum_{i=1}^n (y_i - \mathbf{x}_i'\boldsymbol\beta)^2 + \lambda \sum_{j=1}^k \lvert\beta_j\rvert$$

dove $\lambda \geq 0$ è il parametro di penalizzazione (iperparametro):
- $\lambda = 0$: recupera OLS
- $\lambda \to \infty$: tutti i coefficienti $\to 0$

**Proprietà chiave di LASSO:** la penalità L1 ($\lvert\beta_j\rvert$) produce soluzioni **sparse** — molti coefficienti vengono portati esattamente a zero. LASSO fa automaticamente **selezione delle variabili**: le variabili con $\hat\beta_j = 0$ sono escluse dal modello.

LASSO non ha soluzione in forma chiusa quando $k > 1$ (la penalità non è differenziabile in 0). Si usa il metodo coordinate descent o LARS (Least Angle Regression).

### 3.4 Ridge regression (L2 regularization)

$$\hat{\boldsymbol\beta}_{Ridge} = \arg\min_{\boldsymbol\beta} \sum_{i=1}^n (y_i - \mathbf{x}_i'\boldsymbol\beta)^2 + \lambda \sum_{j=1}^k \beta_j^2$$

**Soluzione in forma chiusa:** $\hat{\boldsymbol\beta}_{Ridge} = (\mathbf{X}'\mathbf{X} + \lambda\mathbf{I})^{-1}\mathbf{X}'\mathbf{y}$

**Proprietà:** Ridge riduce tutti i coefficienti verso zero (shrinkage) ma non li porta mai esattamente a zero. Utile quando le variabili sono multicollineari (rende $\mathbf{X}'\mathbf{X}$ invertibile anche quando è quasi singolare). Non fa selezione delle variabili.

### 3.5 Elastic Net

Combina LASSO e Ridge:

$$\hat{\boldsymbol\beta}_{EN} = \arg\min_{\boldsymbol\beta} \sum_{i=1}^n (y_i - \mathbf{x}_i'\boldsymbol\beta)^2 + \lambda\left[\alpha\sum_j\lvert\beta_j\rvert + (1-\alpha)\sum_j\beta_j^2\right]$$

Il parametro $\alpha \in [0,1]$ bilancia LASSO ($\alpha=1$) e Ridge ($\alpha=0$). Utile quando ci sono gruppi di variabili correlate: tende a includere o escludere i gruppi in blocco (a differenza del LASSO puro che seleziona casualmente all'interno del gruppo).

### 3.6 Cross-validation k-fold

La cross-validation (CV) stima la capacità previsionale out-of-sample dividendo i dati in $k$ blocchi ("folds"):

1. Dividere i dati in $k$ fold di dimensione approssimativamente uguale
2. Per $j = 1, \ldots, k$: stimare il modello sui $k-1$ fold rimanenti, prevedere sul fold $j$, calcolare l'errore di previsione
3. MSPE_CV = media degli errori di previsione quadratici sui $k$ fold

Casi speciali: $k=n$ è la **leave-one-out CV (LOOCV)** — stima su $n-1$ osservazioni, prevede la rimanente, ripete $n$ volte. Computazionalmente costosa ma ha bassa varianza.

**Scelta di $\lambda$ in LASSO/Ridge:** si sceglie il $\lambda$ che minimizza il MSPE della CV. Questo processo è chiamato **tuning** o **hyperparameter selection**.

## 4. Derivazioni

### 4.1 La soluzione Ridge in forma chiusa

La funzione obiettivo Ridge è:

$$L(\boldsymbol\beta) = (\mathbf{y}-\mathbf{X}\boldsymbol\beta)'(\mathbf{y}-\mathbf{X}\boldsymbol\beta) + \lambda\boldsymbol\beta'\boldsymbol\beta$$

Differenziando rispetto a $\boldsymbol\beta$ e ponendo uguale a zero:

$$\frac{\partial L}{\partial\boldsymbol\beta} = -2\mathbf{X}'(\mathbf{y}-\mathbf{X}\boldsymbol\beta) + 2\lambda\boldsymbol\beta = 0$$

$$(\mathbf{X}'\mathbf{X} + \lambda\mathbf{I})\boldsymbol\beta = \mathbf{X}'\mathbf{y}$$

$$\hat{\boldsymbol\beta}_{Ridge} = (\mathbf{X}'\mathbf{X} + \lambda\mathbf{I})^{-1}\mathbf{X}'\mathbf{y}$$

La matrice $\mathbf{X}'\mathbf{X} + \lambda\mathbf{I}$ è sempre invertibile per $\lambda > 0$ (autovalori tutti $> \lambda > 0$), anche quando $\mathbf{X}'\mathbf{X}$ è singolare (caso di perfetta multicollinearità). Questo è il principale vantaggio di Ridge sulla multicollinearità.

### 4.2 Bias di Ridge

$$E[\hat{\boldsymbol\beta}_{Ridge}] = (\mathbf{X}'\mathbf{X}+\lambda\mathbf{I})^{-1}\mathbf{X}'\mathbf{X}\boldsymbol\beta \neq \boldsymbol\beta$$

Ridge è **distorto** (eccetto con $\lambda=0$). Il bias è $-\lambda(\mathbf{X}'\mathbf{X}+\lambda\mathbf{I})^{-1}\boldsymbol\beta$. Ma la varianza ridotta può più che compensare il bias introdotto, riducendo il MSPE totale.

### 4.3 Perché LASSO produce sparse solutions

La penalità L1 crea angoli (non differenziabile) nel vincolo $\sum \lvert\beta_j\rvert \leq t$ nella formulazione duale. Il punto di ottimo tende a cadere su un angolo, dove alcuni $\beta_j = 0$ esattamente. La penalità L2 di Ridge crea un cerchio liscio — l'ottimo cade su una curva, mai in un vertice — e quindi nessun coefficiente va esattamente a zero.

## 5. Esempi

**Esempio 1 (base) — AIC vs BIC su due modelli**

Modello A: $k=3$, $\ell=-50$, $n=100$.
Modello B: $k=5$, $\ell=-47$.

AIC A: $-2(-50)+2\cdot3=100+6=106$.
AIC B: $-2(-47)+2\cdot5=94+10=104$. **AIC preferisce B** (minore AIC).

BIC A: $100+3\ln100=100+3\cdot4.605=113.8$.
BIC B: $94+5\ln100=94+5\cdot4.605=117.0$. **BIC preferisce A** (minore BIC).

I due criteri divergono: BIC penalizza di più i 2 parametri aggiuntivi. Con $n=100$, il guadagno di log-verosimiglianza di 3 unità non compensa la penalità BIC di $2\ln 100 = 9.2$.

---

**Esempio 2 — $R^2$ vs $\bar R^2$**

Modello con $n=50$, $k=4$: $R^2 = 0.72$.
Si aggiunge una quinta variabile inutile: $R^2_{new} = 0.721$ (lieve aumento), ma:

$\bar R^2_{old} = 1 - \frac{49}{46}(1-0.72) = 1 - 1.065 \cdot 0.28 = 1 - 0.298 = 0.702$

$\bar R^2_{new} = 1 - \frac{49}{45}(1-0.721) = 1 - 1.089 \cdot 0.279 = 1 - 0.304 = 0.696$

Il $\bar R^2$ diminuisce: la variabile aggiunta non è utile.

---

**Esempio 3 — LASSO con λ piccolo e λ grande**

Modello con 5 variabili, n=200. Path dei coefficienti LASSO al variare di $\lambda$:

| $\lambda$ | $\hat\beta_1$ | $\hat\beta_2$ | $\hat\beta_3$ (vera) | $\hat\beta_4$ (vera) | $\hat\beta_5$ |
| --- | --- | --- | --- | --- | --- |
| 0 (OLS) | 0.12 | -0.08 | 0.95 | 1.20 | 0.04 |
| 0.1 | 0.05 | 0 | 0.89 | 1.15 | 0 |
| 0.5 | 0 | 0 | 0.70 | 0.95 | 0 |
| 2.0 | 0 | 0 | 0.25 | 0.48 | 0 |

Con $\lambda = 0.1$, LASSO seleziona automaticamente le variabili 3 e 4 (quelle "vere") e manda a zero le altre 3 (irrilevanti).

---

**Esempio 4 — Ridge con multicollinearità**

Due variabili quasi perfettamente collineari: $x_1 \approx x_2$ (correlazione 0.98). OLS: $\hat\beta_1 = 8.5$, $\hat\beta_2 = -7.3$ (stime instabili, SE enormi).

Con Ridge $\lambda = 1$: $\hat\beta_1 = 0.8$, $\hat\beta_2 = 0.6$ (stime stabili, riducono le varianze al costo di un bias). La somma $\hat\beta_1 + \hat\beta_2 \approx 1.4$ è simile all'effetto totale stimato da OLS ($8.5-7.3=1.2$), ma distribuita più equamente tra le due variabili.

---

**Esempio 5 — Cross-validation 5-fold**

Dataset con $n=500$ osservazioni. 5-fold CV:

| Fold | Training $n$ | Test $n$ | MSPE fold |
| --- | --- | --- | --- |
| 1 | 400 | 100 | 2.34 |
| 2 | 400 | 100 | 2.12 |
| 3 | 400 | 100 | 2.56 |
| 4 | 400 | 100 | 2.21 |
| 5 | 400 | 100 | 2.37 |

$\text{MSPE}_{CV} = (2.34+2.12+2.56+2.21+2.37)/5 = 11.60/5 = 2.32$

Questo è la stima dell'errore di previsione out-of-sample. Per confronto, l'MSPE in-sample dello stesso modello potrebbe essere 1.85 — il 20% più basso per overfitting.

---

**Esempio 6 — Selezione di λ in LASSO via CV**

Con $\lambda_{grid} = \{0.01, 0.05, 0.1, 0.5, 1, 5\}$, i MSPE della 10-fold CV sono:

| $\lambda$ | MSPE_CV | Variabili selezionate |
| --- | --- | --- |
| 0.01 | 4.2 | 12 |
| 0.05 | 3.8 | 8 |
| 0.1 | 3.5 | 5 |
| 0.5 | 3.7 | 3 |
| 1.0 | 4.1 | 2 |
| 5.0 | 6.8 | 0 |

$\lambda = 0.1$ minimizza il MSPE_CV con 5 variabili selezionate. Questa è la scelta ottimale.

---

**Esempio 7 — Selezione stepwise: problema dei confronti multipli**

Con 20 variabili candidate e $\alpha = 0.05$ per ogni test t, la probabilità di almeno un falso positivo è approssimativamente $1 - (1-0.05)^{20} \approx 0.64$. Con backward elimination su 20 variabili, è probabile che alcune variabili irrilevanti rimangano nel modello per puro caso.

La soluzione è usare LASSO o BIC (che penalizzano la complessità senza inflazionare l'errore di tipo I) invece di stepwise con soglie prefissate.

## 6. Grafico

```plot
{"fn":"Math.pow(x-2,2)*0.3 + 0.5","fn2":"0.8/x + 0.3","domain":[0.2,5],"yDomain":[0,3],"title":"Bias² + Varianza: trade-off al variare della complessità del modello","label1":"Varianza (↑ complessità)","label2":"Bias² (↓ complessità)","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"Math.exp(-lambda*Math.abs(x))*Math.cos(x*1.5)","domain":[-5,5],"yDomain":[-1.2,1.2],"params":[{"name":"lambda","min":0,"max":2,"step":0.05,"default":0.3}],"title":"Effetto della regolarizzazione λ — shrinkage dei coefficienti verso zero"}
```

## 8. Errori comuni

**Errore 1 — Usare l'R² non aggiustato per confrontare modelli con diversi numeri di variabili.** L'$R^2$ cresce sempre aggiungendo variabili, anche completamente inutili. Confrontare modelli diversi usando $R^2$ porta sempre a scegliere il modello più ricco — portando all'overfitting. Usare sempre $\bar R^2$, AIC o BIC per confronti tra modelli con diversi numeri di regressori.

**Errore 2 — Standardizzare o meno i regressori prima di LASSO/Ridge.** LASSO e Ridge non sono invarianti alla scala dei regressori: penalizzano di più le variabili con coefficienti grandi (in valore assoluto), il che dipende dalla scala di misura. È essenziale standardizzare tutti i regressori (media zero, deviazione standard uno) prima di applicare LASSO o Ridge, altrimenti la penalità tratta le variabili in modo arbitrariamente diverso a seconda della loro unità di misura.

**Errore 3 — Interpretare i coefficienti LASSO come se fossero stime non distorte.** La regolarizzazione introduce bias per ridurre la varianza. I coefficienti LASSO sono "shrinkati" verso zero — non si possono interpretare come stime non distorte dell'effetto causale. Se si vuole l'inferenza causale, dopo aver usato LASSO per selezionare le variabili, si devono ri-stimare i coefficienti con OLS sul modello selezionato (procedura "post-LASSO").

**Errore 4 — Usare i dati di test per scegliere il modello.** Il dataset di test (hold-out) deve essere tenuto nascosto fino alla valutazione finale del modello selezionato. Se si usa il test set per scegliere tra modelli diversi (o per tuning di $\lambda$), si sta implicitamente "fittando" anche il test set — e le stime di accuratezza previsionale sono ottimisticamente distorte. Il tuning va fatto con CV sul training set.

**Errore 5 — Ignorare la differenza tra AIC e BIC nelle applicazioni.** AIC è progettato per minimizzare il MSPE previsionale (asintoticamente equivalente a LOOCV) — è il criterio giusto se l'obiettivo è prevedere. BIC è consistente per la selezione del vero modello — è il criterio giusto se l'obiettivo è identificare le variabili rilevanti. Scegliere AIC o BIC a seconda dell'obiettivo del ricercatore, non per convenienza.

**Errore 6 — Credere che il LASSO risolva il problema dell'endogeneità.** LASSO è uno strumento di selezione delle variabili e regolarizzazione, non un rimedio per l'endogeneità. Se un regressore è endogeno (correlato con l'errore), il LASSO riduce i coefficienti verso zero ma rimangono inconsistenti. L'endogeneità richiede variabili strumentali o design quasi-sperimentali, non regolarizzazione.

**Errore 7 — Non separare training e test set prima della cross-validation.** La procedura corretta è: (1) mettere da parte il test set definitivo; (2) usare CV solo sul training set per selezionare $\lambda$ e il modello; (3) stimare il modello finale sul training set completo; (4) valutare sul test set una sola volta. Se si mescolano training e test in qualsiasi fase della selezione, si introduce data leakage e si sovrastima la performance del modello.

## 9. Applicazioni reali

**Previsione macroeconomica.** Le istituzioni finanziarie e le banche centrali usano LASSO e elastic net per selezionare predittori rilevanti dell'inflazione e del PIL tra centinaia di variabili macroeconomiche (dati "big macro"). Stock e Watson (2012) mostrano che i metodi di regolarizzazione superano i modelli autoregressivi classici nella previsione fuori campione della disoccupazione USA, soprattutto in periodi di recessione.

**Econometria della salute.** Studi sulla determinazione dei costi sanitari devono scegliere tra centinaia di potenziali predittori (diagnosi, farmaci, variabili demografiche). L'uso di LASSO con CV permette di costruire modelli previsivi parsimoniosi che generalizzano bene a nuovi pazienti, evitando l'overfitting insito nella selezione manuale delle variabili.

**Finance — fattori di rischio.** Nell'asset pricing, il dibattito sui "fattori" che determinano i rendimenti azionari (Fama-French, Carhart, e decine di altri "anomalie") ha prodotto un proliferare di modelli. Harvey, Liu e Zhu (2016) dimostrano che la maggior parte dei fattori pubblicati non supera il test di significatività dopo correzione per test multipli. LASSO e ridge sono usati per costruire modelli fattoriali più stabili.

**Valutazione delle politiche — doppio LASSO.** Il "double-selection LASSO" di Belloni, Chernozhukov e Hansen (2014) risolve il problema della selezione dei controlli in econometria causale: usa LASSO sia nella regressione della variabile di interesse che nella regressione del trattamento, poi include le variabili selezionate in entrambe le equazioni. Questo garantisce la validità dell'inferenza anche quando il numero di controlli potenziali è molto grande rispetto a $n$.

## 10. Riepilogo

| Concetto | Formula / Regola | Note |
| --- | --- | --- |
| Bias-varianza trade-off | $MSPE = Bias^2 + Var + \sigma^2$ | Obiettivo: minimizzare somma |
| AIC | $-2\ell + 2k$ | Previsione; non consistente |
| BIC | $-2\ell + k\ln n$ | Selezione modello; consistente |
| $\bar R^2$ | $1 - \frac{RSS/(n-k)}{TSS/(n-1)}$ | Semplice; scala $[0,1]$ approssimativa |
| LASSO (L1) | $RSS + \lambda\sum_j\lvert\beta_j\rvert$ | Sparse; selezione variabili |
| Ridge (L2) | $RSS + \lambda\sum_j\beta_j^2$ | Stabile; no selezione |
| Ridge (forma chiusa) | $(\mathbf{X}'\mathbf{X}+\lambda\mathbf{I})^{-1}\mathbf{X}'\mathbf{y}$ | Sempre invertibile per $\lambda>0$ |
| Elastic Net | $RSS + \lambda[\alpha L1 + (1-\alpha)L2]$ | Bilancia LASSO e Ridge |
| CV k-fold | Media MSPE su k fold | Stima out-of-sample dell'errore |
| Tuning $\lambda$ | Scegli $\lambda^* = \arg\min_\lambda \text{MSPE}_{CV}$ | Solo sul training set |

## 11. Esercizi

<details>
<summary>Esercizio 1: Calcolo AIC e BIC</summary>

Quattro modelli stimati su $n = 200$ osservazioni:

| Modello | $k$ | $\ell$ |
| --- | --- | --- |
| A | 2 | -180 |
| B | 4 | -165 |
| C | 6 | -160 |
| D | 10 | -158 |

Calcola AIC e BIC per ciascuno e determina il modello preferito da ciascun criterio.

**Soluzione.**

$\ln 200 = 5.298$.

| Modello | AIC | BIC |
| --- | --- | --- |
| A | $360+4=364$ | $360+10.6=370.6$ |
| B | $330+8=338$ | $330+21.2=351.2$ |
| C | $320+12=332$ | $320+31.8=351.8$ |
| D | $316+20=336$ | $316+53.0=369.0$ |

**AIC preferisce C** (AIC = 332 minimo). **BIC preferisce B** (BIC = 351.2 minimo).

BIC penalizza molto di più i 6 parametri extra di C rispetto a B ($5.298 \times 6 = 31.8$ vs $5.298 \times 4 = 21.2$), e il guadagno di verosimiglianza da B a C è solo 5 unità.

</details>

<details>
<summary>Esercizio 2: R² aggiustato e confronto modelli</summary>

Regressione sul PIL di 50 paesi. Modello base ($k=3$): $R^2 = 0.65$. Si aggiungono 3 variabili: $R^2_{new} = 0.68$.

(a) Calcola $\bar R^2$ per i due modelli.
(b) Il modello esteso è preferibile?

**Soluzione.**

(a) $\bar R^2_{base} = 1 - \frac{49}{47}(1-0.65) = 1 - 1.043 \times 0.35 = 1 - 0.365 = 0.635$

$\bar R^2_{esteso} = 1 - \frac{49}{44}(1-0.68) = 1 - 1.114 \times 0.32 = 1 - 0.356 = 0.644$

(b) $\bar R^2$ aumenta da 0.635 a 0.644: il modello esteso è preferibile secondo questo criterio. Le 3 variabili aggiunte contribuiscono abbastanza da compensare la perdita di 3 gradi di libertà.

Nota: con soli 50 paesi e 6 parametri, il rischio di overfitting rimane alto. Verificare con CV o BIC.

</details>

<details>
<summary>Esercizio 3: Ridge vs OLS — multicollinearità</summary>

Regressione con due variabili $x_1$ e $x_2$, correlazione 0.97. OLS dà:

$\hat\beta_1^{OLS} = 5.2$, $SE_1 = 4.8$; $\hat\beta_2^{OLS} = -4.1$, $SE_2 = 4.6$.

Con $\lambda = 0.5$: $\hat\beta_1^{Ridge} = 0.6$, $\hat\beta_2^{Ridge} = 0.4$.

(a) Perché OLS ha SE così grandi?
(b) In quale senso Ridge "risolve" il problema?
(c) Qual è il costo di Ridge?

**Soluzione.**

(a) Con correlazione 0.97, $\mathbf{X}'\mathbf{X}$ è quasi singolare. Il determinante di $\mathbf{X}'\mathbf{X}$ è quasi zero, quindi la sua inversa $($ e la varianza degli stimatori $= \sigma^2(\mathbf{X}'\mathbf{X})^{-1})$ è enormissima. Le stime OLS sono molto instabili: piccole perturbazioni nel campione cambiano drasticamente $\hat\beta_1$ e $\hat\beta_2$.

(b) Ridge aggiunge $\lambda\mathbf{I}$ prima di invertire: $(\mathbf{X}'\mathbf{X}+0.5\mathbf{I})^{-1}$ è ben condizionata anche se $\mathbf{X}'\mathbf{X}$ non lo è. I coefficienti Ridge (0.6 e 0.4) sono molto più stabili: la somma $\approx 1$ è coerente con l'effetto combinato stimato da OLS ($5.2-4.1=1.1$), ma distribuita in modo interpretabile.

(c) Il costo è il bias: $E[\hat\beta^{Ridge}] \neq \boldsymbol\beta$. Ridge scambia distorsione per varianza ridotta. Se l'obiettivo è l'inferenza causale (stima non distorta), Ridge non è appropriato. Se l'obiettivo è prevedere, Ridge può essere superiore a OLS anche con bias.

</details>

<details>
<summary>Esercizio 4: LASSO e post-LASSO</summary>

10 variabili candidate, $n=150$. LASSO con $\lambda^* = 0.2$ (selezionato via CV) include 3 variabili: $x_2$, $x_5$, $x_8$. I coefficienti LASSO sono $\hat\beta_2 = 0.4$, $\hat\beta_5 = -0.2$, $\hat\beta_8 = 0.7$.

(a) Perché non si usano questi coefficienti LASSO per inferenza?
(b) Descrivi la procedura post-LASSO.
(c) In quale situazione i coefficienti LASSO e post-LASSO coinciderebbero approssimativamente?

**Soluzione.**

(a) I coefficienti LASSO sono sistematicamente biased verso zero dalla penalità. $\hat\beta_2 = 0.4$ potrebbe essere il vero valore 0.6 "shrinkato" verso zero. Usare 0.4 come stima dell'effetto causale sottostima la vera dimensione dell'effetto. Inoltre, gli errori standard dei coefficienti LASSO non hanno una distribuzione nota sotto $H_0$ — l'inferenza standard (t-test) non è valida.

(b) **Post-LASSO:** (1) usare LASSO per selezionare il sottoinsieme di variabili $\{x_2, x_5, x_8\}$; (2) ri-stimare OLS sulla sola regressione $y \sim x_2 + x_5 + x_8$; (3) usare i coefficienti OLS e i loro SE standard per inferenza. I coefficienti OLS post-LASSO sono non distorti (condizionatamente alla selezione corretta delle variabili).

(c) I coefficienti LASSO e post-LASSO coinciderebbero con $\lambda \to 0$: il LASSO si avvicina a OLS. Con $\lambda$ piccolo, la penalizzazione è minima e lo shrinkage quasi nullo.

</details>

<details>
<summary>Esercizio 5: Cross-validation e data leakage</summary>

Un ricercatore ha 1000 osservazioni. Vuole scegliere tra 20 modelli diversi (diverse combinazioni di variabili). Descrive la seguente procedura:

1. Calcola il MSPE in-sample per tutti i 20 modelli.
2. Sceglie il modello con MSPE minimo.
3. Valuta il modello selezionato su un test set separato del 20%.

Identifica il problema e proponi la procedura corretta.

**Soluzione.**

**Problema:** il ricercatore usa il training set (tutte le 1000 osservazioni) per confrontare i 20 modelli tramite MSPE in-sample. L'MSPE in-sample non è una stima affidabile dell'errore out-of-sample (tende a sottostimarlo, specialmente per modelli complessi). Il "modello migliore" secondo MSPE in-sample è probabilmente quello più overfittato.

**Ulteriore problema:** il test set è usato dopo la selezione — ma se il ricercatore avesse scelto diversamente e ottenuto un risultato peggiore, avrebbe ripetuto la selezione. Il test set non è "vergine" nell'ottica del flusso sperimentale.

**Procedura corretta:**
1. Mettere da parte il 20% come test set definitivo — non toccare mai fino alla valutazione finale.
2. Sull'80% rimanente (training set), applicare k-fold CV per confrontare i 20 modelli: per ciascun modello, calcolare MSPE_CV.
3. Selezionare il modello con MSPE_CV minimo.
4. Stimare il modello selezionato sull'intero training set (80%).
5. Valutare sul test set (20%) una volta sola.

</details>

<details>
<summary>Esercizio 6: Elastic Net — quando è preferibile a LASSO puro</summary>

Dataset con 50 variabili: 10 "reali" (correlate al 90% tra loro a gruppi di 5), 40 irrilevanti. Confronta LASSO e Elastic Net per questo scenario.

**Soluzione.**

**Problema con LASSO puro:** tra variabili altamente correlate (es. le 5 variabili del primo gruppo con correlazione 0.90), LASSO seleziona arbitrariamente una delle 5 e manda le altre a zero. La scelta è instabile — cambiando leggermente i dati, LASSO potrebbe selezionare una variabile diversa del gruppo. Questo rende i risultati difficili da interpretare e poco stabili.

**Elastic Net:** la componente L2 tende a condividere i coefficienti tra variabili correlate — tutte le 5 variabili del gruppo ricevono coefficienti di segno uguale e grandezza simile, invece di uno che prende tutto e gli altri a zero. La componente L1 manda comunque a zero le 40 variabili irrilevanti.

**Scelta pratica:** con $\alpha = 0.5$ (mix 50-50 LASSO-Ridge), Elastic Net seleziona i gruppi di variabili rilevanti in modo più robusto. Il tuning di $\lambda$ e $\alpha$ va fatto simultaneamente via griglia 2D con CV.

**Regola:** usare LASSO quando le variabili rilevanti sono poche e non correlate. Usare Elastic Net quando ci sono gruppi di variabili correlate.

</details>

<details>
<summary>Esercizio 7: Il doppio LASSO per inferenza causale</summary>

Si vuole stimare l'effetto della formazione professionale $d_i$ (trattamento binario) sul salario $y_i$, controllando per un vettore di 50 caratteristiche $\mathbf{w}_i$ (potenziali confounders). $n = 500$.

Descrivi il double-selection LASSO di Belloni, Chernozhukov e Hansen (2014).

**Soluzione.**

**Problema con LASSO singolo:** se si usa LASSO per selezionare i controlli nell'equazione $y_i \sim d_i + \mathbf{w}_i'\boldsymbol\gamma$, alcune variabili correlate con $d_i$ ma con piccolo effetto su $y_i$ possono essere escluse — causando un omitted variable bias nell'effetto del trattamento $\hat\beta_d$.

**Double-selection LASSO:**

**Passo 1:** LASSO di $y_i$ su $\mathbf{w}_i$ → seleziona sottoinsieme $\hat S_y$ di controlli predittivi del salario.

**Passo 2:** LASSO di $d_i$ su $\mathbf{w}_i$ → seleziona sottoinsieme $\hat S_d$ di controlli predittivi del trattamento.

**Passo 3:** OLS di $y_i$ su $d_i$ e tutte le variabili in $\hat S_y \cup \hat S_d$ → $\hat\beta_d$ è il coefficiente del trattamento.

**Perché funziona:** includendo le variabili correlate al trattamento ($\hat S_d$) si evita l'omitted variable bias anche se non sono predittori forti del salario. La selezione doppia garantisce che tutte le variabili "pericolose" per l'identificazione siano incluse come controlli. Sotto condizioni di sparsità ($s = \lvert S_y \cup S_d \rvert \ll \sqrt{n}$), $\hat\beta_d$ è $\sqrt{n}$-consistente e asintoticamente normale.

</details>

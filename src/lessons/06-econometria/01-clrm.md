---
id: econometria-01-clrm
subject: econometria
topic_it: Regressione OLS
topic_en: OLS regression
title_it: Il modello di regressione lineare classico
title_en: The classical linear regression model
level: purple
order: 1
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 1–2 — CLRM"
stato: da-rielaborare
---

## 1. Intuizione — perché il modello lineare classico?

Immagina di voler capire quanto influisce un anno in più di istruzione sul salario di una persona. Hai un dataset con migliaia di individui, ognuno con salario, anni di studio, anni di esperienza, genere, settore. L'econometria ti dà uno strumento sistematico per isolare l'effetto dell'istruzione tenendo tutto il resto costante: la regressione OLS.

Il **Modello di Regressione Lineare Classico** (Classical Linear Regression Model, CLRM) è il punto di partenza di tutta l'econometria applicata. È come il "motore base" di un'auto: capirlo bene permette di capire tutto ciò che viene dopo — dalle correzioni per l'eteroschedasticità alle variabili strumentali.

L'intuizione di fondo è semplice: la variabile dipendente $y$ (es. salario) è spiegata da una combinazione lineare di regressori $x_1, x_2, \ldots, x_k$ (es. istruzione, esperienza) più un termine di errore $u$ che cattura tutto ciò che non è osservato. L'OLS trova i coefficienti che minimizzano la somma dei quadrati degli errori.

Il teorema di Gauss-Markov garantisce che, sotto cinque assunzioni ben precise, l'OLS è il **miglior stimatore lineare non distorto** (BLUE — Best Linear Unbiased Estimator). Conoscere queste assunzioni non è un esercizio accademico: ogni volta che una viene violata, l'OLS perde qualcosa — distorsione, efficienza, o validità dell'inferenza.

## 2. Prerequisiti

- Algebra lineare: prodotti matriciali, rango di una matrice, inversa
- Statistica di base: valore atteso, varianza, covarianza, distribuzione normale
- Concetto di stimatore, distorsione, consistenza
- Nozione di regressione semplice (OLS bivariata)

## 3. Teoria — il CLRM in forma matriciale

### Il modello

Il modello di regressione multipla per $n$ osservazioni e $k$ regressori è:

$$y_i = \beta_0 + \beta_1 x_{1i} + \beta_2 x_{2i} + \cdots + \beta_k x_{ki} + u_i, \quad i = 1, \ldots, n$$

In forma vettoriale compatta: $y_i = \mathbf{x}_i'\boldsymbol{\beta} + u_i$, dove:

- $y_i \in \mathbb{R}$ è la **variabile dipendente** (outcome, risposta) per l'osservazione $i$
- $\mathbf{x}_i = (1, x_{1i}, \ldots, x_{ki})' \in \mathbb{R}^{k+1}$ è il vettore dei **regressori** (il primo elemento è 1 per l'intercetta)
- $\boldsymbol{\beta} = (\beta_0, \beta_1, \ldots, \beta_k)' \in \mathbb{R}^{k+1}$ è il vettore dei **parametri** da stimare
- $u_i \in \mathbb{R}$ è il **termine di errore** (disturbance) — cattura fattori non osservati, errori di misura, variabilità intrinseca

In forma matriciale per tutte le $n$ osservazioni:

$$\mathbf{y} = X\boldsymbol{\beta} + \mathbf{u}$$

dove $\mathbf{y} \in \mathbb{R}^n$, $X \in \mathbb{R}^{n \times (k+1)}$ è la **matrice dei regressori** (design matrix) con prima colonna di uno, $\mathbf{u} \in \mathbb{R}^n$.

### Lo stimatore OLS

Lo stimatore OLS minimizza la **somma dei quadrati dei residui** (RSS):

$$\hat{\boldsymbol{\beta}}_{\text{OLS}} = \arg\min_{\boldsymbol{\beta}} \|\mathbf{y} - X\boldsymbol{\beta}\|^2 = \arg\min_{\boldsymbol{\beta}} \sum_{i=1}^n (y_i - \mathbf{x}_i'\boldsymbol{\beta})^2$$

Derivando rispetto a $\boldsymbol{\beta}$ e ponendo uguale a zero si ottengono le **equazioni normali**:

$$X'X\hat{\boldsymbol{\beta}} = X'\mathbf{y}$$

Se $X'X$ è invertibile (rango pieno), la soluzione unica è:

$$\hat{\boldsymbol{\beta}}_{\text{OLS}} = (X'X)^{-1}X'\mathbf{y}$$

Questa formula è il cuore dell'OLS. $(X'X)^{-1}X'$ è la **pseudoinversa** di $X$.

### Le cinque assunzioni di Gauss-Markov

**OLS.1 — Linearità nei parametri:**
$$\mathbf{y} = X\boldsymbol{\beta} + \mathbf{u}$$
Il modello è lineare nei parametri $\boldsymbol{\beta}$ (non necessariamente nei regressori: $\ln x$, $x^2$ sono ammessi come regressori).

**OLS.2 — Campionamento casuale:**
Le $n$ osservazioni $(y_i, \mathbf{x}_i)$ sono estratte in modo i.i.d. (independent and identically distributed) dalla popolazione di interesse. In dati time series questa assunzione viene sostituita da stazionarietà e mixing.

**OLS.3 — No multicollinearità perfetta:**
La matrice $X$ ha rango pieno $k+1$: nessun regressore è combinazione lineare esatta degli altri. Equivalentemente, $X'X$ è invertibile. Se due regressori sono perfettamente collineari (es. $x_2 = 3x_1$), $(X'X)^{-1}$ non esiste e l'OLS non è identificato.

**OLS.4 — Esogeneità stretta (zero conditional mean):**
$$E[u_i \mid \mathbf{x}_i] = 0 \quad \forall i$$
L'errore ha media zero condizionata ai valori di tutti i regressori. Questa è l'assunzione **critica**: garantisce che OLS sia non distorto. Viene violata da variabili omesse correlate con i regressori, causalità inversa (endogeneità), errori di misura nei regressori.

**OLS.5 — Omoschedasticità e no autocorrelazione:**
$$\text{Var}(\mathbf{u} \mid X) = \sigma^2 I_n$$
cioè:
- $\text{Var}(u_i \mid X) = \sigma^2$ per ogni $i$ (omoschedasticità — varianza costante)
- $\text{Cov}(u_i, u_j \mid X) = 0$ per $i \neq j$ (no autocorrelazione — errori non correlati tra loro)

### Il teorema di Gauss-Markov

**Teorema:** Sotto OLS.1–OLS.5, lo stimatore OLS $\hat{\boldsymbol{\beta}}_{\text{OLS}}$ è il **BLUE** (Best Linear Unbiased Estimator): tra tutti gli stimatori lineari non distorti di $\boldsymbol{\beta}$, ha la varianza minima (matrice di varianza-covarianza minima nel senso di Loewner).

**Dimostrazione (idea):** Sia $\tilde{\boldsymbol{\beta}} = C\mathbf{y}$ un qualsiasi stimatore lineare non distorto, con $C \neq (X'X)^{-1}X'$. La condizione di non distorsione richiede $CX = I_{k+1}$. Ponendo $C = (X'X)^{-1}X' + D$, la condizione impone $DX = 0$. La varianza di $\tilde{\boldsymbol{\beta}}$ è $\sigma^2 CC' = \sigma^2[(X'X)^{-1} + DD']$. Poiché $DD'$ è semidefinita positiva, $\text{Var}(\tilde{\boldsymbol{\beta}}) \geq \text{Var}(\hat{\boldsymbol{\beta}}_{\text{OLS}})$. $\square$

**Varianza degli stimatori OLS:**
$$\text{Var}(\hat{\boldsymbol{\beta}}_{\text{OLS}} \mid X) = \sigma^2 (X'X)^{-1}$$

Stimatore non distorto di $\sigma^2$:
$$\hat{\sigma}^2 = \frac{\hat{\mathbf{u}}'\hat{\mathbf{u}}}{n - k - 1} = \frac{\text{RSS}}{n-k-1}$$

dove $n - k - 1$ sono i **gradi di libertà** (si perdono $k+1$ parametri stimati).

### Assunzione aggiuntiva OLS.6 — Normalità

$$u_i \mid \mathbf{x}_i \sim \mathcal{N}(0, \sigma^2)$$

Non è necessaria per il teorema di Gauss-Markov, ma permette l'inferenza **esatta** con campioni finiti: $\hat{\boldsymbol{\beta}} \mid X \sim \mathcal{N}(\boldsymbol{\beta}, \sigma^2(X'X)^{-1})$, i test t e F sono esatti (non solo asintotici). Per grandi campioni, la normalità non è necessaria grazie al Teorema Centrale del Limite.

### Interpretazione causale vs. correlazionale

**Attenzione fondamentale:** l'OLS stima associazioni/correlazioni, non necessariamente relazioni causali. Il coefficiente $\hat{\beta}_1$ misura quanto $y$ varia in media al variare di $x_1$ di un'unità, tenendo costanti gli altri regressori nel modello — ma se OLS.4 è violata (variabile omessa correlata con $x_1$), questa associazione non coincide con l'effetto causale.

Per identificare effetti causali servono strategie di identificazione: esperimenti randomizzati (RCT), variabili strumentali (IV), differenze-in-differenze (DiD), discontinuità di regressione (RDD).

## 4. Derivazioni — dalla minimizzazione allo stimatore

Partiamo da $\min_{\boldsymbol{\beta}} \text{RSS} = \min_{\boldsymbol{\beta}} (\mathbf{y} - X\boldsymbol{\beta})'(\mathbf{y} - X\boldsymbol{\beta})$.

Espandendo: $\text{RSS} = \mathbf{y}'\mathbf{y} - 2\boldsymbol{\beta}'X'\mathbf{y} + \boldsymbol{\beta}'X'X\boldsymbol{\beta}$.

Derivando rispetto a $\boldsymbol{\beta}$:
$$\frac{\partial \text{RSS}}{\partial \boldsymbol{\beta}} = -2X'\mathbf{y} + 2X'X\boldsymbol{\beta} = \mathbf{0}$$

Risolvendo: $X'X\hat{\boldsymbol{\beta}} = X'\mathbf{y}$, quindi $\hat{\boldsymbol{\beta}} = (X'X)^{-1}X'\mathbf{y}$.

**Non distorsione:** $E[\hat{\boldsymbol{\beta}} \mid X] = (X'X)^{-1}X'E[\mathbf{y} \mid X] = (X'X)^{-1}X'(X\boldsymbol{\beta}) = \boldsymbol{\beta}$ (usando OLS.4: $E[\mathbf{u} \mid X] = \mathbf{0}$).

**Varianza:** $\text{Var}(\hat{\boldsymbol{\beta}} \mid X) = (X'X)^{-1}X'\text{Var}(\mathbf{u} \mid X)X(X'X)^{-1} = (X'X)^{-1}X'(\sigma^2 I)X(X'X)^{-1} = \sigma^2(X'X)^{-1}$.

## 5. Esempi

**Esempio 1 — Modello salariale semplice**

Modello: $\ln(\text{salario}_i) = \beta_0 + \beta_1 \text{istruzione}_i + u_i$.

Dati (5 osservazioni): salario = (800, 1000, 1200, 1500, 2000)€, istruzione = (8, 10, 12, 14, 16) anni.

Con $\bar{x} = 12$, $\bar{\ln y} \approx 7.02$:
$$\hat{\beta}_1 = \frac{\sum(x_i - \bar{x})(\ln y_i - \overline{\ln y})}{\sum(x_i - \bar{x})^2} \approx \frac{12.56}{40} \approx 0.314$$

Interpretazione: un anno aggiuntivo di istruzione è associato a circa il 31.4% in più di salario (approssimazione log-lineare valida per variazioni piccole).

**Esempio 2 — Verifica OLS.3 (rango pieno)**

Modello con $x_1 = $ ore di studio settimanali, $x_2 = $ ore di studio giornaliere × 7. Poiché $x_2 = 7 \cdot (x_1/7) = x_1$, i due regressori sono identici: $X$ non ha rango pieno, $(X'X)$ è singolare. OLS non può essere calcolato — bisogna eliminare uno dei due regressori.

**Esempio 3 — Calcolo matriciale**

$n=3$, $k=1$: $\mathbf{y} = (2, 4, 6)'$, $X = \begin{pmatrix}1&1\\1&2\\1&3\end{pmatrix}$.

$$X'X = \begin{pmatrix}3&6\\6&14\end{pmatrix}, \quad X'\mathbf{y} = \begin{pmatrix}12\\28\end{pmatrix}$$

$(X'X)^{-1} = \frac{1}{3\cdot14-36}\begin{pmatrix}14&-6\\-6&3\end{pmatrix} = \frac{1}{6}\begin{pmatrix}14&-6\\-6&3\end{pmatrix}$

$\hat{\boldsymbol{\beta}} = \frac{1}{6}\begin{pmatrix}14&-6\\-6&3\end{pmatrix}\begin{pmatrix}12\\28\end{pmatrix} = \frac{1}{6}\begin{pmatrix}0\\12\end{pmatrix} = \begin{pmatrix}0\\2\end{pmatrix}$

Quindi $\hat{\beta}_0 = 0$, $\hat{\beta}_1 = 2$: $\hat{y} = 2x$. Verifica: per $x=1,2,3$ si ottiene $\hat{y}=2,4,6$ — fit perfetto, residui nulli.

**Esempio 4 — Bias da variabile omessa**

Modello vero: $y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + u$, con $\beta_2 = 0.5$ e $\text{Corr}(x_1, x_2) = 0.8$.

Se stimo solo $y = \alpha_0 + \alpha_1 x_1 + v$ (ometto $x_2$):
$$E[\hat{\alpha}_1] = \beta_1 + \beta_2 \cdot \frac{\text{Cov}(x_1, x_2)}{\text{Var}(x_1)} = \beta_1 + 0.5 \cdot 0.8 \cdot \frac{\sigma_2}{\sigma_1}$$

Se $\sigma_1 = \sigma_2$: $E[\hat{\alpha}_1] = \beta_1 + 0.4$ — bias positivo. Sovrastimiamo l'effetto di $x_1$.

**Esempio 5 — Decomposizione della varianza (R²)**

RSS (residual sum of squares): $\sum \hat{u}_i^2$. TSS (total SS): $\sum(y_i - \bar{y})^2$. ESS (explained SS): $\sum(\hat{y}_i - \bar{y})^2$.

Identità: TSS = ESS + RSS (valida con intercetta nel modello).

$R^2 = \text{ESS}/\text{TSS} = 1 - \text{RSS}/\text{TSS}$: frazione della varianza di $y$ spiegata dal modello. Esempio: $R^2 = 0.72$ significa che i regressori spiegano il 72% della variabilità di $y$.

**Esempio 6 — Gauss-Markov in pratica**

Modello: $y_i = \beta_0 + \beta_1 x_i + u_i$. Stimatore alternativo ("naive"): $\tilde{\beta}_1 = (y_n - y_1)/(x_n - x_1)$ (pendenza tra primo e ultimo punto). È lineare e — se $E[u_i] = 0$ — non distorto. Ma $\text{Var}(\tilde{\beta}_1) > \text{Var}(\hat{\beta}_1)$ perché ignora le osservazioni intermedie. OLS è BLUE.

**Esempio 7 — Effetto del rango di X**

Se si include una dummy per ogni gruppo in un modello con intercetta e la somma delle dummy è identicamente uguale a 1, cade nel problema della **perfect dummy variable trap**: la colonna degli uno di $X$ è combinazione lineare delle dummy. Soluzione: omettere una categoria di riferimento.

## 6. Grafico

```plot
{"fn":"0.7*x+0.5","domain":[-3,3],"yDomain":[-2,4],"title":"Retta OLS: ŷ = β̂₀ + β̂₁x","label1":"Regressione OLS","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"beta0+beta1*x","domain":[-5,5],"yDomain":[-10,10],"params":[{"name":"beta0","min":-5,"max":5,"step":0.5,"default":0},{"name":"beta1","min":-3,"max":3,"step":0.1,"default":1}],"title":"Effetto dei coefficienti OLS"}
```

## 8. Errori comuni

**Errore 1 — Confondere linearità nei dati con linearità nei parametri.**
OLS.1 richiede linearità nei *parametri*, non nei regressori. Il modello $y = \beta_0 + \beta_1 x^2 + \beta_2 \ln x + u$ è perfettamente lineare nei parametri (basta definire $z_1 = x^2$, $z_2 = \ln x$). Il modello $y = \beta_0 + x^{\beta_1} + u$ è invece non lineare nei parametri e richiede metodi diversi (NLS).

**Errore 2 — Interpretare OLS come causale senza giustificazione.**
Scrivere "$\hat{\beta}_1 = 0.5$ quindi un anno di istruzione *causa* il 50% in più di salario" è sbagliato se non si è risolto il problema dell'endogeneità. OLS misura associazione parziale; la causalità richiede assunzioni di identificazione aggiuntive.

**Errore 3 — Dimenticare i gradi di libertà in $\hat{\sigma}^2$.**
$\hat{\sigma}^2 = \text{RSS}/n$ è distorto; il corretto stimatore non distorto è $\hat{\sigma}^2 = \text{RSS}/(n-k-1)$. Con $n=20$ e $k=10$, dividere per $n=20$ invece di $9$ porta a sottostimare $\sigma^2$ del 55%.

**Errore 4 — Credere che alto $R^2$ implichi un buon modello.**
$R^2$ non dice nulla sulla causalità, sull'importanza economica dei coefficienti, o sulla validità del modello. Aggiungere regressori irrilevanti aumenta sempre $R^2$ (per questo si usa $\bar{R}^2$ aggiustato). Un modello con $R^2 = 0.95$ può avere gravi problemi di omitted variable bias.

**Errore 5 — Applicare OLS con regressori endogeni senza correzione.**
Se $\text{Cov}(x_j, u) \neq 0$ (es. il consumo di istruzione dipende dal salario atteso), OLS è distorto e inconsistente — neanche con $n \to \infty$ converge al vero $\beta_j$. La soluzione è usare variabili strumentali.

**Errore 6 — Confondere multicollinearità imperfetta con perfetta.**
La multicollinearità *perfetta* (OLS.3 violata) rende OLS impossibile da calcolare. La multicollinearità *imperfetta* (regressori molto correlati) rende gli SE grandi ma non viola nessuna assunzione: OLS è ancora BLUE, solo impreciso.

**Errore 7 — Interpretare i coefficienti senza "ceteris paribus".**
$\hat{\beta}_1$ in un modello multiplo è l'effetto *parziale* di $x_1$ su $y$, tenendo costanti gli altri regressori. Non coincide con il coefficiente della regressione semplice di $y$ su $x_1$ (a meno che $x_1$ sia ortogonale agli altri regressori).

## 9. Applicazioni reali

**Funzione salariale di Mincer (economia del lavoro).** Il modello $\ln(\text{salario}) = \beta_0 + \beta_1 \text{istruzione} + \beta_2 \text{esperienza} + \beta_3 \text{esperienza}^2 + u$ è il cavallo di battaglia dell'economia del lavoro. Il coefficiente $\beta_1$ stima il "rendimento dell'istruzione". Il problema è che l'istruzione è endogena (le persone più capaci studiano di più): le stime OLS tipicamente sovrastimano il vero effetto causale.

**Modello di domanda (microeconomia applicata).** $\ln Q_i = \beta_0 + \beta_1 \ln P_i + \beta_2 \ln Y_i + u_i$ stima l'elasticità della domanda al prezzo ($\beta_1$) e al reddito ($\beta_2$). Se il prezzo è determinato dall'interazione di domanda e offerta, è endogeno: OLS sottostima (in valore assoluto) l'elasticità della domanda.

**Valutazione delle politiche pubbliche.** Modelli del tipo $y_i = \beta_0 + \beta_1 D_i + \boldsymbol{x}_i'\boldsymbol{\gamma} + u_i$ dove $D_i$ è un indicatore di trattamento (es. partecipazione a un programma). Se l'assegnazione al trattamento è randomizzata, OLS stima l'effetto causale medio (ATE). In assenza di randomizzazione, servono strategie IV/DiD/RDD.

**Stima di costi e ricavi aziendali.** Modelli di costo $\ln C = \beta_0 + \beta_1 \ln Q + \beta_2 \ln w + u$ (dove $Q$ è output, $w$ è il costo dei fattori) sono usati per stimare economie di scala ($\beta_1 < 1$) e pass-through dei costi. La qualità dei dati e la specificazione del modello sono cruciali.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Modello CLRM | $\mathbf{y} = X\boldsymbol{\beta} + \mathbf{u}$ | Lineare nei parametri |
| Stimatore OLS | $\hat{\boldsymbol{\beta}} = (X'X)^{-1}X'\mathbf{y}$ | Minimizza RSS |
| OLS.4 (esogeneità) | $E[\mathbf{u} \mid X] = \mathbf{0}$ | Assunzione critica per non distorsione |
| OLS.5 (sferici) | $\text{Var}(\mathbf{u} \mid X) = \sigma^2 I_n$ | Necessaria per BLUE |
| Varianza OLS | $\sigma^2(X'X)^{-1}$ | Sotto OLS.1–OLS.5 |
| Stima $\sigma^2$ | $\hat{\sigma}^2 = \text{RSS}/(n-k-1)$ | Non distorta |
| Gauss-Markov | OLS è BLUE | Sotto OLS.1–OLS.5 |
| $R^2$ | $1 - \text{RSS}/\text{TSS}$ | Bontà di adattamento |
| OLS.6 (normalità) | $u_i \sim \mathcal{N}(0,\sigma^2)$ | Per inferenza esatta |

## 11. Esercizi

<details>
<summary>Esercizio 1: Interpretazione del modello log-lineare</summary>

Modello salariale: $\ln(\text{salario}) = \beta_0 + \beta_1 \text{istruzione} + \beta_2 \text{esperienza} + u$.

Stime: $\hat{\beta}_0 = 5.2$, $\hat{\beta}_1 = 0.09$, $\hat{\beta}_2 = 0.04$.

(a) Interpretare $\hat{\beta}_1$ e $\hat{\beta}_2$.
(b) Qual è il salario previsto per una persona con 12 anni di istruzione e 5 anni di esperienza?
(c) Cosa significa che il modello è log-lineare?

**Soluzione:**

(a) $\hat{\beta}_1 = 0.09$: un anno aggiuntivo di istruzione è associato, in media, a circa il 9% in più di salario (cet. par., per piccole variazioni la variazione percentuale $\approx \Delta\ln y \cdot 100$). $\hat{\beta}_2 = 0.04$: un anno in più di esperienza è associato al 4% in più di salario (cet. par.).

(b) $\ln(\hat{\text{salario}}) = 5.2 + 0.09 \cdot 12 + 0.04 \cdot 5 = 5.2 + 1.08 + 0.20 = 6.48$. Quindi $\hat{\text{salario}} = e^{6.48} \approx 651$ (in unità della variabile originale).

(c) "Log-lineare" significa che il logaritmo di $y$ è lineare nei regressori. I coefficienti si interpretano come effetti *percentuali* approssimati (semi-elasticità quando i regressori sono livelli, elasticità quando anche i regressori sono in log).

</details>

<details>
<summary>Esercizio 2: Verifica delle assunzioni CLRM</summary>

Per ognuna delle seguenti situazioni, indica quale assunzione è violata e perché:

(a) Nel modello $y_i = \beta_0 + \beta_1 x_i + u_i$, si sospetta che le persone con reddito alto abbiano $u_i$ più variabile.
(b) Nel modello di domanda, il prezzo $x_i$ è determinato dall'interazione di domanda e offerta.
(c) Si include sia "reddito mensile" che "reddito annuale" (che è 12× il mensile) come regressori separati.

**Soluzione:**

(a) Violazione di **OLS.5** (omoschedasticità): la varianza dell'errore dipende da $x_i$ (eteroschedasticità). OLS rimane non distorto ma non è più BLUE; gli SE classici sono distorti.

(b) Violazione di **OLS.4** (esogeneità): $\text{Cov}(x_i, u_i) \neq 0$ perché il prezzo dipende dalla domanda, che dipende dall'errore $u_i$. OLS è distorto e inconsistente. Soluzione: variabili strumentali.

(c) Violazione di **OLS.3** (no multicollinearità perfetta): le due variabili sono legate da una relazione lineare esatta ($x_2 = 12 x_1$). La matrice $X'X$ è singolare e $(X'X)^{-1}$ non esiste. OLS non può essere calcolato — bisogna eliminare una delle due variabili.

</details>

<details>
<summary>Esercizio 3: Calcolo OLS matriciale</summary>

Dati: $\mathbf{y} = (1, 3, 5, 7)'$, regressore $x = (1, 2, 3, 4)'$, con intercetta.

(a) Costruire la matrice $X$.
(b) Calcolare $\hat{\boldsymbol{\beta}} = (X'X)^{-1}X'\mathbf{y}$.
(c) Calcolare i residui e verificare che $X'\hat{\mathbf{u}} = \mathbf{0}$.

**Soluzione:**

(a) $X = \begin{pmatrix}1&1\\1&2\\1&3\\1&4\end{pmatrix}$.

(b) $X'X = \begin{pmatrix}4&10\\10&30\end{pmatrix}$, $\det = 120-100=20$.

$(X'X)^{-1} = \frac{1}{20}\begin{pmatrix}30&-10\\-10&4\end{pmatrix}$.

$X'\mathbf{y} = \begin{pmatrix}16\\50\end{pmatrix}$.

$\hat{\boldsymbol{\beta}} = \frac{1}{20}\begin{pmatrix}30&-10\\-10&4\end{pmatrix}\begin{pmatrix}16\\50\end{pmatrix} = \frac{1}{20}\begin{pmatrix}-20\\40\end{pmatrix} = \begin{pmatrix}-1\\2\end{pmatrix}$.

$\hat{\beta}_0 = -1$, $\hat{\beta}_1 = 2$. Retta: $\hat{y} = -1 + 2x$.

(c) Valori fitted: $\hat{y} = (1, 3, 5, 7)'$ (identici a $\mathbf{y}$!). Residui $\hat{\mathbf{u}} = \mathbf{0}$. Fit perfetto (4 punti esattamente su una retta). Verifica automaticamente $X'\hat{\mathbf{u}} = \mathbf{0}$.

</details>

<details>
<summary>Esercizio 4: Teorema di Gauss-Markov</summary>

Il teorema di Gauss-Markov afferma che OLS è BLUE. Spiegare:

(a) Cosa significa "lineare" nel BLUE?
(b) Cosa significa "non distorto"?
(c) Cosa significa "Best" (varianza minima)?
(d) Quale assunzione del CLRM è strettamente necessaria per avere BLUE? Quale NON è necessaria?

**Soluzione:**

(a) **Lineare**: lo stimatore è una funzione lineare di $\mathbf{y}$, cioè $\hat{\boldsymbol{\beta}} = C\mathbf{y}$ per qualche matrice (dipendente da $X$ ma non da $\mathbf{y}$). OLS è lineare con $C = (X'X)^{-1}X'$.

(b) **Non distorto**: $E[\hat{\boldsymbol{\beta}} \mid X] = \boldsymbol{\beta}$ — in media (su campioni ripetuti) lo stimatore centra il vero parametro.

(c) **Best**: tra tutti gli stimatori lineari non distorti, OLS ha la matrice di varianza-covarianza minima nel senso di Loewner — cioè qualsiasi combinazione lineare $c'\hat{\boldsymbol{\beta}}$ ha varianza minima tra tutti i BLUE.

(d) Necessarie: OLS.1–OLS.5 (inclusa omoschedasticità OLS.5). **Non necessaria**: OLS.6 (normalità) — Gauss-Markov non richiede normalità degli errori, solo che OLS.1–OLS.5 siano soddisfatte.

</details>

<details>
<summary>Esercizio 5: Bias da variabile omessa</summary>

Modello vero: $y = 2 + 3x_1 + 1.5x_2 + u$ con $E[u] = 0$. Si stima il modello ristretto $y = \alpha_0 + \alpha_1 x_1 + v$ (omettendo $x_2$).

Sapendo che nella popolazione $x_2 = 0.5 x_1 + \eta$ (con $\eta$ indipendente da $x_1$):

(a) Calcolare il bias di $\hat{\alpha}_1$ rispetto a $\beta_1 = 3$.
(b) In che direzione è il bias?

**Soluzione:**

La formula del bias da variabile omessa è: $E[\hat{\alpha}_1] = \beta_1 + \beta_2 \cdot \delta_{21}$, dove $\delta_{21} = \text{Cov}(x_1, x_2)/\text{Var}(x_1)$.

(a) Poiché $x_2 = 0.5 x_1 + \eta$: $\text{Cov}(x_1, x_2) = 0.5\text{Var}(x_1)$, quindi $\delta_{21} = 0.5$.

$E[\hat{\alpha}_1] = 3 + 1.5 \cdot 0.5 = 3 + 0.75 = 3.75$.

Bias $= 3.75 - 3 = +0.75$.

(b) Il bias è **positivo**: sovrastimiamo l'effetto di $x_1$. Intuitivamente: $x_1$ è correlato positivamente con $x_2$ ($\delta_{21} > 0$) e $x_2$ ha effetto positivo su $y$ ($\beta_2 > 0$). Quando $x_1$ cresce, cresce anche $x_2$, e $y$ cresce per entrambe le ragioni — ma regressando solo su $x_1$ attribuiamo tutto l'aumento a $x_1$.

</details>

<details>
<summary>Esercizio 6: Stima di σ² e R²</summary>

Modello $y_i = \beta_0 + \beta_1 x_i + u_i$, $n = 20$, $k = 1$.

Risultati: TSS $= 400$, RSS $= 80$.

(a) Calcolare $R^2$.
(b) Calcolare $\hat{\sigma}^2$.
(c) Se aggiungessi 3 regressori irrilevanti, come cambia $R^2$? Come cambia $\bar{R}^2$?

**Soluzione:**

(a) $R^2 = 1 - \text{RSS}/\text{TSS} = 1 - 80/400 = 1 - 0.2 = 0.80$.

(b) $\hat{\sigma}^2 = \text{RSS}/(n-k-1) = 80/(20-1-1) = 80/18 \approx 4.44$.

(c) $R^2$ **non può diminuire** aggiungendo regressori (anche irrilevanti): al minimo rimane uguale. Quindi $R^2 \geq 0.80$ con i 3 regressori aggiuntivi.

$\bar{R}^2 = 1 - \frac{\text{RSS}/(n-k-1)}{\text{TSS}/(n-1)}$ penalizza i regressori aggiuntivi. Con regressori irrilevanti, RSS scende poco ma i gradi di libertà si riducono: $\bar{R}^2$ tipicamente **diminuisce** (o rimane uguale in caso limite).

</details>

<details>
<summary>Esercizio 7: Dummy variable trap</summary>

Si vuole stimare l'effetto del genere sul salario con il modello:
$$\ln(\text{salario}) = \beta_0 + \beta_1 D_{\text{maschio}} + \beta_2 D_{\text{femmina}} + \gamma \text{istruzione} + u$$

(a) Perché questo modello è problematico?
(b) Come risolverlo?
(c) Come si interpreta il coefficiente della dummy che rimane?

**Soluzione:**

(a) Poiché $D_{\text{maschio}} + D_{\text{femmina}} = 1$ per ogni osservazione, la somma delle due dummy è identicamente uguale alla colonna degli uno (intercetta). La matrice $X$ non ha rango pieno: siamo nella **dummy variable trap**. $(X'X)$ è singolare, OLS non è calcolabile.

(b) Soluzione: omettere una delle due dummy (la **categoria di riferimento**). Es: includere solo $D_{\text{maschio}}$ e omettere $D_{\text{femmina}}$.

Modello corretto: $\ln(\text{salario}) = \beta_0 + \beta_1 D_{\text{maschio}} + \gamma \text{istruzione} + u$.

(c) $\beta_1$ misura il differenziale salariale dei maschi rispetto alle femmine (categoria di riferimento), a parità di istruzione. Se $\hat{\beta}_1 = 0.12$: i maschi guadagnano in media circa il 12% in più delle femmine con lo stesso livello di istruzione. $\beta_0$ è il log-salario medio atteso per una femmina ($D_{\text{maschio}} = 0$) con istruzione zero.

</details>

---
id: statistica-08-regressione-semplice
subject: statistica
topic_it: Regressione
topic_en: Regression
title_it: Regressione lineare semplice
title_en: Simple linear regression
level: purple
order: 8
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 13 — Regressione lineare"
---

## 1. Intuizione — analogia concreta + perché si studia

Immagina di voler prevedere il prezzo di un appartamento conoscendo solo la sua superficie in metri quadri. Hai a disposizione i dati di 100 appartamenti venduti nell'ultimo anno: per ognuno conosci la superficie e il prezzo. Se disegni questi punti su un grafico con la superficie sull'asse orizzontale e il prezzo su quello verticale, otterrai una nuvola di punti che tende a salire verso destra: più superficie, più prezzo.

La regressione lineare semplice cerca la **retta** che meglio descrive questa relazione. Non la retta che passa esattamente per tutti i punti (impossibile, perché ci sono errori di misurazione, fattori non osservati, variabilità casuale), ma quella che minimizza complessivamente la distanza verticale tra ogni punto e la retta stessa. Questa idea — minimizzare la somma dei quadrati delle distanze verticali — si chiama **OLS: Ordinary Least Squares**, minimi quadrati ordinari.

La regressione lineare semplice è lo strumento più fondamentale dell'analisi statistica applicata. Economisti la usano per stimare l'elasticità della domanda, medici per predire il rischio cardiovascolare, ingegneri per calibrare sensori. Capire come funziona nella versione semplice (una sola variabile esplicativa) è il prerequisito indispensabile per la regressione multipla, i modelli generalizzati, e quasi tutti i metodi moderni di machine learning supervisionato.

Quello che rende elegante la regressione lineare è che le stime OLS hanno proprietà statistiche ottimali: sono non distorte, efficienti tra tutti gli stimatori lineari (teorema di Gauss-Markov), e sotto normalità degli errori coincidono con le stime di massima verosimiglianza. Questo triplice ancoraggio teorico spiega perché la regressione lineare sia sopravvissuta cent'anni di innovazione statistica e resti il punto di riferimento contro cui confrontare metodi più complessi.

## 2. Prerequisiti

- Statistica descrittiva: media, varianza, deviazione standard, covarianza, correlazione
- Probabilità: variabili aleatorie, valor medio, varianza, distribuzione normale
- Algebra lineare elementare: prodotto scalare, sommatorie
- Inferenza statistica: test t di Student, intervalli di confidenza, p-value
- Derivate parziali (per le derivazioni OLS)

## 3. Teoria

### Il modello di regressione lineare semplice

Il modello è:

$$Y_i = \beta_0 + \beta_1 x_i + \varepsilon_i, \quad i = 1, \ldots, n$$

dove:

- $Y_i$ è la **variabile risposta** (dipendente) per l'osservazione $i$ — è aleatoria.
- $x_i$ è la **variabile esplicativa** (indipendente, predittore, regressore) — assunta fissa (non aleatoria) nel framework classico.
- $\beta_0$ è l'**intercetta** — il valore atteso di $Y$ quando $x = 0$.
- $\beta_1$ è la **pendenza** (slope) — la variazione attesa di $Y$ per un aumento unitario di $x$.
- $\varepsilon_i$ è il **termine di errore** — cattura tutto ciò che non è spiegato da $x$.

**Assunzioni classiche (Gauss-Markov + normalità):**

1. **Linearità:** $E[Y_i \mid x_i] = \beta_0 + \beta_1 x_i$.
2. **Omoschedasticità:** $\text{Var}(\varepsilon_i) = \sigma^2$ costante per ogni $i$.
3. **Incorrelazione:** $\text{Cov}(\varepsilon_i, \varepsilon_j) = 0$ per $i \neq j$.
4. **Normalità (per inferenza):** $\varepsilon_i \sim \mathcal{N}(0, \sigma^2)$ i.i.d.

### Stimatori OLS

Vogliamo trovare $\hat{\beta}_0$ e $\hat{\beta}_1$ che minimizzano la **RSS** (Residual Sum of Squares):

$$\text{RSS}(\beta_0, \beta_1) = \sum_{i=1}^{n}(y_i - \beta_0 - \beta_1 x_i)^2$$

Le soluzioni si ottengono derivando rispetto a $\beta_0$ e $\beta_1$ e uguagliando a zero. Si ottengono le **equazioni normali**, la cui soluzione è:

$$\hat{\beta}_1 = \frac{\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^{n}(x_i - \bar{x})^2} = \frac{S_{xy}}{S_{xx}}$$

$$\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}$$

dove $\bar{x} = \frac{1}{n}\sum x_i$, $\bar{y} = \frac{1}{n}\sum y_i$, $S_{xy} = \sum(x_i - \bar{x})(y_i - \bar{y})$, $S_{xx} = \sum(x_i - \bar{x})^2$.

### Teorema di Gauss-Markov

Sotto le assunzioni 1-3 (senza richiedere la normalità degli errori), gli stimatori OLS sono i **BLUE**: Best Linear Unbiased Estimators. Cioè tra tutti gli stimatori lineari di $\beta_0$ e $\beta_1$ che sono non distorti, OLS ha la varianza minima.

### Distribuzione degli stimatori

Sotto normalità degli errori:

$$\hat{\beta}_1 \sim \mathcal{N}\!\left(\beta_1, \frac{\sigma^2}{S_{xx}}\right), \qquad \hat{\beta}_0 \sim \mathcal{N}\!\left(\beta_0, \sigma^2\!\left(\frac{1}{n} + \frac{\bar{x}^2}{S_{xx}}\right)\right)$$

### Stima di $\sigma^2$ e inferenza

La varianza degli errori è stimata con:

$$\hat{\sigma}^2 = s_e^2 = \frac{\text{RSS}}{n-2} = \frac{\sum_{i=1}^{n}(y_i - \hat{y}_i)^2}{n-2}$$

Il denominatore è $n-2$ (non $n$) perché abbiamo stimato 2 parametri ($\beta_0, \beta_1$), perdendo 2 gradi di libertà. Si dimostra che $s_e^2$ è non distorto per $\sigma^2$.

**Errore standard di $\hat{\beta}_1$:**

$$\text{SE}(\hat{\beta}_1) = \frac{s_e}{\sqrt{S_{xx}}}$$

**Test t su $\beta_1$** — ipotesi $H_0: \beta_1 = 0$ (il predittore non ha effetto):

$$t = \frac{\hat{\beta}_1}{\text{SE}(\hat{\beta}_1)} \sim t(n-2) \quad \text{sotto } H_0$$

**Intervallo di confidenza al $95\%$ per $\beta_1$:**

$$\hat{\beta}_1 \pm t_{n-2, 0.025} \cdot \text{SE}(\hat{\beta}_1)$$

### Bontà di adattamento — $R^2$

La variabilità totale di $Y$ si decompone in parte spiegata dal modello e parte residua:

$$\underbrace{\sum(y_i - \bar{y})^2}_{\text{TSS}} = \underbrace{\sum(\hat{y}_i - \bar{y})^2}_{\text{ESS}} + \underbrace{\sum(y_i - \hat{y}_i)^2}_{\text{RSS}}$$

Il coefficiente di determinazione è:

$$R^2 = \frac{\text{ESS}}{\text{TSS}} = 1 - \frac{\text{RSS}}{\text{TSS}} \in [0, 1]$$

$R^2$ è la proporzione della varianza di $Y$ spiegata dal modello lineare. Nel caso semplice, $R^2 = \hat{\rho}_{xy}^2$ (quadrato della correlazione campionaria).

## 4. Derivazioni

### Derivazione degli stimatori OLS

Minimizziamo $\text{RSS} = \sum(y_i - \beta_0 - \beta_1 x_i)^2$.

Condizioni del primo ordine:

$$\frac{\partial \text{RSS}}{\partial \beta_0} = -2\sum(y_i - \beta_0 - \beta_1 x_i) = 0 \implies n\beta_0 + \beta_1 \sum x_i = \sum y_i$$

$$\frac{\partial \text{RSS}}{\partial \beta_1} = -2\sum x_i(y_i - \beta_0 - \beta_1 x_i) = 0 \implies \beta_0 \sum x_i + \beta_1 \sum x_i^2 = \sum x_i y_i$$

Dalla prima equazione: $\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}$.

Sostituendo nella seconda e semplificando (centrando le variabili):

$$\hat{\beta}_1 \sum(x_i - \bar{x})^2 = \sum(x_i - \bar{x})(y_i - \bar{y}) \implies \hat{\beta}_1 = \frac{S_{xy}}{S_{xx}}$$

La condizione del secondo ordine (matrice Hessiana definita positiva) è soddisfatta quando $S_{xx} > 0$, cioè quando i valori di $x$ non sono tutti uguali.

### Non distorsione di $\hat{\beta}_1$

$$E[\hat{\beta}_1] = E\!\left[\frac{\sum(x_i-\bar{x})Y_i}{S_{xx}}\right] = \frac{\sum(x_i-\bar{x})E[Y_i]}{S_{xx}} = \frac{\sum(x_i-\bar{x})(\beta_0+\beta_1 x_i)}{S_{xx}}$$

Usando che $\sum(x_i-\bar{x}) = 0$ e $\sum(x_i-\bar{x})x_i = S_{xx}$:

$$E[\hat{\beta}_1] = \frac{\beta_1 S_{xx}}{S_{xx}} = \beta_1 \checkmark$$

## 5. Esempi

**Esempio 1 — Calcolo base degli stimatori OLS**

Dati $(x, y)$: $(1,2), (2,4), (3,5), (4,4), (5,5)$.

$\bar{x} = 3$, $\bar{y} = 4$.

$S_{xx} = (1-3)^2 + (2-3)^2 + 0 + (4-3)^2 + (5-3)^2 = 4+1+0+1+4 = 10$.

$S_{xy} = (1-3)(2-4) + (2-3)(4-4) + 0 + (4-3)(4-4) + (5-3)(5-4) = 4+0+0+0+2 = 6$.

$\hat{\beta}_1 = 6/10 = 0.6$, $\hat{\beta}_0 = 4 - 0.6 \times 3 = 2.2$.

Retta stimata: $\hat{y} = 2.2 + 0.6x$.

---

**Esempio 2 — Calcolo di $R^2$**

Per i dati dell'Esempio 1: TSS $= \sum(y_i - 4)^2 = 4+0+1+0+1 = 6$.

Valori fittati: $\hat{y}_1 = 2.8$, $\hat{y}_2 = 3.4$, $\hat{y}_3 = 4.0$, $\hat{y}_4 = 4.6$, $\hat{y}_5 = 5.2$.

RSS $= (2-2.8)^2 + (4-3.4)^2 + (5-4)^2 + (4-4.6)^2 + (5-5.2)^2 = 0.64+0.36+1+0.36+0.04 = 2.4$.

$R^2 = 1 - 2.4/6 = 0.6$. Il modello spiega il 60% della variabilità di $Y$.

---

**Esempio 3 — Interpretazione dei coefficienti**

Modello stimato: $\hat{y} = 30 + 2.5x$, dove $y$ è il salario annuo in k€ e $x$ sono gli anni di esperienza.

- $\hat{\beta}_0 = 30$: un neoassunto (0 anni) guadagna in media 30 k€ (intercetta — ha senso solo se $x=0$ è nel dominio dei dati).
- $\hat{\beta}_1 = 2.5$: ogni anno aggiuntivo di esperienza è associato in media a 2.5 k€ in più. Attenzione: è associazione, non causalità.

---

**Esempio 4 — Test di significatività su $\beta_1$**

Con $n = 20$, $\hat{\beta}_1 = 0.8$, $\text{SE}(\hat{\beta}_1) = 0.3$. Testare $H_0: \beta_1 = 0$ a $\alpha = 0.05$.

$t = 0.8/0.3 = 2.67$. Valore critico $t_{18, 0.025} \approx 2.10$.

Poiché $2.67 > 2.10$, si rifiuta $H_0$: la pendenza è statisticamente significativa.

---

**Esempio 5 — Intervallo di confidenza per $\beta_1$**

Con i dati dell'Esempio 4, IC al 95% per $\beta_1$:

$0.8 \pm 2.10 \times 0.3 = 0.8 \pm 0.63 = [0.17, 1.43]$.

Poiché l'intervallo non contiene 0, confermiamo che $\beta_1 \neq 0$ a livello 5%.

---

**Esempio 6 — Predizione puntuale e intervallo**

Con $\hat{y} = 30 + 2.5x$ e $s_e = 4$, $n = 30$, $\bar{x} = 5$, $S_{xx} = 100$.

Per $x^* = 8$: $\hat{y}^* = 30 + 2.5 \times 8 = 50$ k€.

Errore standard della predizione media: $\text{SE}_{\hat{\mu}} = s_e\sqrt{\frac{1}{n} + \frac{(x^*-\bar{x})^2}{S_{xx}}} = 4\sqrt{\frac{1}{30} + \frac{9}{100}} \approx 4 \times 0.337 \approx 1.35$.

IC al 95% per la media di $Y$ a $x^*=8$: $50 \pm 2.048 \times 1.35 \approx [47.2, 52.8]$ k€.

---

**Esempio 7 — Relazione tra $R^2$ e correlazione**

Se la correlazione campionaria tra $x$ e $y$ è $\hat{\rho} = 0.9$, allora $R^2 = 0.81$: l'81% della variabilità di $y$ è spiegata linearmente da $x$.

Se $\hat{\rho} = -0.7$ (correlazione negativa), $R^2 = 0.49$: il segno della correlazione non influenza $R^2$, che è sempre non negativo.

---

**Esempio 8 — Correlazione alta ma modello sbagliato**

$R^2 = 0.95$, ma il grafico dei residui mostra una curva sistematica: i residui non sono casuali attorno a zero. Questo indica che la relazione non è lineare. $R^2$ alto non implica modello corretto — occorre sempre controllare i residui.

## 6. Grafico

```plot
{"fn":"0.6*x+2.2","domain":[0,6],"yDomain":[0,8],"title":"Retta di regressione OLS","label1":"ŷ = 2.2 + 0.6x","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"a*x+b","domain":[-5,5],"yDomain":[-10,10],"params":[{"name":"a","min":-3,"max":3,"step":0.1,"default":0.6},{"name":"b","min":-5,"max":5,"step":0.5,"default":2}],"title":"Retta ŷ = a·x + b: esplora l'effetto di pendenza e intercetta"}
```

## 8. Errori comuni

**Errore 1 — Confondere correlazione e causalità.**
$\hat{\beta}_1 \neq 0$ significa che $x$ e $Y$ sono linearmente associati, non che $x$ causa $Y$. Un esempio classico: il consumo di gelati e gli annegamenti sono correlati (entrambi aumentano in estate), ma uno non causa l'altro.

**Errore 2 — Estrapolazione fuori dal dominio dei dati.**
La retta stimata è affidabile solo nell'intervallo di $x$ osservato. Predire $\hat{y}$ per valori di $x$ lontani dai dati può essere molto fuorviante, perché la relazione lineare potrebbe non valere altrove.

**Errore 3 — Interpretare l'intercetta quando $x=0$ non è sensato.**
Se il modello è "prezzo vs superficie" e la superficie minima nel campione è 30 m², l'intercetta ($\hat{y}$ a superficie zero) non ha interpretazione fisica. Forzare l'interpretazione è un errore concettuale.

**Errore 4 — Usare $R^2$ come unico criterio di bontà del modello.**
Un $R^2$ elevato non garantisce che il modello sia corretto. Il classico Quartetto di Anscombe mostra quattro dataset con $R^2$ identico ma strutture dati completamente diverse. Occorre sempre esaminare i grafici dei residui.

**Errore 5 — Dimenticare che OLS si basa su assunzioni.**
Se gli errori non sono omoscedastici (varianza non costante) o sono autocorrelati (es. serie temporali), le formule degli errori standard sono sbagliate e i test t non sono validi. Le assunzioni vanno verificate diagnosticamente.

**Errore 6 — Dividere RSS per $n$ invece di $n-2$.**
La stima non distorta di $\sigma^2$ usa $n-2$ gradi di libertà. Dividere per $n$ produce uno stimatore distorto (sottostima $\sigma^2$ perché non corregge per la stima di 2 parametri).

**Errore 7 — Credere che $\hat{\beta}_1$ sia la covarianza tra $x$ e $y$.**
$\hat{\beta}_1 = S_{xy}/S_{xx}$ è la covarianza campionaria divisa per la varianza campionaria di $x$. Non è uguale alla covarianza. La correlazione è $\hat{\rho} = S_{xy}/\sqrt{S_{xx} S_{yy}}$ — diverso.

## 9. Applicazioni reali

**Economia:** stima dell'elasticità (variazione percentuale di $y$ per una variazione percentuale di $x$, usando $\log y$ e $\log x$). Modelli domanda-prezzo, consumo-reddito, salario-istruzione.

**Medicina:** relazione tra dose di farmaco ed effetto, tra pressione arteriosa sistolica e diastolica, tra BMI e rischio di diabete. La regressione permette di quantificare l'associazione e di stimare soglie di rischio.

**Ingegneria:** calibrazione di strumenti di misura (il termometro legge $x$, la temperatura vera è $y = \beta_0 + \beta_1 x + \varepsilon$). Previsione di guasti in funzione dell'ore di utilizzo.

**Scienze naturali:** relazione tra concentrazione di CO₂ e temperatura media globale; modelli allometrici (relazione tra massa e lunghezza degli organismi — tipicamente su scala logaritmica). Il fisico usa la regressione per stimare costanti fisiche da dati sperimentali.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Modello | $Y_i = \beta_0 + \beta_1 x_i + \varepsilon_i$ | $\varepsilon_i \sim \mathcal{N}(0,\sigma^2)$ i.i.d. |
| Pendenza OLS | $\hat{\beta}_1 = S_{xy}/S_{xx}$ | $S_{xy} = \sum(x_i-\bar{x})(y_i-\bar{y})$ |
| Intercetta OLS | $\hat{\beta}_0 = \bar{y} - \hat{\beta}_1\bar{x}$ | La retta passa per $(\bar{x}, \bar{y})$ |
| Varianza residui | $s_e^2 = \text{RSS}/(n-2)$ | Non distorto per $\sigma^2$ |
| SE pendenza | $\text{SE}(\hat{\beta}_1) = s_e/\sqrt{S_{xx}}$ | Usato per test t e IC |
| Test $H_0: \beta_1=0$ | $t = \hat{\beta}_1/\text{SE}(\hat{\beta}_1) \sim t(n-2)$ | Sotto $H_0$ e normalità |
| Bontà adatt. | $R^2 = 1 - \text{RSS}/\text{TSS}$ | $R^2 = \hat{\rho}_{xy}^2$ nel caso semplice |
| Decomposizione | $\text{TSS} = \text{ESS} + \text{RSS}$ | TSS $= \sum(y_i-\bar{y})^2$ |
| BLUE | Gauss-Markov | Tra tutti gli stimatori lineari non distorti |

## 11. Esercizi

<details>
<summary>Esercizio 1: Stima OLS da dati</summary>

Dati $(x, y)$: $(2, 5), (4, 7), (6, 9), (8, 10), (10, 14)$. Calcolare $\hat{\beta}_0$, $\hat{\beta}_1$ e la retta stimata.

**Soluzione:**

$\bar{x} = 6$, $\bar{y} = 9$.

$S_{xx} = (2-6)^2 + (4-6)^2 + 0 + (8-6)^2 + (10-6)^2 = 16+4+0+4+16 = 40$.

$S_{xy} = (2-6)(5-9) + (4-6)(7-9) + 0 + (8-6)(10-9) + (10-6)(14-9) = 16+4+0+2+20 = 42$.

$\hat{\beta}_1 = 42/40 = 1.05$, $\hat{\beta}_0 = 9 - 1.05 \times 6 = 2.7$.

Retta: $\hat{y} = 2.7 + 1.05x$. Per ogni unità di $x$, $y$ aumenta di circa 1.05 unità.

</details>

<details>
<summary>Esercizio 2: Calcolo di R² e interpretazione</summary>

Per i dati dell'Esercizio 1, calcolare RSS, TSS, e $R^2$.

**Soluzione:**

Valori fittati: $\hat{y}_1 = 4.8$, $\hat{y}_2 = 6.9$, $\hat{y}_3 = 9.0$, $\hat{y}_4 = 11.1$, $\hat{y}_5 = 13.2$.

Residui: $0.2, 0.1, 0, -1.1, 0.8$.

RSS $= 0.04 + 0.01 + 0 + 1.21 + 0.64 = 1.9$.

TSS $= 16+4+0+1+25 = 46$.

$R^2 = 1 - 1.9/46 \approx 0.959$. Il modello spiega il 95.9% della variabilità di $y$.

</details>

<details>
<summary>Esercizio 3: Test di significatività sulla pendenza</summary>

$n = 25$, $\hat{\beta}_1 = 1.5$, $s_e = 3$, $S_{xx} = 50$. Testare $H_0: \beta_1 = 0$ a $\alpha = 0.05$.

**Soluzione:**

$\text{SE}(\hat{\beta}_1) = 3/\sqrt{50} = 3/7.07 \approx 0.424$.

$t = 1.5/0.424 \approx 3.54$.

Valore critico $t_{23, 0.025} \approx 2.069$.

Poiché $3.54 > 2.069$, si **rifiuta** $H_0$: la pendenza è statisticamente significativa a livello 5%.

</details>

<details>
<summary>Esercizio 4: Intervallo di confidenza per β₁</summary>

Con i dati dell'Esercizio 3, costruire un IC al 95% per $\beta_1$.

**Soluzione:**

$\hat{\beta}_1 \pm t_{23, 0.025} \times \text{SE}(\hat{\beta}_1) = 1.5 \pm 2.069 \times 0.424 = 1.5 \pm 0.877 = [0.623, 2.377]$.

Interpretazione: con il 95% di confidenza, un aumento unitario di $x$ è associato a un aumento di $y$ compreso tra 0.62 e 2.38 unità.

</details>

<details>
<summary>Esercizio 5: Interpretazione pratica dei coefficienti</summary>

Il modello $\hat{y} = 1200 + 50x$ descrive il costo mensile (€) in funzione del numero di dipendenti $x$ in un'azienda. Interpretare $\hat{\beta}_0$ e $\hat{\beta}_1$.

**Soluzione:**

$\hat{\beta}_0 = 1200$: costo fisso mensile (anche con zero dipendenti, l'azienda sostiene 1200€ di costi — affitto, utenze, ecc.).

$\hat{\beta}_1 = 50$: ogni dipendente aggiuntivo è associato in media a 50€ di costo mensile in più (costo variabile per unità di lavoro).

</details>

<details>
<summary>Esercizio 6: Verifica della relazione R² = ρ²</summary>

Se la correlazione campionaria tra $x$ e $y$ è $\hat{\rho} = -0.8$, qual è $R^2$ della regressione semplice di $y$ su $x$?

**Soluzione:**

$R^2 = \hat{\rho}^2 = (-0.8)^2 = 0.64$. Il segno negativo della correlazione indica relazione inversa (al crescere di $x$, $y$ diminuisce), ma $R^2$ è sempre non negativo e misura solo la forza dell'associazione lineare.

</details>

<details>
<summary>Esercizio 7: Diagnosi — residui sistematici</summary>

Dopo aver stimato una regressione semplice, il grafico dei residui in funzione dei valori fittati mostra una forma a U. Cosa suggerisce questo pattern? Come rimediare?

**Soluzione:**

Una forma a U nei residui indica che la relazione tra $x$ e $y$ non è lineare ma curvilinea. Il modello lineare sistematicamente sottostima $y$ per valori bassi e alti di $\hat{y}$ e sovrastima per valori medi.

Possibili rimedi: aggiungere un termine quadratico ($x^2$) al modello, trasformare le variabili (es. $\log x$ o $\sqrt{x}$), oppure usare un modello non lineare. Il $R^2$ elevato non esclude problemi di specificazione del modello.

</details>

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

## 1. Intuizione — analogia concreta e perché si studia

Immagina di studiare il PIL trimestrale di un paese. Se l'economia va male questo trimestre, c'è una buona probabilità che vada male anche il prossimo: le recessioni durano mesi, non giorni. Questo "trascinamento" degli effetti nel tempo è esattamente l'autocorrelazione: gli errori del modello non sono indipendenti fra di loro, ma si "ricordano" del passato.

Nell'analisi delle serie storiche, l'autocorrelazione dei residui è quasi la regola più che l'eccezione. Quando stimi una regressione su dati mensili di inflazione, tassi di interesse o consumi, gli shock che colpiscono l'economia in un dato mese tendono a propagarsi nei mesi successivi. Un'impresa che subisce un calo delle vendite a gennaio probabilmente lo subisce anche a febbraio e marzo.

Il problema fondamentale è che l'autocorrelazione non rende OLS distorto — i coefficienti stimati rimangono centrati sul vero valore — ma rende gli errori standard completamente sbagliati. E un errore standard sbagliato significa t-stat sbagliati, p-value sbagliati, intervalli di confidenza sbagliati. In pratica, con autocorrelazione positiva si tende a trovare "effetti significativi" che non esistono davvero, oppure ad essere eccessivamente sicuri della propria stima.

Capire, rilevare e correggere l'autocorrelazione è quindi essenziale ogni volta che lavori con dati temporali — e in econometria, la maggior parte dei dati macro sono temporali.

## 2. Prerequisiti

- Stima OLS e ipotesi CLRM (OLS.1–OLS.5)
- Residui OLS e loro proprietà
- Concetto di processo stocastico stazionario
- Varianza e covarianza di variabili aleatorie
- Concetto di matrice di varianza-covarianza degli errori

## 3. Teoria

### 3.1 Definizione formale

Nel modello classico di regressione lineare, l'ipotesi OLS.5 richiede che gli errori siano sfericali:

$$\text{Var}(\mathbf{u}) = \sigma^2 \mathbf{I}_n$$

L'**autocorrelazione** (o correlazione seriale) si verifica quando questa ipotesi è violata nel senso temporale:

$$\text{Cov}(u_t, u_s) \neq 0 \quad \text{per } t \neq s$$

In modo equivalente: la matrice $\Omega = \text{Var}(\mathbf{u})/\sigma^2$ non è l'identità, ma ha elementi fuori dalla diagonale diversi da zero.

### 3.2 Il processo AR(1) per gli errori

Il caso più comune di autocorrelazione è il processo **autoregressivo del primo ordine** (AR(1)):

$$u_t = \rho \, u_{t-1} + \varepsilon_t, \qquad \lvert\rho\rvert < 1, \qquad \varepsilon_t \sim \text{i.i.d.}(0, \sigma_\varepsilon^2)$$

dove:
- $\rho$ è il **coefficiente di autocorrelazione seriale** del primo ordine ($-1 < \rho < 1$ garantisce la stazionarietà)
- $\varepsilon_t$ è il termine d'errore "puro", indipendente e identicamente distribuito

Da questo processo si derivano le proprietà degli errori:

$$E[u_t] = 0, \qquad \text{Var}(u_t) = \frac{\sigma_\varepsilon^2}{1-\rho^2}, \qquad \text{Cov}(u_t, u_{t-j}) = \rho^j \cdot \frac{\sigma_\varepsilon^2}{1-\rho^2}$$

La correlazione al lag $j$ è semplicemente $\rho^j$: decade esponenzialmente con il tempo.

### 3.3 Conseguenze dell'autocorrelazione per OLS

**a) OLS rimane non distorto e consistente.** Se le ipotesi OLS.1–OLS.4 (inclusa l'esogeneità stretta dei regressori) sono soddisfatte, $E[\hat{\boldsymbol\beta}_{OLS}] = \boldsymbol\beta$ anche con autocorrelazione. Il problema non è il punto di stima, ma la sua precisione.

**b) OLS non è più BLUE.** Lo stimatore più efficiente (BLUE) in presenza di errori autocorrelati è il **GLS** (Generalized Least Squares), che tiene conto della struttura di covarianza degli errori.

**c) Gli errori standard classici sono distorti.** Questo è il problema pratico più grave. Con $\rho > 0$:

$$E[\hat{\sigma}^2_{OLS}] \approx \sigma^2 \left(1 + 2\rho \frac{T-1}{T}\right)$$

Per $\rho > 0$, la varianza degli errori OLS è sottostimata. Gli errori standard risultano troppo piccoli, le statistiche t troppo grandi, e si tende a **rigettare troppo spesso** $H_0$ (inflazione del tasso di errore di tipo I).

Con $\rho < 0$ succede il contrario: gli SE sono soprastimati, si rigetta troppo poco.

## 4. Derivazioni

### 4.1 La vera varianza dello stimatore OLS con autocorrelazione AR(1)

Consideriamo il modello semplice $y_t = \beta_0 + \beta_1 x_t + u_t$ con $u_t = \rho u_{t-1} + \varepsilon_t$.

Lo stimatore OLS è $\hat\beta_1 = \beta_1 + \frac{\sum_t (x_t - \bar x) u_t}{\sum_t (x_t - \bar x)^2}$.

La vera varianza è:

$$\text{Var}(\hat\beta_1) = \frac{\sigma^2}{\sum_t (x_t-\bar x)^2} \left[1 + 2\sum_{j=1}^{T-1} \rho^j \frac{\sum_t (x_t-\bar x)(x_{t+j}-\bar x)}{\sum_t (x_t-\bar x)^2}\right]$$

Il secondo fattore tra parentesi quadre è il **fattore di inflazione della varianza** dovuto all'autocorrelazione. Se $x_t$ è anch'esso autocorrelato positivamente e $\rho > 0$, le autocovarianze di $x$ sono positive e la vera varianza di $\hat\beta_1$ è molto più grande di quella classica.

### 4.2 La statistica di Durbin-Watson

$$DW = \frac{\sum_{t=2}^{n}(\hat u_t - \hat u_{t-1})^2}{\sum_{t=1}^n \hat u_t^2}$$

Espandendo il numeratore:

$$\sum_{t=2}^n (\hat u_t - \hat u_{t-1})^2 = \sum_{t=2}^n \hat u_t^2 - 2\sum_{t=2}^n \hat u_t \hat u_{t-1} + \sum_{t=2}^n \hat u_{t-1}^2 \approx 2\sum_{t=1}^n \hat u_t^2 - 2\sum_{t=2}^n \hat u_t \hat u_{t-1}$$

Quindi:

$$DW \approx 2\left(1 - \frac{\sum_{t=2}^n \hat u_t \hat u_{t-1}}{\sum_{t=1}^n \hat u_t^2}\right) = 2(1-\hat\rho)$$

dove $\hat\rho = \frac{\sum_{t=2}^n \hat u_t \hat u_{t-1}}{\sum_{t=1}^n \hat u_t^2}$ è la stima della correlazione seriale del primo ordine.

Questa relazione lineare $DW \approx 2(1-\hat\rho)$ è la chiave per interpretare DW:
- $\hat\rho \approx 0 \Rightarrow DW \approx 2$: nessuna autocorrelazione
- $\hat\rho \approx 1 \Rightarrow DW \approx 0$: forte autocorrelazione positiva
- $\hat\rho \approx -1 \Rightarrow DW \approx 4$: forte autocorrelazione negativa

## 5. Esempi

**Esempio 1 (base) — Interpretare DW**

Hai stimato una regressione sui consumi mensili e ottieni $DW = 0.9$.

Poiché $DW \approx 2(1-\hat\rho)$, si ottiene $\hat\rho \approx 1 - DW/2 = 1 - 0.45 = 0.55$.

Autocorrelazione positiva moderata-forte. I valori critici DW (tipicamente $d_L = 1.65$, $d_U = 1.69$ per $n=100$, $k=3$) confermano il rigetto di $H_0$: no autocorrelazione.

---

**Esempio 2 — Calcolo numerico di DW**

Residui OLS per 5 periodi: $\hat u = (0.5, -0.3, 0.8, -0.6, 0.4)$.

$\sum \hat u_t^2 = 0.25 + 0.09 + 0.64 + 0.36 + 0.16 = 1.50$

$\sum (\hat u_t - \hat u_{t-1})^2 = (-0.3-0.5)^2 + (0.8-(-0.3))^2 + (-0.6-0.8)^2 + (0.4-(-0.6))^2$
$= 0.64 + 1.21 + 1.96 + 1.00 = 4.81$

$DW = 4.81/1.50 = 3.21 \Rightarrow \hat\rho \approx 1 - 3.21/2 = -0.60$

Autocorrelazione **negativa**. I residui oscillano sopra e sotto zero in modo regolare.

---

**Esempio 3 — Test di Breusch-Godfrey (BG)**

Il test BG è più flessibile del DW perché testa autocorrelazione di ordine $p$ qualsiasi e funziona anche con lagged dependent variables.

Procedura: (1) Stimare il modello originale e ottenere $\hat u_t$. (2) Stimare la regressione ausiliaria: $\hat u_t = \alpha_0 + \alpha_1 x_t + \gamma_1 \hat u_{t-1} + \ldots + \gamma_p \hat u_{t-p} + e_t$. (3) La statistica $LM = n \cdot R^2_{aux} \sim \chi^2(p)$ sotto $H_0$.

Se $LM > \chi^2_{p,\alpha}$, rigettare $H_0$ (nessuna autocorrelazione fino all'ordine $p$).

---

**Esempio 4 — Gli errori standard HAC di Newey-West**

Con autocorrelazione, la matrice di varianza-covarianza corretta per OLS è:

$$\hat V_{NW}(\hat{\boldsymbol\beta}) = (X'X)^{-1} \hat S (X'X)^{-1}$$

dove $\hat S = \frac{n}{n-k} \left[\hat\Omega_0 + \sum_{j=1}^{m} w_j (\hat\Omega_j + \hat\Omega_j')\right]$

con $\hat\Omega_j = \frac{1}{n}\sum_{t=j+1}^n \hat u_t \hat u_{t-j} x_t x_{t-j}'$, pesi di Bartlett $w_j = 1 - j/(m+1)$, e banda $m \approx \lfloor 4(n/100)^{2/9} \rfloor$.

Questi errori standard sono **robusti a eteroschedasticità e autocorrelazione** (HAC).

---

**Esempio 5 — La trasformazione GLS con AR(1)**

Modello: $y_t = \beta_0 + \beta_1 x_t + u_t$, $u_t = \rho u_{t-1} + \varepsilon_t$.

Moltiplica l'equazione al tempo $t-1$ per $\rho$ e sottrai da quella al tempo $t$:

$$y_t - \rho y_{t-1} = \beta_0(1-\rho) + \beta_1(x_t - \rho x_{t-1}) + \varepsilon_t$$

Definendo $y_t^* = y_t - \rho y_{t-1}$ e $x_t^* = x_t - \rho x_{t-1}$:

$$y_t^* = \beta_0^* + \beta_1 x_t^* + \varepsilon_t$$

Ora $\varepsilon_t$ è i.i.d., quindi OLS su questo modello trasformato è BLUE — questo è lo stimatore GLS (o Cochrane-Orcutt se $\rho$ è stimato iterativamente).

---

**Esempio 6 — Effetto pratico sui test t**

Supponiamo $\hat\beta_1 = 0.8$, $SE_{classico} = 0.2$ (t-stat = 4.0, p-value < 0.01).

Con $\hat\rho = 0.7$ e autocorrelazione nei residui, i SE robusti HAC potrebbero dare $SE_{HAC} = 0.45$ (t-stat = 1.78, p-value ≈ 0.08).

La conclusione si ribalta completamente: da "fortemente significativo" a "non significativo al 5%".

---

**Esempio 7 — Identificare autocorrelazione dal grafico dei residui**

Un grafico dei residui $\hat u_t$ nel tempo che mostra lunghi periodi sopra lo zero (o sotto lo zero) è il segnale visivo più chiaro di autocorrelazione positiva. Se invece i residui alternano segno molto regolarmente, c'è autocorrelazione negativa. Il correlograma (grafico delle autocorrelazioni al lag $j$) mostra direttamente $\hat\rho_j$.

## 6. Grafico

```plot
{"fn":"0.7*Math.pow(0.7,x)*2","fn2":"0","domain":[0,15],"yDomain":[-0.5,2.5],"title":"Autocovarianza AR(1): Cov(u_t, u_{t+j}) = ρ^j · σ²","label1":"Cov(ρ=0.7)","label2":"Zero","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"Math.sin(x*0.5 + phi*Math.cos(x*0.3))*Math.exp(-0.05*x) + phi*0.3*Math.sin(x*0.2)","domain":[0,30],"yDomain":[-2,2],"params":[{"name":"phi","min":-0.95,"max":0.95,"step":0.05,"default":0.7}],"title":"Residui AR(1) — variare φ (autocorrelazione seriale)"}
```

## 8. Errori comuni

**Errore 1 — Confondere autocorrelazione con non stazionarietà.** Se la serie ha una tendenza (trend), i residui sembrano autocorrelati anche se il processo degli errori è i.i.d. La soluzione è includere il trend nel modello o lavorare sulle differenze, non correggere per autocorrelazione.

**Errore 2 — Usare il DW con variabili dipendenti ritardate.** Il test di Durbin-Watson è **invalido** (distorto verso 2) quando il modello include $y_{t-1}$ come regressore. In quel caso bisogna usare il test di Breusch-Godfrey.

**Errore 3 — Interpretare DW = 2 come prova definitiva di assenza di autocorrelazione.** DW testa solo l'autocorrelazione al lag 1. Potrebbero esistere autocorrelazioni significative ai lag 2, 3, 4... che DW non rileva. Meglio eseguire sempre il test BG per lag multipli.

**Errore 4 — Applicare HAC solo quando il test DW è significativo.** Gli SE HAC di Newey-West sono asintoticamente validi sia in presenza che in assenza di autocorrelazione: usarli sempre con dati temporali non fa danni, mentre ignorarli quando c'è autocorrelazione distorce l'inferenza.

**Errore 5 — Dimenticare che GLS richiede di conoscere (o stimare) ρ.** Il vero GLS (con $\rho$ noto) è teorico. In pratica si usa FGLS (Feasible GLS), che stima $\hat\rho$ dai residui OLS e poi applica la trasformazione. L'iterazione di questa procedura è chiamata Cochrane-Orcutt; la versione che tratta la prima osservazione con il metodo di Prais-Winsten è preferibile per non perdere dati.

**Errore 6 — Credere che l'autocorrelazione renda OLS inconsistente.** OLS rimane non distorto e consistente (ipotesi OLS.1–OLS.4 sono sufficienti). Il problema è l'efficienza e l'inferenza, non la consistenza. L'unico caso in cui l'autocorrelazione causa inconsistenza è quando il modello include variabili dipendenti ritardate (regressori endogeni).

**Errore 7 — Usare la stima di ρ solo per correggere senza diagnosticare la causa.** Spesso l'autocorrelazione è sintomo di variabili omesse rilevanti, dinamiche mal specificate, o forma funzionale errata. Prima di correggere meccanicamente, vale la pena capire perché gli errori sono correlati.

## 9. Applicazioni reali

**Previsione macroeconomica.** Nei modelli VAR per PIL, inflazione e disoccupazione, l'autocorrelazione degli errori è sistematica. Ignorarla produce previsioni inefficienti e intervalli di confidenza troppo stretti. I principali modelli DSGE dei banchieri centrali includono esplicitamente processi AR per gli shock.

**Econometria finanziaria.** I rendimenti azionari giornalieri mostrano autocorrelazione quasi nulla (mercati efficienti), ma la loro varianza (volatilità) è fortemente autocorrelata — da cui nascono i modelli GARCH. Ignorare l'autocorrelazione della volatilità porta a calcoli di VaR (Value at Risk) sbagliati con gravi conseguenze nella gestione del rischio.

**Analisi di politica fiscale.** Nei modelli che stimano il moltiplicatore fiscale usando dati trimestrali, Romer & Romer (2010) e altri autori usano sistematicamente errori standard HAC per rendere robusta l'inferenza all'autocorrelazione dei residui nelle equazioni di spesa pubblica.

**Studi di evento.** Nell'analisi degli effetti di politiche su serie storiche (es. impatto di una legge sui prezzi), le correzioni per autocorrelazione con metodi HAC o GLS sono standard, poiché i residui pre e post-evento tipicamente mostrano correlazione seriale significativa.

## 10. Riepilogo

| Concetto | Formula / Regola | Note |
| --- | --- | --- |
| Autocorrelazione AR(1) | $u_t = \rho u_{t-1} + \varepsilon_t$ | $\lvert\rho\rvert < 1$ per stazionarietà |
| Correlazione al lag $j$ | $\text{Corr}(u_t, u_{t-j}) = \rho^j$ | Decade esponenzialmente |
| Statistica DW | $DW \approx 2(1-\hat\rho)$ | $DW \in [0,4]$; ottimale $= 2$ |
| Test Breusch-Godfrey | $LM = n \cdot R^2_{aux} \sim \chi^2(p)$ | Valido anche con lagged DV |
| OLS con autocorrelazione | Non distorto, non BLUE, SE sbagliati | Se esogeneità stretta vale |
| Correzione HAC (Newey-West) | $\hat V_{NW}$ robusto a AC e HC | Banda $m \approx 4(n/100)^{2/9}$ |
| GLS (Cochrane-Orcutt) | Quasi-differenziazione con $\rho$ stimato | BLUE se modello AR(1) corretto |
| Prima differenza | $\Delta y_t = \Delta x_t \beta + \Delta u_t$ | Caso speciale $\rho = 1$ |

## 11. Esercizi

<details>
<summary>Esercizio 1: Calcolo DW e interpretazione</summary>

Hai stimato una regressione del consumo sul reddito con dati mensili per 5 anni (n=60). I residui OLS per i primi 5 periodi sono: $\hat u = (1.2, 0.9, 1.4, 1.1, 0.8)$.

(a) Calcola la statistica DW approssimativa per questi 5 osservazioni.
(b) Stima $\hat\rho$ dalla formula $DW \approx 2(1-\hat\rho)$.
(c) Cosa ti aspetteresti dal test di Breusch-Godfrey?

**Soluzione.**

(a) $\sum \hat u_t^2 = 1.44 + 0.81 + 1.96 + 1.21 + 0.64 = 6.06$

$\sum (\hat u_t - \hat u_{t-1})^2 = (0.9-1.2)^2 + (1.4-0.9)^2 + (1.1-1.4)^2 + (0.8-1.1)^2 = 0.09 + 0.25 + 0.09 + 0.09 = 0.52$

$DW = 0.52/6.06 = 0.086$

(b) $\hat\rho \approx 1 - DW/2 = 1 - 0.043 = 0.957$. Autocorrelazione positiva molto forte.

(c) Il test BG con $p=1$ dovrebbe dare un $LM$ molto significativo (il $R^2$ della regressione ausiliaria di $\hat u_t$ su $\hat u_{t-1}$ e i regressori originali sarà molto alto).

</details>

<details>
<summary>Esercizio 2: Conseguenze sugli errori standard</summary>

Un modello stima l'effetto del tasso d'interesse sui consumi con $\hat\beta_1 = -0.6$, $SE_{classico} = 0.15$ (t-stat = 4.0). Il test DW dà $DW = 0.8$, suggerendo $\hat\rho \approx 0.6$.

Spiega perché il t-stat di 4.0 è probabilmente gonfiato e descrivi qualitativamente come cambierebbe con SE HAC.

**Soluzione.**

Con $\rho = 0.6 > 0$, le osservazioni vicine contengono informazione ridondante. Il campione è "effettivamente più piccolo" di $n$. Gli errori standard classici ignorano questa ridondanza e risultano sottostimati.

Gli SE HAC di Newey-West incorporano le autocovarianze degli errori pesate con la finestra di Bartlett. Con $\rho = 0.6$, è ragionevole aspettarsi SE HAC almeno del 30-50% più grandi. Se $SE_{HAC} \approx 0.25$, il t-stat scende a $-0.6/0.25 = -2.4$, ancora significativo al 5% ma molto meno schiacciante.

L'effetto esatto dipende dall'autocorrelazione dei regressori $x_t$ oltre che degli errori.

</details>

<details>
<summary>Esercizio 3: La trasformazione Cochrane-Orcutt</summary>

Modello: $y_t = 2 + 0.8 x_t + u_t$, con $u_t = 0.6 u_{t-1} + \varepsilon_t$.

(a) Scrivi il modello trasformato da stimare con OLS.
(b) Interpreta i coefficienti del modello trasformato.
(c) Come si recuperano i coefficienti del modello originale?

**Soluzione.**

(a) Moltiplica l'equazione originale al tempo $t-1$ per $0.6$ e sottrai:

$(y_t - 0.6 y_{t-1}) = 2(1-0.6) + 0.8(x_t - 0.6 x_{t-1}) + \varepsilon_t$

$y_t^* = 0.8 + 0.8 x_t^* + \varepsilon_t$

dove $y_t^* = y_t - 0.6 y_{t-1}$ e $x_t^* = x_t - 0.6 x_{t-1}$.

(b) Il coefficiente di $x_t^*$ è direttamente $\beta_1 = 0.8$. L'intercetta del modello trasformato è $\beta_0(1-\rho) = 2 \cdot 0.4 = 0.8$.

(c) Si recupera $\hat\beta_0 = $ intercetta trasformata $/ (1-\hat\rho) = 0.8 / 0.4 = 2$. Il coefficiente $\beta_1$ è direttamente identificato.

</details>

<details>
<summary>Esercizio 4: Breusch-Godfrey passo-passo</summary>

Descrivi la procedura per testare autocorrelazione di ordine 3 in una regressione $y_t = \beta_0 + \beta_1 x_{1t} + \beta_2 x_{2t} + u_t$.

**Soluzione.**

**Passo 1:** Stimare il modello con OLS e salvare i residui $\hat u_t$.

**Passo 2:** Stimare la regressione ausiliaria:
$$\hat u_t = \alpha_0 + \alpha_1 x_{1t} + \alpha_2 x_{2t} + \gamma_1 \hat u_{t-1} + \gamma_2 \hat u_{t-2} + \gamma_3 \hat u_{t-3} + e_t$$

**Passo 3:** Calcolare $LM = n \cdot R^2_{aux}$.

**Passo 4:** Confrontare con $\chi^2(3)$ al livello di significatività scelto.

$H_0$: $\gamma_1 = \gamma_2 = \gamma_3 = 0$ (nessuna autocorrelazione fino all'ordine 3).

Se $LM > \chi^2_{3, 0.05} = 7.81$, rigettare $H_0$.

Il test è valido anche se il modello originale contiene $y_{t-1}$ come regressore (a differenza del DW).

</details>

<details>
<summary>Esercizio 5: Confronto DW vs BG</summary>

Un ricercatore stima il modello $y_t = \beta_0 + \beta_1 y_{t-1} + \beta_2 x_t + u_t$ e ottiene $DW = 1.95$. Può concludere che non c'è autocorrelazione?

**Soluzione.**

**No.** Il test DW è invalido in presenza di variabili dipendenti ritardate ($y_{t-1}$). La statistica DW è distorta verso 2 in questo caso, quindi tende a non rilevare l'autocorrelazione anche quando esiste.

La procedura corretta è il test di Breusch-Godfrey, che è valido anche con lagged dependent variables. Il ricercatore dovrebbe stimare la regressione ausiliaria $\hat u_t = \alpha_0 + \alpha_1 y_{t-1} + \alpha_2 x_t + \gamma_1 \hat u_{t-1} + e_t$ e calcolare $LM = n \cdot R^2_{aux} \sim \chi^2(1)$.

</details>

<details>
<summary>Esercizio 6: Scelta della banda in Newey-West</summary>

Con $n = 400$ osservazioni mensili, quale banda $m$ sceglieresti per gli errori standard HAC di Newey-West? Giustifica la scelta.

**Soluzione.**

La regola empirica standard è $m \approx \lfloor 4(n/100)^{2/9} \rfloor$.

Con $n = 400$: $m \approx \lfloor 4 \cdot (4)^{2/9} \rfloor = \lfloor 4 \cdot 4^{0.222} \rfloor$.

$4^{0.222} = e^{0.222 \ln 4} = e^{0.308} \approx 1.36$.

$m \approx \lfloor 4 \cdot 1.36 \rfloor = \lfloor 5.44 \rfloor = 5$.

Con dati mensili e potenziale stagionalità, alcuni econometristi usano $m = 12$ per catturare pattern annuali. La scelta di $m$ è un compromesso: bande più ampie catturano autocorrelazioni a lag più distanti ma introducono più varianza nella stima di $\hat V$.

</details>

<details>
<summary>Esercizio 7: Interpretazione economica dell'autocorrelazione</summary>

Un economista stima l'effetto della spesa pubblica sulla crescita del PIL trimestrale e trova autocorrelazione positiva forte nei residui ($\hat\rho = 0.8$). Quali possono essere le cause economiche di questa autocorrelazione?

**Soluzione.**

**Cause possibili:**

1. **Dinamiche di aggiustamento lento:** le imprese e i consumatori reagiscono agli stimoli fiscali gradualmente, non istantaneamente. Un moltiplicatore fiscale che si dispieg in più trimestri genera correlazione positiva negli errori se il modello non include abbastanza lag.

2. **Variabili omesse persistenti:** fattori non osservabili (fiducia delle imprese, shock tecnologici, ciclo internazionale) che influenzano la crescita e sono essi stessi molto autocorrelati. Se omessi dal modello, la loro persistenza si trasferisce nei residui.

3. **Ciclo economico:** la crescita del PIL ha una componente ciclica intrinseca (espansioni e recessioni durano trimestri). Se il modello non cattura questa ciclicità, i residui la rifletteranno.

4. **Errori di misurazione serialmente correlati:** le revisioni statistiche del PIL possono introdurre correlazione artificiale negli errori.

**Implicazione:** prima di correggere meccanicamente per autocorrelazione, è opportuno aggiungere lag della variabile dipendente o dei regressori al modello per catturare le dinamiche economiche esplicite.

</details>

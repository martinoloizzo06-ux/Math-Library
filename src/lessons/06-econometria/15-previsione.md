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

## 1. Intuizione — analogia concreta e perché si studia

Prevedere il futuro sembra impossibile — e per certi versi lo è. Ma le serie temporali economiche hanno strutture regolari che si possono sfruttare: il PIL del prossimo trimestre dipende da quello attuale, l'inflazione di oggi è correlata con quella del mese scorso, il prezzo del petrolio domani non è indipendente da quello di ieri. Queste **dipendenze temporali** sono il motore della previsione statistica.

L'idea fondamentale è usare tutta l'informazione disponibile fino a oggi — i valori passati della serie, di serie correlate, e qualsiasi altra variabile utile — per costruire la "migliore stima possibile" del valore futuro. La "migliore" previsione in senso statistico è quella che minimizza l'errore quadratico medio: il valore atteso condizionale $E[y_{T+h}\mid\mathcal{F}_T]$.

In econometria, la previsione non riguarda solo "indovinare" un numero. Riguarda decisioni concrete: una banca centrale deve sapere dove sarà l'inflazione tra 6 mesi per fissare i tassi oggi; un investitore vuole stimare la volatilità domani per coprirsi; un'impresa deve prevedere le vendite del prossimo trimestre per pianificare la produzione. La qualità delle previsioni si misura con metriche come RMSE, MAE, MAPE, e si confronta tra modelli con il **test di Diebold-Mariano**.

## 2. Prerequisiti

- Processi AR(p), MA(q), ARMA(p,q): stazionarietà e invertibilità
- Autocorrelazione e autocorrelazione parziale (ACF, PACF)
- Integrazione e differenziazione di serie non stazionarie (test ADF)
- Modelli VAR (Vector Autoregression): specificazione e stima
- Errori standard e intervalli di confidenza
- Concetto di valore atteso condizionale

## 3. Teoria

### 3.1 Previsione puntuale ottima

Data una serie $\{y_t\}$ e il filtro di informazione $\mathcal{F}_T = \sigma(y_T, y_{T-1}, \ldots)$ (tutta la storia osservata fino al tempo $T$), la **previsione ottima a orizzonte $h$** è:

$$\hat y_{T+h\mid T} = E[y_{T+h}\mid\mathcal{F}_T]$$

"Ottima" nel senso che minimizza l'errore quadratico medio atteso tra tutte le funzioni di $\mathcal{F}_T$:

$$\hat y_{T+h\mid T}^{opt} = \arg\min_{g(\mathcal{F}_T)} E[(y_{T+h} - g(\mathcal{F}_T))^2]$$

L'errore di previsione è $e_{T+h\mid T} = y_{T+h} - \hat y_{T+h\mid T}$, con $E[e_{T+h\mid T}\mid\mathcal{F}_T] = 0$ (non distorzione condizionale).

### 3.2 Previsione con modelli AR(p)

Per un processo **AR(1):** $y_t = c + \phi y_{t-1} + \varepsilon_t$

**Orizzonte 1:**
$$\hat y_{T+1\mid T} = c + \hat\phi y_T$$

**Orizzonte 2:** $E[y_{T+2}\mid\mathcal{F}_T] = c + \phi E[y_{T+1}\mid\mathcal{F}_T] = c + \phi \hat y_{T+1\mid T}$
$$\hat y_{T+2\mid T} = c + \hat\phi(c + \hat\phi y_T) = c(1+\hat\phi) + \hat\phi^2 y_T$$

**Orizzonte $h$ (formula chiusa):** denotando $\mu = c/(1-\phi)$ la media incondizionale:
$$\hat y_{T+h\mid T} = \mu + \hat\phi^h (y_T - \mu)$$

Per $\lvert\phi\rvert < 1$: le previsioni **convergono alla media** $\mu$ con $h \to \infty$ a velocità esponenziale. L'informazione iniziale $y_T - \mu$ decade con fattore $\hat\phi^h$. Quindi per orizzonti lunghi, tutti i modelli AR stazionari prevedono la media della serie.

Per **AR(p):** si usa iterativamente la regola delle aspettative iterate. Non esiste formula chiusa semplice per $h > p$ — si procede per ricorsione.

### 3.3 Previsione con ARIMA(p,d,q)

Un processo è **ARIMA(p,d,q)** se la sua $d$-esima differenza $\Delta^d y_t$ è un processo ARMA(p,q) stazionario.

**Identificazione (procedura di Box-Jenkins):**
1. Testare la stazionarietà (test ADF/PP). Se non stazionaria, differenziare ($d$ volte).
2. Guardare ACF e PACF di $\Delta^d y_t$ per identificare $p$ e $q$.
3. Stimare il modello ARIMA. Verificare che i residui siano white noise (Ljung-Box test).
4. Usare AIC/BIC per selezionare tra modelli concorrenti.

**Previsione ARIMA(1,1,0) (= random walk con drift):**

$$\Delta y_t = c + \phi \Delta y_{t-1} + \varepsilon_t$$

$\hat y_{T+1\mid T} = y_T + c + \hat\phi \Delta y_T$

Per $h$ passi: l'incertezza cresce con $h$. Per un random walk puro ($c=0$, $\phi=0$): $\hat y_{T+h\mid T} = y_T$ — la migliore previsione è sempre il valore corrente.

### 3.4 Previsione con VAR

Un **VAR(p)** (Vector Autoregression) per un vettore $\mathbf{y}_t = (y_{1t}, y_{2t}, \ldots, y_{nt})'$ di $n$ serie è:

$$\mathbf{y}_t = \mathbf{c} + \mathbf{A}_1 \mathbf{y}_{t-1} + \mathbf{A}_2 \mathbf{y}_{t-2} + \ldots + \mathbf{A}_p \mathbf{y}_{t-p} + \boldsymbol\varepsilon_t$$

dove $\mathbf{A}_j$ sono matrici $n \times n$ di coefficienti e $\boldsymbol\varepsilon_t \sim \mathcal{N}(\mathbf{0}, \boldsymbol\Sigma)$.

**Previsione a orizzonte 1:**
$$\hat{\mathbf{y}}_{T+1\mid T} = \hat{\mathbf{c}} + \hat{\mathbf{A}}_1 \mathbf{y}_T + \ldots + \hat{\mathbf{A}}_p \mathbf{y}_{T-p+1}$$

Il vantaggio del VAR è catturare le interdipendenze tra le serie: i valori passati del PIL possono aiutare a prevedere l'inflazione e viceversa.

**Ordine $p$:** selezionato tramite AIC o BIC applicati all'intero sistema VAR.

### 3.5 Intervalli di previsione

L'intervallo di previsione a $h$ passi e livello $(1-\alpha)$ è:

$$\hat y_{T+h\mid T} \pm z_{\alpha/2} \cdot \hat\sigma_{h}$$

dove $\hat\sigma_h$ è la deviazione standard dell'errore di previsione a orizzonte $h$.

Per AR(1) con $\sigma_\varepsilon^2$ noto:

$$\hat\sigma_h^2 = \sigma_\varepsilon^2 \sum_{j=0}^{h-1} \phi^{2j} = \sigma_\varepsilon^2 \frac{1-\phi^{2h}}{1-\phi^2}$$

Per $h \to \infty$: $\hat\sigma_\infty^2 \to \sigma_\varepsilon^2/(1-\phi^2) = \text{Var}(y_t)$ — l'intervallo di previsione converge alla variazione totale della serie. Per un random walk: $\hat\sigma_h^2 = h\sigma_\varepsilon^2$ — l'incertezza cresce senza limite.

Nota: questi intervalli sottostimano la vera incertezza perché ignorano l'incertezza dei parametri stimati $\hat\phi$, $\hat c$.

### 3.6 Metriche di valutazione della previsione

Dati $H$ passi fuori campione con previsioni $\{\hat y_{T+h}\}_{h=1}^H$ e valori reali $\{y_{T+h}\}_{h=1}^H$:

**MAE (Mean Absolute Error):**
$$MAE = \frac{1}{H}\sum_{h=1}^H \lvert y_{T+h} - \hat y_{T+h\mid T}\rvert$$

Misura l'errore medio in valore assoluto — nella stessa unità di misura di $y$.

**RMSE (Root Mean Squared Error):**
$$RMSE = \sqrt{\frac{1}{H}\sum_{h=1}^H (y_{T+h} - \hat y_{T+h\mid T})^2}$$

Penalizza gli errori grandi più del MAE (al quadrato). Nella stessa unità di misura di $y$.

**MAPE (Mean Absolute Percentage Error):**
$$MAPE = \frac{100}{H}\sum_{h=1}^H \left\lvert\frac{y_{T+h} - \hat y_{T+h\mid T}}{y_{T+h}}\right\rvert \%$$

Misura l'errore relativo — utile per confrontare previsioni di variabili in scale diverse. Problematico quando $y_{T+h} \approx 0$.

**MSPE (Mean Squared Prediction Error):** $MSPE = RMSE^2$.

### 3.7 Test di Diebold-Mariano

Il test DM confronta l'accuratezza previsionale di due modelli. Siano $e_{1,T+h}$ e $e_{2,T+h}$ gli errori di previsione dei due modelli. Definisci la differenza nella funzione di perdita:

$$d_{T+h} = L(e_{1,T+h}) - L(e_{2,T+h})$$

dove $L(\cdot) = (\cdot)^2$ per la perdita quadratica. Sotto $H_0$: $E[d_{T+h}] = 0$ (uguale accuratezza).

La statistica DM è:

$$DM = \frac{\bar d}{\sqrt{\hat V(\bar d)/H}} \xrightarrow{d} \mathcal{N}(0,1)$$

dove $\hat V(\bar d)$ è la stima HAC della varianza di $\bar d$ (per correggere per autocorrelazione degli errori di previsione).

## 4. Derivazioni

### 4.1 Formula chiusa per la previsione AR(1) a orizzonte h

Dalla ricorsione:

$$y_{T+h} = c + \phi y_{T+h-1} + \varepsilon_{T+h}$$

Prendendo l'attesa condizionale e notando che $E[\varepsilon_{T+h}\mid\mathcal{F}_T] = 0$:

$$\hat y_{T+h\mid T} = c + \phi \hat y_{T+h-1\mid T}$$

Questa ricorsione lineare ha soluzione $\hat y_{T+h\mid T} = A + B\phi^h$.

Con condizione iniziale $\hat y_{T\mid T} = y_T$: $A + B = y_T$.

Per $h \to \infty$ (modello stazionario): $\hat y_{T+h\mid T} \to c/(1-\phi) = \mu$, quindi $A = \mu$.

Quindi $B = y_T - \mu$ e:

$$\hat y_{T+h\mid T} = \mu + (y_T - \mu)\phi^h$$

### 4.2 Varianza dell'errore di previsione AR(1) a orizzonte h

$$y_{T+h} - \hat y_{T+h\mid T} = \sum_{j=0}^{h-1} \phi^j \varepsilon_{T+h-j}$$

(ottenuto per sostituzione successiva nell'equazione AR). Poiché $\varepsilon_t$ è i.i.d. con varianza $\sigma_\varepsilon^2$:

$$\text{Var}(y_{T+h} - \hat y_{T+h\mid T}) = \sigma_\varepsilon^2 \sum_{j=0}^{h-1} \phi^{2j} = \sigma_\varepsilon^2 \cdot \frac{1-\phi^{2h}}{1-\phi^2}$$

Per $h=1$: $\sigma_\varepsilon^2$ (solo l'incertezza del prossimo shock). Per $h \to \infty$: $\sigma_\varepsilon^2/(1-\phi^2) = \text{Var}(y_t)$.

## 5. Esempi

**Esempio 1 (base) — Previsione AR(1) a orizzonti multipli**

Modello: $y_t = 0.5 + 0.7 y_{t-1} + \varepsilon_t$. $y_{100} = 8$.

$\mu = 0.5/(1-0.7) = 1.67$

$\hat y_{101\mid 100} = 1.67 + 0.7(8-1.67) = 1.67 + 4.43 = 6.10$

$\hat y_{102\mid 100} = 1.67 + 0.7^2(8-1.67) = 1.67 + 3.10 = 4.77$

$\hat y_{110\mid 100} = 1.67 + 0.7^{10}(8-1.67) = 1.67 + 0.028 \times 6.33 = 1.67 + 0.18 = 1.85 \approx \mu$

Le previsioni convergono alla media $\mu = 1.67$ rapidamente ($0.7^{10} \approx 0.028$).

---

**Esempio 2 — Intervallo di previsione**

Stesso modello AR(1), $\hat\sigma_\varepsilon = 0.8$.

**Orizzonte 1:** $\hat\sigma_1 = 0.8$. IC 95%: $6.10 \pm 1.96 \times 0.8 = [4.53, 7.67]$.

**Orizzonte 5:** $\hat\sigma_5^2 = 0.64 \times (1-0.7^{10})/(1-0.49) = 0.64 \times 1.97/0.51 = 2.47$, $\hat\sigma_5 = 1.57$.
IC 95%: $2.25 \pm 1.96 \times 1.57 = [-0.83, 5.33]$.

**Orizzonte $\infty$:** $\hat\sigma_\infty = \sqrt{0.64/(1-0.49)} = \sqrt{1.25} = 1.12$. IC converge all'intervallo basato sulla distribuzione incondizionale di $y$.

---

**Esempio 3 — Calcolo RMSE, MAE, MAPE**

4 previsioni fuori campione:

| $h$ | $y_{T+h}$ | $\hat y_{T+h}$ | Errore | Errore² | Errore assoluto | Errore % |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 100 | 102 | -2 | 4 | 2 | 2.0% |
| 2 | 105 | 103 | 2 | 4 | 2 | 1.9% |
| 3 | 98 | 101 | -3 | 9 | 3 | 3.1% |
| 4 | 110 | 108 | 2 | 4 | 2 | 1.8% |
| Media | | | 0 | 5.25 | 2.25 | 2.2% |

$RMSE = \sqrt{5.25} = 2.29$, $MAE = 2.25$, $MAPE = 2.2\%$.

Errore medio = 0: le previsioni non sono sistematicamente sopra o sotto (non distorte).

---

**Esempio 4 — Test di Diebold-Mariano**

Confronto tra modello AR(1) e random walk su 40 previsioni fuori campione. Differenze nella perdita quadratica:

$d_{T+h} = e_{RW,T+h}^2 - e_{AR,T+h}^2$

$\bar d = 2.4$ (AR fa meglio in media: perdita maggiore per RW), $\hat{se}(\bar d) = 0.8$.

$DM = 2.4/0.8 = 3.0 > 1.96$: rigetto $H_0$ al 5%. Il modello AR(1) ha significativamente migliore accuratezza previsionale del random walk.

---

**Esempio 5 — ARIMA(1,1,0): previsione con serie non stazionaria**

Serie non stazionaria: $y_t$ è il livello del PIL. Prima differenza: $\Delta y_t = y_t - y_{t-1}$ (crescita del PIL). Se $\Delta y_t$ segue AR(1):

$\Delta y_t = 0.3 + 0.4\Delta y_{t-1} + \varepsilon_t$

Con $y_{100} = 1000$, $\Delta y_{100} = 15$ (crescita di 15):

$\hat{\Delta y}_{101} = 0.3 + 0.4 \times 15 = 6.3$

$\hat y_{101} = y_{100} + \hat{\Delta y}_{101} = 1000 + 6.3 = 1006.3$

$\hat{\Delta y}_{102} = 0.3 + 0.4 \times 6.3 = 2.82$

$\hat y_{102} = 1006.3 + 2.82 = 1009.1$

Le previsioni di crescita convergono a $\mu_{\Delta y} = 0.3/(1-0.4) = 0.5$, e il livello cresce linearmente.

---

**Esempio 6 — VAR(1) bivariato: previsione congiunta**

Modello VAR(1) per PIL ($y_{1t}$) e inflazione ($y_{2t}$):

$$\begin{pmatrix}y_{1,t+1}\\y_{2,t+1}\end{pmatrix} = \begin{pmatrix}0.1\\0.2\end{pmatrix} + \begin{pmatrix}0.7&0.1\\0.2&0.5\end{pmatrix}\begin{pmatrix}y_{1t}\\y_{2t}\end{pmatrix} + \begin{pmatrix}\varepsilon_{1t}\\\varepsilon_{2t}\end{pmatrix}$$

Con $y_{1,T} = 3\%$ (crescita PIL) e $y_{2,T} = 2\%$ (inflazione):

$\hat y_{1,T+1} = 0.1 + 0.7\cdot3 + 0.1\cdot2 = 0.1 + 2.1 + 0.2 = 2.4\%$

$\hat y_{2,T+1} = 0.2 + 0.2\cdot3 + 0.5\cdot2 = 0.2 + 0.6 + 1.0 = 1.8\%$

Il VAR cattura l'effetto del PIL sull'inflazione (coefficiente 0.2) e dell'inflazione sul PIL (coefficiente 0.1).

---

**Esempio 7 — Valutazione pseudo-out-of-sample**

Serie di $T = 200$ osservazioni. Procedura di valutazione rolling:

1. Stimare il modello sulle prime 100 osservazioni.
2. Prevedere osservazione 101, calcolare errore.
3. Aggiungere osservazione 101 al training set, ri-stimare, prevedere 102.
4. Ripetere fino all'osservazione 200: ottenere 100 errori fuori campione.
5. Calcolare RMSE su questi 100 errori.

Alternativa: finestra fissa (rolling window di 100 obs) invece di finestra espandente — utile se si sospetta instabilità strutturale del modello nel tempo.

## 6. Grafico

```plot
{"fn":"1.5 + Math.pow(0.8,x)*3","fn2":"1.5","domain":[0,20],"yDomain":[0,5.5],"title":"Previsione AR(1): convergenza alla media μ=1.5 (φ=0.8, y_0=4.5)","label1":"Previsione AR(1)","label2":"Media di lungo periodo μ","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"1.5 + Math.pow(phi,x)*3","domain":[0,20],"yDomain":[-1,5.5],"params":[{"name":"phi","min":0.01,"max":0.99,"step":0.01,"default":0.7}],"title":"Velocità di convergenza alla media al variare di φ"}
```

## 8. Errori comuni

**Errore 1 — Usare previsioni in-sample per confrontare modelli.** L'errore di previsione in-sample diminuisce sempre aggiungendo parametri al modello, anche inutili. Un ARIMA(5,1,5) con 10 parametri avrà sempre RMSE in-sample più basso di un ARIMA(1,1,0) con 2 parametri — ma non necessariamente migliori previsioni out-of-sample. La valutazione corretta è sempre pseudo-out-of-sample (o vera valutazione fuori campione su dati mai visti).

**Errore 2 — Non testare la stazionarietà prima di applicare modelli AR/ARMA.** Se la serie ha una radice unitaria (random walk), un modello AR stazionario produrrà previsioni completamente errate: sovrastima o sottostima sistematica, con intervalli di previsione troppo stretti. Il test ADF o KPSS è obbligatorio prima di specificare qualsiasi modello di serie storiche.

**Errore 3 — Confondere accuratezza previsionale e causalità.** Un modello può avere ottima accuratezza previsionale senza che i regressori abbiano un'interpretazione causale. Il PIL "prevede" il PIL futuro tramite AR, ma non è causa di sé stesso nel senso strutturale. I modelli previsionali (AR, VAR) non si prestano all'interpretazione causale senza identificazione strutturale aggiuntiva (SVAR, restrizioni di segno, ecc.).

**Errore 4 — Ignorare l'incertezza dei parametri nell'intervallo di previsione.** La formula $\hat y_{T+h} \pm z_{\alpha/2}\hat\sigma_h$ usa la varianza dell'errore di previsione calcolata come se i parametri $\phi$, $c$ fossero noti. In realtà sono stimati, e l'incertezza della stima si aggiunge all'incertezza previsionale — specialmente per orizzonti brevi e campioni piccoli. Gli intervalli "corretti" sono più ampi di quelli standard.

**Errore 5 — Applicare MAPE quando la serie ha valori vicini a zero.** Il MAPE divide per $y_{T+h}$: quando la serie ha valori vicini a zero (es. crescita del PIL durante una recessione grave), i MAPE diventano enormi e instabili. Usare invece RMSE, MAE, o sMAPE (symmetric MAPE) che evita la divisione per valori piccoli.

**Errore 6 — Prevedere con un VAR senza controllare la stazionarietà del sistema.** Un VAR è stabile (stazionario) se tutti gli autovalori della matrice compagna $\mathbf{A}$ (sistema AR nello spazio degli stati) hanno modulo minore di 1. Se il sistema è instabile, le previsioni esplodono con l'orizzonte. Prima di usare un VAR per previsioni, verificare sempre la stabilità e testare cointegrazione (modello VECM se necessario).

**Errore 7 — Non applicare la correzione HAC nella statistica di Diebold-Mariano.** Gli errori di previsione $e_{T+h}$ a orizzonti $h > 1$ sono autocorrelati per costruzione (dal momento che le previsioni a più passi si sovrappongono). La varianza di $\bar d$ va stimata con metodi HAC (Newey-West) che tengono conto di questa autocorrelazione. Usare la varianza classica (che assume i.i.d.) sottostima la varianza e porta a rigettare $H_0$ troppo spesso.

## 9. Applicazioni reali

**Previsione macroeconomica delle banche centrali.** La BCE e la Fed producono sistematicamente previsioni di inflazione e PIL a orizzonti 1-8 trimestri usando combinazioni di modelli ARIMA, VAR, DSGE, e modelli di machine learning. Le previsioni vengono valutate ex-post con RMSE rolling e confrontate con benchmark semplici (random walk, AR(1)) via test di Diebold-Mariano. Clark e West (2007) mostrano che i modelli DSGE superano il random walk per la previsione dell'inflazione USA a orizzonti di 1-4 trimestri.

**Previsione della volatilità finanziaria.** I modelli GARCH e le loro estensioni (EGARCH, GJR-GARCH) prevedono la varianza condizionale dei rendimenti — usata nei calcoli di Value at Risk (VaR) e nelle opzioni (volatilità implicita). La valutazione si fa confrontando il VaR previsto con le perdite effettive e calcolando il RMSE sulla volatilità realizzata (come proxy della vera volatilità non osservabile).

**Previsioni di energia rinnovabile.** I gestori delle reti elettriche devono prevedere la produzione di energia solare ed eolica con ore di anticipo per bilanciare la rete. Si usano modelli ARIMA per componenti stagionali (ciclo giornaliero e settimanale), VAR per le interdipendenze geografiche tra zone, e metodi di machine learning per incorporare previsioni meteorologiche. Il MAPE è la metrica standard: in questo contesto valori sotto il 5% per previsioni a 6 ore sono considerati eccellenti.

**Demand forecasting nel retail.** Amazon, Walmart e altri grandi retailer usano modelli gerarchici di serie storiche per prevedere la domanda di milioni di SKU (stock keeping unit) a orizzonti di 1-4 settimane. L'obiettivo è minimizzare i costi combinati di stockout (merce esaurita) e overstock (eccesso di scorte). Il test di Diebold-Mariano è usato per confrontare sistematicamente modelli aggiornati rispetto ai modelli in produzione prima del deployment.

## 10. Riepilogo

| Concetto | Formula / Regola | Note |
| --- | --- | --- |
| Previsione ottima | $\hat y_{T+h\mid T} = E[y_{T+h}\mid\mathcal{F}_T]$ | Minimizza MSPE |
| AR(1) orizzonte $h$ | $\hat y_{T+h\mid T} = \mu + \phi^h(y_T-\mu)$ | Converge a $\mu = c/(1-\phi)$ |
| Varianza previsione AR(1) | $\sigma_h^2 = \sigma_\varepsilon^2(1-\phi^{2h})/(1-\phi^2)$ | Cresce con $h$, satura a $\text{Var}(y)$ |
| Random walk | $\hat y_{T+h\mid T} = y_T$ ($\forall h$) | $\sigma_h^2 = h\sigma_\varepsilon^2$ (cresce senza limite) |
| ARIMA(p,d,q) | Differenziare $d$ volte, poi ARMA | Necessario per serie non stazionarie |
| RMSE | $\sqrt{\frac{1}{H}\sum(y-\hat y)^2}$ | Penalizza errori grandi |
| MAE | $\frac{1}{H}\sum\lvert y-\hat y\rvert$ | Robusto agli outlier |
| MAPE | $\frac{100}{H}\sum\lvert(y-\hat y)/y\rvert$ | Errore relativo %; evitare se $y\approx 0$ |
| Test Diebold-Mariano | $DM = \bar d/\hat{se}(\bar d) \sim \mathcal{N}(0,1)$ | Usa HAC per $\text{Var}(\bar d)$ |
| VAR(p) previsione | $\hat{\mathbf{y}}_{T+1} = \hat{\mathbf{c}} + \sum_{j=1}^p \hat{\mathbf{A}}_j \mathbf{y}_{T+1-j}$ | Cattura interdipendenze tra serie |

## 11. Esercizi

<details>
<summary>Esercizio 1: Previsione AR(1) — multipli orizzonti</summary>

Modello AR(1): $y_t = 1 + 0.6y_{t-1} + \varepsilon_t$, $\hat\sigma_\varepsilon = 1.5$. Valore corrente: $y_{100} = 5$.

(a) Calcola le previsioni a orizzonti $h = 1, 2, 5, 10$.
(b) Calcola la media di lungo periodo $\mu$.
(c) Calcola gli intervalli di previsione al 95% per $h=1$ e $h=2$.

**Soluzione.**

(a) $\mu = 1/(1-0.6) = 2.5$.

$\hat y_{101} = 2.5 + 0.6^1(5-2.5) = 2.5 + 1.5 = 4.0$

$\hat y_{102} = 2.5 + 0.6^2(5-2.5) = 2.5 + 0.9 = 3.4$

$\hat y_{105} = 2.5 + 0.6^5(5-2.5) = 2.5 + 0.0778\times2.5 = 2.5 + 0.19 = 2.69$

$\hat y_{110} = 2.5 + 0.6^{10}(5-2.5) = 2.5 + 0.006\times2.5 \approx 2.52 \approx \mu$

(b) $\mu = 2.5$. Le previsioni convergono a 2.5 rapidamente ($0.6^{10} \approx 0.006$).

(c) $h=1$: $\sigma_1 = 1.5$. IC: $4.0 \pm 1.96\times1.5 = [1.06, 6.94]$.

$h=2$: $\sigma_2^2 = 1.5^2(1+0.36) = 2.25\times1.36 = 3.06$, $\sigma_2 = 1.75$.
IC: $3.4 \pm 1.96\times1.75 = [-0.03, 6.83]$.

</details>

<details>
<summary>Esercizio 2: Calcolo delle metriche di valutazione</summary>

Modello AR(2) con 5 previsioni fuori campione:

| $h$ | Reale $y$ | Previsto $\hat y$ |
| --- | --- | --- |
| 1 | 50 | 52 |
| 2 | 48 | 50 |
| 3 | 55 | 51 |
| 4 | 53 | 54 |
| 5 | 58 | 55 |

Calcola RMSE, MAE e MAPE.

**Soluzione.**

Errori: $-2, -2, 4, -1, 3$.

Errori al quadrato: $4, 4, 16, 1, 9$. Media = 6.8. $RMSE = \sqrt{6.8} = 2.61$.

Errori assoluti: $2, 2, 4, 1, 3$. Media = $12/5 = 2.4$. $MAE = 2.4$.

Errori percentuali assoluti: $4\%, 4.17\%, 7.27\%, 1.89\%, 5.17\%$. Media = $22.5/5 = 4.5\%$. $MAPE = 4.5\%$.

L'errore più grande è al passo 3 ($y=55$, $\hat y=51$, errore = 4): il modello sottostima la ripresa. Il MAPE del 4.5% è accettabile per previsioni macroeconomiche a breve termine.

</details>

<details>
<summary>Esercizio 3: Test di Diebold-Mariano</summary>

Due modelli (A: ARIMA(1,1,0) e B: random walk) testati su 50 previsioni fuori campione.

Differenze nella perdita quadratica: $\bar d = 1.8$ (A fa meglio), $\hat{Var}(\bar d) = 2.0$ (stimata con HAC).

(a) Calcola la statistica DM.
(b) Testa $H_0$: uguale accuratezza vs $H_1$: A ha migliore accuratezza (test unilaterale).
(c) Perché è necessaria la correzione HAC per $\text{Var}(\bar d)$?

**Soluzione.**

(a) $DM = \bar d / \sqrt{\hat{Var}(\bar d)/H} = 1.8 / \sqrt{2.0/50} = 1.8 / \sqrt{0.04} = 1.8/0.2 = 9.0$.

(b) Valore critico unilaterale 5%: $z_{0.05} = 1.645$. $DM = 9.0 \gg 1.645$: rigetto nettamente $H_0$.

Il modello ARIMA(1,1,0) ha significativamente migliore accuratezza previsionale del random walk ($p < 0.001$).

(c) Le previsioni a orizzonte $h > 1$ producono errori sovrapposti (overlapping): l'errore di previsione al passo $T+1$ e quello al passo $T+2$ condividono tutti gli shock fino a $T+1$. Questo crea autocorrelazione nelle differenze di perdita $d_{T+h}$. La varianza classica (che assume i.i.d.) sottostima $\text{Var}(\bar d)$, gonfiando il DM. La correzione HAC fornisce una stima consistente della varianza anche con autocorrelazione.

</details>

<details>
<summary>Esercizio 4: ARIMA — identificazione e previsione</summary>

Serie $y_t$ (log del PIL trimestrale USA): il test ADF rifiuta la stazionarietà. La serie differenziata $\Delta y_t$ è stazionaria. ACF di $\Delta y_t$: picco significativo al lag 1 (solo). PACF: picco significativo al lag 1 (solo).

(a) Quale modello ARIMA specifica?
(b) $y_{100} = 8.5$, $\Delta y_{100} = 0.6\%$, $\hat c = 0.4$, $\hat\phi = 0.3$, $\hat\theta = -0.2$. Calcola $\hat y_{101}$.
(c) Come verificheresti se il modello è ben specificato?

**Soluzione.**

(a) ACF: picco al lag 1 → componente MA(1). PACF: picco al lag 1 → componente AR(1). Con una differenziazione ($d=1$): **ARIMA(1,1,1)**.

(b) $\hat{\Delta y}_{101} = \hat c + \hat\phi \Delta y_{100} + \hat\theta \hat\varepsilon_{100}$

Se $\hat\varepsilon_{100} \approx 0$ (residuo dell'ultimo periodo): $\hat{\Delta y}_{101} = 0.4 + 0.3\times0.6 + (-0.2)\times0 = 0.4 + 0.18 = 0.58\%$

$\hat y_{101} = y_{100} + \hat{\Delta y}_{101} = 8.5 + 0.0058 = 8.5058$

(c) Diagnostica residuale: (1) **Ljung-Box test** sui residui $\hat\varepsilon_t$: se la statistica $Q$ è non significativa per lag 1-20, i residui sono white noise ✓. (2) Grafico ACF/PACF dei residui: non dovrebbero esserci picchi significativi. (3) Test di normalità (Jarque-Bera). Se i residui non sono white noise, specificare un ordine ARIMA più alto.

</details>

<details>
<summary>Esercizio 5: Previsione VAR(1)</summary>

VAR(1) bivariato per inflazione ($\pi$) e disoccupazione ($u$):

$$\begin{pmatrix}\pi_{t+1}\\u_{t+1}\end{pmatrix} = \begin{pmatrix}0.5\\4.0\end{pmatrix} + \begin{pmatrix}0.6&-0.2\\-0.5&0.8\end{pmatrix}\begin{pmatrix}\pi_t\\u_t\end{pmatrix} + \boldsymbol\varepsilon_t$$

Con $\pi_{100} = 3\%$ e $u_{100} = 5\%$.

(a) Calcola $\hat\pi_{101}$ e $\hat u_{101}$.
(b) Interpreta economicamente i coefficienti off-diagonali.

**Soluzione.**

(a) $\hat\pi_{101} = 0.5 + 0.6\times3 + (-0.2)\times5 = 0.5 + 1.8 - 1.0 = 1.3\%$

$\hat u_{101} = 4.0 + (-0.5)\times3 + 0.8\times5 = 4.0 - 1.5 + 4.0 = 6.5\%$

(b) Coefficiente $-0.2$ (effetto $u$ su $\pi$): un punto percentuale in più di disoccupazione riduce l'inflazione attesa di 0.2 pp — coerente con la curva di Phillips inversa.

Coefficiente $-0.5$ (effetto $\pi$ su $u$): un punto percentuale in più di inflazione riduce la disoccupazione di 0.5 pp al periodo successivo — altra manifestazione della curva di Phillips. Le banche centrali usano questa relazione per calibrare la politica monetaria.

</details>

<details>
<summary>Esercizio 6: Confronto modelli fuori campione</summary>

Tre modelli per prevedere il tasso di disoccupazione mensile (100 previsioni fuori campione):

| Modello | RMSE | MAE | N. parametri |
| --- | --- | --- | --- |
| Naïve (RW) | 0.35 | 0.28 | 0 |
| AR(1) | 0.28 | 0.22 | 2 |
| AR(12) con stagionalità | 0.26 | 0.21 | 13 |

(a) Il modello AR(12) è significativamente migliore di AR(1)? (Test DM: $DM = 1.4$, critico 1.96)
(b) Quale modello sceglieresti per uso pratico?

**Soluzione.**

(a) $DM = 1.4 < 1.96$: non rigetto $H_0$ al 5%. La differenza di accuratezza tra AR(12) e AR(1) non è statisticamente significativa. Il miglioramento da RMSE 0.28 a 0.26 potrebbe essere casuale.

(b) In questo contesto, sceglierei **AR(1)** per parsimonia e robustezza:
- Non significativamente peggiore di AR(12) fuori campione.
- Molto meno parametri da stimare (2 vs 13): minor rischio di overfitting su campioni futuri diversi.
- Più stabile nel tempo: il modello con 13 parametri potrebbe deteriorarsi rapidamente se la struttura stagionale cambia.

Il principio di parsimonia ("Rasoio di Occam") suggerisce di preferire il modello più semplice tra quelli con simile accuratezza previsionale.

</details>

<details>
<summary>Esercizio 7: Intervalli di previsione con incertezza dei parametri</summary>

Modello AR(1) stimato su $n=30$ osservazioni: $\hat\phi = 0.7$, $SE(\hat\phi) = 0.12$, $\hat\sigma_\varepsilon = 2.0$, $y_{30} = 10$, $\mu = 5$.

(a) Calcola il punto di previsione $\hat y_{31}$ e l'intervallo "classico" al 95%.
(b) Spiega perché l'intervallo classico sottostima la vera incertezza.
(c) In quale direzione il vero intervallo sarebbe più largo?

**Soluzione.**

(a) $\hat y_{31} = 5 + 0.7(10-5) = 5 + 3.5 = 8.5$

Varianza classica dell'errore: $\hat\sigma_1^2 = \hat\sigma_\varepsilon^2 = 4.0$, $\hat\sigma_1 = 2.0$.

IC classico 95%: $8.5 \pm 1.96\times2 = [4.58, 12.42]$.

(b) L'intervallo classico ignora che $\hat\phi = 0.7$ è una stima con errore $SE = 0.12$. Se il vero $\phi$ fosse $0.7 + 0.12 = 0.82$, la previsione sarebbe $5 + 0.82\times5 = 9.1$ invece di 8.5. Quindi c'è una fonte di incertezza aggiuntiva legata all'errore di stima dei parametri.

La varianza corretta è approssimativamente:
$\text{Var}(y_{31}-\hat y_{31}) \approx \hat\sigma_\varepsilon^2 + (y_{30}-\mu)^2 \cdot \text{Var}(\hat\phi) = 4 + 25\times0.0144 = 4 + 0.36 = 4.36$

(c) Il vero intervallo è più largo: $\hat\sigma_{corretto} = \sqrt{4.36} = 2.09$ vs $2.0$, IC corretto: $[4.40, 12.60]$. La differenza è piccola qui, ma cresce con l'orizzonte $h$ e con campioni piccoli (dove $SE(\hat\phi)$ è grande). Per $n=30$ e $h$ grandi, l'incertezza parametrica può dominare.

</details>

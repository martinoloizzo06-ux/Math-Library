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
stato: da-rielaborare
---

## 1. Intuizione — analogia concreta e perché si studia

Immagina un cane e il suo padrone che passeggiano in un parco. Il cane gira liberamente — a volte va avanti, a volte torna indietro, a volte si discosta molto. Il padrone cammina a passo regolare. Nel breve periodo le traiettorie di cane e padrone sembrano indipendenti e caotiche. Ma nel lungo periodo, il cane non si allontana mai troppo — c'è un guinzaglio invisibile che li lega. Questo è la **cointegrazione**: due serie non stazionarie che "vagano" autonomamente nel breve periodo, ma sono ancorate a una relazione di equilibrio di lungo periodo.

Perché è cruciale? Considera i prezzi dell'oro in euro e in dollari: entrambe le serie sono non stazionarie (random walk), ma la loro differenza (il tasso di cambio EUR/USD) è relativamente stabile. Non si possono analizzare separatamente ignorando questo legame — perderemmo l'informazione economica più importante.

Il problema delle **regressioni spurie** è uno dei pericoli maggiori in econometria delle serie temporali: se si regredisce una serie non stazionaria su un'altra non stazionaria (anche completamente indipendente), si ottengono $R^2$ alti e t-statistiche significative che non hanno alcun significato economico. La cointegrazione distingue le relazioni reali di lungo periodo da quelle spurie.

I modelli **VAR** (Vector Autoregression) estendono questo framework a sistemi multivariati: invece di guardare una variabile alla volta, si modella come un insieme di variabili si influenzano reciprocamente nel tempo — senza imporre a priori quale variabile è "causa" e quale è "effetto".

## 2. Prerequisiti

- Stazionarietà e test di radice unitaria (ADF) — lezione precedente
- Regressione OLS e sue proprietà (unbiasedness, efficienza)
- Modelli AR(p) e ARMA(p,q)
- Nozioni di algebra matriciale (vettori, moltiplicazione di matrici)
- Concetto di ordine di integrazione I(d)

## 3. Teoria — definizioni e teoremi

### Regressione spuria

Supponiamo che $y_t$ e $x_t$ siano due random walk indipendenti: $y_t = y_{t-1} + u_t$, $x_t = x_{t-1} + v_t$, con $u_t$ e $v_t$ indipendenti. OLS applicato a $y_t = \alpha + \beta x_t + e_t$ produce tipicamente:
- $R^2 \to 1$ all'aumentare di $T$
- t-statistiche su $\hat\beta$ divergono (sempre "significativo")
- I residui sono fortemente autocorrelati (Durbin-Watson $\to 0$)

Questo è il fenomeno delle **regressioni spurie** (Granger e Newbold, 1974). La soluzione classica è differenziare le serie prima di regressare — ma si perde l'informazione di lungo periodo. La cointegrazione offre un'alternativa più ricca.

### Integrazione e cointegrazione

Una serie $\{y_t\}$ è **integrata di ordine $d$**, scritta $y_t \sim I(d)$, se deve essere differenziata $d$ volte per diventare stazionaria. Un random walk è $I(1)$: $\Delta y_t = y_t - y_{t-1}$ è stazionario.

**Definizione di cointegrazione:** Le serie $y_t \sim I(1)$ e $x_t \sim I(1)$ sono **cointegrate** se esiste un coefficiente $\beta$ tale che:
$$z_t = y_t - \beta x_t \sim I(0)$$

Il vettore $(1, -\beta)$ si chiama **vettore cointegrante**. La relazione $y_t = \beta x_t + z_t$ è la **relazione di equilibrio di lungo periodo**.

**Teorema di Engle-Granger (1987):** Se $y_t$ e $x_t$ sono cointegrate, allora il processo può sempre essere rappresentato come un **Modello a Correzione dell'Errore (ECM)**.

### Test di Engle-Granger

Procedura in due passi:
1. Stimare la regressione cointegrante: $y_t = \hat\alpha + \hat\beta x_t + \hat e_t$
2. Applicare il test ADF sui residui $\hat e_t$. Se $\hat e_t \sim I(0)$, le serie sono cointegrate.

**Nota cruciale:** i valori critici per il test ADF sui residui della regressione cointegrante sono diversi da quelli standard ADF (perché $\hat e_t$ è stimato, non osservato direttamente). Si usano tavole speciali di Engle-Granger.

### Modello a Correzione dell'Errore (ECM / VECM)

Il **teorema di rappresentazione di Granger** afferma che se $y_t$ e $x_t$ sono cointegrate, esiste sempre un ECM valido. La forma generale è:
$$\Delta y_t = \alpha_0 + \alpha_1 \Delta x_t + \lambda (y_{t-1} - \beta x_{t-1}) + u_t$$

Dove:
- $\Delta y_t = y_t - y_{t-1}$: variazione di breve periodo di $y$
- $\alpha_1 \Delta x_t$: effetto di breve periodo di $x$ su $y$
- $(y_{t-1} - \beta x_{t-1})$: **termine di correzione dell'errore** — la deviazione dall'equilibrio al periodo precedente
- $\lambda < 0$: **velocità di aggiustamento** — deve essere negativo per garantire la convergenza all'equilibrio

Interpretazione: se $y_{t-1} > \beta x_{t-1}$ (si è sopra l'equilibrio di lungo periodo), allora il termine ECM è positivo, e moltiplicato per $\lambda < 0$ riduce $y_t$ nel periodo successivo — meccanismo di ritorno all'equilibrio.

### Modello VAR (Vector Autoregression)

Per un sistema di $k$ variabili endogene $\mathbf{y}_t = (y_{1t}, y_{2t}, \ldots, y_{kt})'$, il **VAR(p)** è:
$$\mathbf{y}_t = \mathbf{c} + A_1 \mathbf{y}_{t-1} + A_2 \mathbf{y}_{t-2} + \cdots + A_p \mathbf{y}_{t-p} + \boldsymbol{\varepsilon}_t$$

dove $\mathbf{c}$ è un vettore $k \times 1$ di costanti, $A_j$ sono matrici $k \times k$ di coefficienti, e $\boldsymbol{\varepsilon}_t \sim (0, \Sigma)$ è un vettore di innovazioni con matrice di covarianza $\Sigma$.

**Stima:** ogni equazione del VAR si stima separatamente con OLS — consistente e asintoticamente efficiente se il sistema è stazionario (tutte le variabili $I(0)$).

**Funzioni Impulso-Risposta (IRF):** la risposta di $y_j$ a $t+h$ periodi a uno shock unitario in $y_i$ al tempo $t$, mantenendo tutto il resto costante. Si calcola iterando le equazioni del VAR in avanti. Le IRF mostrano la dinamica degli shocks nel sistema.

**Decomposizione della varianza (FEVD):** quanta percentuale della variabilità della previsione di $y_j$ a orizzonte $h$ è attribuibile agli shocks in ciascuna variabile del sistema.

### VAR vs VECM

Se le variabili nel VAR sono non stazionarie ma cointegrate, stimare un VAR sui livelli dà stimatori inconsistenti. La soluzione è il **VECM** (Vector Error Correction Model), che include il termine ECM nel VAR:
$$\Delta \mathbf{y}_t = \boldsymbol\alpha \boldsymbol\beta' \mathbf{y}_{t-1} + \Gamma_1 \Delta \mathbf{y}_{t-1} + \cdots + \Gamma_{p-1} \Delta \mathbf{y}_{t-p+1} + \boldsymbol\varepsilon_t$$

dove $\boldsymbol\beta$ è la matrice dei vettori cointegranti e $\boldsymbol\alpha$ è la matrice delle velocità di aggiustamento.

## 4. Derivazioni — passaggi commentati

### Perché la regressione spuria funziona (meccanismo)

Siano $y_t = y_{t-1} + u_t$ e $x_t = x_{t-1} + v_t$, con $u_t \perp v_t$. Scrivendo in forma estesa:
$y_T = y_0 + \sum_{t=1}^T u_t$ e $x_T = x_0 + \sum_{t=1}^T v_t$.

La correlazione campionaria tra $y_T$ e $x_T$ non converge a zero: le somme parziali di rumori bianchi indipendenti si comportano come moti browniani correlati in campioni finiti. La normalizzazione richiesta è $1/T^2$ invece di $1/T$ → la statistica t del test su $\beta$ diverge come $\sqrt{T}$.

### Derivazione del tempo di aggiustamento ECM

Nel modello $\Delta y_t = \lambda (y_{t-1} - \beta x_{t-1}) + u_t$ con $x$ fisso all'equilibrio $x^*$: l'equilibrio è $y^* = \beta x^*$. Definendo la deviazione $d_t = y_t - y^*$:
$$d_t = d_{t-1} + \lambda d_{t-1} = (1 + \lambda) d_{t-1}$$

Poiché $\lambda < 0$, la deviazione si riduce geometricamente: $d_t = (1+\lambda)^t d_0$. Dopo $h$ periodi, la deviazione è $(1+\lambda)^h d_0$. La deviazione si dimezza quando $(1+\lambda)^h = 0.5$, cioè $h = \ln(0.5)/\ln(1+\lambda) \approx -0.693/\lvert\lambda\rvert$.

## 5. Esempi — da base ad avanzato

**Esempio 1 — Regressione spuria**

$y_t$ = PIL USA (livelli), $x_t$ = PIL Canada. Entrambe $I(1)$. OLS dà $R^2 = 0.97$, $t = 45.3$. Questi numeri non indicano causalità — entrambe le serie crescono nel tempo. Verifica: test ADF sui residui della regressione → i residui non sono stazionari → regressione spuria. Soluzione: modellare la crescita del PIL ($\Delta y$, $\Delta x$) oppure verificare la cointegrazione.

**Esempio 2 — Verifica della cointegrazione**

Serie: $y_t$ = log(consumi USA), $x_t$ = log(reddito USA), entrambe $I(1)$. Regressione: $y_t = -0.2 + 0.9 x_t + \hat e_t$. Test ADF sui residui: statistica = $-4.2$, valore critico Engle-Granger 5% = $-3.34$ → si rifiuta la radice unitaria nei residui → cointegrate. Il rapporto di lungo periodo consumo/reddito è 0.9 (propensione marginale al consumo).

**Esempio 3 — Interpretazione ECM**

ECM stimato: $\Delta y_t = 0.01 + 0.2\Delta x_t - 0.15(y_{t-1} - 0.9x_{t-1}) + u_t$.
- $\lambda = -0.15 < 0$: corretto, convergenza all'equilibrio.
- Ogni periodo, il 15% della deviazione dall'equilibrio viene eliminata.
- Tempo di dimezzamento: $-0.693/0.15 \approx 4.6$ periodi.
- Se consumi e reddito si discostano di 1 punto, ci vogliono circa 5 periodi per dimezzare la deviazione.

**Esempio 4 — VAR(1) bivariato**

Sistema PIL ($g_t$) e inflazione ($\pi_t$):
$$g_t = 0.5 + 0.7 g_{t-1} + 0.1 \pi_{t-1} + \varepsilon_{1t}$$
$$\pi_t = 0.2 + 0.3 g_{t-1} + 0.6 \pi_{t-1} + \varepsilon_{2t}$$

Lettura: la crescita passata del PIL aumenta l'inflazione futura (coefficiente 0.3). L'inflazione passata impatta positivamente sull'inflazione futura (persistenza 0.6). L'effetto di un'inflazione passata sul PIL futuro è piccolo (0.1).

**Esempio 5 — Impulso-Risposta**

Nello stesso VAR, a seguito di uno shock di +1% all'inflazione ($\varepsilon_{2t} = 1$):
- Periodo 1: $\Delta g = 0.1 \times 1 = 0.1\%$ (effetto diretto)
- Periodo 2: $\Delta g = 0.7 \times 0.1 + 0.1 \times 0.6 = 0.07 + 0.06 = 0.13\%$ (propagazione)
- L'effetto si attenua gradualmente nel tempo → la IRF mostra la dinamica completa.

**Esempio 6 — Tassi di interesse: legge del prezzo unico**

Tassi a 3 mesi e 10 anni (curva dei rendimenti). Entrambi $I(1)$. Se cointegrati, lo spread (10Y - 3M) è $I(0)$ — il termine di correzione dell'errore. Questo riflette la teoria delle aspettative sui tassi: nel lungo periodo i tassi di diverse scadenze si muovono insieme. L'ECM cattura quanto velocemente i tassi a breve si aggiustano quando il differenziale si discosta dalla norma storica.

**Esempio 7 — Scelta tra VAR e VECM**

Per un sistema di variabili macroeconomiche:
1. Testare se ciascuna serie è $I(1)$ con ADF.
2. Se tutte $I(0)$: stimare VAR sui livelli.
3. Se tutte $I(1)$ e cointegrate (test di Johansen): stimare VECM.
4. Se tutte $I(1)$ ma non cointegrate: stimare VAR sulle differenze.
5. Se mix di $I(0)$ e $I(1)$: attenzione — necessaria analisi caso per caso.

## 6. Grafico

```plot
{"fn":"3*Math.exp(-0.1*x)*Math.sin(x)+0.5*x","domain":[0,15],"yDomain":[-2,8],"title":"Dinamica ECM: ritorno all'equilibrio di lungo periodo","label1":"y(t) con correzione errore","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"Math.exp(lambda*x)*2*Math.cos(x)","domain":[0,10],"yDomain":[-3,3],"params":[{"name":"lambda","min":-0.99,"max":-0.01,"step":0.01,"default":-0.3}],"title":"ECM: velocità di aggiustamento λ (più negativo = più rapido)"}
```

## 8. Errori comuni

**Errore 1 — Ignorare la stazionarietà e regressare variabili I(1).** Il pericolo più classico: si trova una relazione "significativa" tra due serie non stazionarie indipendenti. Regola d'oro: prima di qualsiasi regressione su serie temporali, testare sempre la stazionarietà con ADF. Se le serie sono $I(1)$, o si differenziano o si verifica la cointegrazione.

**Errore 2 — Usare i valori critici ADF standard per il test di Engle-Granger.** Il test sui residui della regressione cointegrante usa valori critici diversi (più negativi) rispetto al test ADF standard, perché $\hat e_t$ è un residuo stimato. Usare -1.96 (t-standard) o anche -2.86 (ADF standard) come valore critico è sbagliato — si rifiuterà H₀ troppo facilmente e si concluderà erroneamente per la cointegrazione.

**Errore 3 — Interpretare $\lambda > 0$ nell'ECM come "aggiustamento".** Il coefficiente di correzione dell'errore deve essere strettamente negativo ($\lambda < 0$). Un $\lambda > 0$ indica che quando ci si discosta dall'equilibrio, si diverge ulteriormente — il sistema è instabile e non c'è vera cointegrazione. Se si stima $\lambda > 0$, probabilmente le serie non sono cointegrate o il modello è mal specificato.

**Errore 4 — Stimare VAR su variabili non stazionarie senza correzione.** Se le variabili sono $I(1)$ e cointegrate, un VAR sui livelli produce stimatori inconsistenti e inferenza non valida. Bisogna stimare il VECM che incorpora il termine ECM. Il test di Johansen serve proprio a determinare il numero di relazioni cointegranti prima di specificare il VECM.

**Errore 5 — Confondere la causalità di Granger con la causalità reale.** La "causalità di Granger" significa solo che i valori passati di $x$ aiutano a prevedere $y$ (al netto dei valori passati di $y$). Non implica causalità strutturale. Un barometro "Granger-causa" la pioggia ma non la produce. Le IRF mostrano correlazioni dinamiche, non meccanismi causali senza identificazione strutturale aggiuntiva.

**Errore 6 — Non identificare lo SVAR per interpretare le IRF.** Le IRF del VAR ridotto dipendono dall'ordinamento delle variabili (decomposizione di Cholesky). Ordini diversi danno IRF diverse. Per IRF con interpretazione causale chiara, bisogna identificare lo **SVAR** (Structural VAR) imponendo restrizioni teoriche sulle relazioni contemporanee tra le variabili.

**Errore 7 — Ignorare la cointegrazione in previsione.** Se due serie sono cointegrate e si prevede ciascuna separatamente con AR/ARIMA, le previsioni di lungo periodo possono divergere — violando la relazione di equilibrio. Un VECM produce previsioni che rispettano la cointegrazione e sono generalmente superiori a previsioni univariate nel lungo periodo.

## 9. Applicazioni reali

**Parità dei poteri d'acquisto (PPP).** La teoria PPP afferma che nel lungo periodo i tassi di cambio nominali riflettono i differenziali di inflazione. In pratica: log(tasso di cambio EUR/USD) e log(livello dei prezzi USA/UE) sono entrambe $I(1)$. Se sono cointegrate, la PPP vale nel lungo periodo — la deviazione dalla PPP è $I(0)$ e c'è ritorno all'equilibrio. Test empirici mostrano cointegrazione con velocità di aggiustamento lenta (anni).

**Mercati azionari e arbitraggio.** Le azioni dello stesso settore (es. Enel e Eni) possono essere cointegrate: se il loro spread (differenza di prezzi) è $I(0)$, strategie di pair trading sfruttano la convergenza all'equilibrio. Si compra la sottovalutata e si vende la sopravvalutata quando lo spread si discosta troppo dalla media storica.

**Modelli macro-finanziari per le banche centrali.** I modelli VAR strutturali (SVAR) sono usati da Fed, BCE e Banca d'Italia per analizzare la trasmissione della politica monetaria: come un aumento del tasso di interesse si propaga a PIL, inflazione, tasso di cambio nel tempo. Le IRF del SVAR mostrano la risposta dinamica di tutte le variabili a uno shock di politica monetaria.

**Consumo e reddito permanente.** La teoria del reddito permanente (Friedman) implica che consumo e reddito siano cointegrati con vettore cointegrante $(1, -1)$: nel lungo periodo il consumo è proporzionale al reddito permanente. L'ECM cattura come il consumo si aggiusta ai cambiamenti del reddito nel breve periodo.

## 10. Riepilogo

| Concetto | Formula / Definizione | Note |
| --- | --- | --- |
| Regressione spuria | $R^2 \to 1$ tra $I(1)$ indipendenti | Falsa significatività |
| Serie $I(1)$ | $y_t - y_{t-1} \sim I(0)$ | Una differenza rende stazionaria |
| Cointegrazione | $y_t - \beta x_t \sim I(0)$ | Equilibrio di lungo periodo |
| Test Engle-Granger | ADF sui residui di regressione | Valori critici speciali |
| Vettore cointegrante | $(1, -\beta)$ | Coefficienti della relazione d'equilibrio |
| ECM | $\Delta y_t = \alpha_0 + \alpha_1\Delta x_t + \lambda(y_{t-1}-\beta x_{t-1})+u_t$ | $\lambda < 0$ obbligatorio |
| Velocità aggiustamento | $\lvert\lambda\rvert$ = frazione di squilibrio corretta per periodo | Tempo dimezzamento $\approx 0.693/\lvert\lambda\rvert$ |
| VAR(p) | $\mathbf{y}_t = \mathbf{c} + \sum_{j=1}^p A_j \mathbf{y}_{t-j} + \boldsymbol\varepsilon_t$ | Sistema multivariato |
| Stima VAR | OLS equazione per equazione | Valido se $I(0)$ |
| VECM | VAR + termine ECM | Per variabili $I(1)$ cointegrate |
| IRF | Risposta di $y_j$ a shock in $y_i$ | Richiede identificazione SVAR |
| FEVD | % variabilità di $y_j$ da shocks in $y_i$ | Analisi dell'importanza degli shocks |
| Causalità di Granger | $x$ causa Granger $y$ se lag di $x$ predicono $y$ | Non è causalità strutturale |

## 11. Esercizi

<details>
<summary>Esercizio 1: Identificare la regressione spuria</summary>

Hai tre casi. Per ciascuno, indica se c'è rischio di regressione spuria e perché:

a) Regredisci rendimenti azionari giornalieri di Apple su rendimenti di Microsoft (entrambi $I(0)$).
b) Regredisci il livello del PIL USA sul livello del PIL UK (entrambi $I(1)$).
c) Regredisci il tasso di crescita del PIL sul tasso di inflazione (entrambi $I(0)$).

**Soluzione completa.**

a) Nessun rischio: entrambe le serie sono stazionarie $I(0)$. La regressione OLS è valida e la significatività ha interpretazione normale. (I rendimenti giornalieri sono tipicamente non autocorrelati e stazionari.)

b) Alto rischio di regressione spuria: entrambe $I(1)$. Anche senza relazione economica reale, la tendenza crescente comune dei PIL può produrre alta $R^2$ e t-statistiche significative. Bisogna testare la cointegrazione prima di interpretare i risultati.

c) Nessun rischio: entrambe $I(0)$. OLS standard è appropriato. (Tassi di crescita e inflazione sono tipicamente stazionari.)

</details>

<details>
<summary>Esercizio 2: Test di Engle-Granger step-by-step</summary>

Serie mensili 2000-2020: $y_t$ = log(prezzi petrolio), $x_t$ = log(prezzi gas naturale). Test ADF su $y_t$: statistica $-1.3$ (non rifiuta $H_0$). Test ADF su $x_t$: statistica $-1.8$ (non rifiuta $H_0$). Regressione: $y_t = 0.5 + 1.2 x_t + \hat e_t$. Test ADF su $\hat e_t$: statistica $-3.9$, valore critico Engle-Granger 5% $= -3.34$.

a) Cosa concludi sulla stazionarietà delle serie?
b) Sono cointegrate?
c) Qual è la relazione di equilibrio di lungo periodo?

**Soluzione completa.**

a) Sia $y_t$ che $x_t$ non rifiutano H₀ di radice unitaria → entrambe $I(1)$ (non stazionarie nei livelli).

b) Test ADF sui residui: $-3.9 < -3.34$ → si rifiuta H₀ di radice unitaria nei residui → i residui sono $I(0)$ → $y_t$ e $x_t$ sono **cointegrate**.

c) La relazione di lungo periodo è: $\log(P_\text{oil}) = 0.5 + 1.2 \log(P_\text{gas}) + e_t$ dove $e_t \sim I(0)$. Un aumento dell'1% nel prezzo del gas è associato a un aumento dell'1.2% nel prezzo del petrolio nel lungo periodo. La deviazione da questa relazione ($e_t$) è transitoria.

</details>

<details>
<summary>Esercizio 3: Interpretazione completa ECM</summary>

ECM stimato: $\Delta y_t = 0.005 + 0.4\Delta x_t - 0.25(y_{t-1} - 1.2 x_{t-1}) + \hat u_t$

a) Interpretare ogni coefficiente.
b) Calcolare il tempo di dimezzamento dello squilibrio.
c) Se al periodo $t-1$ si ha $y_{t-1} - 1.2 x_{t-1} = 2$ (squilibrio positivo di 2 unità), di quanto si riduce $y_t$ per questo termine?

**Soluzione completa.**

a) 
- $0.005$: drift (crescita media di breve periodo, circa 0.5% per periodo)
- $0.4 \Delta x_t$: effetto di breve periodo — un aumento dell'1% in $x$ aumenta $y$ del 0.4% nello stesso periodo
- $-0.25$: velocità di aggiustamento — ogni periodo, il 25% dello squilibrio viene eliminato
- $(y_{t-1} - 1.2 x_{t-1})$: termine ECM — la deviazione dall'equilibrio $y = 1.2x$ nel periodo precedente

b) Tempo di dimezzamento: $h_{0.5} = \ln(0.5)/\ln(1 - 0.25) = -0.693/-0.2877 \approx 2.4$ periodi.

c) Contributo del termine ECM: $-0.25 \times 2 = -0.5$. Il termine ECM da solo riduce $\Delta y_t$ di 0.5 unità — $y$ si avvicina all'equilibrio diminuendo.

</details>

<details>
<summary>Esercizio 4: Previsione con VAR(1)</summary>

VAR(1) con PIL ($g$) e inflazione ($\pi$), dati al tempo $T$: $g_T = 2\%$, $\pi_T = 3\%$.

Equazioni stimate:
$g_{t+1} = 0.5 + 0.8 g_t - 0.2 \pi_t + \varepsilon_{1,t+1}$
$\pi_{t+1} = 0.3 - 0.1 g_t + 0.7 \pi_t + \varepsilon_{2,t+1}$

Calcolare le previsioni $\hat g_{T+1}$, $\hat \pi_{T+1}$, e poi $\hat g_{T+2}$.

**Soluzione completa.**

Previsioni a 1 passo (si ignora il termine di errore, valore atteso zero):
$\hat g_{T+1} = 0.5 + 0.8(2) - 0.2(3) = 0.5 + 1.6 - 0.6 = 1.5\%$
$\hat \pi_{T+1} = 0.3 - 0.1(2) + 0.7(3) = 0.3 - 0.2 + 2.1 = 2.2\%$

Previsioni a 2 passi (si usano le previsioni precedenti):
$\hat g_{T+2} = 0.5 + 0.8(1.5) - 0.2(2.2) = 0.5 + 1.2 - 0.44 = 1.26\%$

Il VAR prevede una decelerazione della crescita (da 2% a 1.5% a 1.26%) e un calo dell'inflazione (da 3% a 2.2%).

</details>

<details>
<summary>Esercizio 5: Causalità di Granger</summary>

In un VAR bivariato tra $y$ e $x$ si testa se $x$ "Granger-causa" $y$. L'ipotesi nulla è che tutti i coefficienti dei lag di $x$ nell'equazione di $y$ siano zero.

VAR(2) per $y$: $y_t = 1.2 + 0.5 y_{t-1} + 0.3 y_{t-2} + 0.4 x_{t-1} - 0.1 x_{t-2} + \varepsilon_t$

Test F per $H_0$: $0.4 = 0$ e $-0.1 = 0$. Statistica $F = 4.5$, valore critico al 5% $F_{2,\infty} = 3.0$.

a) Si rifiuta H₀? Cosa si conclude?
b) Cosa NON si può concludere?

**Soluzione completa.**

a) $4.5 > 3.0$ → si rifiuta H₀. I valori passati di $x$ aiutano a prevedere $y$ (al netto dei valori passati di $y$). Si dice che $x$ **Granger-causa** $y$.

b) Non si può concludere che $x$ causa $y$ nel senso strutturale. Potrebbe esistere una terza variabile $z$ che causa entrambe (causalità comune). Oppure $x$ potrebbe essere un indicatore anticipatore di $y$ senza essere la causa vera. La causalità di Granger è concettualmente diversa dalla causalità scientifica.

</details>

<details>
<summary>Esercizio 6: Scegliere tra VAR e VECM</summary>

Hai un sistema con $k=3$ variabili: $y_{1t}$ (PIL), $y_{2t}$ (consumo), $y_{3t}$ (investimenti). Test ADF mostra che tutte e tre sono $I(1)$. Il test di Johansen indica $r=1$ relazione cointegrante al 5%.

Quale modello stimare? Scrivi la struttura generale del modello appropriato.

**Soluzione completa.**

Con tutte $I(1)$ e $r=1$ relazione cointegrante → stimare un **VECM(p-1)**.

Struttura generale:
$$\Delta \mathbf{y}_t = \boldsymbol\alpha \boldsymbol\beta' \mathbf{y}_{t-1} + \Gamma_1 \Delta \mathbf{y}_{t-1} + \cdots + \Gamma_{p-1} \Delta \mathbf{y}_{t-p+1} + \boldsymbol\varepsilon_t$$

dove:
- $\boldsymbol\beta' \mathbf{y}_{t-1}$: il termine di correzione dell'errore ($1 \times 3$ poiché $r=1$) — la deviazione dalla relazione di equilibrio di lungo periodo tra PIL, consumo e investimenti
- $\boldsymbol\alpha$: vettore $3 \times 1$ di velocità di aggiustamento — indica quale/i variabile/i si aggiusta/no verso l'equilibrio
- $\Gamma_j$: matrici $3 \times 3$ — dinamiche di breve periodo

Non si stima un VAR sui livelli (le variabili sono $I(1)$) né un VAR sulle differenze (si perderebbe la relazione di cointegrazione).

</details>

<details>
<summary>Esercizio 7: Interpretare la decomposizione della varianza</summary>

In un VAR bivariato (GDP, inflazione), la FEVD a orizzonte $h=12$ mesi è:

| Variabile spiegata | Shock in GDP | Shock in inflazione |
| --- | --- | --- |
| GDP | 85% | 15% |
| Inflazione | 40% | 60% |

Interpretare questi risultati per un policymaker.

**Soluzione completa.**

- La variabilità del PIL a 12 mesi è spiegata per l'85% da shocks propri al PIL e solo per il 15% da shocks all'inflazione → il PIL ha una dinamica prevalentemente "autosufficiente".
- La variabilità dell'inflazione a 12 mesi è spiegata per il 60% da shocks propri e per il 40% da shocks al PIL → l'inflazione è significativamente influenzata dalla domanda aggregata (GDP).

Implicazione di policy: shocks di domanda (che spostano il PIL) si trasmettono in modo sostanziale all'inflazione nel corso di un anno. La banca centrale dovrebbe monitorare la crescita del PIL come indicatore anticipatore dell'inflazione futura.

</details>

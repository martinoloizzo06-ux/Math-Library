---
id: econometria-09-serie-temporali
subject: econometria
topic_it: Serie temporali
topic_en: Time series
title_it: Analisi delle serie temporali — AR, MA, ARMA
title_en: Time series analysis — AR, MA, ARMA
level: purple
order: 9
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 11 — Serie temporali"
---

## 1. Intuizione — analogia concreta e perché si studia

Immagina di osservare la temperatura giornaliera di Milano per un anno intero. Se oggi è 30°C, domani probabilmente non sarà né 5°C né 45°C — sarà vicina a 30°C. C'è una **memoria**: il valore di ieri ci dà informazione su quello di oggi. Questo è esattamente ciò che catturano i modelli di serie temporali.

Le serie temporali sono ovunque in economia e finanza: il PIL trimestrale, il tasso di disoccupazione mensile, il prezzo giornaliero dell'oro, i rendimenti azionari orari. Analizzarle correttamente permette di fare previsioni, capire la persistenza degli shock, e valutare politiche economiche.

Il problema fondamentale è che le osservazioni consecutive **non sono indipendenti** — e la regressione OLS classica assume l'indipendenza dei residui. Ignorare la struttura temporale porta a inferenza distorta, intervalli di confidenza sbagliati, e previsioni pessime. L'analisi delle serie temporali fornisce gli strumenti per modellare esplicitamente questa dipendenza.

Un concetto centrale è la **stazionarietà**: una serie è stazionaria se le sue proprietà statistiche (media, varianza, autocorrelazione) non cambiano nel tempo. Una serie non stazionaria — come un "random walk" — è imprevedibile nel lungo periodo e causa gravi problemi nelle regressioni (correlazioni spurie).

## 2. Prerequisiti

- Probabilità e variabili aleatorie (media, varianza, covarianza)
- Regressione OLS e sue proprietà
- Concetto di stima di massima verosimiglianza (MLE)
- Nozioni di base su test di ipotesi (t-test, F-test)
- Nozioni elementari di polinomi e operatori di ritardo

## 3. Teoria — definizioni e teoremi

### Processo stocastico e stazionarietà

Un **processo stocastico** è una sequenza di variabili aleatorie $\{y_t\}_{t=1,2,\ldots,T}$ indicizzata nel tempo. In econometria si osserva una singola realizzazione di questo processo.

Un processo è **debolmente stazionario** (o stazionario in covarianza) se soddisfa tre condizioni simultaneamente:
1. $E[y_t] = \mu$ per ogni $t$ (media costante nel tempo)
2. $\text{Var}(y_t) = \sigma^2 < \infty$ per ogni $t$ (varianza finita e costante)
3. $\text{Cov}(y_t, y_{t-h}) = \gamma(h)$ per ogni $t$ (la covarianza dipende solo dal lag $h$, non da $t$)

La funzione $\gamma(h)$ si chiama **funzione di autocovarianza** al lag $h$. La funzione di autocorrelazione (ACF) è:
$$\rho(h) = \frac{\gamma(h)}{\gamma(0)} \in [-1, 1]$$

La **PACF** (Partial ACF) misura invece la correlazione tra $y_t$ e $y_{t-h}$ controllando per tutti i lag intermedi $y_{t-1}, \ldots, y_{t-h+1}$. ACF e PACF hanno pattern diagnostici diversi per AR e MA.

### Processo AR(p) — Autoregressivo di ordine p

Il modello autoregressivo di ordine $p$ è:
$$y_t = c + \phi_1 y_{t-1} + \phi_2 y_{t-2} + \cdots + \phi_p y_{t-p} + \varepsilon_t$$

dove $\varepsilon_t \sim \text{WN}(0, \sigma^2)$ è rumore bianco (media zero, varianza costante, non correlato nel tempo), $c$ è una costante, e $\phi_1, \ldots, \phi_p$ sono i coefficienti autoregressivi.

**Caso speciale AR(1):** $y_t = c + \phi y_{t-1} + \varepsilon_t$

Condizione di stazionarietà: $|\phi| < 1$. Se $\phi = 1$, il processo è un **random walk** (non stazionario). Se $|\phi| > 1$, il processo esplode.

Sotto stazionarietà ($|\phi| < 1$):
- $E[y_t] = \mu = \frac{c}{1 - \phi}$ (media di lungo periodo)
- $\text{Var}(y_t) = \frac{\sigma^2}{1 - \phi^2}$ (varianza di lungo periodo)
- $\rho(h) = \phi^h$ (l'ACF decade geometricamente)

Per AR(p) la condizione di stazionarietà è che tutte le radici del polinomio caratteristico $1 - \phi_1 z - \phi_2 z^2 - \cdots - \phi_p z^p = 0$ abbiano modulo maggiore di 1.

**Pattern diagnostici:** ACF dell'AR(1) decade esponenzialmente; PACF si annulla dopo il lag $p$ (troncamento netto).

### Processo MA(q) — Media Mobile di ordine q

$$y_t = \mu + \varepsilon_t + \theta_1 \varepsilon_{t-1} + \theta_2 \varepsilon_{t-2} + \cdots + \theta_q \varepsilon_{t-q}$$

Un MA(q) è **sempre stazionario** per qualsiasi valore dei parametri $\theta_j$, perché è una combinazione lineare finita di rumori bianchi.

Per MA(1): $y_t = \mu + \varepsilon_t + \theta \varepsilon_{t-1}$:
- $E[y_t] = \mu$
- $\text{Var}(y_t) = \sigma^2(1 + \theta^2)$
- $\rho(1) = \theta / (1 + \theta^2)$, $\rho(h) = 0$ per $h \geq 2$

**Pattern diagnostici:** ACF del MA(q) si tronca a zero dopo il lag $q$ (troncamento netto); PACF decade gradualmente. Questo è il modo per distinguere MA da AR nei correlogrammi.

### Processo ARMA(p,q)

Combina componenti AR e MA:
$$y_t = c + \phi_1 y_{t-1} + \cdots + \phi_p y_{t-p} + \varepsilon_t + \theta_1 \varepsilon_{t-1} + \cdots + \theta_q \varepsilon_{t-q}$$

Stazionario se le radici della parte AR sono fuori dal cerchio unitario. Utile perché permette di ottenere buone approssimazioni con pochissimi parametri (principio di parsimonia).

### Test di radice unitaria — Dickey-Fuller Aumentato (ADF)

Il **test ADF** verifica $H_0$: il processo ha una radice unitaria (non è stazionario) contro $H_1$: il processo è stazionario. Si stima la regressione ausiliaria:
$$\Delta y_t = \alpha + \delta y_{t-1} + \beta_1 \Delta y_{t-1} + \cdots + \beta_k \Delta y_{t-k} + u_t$$

L'ipotesi nulla è $\delta = 0$ (radice unitaria). La statistica test è il t-rapporto di $\hat\delta$, ma **non segue una distribuzione t standard** — usa tavole speciali di Dickey-Fuller. I valori critici tipici al 5% sono circa $-2.86$ (con costante) o $-3.41$ (con costante e trend).

Se $t_{\hat\delta} <$ valore critico (negativo): si rifiuta $H_0$ → la serie è stazionaria.

### Processo ARIMA(p,d,q)

Una serie $I(d)$ (integrata di ordine $d$) diventa stazionaria dopo $d$ differenziazioni. ARIMA(p,d,q) applica ARMA(p,q) alla serie differenziata $d$ volte. Il caso più comune in finanza è ARIMA(p,1,q): si differenzia una volta e si modella il processo differenziato.

## 4. Derivazioni — formule principali commentate

### Derivazione della media e varianza AR(1)

Sotto stazionarietà, per ogni $t$: $E[y_t] = \mu$ (costante). Prendendo l'aspettazione di entrambi i lati di $y_t = c + \phi y_{t-1} + \varepsilon_t$:
$$\mu = c + \phi \mu + 0 \quad \Rightarrow \quad \mu(1 - \phi) = c \quad \Rightarrow \quad \mu = \frac{c}{1 - \phi}$$

Per la varianza: sia $v_t = y_t - \mu$, allora $v_t = \phi v_{t-1} + \varepsilon_t$.
$$\text{Var}(v_t) = \phi^2 \text{Var}(v_{t-1}) + \sigma^2$$
Sotto stazionarietà $\text{Var}(v_t) = \text{Var}(v_{t-1}) = \sigma_y^2$:
$$\sigma_y^2 = \phi^2 \sigma_y^2 + \sigma^2 \quad \Rightarrow \quad \sigma_y^2(1 - \phi^2) = \sigma^2 \quad \Rightarrow \quad \sigma_y^2 = \frac{\sigma^2}{1 - \phi^2}$$

### Derivazione dell'ACF dell'AR(1)

La covarianza al lag $h$ è $\gamma(h) = \text{Cov}(y_t, y_{t-h}) = \text{Cov}(\phi y_{t-1} + \varepsilon_t, y_{t-h})$.

Poiché $\varepsilon_t$ è indipendente da $y_{t-h}$ (per $h \geq 1$):
$$\gamma(h) = \phi \, \text{Cov}(y_{t-1}, y_{t-h}) = \phi \, \gamma(h-1)$$

Per ricorsione: $\gamma(h) = \phi^h \gamma(0)$, quindi $\rho(h) = \gamma(h)/\gamma(0) = \phi^h$.

## 5. Esempi — da base ad avanzato

**Esempio 1 — Calcolo media e varianza AR(1)**

$y_t = 2 + 0.8 y_{t-1} + \varepsilon_t$, $\sigma^2 = 1$. Calcolare $\mu$, $\sigma_y^2$, $\rho(2)$.

$\mu = 2/(1 - 0.8) = 10$. $\sigma_y^2 = 1/(1 - 0.64) = 1/0.36 \approx 2.78$. $\rho(2) = 0.8^2 = 0.64$.

**Esempio 2 — ACF di un MA(1)**

$y_t = \varepsilon_t + 0.5 \varepsilon_{t-1}$, $\sigma^2 = 1$. $\gamma(0) = 1 + 0.25 = 1.25$. $\gamma(1) = 0.5$. $\rho(1) = 0.5/1.25 = 0.4$. $\rho(h) = 0$ per $h \geq 2$.

**Esempio 3 — Identificazione del modello tramite ACF/PACF**

Osservando i correlogrammi: se l'ACF decade esponenzialmente e la PACF si tronca al lag 2 → AR(2). Se l'ACF si tronca al lag 1 e la PACF decade → MA(1). Se entrambe decadono gradualmente → ARMA.

**Esempio 4 — Test ADF su PIL italiano**

Serie del PIL reale italiano (1970-2020): la serie in livelli ha statistica ADF $= -1.2$, superiore al valore critico $-2.86$ → non si rifiuta $H_0$ → serie non stazionaria. Sulla prima differenza (tasso di crescita): ADF $= -5.3 < -2.86$ → stazionaria. Quindi PIL $\sim I(1)$, la crescita $\sim I(0)$.

**Esempio 5 — Previsione con AR(1)**

Con $y_T = 15$, $c = 2$, $\phi = 0.7$:
- Previsione a 1 passo: $\hat y_{T+1} = 2 + 0.7 \times 15 = 12.5$
- Previsione a 2 passi: $\hat y_{T+2} = 2 + 0.7 \times 12.5 = 10.75$
- Limite di lungo periodo: $\hat y_{T+h} \to \mu = 2/(1-0.7) = 6.67$ per $h \to \infty$

**Esempio 6 — Scelta dell'ordine con AIC/BIC**

Per serie di rendimenti azionari ($n = 200$ osservazioni):

| Modello | log-lik | k | AIC | BIC |
| --- | --- | --- | --- | --- |
| AR(1) | -280 | 2 | 564 | 571 |
| AR(2) | -276 | 3 | 558 | 569 |
| AR(3) | -275 | 4 | 558 | 573 |
| ARMA(1,1) | -274 | 3 | 554 | 565 |

AIC e BIC minimi per ARMA(1,1): modello selezionato.

**Esempio 7 — Random walk vs AR(1)**

Random walk: $y_t = y_{t-1} + \varepsilon_t$. Varianza cresce con il tempo: $\text{Var}(y_t) = t\sigma^2$ (non stazionario!). Previsione a $h$ passi: $\hat y_{T+h} = y_T$ (la migliore previsione è l'ultimo valore, nessun ritorno a media). Contrasto con AR(1) con $\phi = 0.8$: la previsione converge a $\mu$.

**Esempio 8 — ARIMA(1,1,0) per prezzi delle case**

Il prezzo $P_t$ è non stazionario. La variazione $\Delta P_t = P_t - P_{t-1}$ è stazionaria e si modella come AR(1): $\Delta P_t = 0.03 + 0.4 \Delta P_{t-1} + \varepsilon_t$. Se $\Delta P_T = 2\%$: $\widehat{\Delta P_{T+1}} = 0.03 + 0.4 \times 0.02 = 0.038 = 3.8\%$ di crescita prevista.

## 6. Grafico

```plot
{"fn":"Math.sin(x/2)*Math.exp(-0.05*x)+0.5*x","domain":[0,20],"yDomain":[-3,12],"title":"Serie temporale con trend e ciclicità","label1":"y(t)","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"phi*Math.sin(x)+Math.cos(0.5*x)","domain":[0,20],"yDomain":[-3,3],"params":[{"name":"phi","min":-0.99,"max":0.99,"step":0.01,"default":0.5}],"title":"AR(1): effetto di φ sulla persistenza"}
```

## 8. Errori comuni

**Errore 1 — Stimare OLS su serie non stazionarie.** Se $y_t$ e $x_t$ sono entrambe non stazionarie e indipendenti, la regressione OLS può dare $R^2$ alto e t-statistiche significative anche se non c'è relazione reale. Questo è il fenomeno delle **regressioni spurie**. Prima di regressioni, testare sempre la stazionarietà con ADF.

**Errore 2 — Confondere AR e MA in base all'ACF.** L'ACF di un AR(1) non si tronca, ma decade esponenzialmente. Solo l'ACF di un MA(q) si tronca esattamente dopo il lag $q$. Bisogna guardare sia ACF che PACF insieme per identificare il modello corretto.

**Errore 3 — Usare la tabella t-standard per il test ADF.** La statistica di Dickey-Fuller non segue una distribuzione t di Student. Ha una distribuzione non standard (asimmetrica a sinistra). Usare sempre i valori critici delle tavole apposite di Dickey-Fuller — il valore critico al 5% con costante è circa $-2.86$, non $-1.96$.

**Errore 4 — Dimenticare di includere lag sufficienti nel test ADF.** Il test ADF base (DF) assume $\varepsilon_t$ non correlato. Se i residui sono autocorrelati, bisogna aggiungere ritardi di $\Delta y_t$ nella regressione ausiliaria. La scelta del numero di lag si può fare con AIC/BIC o con test dei residui.

**Errore 5 — Differenziare troppo.** Se una serie è $I(1)$, differenziarla una volta è sufficiente. Differenziarla due volte introduce incorrelazione artificiale e perde informazione. Testare sempre l'ordine di integrazione — non differenziare "per precauzione".

**Errore 6 — Ignorare la stagionalità.** Serie economiche mensili o trimestrali spesso hanno pattern stagionali (es. vendite al Natale). Un AR semplice non li cattura. Si usano modelli SARIMA (Seasonal ARIMA) o si de-stagionalizza la serie prima dell'analisi.

**Errore 7 — Previsioni a lungo orizzonte con AR(1) vicino all'unità.** Con $\phi = 0.98$, il processo è stazionario ma la convergenza alla media è lentissima. Le previsioni a lungo orizzonte sono poco informative e gli intervalli di confidenza diventano quasi come quelli di un random walk. Non interpretare $\phi = 0.98$ come "la serie converge rapidamente a $\mu$".

## 9. Applicazioni reali

**Previsione macroeconomica.** Le banche centrali usano modelli ARIMA e VAR per prevedere inflazione, PIL, occupazione. Il modello AR(1) sull'inflazione mensile cattura la "persistenza" dell'inflazione — un'inflazione alta oggi tende a restare alta il mese prossimo.

**Gestione del rischio finanziario.** I rendimenti azionari giornalieri mostrano scarsa autocorrelazione nei livelli ma forte autocorrelazione nei quadrati (effetti ARCH/GARCH). I modelli MA aiutano a filtrare il rumore. Il VaR (Value at Risk) richiede modellare la struttura temporale dei rendimenti.

**Politica economica.** Il ciclo economico si analizza detrending le serie temporali del PIL. La parte ciclica (deviazione dal trend) si modella spesso come AR(2) o AR(4) — cattura il fatto che dopo una recessione c'è tipicamente una ripresa (oscillazione).

**Trading algoritmico.** Strategie di mean reversion si basano su processi AR stazionari con $\phi < 1$: se il prezzo di un asset si discosta dalla sua media storica, un AR prevede il ritorno verso la media, generando segnali di acquisto/vendita.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Stazionarietà debole | $E[y_t]=\mu$, $\text{Var}(y_t)=\sigma^2$, $\text{Cov}(y_t,y_{t-h})=\gamma(h)$ | Proprietà statistiche costanti nel tempo |
| ACF | $\rho(h)=\gamma(h)/\gamma(0)$ | Misura correlazione seriale al lag $h$ |
| AR(1): media | $\mu=c/(1-\phi)$, $\lvert\phi\rvert<1$ | Media di lungo periodo |
| AR(1): varianza | $\sigma_y^2=\sigma^2/(1-\phi^2)$ | Esplode se $\phi\to 1$ |
| AR(1): ACF | $\rho(h)=\phi^h$ | Declino esponenziale |
| MA(q): stazionarietà | Sempre stazionario | Qualunque $\theta_j$ |
| MA(q): ACF | Si tronca a zero per $h>q$ | Diagnosi chiave |
| ARMA(p,q) | AR + MA combinati | Parsimonia |
| Random walk | $\phi=1$, $\text{Var}(y_t)=t\sigma^2$ | Non stazionario, varianza cresce |
| Test ADF | $H_0$: radice unitaria; $t_{\hat\delta}$ vs tavole DF | Non usare la $t$ standard |
| ARIMA(p,d,q) | ARMA sulla serie differenziata $d$ volte | $d=1$ il caso più comune |
| AIC | $-2\ell+2k$ | Favorisce modelli più ricchi |
| BIC | $-2\ell+k\ln n$ | Più parsimonioso di AIC |

## 11. Esercizi

<details>
<summary>Esercizio 1: Media, varianza e ACF di AR(1)</summary>

Dato il processo $y_t = 3 + 0.6 y_{t-1} + \varepsilon_t$ con $\sigma^2_\varepsilon = 4$:
a) Calcolare la media di lungo periodo $\mu$.
b) Calcolare la varianza $\sigma^2_y$.
c) Calcolare $\rho(1)$, $\rho(2)$, $\rho(3)$.
d) Dopo quanti lag l'ACF scende sotto 0.1?

**Soluzione completa.**

a) $\mu = c/(1-\phi) = 3/(1-0.6) = 3/0.4 = 7.5$

b) $\sigma^2_y = \sigma^2/(1-\phi^2) = 4/(1-0.36) = 4/0.64 = 6.25$

c) $\rho(1) = 0.6$, $\rho(2) = 0.6^2 = 0.36$, $\rho(3) = 0.6^3 = 0.216$

d) $\rho(h) = 0.6^h < 0.1 \Rightarrow h > \log(0.1)/\log(0.6) = -2.303/-0.511 \approx 4.5$ → dopo il lag 5.

</details>

<details>
<summary>Esercizio 2: Calcolo ACF di MA(2)</summary>

Dato $y_t = \varepsilon_t + 0.5\varepsilon_{t-1} - 0.3\varepsilon_{t-2}$ con $\sigma^2 = 1$. Calcolare $\rho(1)$, $\rho(2)$, $\rho(3)$.

**Soluzione completa.**

$\gamma(0) = \sigma^2(1 + 0.5^2 + 0.3^2) = 1 + 0.25 + 0.09 = 1.34$

$\gamma(1) = \sigma^2(\theta_1 + \theta_1\theta_2) = 1 \cdot (0.5 + 0.5 \cdot (-0.3)) = 0.5 - 0.15 = 0.35$

$\gamma(2) = \sigma^2 \theta_2 = -0.3$

$\gamma(3) = 0$ (MA(2) si tronca a zero per lag $> 2$)

$\rho(1) = 0.35/1.34 \approx 0.261$, $\rho(2) = -0.3/1.34 \approx -0.224$, $\rho(3) = 0$.

</details>

<details>
<summary>Esercizio 3: Test ADF e decisione</summary>

Una serie di tassi di interesse mensili (n=120 osservazioni) ha statistica ADF = -2.1 con costante (nessun trend). Il valore critico al 5% è -2.886 e all'1% è -3.490.

a) Si rifiuta H₀? A quale livello?
b) Cosa si conclude sulla stazionarietà?
c) Come procedere nell'analisi?

**Soluzione completa.**

a) -2.1 > -2.886 (in valore assoluto, 2.1 < 2.886): non si rifiuta H₀ né al 5% né all'1%.

b) Non si può rifiutare l'ipotesi di radice unitaria → la serie appare non stazionaria, probabilmente I(1).

c) Differenziare: calcolare $\Delta r_t = r_t - r_{t-1}$ e testare di nuovo l'ADF. Se la differenza è stazionaria, procedere con modelli ARIMA(p,1,q) o modellare le differenze direttamente.

</details>

<details>
<summary>Esercizio 4: Selezione del modello con AIC</summary>

Per una serie di rendimenti mensili (n=100), si stimano:
- AR(1): log-lik = -140
- AR(2): log-lik = -137
- MA(1): log-lik = -141
- ARMA(1,1): log-lik = -136

Calcolare AIC per ciascuno e scegliere il modello.

**Soluzione completa.**

Ricordare: $k$ conta costante + coefficienti AR + coefficienti MA + varianza residui (alcuni software contano diversamente; qui contiamo solo AR+MA+costante).

| Modello | $\ell$ | $k$ | AIC = $-2\ell + 2k$ |
| --- | --- | --- | --- |
| AR(1) | -140 | 2 | 284 |
| AR(2) | -137 | 3 | 280 |
| MA(1) | -141 | 2 | 286 |
| ARMA(1,1) | -136 | 3 | 278 |

ARMA(1,1) ha AIC minimo (278) → modello preferito dall'AIC.

</details>

<details>
<summary>Esercizio 5: Previsione con AR(2)</summary>

Modello stimato: $y_t = 1 + 0.5 y_{t-1} + 0.3 y_{t-2} + \varepsilon_t$. Ultime due osservazioni: $y_{100} = 10$, $y_{99} = 8$.

Calcolare le previsioni a 1 e 2 passi in avanti.

**Soluzione completa.**

Previsione a 1 passo ($h=1$):
$\hat y_{101} = 1 + 0.5 \times 10 + 0.3 \times 8 = 1 + 5 + 2.4 = 8.4$

Previsione a 2 passi ($h=2$): si usa la previsione precedente al posto del valore sconosciuto:
$\hat y_{102} = 1 + 0.5 \times \hat y_{101} + 0.3 \times y_{100} = 1 + 0.5 \times 8.4 + 0.3 \times 10 = 1 + 4.2 + 3 = 8.2$

</details>

<details>
<summary>Esercizio 6: Identificazione AR vs MA dal correlogramma</summary>

Un correlogramma mostra:
- ACF: valori significativi ai lag 1, 2, 3, poi lentamente decrescenti
- PACF: valore significativo solo al lag 1, poi vicini a zero

Quale modello è più appropriato?

**Soluzione completa.**

La PACF si tronca dopo il lag 1 → suggerisce un processo AR(1). L'ACF che decade lentamente è il comportamento tipico dell'autocorrelazione dell'AR che decade geometricamente.

Conferma: per un AR(1) con $\phi > 0$, l'ACF è positiva e decresce come $\phi^h$, mentre la PACF è non zero solo al lag 1. Questo schema ACF/PACF è la firma classica dell'AR(1).

Modello da stimare: AR(1). Verificare poi la bontà dell'adattamento con i correlogrammi dei residui (devono essere non autocorrelati).

</details>

<details>
<summary>Esercizio 7: Random walk — confronto con AR(1)</summary>

Confrontare la previsione a 10 passi di:
- Modello A: $y_t = 0.9 y_{t-1} + \varepsilon_t$ con $y_T = 20$
- Modello B: $y_t = y_{t-1} + \varepsilon_t$ con $y_T = 20$

Cosa converge? Cosa non converge?

**Soluzione completa.**

Modello A (AR(1), $\phi = 0.9$, $c = 0$ quindi $\mu = 0$):
$\hat y_{T+10} = 0.9^{10} \times 20 = 0.3487 \times 20 \approx 6.97$
La previsione converge verso $\mu = 0$ — ritorno alla media.

Modello B (Random walk):
$\hat y_{T+h} = y_T = 20$ per ogni $h$ — la previsione rimane sempre uguale all'ultimo valore osservato.

La differenza chiave: il random walk non ha memoria di dove "dovrebbe" essere — ogni passo è permanente. L'AR(1) con $|\phi| < 1$ ha una media di lungo periodo verso cui converge.

</details>

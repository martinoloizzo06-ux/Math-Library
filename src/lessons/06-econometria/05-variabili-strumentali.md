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

## 1. Intuizione — analogia concreta

Immagina di voler misurare quanto un farmaco riduce la pressione sanguigna. Il problema è che i pazienti che prendono il farmaco sono spesso quelli già più malati — quindi, confrontando chi prende il farmaco con chi non lo prende, troveresti un effetto apparentemente negativo (il farmaco "peggiora" la salute). Questo è il problema dell'**endogeneità**: la variabile che vuoi studiare (assunzione del farmaco) è correlata con fattori non osservabili che influenzano anche l'esito (gravità della malattia).

La soluzione è trovare uno **strumento**: qualcosa di esterno che spinge alcuni pazienti a prendere il farmaco per ragioni indipendenti dalla loro gravità. Per esempio, la distanza dalla farmacia. Chi abita vicino alla farmacia prende il farmaco più spesso — non perché è più malato, ma solo per convenienza logistica. La distanza è quindi correlata con l'assunzione del farmaco (condizione di **rilevanza**) ma non con la gravità della malattia (condizione di **esclusione**). Possiamo usarla per isolare la variazione "pulita" nell'assunzione del farmaco e stimare l'effetto causale.

In economia, la variabile strumentale è uno dei metodi più potenti per identificare relazioni causali in assenza di esperimenti randomizzati. Classici esempi: usare le leve militari come strumento per gli anni di istruzione (Card 1995), usare le precipitazioni come strumento per il reddito agricolo, usare la prossimità a un college per studiare il rendimento dell'istruzione (Card 1994).

Il metodo IV trasforma un problema osservazionale in qualcosa che si avvicina a un esperimento naturale: si usa la variazione esogena nello strumento per identificare l'effetto causale della variabile endogena sull'esito, bypassando il canale della correlazione spuria.

---

## 2. Prerequisiti

- Modello di regressione lineare semplice e multipla
- Proprietà di OLS: assunzioni Gauss-Markov (in particolare OLS.4: $E[u \mid x] = 0$)
- Concetto di consistenza e distorsione di uno stimatore
- Covarianza, correlazione, varianza campionaria
- Distribuzioni asintotiche: legge dei grandi numeri, teorema centrale del limite
- Test F per ipotesi lineari multiple

---

## 3. Teoria

### Il problema dell'endogeneità

Il modello di regressione semplice è:

$$y_i = \beta_0 + \beta_1 x_i + u_i$$

dove $y_i$ è la variabile dipendente, $x_i$ il regressore, $u_i$ il termine di errore che raccoglie tutti i fattori non osservati che influenzano $y_i$.

L'assunzione chiave di OLS è **esogeneità stretta**: $E[u \mid x] = 0$, oppure equivalentemente $\text{Cov}(x, u) = 0$. Se questa condizione è violata, si dice che $x$ è **endogena** e lo stimatore OLS è **inconsistente**: anche con un campione infinito, $\hat{\beta}_1^{\text{OLS}}$ non converge al vero $\beta_1$.

L'endogeneità emerge in tre situazioni principali:

**1. Variabile omessa rilevante:** Supponi di voler stimare il rendimento dell'istruzione sul salario. Il modello vero è $\text{salario}_i = \beta_0 + \beta_1 \text{istruzione}_i + \beta_2 \text{abilità}_i + u_i$, ma l'abilità non è osservabile. Stimando senza abilità, si ottiene il modello errato $\text{salario}_i = \beta_0 + \beta_1 \text{istruzione}_i + v_i$ dove $v_i = \beta_2 \text{abilità}_i + u_i$. Poiché l'abilità è correlata con l'istruzione ($\text{Cov}(\text{istruzione}, \text{abilità}) \neq 0$), si ha $\text{Cov}(x, v) \neq 0$ → OLS distorto.

**2. Causalità inversa (simultaneità):** In un mercato, domanda e offerta determinano simultaneamente prezzo e quantità. La domanda dipende dal prezzo, ma il prezzo dipende dalla domanda. Se stimo la curva di domanda con OLS, il prezzo (regressore) è correlato con l'errore della domanda → endogeneità.

**3. Errori di misura in $x$:** Se osservo $x_i^* = x_i + e_i$ invece del vero $x_i$, e utilizzo $x_i^*$ nella regressione, l'errore composto diventa correlato con il regressore misurato → distorsione da attenuazione (attenuation bias): la stima OLS di $\beta_1$ è distorta verso zero.

### La variabile strumentale

Uno **strumento** $z_i$ è una variabile che soddisfa due condizioni fondamentali:

**Condizione 1 — Rilevanza:**
$$\text{Cov}(z_i, x_i) \neq 0$$
Lo strumento deve essere correlato con il regressore endogeno $x_i$. Questa condizione è **testabile** empiricamente con un test $F$ nella regressione del primo stadio.

**Condizione 2 — Esclusione (esogeneità dello strumento):**
$$E[z_i u_i] = 0$$
Lo strumento non deve essere correlato con il termine di errore $u_i$ — non deve avere effetto diretto su $y_i$ al di là del suo effetto su $x_i$. Questa condizione è **non testabile** in generale (richiede argomentazione economica o istituzionale). È la condizione più difficile da giustificare.

### Lo stimatore IV

Con un solo regressore endogeno $x$ e un solo strumento $z$, lo stimatore IV è:

$$\hat{\beta}_1^{\text{IV}} = \frac{\widehat{\text{Cov}}(z_i, y_i)}{\widehat{\text{Cov}}(z_i, x_i)} = \frac{\sum_i (z_i - \bar{z})(y_i - \bar{y})}{\sum_i (z_i - \bar{z})(x_i - \bar{x})}$$

**Consistenza:** Sotto le condizioni di rilevanza e di esclusione:

$$\hat{\beta}_1^{\text{IV}} \xrightarrow{P} \frac{\text{Cov}(z, y)}{\text{Cov}(z, x)} = \frac{\text{Cov}(z, \beta_1 x + u)}{\text{Cov}(z, x)} = \beta_1 + \frac{\text{Cov}(z, u)}{\text{Cov}(z, x)} = \beta_1$$

L'ultimo passaggio usa l'esogeneità: $\text{Cov}(z, u) = 0$.

**Varianza asintotica:** Lo stimatore IV è meno preciso di OLS (quando OLS è consistente):

$$\text{Var}(\hat{\beta}_1^{\text{IV}}) \approx \frac{\sigma_u^2}{n \sigma_x^2 \rho_{xz}^2}$$

dove $\rho_{xz}^2$ è la correlazione al quadrato tra $z$ e $x$. Più debole è lo strumento ($\rho_{xz}$ piccolo), maggiore è la varianza del IV.

### Il metodo 2SLS (Two-Stage Least Squares)

Con più strumenti $z_1, z_2, \ldots, z_L$ (con $L \geq 1$) e/o più variabili endogene, si usa il **2SLS**:

**Primo stadio:** Regredire la variabile endogena $x$ su tutti gli strumenti $\mathbf{z}$ e i controlli esogeni $\mathbf{w}$:

$$x_i = \pi_0 + \pi_1 z_{1i} + \pi_2 z_{2i} + \cdots + \pi_L z_{Li} + \gamma' \mathbf{w}_i + v_i$$

Ottenere i valori stimati $\hat{x}_i$. Questi rappresentano la "parte esogena" di $x_i$, cioè la variazione in $x$ spiegata dagli strumenti.

**Secondo stadio:** Regredire $y$ su $\hat{x}$ e i controlli:

$$y_i = \beta_0 + \beta_1 \hat{x}_i + \gamma' \mathbf{w}_i + \varepsilon_i$$

Lo stimatore 2SLS di $\beta_1$ è consistente sotto le condizioni di validità degli strumenti.

**Nota:** Gli errori standard del secondo stadio non devono essere calcolati direttamente dall'equazione OLS del secondo stadio — usare formule corrette (o software che calcoli il 2SLS direttamente).

**Condizione di ordine:** Condizione necessaria per l'identificazione — il numero di strumenti deve essere almeno pari al numero di variabili endogene: $L \geq K_{\text{endogene}}$.

**Condizione di rango:** Condizione necessaria e sufficiente — la matrice degli strumenti deve avere rango pieno. Pratica: il test $F$ del primo stadio deve essere $F > 10$ (regola empirica di Staiger e Stock 1997) per escludere strumenti deboli.

### Test di Sargan-Hansen (sovraidentificazione)

Quando si hanno più strumenti di variabili endogene ($L > K_{\text{endogene}}$), il modello è **sovraidentificato** e si può testare la validità delle restrizioni di esclusione in eccesso.

**Test di Sargan:** Sotto $H_0$ (tutti gli strumenti validi), la statistica:

$$S = n \cdot R^2_{\hat{u}^{2SLS}} \sim \chi^2(L - K_{\text{endogene}})$$

dove $R^2_{\hat{u}^{2SLS}}$ è il coefficiente di determinazione della regressione dei residui 2SLS sui regressori e sugli strumenti. Rifiutare $H_0$ suggerisce che almeno uno strumento non è valido — ma non identifica quale.

**Limite:** Non è possibile testare l'esogeneità di tutti gli strumenti con un solo test — serve sempre almeno un "ancoraggio" garantito esogeno.

### Strumenti deboli (Weak Instruments)

Se $\text{Cov}(z, x)$ è vicino a zero, lo strumento è **debole**. Conseguenze:

- Lo stimatore 2SLS è distorto (in direzione di OLS).
- Gli errori standard asintotici sono inaffidabili.
- La distribuzione del test $t$ non è approssimabile con la normale.

Rimedi: Test di Anderson-Rubin (robusto a strumenti deboli), limite di confidenza di Stock-Wright, criterio LIML (Limited Information Maximum Likelihood).

---

## 4. Derivazioni

### Derivazione della consistenza dello stimatore IV

Parto dalla definizione:

$$\hat{\beta}_1^{\text{IV}} = \frac{\sum_i (z_i - \bar{z})(y_i - \bar{y})}{\sum_i (z_i - \bar{z})(x_i - \bar{x})}$$

Divido numeratore e denominatore per $n$:

$$\hat{\beta}_1^{\text{IV}} = \frac{\frac{1}{n}\sum_i (z_i - \bar{z})(y_i - \bar{y})}{\frac{1}{n}\sum_i (z_i - \bar{z})(x_i - \bar{x})} = \frac{\hat{\text{Cov}}(z, y)}{\hat{\text{Cov}}(z, x)}$$

Per la legge dei grandi numeri, $\hat{\text{Cov}}(z, y) \xrightarrow{P} \text{Cov}(z, y)$ e $\hat{\text{Cov}}(z, x) \xrightarrow{P} \text{Cov}(z, x)$.

Sostituisco il modello vero $y_i = \beta_0 + \beta_1 x_i + u_i$:

$$\text{Cov}(z, y) = \text{Cov}(z, \beta_0 + \beta_1 x + u) = \beta_1 \text{Cov}(z, x) + \text{Cov}(z, u)$$

Dividendo per $\text{Cov}(z, x)$:

$$\frac{\text{Cov}(z, y)}{\text{Cov}(z, x)} = \beta_1 + \frac{\text{Cov}(z, u)}{\text{Cov}(z, x)}$$

Sotto esogeneità ($\text{Cov}(z, u) = 0$): $\hat{\beta}_1^{\text{IV}} \xrightarrow{P} \beta_1$. QED.

### Bias OLS con variabile omessa

OLS stima $\hat{\beta}_1^{\text{OLS}}$ in $y = \beta_0 + \beta_1 x + v$ dove $v = \beta_2 a + u$ (e $a$ = variabile omessa).

$$\hat{\beta}_1^{\text{OLS}} \xrightarrow{P} \beta_1 + \beta_2 \frac{\text{Cov}(x, a)}{\text{Var}(x)}$$

Il secondo termine è il **bias da omissione**. Se $\beta_2 > 0$ (la variabile omessa aumenta $y$) e $\text{Cov}(x, a) > 0$ (correlazione positiva con il regressore), OLS sovrastima $\beta_1$.

---

## 5. Esempi

### Esempio 1 — Rendimento dell'istruzione (Card 1994)

**Obiettivo:** Stimare l'effetto causale degli anni di istruzione sul log-salario orario.

**Modello:** $\ln(\text{salario}_i) = \beta_0 + \beta_1 \text{istruzione}_i + \gamma \mathbf{x}_i + u_i$

**Problema:** l'istruzione è correlata con l'abilità non osservata → OLS distorto verso l'alto.

**Strumento:** prossimità a un college quadriennale a 4 anni ($z_i = 1$ se vicino al college).

**Verifica rilevanza:** chi cresce vicino a un college ottiene in media 0.3 anni di istruzione in più. Test $F = 15.6 > 10$ ✓.

**Verifica esclusione (argomento):** la prossimità al college dovrebbe influire sul salario solo tramite l'istruzione. Possibile violazione: le aree con college potrebbero avere mercati del lavoro più produttivi.

**Risultati:** OLS: $\hat{\beta}_1 = 0.073$ (7.3% per anno di istruzione). IV: $\hat{\beta}_1 = 0.132$ (13.2%). IV maggiore di OLS suggerisce che il bias da abilità è downward — plausibile se chi studa di più lo fa non per abilità ma per accesso geografico.

---

### Esempio 2 — Prima tappa 2SLS con calcolo

**Dati:** $n = 100$ osservazioni. Primo stadio: $x_i = 2 + 0.8 z_i + \hat{v}_i$, $R^2 = 0.35$, $F = 52.8$.

**Secondo stadio:** $\hat{x}_i = 2 + 0.8 z_i$. Regressione di $y_i$ su $\hat{x}_i$: $\hat{y}_i = 1.5 + 2.3 \hat{x}_i$.

**Interpretazione:** un aumento di un'unità nella componente esogena di $x$ (determinata dallo strumento) produce un aumento di 2.3 unità in $y$.

**Strumento forte:** $F = 52.8 \gg 10$ ✓ → nessun problema di strumenti deboli.

---

### Esempio 3 — Stimatore IV a mano

Dati: $n=4$, $z = (1,2,3,4)$, $x = (2,3,5,6)$, $y = (5,7,12,14)$.

$\bar{z}=2.5$, $\bar{x}=4$, $\bar{y}=9.5$.

$\sum(z_i-\bar{z})(y_i-\bar{y}) = (-1.5)(-4.5)+(-0.5)(-2.5)+(0.5)(2.5)+(1.5)(4.5) = 6.75+1.25+1.25+6.75=16$

$\sum(z_i-\bar{z})(x_i-\bar{x}) = (-1.5)(-2)+(-0.5)(-1)+(0.5)(1)+(1.5)(2) = 3+0.5+0.5+3=7$

$\hat{\beta}_1^{\text{IV}} = 16/7 \approx 2.286$

---

### Esempio 4 — Test di Hausman manuale

OLS: $\hat{\beta}_1 = 0.4$, $\text{SE}(\hat{\beta}_1^{\text{OLS}}) = 0.05$.
IV: $\hat{\beta}_1 = 0.7$, $\text{SE}(\hat{\beta}_1^{\text{IV}}) = 0.12$.

Statistica di Hausman (versione semplificata):

$$H = \frac{(\hat{\beta}_1^{\text{IV}} - \hat{\beta}_1^{\text{OLS}})^2}{\hat{\text{Var}}(\hat{\beta}_1^{\text{IV}}) - \hat{\text{Var}}(\hat{\beta}_1^{\text{OLS}})} = \frac{(0.7-0.4)^2}{0.12^2 - 0.05^2} = \frac{0.09}{0.0144-0.0025} = \frac{0.09}{0.0119} \approx 7.56$$

Valore critico $\chi^2_{1,0.05} = 3.84$. Poiché $7.56 > 3.84$: **rifiuto $H_0$** → c'è endogeneità, IV necessario.

---

### Esempio 5 — Test di Sargan

Modello 2SLS con 2 strumenti ($z_1, z_2$) e 1 variabile endogena. Grado di sovraidentificazione: $L - K_{\text{endogene}} = 2 - 1 = 1$.

Regressione residui 2SLS su $z_1, z_2$, controlli: $R^2 = 0.031$, $n = 200$.

$S = 200 \times 0.031 = 6.2 \sim \chi^2(1)$.

Valore critico $\chi^2_{1,0.05} = 3.84$. Poiché $6.2 > 3.84$: **rifiuto $H_0$** → almeno uno strumento non è valido. Rivedere la scelta degli strumenti.

---

### Esempio 6 — Strumenti deboli: conseguenze

Primo stadio: $F = 3.2 < 10$ → strumento debole.

Con strumenti deboli: distorsione IV $\approx \text{distorsione OLS} \times \frac{1}{F} = \text{distorsione OLS} \times 0.31$. Il IV è ancora meno distorto di OLS, ma non è affidabile per l'inferenza. Gli intervalli di confidenza standard sottocoprono la vera incertezza.

---

### Esempio 7 — Effetto LATE

Con strumento binario $z_i \in \{0,1\}$, lo stimatore IV identifica il **LATE** (Local Average Treatment Effect): l'effetto causale sui **compliers** — individui che modificano il loro stato (da $x=0$ a $x=1$) a causa dello strumento.

$$\hat{\beta}_1^{\text{IV}} = \frac{E[y \mid z=1] - E[y \mid z=0]}{E[x \mid z=1] - E[x \mid z=0]}$$

Non è l'ATE (Average Treatment Effect) su tutta la popolazione, ma l'effetto sui compliers. Importante per la corretta interpretazione della stima.

---

## 6. Grafico

```plot
{"fn":"0.5*x","domain":[-5,5],"yDomain":[-4,4],"title":"Prima tappa IV: proiezione di X su Z","label1":"E[X|Z] = π₀ + π₁Z","color":"steelblue"}
```

---

## 7. Interattivo

```slider
{"fn":"gamma*x","domain":[-5,5],"yDomain":[-6,6],"params":[{"name":"gamma","min":-3,"max":3,"step":0.1,"default":1}],"title":"Stima IV: effetto del parametro γ (primo stadio)"}
```

---

## 8. Errori comuni

**Errore 1 — Dimenticare di verificare la rilevanza empiricamente.**
Molti applicano IV senza calcolare il test $F$ del primo stadio. La regola $F > 10$ è il minimo indispensabile. Con $F < 10$, lo stimatore 2SLS è distorto e gli errori standard non sono affidabili. Eseguire sempre la regressione del primo stadio e riportare $F$.

**Errore 2 — Assumere l'esclusione senza argomentare.**
L'esclusione ($\text{Cov}(z, u) = 0$) non è testabile in generale. Non basta affermare "z è esogeno" — serve argomentare economicamente perché lo strumento non ha effetto diretto su $y$. Spesso gli strumenti apparentemente buoni hanno canali diretti nascosti.

**Errore 3 — Usare gli errori standard OLS del secondo stadio.**
Il 2SLS a mano (OLS su $\hat{x}$) produce stime corrette di $\hat{\beta}$ ma errori standard distorti. Usare sempre software che implementa il 2SLS correttamente (Stata: `ivregress 2sls`, R: `ivreg`).

**Errore 4 — Interpretare il LATE come ATE.**
Con strumento binario, IV stima l'effetto sui compliers — un sottogruppo della popolazione. Se l'eterogeneità di trattamento è elevata, LATE ≠ ATE. L'interpretazione deve essere precisa riguardo a chi sono i compliers.

**Errore 5 — Confondere la condizione di ordine con quella di rango.**
La condizione di ordine ($L \geq K_{\text{endogene}}$) è necessaria ma non sufficiente. Se gli strumenti sono collineari, la condizione di rango è violata anche con abbastanza strumenti. Verificare sempre il test $F$ congiunto sul primo stadio.

**Errore 6 — Rifiutare il test di Sargan e continuare come se nulla fosse.**
Se il test di Sargan rifiuta, almeno uno strumento è invalido. Non si può semplicemente ignorare questo risultato — occorre riconsiderare la scelta degli strumenti, oppure ammettere che l'identificazione è problematica.

**Errore 7 — Credere che IV risolva tutti i problemi di endogeneità.**
IV è consistente solo se lo strumento è davvero esogeno e rilevante. Se queste condizioni non sono soddisfatte, IV può essere più distorto di OLS. Non è una soluzione automatica — richiede ipotesi forti e argomentazione teorica.

---

## 9. Applicazioni reali

**Effetto dell'istruzione sul salario:** Il classico problema del bias da abilità. Strumenti usati: prossimità a un college (Card 1994), date di nascita (Angrist-Krueger 1991), riforme sull'obbligo scolastico. Permette di stimare il rendimento causale dell'istruzione separandolo dalla selezione per abilità.

**Elasticità della domanda:** Per stimare la curva di domanda, il prezzo è endogeno (simultaneità con l'offerta). Strumenti tipici: costi di produzione, condizioni meteorologiche che influenzano l'offerta ma non la domanda. Berck e Villas-Boas (2016) usano variabili di costo come strumenti per i prezzi al dettaglio.

**Effetti delle istituzioni sulla crescita:** Acemoglu, Johnson e Robinson (2001) usano la mortalità dei coloni europei come strumento per la qualità istituzionale. L'idea: dove i coloni morivano di malattie tropicali, istituirono colonie estrattive con istituzioni peggiori. La mortalità storica è esogena rispetto alla crescita odierna ma rilevante per le istituzioni.

**Valutazione delle politiche pubbliche:** Angrist e Pischke (2008) discutono l'uso di lotterie di assegnazione casuale ai programmi come strumenti perfetti. Per esempio, l'assegnazione casuale a voucher scolastici identifica causalmente l'effetto delle scuole private sull'apprendimento.

---

## 10. Riepilogo

| Concetto | Formula/Condizione | Note |
| --- | --- | --- |
| Endogeneità | $\text{Cov}(x, u) \neq 0$ | OLS inconsistente |
| Rilevanza strumento | $\text{Cov}(z, x) \neq 0$, $F > 10$ | Testabile empiricamente |
| Esclusione strumento | $\text{Cov}(z, u) = 0$ | Non testabile in generale |
| Stimatore IV | $\hat{\beta}_1^{\text{IV}} = \text{Cov}(z,y)/\text{Cov}(z,x)$ | Consistente sotto le due condizioni |
| 2SLS primo stadio | $x = \pi_0 + \pi_1 z + v$ → $\hat{x}$ | Estrae componente esogena di $x$ |
| 2SLS secondo stadio | $y = \beta_0 + \beta_1 \hat{x} + \varepsilon$ | OLS su $\hat{x}$ (con SE corretti) |
| Test Hausman | $H \sim \chi^2(k)$ | Testa endogeneità (FE vs OLS) |
| Test Sargan | $S = n R^2 \sim \chi^2(L-K)$ | Testa validità sovraidentificazione |
| Strumenti deboli | $F < 10$ | Bias, inferenza non affidabile |
| LATE | $\Delta E[y\mid z]/\Delta E[x\mid z]$ | Effetto sui compliers |

---

## 11. Esercizi

<details>
<summary>Esercizio 1: Validità dello strumento — prossimità al college</summary>

Un ricercatore vuole stimare l'effetto causale dell'istruzione sul salario usando la prossimità a un college ($z_i = 1$ se abita entro 30 km) come strumento. Valuta le due condizioni di validità e identifica potenziali violazioni.

**Soluzione.**

**Rilevanza:** Chi vive vicino a un college ha costi di frequenza più bassi (trasporto, alloggio) → tende a studiare di più. Questa è una ipotesi ragionevole e testabile: regressione di istruzione su $z$ e controlli → test $F$. Se $F > 10$, condizione soddisfatta.

**Esclusione:** La prossimità al college deve influire sul salario SOLO tramite l'istruzione. Possibili violazioni:
- Le aree con college hanno mercati del lavoro più sviluppati (effetto diretto sulla domanda di lavoro).
- Le aree con college attirano famiglie con reddito più elevato (correlazione con background familiare).

Come mitigare: controllare per variabili demografiche locali, usare variazioni nell'apertura di nuovi college come source of variation più esogena.

**Conclusione:** Strumento plausibile ma non perfetto. Richiede argomentazione attenta e possibilmente test di robustezza con strumenti alternativi.

</details>

<details>
<summary>Esercizio 2: Calcolo stimatore IV</summary>

Dati su 5 osservazioni: $z = (0, 0, 1, 1, 1)$, $x = (2, 3, 5, 6, 7)$, $y = (10, 14, 22, 26, 32)$. Calcola $\hat{\beta}_1^{\text{IV}}$ usando la formula Wald (con strumento binario).

**Soluzione.**

Con strumento binario, lo stimatore IV di Wald è:

$$\hat{\beta}_1^{\text{IV}} = \frac{\bar{y}_{z=1} - \bar{y}_{z=0}}{\bar{x}_{z=1} - \bar{x}_{z=0}}$$

Gruppo $z=0$: $y = (10, 14)$, $x = (2, 3)$. $\bar{y}_{z=0} = 12$, $\bar{x}_{z=0} = 2.5$.

Gruppo $z=1$: $y = (22, 26, 32)$, $x = (5, 6, 7)$. $\bar{y}_{z=1} = 26.67$, $\bar{x}_{z=1} = 6$.

$$\hat{\beta}_1^{\text{IV}} = \frac{26.67 - 12}{6 - 2.5} = \frac{14.67}{3.5} \approx 4.19$$

Per ogni anno aggiuntivo di istruzione (variazione esogena indotta dallo strumento), il salario aumenta di circa 4.19 unità.

</details>

<details>
<summary>Esercizio 3: Test di Hausman e interpretazione</summary>

OLS: $\hat{\beta}_1 = 0.25$, $\text{SE} = 0.04$.
IV: $\hat{\beta}_1 = 0.48$, $\text{SE} = 0.09$.
Testa se c'è endogeneità al livello 5%.

**Soluzione.**

La statistica di Hausman è:

$$H = \frac{(0.48 - 0.25)^2}{0.09^2 - 0.04^2} = \frac{(0.23)^2}{0.0081 - 0.0016} = \frac{0.0529}{0.0065} \approx 8.14$$

$H \sim \chi^2(1)$ sotto $H_0$ (esogeneità). Valore critico: $\chi^2_{1, 0.05} = 3.84$.

Poiché $8.14 > 3.84$: **rifiutiamo $H_0$** a livello 5%.

**Interpretazione:** Esiste evidenza statistica di endogeneità. OLS è inconsistente. La stima IV ($\hat{\beta}_1 = 0.48$) è circa doppia rispetto a OLS ($0.25$), suggerendo un forte bias da variabile omessa che attenuava la stima OLS (es. errori di misura o correlazione negativa tra regressore e variabile omessa).

</details>

<details>
<summary>Esercizio 4: Strumenti deboli — bias e inferenza</summary>

Primo stadio: $\hat{x}_i = 1.2 + 0.15 z_i$, con $F = 4.8$ e $n = 150$. Il ricercatore procede con 2SLS. Commenta.

**Soluzione.**

$F = 4.8 < 10$: lo strumento è **debole**. Conseguenze per la stima 2SLS:

1. **Bias:** Lo stimatore 2SLS è distorto verso lo stimatore OLS. Con $F \approx 5$, il bias relativo è circa $1/F \approx 20\%$ del bias OLS, quindi non trascurabile.

2. **Inferenza:** La distribuzione asintotica normale del t-test non è una buona approssimazione. Il vero test ha distribuzione non-standard → copertura degli intervalli di confidenza inferiore al livello nominale.

3. **Rimedi:** 
   - Cercare strumenti aggiuntivi o più forti.
   - Usare il test di Anderson-Rubin (robusto a strumenti deboli).
   - Calcolare il limite di confidenza di Stock-Wright.
   - LIML (meno distorto di 2SLS con strumenti deboli).

Il ricercatore non dovrebbe procedere con l'inferenza standard. Deve ammettere il problema e usare metodi alternativi.

</details>

<details>
<summary>Esercizio 5: 2SLS con due strumenti</summary>

Modello: $\ln(\text{salario}_i) = \beta_0 + \beta_1 \text{istruzione}_i + u_i$. Strumenti: $z_1 = $ prossimità college, $z_2 = $ istruzione padre.

Primo stadio: $\hat{\text{istruzione}}_i = 8.2 + 0.4 z_{1i} + 0.3 z_{2i}$, $F = 22.3$, $n = 500$.

Secondo stadio: $\widehat{\ln(\text{salario})}_i = 6.5 + 0.11 \hat{\text{istruzione}}_i$.

a) Lo strumento è forte? b) Cosa stima $\hat{\beta}_1 = 0.11$? c) Come testeresti la validità?

**Soluzione.**

a) $F = 22.3 > 10$: strumento forte ✓. Nessun problema di weak instruments.

b) $\hat{\beta}_1 = 0.11$: un anno aggiuntivo di istruzione (variazione esogena, indotta dagli strumenti) aumenta il log-salario di 0.11, corrispondente a circa un 11% di aumento del salario orario. È il rendimento causale dell'istruzione sui compliers (chi studia di più perché vicino a un college o perché il padre è istruito).

c) Test di Sargan: $L - K_{\text{endogene}} = 2 - 1 = 1$ grado di libertà. Regressione dei residui 2SLS su $z_1$, $z_2$, calcolare $n \cdot R^2 \sim \chi^2(1)$. Se si rifiuta, almeno uno strumento viola l'esclusione. La critica più ovvia: l'istruzione del padre potrebbe influire sul salario direttamente (background familiare, network) oltre che tramite l'istruzione del figlio.

</details>

<details>
<summary>Esercizio 6: Interpretazione LATE</summary>

Uno studio usa l'assegnazione casuale a un programma di formazione professionale ($z_i = 1$ se assegnato) come strumento per la partecipazione effettiva ($x_i = 1$ se partecipa). Solo il 60% di chi è assegnato partecipa davvero.

$E[y \mid z=1] - E[y \mid z=0] = 800$ (€/anno). $E[x \mid z=1] - E[x \mid z=0] = 0.6$. Calcola e interpreta la stima IV.

**Soluzione.**

Stimatore di Wald:
$$\hat{\beta}_1^{\text{IV}} = \frac{800}{0.6} \approx 1333 \text{ €/anno}$$

**Interpretazione:** Il programma aumenta il salario di circa 1333 €/anno **per i compliers** — coloro che partecipano al programma se e solo se vengono assegnati (non parteciperebbero altrimenti, e non rifiuterebbero il programma se assegnati).

Non è l'effetto per i "never-takers" (chi non partecipa mai, neanche se assegnato) né per gli "always-takers" (chi partecipa comunque). Il LATE può essere molto diverso dall'ATE sulla popolazione intera, specialmente se le persone che rispondono allo strumento (compliers) sono sistematicamente diverse dalla popolazione media.

</details>

<details>
<summary>Esercizio 7: Simultaneità nel mercato del lavoro</summary>

Il modello del mercato del lavoro è: $\text{salario} = \alpha + \beta \text{occupazione} + u$ (domanda) e $\text{occupazione} = \gamma + \delta \text{salario} + v$ (offerta). Perché OLS è inconsistente? Come costruire una strategia IV?

**Soluzione.**

**Problema:** Domanda e offerta determinano simultaneamente salario e occupazione. La variabile "occupazione" nella curva di domanda dipende dal salario, che a sua volta dipende dall'occupazione → $\text{Cov}(\text{occupazione}, u) \neq 0$ → OLS inconsistente. Lo stesso vale per la curva di offerta.

**Strategia IV per identificare la domanda:** Trovare variabili che spostano l'offerta ma non la domanda (strumenti per l'offerta):
- Variabili demografiche che influenzano la dimensione della forza lavoro (es. quota di popolazione in età lavorativa).
- Shock tecnologici che modificano la produttività dei lavoratori.
- Politiche fiscali che incidono sul costo del lavoro per i lavoratori.

Questi strumenti sono correlati con l'occupazione (rilevanza) ma non direttamente con la domanda di lavoro delle imprese (esclusione). Il 2SLS usando questi strumenti identifica causalmente la curva di domanda.

</details>

---
id: econometria-07-probit-logit
subject: econometria
topic_it: Modelli non lineari
topic_en: Non-linear models
title_it: Modelli con variabile dipendente binaria — Probit e Logit
title_en: Binary dependent variable models — Probit and Logit
level: purple
order: 7
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 17 — Variabile dipendente limitata"
---

## 1. Intuizione — analogia concreta e perché si studia

Immagina di voler prevedere se una persona acquisterà casa o no in base al suo reddito, all'età e al patrimonio. La variabile dipendente non è continua come il reddito — è binaria: compra (1) o non compra (0). Se usi OLS in questo contesto, il modello potrebbe predire probabilità di acquisto dell'1.3 o del -0.2: valori assurdi. È come usare un righello per misurare una curva.

Il cuore del problema è che la probabilità deve stare tra 0 e 1. La soluzione dei modelli Logit e Probit è passare attraverso una funzione "sigmoide" che "schiaccia" qualsiasi valore reale nell'intervallo $(0,1)$. In questo modo, non importa quanto estremi siano i regressori: la probabilità predetta rimane sempre sensata.

Ma i modelli per variabili dipendenti limitate vanno ben oltre il caso binario. Cosa succede se la variabile dipendente è, ad esempio, le ore lavorate settimanali, che per molte persone sono esattamente zero? O il consumo di beni voluttuari che alcune famiglie non acquistano affatto? Questi sono dati "censurati" o "troncati" — e richiedono il modello Tobit. E se osserviamo solo i salari di chi lavora (campione non casuale), dobbiamo usare il modello di Heckman per correggere il bias da selezione campionaria.

Questi modelli sono strumenti essenziali ogni volta che la variabile dipendente non è continua e illimitata: modelli di scelta binaria (vota/non vota, acquista/non acquista, si laurea/non si laurea), modelli di durata (quanto dura una recessione?), modelli di conteggio (quante volte si va al medico?) e molti altri.

## 2. Prerequisiti

- Regressione OLS e stima dei minimi quadrati
- Massima verosimiglianza (MLE): funzione di log-verosimiglianza, condizioni del primo ordine
- Distribuzione normale standard e funzione di distribuzione cumulativa $\Phi(z)$
- Distribuzione logistica e sua CDF $\Lambda(z)$
- Test del rapporto di verosimiglianza, di Wald e di Lagrange
- Concetto di effetto marginale e derivata parziale

## 3. Teoria

### 3.1 Il modello lineare di probabilità (LPM)

Il **LPM** specifica:

$$P(y=1 \mid \mathbf{x}) = \mathbf{x}'\boldsymbol\beta$$

Stima con OLS. Il coefficiente $\beta_j$ misura l'effetto di $x_j$ sulla probabilità: un aumento di un'unità in $x_j$ aumenta $P(y=1)$ di $\beta_j$ (in punti percentuali se si moltiplica per 100).

**Pregi:** semplice, interpretabile, valido per effetti medi causali (ATT/ATE), compatibile con VI.

**Difetti:** probabilità fuori $[0,1]$; eteroschedasticità meccanica (la varianza di un Bernoulli dipende dalla media: $\text{Var}(y\mid\mathbf{x}) = P(1-P)$); predizioni senza senso per valori estremi dei regressori.

### 3.2 Modelli Probit e Logit

La soluzione è specificare:

$$P(y=1 \mid \mathbf{x}) = G(\mathbf{x}'\boldsymbol\beta)$$

dove $G: \mathbb{R} \to (0,1)$ è una funzione sigmoide (strettamente crescente, con limiti 0 e 1).

**Modello Probit:** $G(z) = \Phi(z) = \int_{-\infty}^z \phi(t)\,dt$, la CDF della normale standard $\mathcal{N}(0,1)$.

**Modello Logit:** $G(z) = \Lambda(z) = \dfrac{e^z}{1+e^z} = \dfrac{1}{1+e^{-z}}$, la CDF della distribuzione logistica.

Le due funzioni sono molto simili in pratica (differiscono principalmente nelle code), ma il Logit ha un'interpretazione aggiuntiva in termini di odds ratio.

### 3.3 Stima per massima verosimiglianza

Per una singola osservazione binaria $y_i \in \{0,1\}$, la funzione di verosimiglianza è:

$$L_i(\boldsymbol\beta) = G(\mathbf{x}_i'\boldsymbol\beta)^{y_i} \cdot [1-G(\mathbf{x}_i'\boldsymbol\beta)]^{1-y_i}$$

La **log-verosimiglianza totale** è:

$$\ell(\boldsymbol\beta) = \sum_{i=1}^n \left[y_i \ln G(\mathbf{x}_i'\boldsymbol\beta) + (1-y_i)\ln(1-G(\mathbf{x}_i'\boldsymbol\beta))\right]$$

Non esiste soluzione in forma chiusa: si massimizza iterativamente con l'algoritmo di Newton-Raphson o IRLS (Iteratively Reweighted Least Squares). Sotto le ipotesi standard, $\hat{\boldsymbol\beta}_{MLE}$ è consistente, asintoticamente normale ed efficiente.

### 3.4 Effetti marginali

I coefficienti $\hat\beta_j$ del Probit/Logit **non** si interpretano come effetti diretti sulla probabilità. L'effetto di $x_j$ sulla probabilità dipende anche da tutti gli altri regressori (attraverso il termine $G'$).

**Effetto marginale nel punto medio (MEM):** $\frac{\partial P}{\partial x_j}\bigg|_{\mathbf{x}=\bar{\mathbf{x}}} = g(\bar{\mathbf{x}}'\hat{\boldsymbol\beta}) \cdot \hat\beta_j$

dove $g = G'$ è la densità (PDF). Per il Probit: $g(z) = \phi(z)$. Per il Logit: $g(z) = \Lambda(z)(1-\Lambda(z))$.

**Effetto marginale medio (AME):** $\text{AME}_j = \frac{1}{n}\sum_{i=1}^n g(\mathbf{x}_i'\hat{\boldsymbol\beta}) \cdot \hat\beta_j$

L'AME è più robusto del MEM perché non dipende dalla scelta del punto di valutazione. È l'interpretazione standard raccomandata in econometria applicata.

### 3.5 Odds ratio (solo Logit)

Per il Logit, il rapporto di probabilità (odds) di $y=1$ vs $y=0$ è:

$$\frac{P(y=1\mid\mathbf{x})}{P(y=0\mid\mathbf{x})} = \frac{\Lambda(\mathbf{x}'\boldsymbol\beta)}{1-\Lambda(\mathbf{x}'\boldsymbol\beta)} = e^{\mathbf{x}'\boldsymbol\beta}$$

Quindi $e^{\beta_j}$ è l'**odds ratio**: un aumento di un'unità in $x_j$ moltiplica gli odds per $e^{\beta_j}$.

### 3.6 Il modello Tobit (dati censurati)

Quando la variabile dipendente è **censurata** (osservata solo sopra o sotto una soglia), il Tobit è appropriato:

$$y_i^* = \mathbf{x}_i'\boldsymbol\beta + u_i, \qquad u_i \sim \mathcal{N}(0,\sigma^2)$$
$$y_i = \max(0, y_i^*) = \begin{cases} y_i^* & \text{se } y_i^* > 0 \\ 0 & \text{se } y_i^* \leq 0 \end{cases}$$

Esempi: spesa per beni di lusso (molte famiglie spendono zero), ore di lavoro, ore di TV. OLS sulle sole osservazioni positive è distorto per selezione; OLS su tutte le osservazioni (trattando 0 come 0) è distorto in modo diverso. Il Tobit stima $\boldsymbol\beta$ correttamente usando la MLE con la log-verosimiglianza mista (parte continua + parte discreta).

### 3.7 Modello di Heckman (selezione campionaria)

Quando il campione non è casuale — si osserva $y$ solo se un'altra condizione è soddisfatta (es. il salario si osserva solo per chi lavora) — si ha **selezione campionaria** (Heckman 1979).

Il modello di Heckman a due stadi (Heckit):

**Passo 1 (Probit di selezione):** $P(s_i=1\mid\mathbf{z}_i) = \Phi(\mathbf{z}_i'\boldsymbol\gamma)$ — quale variabile seleziona nel campione?

**Passo 2 (Correzione per selezione):** $E[y_i\mid s_i=1, \mathbf{x}_i] = \mathbf{x}_i'\boldsymbol\beta + \sigma\rho\,\lambda(\mathbf{z}_i'\hat{\boldsymbol\gamma})$

dove $\lambda(\cdot) = \phi(\cdot)/\Phi(\cdot)$ è il **rapporto di Mills inverso** (IMR), che cattura il bias da selezione. Stimare la seconda equazione ignorando l'IMR produce stime distorte.

## 4. Derivazioni

### 4.1 Log-verosimiglianza del Logit

Sostituendo $G = \Lambda$:

$$\ell(\boldsymbol\beta) = \sum_{i=1}^n \left[y_i \ln \Lambda(\mathbf{x}_i'\boldsymbol\beta) + (1-y_i)\ln(1-\Lambda(\mathbf{x}_i'\boldsymbol\beta))\right]$$

Poiché $1 - \Lambda(z) = \Lambda(-z)$:

$$\ell(\boldsymbol\beta) = \sum_{i=1}^n \left[y_i \mathbf{x}_i'\boldsymbol\beta - \ln(1+e^{\mathbf{x}_i'\boldsymbol\beta})\right]$$

La condizione del primo ordine (score):

$$\frac{\partial\ell}{\partial\boldsymbol\beta} = \sum_{i=1}^n \left[y_i - \Lambda(\mathbf{x}_i'\boldsymbol\beta)\right]\mathbf{x}_i = \mathbf{0}$$

Questa è un'equazione non lineare in $\boldsymbol\beta$: non ha soluzione analitica e richiede algoritmi iterativi.

### 4.2 Effetto marginale del Logit: derivazione

$$\frac{\partial P(y=1\mid\mathbf{x})}{\partial x_j} = \frac{\partial\Lambda(\mathbf{x}'\boldsymbol\beta)}{\partial x_j} = \lambda'(\mathbf{x}'\boldsymbol\beta) \cdot \beta_j = \Lambda(\mathbf{x}'\boldsymbol\beta)[1-\Lambda(\mathbf{x}'\boldsymbol\beta)] \cdot \beta_j$$

L'effetto è massimo quando $P = 0.5$ (cioè $\mathbf{x}'\boldsymbol\beta = 0$), dove vale $0.5 \cdot 0.5 \cdot \beta_j = 0.25\beta_j$.

### 4.3 Rapporto di Mills inverso nel modello di Heckman

Dalla proprietà della normale troncata, se $u \sim \mathcal{N}(0,1)$:

$$E[u \mid u > -c] = \frac{\phi(c)}{\Phi(c)} = \lambda(c)$$

Applicando al modello di selezione con soglia $\mathbf{z}'\boldsymbol\gamma$:

$$E[y_i \mid s_i=1, \mathbf{x}_i] = \mathbf{x}_i'\boldsymbol\beta + \sigma\rho \cdot \frac{\phi(\mathbf{z}_i'\boldsymbol\gamma)}{\Phi(\mathbf{z}_i'\boldsymbol\gamma)}$$

dove $\rho = \text{Corr}(u_i, v_i)$ con $v_i$ l'errore nell'equazione di selezione. Se $\rho \neq 0$, ignorare l'IMR produce stime distorte.

## 5. Esempi

**Esempio 1 (base) — Probabilità predetta con il Logit**

Modello: $\hat y = \Lambda(-2 + 0.5 x)$. Per $x = 4$:

$z = -2 + 0.5 \cdot 4 = 0$

$\hat P(y=1 \mid x=4) = \Lambda(0) = \dfrac{1}{1+e^0} = \dfrac{1}{2} = 0.5$

---

**Esempio 2 — Effetto marginale del Logit**

Nello stesso modello, l'effetto marginale di $x$ in $x = 4$ (dove $P = 0.5$):

$\frac{\partial P}{\partial x}\bigg|_{x=4} = \Lambda(0)(1-\Lambda(0)) \cdot \hat\beta_1 = 0.5 \cdot 0.5 \cdot 0.5 = 0.125$

Un'unità aggiuntiva di $x$ aumenta la probabilità di circa **12.5 pp** (valutato in $x=4$).

---

**Esempio 3 — Odds ratio nel Logit**

Modello logit per acquisto casa: $\hat\beta_{reddito} = 0.003$, $\hat\beta_{età} = 0.05$.

Odds ratio per reddito: $e^{0.003} \approx 1.003$ — un aumento di 1€ nel reddito mensile moltiplica gli odds per 1.003 (incremento dello 0.3%).

Per un aumento di 1000€: $e^{3} \approx 20.1$ — gli odds di acquistare casa moltiplicano per 20! (variabile molto rilevante).

Odds ratio per età: $e^{0.05} \approx 1.051$ — un anno in più aumenta gli odds di acquisto del 5.1%.

---

**Esempio 4 — AME vs MEM a confronto**

Con un Probit stimato su 1000 osservazioni, $\hat\beta_1 = 0.8$:

- MEM (al valore medio, $\bar{\mathbf{x}}'\hat{\boldsymbol\beta} = 0.2$): $\phi(0.2) \cdot 0.8 = 0.391 \cdot 0.8 = 0.313$
- AME: media di $\phi(\mathbf{x}_i'\hat{\boldsymbol\beta}) \cdot 0.8$ per tutte le osservazioni

Se la distribuzione dei valori predetti $\mathbf{x}_i'\hat{\boldsymbol\beta}$ è asimmetrica (es. molte osservazioni con probabilità alta), AME e MEM possono differire sostanzialmente. L'AME è preferito perché rappresenta l'effetto medio nella popolazione osservata.

---

**Esempio 5 — LPM come approssimazione locale**

Modello Probit vero: $P(y=1) = \Phi(-1 + 0.5x)$

LPM stimato: $\hat P(y=1) = -0.23 + 0.18x$ (stima da OLS sui dati simulati)

Il coefficiente OLS 0.18 è vicino all'AME del Probit (intorno a 0.19 per valori centrali di $x$). Nell'intorno dei valori medi, il LPM approssima bene il Probit — ma per $x$ molto piccoli o molto grandi, le probabilità predette dal LPM escono da $[0,1]$.

---

**Esempio 6 — Il modello Tobit applicato**

Studio: spesa annuale per vacanze di $n=2000$ famiglie. Il 35% spende zero. OLS sulle sole famiglie che fanno vacanze darebbe $\hat\beta_{reddito}$ distorto verso il basso (le famiglie con vacanze sono una selezione non casuale).

Il Tobit stima il coefficiente del reddito correttamente sul modello latente $y^* = \mathbf{x}'\boldsymbol\beta + u$. L'effetto marginale del reddito sulla spesa osservata $y$ è:

$\frac{\partial E[y\mid\mathbf{x}]}{\partial x_j} = \hat\beta_j \cdot \Phi\left(\frac{\mathbf{x}'\hat{\boldsymbol\beta}}{\hat\sigma}\right)$

Il termine $\Phi(\cdot)$ rappresenta la probabilità di spendere qualcosa: l'effetto marginale è attenuato dalla probabilità di censura.

---

**Esempio 7 — Modello Heckit per i salari**

Dati: salari osservati solo per chi lavora. Heckit:

1. **Probit di partecipazione:** $P(\text{lavora}=1 \mid \text{istruzione, età, n°figli, salario partner})$ — i figli e il salario del partner sono variabili di esclusione (influenzano la selezione ma non il salario).

2. **OLS corretto:** $\ln w_i = \beta_0 + \beta_1 \text{istruzione} + \beta_2 \text{esperienza} + \beta_3 \hat\lambda_i + \varepsilon_i$

dove $\hat\lambda_i = \phi(\hat{\mathbf{z}}_i'\hat{\boldsymbol\gamma})/\Phi(\hat{\mathbf{z}}_i'\hat{\boldsymbol\gamma})$ è l'IMR stimato.

Se $\hat\beta_3$ è statisticamente significativo, c'è selezione campionaria. Il salario stimato senza correzione è distorto.

---

**Esempio 8 — Confronto bontà di adattamento**

| Statistica | Significato |
| --- | --- |
| Pseudo-R² di McFadden | $1 - \ell(\hat{\boldsymbol\beta})/\ell(\boldsymbol\beta_0)$; confronta il modello con l'intercetta sola |
| LR test | $2[\ell(\hat{\boldsymbol\beta}) - \ell(\boldsymbol\beta_0)] \sim \chi^2(k)$; testa tutti i coefficienti |
| % predizioni corrette | Usa soglia $P > 0.5 \Rightarrow \hat y = 1$; semplice ma non ottimale |
| AUC (area under ROC) | Misura la capacità discriminante del modello su tutte le soglie |

## 6. Grafico

```plot
{"fn":"1/(1+Math.exp(-x))","fn2":"1/(Math.sqrt(2*Math.PI))*Math.exp(-x*x/2)*2","domain":[-4,4],"yDomain":[-0.1,1.1],"title":"CDF Logistica vs Densità Normale standard (scalata)","label1":"Logit: Λ(z)","label2":"Probit: φ(z)×2","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"1/(1+Math.exp(-(beta0+beta1*x)))","domain":[-3,3],"yDomain":[-0.1,1.1],"params":[{"name":"beta1","min":0.1,"max":4,"step":0.1,"default":1.5}],"title":"Curva logistica — pendenza β₁ (intercetta fissa a 0)"}
```

## 8. Errori comuni

**Errore 1 — Interpretare i coefficienti del Logit/Probit come effetti sulla probabilità.** $\hat\beta_j$ è il coefficiente dell'indice latente $\mathbf{x}'\boldsymbol\beta$, non l'effetto diretto su $P(y=1)$. Per avere effetti interpretabili bisogna calcolare gli AME o gli effetti marginali al punto medio. L'unica eccezione è il LPM (OLS), dove $\hat\beta_j$ misura direttamente la variazione in probabilità.

**Errore 2 — Confrontare i coefficienti di Probit/Logit tra campioni diversi.** Il coefficiente $\hat\beta_j$ è identificato solo fino a una costante di scala (la varianza dell'errore latente). Se si confrontano due modelli stimati su sottogruppi diversi, differenze nei $\hat\beta_j$ possono riflettere differenze nella varianza dell'errore, non differenze nell'effetto di $x_j$.

**Errore 3 — Usare il pseudo-R² come misura di bontà di adattamento assoluta.** Il pseudo-R² di McFadden tipicamente vale 0.2–0.4 per modelli ben specificati — molto meno del $R^2$ OLS. Non si può confrontare il pseudo-R² con l'$R^2$ OLS: sono misure diverse su scale diverse.

**Errore 4 — Applicare OLS a variabili dipendenti censurate ignorando il Tobit.** Con il 30-40% di osservazioni censurate a zero, OLS sulle sole osservazioni positive produce stime distorte verso il basso. OLS su tutte le osservazioni (trattando 0 come 0) è anch'esso distorto. Il Tobit è l'approccio corretto, ma richiede normalità degli errori.

**Errore 5 — Omettere le variabili di esclusione nel modello di Heckman.** Il modello di Heckman è identificato dalla non linearità dell'IMR anche senza variabili di esclusione, ma in pratica questa identificazione è molto debole e l'IMR diventa quasi lineare. Senza variabili che influenzano la selezione ma non l'equazione di risultato, il modello di Heckman è identificato solo funzionalmente (distribuzione assunta), e i risultati sono fragili.

**Errore 6 — Ignorare la selezione campionaria e usare OLS direttamente.** Nei dati di indagine, è frequente che le variabili di interesse (salari, consumi) siano osservate solo per un sottocampione non casuale. Ignorare la selezione e usare OLS produce coefficienti inconsistenti se le variabili omesse nel processo di selezione sono correlate con i regressori nell'equazione di risultato.

**Errore 7 — Calcolare l'AME come $\bar g \cdot \hat\beta_j$ invece di $\overline{g\cdot\hat\beta_j}$.** L'AME corretto è $\frac{1}{n}\sum_i g(\mathbf{x}_i'\hat{\boldsymbol\beta}) \cdot \hat\beta_j$. Calcolare prima la media di $g(\cdot)$ e poi moltiplicare per $\hat\beta_j$ è corretto solo se $g(\mathbf{x}_i'\hat{\boldsymbol\beta})$ non varia tra le osservazioni (cosa impossibile nel caso generale).

## 9. Applicazioni reali

**Scelte finanziarie e credito.** I modelli Logit/Probit sono usati sistematicamente nelle banche per lo scoring del credito: la variabile dipendente è "default sì/no" in funzione di reddito, indebitamento, storico dei pagamenti, età. I coefficienti stimati (trasformati in AME) quantificano il rischio marginale di ogni caratteristica, permettendo di fissare tassi d'interesse risk-based.

**Econometria del lavoro.** Il modello di Heckman nasce proprio per studiare i determinanti del salario femminile: le donne che lavorano non sono un campione casuale (selezione per caratteristiche non osservabili come motivazione e network). Correggere per la selezione con le variabili numero di figli piccoli e reddito del partner (che influenzano la partecipazione ma non il salario orario) dà stime più attendibili del rendimento dell'istruzione per le donne.

**Economia della salute.** Il modello Tobit è usato per modellare la spesa sanitaria individuale: il 20-30% della popolazione non ha spese in un dato anno. OLS sulle sole persone con spese darebbe stime distorte verso l'alto (sono le più malate). Il Tobit cattura correttamente la distribuzione mista (puntata in zero + continua per valori positivi).

**Studi sulle politiche di sviluppo.** In econometria dello sviluppo, dove le variabili di interesse (accesso al credito, adozione di tecnologie) sono spesso binarie, i confronti tra LPM e Probit/Logit sono standard. Con campioni grandi e variabili $x$ non vicine agli estremi, LPM e AME del Probit coincidono; LPM è preferito per la robustezza e la semplicità nell'implementare la stima IV.

## 10. Riepilogo

| Concetto | Formula / Regola | Note |
| --- | --- | --- |
| LPM | $P(y=1\mid\mathbf{x}) = \mathbf{x}'\boldsymbol\beta$ (OLS) | Probabilità può uscire da $[0,1]$ |
| Logit | $P = \Lambda(\mathbf{x}'\boldsymbol\beta) = 1/(1+e^{-\mathbf{x}'\boldsymbol\beta})$ | CDF logistica; odds ratio $e^{\beta_j}$ |
| Probit | $P = \Phi(\mathbf{x}'\boldsymbol\beta)$ | CDF normale; no odds ratio |
| MLE log-lik | $\ell = \sum y_i \ln G(\cdot) + (1-y_i)\ln(1-G(\cdot))$ | Massimizzata iterativamente |
| AME | $\frac{1}{n}\sum_i g(\mathbf{x}_i'\hat{\boldsymbol\beta})\cdot\hat\beta_j$ | $g=G'$: $\phi(\cdot)$ Probit, $\Lambda(1-\Lambda)$ Logit |
| Odds ratio Logit | $\text{OR}_j = e^{\hat\beta_j}$ | Effetto di +1 unità sugli odds |
| Tobit | $y = \max(0, \mathbf{x}'\boldsymbol\beta + u)$ | Dati censurati; effetto marginale scalato |
| Heckit (Passo 1) | $P(s=1\mid\mathbf{z}) = \Phi(\mathbf{z}'\boldsymbol\gamma)$ | Serve var. di esclusione |
| Heckit (Passo 2) | $y = \mathbf{x}'\boldsymbol\beta + \sigma\rho\lambda(\hat{\mathbf{z}}'\hat{\boldsymbol\gamma}) + \varepsilon$ | $\lambda$ = rapporto di Mills inverso |

## 11. Esercizi

<details>
<summary>Esercizio 1: Probabilità predetta Probit e Logit</summary>

Modello binario (lavora/non lavora) stimato con Probit e Logit separatamente:
- Probit: $\hat\beta_0 = -1.2$, $\hat\beta_{istruzione} = 0.3$
- Logit: $\hat\beta_0 = -2.0$, $\hat\beta_{istruzione} = 0.5$

Per una persona con 12 anni di istruzione, calcola la probabilità predetta con ciascun modello.

**Soluzione.**

**Probit:** $z = -1.2 + 0.3 \cdot 12 = -1.2 + 3.6 = 2.4$
$P_{Probit} = \Phi(2.4) \approx 0.992$

**Logit:** $z = -2.0 + 0.5 \cdot 12 = -2.0 + 6.0 = 4.0$
$P_{Logit} = \Lambda(4.0) = \dfrac{e^4}{1+e^4} = \dfrac{54.6}{55.6} \approx 0.982$

I due modelli danno probabilità molto simili (0.992 vs 0.982): è tipico — Probit e Logit concordano nella maggior parte dei casi.

</details>

<details>
<summary>Esercizio 2: Calcolo AME nel Logit</summary>

Modello Logit per acquisto automobile: $\hat\beta_0 = -3$, $\hat\beta_{reddito} = 0.004$ (reddito in euro/mese).

Calcola l'AME del reddito valutato al punto medio $\bar{\mathbf{x}}'\hat{\boldsymbol\beta} = 0.5$ e interpreta il risultato.

**Soluzione.**

$g(0.5) = \Lambda(0.5)(1-\Lambda(0.5))$

$\Lambda(0.5) = 1/(1+e^{-0.5}) = 1/(1+0.607) \approx 0.622$

$g(0.5) = 0.622 \cdot (1-0.622) = 0.622 \cdot 0.378 \approx 0.235$

$\text{MEM} = g(0.5) \cdot \hat\beta_{reddito} = 0.235 \cdot 0.004 = 0.00094$

**Interpretazione:** un aumento di 1000€ nel reddito mensile aumenta la probabilità di acquistare un'automobile di circa $0.00094 \times 1000 = 0.94$ punti percentuali (circa 1 pp), valutato al punto medio.

</details>

<details>
<summary>Esercizio 3: Odds ratio e interpretazione</summary>

Logit per voto politico (vota sinistra=1): $\hat\beta_{età} = -0.03$, $\hat\beta_{reddito} = -0.002$.

(a) Calcola gli odds ratio per età e reddito.
(b) Interpreta economicamente i risultati.

**Soluzione.**

(a) $\text{OR}_{età} = e^{-0.03} \approx 0.970$. $\text{OR}_{reddito} = e^{-0.002} \approx 0.998$.

(b) **Età:** un anno in più di età riduce gli odds di votare a sinistra del 3.0% ($1 - 0.970 = 0.030$). A 60 anni vs 30 anni: $e^{-0.03 \cdot 30} = e^{-0.9} \approx 0.407$ — gli odds di voto a sinistra sono meno della metà.

**Reddito:** 1000€ in più di reddito mensile riduce gli odds del 18% ($1 - e^{-0.002 \cdot 1000} = 1 - e^{-2} = 1 - 0.135 = 0.865$).

</details>

<details>
<summary>Esercizio 4: LPM vs Logit — quando preferire l'uno all'altro</summary>

In uno studio sull'effetto della formazione professionale sull'occupazione, un economista ha a disposizione un dataset con 50.000 osservazioni. Discuti se usare LPM (OLS) o Logit.

**Soluzione.**

**Argomenti per LPM:** con 50.000 osservazioni il campione è grande, le probabilità predette medie probabilmente nell'intervallo $[0.2, 0.8]$ (non agli estremi). LPM dà direttamente coefficienti interpretabili come effetti sulla probabilità. Se si vuole stimare l'ATT con abbinamento o l'ATE con IV, LPM è molto più semplice e altrettanto valido asintoticamente.

**Argomenti per Logit:** se alcune celle del campione hanno probabilità vicine a 0 o 1 (es. certi sottogruppi con quasi tutti occupati o quasi tutti disoccupati), LPM produce probabilità negative o > 1. Logit garantisce previsioni sensate.

**Conclusione pratica:** in econometria causale con grandi campioni si usa tipicamente LPM per semplicità e robustezza; si affianca Logit come robustness check. Per previsione, Logit è preferito.

</details>

<details>
<summary>Esercizio 5: Il modello Tobit — caso pratico</summary>

Un economista studia la spesa annuale in formazione delle imprese. Il 40% delle imprese non ha fatto nessuna formazione (spesa = 0). Spiega perché OLS è distorto e descrivi la soluzione Tobit.

**Soluzione.**

**Perché OLS è distorto:**

*OLS su tutte le imprese (incluse quelle con spesa = 0):* il valore 0 non è il "vero" valore latente per quelle imprese che avrebbero voluto formare ma non potevano permetterselo — è un valore censurato. OLS tratta 0 come osservazione genuina, distorcendo i coefficienti verso lo zero.

*OLS solo sulle imprese con spesa > 0:* il campione di imprese che formano non è casuale (sono le più grandi, più produttive, ecc.). OLS su questo sottocampione produce stime distorte per selezione.

**Soluzione Tobit:** il modello latente $y_i^* = \mathbf{x}_i'\boldsymbol\beta + u_i$, $u_i \sim \mathcal{N}(0,\sigma^2)$, rappresenta la "desiderata di formazione". Si osserva $y_i = \max(0, y_i^*)$. La MLE del Tobit stima $\boldsymbol\beta$ e $\sigma$ correttamente usando la struttura della censura.

L'effetto marginale sulla spesa attesa è $\hat\beta_j \cdot \Phi(\mathbf{x}'\hat{\boldsymbol\beta}/\hat\sigma)$, sempre più piccolo di $\hat\beta_j$ in valore assoluto.

</details>

<details>
<summary>Esercizio 6: Selezione campionaria — bias di Heckman</summary>

Vuoi stimare il rendimento dell'istruzione sui salari delle donne, ma i salari si osservano solo per le donne che lavorano (60% del campione). Il tasso di occupazione dipende dal numero di figli piccoli.

(a) Perché OLS è distorto?
(b) Proponi un'equazione di selezione con variabili di esclusione.
(c) Cosa rappresenta il coefficiente dell'IMR nella seconda equazione?

**Soluzione.**

(a) Le donne che lavorano non sono un campione casuale: tendono ad avere caratteristiche non osservabili (motivazione, network) correlate con i salari. Ignorare questa selezione porta OLS a sovrastimare o sottostimare il rendimento dell'istruzione.

(b) Equazione di selezione: $P(\text{lavora}) = \Phi(\gamma_0 + \gamma_1\text{istruzione} + \gamma_2\text{età} + \gamma_3\text{n°figli\_piccoli} + \gamma_4\text{salario\_partner})$

**Variabili di esclusione:** n° figli piccoli e salario del partner influenzano la scelta di lavorare ma non il salario orario di mercato — questa è l'ipotesi di esclusione, economicamente plausibile.

(c) Il coefficiente dell'IMR $\hat\rho\sigma$ misura la correlazione tra l'errore nell'equazione di selezione e l'errore nell'equazione del salario. Se significativo, conferma la presenza di selezione campionaria e indica che il bias da OLS senza correzione è rilevante.

</details>

<details>
<summary>Esercizio 7: Test LR nel Logit</summary>

Un modello Logit con solo l'intercetta ha log-verosimiglianza $\ell_0 = -250$. Il modello completo con 4 regressori ha $\ell_1 = -210$.

(a) Calcola il test del rapporto di verosimiglianza.
(b) Calcola il pseudo-R² di McFadden.
(c) Il modello aggiunge potere esplicativo significativo?

**Soluzione.**

(a) $LR = -2(\ell_0 - \ell_1) = -2(-250 - (-210)) = -2(-40) = 80$

Sotto $H_0$ (tutti i coefficienti = 0 tranne l'intercetta): $LR \sim \chi^2(4)$.

$\chi^2_{4, 0.001} \approx 18.5$. Poiché $80 \gg 18.5$, rifiuto $H_0$ con $p < 0.001$.

(b) Pseudo-$R^2 = 1 - \ell_1/\ell_0 = 1 - (-210)/(-250) = 1 - 0.84 = 0.16$

(c) Sì: il test LR è fortemente significativo. Un pseudo-$R^2$ di 0.16 è considerato moderatamente buono in letteratura (valori sopra 0.20 sono eccellenti per modelli Logit/Probit applicati a dati comportamentali).

</details>

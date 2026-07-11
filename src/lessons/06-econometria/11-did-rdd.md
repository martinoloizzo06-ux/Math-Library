---
id: econometria-11-did-rdd
subject: econometria
topic_it: Identificazione causale
topic_en: Causal identification
title_it: Differenze nelle differenze e RDD
title_en: Difference-in-differences and RDD
level: purple
order: 11
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 13 — Metodi quasi-sperimentali"
stato: da-rielaborare
---

## 1. Intuizione — analogia concreta e perché si studia

Immagina di voler capire se un nuovo farmaco funziona. L'esperimento ideale è assegnare casualmente alcuni pazienti al farmaco e altri al placebo. Ma nelle scienze sociali ed economiche quasi mai possiamo fare questo: non possiamo obbligare alcune regioni ad adottare una tassa e altre no, non possiamo randomizzare chi riceve un sussidio di disoccupazione.

I metodi **quasi-sperimentali** cercano di sfruttare situazioni in cui la realtà crea qualcosa di simile a un esperimento casuale. Il **Difference-in-Differences (DiD)** è come guardare un "prima e dopo" per due gruppi: uno riceve il "trattamento" (es. una legge, un programma), l'altro no. Se i due gruppi avevano trend simili prima, la differenza nel cambiamento riflette l'effetto causale.

La **Regression Discontinuity Design (RDD)** sfrutta invece una soglia arbitraria: chi prende 59 su un test di ammissione e chi prende 60 sono praticamente identici, ma uno viene ammesso e l'altro no. Vicino alla soglia, l'assegnazione è "quasi casuale" — e il salto nell'outcome alla soglia è l'effetto causale del trattamento.

Questi metodi sono diventati fondamentali perché permettono di fare **inferenza causale** (non solo correlazionale) con dati osservazionali. La "credibility revolution" in economia ha spostato il focus dai modelli strutturali complessi a design empirici puliti che identificano con chiarezza l'effetto causale di interesse.

## 2. Prerequisiti

- Regressione OLS multipla e interpretazione dei coefficienti
- Variabili dummy e interazioni in regressione
- Nozioni di causalità e selection bias
- Test di ipotesi: F-test, t-test
- Dati panel (almeno nozioni di base)

## 3. Teoria — definizioni e teoremi

### Il problema fondamentale dell'inferenza causale

L'effetto causale del trattamento per l'individuo $i$ è $\tau_i = Y_i(1) - Y_i(0)$, dove $Y_i(1)$ è l'outcome con trattamento e $Y_i(0)$ senza. Il problema: non si osserva mai $Y_i(1)$ e $Y_i(0)$ per lo stesso individuo nello stesso momento (problema del controffattuale).

Il **selection bias** nasce perché chi viene trattato è tipicamente diverso da chi non lo è: $E[Y_i(0) \mid D_i=1] \neq E[Y_i(0) \mid D_i=0]$.

### Difference-in-Differences (DiD)

**Setup:** due gruppi (trattato e controllo) osservati in due periodi (pre e post trattamento). Il trattamento avviene solo nel gruppo trattato, solo dopo il periodo pre.

**Stimatore DiD:**
$$\hat\tau_{\text{DiD}} = \underbrace{(\bar Y_{\text{T,post}} - \bar Y_{\text{T,pre}})}_{\text{variazione trattati}} - \underbrace{(\bar Y_{\text{C,post}} - \bar Y_{\text{C,pre}})}_{\text{variazione controlli}}$$

La logica: la variazione dei controlli cattura il **trend comune** che sarebbe avvenuto anche per i trattati in assenza del trattamento. Sottraendola, si isola l'effetto del trattamento.

**Assunzione chiave — Parallel Trends (trend paralleli):**
$$E[Y_{it}(0) \mid \text{Trattato}, t=\text{post}] - E[Y_{it}(0) \mid \text{Trattato}, t=\text{pre}] = E[Y_{it}(0) \mid \text{Controllo}, t=\text{post}] - E[Y_{it}(0) \mid \text{Controllo}, t=\text{pre}]$$

In parole: **in assenza del trattamento**, trattati e controlli avrebbero avuto lo stesso trend. Non è necessario che i livelli siano uguali — solo i trend.

**Regressione DiD:**
$$Y_{it} = \alpha + \beta_1 \text{Post}_t + \beta_2 \text{Tratt}_i + \delta (\text{Post}_t \times \text{Tratt}_i) + u_{it}$$

Dove:
- $\alpha$: outcome medio del gruppo di controllo nel pre-periodo
- $\beta_1$: trend comune (effetto del tempo per i controlli)
- $\beta_2$: differenza di livello pre-trattamento tra trattati e controlli
- $\delta$: **effetto causale del trattamento** (ATT — Average Treatment Effect on the Treated)

Il coefficiente $\delta$ sull'interazione $\text{Post} \times \text{Tratt}$ è l'estimatore DiD.

**DiD con covariates:** aggiungere controlli $X_{it}$ migliora l'efficienza e può rafforzare la validità dell'assunzione parallel trends (rende i gruppi più comparabili):
$$Y_{it} = \alpha + \beta_1 \text{Post}_t + \beta_2 \text{Tratt}_i + \delta (\text{Post}_t \times \text{Tratt}_i) + \gamma X_{it} + u_{it}$$

**DiD con dati panel multipli:** con molti periodi e molti gruppi si usano effetti fissi per individuo ($\alpha_i$) e per periodo ($\lambda_t$):
$$Y_{it} = \alpha_i + \lambda_t + \delta D_{it} + u_{it}$$

dove $D_{it} = 1$ se il gruppo $i$ è trattato al periodo $t$. Questo è il **Two-Way Fixed Effects (TWFE)** estimator.

### Test dell'assunzione di trend paralleli

L'assunzione di parallel trends è **non testabile direttamente** (è un'ipotesi sul controffattuale), ma si può verificare indirettamente:

1. **Pre-trend test:** se si hanno dati in più periodi pre-trattamento, verificare che i trend dei due gruppi fossero paralleli prima del trattamento.
2. **Placebo test temporale:** "spostare" il periodo di trattamento ad un periodo precedente — se si trova un effetto significativo prima del vero trattamento, l'assunzione è sospetta.
3. **Placebo test per gruppi:** applicare il DiD a un gruppo di controllo che sicuramente non è stato trattato — dovrebbe dare effetto zero.

### Regression Discontinuity Design (RDD)

**Setup:** il trattamento $D_i$ è determinato dalla variabile continua $X_i$ (running variable o forcing variable) rispetto a una soglia $c$:
$$D_i = \mathbb{1}(X_i \geq c)$$

**Sharp RDD:** il trattamento è deterministico — tutti con $X_i \geq c$ ricevono il trattamento, nessuno con $X_i < c$ lo riceve.

**Stimatore RDD:** si stima il salto discontinuo nella regressione di $Y$ su $X$ alla soglia $c$:
$$\hat\tau_{\text{RDD}} = \lim_{x \to c^+} E[Y_i \mid X_i = x] - \lim_{x \to c^-} E[Y_i \mid X_i = x]$$

**Identificazione:** vicino a $c$, le unità appena sopra e appena sotto la soglia sono quasi identiche (solo la variabile running le differenzia). Formalmente: si assume che $E[Y_i(0) \mid X_i = x]$ e $E[Y_i(1) \mid X_i = x]$ siano funzioni continue di $x$ alla soglia $c$.

**Stima pratica:** si stima una regressione lineare (o polinomiale) di $Y$ su $X$ separatamente a destra e sinistra della soglia, usando solo le osservazioni entro una certa **bandwidth** $h$ attorno a $c$:
$$Y_i = \alpha + \tau D_i + \beta (X_i - c) + \gamma D_i(X_i - c) + u_i, \quad \text{per } X_i \in [c-h, c+h]$$

Il coefficiente $\tau$ è la stima dell'effetto causale. L'interazione $D_i(X_i - c)$ permette alle pendenze di differire a destra e sinistra della soglia.

**Fuzzy RDD:** la soglia non determina deterministicamente il trattamento ma ne aumenta discontinuamente la probabilità. In questo caso si usa la discontinuità come **variabile strumentale** (IV) per il trattamento endogeno.

**Scelta della bandwidth:** cruciale per il trade-off bias-varianza. Bandwidth piccola: poche osservazioni, più varianza ma meno bias (osservazioni più simili). Bandwidth grande: più osservazioni, meno varianza ma più bias (osservazioni meno simili). Si usano procedure data-driven (es. Imbens-Kalyanaraman, Calonico-Cattaneo-Titiunik) per scegliere la bandwidth ottimale.

## 4. Derivazioni — passaggi commentati

### Scomposizione del DiD

Il valore atteso condizionale per i 4 celle della tabella DiD:

| Gruppo | Pre | Post |
| --- | --- | --- |
| Controllo | $\alpha$ | $\alpha + \beta_1$ |
| Trattato | $\alpha + \beta_2$ | $\alpha + \beta_1 + \beta_2 + \delta$ |

DiD = (Trattato Post - Trattato Pre) - (Controllo Post - Controllo Pre):
$$= [(\alpha + \beta_1 + \beta_2 + \delta) - (\alpha + \beta_2)] - [(\alpha + \beta_1) - \alpha] = (\beta_1 + \delta) - \beta_1 = \delta$$

Il DiD elimina gli effetti fissi di gruppo ($\beta_2$) e il trend comune ($\beta_1$), isolando $\delta$.

### Perché la RDD identifica l'effetto causale

Formalmente, il parametro identificato dalla RDD è:
$$\tau_{\text{RDD}} = E[Y_i(1) - Y_i(0) \mid X_i = c]$$

cioè l'effetto causale per le unità esattamente alla soglia (LATE — Local Average Treatment Effect). La continuità di $E[Y(0) \mid X=x]$ in $c$ garantisce che le unità appena sotto la soglia forniscano il controffattuale valido per quelle appena sopra.

## 5. Esempi — da base ad avanzato

**Esempio 1 — DiD elementare: effetto del salario minimo**

Card e Krueger (1994): il New Jersey aumenta il salario minimo nel 1992; la Pennsylvania no. Occupazione nei fast food:

| | Pre (1991) | Post (1992) | Differenza |
| --- | --- | --- | --- |
| New Jersey | 20.4 | 21.0 | +0.6 |
| Pennsylvania | 23.3 | 21.2 | -2.1 |

DiD = 0.6 - (-2.1) = +2.7. L'aumento del salario minimo in NJ ha aumentato l'occupazione di 2.7 unità rispetto alla Pennsylvania.

**Esempio 2 — Regressione DiD: effetto di un sussidio**

Dataset: lavoratori in due regioni. Regione A riceve sussidio alla formazione nel 2015. Regione B no. Il coefficiente $\hat\delta = 5000€$ sull'interazione (Post×Trattato) indica che il sussidio ha aumentato i redditi medi di 5.000€ nella regione trattata rispetto al trend della regione controllo.

**Esempio 3 — Test pre-trend**

Con dati 2010-2020 e trattamento nel 2015: si stima il DiD per ogni anno pre-trattamento (2010-2014) vs il 2009 (anno base). Se le stime degli anni 2010-2014 sono non significativamente diverse da zero → trend paralleli supportati. Se si trova un "effetto" nel 2013 (prima del trattamento), la validità del DiD è compromessa.

**Esempio 4 — RDD sharp: borse di studio e rendimento**

Programma: si assegna una borsa di studio agli studenti con voto medio $\geq 7.0/10$. Running variable: voto medio $X_i$. Soglia: $c = 7.0$. Outcome: rendimento universitario a 4 anni.

Stima: si trovano poche osservazioni nella finestra [6.5, 7.5]. OLS separata: gli studenti appena sopra 7.0 hanno un rendimento di 3.2 punti GPA superiore a quelli appena sotto 7.0 → effetto causale della borsa.

**Esempio 5 — Scelta della bandwidth nella RDD**

Con running variable che va da 0 a 100 e soglia a 50:
- Bandwidth $h=1$: solo 20 osservazioni per lato, errori standard enormi.
- Bandwidth $h=30$: 600 osservazioni per lato, ma unità con valore 20 e 80 sono molto diverse.
- Bandwidth ottimale (CCT): $h^* = 8.3$ — bilancia bias e varianza.

Regola pratica: mostrare la robustezza dei risultati a diverse bandwidth (e.g., $h^*/2$, $h^*$, $2h^*$).

**Esempio 6 — Fuzzy RDD: elezioni e politiche locali**

Soglia: sindaco eletto con il 50% dei voti. Non tutti i comuni con sindaco "di centrosinistra" implementano le stesse politiche — la soglia 50% è uno strumento imperfetto. Si usa come IV: la discontinuità nel tasso di implementazione della politica alla soglia 50% identifica l'effetto causale per i "compliers" (comuni che cambiano politica solo grazie all'elezione).

**Esempio 7 — DiD con effetti fissi: panels lunghi**

Dati: 500 imprese italiane, 2005-2020. Una riforma fiscale colpisce alcune imprese a partire dal 2012 (staggered treatment). Si stima:
$$\log(\text{investimenti}_{it}) = \alpha_i + \lambda_t + \delta D_{it} + \beta X_{it} + u_{it}$$

$\hat\delta = -0.08$: la riforma ha ridotto gli investimenti del ~8%. Gli effetti fissi per impresa ($\alpha_i$) controllano per tutte le caratteristiche time-invariant; quelli per anno ($\lambda_t$) controllano per trend macroeconomici comuni.

**Esempio 8 — Validità RDD: test di manipolazione**

Se gli studenti sanno che 7.0 è la soglia per la borsa e possono "convincere" i professori, si aspetta un accumulo di osservazioni appena sopra 7.0. Il test di densità di McCrary: se la densità della running variable ha un salto discontinuo alla soglia → potenziale manipolazione → validità della RDD compromessa.

## 6. Grafico

```plot
{"fn":"x < 0 ? 2 + 0.3*x + Math.random()*0.1 : 4 + 0.3*x + Math.random()*0.1","domain":[-5,5],"yDomain":[0,6],"title":"RDD: salto discontinuo alla soglia x=0","label1":"E[Y|X]","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"x < 0 ? 2 + slope*x : 2 + effect + slope*x","domain":[-5,5],"yDomain":[-1,8],"params":[{"name":"effect","min":0,"max":4,"step":0.1,"default":2},{"name":"slope","min":-0.5,"max":0.5,"step":0.01,"default":0.3}],"title":"RDD: effetto del trattamento (salto) alla soglia"}
```

## 8. Errori comuni

**Errore 1 — Violazione dell'assunzione parallel trends non verificata.** Il DiD è valido solo se trattati e controlli avrebbero avuto lo stesso trend in assenza del trattamento. Non basta affermare "sembra ragionevole" — bisogna sempre testare i trend pre-trattamento con dati di più periodi. Se i trend pre-trattamento divergevano, il DiD è distorto e non identifica l'effetto causale.

**Errore 2 — Confondere i livelli con i trend nel DiD.** I due gruppi possono avere livelli di outcome completamente diversi (es. uno più ricco dell'altro) — questo non viola l'assunzione parallel trends, che richiede solo che i **cambiamenti** siano stati uguali in assenza del trattamento. Molti studenti rifiutano erroneamente il DiD perché i due gruppi "sono diversi nei livelli".

**Errore 3 — Usare una finestra troppo ampia nella RDD.** Più ci si allontana dalla soglia, meno le osservazioni sono comparabili. Usare tutta la distribuzione della running variable invece di una bandwidth ristretta introduce bias: si paragonano unità molto diverse. L'RDD identifica un effetto locale (LATE), non un effetto medio.

**Errore 4 — Ignorare la manipolazione della running variable.** Se gli agenti sanno della soglia e possono influenzare la propria variabile running (es. dichiarare reddito leggermente sotto la soglia per ricevere un beneficio), le unità vicino alla soglia non sono più "quasi casuali". Bisogna sempre fare il test di densità di McCrary — e se si trova manipolazione, la validità dell'RDD è compromessa.

**Errore 5 — Non includere l'interazione nella regressione RDD.** La regressione RDD corretta permette alle pendenze di differire a sinistra e destra della soglia (tramite l'interazione $D_i \times (X_i - c)$). Stimare un'unica pendenza su entrambi i lati introduce bias nell'effetto stimato. Bisogna sempre includere l'interazione.

**Errore 6 — DiD con trattamento scaglionato (staggered) e TWFE distorto.** Con trattamenti che iniziano in momenti diversi per diversi gruppi (staggered DiD), il classico estimatore Two-Way Fixed Effects (TWFE) può essere distorto e avere segno sbagliato se gli effetti del trattamento variano nel tempo (eterogeneità degli effetti). Si usano invece gli stimatori di Callaway-Sant'Anna o de Chaisemartin-D'Haultfoeuille.

**Errore 7 — Ignorare il clustering degli errori standard nel DiD.** Con dati panel, i residui $u_{it}$ dello stesso individuo (o dello stesso cluster geografico) sono tipicamente correlati nel tempo. Non clusterizzare gli errori standard porta a intervalli di confidenza troppo stretti e p-value artificialmente bassi. Si devono sempre clusterizzare gli errori standard almeno a livello del gruppo di trattamento.

## 9. Applicazioni reali

**Valutazione delle politiche pubbliche.** Il DiD è lo strumento standard per valutare l'effetto di leggi, riforme fiscali, programmi sociali. Card e Krueger (1994) sul salario minimo, Angrist e Krueger sui ritorni all'istruzione, Duflo (2001) sull'effetto delle scuole sulla scolarizzazione in Indonesia. Queste ricerche hanno vinto il Premio Nobel per l'Economia 2021.

**Finanza aziendale: eventi e M&A.** L'event study è una variante del DiD: si comparano le aziende trattate (es. che fanno un'acquisizione) con aziende simili non trattate. L'effetto sull'EBITDA, occupazione, produttività delle M&A si stima tramite DiD con matching. L'assunzione parallel trends richiede che le aziende target e controllo avessero trend simili pre-acquisizione.

**Politica monetaria: RDD sulle aste.** La BCE assegna liquidità tramite aste con soglie di ammissibilità (es. rating minimo dei collaterali). Un'obbligazione appena sopra/sotto il rating soglia ha la stessa probabilità di essere offerta come collaterale — RDD identifica l'effetto causale dell'accesso al credito BCE sulla salute bancaria.

**Effetti delle elezioni: RDD elettorale.** Nella letteratura "regression discontinuity in elections" si confronta la politica economica di comuni/stati con sindaci eletti con il 50+1% vs 49-1% dei voti. Poiché vincere con 50.01% è quasi casuale, si identifica l'effetto causale del partito politico di governo su spesa pubblica, tasse locali, investimenti.

## 10. Riepilogo

| Concetto | Formula / Definizione | Note |
| --- | --- | --- |
| Controffattuale | $Y_i(1) - Y_i(0)$ | Mai osservato entrambi |
| Selection bias | $E[Y(0)\mid D=1] \neq E[Y(0)\mid D=0]$ | Problema della non-randomizzazione |
| Stimatore DiD | $(\bar Y_{T,\text{post}}-\bar Y_{T,\text{pre}}) - (\bar Y_{C,\text{post}}-\bar Y_{C,\text{pre}})$ | Elimina effetti fissi + trend comune |
| Assunzione chiave DiD | Parallel trends | Non testabile direttamente |
| Regressione DiD | $Y = \alpha + \beta_1 \text{Post} + \beta_2 \text{Tratt} + \delta(\text{Post}\times\text{Tratt}) + u$ | $\delta$ = effetto causale |
| ATT | $E[Y(1)-Y(0)\mid D=1]$ | Effetto medio sui trattati |
| TWFE | $Y_{it} = \alpha_i + \lambda_t + \delta D_{it} + u_{it}$ | Panels con molti periodi |
| Sharp RDD | $D_i = \mathbb{1}(X_i \geq c)$ | Trattamento deterministico |
| Stimatore RDD | Salto in $E[Y\mid X]$ alla soglia $c$ | Solo locale (LATE) |
| LATE (RDD) | $E[Y(1)-Y(0)\mid X_i=c]$ | Solo per le unità alla soglia |
| Fuzzy RDD | Soglia come IV | Per compliance imperfetta |
| Bandwidth | Finestra $[c-h, c+h]$ intorno alla soglia | Trade-off bias-varianza |
| Test McCrary | Continuità densità della running variable | Verifica no manipolazione |
| Pre-trend test | DiD = 0 nei periodi pre-trattamento? | Supporto empirico all'assunzione |

## 11. Esercizi

<details>
<summary>Esercizio 1: Calcolo DiD a mano</summary>

Un programma di formazione professionale viene introdotto in 3 province nel 2018. Le altre province non lo ricevono. Dati sui salari medi annui:

| | 2016 | 2017 | 2019 |
| --- | --- | --- | --- |
| Province trattate | 28.000€ | 28.500€ | 31.000€ |
| Province controllo | 27.000€ | 27.500€ | 28.200€ |

a) Calcolare il DiD usando 2017 (pre) e 2019 (post).
b) Verificare informalmente il trend parallelo usando 2016 e 2017.
c) Interpretare il risultato.

**Soluzione completa.**

a) DiD = (31.000 - 28.500) - (28.200 - 27.500) = 2.500 - 700 = **1.800€**

b) Pre-trend: trattate 2016→2017: +500€. Controllo 2016→2017: +500€. I trend pre-trattamento sono identici (+500€ per entrambi) → l'assunzione parallel trends sembra plausibile.

c) Il programma di formazione ha aumentato i salari medi di 1.800€ nelle province trattate rispetto a quello che sarebbe avvenuto senza il programma (controffattuale stimato dal trend delle province controllo).

</details>

<details>
<summary>Esercizio 2: Regressione DiD — interpretare i coefficienti</summary>

Risultati della regressione DiD:
$\hat Y_{it} = 1500 + 800 \cdot \text{Post}_t + 200 \cdot \text{Tratt}_i + 350 \cdot (\text{Post}_t \times \text{Tratt}_i)$

a) Qual è l'outcome medio del gruppo di controllo nel pre-periodo?
b) Qual è il trend comune?
c) Qual è la differenza tra trattati e controlli nel pre-periodo?
d) Qual è l'effetto causale del trattamento?
e) Qual è l'outcome previsto per i trattati nel post-periodo?

**Soluzione completa.**

a) Controllo pre: $\alpha = 1500$

b) Trend comune: $\beta_1 = 800$ (aumento di 800 per entrambi i gruppi da pre a post in assenza di trattamento)

c) Differenza nel pre: $\beta_2 = 200$ (i trattati avevano outcome 200 più alto già prima del trattamento)

d) Effetto causale: $\delta = 350$ (l'ATT — il trattamento aumenta l'outcome di 350 al netto del trend comune)

e) Trattati post: $1500 + 800 + 200 + 350 = 2850$

</details>

<details>
<summary>Esercizio 3: Test dei trend paralleli</summary>

Hai dati per 4 anni pre-trattamento (2010-2013) e il trattamento avviene nel 2014. Stimi il DiD per ogni anno pre-trattamento usando il 2010 come anno base. Risultati:

| Anno | $\hat\delta$ | p-value |
| --- | --- | --- |
| 2011 | 0.02 | 0.89 |
| 2012 | -0.05 | 0.72 |
| 2013 | 0.18 | 0.03 |

Il trattamento nel 2014 dà $\hat\delta_{2014} = 1.20$ con p-value 0.001.

a) I trend paralleli reggono?
b) Che problema c'è nel 2013?
c) Come procedere?

**Soluzione completa.**

a) I trend paralleli reggono nel 2011 e 2012 (effetti non significativi), ma non nel 2013.

b) Il 2013 mostra un effetto significativo (p=0.03) prima del trattamento — questo è un **falso positivo nel pre-periodo** o un segnale che i trend stessero già divergendo. Potrebbe indicare anticipazione del trattamento (i trattati cambiano comportamento sapendo del trattamento imminente) o una vera violazione dell'assunzione.

c) Si dovrebbe investigare la causa del pre-trend 2013: è anticipazione del trattamento? È un evento specifico che ha colpito solo i trattati nel 2013? Si può considerare di escludere il 2013, o usare modelli che tengono conto dell'anticipazione, o esplicitare questa fragilità come limitazione del design.

</details>

<details>
<summary>Esercizio 4: Sharp RDD — stima dell'effetto</summary>

Soglia per l'ammissione a un programma di mentoring: punteggio $X_i \geq 70$. Bandwidth selezionata: $h = 10$ (solo studenti con punteggio tra 60 e 80).

Regressione stimata: $Y_i = 3.0 + 1.8 D_i + 0.05(X_i - 70) + 0.02 D_i(X_i - 70) + \hat u_i$

a) Qual è l'effetto stimato del programma?
b) Qual è il valore predetto per uno studente con punteggio 70 senza il programma?
c) Cosa rappresenta il coefficiente $0.02$ sull'interazione?
d) Qual è il valore predetto per uno studente con punteggio 75 con il programma?

**Soluzione completa.**

a) Effetto causale: $\hat\tau = 1.8$ unità di outcome — il programma di mentoring aumenta l'outcome di 1.8 per gli studenti alla soglia.

b) Valore predetto per $X = 70$, $D = 0$: $3.0 + 0 + 0.05(70-70) + 0 = 3.0$

c) Il coefficiente 0.02 sull'interazione indica che la pendenza della retta di regressione è diversa a destra della soglia rispetto a sinistra. A sinistra la pendenza è 0.05; a destra è $0.05 + 0.02 = 0.07$.

d) $X = 75$, $D = 1$: $3.0 + 1.8 + 0.05(5) + 0.02(1)(5) = 3.0 + 1.8 + 0.25 + 0.10 = 5.15$

</details>

<details>
<summary>Esercizio 5: Manipolazione nella RDD</summary>

Stai analizzando l'effetto di un'agevolazione fiscale per imprese con meno di 50 dipendenti (running variable: numero di dipendenti, soglia: 50).

a) Perché potresti aspettarti manipolazione?
b) Come testeresti la manipolazione?
c) Se trovi manipolazione, cosa succede all'identificazione?

**Soluzione completa.**

a) Le imprese sanno che superare i 50 dipendenti fa perdere l'agevolazione. Quindi potrebbero artificialmente mantenere 49 dipendenti (es. non assumere il 50° lavoratore, usare contratti atipici per non contare i lavoratori). Si aspetta un "mucchio" di imprese con esattamente 49 dipendenti.

b) Test di densità di McCrary: si stima la densità della running variable (numero di dipendenti) e si testa se c'è una discontinuità alla soglia 50. Visivamente: istogramma con bin stretti attorno a 50 — un picco a 49 e un buco a 50 suggerisce manipolazione.

c) Se c'è manipolazione, le imprese con 49 dipendenti non sono comparabili a quelle con 51 dipendenti: le prime hanno scelto di rimanere piccole (endogeneità). L'assunzione di continuità è violata e la RDD non identifica più l'effetto causale. Bisogna usare metodi alternativi (es. IV, DiD) o restringere l'analisi a imprese che plausibilmente non possono manipolare.

</details>

<details>
<summary>Esercizio 6: Fuzzy RDD</summary>

Elezioni comunali italiane: il partito di centrosinistra vince se supera il 50% dei voti. Non tutti i comuni con centrosinistra adottano la stessa politica ambientale: il 70% dei comuni con centrosinistra la adotta, contro il 20% dei comuni con centrodestra. La discontinuità nella probabilità di adozione alla soglia 50% è 0.50.

a) Perché non si può usare uno sharp RDD?
b) Qual è lo strumento nel fuzzy RDD?
c) Se la discontinuità dell'outcome alla soglia è 0.8 punti percentuali di qualità dell'aria, qual è l'effetto causale per i "compliers"?

**Soluzione completa.**

a) Il trattamento (adozione della politica) non è deterministico alla soglia: alcuni comuni con centrosinistra non adottano la politica (non-compliance). Non si può trattare come sharp RDD perché $D_i \neq \mathbb{1}(X_i \geq 50)$.

b) Lo strumento è l'indicatore $Z_i = \mathbb{1}(X_i \geq 50)$ (vince il centrosinistra). Questo ha una discontinuità netta alla soglia 50% — uno strumento valido per il trattamento endogeno (adozione della politica).

c) Estimatore fuzzy RDD (analogo al Wald IV):
$\hat\tau_{\text{Fuzzy}} = \dfrac{\text{salto nell'outcome}}{\text{salto nella probabilità di trattamento}} = \dfrac{0.8}{0.5} = 1.6$

L'adozione della politica ambientale causa un miglioramento di 1.6 punti percentuali della qualità dell'aria per i "compliers" (comuni che adottano la politica solo perché vince il centrosinistra).

</details>

<details>
<summary>Esercizio 7: Scelta del metodo giusto</summary>

Per ciascuno scenario, indica quale metodo è più appropriato (DiD o RDD) e perché:

a) Valutare l'effetto di un incentivo aziendale introdotto in Lombardia nel 2020 (le altre regioni non lo hanno).
b) Stimare l'effetto di un voucher di formazione assegnato ai disoccupati con più di 45 anni.
c) Stimare l'effetto dell'ingresso in un'università d'élite per studenti che hanno superato di poco il punteggio minimo di ammissione.
d) Valutare l'impatto della pandemia Covid-19 su tutte le imprese italiane vs europee.

**Soluzione completa.**

a) **DiD**: trattamento (Lombardia) vs controllo (altre regioni), pre/post 2020. La variabilità è geografica e temporale — setup classico per DiD. Assunzione: le altre regioni sarebbero andate come la Lombardia in assenza dell'incentivo.

b) **RDD**: la soglia dei 45 anni di età è la running variable. Chi ha 44 anni e 11 mesi è quasi identico a chi ha 45 anni e 1 mese, ma solo il secondo riceve il voucher. Il salto nell'outcome alla soglia 45 è l'effetto causale del voucher. Occhio alla manipolazione: le persone non possono "scegliere" la loro età, quindi non c'è rischio di manipolazione.

c) **RDD**: punteggio di ammissione è la running variable, soglia = punteggio minimo. Chi supera di poco la soglia viene ammesso, chi manca di poco viene respinto. Effetto locale per chi è marginalmente ammesso.

d) **DiD**: Italia (trattata dalla pandemia più duramente) vs Europa (gruppo controllo). Ma la pandemia ha colpito tutti i paesi — la scelta del gruppo di controllo è delicata. Meglio forse settori più colpiti (trattati) vs settori meno colpiti (controllo), con pre/post periodo pandemia.

</details>

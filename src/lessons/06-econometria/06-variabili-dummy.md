---
id: econometria-06-dummy
subject: econometria
topic_it: Regressione OLS
topic_en: OLS regression
title_it: Variabili dummy e interazioni
title_en: Dummy variables and interactions
level: purple
order: 6
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 7 — Variabili qualitative"
stato: da-rielaborare
---

## 1. Intuizione — analogia concreta

Immagina di voler confrontare i prezzi delle case in due quartieri diversi di una città, controllando per la dimensione dell'immobile. Il quartiere è una variabile qualitativa — non ha una scala numerica naturale. Non puoi scrivere "quartiere A = 1, quartiere B = 2" come se A fosse "metà" di B. La soluzione è la **variabile dummy**: creo una variabile che vale 1 se la casa è nel quartiere A e 0 altrimenti. In questo modo inserisco l'informazione qualitativa direttamente nella regressione lineare.

Le variabili dummy sono ovunque in economia: genere, cittadinanza, settore industriale, anno fiscale, trattamento ricevuto, periodo pre/post una riforma. Ogni volta che devo "codificare" una categoria in un modello quantitativo, uso le dummy. Sono lo strumento base per analizzare differenze di gruppo, stagionalità, effetti dei programmi pubblici e cambiamenti strutturali nei dati.

L'idea delle **interazioni** estende questo: non solo i due gruppi partono da un livello diverso (intercette diverse), ma rispondono in modo diverso alle variabili continue (pendenze diverse). Per esempio, il rendimento dell'esperienza lavorativa potrebbe essere diverso per laureati e non laureati — l'interazione tra dummy (laurea) e variabile continua (anni di esperienza) cattura esattamente questa differenza di pendenza.

Il **differenze nelle differenze** (Diff-in-Diff) è l'applicazione più potente delle interazioni tra dummy: combinando una dummy di gruppo (trattati vs controllo) e una dummy temporale (pre vs post), e la loro interazione, si può identificare l'effetto causale di una politica sfruttando un esperimento naturale. È il metodo standard per la valutazione delle politiche pubbliche in assenza di randomizzazione.

---

## 2. Prerequisiti

- Regressione lineare multipla e interpretazione dei coefficienti OLS
- Concetto di multicollinearità e sue conseguenze
- Test F per ipotesi lineari congiunte
- Interpretazione dei log nelle regressioni (semi-elasticità)
- Differenza tra effetto di livello e di pendenza in un modello lineare

---

## 3. Teoria

### Variabile dummy binaria

Una **variabile dummy** (o indicatore binario) è una variabile che assume solo i valori 0 e 1:

$$D_i = \begin{cases} 1 & \text{se l'unità } i \text{ appartiene al gruppo} \\ 0 & \text{altrimenti (gruppo di riferimento)} \end{cases}$$

Il modello con una dummy è:

$$y_i = \beta_0 + \beta_1 D_i + \beta_2 x_i + u_i$$

- **Per il gruppo di riferimento** ($D_i = 0$): $E[y_i \mid D_i=0, x_i] = \beta_0 + \beta_2 x_i$
- **Per il gruppo trattato** ($D_i = 1$): $E[y_i \mid D_i=1, x_i] = (\beta_0 + \beta_1) + \beta_2 x_i$

**Interpretazione di $\beta_1$:** differenza media di $y$ tra il gruppo $D=1$ e il gruppo $D=0$, **controllando per $x$**. Le due rette hanno la stessa pendenza $\beta_2$ ma intercette diverse: $\beta_0$ e $\beta_0 + \beta_1$.

Se $\beta_1 > 0$: il gruppo $D=1$ ha in media valori di $y$ superiori.
Se $\beta_1 < 0$: il gruppo $D=1$ ha in media valori inferiori.

### Variabili dummy categoriali — trappola delle dummy

Supponiamo di avere una variabile con $k$ categorie mutualmente esclusive ed esaustive (es. Nord, Centro, Sud). Creo $k$ indicatori: $D_1, D_2, \ldots, D_k$ dove $D_j = 1$ se l'unità è nella categoria $j$.

**Trappola delle dummy:** Se includo tutte $k$ dummy nel modello con la costante, ho **collinearità perfetta** perché:

$$D_1 + D_2 + \cdots + D_k = 1 \quad \text{per ogni } i$$

ovvero la somma delle dummy è identicamente uguale alla colonna delle costanti (vettore di uni). Questo viola l'assunzione di rango pieno della matrice dei regressori → OLS non esiste.

**Soluzione:** Includere solo $k-1$ dummy. La categoria omessa diventa la **categoria di riferimento** (baseline). I coefficienti delle dummy incluse misurano la differenza rispetto alla categoria di riferimento.

Con $k=3$ categorie (Nord, Centro, Sud) e Sud come riferimento:

$$y_i = \beta_0 + \beta_1 D_{\text{Nord},i} + \beta_2 D_{\text{Centro},i} + \gamma x_i + u_i$$

- $\beta_0$: media di $y$ per il Sud (cet. par.)
- $\beta_1$: differenza media Nord–Sud
- $\beta_2$: differenza media Centro–Sud

### Interazione dummy × variabile continua

L'interazione permette alla **pendenza** di variare tra i gruppi. Il modello completo con intercetta e pendenza differenziate è:

$$y_i = \beta_0 + \beta_1 D_i + \beta_2 x_i + \beta_3 (D_i \cdot x_i) + u_i$$

- Gruppo di riferimento ($D_i=0$): $E[y \mid D=0, x] = \beta_0 + \beta_2 x$ (pendenza $\beta_2$)
- Gruppo trattato ($D_i=1$): $E[y \mid D=1, x] = (\beta_0+\beta_1) + (\beta_2+\beta_3) x$ (pendenza $\beta_2+\beta_3$)

**Interpretazione di $\beta_3$:** differenza nelle pendenze tra il gruppo $D=1$ e il gruppo $D=0$. Se $\beta_3 > 0$: la variabile $x$ ha un effetto più forte nel gruppo $D=1$.

**Test di Chow:** Testa se i coefficienti sono uguali nei due gruppi, cioè $H_0: \beta_1 = 0 \text{ e } \beta_3 = 0$. Si usa un test $F$ con 2 gradi di libertà al numeratore. Rifiutare $H_0$ implica che i gruppi hanno modelli strutturalmente diversi.

### Interazione dummy × dummy

Due variabili dummy $D_1$ e $D_2$:

$$y_i = \beta_0 + \beta_1 D_{1i} + \beta_2 D_{2i} + \beta_3 (D_{1i} \cdot D_{2i}) + u_i$$

$\beta_3$ misura l'**effetto di interazione**: quanto la combinazione di entrambe le caratteristiche differisce dalla semplice somma degli effetti separati. Per esempio, con $D_1 = $ donna e $D_2 = $ laureata: $\beta_3$ cattura un eventuale bonus (o penalità) specifica per le donne laureate, al di là dell'effetto separato di essere donna e di avere una laurea.

### Differenze nelle differenze (Diff-in-Diff)

Il metodo **Diff-in-Diff** (DiD) stima l'effetto causale di una politica combinando variazione di gruppo e variazione temporale. Setup:

- $D_i = 1$ se unità nel gruppo trattato, 0 se controllo.
- $T_t = 1$ se periodo post-trattamento, 0 se pre-trattamento.

Il modello DiD è:

$$y_{it} = \beta_0 + \beta_1 D_i + \beta_2 T_t + \beta_3 (D_i \cdot T_t) + u_{it}$$

- $\beta_1$: differenza pre-esistente tra trattati e controllo (bias di selezione)
- $\beta_2$: trend temporale comune a tutti (fattori macroeconomici)
- $\beta_3$: **effetto causale della politica** (estimatore DiD)

La stima del DiD è:

$$\hat{\beta}_3 = (\bar{y}_{\text{trattati, post}} - \bar{y}_{\text{trattati, pre}}) - (\bar{y}_{\text{controllo, post}} - \bar{y}_{\text{controllo, pre}})$$

**Ipotesi fondamentale (parallel trends):** In assenza del trattamento, i trattati e i controllo avrebbero avuto lo stesso andamento nel tempo. Non testabile direttamente, ma verificabile con test sui periodi pre-trattamento.

---

## 4. Derivazioni

### Dimostrazione della trappola delle dummy

Sia $\mathbf{X} = [\mathbf{1}, D_1, D_2, D_3]$ la matrice dei regressori con 3 dummy categoriali e costante.

Per la colonna delle costanti: $\mathbf{1} = (1,1,\ldots,1)'$. Per le dummy: $D_j \in \{0,1\}$ e ogni unità appartiene esattamente a una categoria, quindi $D_{1i} + D_{2i} + D_{3i} = 1$ per ogni $i$.

Questo implica $\mathbf{1} = D_1 + D_2 + D_3$ come vettori, ovvero la costante è combinazione lineare delle colonne delle dummy. Quindi $\mathbf{X}'\mathbf{X}$ è singolare → OLS non è calcolabile.

### Calcolo dell'estimatore DiD

Calcolo $\beta_3$ dai valori medi delle quattro celle:

| | Pre ($T=0$) | Post ($T=1$) | Differenza nel tempo |
| --- | --- | --- | --- |
| Controllo ($D=0$) | $\mu_{00}$ | $\mu_{01}$ | $\mu_{01} - \mu_{00}$ |
| Trattati ($D=1$) | $\mu_{10}$ | $\mu_{11}$ | $\mu_{11} - \mu_{10}$ |

Il modello dà: $\mu_{00} = \beta_0$, $\mu_{01} = \beta_0 + \beta_2$, $\mu_{10} = \beta_0 + \beta_1$, $\mu_{11} = \beta_0 + \beta_1 + \beta_2 + \beta_3$.

Quindi $\beta_3 = (\mu_{11} - \mu_{10}) - (\mu_{01} - \mu_{00})$ = differenza delle differenze temporali tra i due gruppi.

---

## 5. Esempi

### Esempio 1 — Gender gap nei salari

**Modello:** $\ln(\text{salario}_i) = \beta_0 + \beta_1 \text{maschio}_i + \beta_2 \text{istruzione}_i + u_i$

**Stima:** $\hat{\beta}_0 = 2.1$, $\hat{\beta}_1 = 0.18$, $\hat{\beta}_2 = 0.09$.

**Interpretazione:** Controllando per gli anni di istruzione, gli uomini hanno un log-salario mediamente superiore di 0.18, corrispondente a circa $e^{0.18} - 1 \approx 20\%$ di salario orario in più rispetto alle donne. Questo è il gender gap aggiustato per il livello di istruzione.

---

### Esempio 2 — Stagionalità trimestrale

**Modello:** $\text{vendite}_{it} = \beta_0 + \beta_1 Q2_t + \beta_2 Q3_t + \beta_3 Q4_t + \gamma \text{prezzo}_{it} + u_{it}$

Con Q1 come riferimento: $\hat{\beta}_2 = 15.3$ indica che, controllando per il prezzo, il terzo trimestre ha vendite mediamente 15.3 unità superiori al primo trimestre.

**Trappola:** includere anche $Q1_t$ causerebbe $Q1 + Q2 + Q3 + Q4 = 1$ → collinearità con la costante. Si omette sempre il primo trimestre (o qualsiasi altra categoria scelta come baseline).

---

### Esempio 3 — Interazione: rendimento dell'esperienza per laureati

**Modello:** $\text{salario}_i = \beta_0 + \beta_1 \text{laurea}_i + \beta_2 \text{esperienza}_i + \beta_3 (\text{laurea}_i \times \text{esperienza}_i) + u_i$

**Stima:** $\hat{\beta}_0 = 20$, $\hat{\beta}_1 = 8$, $\hat{\beta}_2 = 1.5$, $\hat{\beta}_3 = -0.8$.

- Non laureati: $\hat{y} = 20 + 1.5 \times \text{exp}$ → ogni anno di esperienza vale 1.5k€.
- Laureati: $\hat{y} = 28 + (1.5 - 0.8) \times \text{exp} = 28 + 0.7 \times \text{exp}$ → ogni anno vale 0.7k€.

I laureati partono più in alto (28 vs 20) ma il rendimento marginale dell'esperienza è inferiore. Possibile spiegazione: i laureati entrano già in posizioni avanzate e crescono più lentamente nella stessa azienda.

---

### Esempio 4 — Diff-in-Diff: riforma del salario minimo

**Setup:** New Jersey aumenta il salario minimo nel 1992. Pennsylvania rimane invariata. Card e Krueger (1994) confrontano l'occupazione nei fast food prima e dopo.

| | Pre (1992) | Post (1992) | Differenza |
| --- | --- | --- | --- |
| New Jersey (trattati) | 20.4 | 21.0 | +0.6 |
| Pennsylvania (controllo) | 23.3 | 21.2 | -2.1 |

$\hat{\beta}_3^{\text{DiD}} = 0.6 - (-2.1) = +2.7$

L'aumento del salario minimo ha **aumentato** l'occupazione di 2.7 addetti per ristorante, contrariamente alle previsioni standard. Risultato controverso e molto citato in letteratura.

---

### Esempio 5 — Test di Chow

**Modello:** $y_i = \beta_0 + \beta_1 D_i + \beta_2 x_i + \beta_3 (D_i \times x_i) + u_i$

**Risultati:**
- $\hat{\beta}_1 = 3.2$ (t = 1.8, p-value = 0.07)
- $\hat{\beta}_3 = -1.5$ (t = -2.4, p-value = 0.02)

Test $F$ congiunto per $H_0: \beta_1 = 0$ e $\beta_3 = 0$: $F = 6.8$, p-value = 0.001. Rifiuto $H_0$ → i due gruppi hanno strutture di regressione diverse (sia intercette che pendenze).

Nota: anche se $\beta_1$ non è significativo individualmente, il test congiunto è significativo. Quando si testa la differenza strutturale tra gruppi, usare sempre il test congiunto (Chow), non singoli test $t$.

---

### Esempio 6 — Dummy con variabili log

**Modello:** $\ln(y_i) = \beta_0 + \beta_1 D_i + \beta_2 \ln(x_i) + u_i$

**Stima:** $\hat{\beta}_1 = 0.15$.

**Interpretazione:** Il gruppo $D=1$ ha un valore di $y$ mediamente del $100 \times (e^{0.15} - 1) \approx 16.2\%$ superiore al gruppo $D=0$, controllando per $x$. Per valori di $\hat{\beta}_1$ piccoli ($\lvert \hat{\beta}_1 \rvert < 0.2$), l'approssimazione $\hat{\beta}_1 \approx 16\%$ è accurata (per il valore 0.15: 15% vs 16.2%, errore 1.2 pp). Per valori più grandi, usare sempre la formula esatta $e^{\hat{\beta}_1} - 1$.

---

### Esempio 7 — Variabili dummy ordinali

**Livelli di istruzione:** primaria, secondaria, universitaria. Ordine naturale, ma la distanza tra i livelli non è uniforme. Creare due dummy ($D_{\text{sec}}$ e $D_{\text{univ}}$) con primaria come riferimento permette di stimare effetti non lineari sull'istruzione, senza imporre che "universitaria = 3 × primaria".

**Stima:** $\hat{\beta}_{\text{sec}} = 0.08$ e $\hat{\beta}_{\text{univ}} = 0.21$.

Il salto da primaria a secondaria vale 8%, mentre da primaria a universitaria vale 21% — quindi il salto da secondaria a universitaria è $0.21 - 0.08 = 0.13$ (13%). Se avessi usato la variabile ordinale (0, 1, 2), avrei imposto un rendimento costante di 10.5% per livello.

---

## 6. Grafico

```plot
{"fn":"2 + 1.5*x","domain":[0,10],"yDomain":[0,25],"title":"Regressioni parallele: effetto dummy sull'intercetta","label1":"Gruppo D=0: β₀ + β₂x","color":"steelblue"}
```

---

## 7. Interattivo

```slider
{"fn":"(5 + delta) + (1.5 + slope_diff)*x","domain":[0,10],"yDomain":[0,35],"params":[{"name":"delta","min":-5,"max":10,"step":0.5,"default":4},{"name":"slope_diff","min":-2,"max":2,"step":0.1,"default":0}],"title":"Effetto dummy: intercetta (delta) e pendenza (slope_diff) per il gruppo D=1"}
```

---

## 8. Errori comuni

**Errore 1 — Cadere nella trappola delle dummy.**
Includere tutte $k$ dummy categoriali insieme alla costante genera multicollinearità perfetta. OLS non può essere calcolato. La soluzione è omettere sempre una categoria (la baseline). Molti software avvertono di questo errore, ma è fondamentale capire il meccanismo matematico.

**Errore 2 — Interpretare i coefficienti senza specificare la categoria di riferimento.**
Il coefficiente di una dummy si interpreta sempre **rispetto alla baseline**. Dire "$\hat{\beta}_{\text{Nord}} = 5$" non ha senso senza specificare "rispetto al Sud" (o qualunque altra baseline scelta). Cambiare la baseline cambia tutti i coefficienti delle dummy (anche se non cambia le previsioni del modello).

**Errore 3 — Omettere il termine di interazione quando le pendenze sono diverse.**
Se si includono dummy solo per le intercette, si assume che le pendenze siano uguali tra i gruppi. Se questa ipotesi è falsa, le stime dei coefficienti della variabile continua sono medie distorte dei coefficienti dei due gruppi. Testare sempre l'interazione con un test $F$.

**Errore 4 — Interpretare il DiD senza verificare il parallel trends.**
Il Diff-in-Diff identifica l'effetto causale solo se l'ipotesi di trend paralleli è soddisfatta. Verificare con dati pre-trattamento se i gruppi avevano trend simili. Un modo formale: includere la variabile dipendente nei periodi pre-trattamento come placebo test.

**Errore 5 — Confondere l'effetto dell'interazione con la significatività individuale.**
Un termine di interazione $D \times x$ può essere significativo anche se né $D$ né $x$ individualmente lo sono (o viceversa). Il test di Chow valuta la differenza strutturale complessiva — usare sempre il test congiunto per decidere se le strutture dei gruppi differiscono.

**Errore 6 — Usare una variabile dummy come dipendente in OLS senza considerare il LPM.**
Quando $y_i \in \{0,1\}$, OLS stima il Modello Lineare di Probabilità (LPM). È spesso accettabile per effetti medi, ma può produrre probabilità stimate fuori da $[0,1]$. Per probabilità individuali, usare Logit o Probit (vedi lezione 07).

**Errore 7 — Omettere le dummy temporali nel DiD.**
Il modello DiD deve includere sia dummy di gruppo che dummy temporali. Omettere le dummy temporali non controlla per trend macro comuni a tutti i gruppi → bias nel coefficiente di interazione.

---

## 9. Applicazioni reali

**Gender gap nei salari:** Le variabili dummy di genere sono standard nelle equazioni di Mincer per quantificare il divario salariale tra uomini e donne, controllando per istruzione, esperienza e settore. Ricerche recenti usano interazioni dummy×continua per capire se il gender gap è maggiore in certi settori o livelli di istruzione.

**Valutazione delle politiche con Diff-in-Diff:** Card e Krueger (1994) sul salario minimo, Angrist e Krueger (1991) sull'obbligo scolastico, Autor et al. (2013) sugli effetti dell'importazione dalla Cina. Il DiD è il metodo standard per la valutazione degli impatti causali di politiche quando manca la randomizzazione, sfruttando variazioni naturali nei tempi e nei gruppi esposti.

**Stagionalità e effetti ciclici in macroeconomia:** Serie storiche trimestrali o mensili includono sistematicamente dummy stagionali (Q2, Q3, Q4, oppure i 11 mesi non di riferimento) per rimuovere la variazione ciclica prima di analizzare i trend strutturali. Le agenzie statistiche pubblicano dati "destagionalizzati" basati su questo principio.

**Effetti fissi settoriali e regionali:** Nei modelli panel, si usano spesso grandi set di dummy per settore industriale, regione o anno per controllare per eterogeneità non osservata (vedi lezione 08). Sebbene tecnicamente il modello OLS con dummy sia equivalente al within estimator degli effetti fissi, con molte unità è computazionalmente più efficiente usare la demeaning.

---

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Variabile dummy binaria | $D_i \in \{0,1\}$ | 1 = trattato, 0 = controllo/riferimento |
| Effetto dummy sull'intercetta | $\beta_1 D_i$ | Differenza verticale tra le due rette |
| Trappola delle dummy | $D_1 + \cdots + D_k = \mathbf{1}$ | Omettere sempre una categoria |
| Interazione pendenza | $\beta_3 (D_i \cdot x_i)$ | Differenza nelle pendenze tra gruppi |
| Test di Chow | $H_0: \beta_1 = \beta_3 = 0$, test $F(2,n-k)$ | Struttura uguale nei due gruppi? |
| Differenze nelle differenze | $\beta_3 = \Delta_{\text{trattati}} - \Delta_{\text{controllo}}$ | Effetto causale politica (parallel trends) |
| Interpretazione log | $100(e^{\hat{\beta}_1}-1)\%$ | Per dummy in modello semi-log |
| Numero dummy per $k$ cat. | $k-1$ | Una categoria è sempre la baseline |

---

## 11. Esercizi

<details>
<summary>Esercizio 1: Interpretazione di una dummy in modello lineare</summary>

**Modello:** $\text{salario}_i = 15 + 5 \cdot \text{maschio}_i + 2 \cdot \text{istruzione}_i + u_i$

a) Qual è il salario atteso per una donna con 12 anni di istruzione?
b) Qual è il salario atteso per un uomo con 16 anni di istruzione?
c) Interpreta il coefficiente 5.

**Soluzione.**

a) Donna ($\text{maschio} = 0$), istruzione = 12: $\hat{y} = 15 + 5(0) + 2(12) = 15 + 24 = 39$ (migliaia di euro).

b) Uomo ($\text{maschio} = 1$), istruzione = 16: $\hat{y} = 15 + 5(1) + 2(16) = 15 + 5 + 32 = 52$ (migliaia di euro).

c) Il coefficiente 5 significa che, **a parità di anni di istruzione**, gli uomini guadagnano in media 5.000 euro in più rispetto alle donne. Questo è il gender gap aggiustato per il livello di istruzione. Non controlla per tipo di lavoro, settore, orario — quindi potrebbe riflettere anche segregazione occupazionale.

</details>

<details>
<summary>Esercizio 2: Trappola delle dummy — correzione</summary>

Un ricercatore include nel modello di regressione le dummy: $D_{\text{Nord}}$, $D_{\text{Centro}}$, $D_{\text{Sud}}$ e la costante. Cosa succede? Come correggere?

**Soluzione.**

**Problema:** $D_{\text{Nord}} + D_{\text{Centro}} + D_{\text{Sud}} = 1$ per ogni osservazione (un'unità appartiene a esattamente una regione). Quindi la colonna della costante è la somma delle tre dummy → **multicollinearità perfetta**. La matrice $\mathbf{X}'\mathbf{X}$ è singolare e OLS non esiste.

**Correzione:** Omettere una dummy, per esempio Sud:

$$y_i = \beta_0 + \beta_1 D_{\text{Nord},i} + \beta_2 D_{\text{Centro},i} + \gamma x_i + u_i$$

Ora: $\beta_0$ = media per il Sud (cet. par.), $\beta_1$ = differenza Nord–Sud, $\beta_2$ = differenza Centro–Sud. Per confrontare Nord e Centro: $\beta_1 - \beta_2$ (testabile con test $F$ lineare).

</details>

<details>
<summary>Esercizio 3: Modello con interazione — calcolo e interpretazione</summary>

**Stima:** $\hat{y}_i = 10 + 4 D_i + 2 x_i - 1.5 (D_i \cdot x_i)$

a) Scrivi l'equazione per il gruppo $D=0$ e per $D=1$.
b) Per quale valore di $x$ i due gruppi hanno lo stesso valore atteso?
c) $D=0$ o $D=1$: chi ha il valore atteso più alto per $x=10$?

**Soluzione.**

a) Gruppo $D=0$: $\hat{y} = 10 + 2x$. Gruppo $D=1$: $\hat{y} = 14 + 0.5x$.

b) Uguale valore atteso: $10 + 2x = 14 + 0.5x$ → $1.5x = 4$ → $x = 8/3 \approx 2.67$. Per $x < 2.67$ il gruppo $D=1$ è sopra; per $x > 2.67$ il gruppo $D=0$ supera il gruppo $D=1$.

c) Per $x=10$: gruppo $D=0$: $10 + 20 = 30$. Gruppo $D=1$: $14 + 5 = 19$. Il gruppo $D=0$ ha il valore più alto per $x=10$.

</details>

<details>
<summary>Esercizio 4: Differenze nelle differenze</summary>

Un governo introduce un sussidio all'occupazione per le piccole imprese nel 2020. I dati sull'occupazione media sono:

| | 2019 (pre) | 2021 (post) |
| --- | --- | --- |
| Piccole imprese (trattate) | 8.2 | 9.5 |
| Grandi imprese (controllo) | 25.0 | 24.8 |

a) Calcola la stima DiD. b) Interpreta il risultato. c) Quale ipotesi è necessaria?

**Soluzione.**

a) Differenza per le piccole imprese: $9.5 - 8.2 = +1.3$. Differenza per le grandi imprese: $24.8 - 25.0 = -0.2$.

$\hat{\beta}_{\text{DiD}} = 1.3 - (-0.2) = +1.5$

b) Il sussidio ha aumentato l'occupazione media delle piccole imprese di 1.5 addetti, rispetto a cosa sarebbe successo in assenza del sussidio (stima del controffattuale dal controllo). Il modello DiD controlla per il trend generale negativo nell'occupazione (la diminuzione di 0.2 per le grandi imprese è attribuita a fattori macroeconomici).

c) **Ipotesi di parallel trends:** In assenza del sussidio, le piccole imprese avrebbero avuto lo stesso trend delle grandi (cioè -0.2 addetti). Questa ipotesi non è direttamente testabile nel periodo post-trattamento. Può essere resa più plausibile verificando che nel periodo pre-trattamento i due gruppi seguissero trend simili.

</details>

<details>
<summary>Esercizio 5: Test di Chow</summary>

Vuoi testare se il modello $\hat{y} = \hat{\beta}_0 + \hat{\beta}_1 x$ differisce tra uomini e donne. Stimi:
- **Modello unico (vincolato):** $RSS_V = 1200$, $k=2$ parametri, $n=100$.
- **Modello separato per gruppi (non vincolato):** $RSS_{NV} = 980$, $k=4$ parametri.

Esegui il test di Chow al livello 5%.

**Soluzione.**

Il test di Chow usa la statistica $F$:

$$F = \frac{(RSS_V - RSS_{NV})/q}{RSS_{NV}/(n-2k)} = \frac{(1200-980)/2}{980/(100-4)} = \frac{220/2}{980/96} = \frac{110}{10.21} \approx 10.77$$

dove $q = k = 2$ (numero di restrizioni: intercetta e pendenza uguali tra i gruppi).

Distribuzione: $F \sim F(2, 96)$ sotto $H_0$. Valore critico $F_{2,96,0.05} \approx 3.09$.

Poiché $10.77 > 3.09$: **rifiutiamo $H_0$**. I modelli per uomini e donne sono statisticamente diversi — è appropriato usare modelli separati (o includere dummy di genere + interazione).

</details>

<details>
<summary>Esercizio 6: Dummy in modello log-lineare</summary>

Modello: $\ln(\text{prezzo}_i) = \beta_0 + \beta_1 \text{ristrutturato}_i + \beta_2 \text{mq}_i + u_i$

$\hat{\beta}_1 = 0.23$. Quanto vale in percentuale l'effetto di essere ristrutturato sul prezzo?

**Soluzione.**

Poiché il modello è semi-logaritmico (log della variabile dipendente, dummy come regressore), l'interpretazione corretta è:

$$\% \text{effetto} = 100 \times (e^{\hat{\beta}_1} - 1) = 100 \times (e^{0.23} - 1) = 100 \times (1.2586 - 1) = 25.86\%$$

Le case ristrutturate costano in media circa **25.9% in più** rispetto a quelle non ristrutturate, controllando per la dimensione in metri quadri.

Nota: l'approssimazione $\hat{\beta}_1 \approx 23\%$ è meno precisa qui (errore di 2.86 pp) perché il valore è relativamente grande. Per $\hat{\beta}_1 < 0.10$, l'approssimazione diretta è accettabile.

</details>

<details>
<summary>Esercizio 7: Interazione tra due dummy</summary>

Modello: $y_i = \beta_0 + \beta_1 D_{\text{donna}} + \beta_2 D_{\text{laurea}} + \beta_3 (D_{\text{donna}} \times D_{\text{laurea}}) + u_i$

Stima: $\hat{\beta}_0 = 30$, $\hat{\beta}_1 = -4$, $\hat{\beta}_2 = 8$, $\hat{\beta}_3 = 3$.

Interpreta i quattro possibili valori medi.

**Soluzione.**

Calcolo le 4 medie:

| Gruppo | Formula | Valore |
| --- | --- | --- |
| Uomo, non laureato | $\hat{\beta}_0$ | 30 |
| Donna, non laureata | $\hat{\beta}_0 + \hat{\beta}_1$ | 26 |
| Uomo, laureato | $\hat{\beta}_0 + \hat{\beta}_2$ | 38 |
| Donna, laureata | $\hat{\beta}_0 + \hat{\beta}_1 + \hat{\beta}_2 + \hat{\beta}_3$ | 37 |

**Interpretazione:** Il termine di interazione $\hat{\beta}_3 = 3$ indica che il divario di genere è **3 unità più piccolo** per i laureati rispetto ai non laureati. Per i non laureati, le donne guadagnano 4 in meno degli uomini; per i laureati, le donne guadagnano 1 in meno ($-4 + 3 = -1$). La laurea riduce quasi completamente il gap di genere in questo esempio. Senza il termine di interazione, non avremmo catturato questa differenza.

</details>

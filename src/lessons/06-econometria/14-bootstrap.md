---
id: econometria-14-bootstrap
subject: econometria
topic_it: Modelli non lineari
topic_en: Non-linear models
title_it: Bootstrap e inferenza computazionale
title_en: Bootstrap and computational inference
level: purple
order: 14
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Appendice — Bootstrap"
---

## 1. Intuizione — analogia concreta + perché si studia

Immagina di avere un sacchetto con 100 biglie numerate — il tuo campione statistico. Vorresti sapere quanto sia precisa la media di questo campione come stima della media della popolazione reale. Normalmente, per saperlo dovresti prelevare molti nuovi campioni dalla popolazione — ma la popolazione è inaccessibile (i dati costano, il tempo è limitato).

Il **bootstrap** ha un'idea geniale: usa il campione stesso come se fosse la popolazione, estrae tanti "ricampioni" da esso con reinserimento, e osserva quanto variano le stime su questi ricampioni. Se prendi 1000 campioni fittizi da quelle 100 biglie (rimettendo ogni biglia nel sacchetto dopo averla estratta), ottieni una distribuzione empirica dello stimatore che approssima quella vera.

Il nome viene da una frase inglese ("pull yourself up by your bootstraps" — risollevarsi da soli), a indicare che il metodo usa solo ciò che già hai in mano. Fu introdotto da Bradley Efron nel 1979 e ha rivoluzionato l'inferenza statistica computazionale.

Il vantaggio chiave è che il bootstrap funziona anche quando le formule analitiche per gli standard error sono complesse, inesistenti, o basate su ipotesi asintotiche che non si applicano al tuo campione. Statistiche come la mediana, la correlazione di Spearman, il massimo, o i coefficienti della regressione quantilica non hanno formule standard semplici per i SE — ma il bootstrap li stima sempre.

Un esempio concreto: vuoi stimare l'IC al 95% per il rapporto $\hat\mu / \hat\sigma$ (media diviso deviazione standard) in un campione di 30 osservazioni. Non esiste una formula chiusa per la distribuzione di questo stimatore con campioni piccoli. Il bootstrap risolve il problema in pochi secondi.

---

## 2. Prerequisiti

- Campionamento casuale e statistica di base (media, varianza, quantili)
- Standard error e intervalli di confidenza classici
- Legge dei grandi numeri e teorema centrale del limite (concetti, non dimostrazioni)
- Distribuzione campionaria di uno stimatore
- (Consigliato) Regressione OLS e coefficienti stimati

---

## 3. Teoria

### Il principio bootstrap

**Problema:** hai un campione $\mathcal{D} = \{x_1, \ldots, x_n\}$ i.i.d. dalla distribuzione sconosciuta $F$. Calcoli uno stimatore $\hat\theta = T(\mathcal{D})$ e vuoi conoscere la varianza di $\hat\theta$ (o la sua intera distribuzione campionaria).

**Soluzione classica:** se conosci $F$, puoi calcolare $\text{Var}(\hat\theta)$ per via analitica.

**Bootstrap:** sostituisci $F$ con la distribuzione empirica $\hat{F}_n$ che mette peso $1/n$ su ciascun $x_i$. Campionare da $\hat{F}_n$ equivale a estrarre con reinserimento da $\{x_1, \ldots, x_n\}$.

### Bootstrap non parametrico — algoritmo

**Algoritmo:**

1. Dal campione originale $(x_1, \ldots, x_n)$, genera $B$ campioni bootstrap $\mathcal{D}^{(1)}, \ldots, \mathcal{D}^{(B)}$, ciascuno di dimensione $n$, **estraendo con reinserimento**.
2. Per ogni $b = 1, \ldots, B$: calcola $\hat\theta^{(b)} = T(\mathcal{D}^{(b)})$.
3. La distribuzione di $\{\hat\theta^{(1)}, \ldots, \hat\theta^{(B)}\}$ approssima la distribuzione campionaria di $\hat\theta$.

**Standard error bootstrap:**

$$\hat{\text{SE}}_B(\hat\theta) = \sqrt{\frac{1}{B-1} \sum_{b=1}^B (\hat\theta^{(b)} - \bar\theta^*)^2}$$

dove $\bar\theta^* = \frac{1}{B} \sum_{b=1}^B \hat\theta^{(b)}$ è la media bootstrap.

**Distorsione bootstrap:**

$$\widehat{\text{bias}}_B = \bar\theta^* - \hat\theta$$

Se la distorsione bootstrap è grande rispetto all'SE, conviene usare uno stimatore corretto per la distorsione.

### Intervalli di confidenza bootstrap

**Metodo percentile:** $IC_{1-\alpha} = [\hat\theta^{*(\alpha/2)}, \hat\theta^{*(1-\alpha/2)}]$

Usa i quantili empirici della distribuzione bootstrap. Semplice ma può essere inaccurato se la distribuzione dello stimatore è asimmetrica.

**Metodo percentile invertito (pivot bootstrap):**

$$IC_{1-\alpha} = [2\hat\theta - \hat\theta^{*(1-\alpha/2)},\; 2\hat\theta - \hat\theta^{*(\alpha/2)}]$$

Corregge per la posizione della distribuzione bootstrap rispetto alla stima originale. In generale più accurato del semplice percentile.

**IC bootstrap normale:** $\hat\theta \pm z_{\alpha/2} \cdot \hat{\text{SE}}_B$

Assume che $\hat\theta$ sia approssimativamente normale — funziona bene se vale il TCL.

**IC $\text{BC}_a$ (Bias-Corrected and Accelerated):** il più accurato tra i metodi standard. Corregge per distorsione ($\hat z_0$) e per la variazione dell'SE al variare del vero parametro ($\hat a$). Il calcolo richiede anche la jackknife, ma è implementato automaticamente in R (`boot::boot.ci`) e Python (`scipy.stats.bootstrap`).

### Bootstrap parametrico

Invece di ricampionare i dati, si generano nuovi campioni **dal modello stimato**:

1. Stima il modello: $\hat{F}(\cdot; \hat\theta)$.
2. Genera $B$ campioni $\mathcal{D}^{(b)} \sim \hat{F}(\cdot; \hat\theta)$.
3. Ricalcola $\hat\theta^{(b)}$ su ciascun campione.

**Quando usarlo:** quando hai un modello ben specificato e vuoi sfruttare quella struttura. Ad esempio: se sai che i dati sono normali $\mathcal{N}(\mu, \sigma^2)$, stimi $\hat\mu$ e $\hat\sigma^2$, e generi campioni da $\mathcal{N}(\hat\mu, \hat\sigma^2)$.

**Svantaggio:** se il modello è sbagliato (misspecification), il bootstrap parametrico può dare intervalli fuorvianti.

### Block bootstrap per serie temporali

Per dati i.i.d., il ricampionamento con reinserimento è valido perché le osservazioni sono indipendenti. Per le **serie temporali**, le osservazioni sono correlate nel tempo — ricampionarle singolarmente rompe la struttura di dipendenza.

**Block bootstrap:** divide la serie in blocchi di lunghezza $\ell$ e ricampiona i blocchi (con reinserimento), mantenendo la struttura temporale all'interno di ciascun blocco.

Varianti:
- **Block fisso:** blocchi non sovrapposti $[1,\ell], [\ell+1, 2\ell], \ldots$
- **Block circolare:** la serie è "avvolta" in cerchio per evitare effetti di bordo.
- **Stationary bootstrap** (Politis-Romano): lunghezza del blocco casuale geometrica, garantisce stazionarietà dei campioni bootstrap.

La scelta della lunghezza $\ell$ è cruciale: troppo corta → dipendenza sottostimata; troppo lunga → varianza bootstrap alta e meno campioni distinti.

### Test di permutazione

Un test di permutazione testa l'**ipotesi nulla di assenza di struttura** (indipendenza, uguaglianza di distribuzioni):

1. Calcola la statistica test osservata $T_\text{obs}$.
2. Permuta casualmente i dati tra i gruppi (o nel tempo) $P$ volte.
3. Calcola $T^{(p)}$ per ogni permutazione.
4. P-value: $\frac{1}{P}\sum_{p=1}^P \mathbf{1}\{T^{(p)} \geq T_\text{obs}\}$.

A differenza del bootstrap, il test di permutazione è esatto sotto $H_0$ (senza approssimazioni asintotiche) per statistiche invarianti alla permutazione.

---

## 4. Derivazioni

### Giustificazione teorica del bootstrap

Sia $\hat\theta$ uno stimatore di $\theta$ con distribuzione campionaria $G_n(t) = P(\sqrt{n}(\hat\theta - \theta) \leq t)$.

Il bootstrap approssima $G_n$ con:

$$\hat{G}_n(t) = P^*(\sqrt{n}(\hat\theta^* - \hat\theta) \leq t)$$

dove $P^*$ denota la probabilità rispetto ai campioni bootstrap, condizionatamente ai dati osservati.

**Teorema (consistenza del bootstrap):** per stimatori regolari (soddisfacenti il TCL) e sotto condizioni di regolarità su $F$:

$$\sup_t \lvert \hat{G}_n(t) - G_n(t) \rvert \to 0 \quad \text{in probabilità}$$

Il bootstrap converge alla vera distribuzione campionaria. La dimostrazione usa il teorema di Glivenko-Cantelli per la convergenza di $\hat{F}_n$ a $F$ e l'equicontinuità di $T$.

### Numero ottimale di repliche $B$

L'IC bootstrap percentile ha varianza montecarlo $\approx \tau(1-\tau) / (B \cdot f^2(q_\tau))$ nella stima del $\tau$-esimo quantile della distribuzione bootstrap. Per $\tau = 0.025$ (IC al 95%), $B = 1000$ dà già una precisione pratica sufficiente. Per $\text{BC}_a$ o statistiche instabili, $B = 2000$ o più è preferibile.

---

## 5. Esempi

**Esempio 1 — Bootstrap della media (a mano)**

Campione: $\{3, 5, 2, 8, 6\}$, $n=5$, $\bar x = 4.8$.

Un possibile campione bootstrap: $\{5, 5, 2, 8, 3\}$ (il 5 è estratto due volte). Media: $4.6$.

Un altro: $\{3, 6, 8, 8, 5\}$. Media: $6.0$.

Dopo $B = 1000$ ricampionamenti, la distribuzione delle medie bootstrap approssima la distribuzione campionaria di $\bar{X}$.

---

**Esempio 2 — Calcolo SE bootstrap (esplicito)**

Con $B = 4$ campioni bootstrap, medie: $\hat\theta^{(1)} = 3.8$, $\hat\theta^{(2)} = 4.2$, $\hat\theta^{(3)} = 5.0$, $\hat\theta^{(4)} = 4.4$.

$\bar\theta^* = (3.8 + 4.2 + 5.0 + 4.4)/4 = 4.35$

Varianza:
$$s^2 = \frac{(3.8-4.35)^2 + (4.2-4.35)^2 + (5.0-4.35)^2 + (4.4-4.35)^2}{3} = \frac{0.3025 + 0.0225 + 0.4225 + 0.0025}{3} = \frac{0.75}{3} = 0.25$$

$\hat{\text{SE}}_B = \sqrt{0.25} = 0.5$.

---

**Esempio 3 — IC percentile per la mediana**

Campione: $n = 20$, mediana osservata $\hat\theta = 12.4$. Con $B = 1000$ campioni bootstrap, le mediane bootstrap hanno 2.5° percentile $= 10.3$ e 97.5° percentile $= 14.8$.

IC al 95% (percentile): $[10.3,\; 14.8]$.

Non esiste una formula analitica semplice per l'IC della mediana con $n$ piccolo — il bootstrap è la soluzione naturale.

---

**Esempio 4 — Bootstrap per coefficienti di regressione quantilica**

Regressione $Q_{0.9}(salario \mid istruzione)$, $\hat\beta = 0.12$. Con 500 campioni bootstrap: SE bootstrap $= 0.025$, IC approssimato: $[0.07,\; 0.17]$.

La formula di Koenker-Bassett richiederebbe stimare la densità degli errori in zero — il bootstrap evita questa stima delicata.

---

**Esempio 5 — Bootstrap parametrico per un modello esponenziale**

Dati: tempi di sopravvivenza $\sim \text{Exp}(\lambda)$. Stima MLE: $\hat\lambda = 1/\bar x$. Per stimare l'IC di $\hat\lambda$:

1. Genera $B = 1000$ campioni di dimensione $n$ da $\text{Exp}(\hat\lambda)$.
2. Per ogni campione, calcola $\hat\lambda^{(b)} = 1/\bar x^{(b)}$.
3. IC: quantili 2.5% e 97.5% di $\{\hat\lambda^{(b)}\}$.

Questo sfrutta la struttura parametrica esponenziale, producendo IC più efficienti del bootstrap non parametrico quando il modello è corretto.

---

**Esempio 6 — Block bootstrap per serie temporale**

Serie temporale $n = 200$ osservazioni mensili. Autocorrelazione fino a lag 6. Scegliamo blocchi di lunghezza $\ell = 10$: la serie è divisa in 20 blocchi non sovrapposti. Per ogni campione bootstrap:

1. Estrai 20 blocchi con reinserimento dai 20 blocchi originali.
2. Concatenali per ottenere una serie bootstrap di lunghezza 200.
3. Calcola la statistica di interesse (es. media, coefficiente AR).

Con $\ell = 10 > 6$, la struttura di autocorrelazione è preservata all'interno di ciascun blocco.

---

**Esempio 7 — Test di permutazione per confronto di due gruppi**

Gruppo A ($n_A = 30$): media $= 5.2$. Gruppo B ($n_B = 28$): media $= 4.6$. Differenza osservata $= 0.6$.

Sotto $H_0$: i due campioni vengono da stessa distribuzione. Si permutano le etichette A/B 10000 volte e si calcola la differenza di medie per ognuna. Se solo il 4% delle permutazioni produce una differenza $\geq 0.6$, il p-value è $0.04$.

---

## 6. Grafico

```plot
{"fn":"Math.exp(-0.5*x*x)/Math.sqrt(2*Math.PI)","domain":[-4,4],"yDomain":[0,0.5],"title":"Distribuzione bootstrap degli stimatori — approssima la distribuzione campionaria","label1":"Densità bootstrap (approssimazione)","fn2":"Math.exp(-0.5*(x-0.3)*(x-0.3))/Math.sqrt(2*Math.PI)*0.9","label2":"Distribuzione vera (sconosciuta)","color":"steelblue","color2":"crimson"}
```

---

## 7. Interattivo

```slider
{"fn":"Math.exp(-0.5*x*x/Math.max(sigma*sigma,0.01))/(Math.sqrt(2*Math.PI)*Math.max(sigma,0.01))","domain":[-4,4],"yDomain":[0,1.2],"params":[{"name":"sigma","min":0.3,"max":2,"step":0.1,"default":1}],"title":"Distribuzione degli stimatori: al crescere di n, SE diminuisce (σ = 1/√n)"}
```

*Sposta il cursore per vedere come la distribuzione bootstrap diventa più concentrata (SE minore) all'aumentare del numero di osservazioni effettive, rappresentato qui da σ inversamente proporzionale a √n.*

---

## 8. Errori comuni

**Errore 1 — Ricampionare senza reinserimento.**
Il bootstrap richiede tassativamente il campionamento **con reinserimento**. Senza reinserimento, ogni campione bootstrap sarebbe identico al campione originale (stesso insieme di punti, ordine diverso) — la varianza bootstrap sarebbe zero. Il reinserimento permette ad alcune osservazioni di apparire più volte e ad altre di non apparire affatto, creando la variabilità necessaria.

**Errore 2 — Usare B troppo piccolo.**
Con $B = 50$ o $B = 100$, le stime bootstrap sono instabili: rieseguire il bootstrap dà IC diversi. Per SE: $B = 200$ è sufficiente. Per IC percentile: $B = 1000$ è il minimo. Per $\text{BC}_a$: $B = 2000$. Il costo computazionale è basso, quindi non c'è motivo per usare $B$ piccolo.

**Errore 3 — Applicare il bootstrap non parametrico a serie temporali.**
In una serie temporale, le osservazioni sono correlate. Ricampionare singolarmente le osservazioni rompe la struttura di autocorrelazione e produce campioni bootstrap che non assomigliano a nessuna serie temporale plausibile. Usa sempre il **block bootstrap** per dati dipendenti.

**Errore 4 — Confondere SE bootstrap e IC bootstrap.**
Il SE bootstrap è $\hat{\text{SE}}_B = \text{std}(\hat\theta^{(b)})$. L'IC bootstrap percentile è $[\text{quantile}_{2.5\%}(\hat\theta^{(b)}), \text{quantile}_{97.5\%}(\hat\theta^{(b)})]$. Questi due approcci non danno lo stesso IC: $\hat\theta \pm 1.96 \cdot \hat{\text{SE}}_B$ (IC normale) e l'IC percentile coincidono solo se la distribuzione bootstrap è simmetrica e centrata su $\hat\theta$.

**Errore 5 — Credere che il bootstrap funzioni sempre.**
Il bootstrap NON funziona in alcuni casi:
- **Statistiche non regolari** come il massimo di un campione i.i.d. (la distribuzione del massimo dipende dalle code di $F$ in modo non catturato da $\hat{F}_n$).
- **Campioni molto piccoli** ($n < 10$): non ci sono abbastanza punti distinti per approssimare $F$.
- **Dipendenze forti non catturate dai blocchi:** se la struttura di dipendenza è più lunga della lunghezza del blocco, il block bootstrap fallisce.

**Errore 6 — Usare il bootstrap per sostituire un campione più grande.**
Il bootstrap stima la variabilità dello stimatore dato il campione che hai, ma non crea informazione nuova. Se il tuo campione è piccolo e biased, il bootstrap ti darà un IC centrato su una stima distorta — non su quella vera. Il bootstrap non corregge la mancanza di dati, stima solo l'incertezza campionaria.

**Errore 7 — Dimenticare di ricampionare l'intera unità di osservazione.**
In un dataset panel (individui osservati nel tempo), il bootstrap deve ricampionare gli **individui**, non le singole righe. Ricampionare le righe rompe la struttura di correlazione intra-individuale. Analogamente, in un cluster campionario, ricampiona i cluster, non le osservazioni individuali.

---

## 9. Applicazioni reali

**Finanza e gestione del rischio.** I modelli di Value at Risk e Expected Shortfall spesso richiedono IC per quantili estremi della distribuzione dei rendimenti. Con campioni di dimensione storica tipica (qualche centinaio di dati), le approssimazioni asintotiche per i quantili estremi sono inaccurate. Il block bootstrap su serie storiche di rendimenti è diventato lo standard per la validazione dei modelli di rischio (backtesting).

**Bioinformatica e genomica.** L'analisi di espressione genica confronta migliaia di geni tra gruppi. I test di permutazione controllano il tasso di errore di tipo I (FWER o FDR) in modo esatto senza fare assunzioni sulla distribuzione dei dati, particolarmente utile quando $n$ è piccolo (pochi pazienti) ma il numero di variabili è enorme.

**Macroeconomia e serie storiche.** Le previsioni con modelli VAR o ARMA richiedono IC per gli impulsi di risposta (IRF). Le IRF sono funzioni non lineari dei parametri, senza formula analitica semplice. Il bootstrap residuale (o block bootstrap) è il metodo standard in macroeconometria per costruire bande di confidenza attorno agli IRF.

**Machine learning e model selection.** La **cross-validation bootstrap** (.632+ estimator di Efron e Tibshirani) stima l'errore di generalizzazione di un modello in modo più efficiente della k-fold CV tradizionale, specialmente con dataset piccoli. Il bootstrap è alla base anche del metodo delle random forest (bagging = bootstrap aggregating).

---

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Campione bootstrap | $\mathcal{D}^{(b)}$ da $\{x_1,...,x_n\}$ con reinserimento | $B$ ripetizioni |
| SE bootstrap | $\sqrt{\frac{1}{B-1}\sum(\hat\theta^{(b)}-\bar\theta^*)^2}$ | Approssima SE analitico |
| Distorsione bootstrap | $\bar\theta^* - \hat\theta$ | Corregge stima se grande |
| IC percentile | $[\hat\theta^{*(\alpha/2)}, \hat\theta^{*(1-\alpha/2)}]$ | Semplice, meno accurato |
| IC pivot | $[2\hat\theta - \hat\theta^{*(1-\alpha/2)}, 2\hat\theta - \hat\theta^{*(\alpha/2)}]$ | Più accurato |
| IC $\text{BC}_a$ | Corregge bias e asimmetria | Più accurato in assoluto |
| Bootstrap parametrico | Genera da $\hat{F}(\cdot;\hat\theta)$ | Usa struttura del modello |
| Block bootstrap | Ricampiona blocchi di lunghezza $\ell$ | Per serie temporali |
| Test permutazione | Permuta le etichette, calcola p-value empirico | Esatto sotto $H_0$ |
| $B$ consigliato | 1000 (SE), 2000 ($\text{BC}_a$) | Basso costo computazionale |

---

## 11. Esercizi

<details>
<summary>Esercizio 1: Campione bootstrap a mano</summary>

Campione: $\{3, 5, 2, 8, 6\}$. Elenca un possibile campione bootstrap e calcola la sua media. Poi stima cosa rappresenterebbe la media dei 1000 campioni bootstrap.

**Soluzione completa:**

Un possibile campione bootstrap (con reinserimento da $\{3,5,2,8,6\}$): $\{5, 5, 2, 8, 3\}$ — il valore 5 è stato estratto due volte, il valore 6 non è stato estratto.

Media bootstrap: $(5+5+2+8+3)/5 = 23/5 = 4.6$.

La media del campione originale è $\bar x = (3+5+2+8+6)/5 = 24/5 = 4.8$.

Con $B = 1000$ ripetizioni, la distribuzione delle 1000 medie bootstrap approssima la distribuzione campionaria di $\bar X$ — cioè la distribuzione che avrebbe la media campionaria se potessimo ripetere il prelievo del campione dalla vera popolazione. Questo ci permette di stimare lo standard error di $\bar X$ senza formula analitica.

</details>

<details>
<summary>Esercizio 2: Calcolo di SE e distorsione bootstrap</summary>

Con $B=4$ (per semplicità), le stime bootstrap di $\hat\theta$ sono: $3.8, 4.2, 5.0, 4.4$. La stima originale è $\hat\theta = 4.6$. Calcola SE bootstrap e distorsione bootstrap.

**Soluzione completa:**

$\bar\theta^* = (3.8 + 4.2 + 5.0 + 4.4)/4 = 17.4/4 = 4.35$

Varianza bootstrap:
$$s^2 = \frac{(3.8-4.35)^2 + (4.2-4.35)^2 + (5.0-4.35)^2 + (4.4-4.35)^2}{4-1}$$
$$= \frac{0.3025 + 0.0225 + 0.4225 + 0.0025}{3} = \frac{0.75}{3} = 0.25$$

$\hat{\text{SE}}_B = \sqrt{0.25} = 0.5$

Distorsione bootstrap: $\widehat{\text{bias}} = \bar\theta^* - \hat\theta = 4.35 - 4.6 = -0.25$

Il segno negativo indica che in media i campioni bootstrap danno stime più basse di $\hat\theta$. Una stima corretta per la distorsione sarebbe $\hat\theta_{\text{corr}} = \hat\theta - \widehat{\text{bias}} = 4.6 - (-0.25) = 4.85$.

</details>

<details>
<summary>Esercizio 3: IC percentile e IC pivot</summary>

Con $B=1000$ campioni bootstrap, le stime hanno: 2.5° percentile $= 1.8$, 97.5° percentile $= 3.4$. La stima originale è $\hat\theta = 2.5$. Calcola l'IC al 95% con il metodo percentile e con il metodo pivot.

**Soluzione completa:**

**IC percentile:** direttamente i quantili bootstrap $= [1.8,\; 3.4]$.

**IC pivot (invertito):** usa la simmetria della distribuzione degli errori bootstrap.

$IC_\text{pivot} = [2\hat\theta - \hat\theta^{*(0.975)},\; 2\hat\theta - \hat\theta^{*(0.025)}]$

$= [2 \times 2.5 - 3.4,\; 2 \times 2.5 - 1.8]$

$= [5.0 - 3.4,\; 5.0 - 1.8]$

$= [1.6,\; 3.2]$

I due IC differiscono perché il metodo pivot corregge per la posizione di $\hat\theta$ rispetto alla distribuzione bootstrap. Se $\bar\theta^* \approx \hat\theta$, i due IC coincidono. Qui $\bar\theta^*$ (media bootstrap) è probabilmente $\approx 2.6$, leggermente diversa da $\hat\theta = 2.5$.

</details>

<details>
<summary>Esercizio 4: Quando usare bootstrap parametrico vs. non parametrico</summary>

Per ciascuna situazione, scegli bootstrap parametrico (BP) o non parametrico (BNP) e motiva.

(a) Campione di redditi con distribuzione sconosciuta, vuoi IC per la mediana.
(b) Modello di sopravvivenza con tempi esponenziali, vuoi IC per il parametro $\lambda$.
(c) Residui di regressione con distribuzione asimmetrica, vuoi IC per $\hat\beta$.
(d) Test di uguaglianza di due distribuzioni senza alcuna assunzione.

**Soluzione completa:**

(a) **BNP:** la distribuzione dei redditi è sconosciuta e potenzialmente molto asimmetrica. Non fare assunzioni parametriche. Ricampiona le osservazioni e calcola la mediana bootstrap.

(b) **BP:** hai un modello esponenziale ben motivato (memoryless property per tempi di guasto). Genera campioni da $\text{Exp}(\hat\lambda)$, ricalcola $\hat\lambda^{(b)} = 1/\bar x^{(b)}$. L'IC sarà più efficiente.

(c) **BNP residuale:** ricampiona i residui (non le osservazioni intere) e ridefinisci $y_i^{(b)} = \hat y_i + \varepsilon_{j(b)}$ per indici casuali $j(b)$. Non fare assunzioni sulla forma dei residui.

(d) **Test di permutazione:** non bootstrap ma permutazione. Sotto $H_0$ le due distribuzioni sono uguali, quindi permutare le etichette è legittimo. Il test è esatto (non asintotico).

</details>

<details>
<summary>Esercizio 5: Block bootstrap per serie temporale</summary>

Serie temporale: $T = 120$ osservazioni mensili (10 anni). Autocorrelazione significativa fino a lag 12. Come imposti il block bootstrap per stimare il SE della media?

**Soluzione completa:**

Devo scegliere $\ell > 12$ per catturare la struttura di autocorrelazione. Una regola empirica è $\ell \approx T^{1/3} \approx 120^{1/3} \approx 5$ — ma poiché l'autocorrelazione arriva a lag 12, scelgo $\ell = 15$ per sicurezza.

**Procedura:**

1. Dividi la serie in blocchi sovrapposti di lunghezza 15: $B_1 = (y_1, \ldots, y_{15})$, $B_2 = (y_2, \ldots, y_{16})$, ecc. — in totale $120 - 15 + 1 = 106$ blocchi possibili.

2. Per ogni campione bootstrap: estrai $\lceil 120/15 \rceil = 8$ blocchi con reinserimento e concatenali (troncando all'ultima osservazione se la serie supera 120).

3. Calcola la media del campione bootstrap.

4. Ripeti $B = 1000$ volte e usa la distribuzione delle medie bootstrap per stimare SE e IC.

Il block bootstrap circolare (wrap-around) evita che le osservazioni delle ultime posizioni siano sotto-rappresentate nei blocchi di bordo.

</details>

<details>
<summary>Esercizio 6: Test di permutazione</summary>

Due gruppi: A = $\{4, 7, 3, 8\}$, B = $\{2, 5, 1, 6\}$. La statistica test è la differenza di medie $T = \bar X_A - \bar X_B$. Calcola $T_\text{obs}$ e descrivi come costruire il p-value con permutazione.

**Soluzione completa:**

$\bar X_A = (4+7+3+8)/4 = 22/4 = 5.5$

$\bar X_B = (2+5+1+6)/4 = 14/4 = 3.5$

$T_\text{obs} = 5.5 - 3.5 = 2.0$

**Costruzione del p-value:**

L'insieme combinato è $\{4,7,3,8,2,5,1,6\}$ ($n=8$). Sotto $H_0$ (stessa distribuzione), qualsiasi assegnazione di 4 elementi al gruppo A e 4 al gruppo B è ugualmente probabile.

Numero di permutazioni possibili: $\binom{8}{4} = 70$.

Per ognuna delle 70 permutazioni, calcola $T^{(p)} = \bar X_A^{(p)} - \bar X_B^{(p)}$.

P-value (one-sided): $\frac{\#\{T^{(p)} \geq 2.0\}}{70}$.

Con molte permutazioni possibili, si usa anche la simulazione Monte Carlo: permuta 10000 volte a caso e conta quelle $\geq 2.0$.

</details>

<details>
<summary>Esercizio 7: Scelta di B</summary>

Stai stimando un IC al 95% per la mediana con bootstrap percentile. Qual è il $B$ minimo consigliato e perché? Cosa succede se usi $B=50$?

**Soluzione completa:**

Per l'IC percentile al 95%, hai bisogno di stimare il 2.5° e 97.5° percentile della distribuzione bootstrap. Con $B=50$ campioni:

- Il 2.5° percentile cade a $0.025 \times 50 = 1.25$ — tra il primo e il secondo valore ordinato. Con così pochi punti, i quantili estremi sono molto instabili.
- Rieseguire il bootstrap darà IC molto diversi tra una corsa e l'altra.

**Formula per la varianza della stima del quantile $q_\tau$:**

$$\text{Var}(\hat q_\tau) \approx \frac{\tau(1-\tau)}{B \cdot f^2(q_\tau)}$$

Per $\tau = 0.025$, $\tau(1-\tau) = 0.025 \times 0.975 \approx 0.024$. Con $B=50$ questo produce alta variabilità. Con $B=1000$: la varianza è 20 volte più piccola.

**Raccomandazione:**
- SE bootstrap: $B \geq 200$
- IC percentile: $B \geq 1000$
- IC $\text{BC}_a$: $B \geq 2000$
- Studi di simulazione o ML: $B$ può essere 500 se computazionalmente costoso

Con $B=50$ si rischia di comunicare un IC fuorviante; meglio attendere qualche secondo di calcolo in più.

</details>

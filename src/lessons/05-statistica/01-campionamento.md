---
id: statistica-01-campionamento
subject: statistica
topic_it: Fondamenti di inferenza
topic_en: Foundations of inference
title_it: Campionamento e statistiche campionarie
title_en: Sampling and sample statistics
level: purple
order: 1
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 1 — Campioni e statistiche"
---

## 1. Intuizione — perché campionare?

Immagina di voler conoscere l'altezza media di tutti i 60 milioni di italiani. Misurare tutti sarebbe impossibile: troppo costoso, troppo lento. Cosa facciamo invece? Prendiamo un **campione** — diciamo 1000 persone scelte in modo casuale — e usiamo le loro altezze per **stimare** la media dell'intera popolazione.

Questo è il cuore dell'inferenza statistica: usare poca informazione (il campione) per dire qualcosa di utile su tanta informazione (la popolazione). È come assaggiare un cucchiaino di minestra per capire se tutta la pentola è salata abbastanza — purché la mescolassimo bene prima.

La parola chiave è **casualità**. Se scelgo solo i miei amici come campione, ottengo un risultato distorto. Se invece ogni italiano ha la stessa probabilità di essere scelto, il campione è rappresentativo e le stime saranno affidabili.

Un terzo aspetto fondamentale: più grande è il campione, più precisa è la stima — ma la precisione cresce lentamente (come $1/\sqrt{n}$, non come $1/n$). Raddoppiare la precisione richiede quadruplicare la dimensione del campione.

Capire come funziona il campionamento è il prerequisito per tutta l'inferenza statistica: stime puntuali, intervalli di confidenza, test di ipotesi. Senza capire la variabilità campionaria, non si capisce nulla di quelle procedure.

## 2. Prerequisiti

- Variabili aleatorie: concetto di distribuzione di probabilità, valore atteso $E[X]$, varianza $\text{Var}(X)$
- Proprietà di $E$ e $\text{Var}$: linearità del valore atteso, varianza di una somma di v.a. indipendenti
- Legge dei grandi numeri (LGN): $\bar{X}_n \xrightarrow{P} \mu$ per $n \to \infty$
- Teorema centrale del limite (TCL): $\sqrt{n}(\bar{X}_n - \mu)/\sigma \xrightarrow{d} \mathcal{N}(0,1)$
- Distribuzioni speciali: normale, chi-quadrato, $t$ di Student (utili per le distribuzioni campionarie esatte)

## 3. Teoria

### Popolazione e campione

La **popolazione** è l'insieme di tutti gli individui o oggetti di interesse. Nella statistica matematica, la popolazione è modellata come una distribuzione di probabilità: diciamo che ogni osservazione è un'estrazione da una distribuzione con densità (o PMF) $f(x; \theta)$, dove $\theta$ è il **parametro** sconosciuto che vogliamo stimare.

Il **campione** è una collezione di $n$ osservazioni: $X_1, X_2, \ldots, X_n$. Il modello standard assume che queste siano **indipendenti e identicamente distribuite** (i.i.d.), cioè:
- Ogni $X_i$ ha la stessa distribuzione $f(x; \theta)$ — "identicamente distribuite"
- La conoscenza di $X_i$ non cambia la distribuzione di $X_j$ per $i \neq j$ — "indipendenti"

Il simbolo i.i.d. si legge "iid" e si scrive $X_1, \ldots, X_n \overset{\text{iid}}{\sim} f(x; \theta)$.

### Statistica campionaria

Una **statistica** è qualsiasi funzione del campione:

$$T = T(X_1, X_2, \ldots, X_n)$$

Una statistica non deve dipendere da parametri ignoti — deve essere calcolabile dai soli dati. Esempi: la media campionaria, il massimo, il minimo, la varianza campionaria. Non-esempi: $(X_1 - \mu)/\sigma$ (dipende da $\mu$ e $\sigma$ ignoti).

### Media campionaria

La **media campionaria** è la statistica più usata:

$$\bar{X}_n = \frac{1}{n} \sum_{i=1}^n X_i$$

Le sue proprietà dipendono dalla distribuzione di ogni $X_i$. Se $E[X_i] = \mu$ e $\text{Var}(X_i) = \sigma^2$, allora per la linearità del valore atteso:

$$E[\bar{X}_n] = \frac{1}{n} \sum_{i=1}^n E[X_i] = \frac{1}{n} \cdot n\mu = \mu$$

Poiché le $X_i$ sono indipendenti, la varianza della somma è la somma delle varianze:

$$\text{Var}(\bar{X}_n) = \frac{1}{n^2} \sum_{i=1}^n \text{Var}(X_i) = \frac{1}{n^2} \cdot n\sigma^2 = \frac{\sigma^2}{n}$$

Risultato fondamentale: la media campionaria **non distorce** ($E[\bar{X}_n] = \mu$) e la sua variabilità **decresce** con $n$. Questo è il motivo per cui raccogliere più dati migliora la stima.

### Varianza campionaria

Perché stimare $\sigma^2$ con $\frac{1}{n}\sum(X_i - \bar{X})^2$ sarebbe sbagliato?

Il problema è che $\bar{X}$ è calcolato dagli stessi dati: tende ad essere più vicino ai dati di quanto lo sarebbe $\mu$, riducendo artificialmente la somma degli scarti quadratici. Formalmente:

$$E\left[\frac{1}{n}\sum_{i=1}^n (X_i - \bar{X})^2\right] = \frac{n-1}{n}\sigma^2 \neq \sigma^2$$

La correzione è dividere per $n-1$ anziché $n$:

$$S^2 = \frac{1}{n-1} \sum_{i=1}^n (X_i - \bar{X})^2$$

Si dimostra che $E[S^2] = \sigma^2$ — la varianza campionaria corretta è **non distorta**. Il fattore $n-1$ si chiama **gradi di libertà**: stimando $\mu$ con $\bar{X}$, "consumiamo" un grado di libertà.

La **deviazione standard campionaria** è $S = \sqrt{S^2}$.

### Standard Error

Lo **standard error** (SE) della media campionaria misura la sua incertezza:

$$\text{SE}(\bar{X}_n) = \frac{\sigma}{\sqrt{n}}$$

Quando $\sigma$ è ignota, si stima con $S$:

$$\widehat{\text{SE}}(\bar{X}_n) = \frac{S}{\sqrt{n}}$$

Il SE dice: se ripetessi l'esperimento molte volte, le medie campionarie varieranno tipicamente di $\pm \text{SE}$ attorno a $\mu$.

### Distribuzione campionaria della media

La **distribuzione campionaria** di una statistica è la sua distribuzione di probabilità quando il campione varia. Per $\bar{X}_n$:

**Caso normale esatto:** se $X_i \sim \mathcal{N}(\mu, \sigma^2)$, allora esattamente:

$$\bar{X}_n \sim \mathcal{N}\!\left(\mu, \frac{\sigma^2}{n}\right)$$

**Caso generale (TCL):** per $n$ grande, qualunque sia la distribuzione di $X_i$ (purché abbia media e varianza finite):

$$\frac{\bar{X}_n - \mu}{\sigma/\sqrt{n}} \xrightarrow{d} \mathcal{N}(0, 1)$$

In pratica, $n \geq 30$ è spesso sufficiente. Per distribuzioni molto asimmetriche o con code pesanti, potrebbe servire $n$ più grande.

### Distribuzioni campionarie nel caso normale

Quando i dati sono normali, si possono ricavare distribuzioni esatte per altre statistiche campionarie.

**Distribuzione chi-quadrato della varianza campionaria:** se $X_i \sim \mathcal{N}(\mu, \sigma^2)$:

$$\frac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)$$

dove $\chi^2(k)$ — chi-quadrato con $k$ gradi di libertà — è la distribuzione della somma di $k$ normali standard al quadrato. La sua media è $k$ e la varianza è $2k$.

**Teorema di Fisher (indipendenza):** $\bar{X}_n$ e $S^2$ sono **indipendenti** quando i dati sono normali. Questo risultato, non ovvio, è fondamentale per costruire il test $t$ e gli intervalli di confidenza con $\sigma$ ignota.

## 4. Derivazioni

### Perché $E[S^2] = \sigma^2$

Partiamo dall'identità:

$$\sum_{i=1}^n (X_i - \bar{X})^2 = \sum_{i=1}^n X_i^2 - n\bar{X}^2$$

Prendiamo il valore atteso:

$$E\left[\sum_{i=1}^n (X_i - \bar{X})^2\right] = \sum_{i=1}^n E[X_i^2] - n\,E[\bar{X}^2]$$

Usiamo $E[X_i^2] = \text{Var}(X_i) + (E[X_i])^2 = \sigma^2 + \mu^2$ e $E[\bar{X}^2] = \text{Var}(\bar{X}) + (E[\bar{X}])^2 = \sigma^2/n + \mu^2$:

$$= n(\sigma^2 + \mu^2) - n\!\left(\frac{\sigma^2}{n} + \mu^2\right) = n\sigma^2 + n\mu^2 - \sigma^2 - n\mu^2 = (n-1)\sigma^2$$

Quindi $E[S^2] = E\!\left[\dfrac{1}{n-1}\sum(X_i-\bar{X})^2\right] = \dfrac{(n-1)\sigma^2}{n-1} = \sigma^2$. $\square$

### Derivazione della varianza di $\bar{X}_n$

$$\text{Var}(\bar{X}_n) = \text{Var}\!\left(\frac{X_1 + \cdots + X_n}{n}\right) = \frac{1}{n^2}\text{Var}(X_1 + \cdots + X_n)$$

Per indipendenza, $\text{Var}(X_1 + \cdots + X_n) = \sum_{i=1}^n \text{Var}(X_i) = n\sigma^2$, quindi:

$$\text{Var}(\bar{X}_n) = \frac{n\sigma^2}{n^2} = \frac{\sigma^2}{n}$$

## 5. Esempi

**Esempio 1 — Media e varianza campionaria (base)**

Campione: $2, 4, 4, 4, 5, 5, 7, 9$, $n = 8$.

$\bar{x} = (2+4+4+4+5+5+7+9)/8 = 40/8 = 5$

$\sum(x_i - \bar{x})^2 = (2-5)^2+(4-5)^2+(4-5)^2+(4-5)^2+(5-5)^2+(5-5)^2+(7-5)^2+(9-5)^2$
$= 9+1+1+1+0+0+4+16 = 32$

$s^2 = 32/(8-1) = 32/7 \approx 4.57$, $s \approx 2.14$

**Esempio 2 — Standard error e interpretazione**

Un campione di $n = 25$ studenti dà $\bar{x} = 170$ cm, $s = 8$ cm.

$\widehat{\text{SE}} = s/\sqrt{n} = 8/\sqrt{25} = 8/5 = 1.6$ cm

Interpretazione: la stima della media della popolazione è $170$ cm con un'incertezza tipica di $\pm 1.6$ cm.

**Esempio 3 — Effetto della dimensione campionaria**

Con $\sigma = 10$ e campioni di $n = 25, 100, 400, 1600$:

$\text{SE} = 10/\sqrt{n}$: SE = 2, 1, 0.5, 0.25

Quadruplicare $n$ dimezza l'incertezza.

**Esempio 4 — Distribuzione campionaria con TCL**

Dadi a 6 facce: $\mu = 3.5$, $\sigma^2 = 35/12 \approx 2.917$. Per $n = 36$ lanci, la media campionaria ha:

$E[\bar{X}_{36}] = 3.5$, $\text{Var}(\bar{X}_{36}) = 2.917/36 \approx 0.081$, $\text{SE} \approx 0.285$

Per il TCL, $\bar{X}_{36} \approx \mathcal{N}(3.5, 0.285^2)$.

$P(\bar{X}_{36} > 4) \approx P\!\left(Z > \dfrac{4-3.5}{0.285}\right) = P(Z > 1.754) \approx 0.040$

**Esempio 5 — Calcolo di $S^2$ con formula alternativa**

Campione: $3, 7, 7, 19$, $n = 4$.

Metodo alternativo: $\sum x_i^2 = 9 + 49 + 49 + 361 = 468$, $n\bar{x}^2 = 4 \cdot 9^2 = 324$.

$\sum(x_i - \bar{x})^2 = 468 - 324 = 144$

$s^2 = 144/3 = 48$, $s \approx 6.93$

**Esempio 6 — Probabilità sulla media campionaria**

Altezze $\sim \mathcal{N}(175, 100)$ (media 175 cm, $\sigma = 10$ cm). Per $n = 16$:

$\bar{X}_{16} \sim \mathcal{N}(175, 100/16) = \mathcal{N}(175, 6.25)$, $\text{SE} = 2.5$ cm

$P(\bar{X}_{16} > 178) = P\!\left(Z > \dfrac{178-175}{2.5}\right) = P(Z > 1.2) = 1 - \Phi(1.2) \approx 0.115$

**Esempio 7 — Distribuzione di $(n-1)S^2/\sigma^2$**

Dati normali con $n = 21$, $\sigma^2 = 4$. Allora $(20 S^2)/4 = 5S^2 \sim \chi^2(20)$.

$P(S^2 > 6) = P(5S^2 > 30) = P(\chi^2_{20} > 30) \approx 0.070$

(dalla tavola chi-quadrato con 20 g.d.l., il quantile 0.95 è 31.41, quindi $P > 30 \approx 0.07$).

## 6. Grafico

```plot
{"fn":"Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)","domain":[-4,4],"yDomain":[0,0.5],"title":"Distribuzione campionaria della media (TCL: n grande)","label1":"φ(z) = densità N(0,1)"}
```

## 7. Interattivo

```slider
{"fn":"Math.exp(-x*x*n/2)*Math.sqrt(n)/Math.sqrt(2*Math.PI)","domain":[-4,4],"yDomain":[0,3],"params":[{"name":"n","min":1,"max":100,"step":1,"default":1}],"title":"Distribuzione di √n·(X̄-μ)/σ al crescere di n — converge a N(0,1)"}
```

## 8. Errori comuni

**Errore 1 — Confondere popolazione e campione.** La media $\mu$ è un parametro fisso della popolazione; la media campionaria $\bar{X}$ è una variabile aleatoria che cambia ad ogni campionamento. Scrivere $\bar{X} = \mu$ è sbagliato; si scrive $E[\bar{X}] = \mu$.

**Errore 2 — Dividere per $n$ invece di $n-1$ nella varianza campionaria.** $\hat{\sigma}^2 = \frac{1}{n}\sum(X_i-\bar{X})^2$ è distorto: $E[\hat{\sigma}^2] = \frac{n-1}{n}\sigma^2$. La varianza corretta usa $n-1$ al denominatore.

**Errore 3 — Confondere SE e deviazione standard.** La deviazione standard $s$ misura la variabilità dei dati individuali. Lo standard error $s/\sqrt{n}$ misura l'incertezza sulla stima della media. Sono due cose diverse: $s$ non diminuisce all'aumentare di $n$, mentre SE sì.

**Errore 4 — Assumere normalità senza giustificazione.** Il TCL garantisce normalità asintotica di $\bar{X}$ per $n$ grande, non dei dati $X_i$. Applicare formule basate sulla normale a campioni piccoli con distribuzioni asimmetriche può dare risultati fuorvianti.

**Errore 5 — Interpretare SE come errore massimo.** SE è un'incertezza tipica (una deviazione standard), non un limite superiore. L'errore effettivo può essere più grande con probabilità non trascurabile. Per un errore massimo con confidenza prefissata, serve un intervallo di confidenza.

**Errore 6 — Credere che campioni più grandi correggano il bias di selezione.** Se il campionamento non è casuale (es. sondaggio online auto-selezionato), aumentare $n$ non riduce la distorsione sistematica. La casualità del campionamento è più importante della sua dimensione.

**Errore 7 — Dimenticare che $\bar{X}$ e $S^2$ sono indipendenti solo nel caso normale.** Questo risultato di Fisher è specifico per la distribuzione normale. Per altre distribuzioni, $\bar{X}$ e $S^2$ possono essere correlati.

## 9. Applicazioni reali

**Sondaggi di opinione.** I sondaggi politici stimano la proporzione di voto con campioni di 1000-2000 persone. Il SE della stima è $\sqrt{p(1-p)/n} \approx \sqrt{0.25/1000} \approx 1.6\%$. Il margine di errore tipico "±3%" è circa $2\,\text{SE}$.

**Controllo qualità industriale.** In una catena di produzione, si campionano $n = 50$ pezzi per ora e si misura la loro dimensione. La media campionaria e lo SE monitorano se il processo è fuori controllo (carte di controllo Shewhart).

**Sperimentazione clinica.** Per stimare l'efficacia di un farmaco, si misura la riduzione media della pressione su un campione di pazienti. Il SE determina la precisione della stima e la dimensione del campione necessaria per uno studio significativo.

**Fisica sperimentale.** Misurare la costante di Planck richiede molte misurazioni ripetute. La media campionaria stima il valore vero, lo SE quantifica l'incertezza sperimentale riportata come $h = (6.626 \pm 0.002) \times 10^{-34}$ J·s.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Media campionaria | $\bar{X}_n = \frac{1}{n}\sum_{i=1}^n X_i$ | Non distorta: $E[\bar{X}]=\mu$ |
| Varianza di $\bar{X}$ | $\text{Var}(\bar{X}_n)=\sigma^2/n$ | Decresce con $n$ |
| Standard error | $\text{SE}=\sigma/\sqrt{n} \approx S/\sqrt{n}$ | Incertezza sulla media |
| Varianza campionaria corretta | $S^2=\frac{1}{n-1}\sum(X_i-\bar{X})^2$ | Non distorta: $E[S^2]=\sigma^2$ |
| Distribuzione di $\bar{X}$ (normale) | $\bar{X}\sim\mathcal{N}(\mu,\sigma^2/n)$ | Esatta se $X_i$ normali |
| TCL | $(\bar{X}-\mu)/(\sigma/\sqrt{n})\xrightarrow{d}\mathcal{N}(0,1)$ | Approssimato, $n$ grande |
| Distribuzione di $S^2$ (normale) | $(n-1)S^2/\sigma^2\sim\chi^2(n-1)$ | Esatta se $X_i$ normali |
| Indipendenza (Fisher) | $\bar{X}\perp S^2$ nel caso normale | Solo per distribuzione normale |

## 11. Esercizi

<details>
<summary>Esercizio 1: Media e varianza campionaria di un piccolo dataset</summary>

Campione: $1, 3, 5, 7, 9$. Calcolare $\bar{x}$, $s^2$ e $s$.

**Soluzione.**

$n = 5$. $\bar{x} = (1+3+5+7+9)/5 = 25/5 = 5$.

$\sum(x_i - 5)^2 = 16 + 4 + 0 + 4 + 16 = 40$.

$s^2 = 40/(5-1) = 10$. $s = \sqrt{10} \approx 3.162$.

</details>

<details>
<summary>Esercizio 2: Standard error e confronto tra campioni</summary>

Due laboratori stimano la stessa quantità: Lab A usa $n_A = 16$ misurazioni con $s_A = 4$; Lab B usa $n_B = 64$ misurazioni con $s_B = 4$. Confrontare i loro SE.

**Soluzione.**

$\text{SE}_A = 4/\sqrt{16} = 4/4 = 1.0$

$\text{SE}_B = 4/\sqrt{64} = 4/8 = 0.5$

Lab B ha SE dimezzato perché usa 4 volte più dati. Quadruplicare $n$ dimezza l'incertezza.

</details>

<details>
<summary>Esercizio 3: Distorsione della varianza con divisore n</summary>

Dimostrare che $\hat{\sigma}^2 = \frac{1}{n}\sum(X_i - \bar{X})^2$ è distorto con bias $= -\sigma^2/n$.

**Soluzione.**

Dalla derivazione nella sezione 4: $E\!\left[\sum(X_i-\bar{X})^2\right] = (n-1)\sigma^2$.

Quindi $E[\hat{\sigma}^2] = \frac{(n-1)\sigma^2}{n} = \sigma^2 - \frac{\sigma^2}{n}$.

Il bias è $E[\hat{\sigma}^2] - \sigma^2 = -\sigma^2/n$. Per $n$ grande il bias è piccolo, ma per $n$ piccolo (es. $n=4$: bias $= -\sigma^2/4$) è rilevante.

</details>

<details>
<summary>Esercizio 4: Applicazione del TCL ai dadi</summary>

Si lanciano $n = 100$ dadi a 6 facce. La somma $S_{100}$ è approssimativamente normale. Calcolare $P(S_{100} > 370)$.

**Soluzione.**

Per un dado: $\mu = 3.5$, $\sigma^2 = 35/12$. Per la somma di 100 dadi: $E[S_{100}] = 350$, $\text{Var}(S_{100}) = 100 \cdot 35/12 \approx 291.67$, $\text{SD}(S_{100}) \approx 17.08$.

$P(S_{100} > 370) = P\!\left(Z > \frac{370 - 350}{17.08}\right) = P(Z > 1.171) \approx 1 - 0.879 = 0.121$

</details>

<details>
<summary>Esercizio 5: Distribuzione di $(n-1)S^2/\sigma^2$</summary>

$X_1, \ldots, X_{10} \overset{\text{iid}}{\sim} \mathcal{N}(0, 9)$. Trovare $P(S^2 > 14)$.

**Soluzione.**

$\sigma^2 = 9$, $n = 10$. Quindi $(10-1)S^2/9 = S^2 \sim \chi^2(9)$.

$P(S^2 > 14) = P(9S^2/9 > 9\cdot14/9) = P(\chi^2_9 > 14) \approx 0.121$

(dalla tavola $\chi^2$: il quantile 0.90 con 9 g.d.l. è 14.68, quindi $P > 14 \approx 0.12$).

</details>

<details>
<summary>Esercizio 6: Dimensione campionaria per target di SE</summary>

Si vuole stimare il reddito medio con $\text{SE} \leq 100$ euro. Assumendo $\sigma = 1500$ euro, quante osservazioni servono?

**Soluzione.**

$\text{SE} = \sigma/\sqrt{n} \leq 100 \Rightarrow \sqrt{n} \geq 1500/100 = 15 \Rightarrow n \geq 225$.

Servono almeno 225 osservazioni.

</details>

<details>
<summary>Esercizio 7: Indipendenza tra media e varianza campionaria</summary>

$X_1, \ldots, X_n \overset{\text{iid}}{\sim} \mathcal{N}(\mu, \sigma^2)$. Perché $\bar{X}$ e $S^2$ sono indipendenti? Cosa implica questo per la statistica $t$?

**Soluzione.**

Il teorema di Fisher afferma che se i dati sono normali, $\bar{X}$ e $S^2$ sono indipendenti. Intuitivamente: $\bar{X}$ cattura la "posizione" del campione, $S^2$ la sua "dispersione" — per la normale simmetrica, queste due informazioni sono ortogonali.

Questo è cruciale per la statistica $t$: $T = (\bar{X} - \mu)/(S/\sqrt{n})$ è un rapporto dove numeratore ($\bar{X}-\mu$, normale) e denominatore ($S/\sqrt{n}$, radice di chi-quadrato) sono indipendenti. Questo garantisce che $T \sim t_{n-1}$, la distribuzione $t$ di Student.

</details>

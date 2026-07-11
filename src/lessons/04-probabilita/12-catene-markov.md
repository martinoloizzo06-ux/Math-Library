---
id: probabilita-12-markov
subject: probabilita
topic_it: Processi stocastici
topic_en: Stochastic processes
title_it: Catene di Markov
title_en: Markov chains
level: blue
order: 12
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 11 — Catene di Markov"
stato: da-rielaborare
---

## 1. Intuizione

Immagina di camminare in una città seguendo queste regole: ogni minuto ti sposti in un bar vicino con una certa probabilità, o rimani dove sei. La tua prossima posizione dipende **solo da dove sei adesso**, non da dove eri un'ora fa o dal percorso che hai fatto. Questa è l'essenza di una catena di Markov: la **proprietà di Markov**, o "mancanza di memoria".

Le catene di Markov sono uno dei modelli matematici più potenti e versatili nella probabilità applicata. Con un solo concetto — la matrice di transizione — si possono modellare: la navigazione sul web (algoritmo PageRank di Google), i modelli linguistici (predecessori di ChatGPT), la genomica (evoluzione del DNA), la fisica statistica (simulazioni Monte Carlo), e molto altro.

Il risultato più sorprendente è il **teorema ergodico**: per catene "ben comportate" (irriducibili e aperiodiche), dopo molti passi il sistema dimentica completamente il suo stato iniziale e converge a una **distribuzione stazionaria** unica. Questa distribuzione descrive la frequenza con cui il processo visita ciascun stato nel lungo periodo.

Pensaci come al rimescolare le carte: dopo abbastanza mescolate, il mazzo è "casuale" indipendentemente da come era ordinato all'inizio. Il numero di mescolate necessarie (il "mixing time") è un'area di ricerca attiva con implicazioni concrete per la crittografia e gli algoritmi.

## 2. Prerequisiti

- Probabilità condizionata e indipendenza
- Algebra lineare: matrici, moltiplicazione di matrici, autovettori e autovalori
- Catene di probabilità: variabili aleatorie e distribuzioni discrete
- Concetto di distribuzione di probabilità su uno spazio discreto

## 3. Teoria

### Definizione formale

Una **catena di Markov** a tempo discreto è una successione di variabili aleatorie $X_0, X_1, X_2, \ldots$ a valori in uno spazio di stati discreto $S$ (finito o numerabile) tale che per ogni $n \geq 0$ e ogni $i_0, i_1, \ldots, i_n, j \in S$:

$$P(X_{n+1} = j \mid X_n = i, X_{n-1} = i_{n-1}, \ldots, X_0 = i_0) = P(X_{n+1} = j \mid X_n = i)$$

Questa è la **proprietà di Markov** (o condizione di Markov): il futuro dipende dal presente, non dalla storia.

Se le probabilità di transizione non dipendono dal tempo $n$, la catena è **omogenea nel tempo**: $P(X_{n+1}=j \mid X_n=i) = p_{ij}$ per ogni $n$.

### Matrice di transizione

I numeri $p_{ij} = P(X_{n+1}=j \mid X_n=i)$ formano la **matrice di transizione** $P = (p_{ij})_{i,j \in S}$.

**Proprietà fondamentali:**
- $p_{ij} \geq 0$ per ogni $i, j$
- $\sum_{j \in S} p_{ij} = 1$ per ogni $i$ (ogni riga somma a 1)

Una matrice con queste proprietà si chiama **matrice stocastica** (o matrice di transizione).

**Probabilità a $n$ passi.** La probabilità di passare dallo stato $i$ allo stato $j$ in esattamente $n$ passi è l'elemento $(i,j)$ della matrice $P^n$:

$$P(X_n = j \mid X_0 = i) = (P^n)_{ij}$$

**Equazione di Chapman-Kolmogorov:**
$$(P^{m+n})_{ij} = \sum_{k \in S} (P^m)_{ik} \cdot (P^n)_{kj}$$

### Distribuzione stazionaria

Un vettore riga di probabilità $\boldsymbol{\pi} = (\pi_j)_{j \in S}$ (con $\pi_j \geq 0$ e $\sum_j \pi_j = 1$) è **stazionario** per $P$ se:

$$\boldsymbol{\pi} P = \boldsymbol{\pi}$$

Cioè: $\sum_{i} \pi_i p_{ij} = \pi_j$ per ogni $j$.

**Interpretazione:** se il sistema parte distribuito secondo $\boldsymbol{\pi}$, dopo un passo è ancora distribuito secondo $\boldsymbol{\pi}$. La distribuzione non cambia nel tempo.

**Equazione di bilancio dettagliato (reversibilità):** Se $\pi_i p_{ij} = \pi_j p_{ji}$ per ogni $i,j$, la distribuzione $\boldsymbol{\pi}$ è stazionaria. Questa condizione più forte è detta **bilancio dettagliato** e implica che la catena è reversibile.

### Classificazione degli stati

**Stato ricorrente.** Lo stato $i$ è ricorrente se, partendo da $i$, il processo ritorna a $i$ con probabilità 1:
$$P(X_n = i \text{ per qualche } n \geq 1 \mid X_0 = i) = 1$$

**Stato transiente.** Lo stato $i$ è transiente se la probabilità di non tornare è positiva. In questo caso il processo visita $i$ solo un numero finito di volte.

**Periodo di uno stato.** Il periodo di $i$ è $d(i) = \gcd\{n \geq 1 : P(X_n = i \mid X_0 = i) > 0\}$. Lo stato è **aperiodico** se $d(i) = 1$.

**Catena irriducibile.** La catena è irriducibile se da ogni stato si può raggiungere ogni altro stato (in un numero finito di passi, con probabilità positiva). In una catena irriducibile, tutti gli stati hanno lo stesso periodo.

### Teorema ergodico (convergenza)

**Teorema.** Per una catena di Markov **irriducibile** e **aperiodica** su uno spazio di stati finito:

1. Esiste un'unica distribuzione stazionaria $\boldsymbol{\pi}$.
2. Per ogni stato iniziale $i$ e ogni stato $j$:
$$\lim_{n \to \infty} (P^n)_{ij} = \pi_j$$
3. $\pi_j = 1/m_j$ dove $m_j = E[\text{tempo di ritorno a } j \mid X_0 = j]$ è il **tempo medio di ritorno**.

**Interpretazione:** indipendentemente dallo stato iniziale, dopo molti passi la distribuzione converge alla stazionaria. Le frequenze empiriche di visita agli stati convergono a $\boldsymbol{\pi}$.

## 4. Derivazioni

### Calcolo della distribuzione stazionaria

Per trovare $\boldsymbol{\pi}$ risolviamo il sistema:
$$\begin{cases} \boldsymbol{\pi} P = \boldsymbol{\pi} \\ \sum_j \pi_j = 1 \end{cases}$$

La condizione $\boldsymbol{\pi} P = \boldsymbol{\pi}$ equivale a $\boldsymbol{\pi}(P - I) = \mathbf{0}$: $\boldsymbol{\pi}$ è un autovettore sinistro di $P$ con autovalore 1. Il sistema $\boldsymbol{\pi}(P-I)=\mathbf{0}$ ha sempre rango $|S|-1$ per catene irriducibili, quindi con il vincolo $\sum \pi_j = 1$ la soluzione è unica.

**Procedimento per 2 stati** ($S = \{1, 2\}$, $P = \begin{pmatrix} 1-a & a \\ b & 1-b \end{pmatrix}$):

$\pi_1(1-a) + \pi_2 b = \pi_1 \Rightarrow \pi_2 b = \pi_1 a \Rightarrow \pi_1/\pi_2 = b/a$.

Con $\pi_1 + \pi_2 = 1$: $\pi_1 = b/(a+b)$, $\pi_2 = a/(a+b)$.

### Perché $P^n$ converge

Ogni autovalore di $P$ (matrice stocastica irriducibile aperiodica) ha modulo $\leq 1$, con 1 come unico autovalore di modulo 1 (teorema di Perron-Frobenius). Gli altri autovalori $\lambda_2, \ldots$ soddisfano $\lvert \lambda_k \rvert < 1$. Quindi $\lambda_k^n \to 0$ e i termini corrispondenti in $P^n$ si annullano, lasciando solo la componente stazionaria.

## 5. Esempi

**Esempio 1 (Base) — Catena a due stati.**
Meteo: piove (P) o è sereno (S). $p_{PS} = 0.3$ (se piove oggi, domani sereno con prob. 0.3), $p_{SP} = 0.2$.

$$\text{Matrice: } P = \begin{pmatrix} 0.7 & 0.3 \\ 0.2 & 0.8 \end{pmatrix}$$

Distribuzione stazionaria: $\pi_P = 0.2/(0.3+0.2) = 0.4$, $\pi_S = 0.3/0.5 = 0.6$.

Nel lungo periodo: 40% giorni di pioggia, 60% sereni.

---

**Esempio 2 (Base) — Catena a tre stati.**
Sistema con stati $\{1,2,3\}$ e matrice:
$$P = \begin{pmatrix} 0.5 & 0.4 & 0.1 \\ 0.2 & 0.6 & 0.2 \\ 0.1 & 0.3 & 0.6 \end{pmatrix}$$

Sistema $\boldsymbol{\pi}P = \boldsymbol{\pi}$, $\sum \pi_i = 1$. Soluzione (approssimata): $\boldsymbol{\pi} \approx (0.24, 0.47, 0.29)$.

---

**Esempio 3 (Medio) — Probabilità a due passi.**
Con $P = \begin{pmatrix} 0.7 & 0.3 \\ 0.4 & 0.6 \end{pmatrix}$, calcola $P(X_2=1 \mid X_0=1)$.

$(P^2)_{11} = 0.7 \times 0.7 + 0.3 \times 0.4 = 0.49 + 0.12 = \mathbf{0.61}$.

---

**Esempio 4 (Medio) — Tempo di ritorno medio.**
Dalla stazionaria $\boldsymbol{\pi} = (4/7, 3/7)$:

- Stato 1: $m_1 = 1/\pi_1 = 7/4 = 1.75$ passi in media prima di tornare a 1.
- Stato 2: $m_2 = 1/\pi_2 = 7/3 \approx 2.33$ passi.

---

**Esempio 5 (Medio-Alto) — Passeggiate aleatorie.**
Cammino sull'insieme $\{0, 1, 2, \ldots, N\}$: da $i$ vado a $i+1$ con prob. $p$ e a $i-1$ con prob. $1-p$, con 0 e $N$ stati assorbenti.

Questa è una catena di Markov con stati assorbenti (0 e $N$ transenti se $0 < p < 1$). La "probabilità di rovina" — probabilità di raggiungere 0 partendo da $i$ — si calcola risolvendo un'equazione alle differenze.

---

**Esempio 6 (Alto) — PageRank.**
Google modella il web come una catena di Markov: le pagine sono gli stati, i link sono le transizioni. Il "surfista casuale" clicca un link con probabilità $0.85$ o va a una pagina a caso con probabilità $0.15$ (per garantire irriducibilità).

La distribuzione stazionaria di questa catena è il **PageRank**: più alto $\pi_i$, più importante è la pagina $i$. La convergenza del PageRank è garantita dal teorema ergodico.

---

**Esempio 7 (Alto) — Catena di nascita e morte.**
Stati $S = \{0, 1, 2, \ldots\}$. Da $i>0$: passa a $i+1$ con prob. $\lambda/(\lambda+\mu)$ e a $i-1$ con prob. $\mu/(\lambda+\mu)$. Condizione per esistenza della stazionaria: $\lambda < \mu$ (tasso di nascita $<$ tasso di morte).

Stazionaria: $\pi_i = (1 - \rho)\rho^i$ dove $\rho = \lambda/\mu$ — distribuzione geometrica. Questo modella le code (modello M/M/1).

## 6. Grafico

```plot
{"fn":"Math.pow(0.6, x)","fn2":"1 - Math.pow(0.6, x)","domain":[0,20],"yDomain":[0,1],"title":"Convergenza alla distribuzione stazionaria: P(X_n=1|X_0=1) e P(X_n=1|X_0=2)","label1":"Da stato 1","label2":"Da stato 2"}
```

## 7. Interattivo

```slider
{"fn":"0.4 + 0.6 * Math.pow(1 - a - b, x)","domain":[0,30],"yDomain":[0,1],"params":[{"name":"a","min":0.05,"max":0.95,"step":0.05,"default":0.3},{"name":"b","min":0.05,"max":0.95,"step":0.05,"default":0.2}],"title":"Convergenza P(X_n=pioggia): tasso uscita pioggia=a, tasso uscita sereno=b"}
```

## 8. Errori comuni

**Errore 1 — Dimenticare la normalizzazione delle righe.**
In una matrice di transizione, **ogni riga** deve sommare a 1 (non le colonne). Le colonne sommano a 1 solo per matrici doppistochastiche. Verificare sempre $\sum_j p_{ij} = 1$ per ogni $i$.

**Errore 2 — Confondere $P(X_{n+1}=j \mid X_n=i)$ con $(P^n)_{ij}$.**
$p_{ij}$ è la probabilità di transizione in **un passo**. La probabilità di passare da $i$ a $j$ in $n$ passi è $(P^n)_{ij}$, non $p_{ij}^n$. Quest'ultima espressione non ha senso in generale.

**Errore 3 — Credere che ogni catena converga a una stazionaria.**
Per convergere serve che la catena sia **irriducibile** (raggiungibilità) e **aperiodica**. Una catena periodica oscilla senza convergere. Esempio: $P = \begin{pmatrix}0&1\\1&0\end{pmatrix}$ è irriducibile ma periodica (periodo 2) — non converge.

**Errore 4 — Ignorare la differenza tra stati ricorrenti e transienti.**
In spazi infiniti, può esistere una distribuzione stazionaria solo se tutti gli stati sono ricorrenti positivi. Catene con stati transienti non hanno distribuzione stazionaria propria.

**Errore 5 — Applicare la proprietà di Markov sbagliata.**
$P(X_{n+1}=j \mid X_n=i, X_{n-1}=k) = P(X_{n+1}=j \mid X_n=i)$. La condizione aggiuntiva $X_{n-1}=k$ non cambia nulla. Ma $P(X_{n+2}=j \mid X_n=i)$ **non** è $p_{ij}$: è $(P^2)_{ij}$.

**Errore 6 — Confondere distribuzione iniziale e stazionaria.**
La distribuzione stazionaria è la distribuzione limite a cui converge il processo. Non è la distribuzione iniziale $X_0$, che può essere qualsiasi cosa. La stazionaria dipende dalla matrice $P$, non dallo stato di partenza.

**Errore 7 — Credere che l'irriducibilità basti per l'unicità della stazionaria.**
Per spazi di stati infiniti, una catena irriducibile potrebbe essere ricorrente nulla (nessuna distribuzione stazionaria) o ricorrente positiva (distribuzione stazionaria unica). Per spazi finiti, l'irriducibilità garantisce l'unicità.

## 9. Applicazioni reali

**PageRank (Google).** Il motore di ricerca di Google classifica le pagine web calcolando la distribuzione stazionaria di una catena di Markov definita sui link tra pagine. Più è alta $\pi_i$, più la pagina $i$ è "importante". Il sistema scala a miliardi di pagine usando iterazione di potenza.

**Modelli linguistici (NLP).** I primi modelli di linguaggio erano catene di Markov su parole: la probabilità della parola successiva dipende solo dalla parola attuale (o dalle ultime $k$ parole — catena di ordine $k$). I moderni LLM sono generalizzazioni profonde di questa idea.

**Bioinformatica.** L'evoluzione delle sequenze di DNA è modellata con catene di Markov su $\{A, C, G, T\}$. La distribuzione stazionaria predice la composizione nucleotidica attesa, e la velocità di convergenza misura il tasso evolutivo.

**Code e simulazione (MCMC).** Il metodo Monte Carlo con catene di Markov (MCMC) — usato in statistica bayesiana, fisica, ottimizzazione — costruisce catene di Markov con distribuzione stazionaria uguale alla distribuzione target. Campionando dalla catena, si ottengono campioni approssimati dalla distribuzione desiderata.

## 10. Riepilogo

| Concetto | Formula/Definizione | Note |
| --- | --- | --- |
| Proprietà di Markov | $P(X_{n+1}=j\mid X_n, X_{n-1},\ldots) = P(X_{n+1}=j\mid X_n)$ | Solo il presente conta |
| Matrice di transizione | $p_{ij} = P(X_{n+1}=j\mid X_n=i)$ | Righe sommano a 1 |
| Prob. a $n$ passi | $(P^n)_{ij}$ | Moltiplicazione matriciale |
| Distribuzione stazionaria | $\boldsymbol{\pi}P = \boldsymbol{\pi}$, $\sum\pi_j=1$ | Autovettore sinistro con autovalore 1 |
| Irriducibilità | Ogni stato raggiungibile da ogni altro | Condizione per unicità di $\boldsymbol{\pi}$ |
| Aperiodicità | $\gcd\{n: p_{ii}^{(n)}>0\}=1$ | Condizione per convergenza |
| Tempo di ritorno medio | $m_i = 1/\pi_i$ | Per catene irriducibili |
| Teorema ergodico | $P^n \to \mathbf{1}\boldsymbol{\pi}^T$ | Per catene irriducibili e aperiodiche |

## 11. Esercizi

<details>
<summary>Esercizio 1: Distribuzione stazionaria (2 stati)</summary>

Trova la distribuzione stazionaria per $P = \begin{pmatrix} 0.7 & 0.3 \\ 0.4 & 0.6 \end{pmatrix}$.

**Soluzione.**

$\boldsymbol{\pi}P = \boldsymbol{\pi}$: $\pi_1 \cdot 0.7 + \pi_2 \cdot 0.4 = \pi_1 \Rightarrow 0.4\pi_2 = 0.3\pi_1 \Rightarrow \pi_1 = \frac{4}{3}\pi_2$.

Con $\pi_1 + \pi_2 = 1$: $\frac{4}{3}\pi_2 + \pi_2 = 1 \Rightarrow \pi_2 = \frac{3}{7}$, $\pi_1 = \frac{4}{7}$.

$\boldsymbol{\pi} = (4/7, 3/7) \approx (0.571, 0.429)$.

</details>

<details>
<summary>Esercizio 2: Probabilità a due passi</summary>

Con la matrice dell'esercizio 1, calcola la probabilità di essere nello stato 2 dopo 2 passi, partendo dallo stato 1.

**Soluzione.**

$(P^2)_{12} = p_{11}p_{12} + p_{12}p_{22} = 0.7 \times 0.3 + 0.3 \times 0.6 = 0.21 + 0.18 = \mathbf{0.39}$.

</details>

<details>
<summary>Esercizio 3: Verifica della stazionarietà</summary>

Verifica che $\boldsymbol{\pi} = (1/3, 1/3, 1/3)$ è stazionaria per la matrice $P = \begin{pmatrix} 0 & 1/2 & 1/2 \\ 1/2 & 0 & 1/2 \\ 1/2 & 1/2 & 0 \end{pmatrix}$.

**Soluzione.**

$(\boldsymbol{\pi}P)_1 = \frac{1}{3}\cdot 0 + \frac{1}{3}\cdot\frac{1}{2} + \frac{1}{3}\cdot\frac{1}{2} = 0 + \frac{1}{6} + \frac{1}{6} = \frac{1}{3} = \pi_1$. ✓

Per simmetria, le altre componenti sono uguali. $\boldsymbol{\pi} = (1/3,1/3,1/3)$ è stazionaria.

</details>

<details>
<summary>Esercizio 4: Classificazione degli stati</summary>

La catena ha spazio $\{1,2,3,4\}$ con $p_{12}=1$, $p_{21}=0.5$, $p_{23}=0.5$, $p_{33}=1$, $p_{44}=1$. Classifica ogni stato come ricorrente o transiente.

**Soluzione.**

- Stato 3: $p_{33}=1$ (stato assorbente) — ricorrente.
- Stato 4: $p_{44}=1$ (stato assorbente) — ricorrente.
- Stato 1: va in 2, poi può andare in 3 e non tornare mai — transiente.
- Stato 2: può andare in 3 e non tornare mai — transiente.

</details>

<details>
<summary>Esercizio 5: Tempo medio di ritorno</summary>

Una catena con 3 stati ha distribuzione stazionaria $\boldsymbol{\pi} = (0.5, 0.3, 0.2)$. Quanto tempo impiega in media il processo a tornare allo stato 2?

**Soluzione.**

$m_2 = 1/\pi_2 = 1/0.3 = \mathbf{10/3 \approx 3.33}$ passi in media.

</details>

<details>
<summary>Esercizio 6: Catena periodica</summary>

Mostra che la catena con $P = \begin{pmatrix}0 & 1 \\ 1 & 0\end{pmatrix}$ non converge a una distribuzione stazionaria, pur avendo una stazionaria.

**Soluzione.**

La stazionaria: $\pi_1 = \pi_2 = 1/2$. Ma $P^n = \begin{pmatrix}1&0\\0&1\end{pmatrix}$ per $n$ pari e $P^n = \begin{pmatrix}0&1\\1&0\end{pmatrix}$ per $n$ dispari.

$(P^n)_{11}$ oscilla tra 1 e 0, non converge a $\pi_1 = 1/2$. La catena è periodica (periodo 2), quindi il teorema di convergenza **non si applica**.

</details>

<details>
<summary>Esercizio 7: Applicazione alla bioinformatica</summary>

Il DNA evolve secondo una catena di Markov su $\{A, C, G, T\}$ con matrice di sostituzione uniforme: $p_{ij} = \mu/3$ per $i \neq j$ e $p_{ii} = 1-\mu$. Qual è la distribuzione stazionaria?

**Soluzione.**

Per simmetria, $\boldsymbol{\pi} = (1/4, 1/4, 1/4, 1/4)$. Verifica: $(\boldsymbol{\pi}P)_i = \frac{1}{4}(1-\mu) + \frac{3}{4}\cdot\frac{\mu}{3} = \frac{1-\mu}{4} + \frac{\mu}{4} = \frac{1}{4} = \pi_i$. ✓

Nel lungo periodo, ogni base azotata compare con frequenza 1/4, indipendentemente dalla composizione iniziale.

</details>

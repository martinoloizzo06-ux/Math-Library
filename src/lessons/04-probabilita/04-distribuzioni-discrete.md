---
id: probabilita-04-distribuzioni-discrete
subject: probabilita
topic_it: Variabili aleatorie
topic_en: Random variables
title_it: Distribuzioni discrete notevoli
title_en: Common discrete distributions
level: blue
order: 4
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 3–4 — Distribuzioni discrete"
stato: da-rielaborare
---

## 1. Intuizione — analogia concreta + perché si studia

Le distribuzioni discrete notevoli sono i "mattoni" della probabilità applicata: pochi modelli parametrici che ricorrono in migliaia di situazioni reali. Invece di costruire una PMF da zero ogni volta, riconoscere che un fenomeno segue una Binomiale, una Poisson o una Geometrica permette di usare immediatamente formule pronte per media, varianza, probabilità cumulate.

Pensa a come in fisica si usano la legge di Hooke, la gravitazione universale, la legge dei gas ideali: sono modelli ideali che approssimano bene situazioni reali. Allo stesso modo, la Binomiale descrive "quanti successi in $n$ prove indipendenti", la Poisson descrive "quanti eventi rari in un intervallo", la Geometrica descrive "quante prove fino al primo successo".

Capire quali ipotesi stanno dietro a ciascun modello è fondamentale: la Binomiale richiede prove indipendenti con stessa probabilità; la Poisson richiede che gli eventi siano rari e non si "affollino"; l'Ipergeometrica si usa quando il campionamento è senza reinserimento. Usare il modello sbagliato porta a stime errate di probabilità anche di un ordine di grandezza.

Queste distribuzioni compaiono in test statistici ($\chi^2$ per dati categoriali usa la Poisson come approssimazione), in epidemiologia (modelli SIR usano la Geometrica per i tempi di incubazione), in informatica (analisi degli algoritmi usa la Geometrica e la Binomiale), e nel machine learning bayesiano (la Binomiale come likelihood per dati 0-1).

## 2. Prerequisiti

- Variabili aleatorie discrete: PMF, CDF, valore atteso, varianza
- Coefficiente binomiale $\binom{n}{k}$
- Serie geometrica: $\sum_{k=0}^\infty r^k = \frac{1}{1-r}$ per $\lvert r \rvert < 1$
- Serie di Taylor: $e^x = \sum_{k=0}^\infty \frac{x^k}{k!}$
- Concetto di prove indipendenti e identicamente distribuite (i.i.d.)

## 3. Teoria

### Distribuzione di Bernoulli

$X \sim \text{Ber}(p)$ con $p \in (0,1)$: modella un singolo esperimento con due esiti (successo/insuccesso).

$$p_X(k) = \begin{cases} 1-p & k=0 \\ p & k=1 \end{cases}$$

Compattamente: $p_X(k) = p^k(1-p)^{1-k}$ per $k \in \{0,1\}$.

$$E[X] = p, \qquad \text{Var}(X) = p(1-p)$$

La varianza è massima per $p = 1/2$ (vale $1/4$) e minima (zero) per $p=0$ o $p=1$.

### Distribuzione Binomiale

$X \sim \text{Bin}(n, p)$ con $n \in \mathbb{N}$, $p \in (0,1)$: conta i successi in $n$ prove di Bernoulli **indipendenti** con stessa probabilità $p$.

$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \qquad k = 0, 1, \ldots, n$$

Il fattore $\binom{n}{k}$ conta i modi di scegliere quali $k$ delle $n$ prove sono successi; $p^k(1-p)^{n-k}$ è la probabilità di una specifica sequenza con $k$ successi e $n-k$ insuccessi.

$$E[X] = np, \qquad \text{Var}(X) = np(1-p)$$

**Proprietà di riproducibilità:** se $X \sim \text{Bin}(m,p)$ e $Y \sim \text{Bin}(n,p)$ indipendenti, allora $X+Y \sim \text{Bin}(m+n, p)$.

**Relazione con Bernoulli:** se $X_1, \ldots, X_n \sim \text{Ber}(p)$ i.i.d., allora $\sum_{i=1}^n X_i \sim \text{Bin}(n,p)$.

### Distribuzione di Poisson

$X \sim \text{Pois}(\lambda)$ con $\lambda > 0$: conta eventi **rari** che si verificano in modo indipendente in un intervallo (di tempo, spazio, ecc.) con tasso medio $\lambda$.

$$P(X = k) = e^{-\lambda} \frac{\lambda^k}{k!}, \qquad k = 0, 1, 2, \ldots$$

$$E[X] = \lambda, \qquad \text{Var}(X) = \lambda$$

Notare: media e varianza coincidono. Questo è un fatto distintivo della Poisson utile per riconoscerla nei dati.

**Approssimazione di Poisson:** $\text{Bin}(n,p) \approx \text{Pois}(\lambda = np)$ quando $n \geq 20$ e $p \leq 0.05$ (o più in generale quando $n \to \infty$, $p \to 0$, $np \to \lambda$).

**Riproducibilità:** se $X \sim \text{Pois}(\lambda_1)$ e $Y \sim \text{Pois}(\lambda_2)$ indipendenti, allora $X+Y \sim \text{Pois}(\lambda_1 + \lambda_2)$.

### Distribuzione Geometrica

$X \sim \text{Geom}(p)$ con $p \in (0,1]$: conta il numero di prove fino al **primo successo** (incluso).

$$P(X = k) = (1-p)^{k-1} p, \qquad k = 1, 2, 3, \ldots$$

Il ragionamento: le prime $k-1$ prove sono insuccessi (ciascuna con prob $1-p$) e la $k$-esima è un successo (prob $p$).

$$E[X] = \frac{1}{p}, \qquad \text{Var}(X) = \frac{1-p}{p^2}$$

**Proprietà di assenza di memoria (memorylessness):**

$$P(X > m + n \mid X > m) = P(X > n) \quad \text{per ogni } m, n \geq 0$$

In parole: se nei primi $m$ lanci non è uscito un successo, la probabilità di aspettare altri $n$ lanci non cambia. La Geometrica è l'unica distribuzione discreta con questa proprietà.

### Distribuzione Ipergeometrica

$X \sim \text{HGeom}(N, K, n)$: estrazione di $n$ oggetti **senza reinserimento** da una popolazione di $N$ oggetti di cui $K$ "speciali". $X$ è il numero di speciali estratti.

$$P(X = k) = \frac{\dbinom{K}{k}\dbinom{N-K}{n-k}}{\dbinom{N}{n}}, \qquad \max(0, n-N+K) \leq k \leq \min(n,K)$$

Il numeratore conta le scelte di $k$ speciali tra i $K$ disponibili e $n-k$ non-speciali tra gli $N-K$ disponibili; il denominatore conta tutti i possibili gruppi di $n$ oggetti.

$$E[X] = n\frac{K}{N}, \qquad \text{Var}(X) = n\frac{K}{N}\frac{N-K}{N}\frac{N-n}{N-1}$$

Il fattore $\frac{N-n}{N-1}$ è il **fattore di correzione per popolazioni finite**: quando $n \ll N$, si avvicina a 1 e la Ipergeometrica si approssima con la Binomiale($n, K/N$).

## 4. Derivazioni

### Derivazione di $E[X]$ e $\text{Var}(X)$ per la Binomiale

**Metodo indicatore.** Scrivi $X = X_1 + \cdots + X_n$ dove $X_i \sim \text{Ber}(p)$ i.i.d.

$E[X] = \sum_{i=1}^n E[X_i] = np$

$\text{Var}(X) = \sum_{i=1}^n \text{Var}(X_i) = np(1-p)$ (per l'indipendenza, la varianza della somma è la somma delle varianze)

### Derivazione di $E[X]$ per la Poisson

$$E[X] = \sum_{k=0}^\infty k \cdot e^{-\lambda}\frac{\lambda^k}{k!} = e^{-\lambda}\sum_{k=1}^\infty \frac{\lambda^k}{(k-1)!}$$

Posto $j = k-1$:

$$= e^{-\lambda}\lambda\sum_{j=0}^\infty \frac{\lambda^j}{j!} = e^{-\lambda}\lambda e^\lambda = \lambda$$

### Derivazione di $E[X]$ per la Geometrica

$$E[X] = \sum_{k=1}^\infty k(1-p)^{k-1}p = p\sum_{k=1}^\infty k q^{k-1} \quad (q = 1-p)$$

Usando $\sum_{k=1}^\infty k q^{k-1} = \frac{d}{dq}\sum_{k=0}^\infty q^k = \frac{d}{dq}\frac{1}{1-q} = \frac{1}{(1-q)^2} = \frac{1}{p^2}$:

$$E[X] = p \cdot \frac{1}{p^2} = \frac{1}{p}$$

### Derivazione dell'assenza di memoria della Geometrica

$$P(X > m) = \sum_{k=m+1}^\infty (1-p)^{k-1}p = (1-p)^m \sum_{j=0}^\infty (1-p)^j p = (1-p)^m$$

$$P(X > m+n \mid X > m) = \frac{P(X > m+n)}{P(X > m)} = \frac{(1-p)^{m+n}}{(1-p)^m} = (1-p)^n = P(X > n) \qquad \blacksquare$$

## 5. Esempi

**Esempio 1 — Binomiale: test a risposta multipla.**

Un esame ha 10 domande vero/falso. Un candidato risponde a caso ($p = 1/2$). Probabilità di almeno 8 risposte corrette?

$X \sim \text{Bin}(10, 1/2)$

$P(X \geq 8) = \sum_{k=8}^{10}\binom{10}{k}\left(\frac{1}{2}\right)^{10} = \frac{\binom{10}{8}+\binom{10}{9}+\binom{10}{10}}{1024} = \frac{45+10+1}{1024} = \frac{56}{1024} \approx 5.5\%$

---

**Esempio 2 — Poisson: centralino telefonico.**

Una centralina riceve in media 4 chiamate al minuto. Probabilità di ricevere 0 o 1 chiamata?

$X \sim \text{Pois}(4)$

$P(X=0) = e^{-4} \approx 0.0183$

$P(X=1) = 4e^{-4} \approx 0.0733$

$P(X \leq 1) \approx 9.2\%$

---

**Esempio 3 — Geometrica: dado.**

Quante volte in media devo lanciare un dado prima di ottenere un 6?

$X \sim \text{Geom}(1/6)$, quindi $E[X] = 6$ lanci.

$P(X \leq 3) = 1 - (5/6)^3 = 1 - 125/216 \approx 42\%$

---

**Esempio 4 — Approssimazione Poisson della Binomiale.**

Una fabbrica produce chip con tasso di difetto $p = 0.002$. Su un lotto di $n=1000$ chip, qual è la probabilità di zero difetti?

**Esatto (Binomiale):** $P(X=0) = (1-0.002)^{1000} = 0.998^{1000} \approx 0.1353$

**Approssimato (Poisson)** con $\lambda = np = 2$: $P(X=0) = e^{-2} \approx 0.1353$. Praticamente identico!

---

**Esempio 5 — Ipergeometrica: controllo qualità.**

Un lotto contiene $N=20$ pezzi, di cui $K=4$ difettosi. Si estraggono $n=5$ pezzi a caso senza reinserimento. Probabilità di trovare esattamente 1 difettoso?

$X \sim \text{HGeom}(20, 4, 5)$

$P(X=1) = \frac{\binom{4}{1}\binom{16}{4}}{\binom{20}{5}} = \frac{4 \cdot 1820}{15504} = \frac{7280}{15504} \approx 46.9\%$

$E[X] = 5 \cdot \frac{4}{20} = 1$

---

**Esempio 6 — Binomiale vs Ipergeometrica.**

Stessa situazione dell'Esempio 5, ma con reinserimento. Allora $X \sim \text{Bin}(5, 4/20) = \text{Bin}(5, 0.2)$.

$P(X=1) = \binom{5}{1}(0.2)^1(0.8)^4 = 5 \cdot 0.2 \cdot 0.4096 = 0.4096 \approx 41.0\%$

La differenza (47% vs 41%) riflette il fatto che senza reinserimento ogni estrazione "cambia" la composizione del lotto.

---

**Esempio 7 — Proprietà di assenza di memoria.**

Un'azienda assume candidati fino al primo con laurea magistrale, con prob $p=0.3$ per ciascun candidato. Dato che i primi 5 non avevano la magistrale, qual è la probabilità di trovarne uno tra i prossimi 3?

Per l'assenza di memoria: $P(X \leq 8 \mid X > 5) = P(X \leq 3) = 1 - (0.7)^3 \approx 65.7\%$

La storia pregressa è irrilevante.

## 6. Grafico

```plot
{"fn":"Math.exp(-2)*Math.pow(2,Math.round(x))/[1,1,2,6,24,120,720,5040][Math.min(Math.round(x),7)]","domain":[0,8],"yDomain":[0,0.30],"title":"PMF di Poisson(λ=2)","label1":"P(X=k)"}
```

## 7. Interattivo

```slider
{"fn":"(x>=0&&x<=1)?Math.pow(1-p,Math.round(n)-1)*p:0","domain":[0,1],"yDomain":[-0.05,1.05],"params":[{"name":"p","min":0.05,"max":0.95,"step":0.05,"default":0.5},{"name":"n","min":1,"max":10,"step":1,"default":1}],"title":"Geometrica(p): P(X=n) — prob. che il 1° successo sia alla prova n"}
```

## 8. Errori comuni

1. **Usare la Binomiale quando le prove non sono indipendenti.** La Binomiale richiede prove indipendenti con stessa probabilità. Se si estraggono carte da un mazzo senza reinserimento, la probabilità cambia ad ogni estrazione: bisogna usare l'Ipergeometrica, non la Binomiale.

2. **Confondere il parametro della Geometrica: prove o insuccessi?** Alcune fonti definiscono $X$ come il numero di insuccessi prima del primo successo (quindi $X \geq 0$), altre come il numero di prove fino al primo successo (quindi $X \geq 1$). Queste due convenzioni danno PMF e formule diverse. In questa lezione usiamo la seconda ($X \geq 1$).

3. **Dimenticare che Poisson ha media uguale a varianza.** Se in un dataset il valore medio è molto diverso dalla varianza campionaria, la Poisson non è un buon modello (si parla di sovra-dispersione o sotto-dispersione). Questa proprietà è il primo test da fare prima di applicare la Poisson.

4. **Applicare l'approssimazione Poisson fuori dai suoi limiti.** $\text{Bin}(n,p) \approx \text{Pois}(np)$ richiede $n$ grande e $p$ piccolo. Se $p = 0.4$ e $n = 10$, l'approssimazione è pessima. Regola pratica: usarla solo quando $n \geq 20$ e $p \leq 0.05$.

5. **Confondere Ipergeometrica e Binomiale.** La differenza chiave è il reinserimento. Il fattore di correzione $(N-n)/(N-1)$ nell'Ipergeometrica riduce la varianza rispetto alla Binomiale: campionare senza reinserimento è "più informativo".

6. **Usare la Poisson per eventi non rari.** La Poisson modella eventi con tasso basso. Se il numero medio di eventi per intervallo è molto alto (es. $\lambda = 50$), la Poisson converge a una Normale per il teorema del limite centrale e si usa quella.

7. **Calcolare $P(X \geq k)$ come $1 - P(X < k)$ invece di $1 - P(X \leq k-1)$.** Attenzione alle disuguaglianze strette nelle VA discrete. $P(X \geq k) = 1 - P(X \leq k-1)$, non $1 - P(X \leq k)$.

## 9. Applicazioni reali

**Biostatistica e sperimentazione clinica.** In uno studio clinico randomizzato su $n$ pazienti, il numero di guarigioni con un nuovo farmaco segue $\text{Bin}(n, p)$ dove $p$ è la vera efficacia. Il test di ipotesi per $p$ si basa sulla Binomiale.

**Informatica e reti.** Il numero di pacchetti corrotti su una rete segue spesso una Poisson. La Geometrica descrive il numero di tentativi fino al primo ACK ricevuto in un protocollo di trasmissione con possibilità di errore.

**Controllo qualità.** L'Ipergeometrica è il modello corretto per l'ispezione di campioni da lotti finiti (acceptance sampling). Definisce il piano di campionamento ottimale: quanti pezzi ispezionare e quanti difetti tollerare.

**Machine learning: naive Bayes.** Il classificatore Naive Bayes per testi modella il conteggio di parole con distribuzioni Binomiali o Multinomiali. Riconoscere spam o sentiment richiede questi modelli discreti.

## 10. Riepilogo

| Distribuzione | PMF $P(X=k)$ | Media | Varianza | Uso tipico |
| --- | --- | --- | --- | --- |
| $\text{Ber}(p)$ | $p^k(1-p)^{1-k}$, $k \in \{0,1\}$ | $p$ | $p(1-p)$ | Singola prova sì/no |
| $\text{Bin}(n,p)$ | $\binom{n}{k}p^k(1-p)^{n-k}$ | $np$ | $np(1-p)$ | $n$ prove indip. |
| $\text{Pois}(\lambda)$ | $e^{-\lambda}\lambda^k/k!$ | $\lambda$ | $\lambda$ | Conteggio eventi rari |
| $\text{Geom}(p)$ | $(1-p)^{k-1}p$, $k \geq 1$ | $1/p$ | $(1-p)/p^2$ | Primo successo |
| $\text{HGeom}(N,K,n)$ | $\binom{K}{k}\binom{N-K}{n-k}/\binom{N}{n}$ | $nK/N$ | formula con fattore fin. | Senza reinserimento |

## 11. Esercizi

<details>
<summary>Esercizio 1: Binomiale — difetti in produzione</summary>

Una macchina produce viti con probabilità di difetto $p=0.1$. Calcolare la probabilità che in un lotto di 15 viti ci siano esattamente 2 difettose, e la probabilità che ce ne siano al più 2.

**Soluzione.**

$X \sim \text{Bin}(15, 0.1)$

$P(X=2) = \binom{15}{2}(0.1)^2(0.9)^{13} = 105 \cdot 0.01 \cdot 0.2542 \approx 0.2669$

$P(X=0) = (0.9)^{15} \approx 0.2059$

$P(X=1) = 15(0.1)(0.9)^{14} \approx 0.3432$

$P(X \leq 2) \approx 0.2059 + 0.3432 + 0.2669 \approx 81.6\%$

</details>

<details>
<summary>Esercizio 2: Poisson — arrivi in coda</summary>

Un bancomat riceve in media 3 clienti ogni 10 minuti. Qual è la probabilità di ricevere almeno 5 clienti nei prossimi 10 minuti?

**Soluzione.**

$X \sim \text{Pois}(3)$

$P(X \geq 5) = 1 - P(X \leq 4)$

$P(X=0) = e^{-3} \approx 0.0498$

$P(X=1) = 3e^{-3} \approx 0.1494$

$P(X=2) = \frac{9}{2}e^{-3} \approx 0.2240$

$P(X=3) = \frac{27}{6}e^{-3} \approx 0.2240$

$P(X=4) = \frac{81}{24}e^{-3} \approx 0.1680$

$P(X \leq 4) \approx 0.8153$, quindi $P(X \geq 5) \approx 18.5\%$

</details>

<details>
<summary>Esercizio 3: Geometrica — primo successo</summary>

La probabilità che un tentativo di connessione vada a buon fine è $p=0.7$. Calcolare la probabilità che il terzo tentativo sia il primo successo, e la probabilità di avere successo entro i primi 3 tentativi.

**Soluzione.**

$X \sim \text{Geom}(0.7)$

$P(X=3) = (0.3)^2(0.7) = 0.09 \cdot 0.7 = 0.063$

$P(X \leq 3) = 1 - (1-0.7)^3 = 1 - 0.027 = 0.973 = 97.3\%$

</details>

<details>
<summary>Esercizio 4: Assenza di memoria della Geometrica</summary>

Un'urna contiene 5 palline rosse e 5 blu. Si estrae con reinserimento fino alla prima rossa. Dato che i primi 4 tentativi erano tutti blu, qual è la probabilità di aspettare ancora almeno 3 tentativi?

**Soluzione.**

$X \sim \text{Geom}(0.5)$

Per l'assenza di memoria: $P(X > 4+3 \mid X > 4) = P(X > 3) = (0.5)^3 = 0.125 = 12.5\%$

La storia pregressa (4 insuccessi) non modifica la distribuzione degli insuccessi futuri.

</details>

<details>
<summary>Esercizio 5: Ipergeometrica — controllo qualità</summary>

Un cassetto contiene 8 fusibili buoni e 4 difettosi. Si estraggono 3 fusibili senza reinserimento. Calcolare $P(X=1)$ e $E[X]$ dove $X$ è il numero di difettosi estratti.

**Soluzione.**

$X \sim \text{HGeom}(12, 4, 3)$

$P(X=1) = \frac{\binom{4}{1}\binom{8}{2}}{\binom{12}{3}} = \frac{4 \cdot 28}{220} = \frac{112}{220} \approx 50.9\%$

$E[X] = 3 \cdot \frac{4}{12} = 1$

</details>

<details>
<summary>Esercizio 6: Approssimazione Poisson</summary>

In una città, la probabilità che un individuo scelto a caso soffra di una malattia rara è $p=0.0008$. In un campione di 2000 persone, qual è la probabilità di trovare esattamente 2 malati?

**Soluzione.**

$\lambda = np = 2000 \cdot 0.0008 = 1.6$

Con la Poisson: $P(X=2) = e^{-1.6}\frac{(1.6)^2}{2!} = e^{-1.6} \cdot 1.28 \approx 0.2584 \cdot 1.28 \approx 0.2584$

Con la Binomiale esatta: $\binom{2000}{2}(0.0008)^2(0.9992)^{1998} \approx 0.2584$. Coincide!

</details>

<details>
<summary>Esercizio 7: Confronto media e varianza</summary>

Un ospedale registra 10 chiamate al pronto soccorso per ora. Modellando con la Poisson, calcolare $E[X]$, $\text{Var}(X)$ e la probabilità di più di 15 chiamate in un'ora.

**Soluzione.**

$X \sim \text{Pois}(10)$, quindi $E[X] = 10$ e $\text{Var}(X) = 10$.

$P(X > 15) = 1 - \sum_{k=0}^{15}e^{-10}\frac{10^k}{k!}$

Calcolando termine per termine: $P(X \leq 15) \approx 0.9513$, quindi $P(X > 15) \approx 4.9\%$

</details>

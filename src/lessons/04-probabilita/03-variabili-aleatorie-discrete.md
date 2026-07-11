---
id: probabilita-03-var-discrete
subject: probabilita
topic_it: Variabili aleatorie
topic_en: Random variables
title_it: Variabili aleatorie discrete
title_en: Discrete random variables
level: blue
order: 3
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 3 — Variabili aleatorie discrete"
stato: da-rielaborare
---

## 1. Intuizione — analogia concreta + perché si studia

Immagina di lanciare due dadi e di voler studiare la loro somma. Invece di elencare ogni possibile coppia di facce come evento separato nello spazio campionario, ti conviene assegnare a ogni esito un numero: la somma dei due dadi. Questo numero è una **variabile aleatoria**: una funzione che trasforma esiti astratti (le coppie di facce) in valori numerici comodi da calcolare.

Le variabili aleatorie discrete sono lo strumento fondamentale per modellare grandezze che assumono valori contabili: numero di clienti in coda, conteggio di errori in un codice sorgente, risultato di un questionario a risposta multipla, numero di guasti in un impianto. Senza questo concetto non si possono scrivere formule per la media, la varianza, né costruire modelli predittivi.

Il salto concettuale è semplice ma potente: invece di lavorare con gli eventi (insiemi di esiti), lavoriamo con numeri — e per i numeri abbiamo tutta l'algebra e il calcolo a disposizione. La PMF (funzione di massa di probabilità) è l'elenco delle probabilità associate a ciascun valore possibile, analoga a un istogramma di frequenze teorico.

La varianza e il valore atteso descrivono il "centro" e la "dispersione" della distribuzione, esattamente come media e scarto quadratico medio descriscono un insieme di dati statistici — ma qui con precisione teorica invece che empirica.

Capire le VA discrete è il prerequisito per tutto il resto della probabilità: le distribuzioni notevoli (Binomiale, Poisson, Geometrica), l'inferenza statistica, i processi stocastici e il machine learning bayesiano.

## 2. Prerequisiti

- Spazio di probabilità $(\Omega, \mathcal{F}, P)$ e assiomi di Kolmogorov
- Insiemi numerabili e serie convergenti
- Sommatorie finite e infinite
- Concetto di funzione da un insieme a un altro
- Disuguaglianza di Markov (utile per la sezione sulla varianza)

## 3. Teoria

### Definizione formale di variabile aleatoria discreta

Una **variabile aleatoria discreta** è una funzione misurabile $X:\Omega\to\mathbb{R}$ tale che l'immagine $X(\Omega)=\{x_1, x_2, x_3, \ldots\}$ è un insieme **finito o numerabilmente infinito**.

Il simbolo $\Omega$ indica lo spazio campionario (l'insieme di tutti gli esiti possibili). L'aggettivo "misurabile" garantisce che eventi come $\{X = k\}$ siano effettivamente elementi di $\mathcal{F}$ (la sigma-algebra) e abbiano una probabilità ben definita.

### Funzione di massa di probabilità (PMF)

La **PMF** (Probability Mass Function) di $X$ è la funzione:

$$p_X(x) = P(X = x) = P(\{\omega \in \Omega : X(\omega) = x\})$$

Il simbolo $p_X(x)$ rappresenta la probabilità che $X$ assuma esattamente il valore $x$. Proprietà fondamentali:

1. **Non negatività:** $p_X(x) \geq 0$ per ogni $x \in \mathbb{R}$
2. **Normalizzazione:** $\displaystyle\sum_{x \in X(\Omega)} p_X(x) = 1$
3. **Supporto:** $p_X(x) = 0$ per ogni $x \notin X(\Omega)$

La PMF contiene tutta l'informazione sulla distribuzione di $X$.

### Funzione di ripartizione (CDF)

La **CDF** (Cumulative Distribution Function) è:

$$F_X(x) = P(X \leq x) = \sum_{k \leq x} p_X(k)$$

La somma è estesa a tutti i valori $k$ nel supporto di $X$ che sono $\leq x$. Proprietà della CDF discreta:

- **Monotona non decrescente:** se $x_1 < x_2$, allora $F_X(x_1) \leq F_X(x_2)$
- **Continua a destra:** $\lim_{h\to 0^+} F_X(x+h) = F_X(x)$
- **Limiti:** $\lim_{x\to -\infty} F_X(x) = 0$ e $\lim_{x\to +\infty} F_X(x) = 1$
- **Scalini:** la CDF discreta è a gradini, con salto di ampiezza $p_X(k)$ in ogni $k$ del supporto

### Valore atteso (speranza matematica)

Il **valore atteso** (o media, o speranza matematica) di $X$ è:

$$E[X] = \sum_{x} x \cdot p_X(x)$$

La somma è estesa a tutti i valori nel supporto. Il valore atteso esiste (è finito) se e solo se $\sum_x |x| p_X(x) < +\infty$.

**Legge dello statistico inconsapevole (LOTUS):** per qualunque funzione $g:\mathbb{R}\to\mathbb{R}$,

$$E[g(X)] = \sum_{x} g(x) \cdot p_X(x)$$

Non serve conoscere la distribuzione di $g(X)$: si calcola direttamente dalla PMF di $X$.

**Linearità dell'aspettativa:** per ogni $a, b \in \mathbb{R}$,

$$E[aX + b] = a\,E[X] + b$$

Questa proprietà vale **sempre**, anche se $X$ non è indipendente da altre variabili.

**Legge dell'aspettativa totale:** per una VA $Y$,

$$E[X] = E\!\left[E[X \mid Y]\right]$$

In parole: la media di $X$ è la media pesata delle medie condizionali di $X$ dato $Y$.

### Varianza e deviazione standard

La **varianza** misura la dispersione media attorno al valore atteso:

$$\text{Var}(X) = E\!\left[(X - E[X])^2\right] = \sum_x (x - \mu)^2 p_X(x)$$

dove $\mu = E[X]$. Formula computazionale più pratica:

$$\text{Var}(X) = E[X^2] - (E[X])^2$$

**Dimostrazione della formula computazionale:**

$$\text{Var}(X) = E[(X-\mu)^2] = E[X^2 - 2\mu X + \mu^2] = E[X^2] - 2\mu E[X] + \mu^2 = E[X^2] - \mu^2$$

Proprietà:
- $\text{Var}(X) \geq 0$ sempre
- $\text{Var}(aX + b) = a^2\,\text{Var}(X)$ (le costanti additive non cambiano la dispersione)
- $\text{Var}(X) = 0$ se e solo se $X$ è costante quasi certamente

La **deviazione standard** $\sigma_X = \sqrt{\text{Var}(X)}$ ha la stessa unità di misura di $X$, a differenza della varianza.

### Momenti di ordine superiore

Il **momento di ordine $n$** è $E[X^n]$. Il **momento centrale di ordine $n$** è $E[(X - \mu)^n]$.

La **funzione generatrice dei momenti** (MGF) è:

$$M_X(t) = E[e^{tX}] = \sum_x e^{tx} p_X(x)$$

Se esiste in un intorno di $t=0$, allora $M_X^{(n)}(0) = E[X^n]$ (l'$n$-esima derivata in zero dà l'$n$-esimo momento). La MGF identifica univocamente la distribuzione.

## 4. Derivazioni

### Derivazione della formula computazionale della varianza

$$\text{Var}(X) = E[(X - \mu)^2]$$

Espandiamo il quadrato:

$$= E[X^2 - 2\mu X + \mu^2]$$

Per la linearità dell'aspettativa:

$$= E[X^2] - 2\mu E[X] + \mu^2$$

Poiché $\mu = E[X]$:

$$= E[X^2] - 2\mu^2 + \mu^2 = E[X^2] - \mu^2 = E[X^2] - (E[X])^2 \qquad \blacksquare$$

### Derivazione della proprietà $\text{Var}(aX+b) = a^2\text{Var}(X)$

Sia $\mu = E[X]$, quindi $E[aX+b] = a\mu + b$.

$$\text{Var}(aX+b) = E[(aX+b - (a\mu+b))^2] = E[(a(X-\mu))^2] = a^2 E[(X-\mu)^2] = a^2\text{Var}(X) \qquad \blacksquare$$

La costante $b$ scompare perché traslare tutti i valori non cambia la dispersione.

### Derivazione della disuguaglianza di Markov

Per $X \geq 0$ e $a > 0$:

$$E[X] = \sum_x x\,p_X(x) \geq \sum_{x \geq a} x\,p_X(x) \geq a \sum_{x \geq a} p_X(x) = a\,P(X \geq a)$$

Quindi $P(X \geq a) \leq \dfrac{E[X]}{a}$.

## 5. Esempi

**Esempio 1 — PMF di un dado equo.**

$X$ = risultato di un dado equo a 6 facce. $p_X(k) = \frac{1}{6}$ per $k = 1, 2, 3, 4, 5, 6$.

$E[X] = \frac{1+2+3+4+5+6}{6} = \frac{21}{6} = 3.5$

$E[X^2] = \frac{1+4+9+16+25+36}{6} = \frac{91}{6} \approx 15.17$

$\text{Var}(X) = \frac{91}{6} - \left(\frac{7}{2}\right)^2 = \frac{91}{6} - \frac{49}{4} = \frac{182 - 147}{12} = \frac{35}{12} \approx 2.917$

$\sigma_X = \sqrt{35/12} \approx 1.708$

---

**Esempio 2 — VA di Bernoulli.**

$X \sim \text{Ber}(p)$: vale 1 con probabilità $p$ e 0 con probabilità $1-p$.

$E[X] = 0 \cdot (1-p) + 1 \cdot p = p$

$E[X^2] = 0^2(1-p) + 1^2 p = p$ (poiché $X^2 = X$ per variabili 0-1)

$\text{Var}(X) = p - p^2 = p(1-p)$

La varianza è massima per $p = 1/2$ (massima incertezza) e vale $1/4$.

---

**Esempio 3 — Valore atteso di una funzione (LOTUS).**

$X \sim \text{Ber}(1/3)$. Calcolare $E[X^2 + 2X + 1]$.

Per LOTUS: $E[g(X)] = g(0) \cdot P(X=0) + g(1) \cdot P(X=1)$

$g(0) = 0 + 0 + 1 = 1$, $g(1) = 1 + 2 + 1 = 4$

$E[X^2 + 2X + 1] = 1 \cdot \frac{2}{3} + 4 \cdot \frac{1}{3} = \frac{2 + 4}{3} = 2$

Oppure per linearità: $E[X^2] + 2E[X] + 1 = \frac{1}{3} + \frac{2}{3} + 1 = 2$. ✓

---

**Esempio 4 — CDF di una VA discreta.**

$X$ ha PMF: $P(X=0) = 1/4$, $P(X=1) = 1/2$, $P(X=2) = 1/4$.

$$F_X(x) = \begin{cases} 0 & x < 0 \\ 1/4 & 0 \leq x < 1 \\ 3/4 & 1 \leq x < 2 \\ 1 & x \geq 2 \end{cases}$$

Notare i salti: ampiezza $1/4$ in $x=0$, ampiezza $1/2$ in $x=1$, ampiezza $1/4$ in $x=2$.

---

**Esempio 5 — Distribuzione uniforme discreta.**

$X$ uniforme su $\{1, 2, \ldots, n\}$: $p_X(k) = 1/n$ per $k = 1, \ldots, n$.

$E[X] = \frac{1}{n}\sum_{k=1}^n k = \frac{n+1}{2}$

$E[X^2] = \frac{1}{n}\sum_{k=1}^n k^2 = \frac{(n+1)(2n+1)}{6}$

$\text{Var}(X) = \frac{(n+1)(2n+1)}{6} - \frac{(n+1)^2}{4} = \frac{n^2-1}{12}$

Per $n=6$: $E[X] = 3.5$, $\text{Var}(X) = 35/12$. ✓

---

**Esempio 6 — Applicazione della MGF.**

$X \sim \text{Ber}(p)$. La MGF è:

$M_X(t) = E[e^{tX}] = e^{t\cdot 0}(1-p) + e^{t\cdot 1}p = (1-p) + pe^t$

$M_X'(t) = pe^t$, quindi $M_X'(0) = p = E[X]$. ✓

$M_X''(t) = pe^t$, quindi $M_X''(0) = p = E[X^2]$. ✓

---

**Esempio 7 — Somma di due dadi.**

$X_1, X_2$ risultati indipendenti di due dadi equi. $S = X_1 + X_2$.

$E[S] = E[X_1] + E[X_2] = 3.5 + 3.5 = 7$

Per l'indipendenza: $\text{Var}(S) = \text{Var}(X_1) + \text{Var}(X_2) = \frac{35}{12} + \frac{35}{12} = \frac{35}{6} \approx 5.83$

La PMF di $S$ ha 11 valori (da 2 a 12), con $P(S=7) = 6/36 = 1/6$ massimo.

## 6. Grafico

```plot
{"fn":"(x>=1&&x<=6)?1/6:0","domain":[0,7],"yDomain":[0,0.25],"title":"PMF dado equo — P(X=k)=1/6","label1":"PMF uniforme discreta"}
```

## 7. Interattivo

```slider
{"fn":"Math.pow(x,n-1)*Math.pow(1-x,0)*(n===1?1:0)+(x===0?(1-p):0)+(x===1?p:0)","domain":[0,1],"yDomain":[-0.05,1.05],"params":[{"name":"p","min":0.01,"max":0.99,"step":0.01,"default":0.5}],"title":"Bernoulli(p): probabilità di successo"}
```

## 8. Errori comuni

1. **Confondere PMF e CDF.** La PMF dà $P(X = x)$; la CDF dà $P(X \leq x)$. La CDF è la somma cumulata della PMF. Molti usano "probabilità che $X$ valga $x$" quando intendono la CDF, oppure viceversa.

2. **Dimenticare che $E[g(X)] \neq g(E[X])$ in generale.** La linearità vale solo per funzioni lineari. Per funzioni non lineari si usa LOTUS: $E[X^2] \neq (E[X])^2$ (la differenza è proprio la varianza).

3. **Sbagliare la formula computazionale della varianza.** La formula è $E[X^2] - (E[X])^2$, non $E[X^2] - E[X]^2$ calcolata male. Un errore frequente è calcolare $E[X]$ e poi dimenticare di elevarlo al quadrato prima di sottrarlo.

4. **Credere che varianza e deviazione standard abbiano la stessa unità di misura.** La varianza ha unità $[X]^2$; la deviazione standard ha unità $[X]$. Se $X$ è in metri, la varianza è in $\text{m}^2$.

5. **Pensare che la CDF discreta sia continua.** La CDF discreta ha salti nei punti del supporto. Non si può derivare in quei punti per ottenere la PMF (al contrario delle VA continue dove CDF è continua e derivabile).

6. **Usare la linearità per la varianza di somme.** $\text{Var}(X+Y) = \text{Var}(X) + \text{Var}(Y)$ vale solo se $X$ e $Y$ sono **indipendenti**. In generale serve aggiungere $2\text{Cov}(X,Y)$.

7. **Confondere valore atteso con valore più probabile (moda).** $E[X] = 3.5$ per il dado, ma 3.5 non è mai il risultato di un lancio. Il valore atteso è un "baricentro" teorico, non necessariamente un valore assunto dalla VA.

## 9. Applicazioni reali

**Controllo qualità industriale.** Il numero di pezzi difettosi in un lotto di $n$ componenti segue una VA discreta. Il valore atteso dice quanti difetti aspettarsi per lotto; la varianza misura l'instabilità del processo produttivo.

**Teoria delle code.** Il numero di clienti che arrivano in un intervallo di tempo è una VA discreta (spesso di Poisson). Il valore atteso determina il carico medio del sistema e guida il dimensionamento delle risorse.

**Machine learning.** In classificazione, l'uscita di un modello è una VA discreta (la classe predetta). Le PMF compaiono nelle funzioni di perdita (cross-entropy), che minimizzano la divergenza tra distribuzione predetta e vera.

**Giochi e finanza.** L'equità di un gioco d'azzardo si verifica calcolando $E[X]$: se $E[X] = 0$ il gioco è equo, se $E[X] < 0$ sfavorisce il giocatore. Il concetto di valore atteso è alla base del calcolo del prezzo equo di opzioni finanziarie semplici.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| PMF | $p_X(x) = P(X=x)$ | $\sum_x p_X(x) = 1$ |
| CDF | $F_X(x) = \sum_{k \leq x} p_X(k)$ | Gradini nei punti del supporto |
| Valore atteso | $E[X] = \sum_x x\,p_X(x)$ | Baricentro della distribuzione |
| LOTUS | $E[g(X)] = \sum_x g(x)\,p_X(x)$ | Non serve la distribuzione di $g(X)$ |
| Linearità | $E[aX+b] = aE[X]+b$ | Vale sempre |
| Varianza | $\text{Var}(X) = E[X^2] - (E[X])^2$ | Sempre $\geq 0$ |
| Var. traslata | $\text{Var}(aX+b) = a^2\text{Var}(X)$ | Le costanti additive non contano |
| Dev. standard | $\sigma_X = \sqrt{\text{Var}(X)}$ | Stessa unità di $X$ |
| MGF | $M_X(t) = E[e^{tX}]$ | $M_X^{(n)}(0) = E[X^n]$ |

## 11. Esercizi

<details>
<summary>Esercizio 1: PMF e valor medio di un dado</summary>

Un dado equo a 6 facce. Scrivere la PMF, calcolare $E[X]$, $E[X^2]$, $\text{Var}(X)$.

**Soluzione.**

$p_X(k) = 1/6$ per $k = 1, \ldots, 6$.

$E[X] = \frac{21}{6} = 3.5$

$E[X^2] = \frac{1+4+9+16+25+36}{6} = \frac{91}{6} \approx 15.17$

$\text{Var}(X) = \frac{91}{6} - \frac{49}{4} = \frac{182-147}{12} = \frac{35}{12} \approx 2.917$

$\sigma_X \approx 1.708$

</details>

<details>
<summary>Esercizio 2: Valore atteso con LOTUS</summary>

$X \sim \text{Ber}(1/3)$. Calcolare $E[2X^2 - 3X + 5]$.

**Soluzione.**

Per LOTUS: $g(0) = 0 - 0 + 5 = 5$ e $g(1) = 2 - 3 + 5 = 4$.

$E[g(X)] = 5 \cdot \frac{2}{3} + 4 \cdot \frac{1}{3} = \frac{10+4}{3} = \frac{14}{3} \approx 4.67$

Alternativa: $2E[X^2] - 3E[X] + 5 = 2 \cdot \frac{1}{3} - 3 \cdot \frac{1}{3} + 5 = \frac{2}{3} - 1 + 5 = \frac{14}{3}$. ✓

</details>

<details>
<summary>Esercizio 3: Costruire la CDF</summary>

$X$ ha PMF: $P(X=-1) = 1/3$, $P(X=0) = 1/3$, $P(X=2) = 1/3$. Costruire la CDF e calcolare $P(-1 < X \leq 2)$.

**Soluzione.**

$$F_X(x) = \begin{cases} 0 & x < -1 \\ 1/3 & -1 \leq x < 0 \\ 2/3 & 0 \leq x < 2 \\ 1 & x \geq 2 \end{cases}$$

$P(-1 < X \leq 2) = F_X(2) - F_X(-1) = 1 - \frac{1}{3} = \frac{2}{3}$

Attenzione: $-1 < X$ esclude il punto $-1$, quindi si parte da $F_X(-1) = 1/3$.

</details>

<details>
<summary>Esercizio 4: Varianza con la formula computazionale</summary>

$X$ assume i valori 1, 2, 3 con probabilità $1/6$, $2/6$, $3/6$. Calcolare $\text{Var}(X)$.

**Soluzione.**

$E[X] = 1 \cdot \frac{1}{6} + 2 \cdot \frac{2}{6} + 3 \cdot \frac{3}{6} = \frac{1+4+9}{6} = \frac{14}{6} = \frac{7}{3}$

$E[X^2] = 1 \cdot \frac{1}{6} + 4 \cdot \frac{2}{6} + 9 \cdot \frac{3}{6} = \frac{1+8+27}{6} = \frac{36}{6} = 6$

$\text{Var}(X) = 6 - \left(\frac{7}{3}\right)^2 = 6 - \frac{49}{9} = \frac{54-49}{9} = \frac{5}{9} \approx 0.556$

</details>

<details>
<summary>Esercizio 5: Deviazione standard e unità di misura</summary>

Il prezzo di un'azione assume valori 100€, 110€, 90€ con probabilità 0.5, 0.3, 0.2. Trovare $E[X]$, $\text{Var}(X)$ e $\sigma_X$.

**Soluzione.**

$E[X] = 100(0.5) + 110(0.3) + 90(0.2) = 50 + 33 + 18 = 101\text{ €}$

$E[X^2] = 10000(0.5) + 12100(0.3) + 8100(0.2) = 5000 + 3630 + 1620 = 10250$

$\text{Var}(X) = 10250 - 101^2 = 10250 - 10201 = 49\text{ €}^2$

$\sigma_X = 7\text{ €}$

La deviazione standard è in euro (stessa unità del prezzo), mentre la varianza è in euro quadrati.

</details>

<details>
<summary>Esercizio 6: Funzione generatrice dei momenti</summary>

$X$ uniforme su $\{1, 2, 3\}$. Calcolare $M_X(t)$ e da essa ricavare $E[X]$.

**Soluzione.**

$M_X(t) = \frac{e^t + e^{2t} + e^{3t}}{3}$

$M_X'(t) = \frac{e^t + 2e^{2t} + 3e^{3t}}{3}$

$E[X] = M_X'(0) = \frac{1+2+3}{3} = 2$. ✓ (formula: $(n+1)/2 = 4/2 = 2$)

</details>

<details>
<summary>Esercizio 7: Disuguaglianza di Markov applicata</summary>

$X$ = numero di errori in una riga di codice, con $E[X] = 0.2$. Dare un limite superiore a $P(X \geq 3)$.

**Soluzione.**

Per la disuguaglianza di Markov ($X \geq 0$, $a = 3$):

$P(X \geq 3) \leq \frac{E[X]}{3} = \frac{0.2}{3} \approx 0.067$

Al più circa il 6.7% delle righe ha 3 o più errori. (Il limite è pessimistico ma garantito.)

</details>

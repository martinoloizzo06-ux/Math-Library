---
id: probabilita-09-disuguaglianze-lgn
subject: probabilita
topic_it: Leggi dei grandi numeri
topic_en: Laws of large numbers
title_it: Disuguaglianze probabilistiche e legge dei grandi numeri
title_en: Probability inequalities and the law of large numbers
level: blue
order: 9
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 9 — Convergenza e LGN"
---

## 1. Intuizione

Immagina di scommettere 100€ su un gioco di dadi. Vuoi sapere: "quanto è probabile perdere più di 80€ in una sola partita?" Anche senza conoscere la forma esatta della distribuzione delle perdite, esiste uno strumento potentissimo che risponde con un limite garantito: la **disuguaglianza di Markov**.

Le disuguaglianze probabilistiche sono come cinture di sicurezza matematiche: non ti dicono esattamente cosa succederà, ma ti garantiscono che certi eventi catastrofici non possono essere troppo probabili, dato ciò che già sai (la media, la varianza). Sono strumenti **universali** — funzionano per qualsiasi distribuzione.

La **Legge dei Grandi Numeri** è invece il fondamento statistico del mondo moderno. Dice che se ripeti un esperimento molte volte, la media campionaria converge alla media vera. È per questo che le compagnie di assicurazione possono fissare premi giusti, i casinò guadagnano sempre nel lungo periodo, e i sondaggi di qualità su 1000 persone riflettono l'opinione di milioni.

Esistono due versioni della LGN: quella **debole** (convergenza in probabilità) e quella **forte** (convergenza quasi certa). La differenza è sottile ma profonda, e capirla ti permette di distinguere i due tipi di "certezza statistica" che matematici e statistici usano ogni giorno.

Infine, la **disuguaglianza di Jensen** lega la convessità di una funzione al valore atteso, con implicazioni sorprendenti in finanza, teoria dell'informazione e ottimizzazione.

## 2. Prerequisiti

- Variabili aleatorie: definizione, distribuzione, densità
- Valore atteso $E[X]$ e varianza $\text{Var}(X)$
- Definizione di probabilità e assiomi
- Nozioni di limite (per la LGN)
- Concetto di funzione convessa (per Jensen)

## 3. Teoria

### Disuguaglianza di Markov

**Teorema (Markov).** Sia $X$ una variabile aleatoria **non negativa** ($X \geq 0$) con $E[X] < \infty$. Per ogni $a > 0$:

$$P(X \geq a) \leq \frac{E[X]}{a}$$

**Dove:** $X$ è la variabile aleatoria, $a > 0$ è la soglia di interesse, $E[X]$ è il valore atteso.

**Dimostrazione.** Scriviamo $E[X]$ separando i contributi:

$$E[X] = \int_0^\infty x \, f(x) \, dx \geq \int_a^\infty x \, f(x) \, dx \geq \int_a^\infty a \, f(x) \, dx = a \cdot P(X \geq a)$$

Dividendo per $a > 0$: $P(X \geq a) \leq E[X]/a$. $\square$

**Interpretazione:** se la media di $X$ è $\mu$, allora la probabilità di superare $a = k\mu$ è al massimo $1/k$. Per es., la probabilità di valere almeno il doppio della media è al massimo $1/2$.

**Limitazione:** la disuguaglianza usa solo la media, quindi è spesso molto conservativa. La disuguaglianza di Chebyshev usa anche la varianza ed è più precisa.

---

### Disuguaglianza di Chebyshev

**Teorema (Chebyshev).** Sia $X$ una variabile aleatoria con $E[X] = \mu$ e $\text{Var}(X) = \sigma^2 < \infty$. Per ogni $t > 0$:

$$P(\lvert X - \mu \rvert \geq t) \leq \frac{\sigma^2}{t^2}$$

Equivalentemente, scrivendo $t = k\sigma$:

$$P(\lvert X - \mu \rvert \geq k\sigma) \leq \frac{1}{k^2}$$

**Dove:** $\mu = E[X]$ è la media, $\sigma^2 = \text{Var}(X)$ è la varianza, $k > 0$ è il numero di deviazioni standard, $t > 0$ è la distanza assoluta dalla media.

**Dimostrazione.** Nota che $\lvert X - \mu \rvert \geq t$ equivale a $(X - \mu)^2 \geq t^2$. La variabile $(X - \mu)^2$ è non negativa, quindi applicando Markov con $a = t^2$:

$$P\!\left((X-\mu)^2 \geq t^2\right) \leq \frac{E[(X-\mu)^2]}{t^2} = \frac{\sigma^2}{t^2} \quad \square$$

**Cosa garantisce:** almeno il $100(1 - 1/k^2)\%$ dei valori cade entro $k$ deviazioni standard dalla media — per **qualsiasi** distribuzione.

| $k$ | Chebyshev garantisce | Normale reale |
| --- | --- | --- |
| 2 | almeno 75% entro $2\sigma$ | 95.4% |
| 3 | almeno 88.9% entro $3\sigma$ | 99.7% |
| 4 | almeno 93.75% entro $4\sigma$ | 99.994% |

La Chebyshev è molto conservativa per le distribuzioni "ben concentrate" come la normale, ma è valida universalmente.

---

### Convergenza in probabilità

**Definizione.** Una successione di variabili aleatorie $Y_n$ **converge in probabilità** a $c$ (scriviamo $Y_n \xrightarrow{P} c$) se per ogni $\varepsilon > 0$:

$$\lim_{n \to \infty} P(\lvert Y_n - c \rvert > \varepsilon) = 0$$

**Interpretazione:** per $n$ grande, la probabilità che $Y_n$ sia "lontana" da $c$ diventa trascurabile — ma questo non esclude che accada in casi rari.

---

### Convergenza quasi certa

**Definizione.** Una successione $Y_n$ **converge quasi certamente** a $c$ (scriviamo $Y_n \xrightarrow{q.c.} c$) se:

$$P\!\left(\lim_{n \to \infty} Y_n = c\right) = 1$$

**Relazione:** convergenza q.c. implica convergenza in probabilità, ma non viceversa. La convergenza q.c. è più forte: garantisce che il percorso campionario stesso converge, non solo che la distribuzione si concentra.

---

### Legge Debole dei Grandi Numeri (LDGN)

**Teorema.** Siano $X_1, X_2, \ldots$ variabili aleatorie i.i.d. con $E[X_i] = \mu$ e $\text{Var}(X_i) = \sigma^2 < \infty$. La **media campionaria**:

$$\bar{X}_n = \frac{1}{n} \sum_{i=1}^n X_i$$

soddisfa $\bar{X}_n \xrightarrow{P} \mu$.

**Dimostrazione (via Chebyshev).** Calcoliamo media e varianza di $\bar{X}_n$:

$$E[\bar{X}_n] = \frac{1}{n} \sum_{i=1}^n E[X_i] = \mu$$

$$\text{Var}(\bar{X}_n) = \frac{1}{n^2} \sum_{i=1}^n \text{Var}(X_i) = \frac{\sigma^2}{n}$$

Applicando Chebyshev:

$$P(\lvert \bar{X}_n - \mu \rvert > \varepsilon) \leq \frac{\text{Var}(\bar{X}_n)}{\varepsilon^2} = \frac{\sigma^2}{n\varepsilon^2} \xrightarrow{n \to \infty} 0 \quad \square$$

---

### Legge Forte dei Grandi Numeri (LFGN)

**Teorema (Kolmogorov).** Nelle stesse ipotesi (i.i.d. con media finita; non serve la varianza finita):

$$P\!\left(\lim_{n \to \infty} \bar{X}_n = \mu\right) = 1$$

La dimostrazione richiede strumenti avanzati (lemma di Borel-Cantelli) e va oltre questo corso. La LFGN è il fondamento rigoroso della **frequenza relativa**: lanciando una moneta infinite volte, la proporzione di teste è esattamente $1/2$ con probabilità 1.

---

### Disuguaglianza di Jensen

**Definizione.** Una funzione $g$ è **convessa** su un intervallo se per ogni $x, y$ e $\lambda \in [0,1]$:

$$g(\lambda x + (1-\lambda)y) \leq \lambda g(x) + (1-\lambda) g(y)$$

Geometricamente: la corda tra due punti sta sopra il grafico.

**Teorema (Jensen).** Se $g$ è convessa e $E[\lvert X \rvert] < \infty$:

$$g(E[X]) \leq E[g(X)]$$

Se $g$ è **concava**, la disuguaglianza si inverte: $g(E[X]) \geq E[g(X)]$.

**Esempi importanti:**
- $g(x) = x^2$ convessa: $\mu^2 \leq E[X^2]$, quindi $\text{Var}(X) = E[X^2] - \mu^2 \geq 0$ ✓
- $g(x) = e^x$ convessa: $e^{E[X]} \leq E[e^X]$
- $g(x) = \ln x$ concava: $\ln(E[X]) \geq E[\ln X]$ (AM-GM generalizzata)
- $g(x) = -\ln x$ convessa: usata per derivare la disuguaglianza AM-GM

## 4. Derivazioni

### Derivazione di Chebyshev da Markov

Sia $Y = (X - \mu)^2$. Allora $Y \geq 0$ e $E[Y] = \sigma^2$. L'evento $\lvert X - \mu \rvert \geq t$ è lo stesso di $Y \geq t^2$. Applicando Markov a $Y$ con soglia $t^2$:

$$P(Y \geq t^2) \leq \frac{E[Y]}{t^2} = \frac{\sigma^2}{t^2}$$

Questo mostra che Chebyshev è semplicemente Markov applicata al quadrato dello scarto dalla media. La chiave è la scelta intelligente della variabile ausiliaria $Y = (X-\mu)^2$.

### Perché la LFGN è più forte della LDGN

Nella LDGN, per ogni $\varepsilon$ fissato la probabilità di errore tende a zero, ma gli eventi "errati" $\{\lvert \bar{X}_n - \mu \rvert > \varepsilon\}$ potrebbero continuare ad accadere per valori sparsi di $n$. La LFGN esclude questo: con probabilità 1, per ogni traiettoria campionaria, la media converge esattamente a $\mu$. La differenza è tra "la probabilità di essere lontano tende a zero" (LDGN) e "quasi tutte le traiettorie si avvicinano a $\mu$ definitivamente" (LFGN).

## 5. Esempi

**Esempio 1 (Markov di base).** Un call center gestisce in media 50 chiamate all'ora. Qual è il limite superiore alla probabilità di ricevere almeno 200 chiamate in un'ora?

$X$ = numero chiamate, $E[X] = 50$, $a = 200$.

$$P(X \geq 200) \leq \frac{50}{200} = 0.25 = 25\%$$

**Esempio 2 (Markov con moltiplicatore).** Con la stessa situazione, qual è il limite per 500 chiamate?

$$P(X \geq 500) \leq \frac{50}{500} = 0.10 = 10\%$$

**Esempio 3 (Chebyshev base).** $X$ ha media $\mu = 10$ e deviazione standard $\sigma = 2$. Limitare $P(\lvert X - 10 \rvert \geq 6)$.

Qui $t = 6 = 3\sigma$ (con $k = 3$):

$$P(\lvert X - 10 \rvert \geq 6) \leq \frac{1}{k^2} = \frac{1}{9} \approx 11.1\%$$

**Esempio 4 (Chebyshev applicata).** Il punteggio medio a un esame è 70, la varianza è 25. Quale percentuale minima di studenti ha punteggio tra 60 e 80?

$\mu = 70$, $\sigma = 5$, $t = 10 = 2\sigma$ (con $k = 2$).

$$P(\lvert X - 70 \rvert < 10) \geq 1 - \frac{1}{4} = 75\%$$

Almeno il 75% degli studenti ha punteggio nell'intervallo $[60, 80]$.

**Esempio 5 (LGN — dadi).** Si lanciano $n$ dadi. Per quale $n$ la probabilità che la media si discosti di più di 0.1 da 3.5 è inferiore al 5%?

Per un dado: $\sigma^2 = 35/12$. Chebyshev sulla media campionaria:

$$P(\lvert \bar{X}_n - 3.5 \rvert \geq 0.1) \leq \frac{\sigma^2/n}{(0.1)^2} = \frac{35}{12n \cdot 0.01} = \frac{35}{0.12n}$$

Imponendo $\leq 0.05$:

$$n \geq \frac{35}{0.12 \cdot 0.05} = \frac{35}{0.006} \approx 5833$$

Servono almeno 5833 lanci.

**Esempio 6 (Jensen — convessità).** $X$ vale $1$ o $3$ con probabilità $1/2$ ciascuno. Verificare Jensen per $g(x) = x^2$.

$E[X] = 2$, $g(E[X]) = 4$.

$E[g(X)] = E[X^2] = \frac{1}{2}(1 + 9) = 5 > 4$. ✓

**Esempio 7 (Jensen — AM-GM).** Mostrare che per $x_1, x_2 > 0$: $\sqrt{x_1 x_2} \leq \frac{x_1 + x_2}{2}$.

Sia $X$ che vale $\ln x_1$ o $\ln x_2$ equiprobabilmente. $g(t) = -t$ è lineare, ma $-\ln$ è convessa. Per Jensen applicata a $g(t) = -\ln t$:

$$-\ln\!\left(\frac{x_1 + x_2}{2}\right) \leq -\frac{\ln x_1 + \ln x_2}{2} = -\ln\sqrt{x_1 x_2}$$

Quindi $\sqrt{x_1 x_2} \leq \frac{x_1 + x_2}{2}$.

## 6. Grafico

```plot
{"fn":"1/x","domain":[0.5,5],"yDomain":[0,2],"title":"Disuguaglianza di Markov: P(X ≥ a) ≤ μ/a","label1":"μ/a (limite Markov)"}
```

## 7. Interattivo

```slider
{"fn":"sigma*sigma/(n*eps*eps)","domain":[1,500],"yDomain":[0,1],"params":[{"name":"sigma","min":0.1,"max":3,"step":0.1,"default":1},{"name":"eps","min":0.05,"max":1,"step":0.05,"default":0.2},{"name":"n","min":1,"max":500,"step":1,"default":10}],"title":"Chebyshev sulla media campionaria: P(|X̄ - μ| ≥ ε) ≤ σ²/(nε²)"}
```

## 8. Errori comuni

**Errore 1: usare Markov su variabili con segno.** Markov richiede $X \geq 0$. Se $X$ può essere negativo, non si può applicare direttamente. Soluzione: usare $\lvert X \rvert$ o $(X - c)^2$.

**Errore 2: confondere la direzione della disuguaglianza di Jensen.** Jensen dice $g(E[X]) \leq E[g(X)]$ per $g$ convessa. Per $g$ concava (come $\ln$) la disuguaglianza si inverte. Ricorda: convessa → il "peso" sulla curva spinge in su.

**Errore 3: credere che Chebyshev garantisca il 100% entro $k\sigma$.** Chebyshev dà un limite superiore alla probabilità di essere fuori dall'intervallo, non una garanzia esatta. Per la normale standard, la regola empirica $68$-$95$-$99.7$ è molto più precisa.

**Errore 4: confondere LDGN e LFGN.** La legge debole dice che per ogni $\varepsilon$ la probabilità di errore tende a zero. La legge forte dice che quasi certamente tutte le medie convergono. La LFGN è più forte: implica la LDGN ma non viceversa.

**Errore 5: applicare la LGN senza indipendenza.** La LGN richiede che le $X_i$ siano i.i.d. (o almeno non correlate). Se le osservazioni sono dipendenti (es. serie temporali con autocorrelazione forte), la LGN può non valere.

**Errore 6: credere che la LGN si applichi a ogni traiettoria.** La LFGN dice che l'insieme delle traiettorie che non convergono ha probabilità zero — ma non dice che è impossibile avere una traiettoria divergente. Esistono, ma hanno misura nulla.

**Errore 7: usare Chebyshev come se fosse stretta.** $P(\lvert X - \mu \rvert \geq k\sigma) \leq 1/k^2$ è un limite superiore. Per la distribuzione di Pareto pesante o per certi esempi estremi, il limite è quasi raggiunto, ma in generale la distribuzione reale è molto più concentrata.

## 9. Applicazioni reali

**Assicurazioni e finanza.** Le compagnie assicurative usano la LGN per fissare i premi: con milioni di assicurati, il costo medio per sinistro converge al valore atteso, rendendo prevedibili i costi totali. Senza la LGN, il business assicurativo sarebbe impossibile.

**Algoritmi di Monte Carlo.** I metodi di campionamento stocastico (usati in fisica, finanza, machine learning) si basano sulla LGN: la media di $n$ campioni i.i.d. converge al valore atteso dell'integrando. Chebyshev fornisce la garanzia di accuratezza in funzione del numero di campioni.

**Statistiche descrittive robuste.** Chebyshev è usata in audit statistici e controllo qualità: se si sa solo media e deviazione standard di un processo, Chebyshev fornisce limiti garantiti sulla frequenza di valori anomali, senza assumere una forma distributiva.

**Machine learning — generalizzazione.** Le disuguaglianze di concentrazione (generalizzazioni di Chebyshev) sono alla base della teoria PAC-learning. Dicono quanti esempi di addestramento servono per garantire che un classificatore abbia bassa probabilità di errore su dati nuovi.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Markov | $P(X \geq a) \leq E[X]/a$ | Richiede $X \geq 0$, usa solo la media |
| Chebyshev | $P(\lvert X-\mu \rvert \geq k\sigma) \leq 1/k^2$ | Qualsiasi distribuzione, usa $\mu$ e $\sigma^2$ |
| LDGN | $\bar{X}_n \xrightarrow{P} \mu$ | Convergenza in probabilità |
| LFGN | $P(\lim_n \bar{X}_n = \mu) = 1$ | Convergenza quasi certa, più forte |
| Jensen (convessa) | $g(E[X]) \leq E[g(X)]$ | $g'' \geq 0 \Rightarrow$ convessa |
| Jensen (concava) | $g(E[X]) \geq E[g(X)]$ | $g'' \leq 0 \Rightarrow$ concava |
| Var media camp. | $\text{Var}(\bar{X}_n) = \sigma^2/n$ | Chiave per la dimostrazione della LDGN |

## 11. Esercizi

<details>
<summary>Esercizio 1: Markov — ore di attesa</summary>

Il tempo medio di attesa in una coda è 8 minuti. Usando Markov, dare un limite superiore alla probabilità di aspettare più di 40 minuti.

**Soluzione.**

$X$ = tempo di attesa $\geq 0$, $E[X] = 8$, $a = 40$.

$$P(X \geq 40) \leq \frac{E[X]}{a} = \frac{8}{40} = 0.20 = 20\%$$

La probabilità di aspettare più di 40 minuti è al massimo il 20%.

</details>

<details>
<summary>Esercizio 2: Chebyshev — punteggio esame</summary>

I voti a un esame hanno media 70 e varianza 100. Determinare il limite superiore per $P(\lvert X - 70 \rvert \geq 20)$.

**Soluzione.**

$\mu = 70$, $\sigma^2 = 100$, $\sigma = 10$, $t = 20 = 2\sigma$, $k = 2$.

$$P(\lvert X - 70 \rvert \geq 20) \leq \frac{\sigma^2}{t^2} = \frac{100}{400} = 0.25 = 25\%$$

Equivalentemente: almeno il 75% degli studenti ha voto tra 50 e 90.

</details>

<details>
<summary>Esercizio 3: Chebyshev — rendimento investimento</summary>

Il rendimento annuo di un portafoglio ha media 8% e deviazione standard 4%. Dare un limite alla probabilità che il rendimento differisca dalla media di più di 12 punti percentuali.

**Soluzione.**

$t = 12\%$, $\sigma = 4\%$, $k = t/\sigma = 3$.

$$P(\lvert X - 8 \rvert \geq 12) \leq \frac{1}{k^2} = \frac{1}{9} \approx 11.1\%$$

Almeno l'88.9% degli anni, il rendimento è tra $-4\%$ e $+20\%$.

</details>

<details>
<summary>Esercizio 4: LGN — numero di campioni necessari</summary>

Una VA ha $\mu = 5$ e $\sigma = 2$. Quante osservazioni i.i.d. servono perché $P(\lvert \bar{X}_n - 5 \rvert \geq 0.5) \leq 0.04$?

**Soluzione.**

Per Chebyshev: $P(\lvert \bar{X}_n - \mu \rvert \geq \varepsilon) \leq \sigma^2/(n\varepsilon^2)$.

$$\frac{\sigma^2}{n\varepsilon^2} \leq 0.04 \implies n \geq \frac{\sigma^2}{0.04 \cdot \varepsilon^2} = \frac{4}{0.04 \cdot 0.25} = \frac{4}{0.01} = 400$$

Servono almeno 400 osservazioni.

</details>

<details>
<summary>Esercizio 5: Jensen — valore atteso di radice quadrata</summary>

Sia $X$ con $E[X] = 9$. Dimostrare che $E[\sqrt{X}] \leq 3$.

**Soluzione.**

$g(x) = \sqrt{x}$ è concava per $x > 0$ (poiché $g''(x) = -\frac{1}{4} x^{-3/2} < 0$).

Per Jensen con $g$ concava: $g(E[X]) \geq E[g(X)]$, cioè:

$$\sqrt{E[X]} \geq E[\sqrt{X}] \implies E[\sqrt{X}] \leq \sqrt{9} = 3 \quad \square$$

</details>

<details>
<summary>Esercizio 6: Jensen — diseguaglianza AM-GM</summary>

Usando Jensen, dimostrare la disuguaglianza media geometrica $\leq$ media aritmetica per numeri positivi $x_1, \ldots, x_n$: $(x_1 \cdots x_n)^{1/n} \leq \frac{x_1 + \cdots + x_n}{n}$.

**Soluzione.**

Sia $X$ una variabile aleatoria discreta uniforme sui valori $\ln x_1, \ldots, \ln x_n$.

$g(t) = e^t$ è convessa, quindi per Jensen: $e^{E[t]} \leq E[e^t]$, cioè:

$$e^{\frac{\ln x_1 + \cdots + \ln x_n}{n}} \leq \frac{e^{\ln x_1} + \cdots + e^{\ln x_n}}{n}$$

Il lato sinistro è $e^{\ln(x_1 \cdots x_n)^{1/n}} = (x_1 \cdots x_n)^{1/n}$. Il lato destro è $\frac{x_1 + \cdots + x_n}{n}$. $\square$

</details>

<details>
<summary>Esercizio 7: LDGN — frequenza relativa</summary>

Una moneta non bilanciata ha $P(\text{testa}) = p = 0.3$. Sia $\hat{p}_n$ la proporzione di teste in $n$ lanci. Per quale $n$ vale $P(\lvert \hat{p}_n - 0.3 \rvert \geq 0.05) \leq 0.01$?

**Soluzione.**

Ogni lancio $X_i \sim \text{Bernoulli}(0.3)$: $E[X_i] = 0.3$, $\text{Var}(X_i) = 0.3 \times 0.7 = 0.21$.

Per Chebyshev sulla media:

$$P(\lvert \hat{p}_n - 0.3 \rvert \geq 0.05) \leq \frac{0.21}{n \cdot (0.05)^2} = \frac{0.21}{0.0025 n}$$

Imponendo $\leq 0.01$:

$$n \geq \frac{0.21}{0.0025 \times 0.01} = \frac{0.21}{0.000025} = 8400$$

Servono almeno 8400 lanci.

</details>

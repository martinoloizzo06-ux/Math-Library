---
id: finanza-04-markowitz
subject: finanza
topic_it: Teoria del portafoglio
topic_en: Portfolio theory
title_it: Teoria del portafoglio di Markowitz
title_en: Markowitz portfolio theory
level: purple
order: 4
source_book: "Bodie, Kane & Marcus, Investments; J.C. Hull, Options, Futures and Other Derivatives"
source_chapter: "Cap. 7–8 — Portafoglio"
---

## 1. Intuizione — analogia concreta

Immagina di investire tutti i risparmi in una sola azienda. Se quella azienda fallisce, perdi tutto. Ora immagina di dividerli tra dieci aziende di settori diversi: anche se tre vanno male, le altre sette possono compensare. Questa è l'intuizione della **diversificazione**: non mettere tutte le uova nello stesso paniere.

Harry Markowitz, nel 1952, formalizzò questa intuizione in un framework matematico preciso che rivoluzionò la gestione degli investimenti. Prima di lui, gli investitori pensavano solo al rendimento di ciascun asset singolarmente. Markowitz dimostrò che ciò che conta è come gli asset si muovono **insieme** — la loro correlazione. Due asset molto correlati non si diversificano; due asset che si muovono in direzioni opposte si compensano e riducono il rischio complessivo.

Il contributo centrale di Markowitz è la **frontiera efficiente**: l'insieme dei portafogli che offrono il massimo rendimento per ogni dato livello di rischio. Nessun investitore razionale dovrebbe scegliere un portafoglio che si trova all'interno di questa frontiera, perché esisterebbe un altro portafoglio con uguale rischio ma rendimento maggiore (o ugual rendimento ma rischio minore).

Questa teoria è il fondamento della moderna finanza quantitativa, del CAPM, degli ETF e di ogni strategia di allocazione sistematica degli asset. Capire Markowitz significa capire perché la diversificazione non è solo una buona idea — è matematicamente dimostrabile che riduce il rischio senza necessariamente ridurre il rendimento.

## 2. Prerequisiti

- Valore atteso e varianza di una variabile aleatoria
- Covarianza e correlazione tra variabili aleatorie
- Algebra lineare: vettori, matrici, moltiplicazione matriciale
- Concetto di ottimizzazione vincolata (Lagrangiani, opzionale)
- Nozioni base di rendimenti finanziari (rendimento percentuale, rendimento atteso)

## 3. Teoria

### Rendimento e rischio di un singolo asset

Il **rendimento** di un asset nel periodo $t$ è:

$$R_t = \frac{P_t - P_{t-1} + D_t}{P_{t-1}}$$

dove $P_t$ è il prezzo al tempo $t$ e $D_t$ il dividendo incassato. Il **rendimento atteso** (media storica o stima) è $E[R] = \mu$, e il **rischio** è misurato dalla deviazione standard $\sigma = \sqrt{\text{Var}(R)}$.

### Portafoglio di $n$ asset

Un portafoglio è definito dai **pesi** $w_i$ assegnati a ciascun asset $i = 1, \ldots, n$, con il vincolo di bilancio:

$$\sum_{i=1}^n w_i = 1$$

I pesi possono essere negativi (vendita allo scoperto).

**Rendimento atteso del portafoglio:**

$$E[R_p] = \sum_{i=1}^n w_i E[R_i] = \mathbf{w}'\boldsymbol{\mu}$$

dove $\mathbf{w} = (w_1, \ldots, w_n)'$ è il vettore dei pesi e $\boldsymbol{\mu} = (\mu_1, \ldots, \mu_n)'$ il vettore dei rendimenti attesi.

**Varianza del portafoglio:**

$$\sigma_p^2 = \sum_{i=1}^n \sum_{j=1}^n w_i w_j \sigma_{ij} = \mathbf{w}' \Sigma \mathbf{w}$$

dove $\Sigma$ è la **matrice di covarianza** con $\sigma_{ij} = \text{Cov}(R_i, R_j)$. Gli elementi diagonali sono $\sigma_{ii} = \sigma_i^2$ (varianze), gli elementi fuori diagonale sono covarianze.

**Con due asset** (caso più intuitivo):

$$\sigma_p^2 = w_1^2 \sigma_1^2 + w_2^2 \sigma_2^2 + 2 w_1 w_2 \rho_{12} \sigma_1 \sigma_2$$

dove $\rho_{12} = \sigma_{12} / (\sigma_1 \sigma_2) \in [-1, 1]$ è il **coefficiente di correlazione** tra i due asset.

### Effetto della correlazione sulla diversificazione

Il termine $2 w_1 w_2 \rho_{12} \sigma_1 \sigma_2$ è il cuore della diversificazione:

- Se $\rho_{12} = 1$: nessuna diversificazione, $\sigma_p = w_1 \sigma_1 + w_2 \sigma_2$ (media ponderata).
- Se $\rho_{12} = 0$: diversificazione parziale, $\sigma_p^2 = w_1^2 \sigma_1^2 + w_2^2 \sigma_2^2$.
- Se $\rho_{12} = -1$: diversificazione perfetta, è possibile costruire un portafoglio a rischio zero.

**Teorema:** se $\rho_{12} < 1$, allora per qualunque coppia di pesi positivi $\sigma_p < w_1 \sigma_1 + w_2 \sigma_2$. Il portafoglio è meno rischioso della media ponderata delle deviazioni standard — questo è il **beneficio della diversificazione**.

### Portafoglio a varianza minima (MVP)

Con due asset, minimizzare $\sigma_p^2$ rispetto a $w_1$ (con $w_2 = 1 - w_1$) dà:

$$w_1^* = \frac{\sigma_2^2 - \rho_{12} \sigma_1 \sigma_2}{\sigma_1^2 + \sigma_2^2 - 2\rho_{12} \sigma_1 \sigma_2}$$

Il peso $w_1^*$ è maggiore quando l'asset 1 è meno rischioso (piccolo $\sigma_1$) o quando la correlazione è bassa.

### Frontiera efficiente

Nello spazio $(\sigma_p, E[R_p])$, al variare dei pesi $\mathbf{w}$, si ottiene una nuvola di portafogli possibili. La **frontiera efficiente** è il bordo superiore sinistro di questa nuvola: per ogni livello di rischio $\sigma$, è il portafoglio con il **massimo rendimento atteso**.

Formalmente, la frontiera efficiente è la soluzione al programma di ottimizzazione:

$$\max_{\mathbf{w}} \; E[R_p] = \mathbf{w}'\boldsymbol{\mu} \quad \text{s.t.} \quad \mathbf{w}'\Sigma\mathbf{w} = \bar{\sigma}^2, \quad \mathbf{w}'\mathbf{1} = 1$$

per ogni target di rischio $\bar{\sigma}^2$. La soluzione esplicita richiede il metodo dei moltiplicatori di Lagrange.

### Capital Market Line (CML) e portafoglio tangente

Se esiste un **asset privo di rischio** con rendimento $r_f$ (es. titoli di Stato tedeschi), la frontiera si espande. Un investitore può combinare $r_f$ con qualunque portafoglio rischioso ottenendo una linea retta nel piano $(\sigma, E[R])$.

La retta **migliore** è quella tangente alla frontiera efficiente, la **Capital Market Line (CML)**:

$$E[R_p] = r_f + \frac{E[R_m] - r_f}{\sigma_m} \cdot \sigma_p$$

Il termine $\frac{E[R_m] - r_f}{\sigma_m}$ è lo **Sharpe ratio** del portafoglio di mercato: misura il rendimento extra per unità di rischio.

Il punto di tangenza è il **portafoglio di mercato** $M$: secondo il CAPM, in equilibrio tutti gli investitori detengono una combinazione di $r_f$ e $M$, e $M$ è l'indice di mercato globale.

**Indice di Sharpe** per un generico portafoglio:

$$SR_p = \frac{E[R_p] - r_f}{\sigma_p}$$

Più alto è lo Sharpe ratio, migliore è il rendimento aggiustato per il rischio.

## 4. Derivazioni

### Derivazione del peso ottimo a varianza minima (due asset)

Scriviamo $\sigma_p^2$ come funzione di $w_1$:

$$\sigma_p^2 = w_1^2 \sigma_1^2 + (1-w_1)^2 \sigma_2^2 + 2 w_1 (1-w_1) \rho_{12} \sigma_1 \sigma_2$$

Derivo rispetto a $w_1$ e pongo uguale a zero:

$$\frac{d\sigma_p^2}{dw_1} = 2 w_1 \sigma_1^2 - 2(1-w_1)\sigma_2^2 + 2(1-2w_1)\rho_{12}\sigma_1\sigma_2 = 0$$

Raccogliendo i termini in $w_1$:

$$w_1(2\sigma_1^2 + 2\sigma_2^2 - 4\rho_{12}\sigma_1\sigma_2) = 2\sigma_2^2 - 2\rho_{12}\sigma_1\sigma_2$$

$$\boxed{w_1^* = \frac{\sigma_2^2 - \rho_{12}\sigma_1\sigma_2}{\sigma_1^2 + \sigma_2^2 - 2\rho_{12}\sigma_1\sigma_2}}$$

### Varianza con $n$ asset a pesi uguali

Con $n$ asset identici ($\sigma_i^2 = \sigma^2$, $\text{Cov}_{ij} = \bar{\sigma}$ per $i \neq j$) e pesi uguali $w_i = 1/n$:

$$\sigma_p^2 = n \cdot \frac{1}{n^2} \sigma^2 + n(n-1) \cdot \frac{1}{n^2} \bar{\sigma} = \frac{\sigma^2}{n} + \frac{(n-1)}{n}\bar{\sigma}$$

Per $n \to \infty$: $\sigma_p^2 \to \bar{\sigma}$ — la diversificazione elimina il **rischio idiosincratico** ($\sigma^2/n \to 0$) ma non il **rischio sistematico** $\bar{\sigma}$ (la covarianza media).

Questo dimostra matematicamente che un portafoglio sufficientemente ampio elimina il rischio specifico delle singole aziende, ma rimane esposto ai movimenti del mercato nel suo complesso.

## 5. Esempi

**Esempio 1 — Rendimento e rischio portafoglio 50/50**

Asset A: $E[R_A] = 8\%$, $\sigma_A = 10\%$. Asset B: $E[R_B] = 12\%$, $\sigma_B = 20\%$. Correlazione $\rho = 0.3$. Pesi uguali $w_A = w_B = 0.5$.

$E[R_p] = 0.5 \times 8\% + 0.5 \times 12\% = 10\%$

$\sigma_p^2 = (0.5)^2 \times 100 + (0.5)^2 \times 400 + 2 \times 0.5 \times 0.5 \times 0.3 \times 10 \times 20$
$= 25 + 100 + 30 = 155$

$\sigma_p = \sqrt{155} \approx 12.45\%$

La media ponderata delle deviazioni sarebbe $0.5 \times 10 + 0.5 \times 20 = 15\%$. Il portafoglio ha rischio **12.45% < 15%**: beneficio della diversificazione di 2.55 punti percentuali.

---

**Esempio 2 — Portafoglio a varianza minima**

Con i dati dell'esempio 1, troviamo il portafoglio MVP:

$$w_A^* = \frac{400 - 0.3 \times 10 \times 20}{100 + 400 - 2 \times 0.3 \times 10 \times 20} = \frac{400 - 60}{500 - 120} = \frac{340}{380} \approx 89.5\%$$

$w_B^* = 10.5\%$. Il portafoglio a varianza minima mette quasi tutto nell'asset meno rischioso (A). Questo è controintuitivo: pur rinunciando a parte del rendimento, si minimizza il rischio.

$\sigma_{MVP}^2 = (0.895)^2 \times 100 + (0.105)^2 \times 400 + 2 \times 0.895 \times 0.105 \times 0.3 \times 200$
$\approx 80.1 + 4.41 + 11.26 = 95.77$, $\sigma_{MVP} \approx 9.79\%$

---

**Esempio 3 — Effetto della correlazione**

Stesso esempio, ma variamo $\rho$ mantenendo pesi 50/50:

| Correlazione $\rho$ | $\sigma_p$ |
| --- | --- |
| $\rho = 1$ | $15.00\%$ (nessuna diversificazione) |
| $\rho = 0.3$ | $12.45\%$ |
| $\rho = 0$ | $11.18\%$ |
| $\rho = -0.5$ | $8.66\%$ |
| $\rho = -1$ | $5.00\%$ (massima diversificazione) |

Più bassa è la correlazione, maggiore è il beneficio della diversificazione.

---

**Esempio 4 — Diversificazione con $n$ asset**

Portafoglio equi-pesato di $n$ azioni italiane, ciascuna con $\sigma^2 = 400\%^2$ e covarianza media $\bar{\sigma} = 100\%^2$.

| $n$ | $\sigma_p$ |
| --- | --- |
| 1 | $20.00\%$ |
| 5 | $14.14\%$ |
| 10 | $12.25\%$ |
| 30 | $11.07\%$ |
| $\infty$ | $10.00\%$ (= $\sqrt{100}$) |

Con 30 azioni si cattura quasi tutto il beneficio della diversificazione; oltre, il guadagno marginale è minimo.

---

**Esempio 5 — Indice di Sharpe**

Portafoglio P: $E[R_p] = 12\%$, $\sigma_p = 15\%$. Tasso risk-free $r_f = 3\%$.

$SR_P = \frac{12\% - 3\%}{15\%} = \frac{9\%}{15\%} = 0.60$

Portafoglio Q: $E[R_Q] = 10\%$, $\sigma_Q = 8\%$. $SR_Q = \frac{7\%}{8\%} = 0.875$

Q ha rendimento assoluto minore, ma Sharpe ratio maggiore: per ogni unità di rischio assunta, Q remunera di più. Un investitore razionale preferisce Q.

---

**Esempio 6 — CML e allocazione ottimale**

Portafoglio di mercato $M$: $E[R_m] = 10\%$, $\sigma_m = 15\%$. Risk-free $r_f = 3\%$. Un investitore vuole $\sigma_p = 10\%$.

La CML dice: $E[R_p] = 3\% + \frac{10\% - 3\%}{15\%} \times 10\% = 3\% + 4.67\% = 7.67\%$

Per ottenere $\sigma_p = 10\%$, investe una quota $\alpha = 10\%/15\% = 66.7\%$ in $M$ e il restante $33.3\%$ in $r_f$.

---

**Esempio 7 — Correlazione negativa e hedge naturale**

Una compagnia aerea (costi energetici alti) e una compagnia petrolifera: storicamente la correlazione è negativa. Portafoglio 50/50 con $\rho = -0.6$:

$\sigma_p^2 = 0.25 \times \sigma_A^2 + 0.25 \times \sigma_P^2 + 2 \times 0.5 \times 0.5 \times (-0.6) \times \sigma_A \times \sigma_P$

Il termine di covarianza è negativo: riduce significativamente la varianza del portafoglio. Questo è un esempio di "hedge naturale" — due aziende con business opposti si compensano.

## 6. Grafico

```plot
{"fn":"0.5*x+1","fn2":"-0.3*x*x+3.5","domain":[0,5],"yDomain":[0,4],"title":"Frontiera efficiente: rischio vs rendimento atteso","label1":"CML (linea retta)","label2":"Frontiera efficiente (curva)","color":"steelblue","color2":"tomato","xLabel":"Rischio σ","yLabel":"E[R]"}
```

## 7. Interattivo

```slider
{"fn":"Math.sqrt(w*w*sigma1*sigma1+(1-w)*(1-w)*sigma2*sigma2+2*w*(1-w)*rho*sigma1*sigma2)","domain":[0,1],"yDomain":[0,25],"params":[{"name":"sigma1","min":5,"max":25,"step":1,"default":10},{"name":"sigma2","min":5,"max":25,"step":1,"default":20},{"name":"rho","min":-100,"max":100,"step":10,"default":30}],"title":"Deviazione standard portafoglio al variare del peso w in asset A (rho in centesimi, es. 30 = 0.30)"}
```

## 8. Errori comuni

**Errore 1 — Confondere varianza e deviazione standard.**
La varianza del portafoglio non è la media ponderata delle varianze: bisogna includere le covarianze. Solo la deviazione standard segue (approssimativamente) la media ponderata, e solo quando $\rho = 1$.

**Errore 2 — Ignorare il segno della correlazione.**
Molti studenti usano la formula $\sigma_p^2 = w_1^2\sigma_1^2 + w_2^2\sigma_2^2$ dimenticando il termine $2w_1w_2\rho\sigma_1\sigma_2$. Con $\rho$ negativo, questo termine riduce ulteriormente il rischio — un errore di segno stravolta il risultato.

**Errore 3 — Pensare che più asset significhi sempre meno rischio.**
La diversificazione riduce solo il rischio idiosincratico. Se si aggiungono asset altamente correlati (es. tutte banche italiane), si aumenta il numero di posizioni senza beneficio reale. La diversificazione efficace richiede bassa correlazione tra asset.

**Errore 4 — Confondere la frontiera efficiente con la frontiera completa.**
La frontiera completa include anche la parte "inferiore" (sotto il portafoglio a varianza minima), dove per ogni dato rischio esiste un portafoglio con rendimento maggiore. Solo la parte superiore è "efficiente" nel senso di Markowitz.

**Errore 5 — Usare le correlazioni storiche come se fossero stabili.**
Le correlazioni cambiano nel tempo, specialmente durante le crisi: in mercati in caduta libera, molti asset che sembravano diversificati si muovono insieme (correlazione sale verso 1). Il portafoglio di Markowitz ottimale per il passato può non esserlo per il futuro.

**Errore 6 — Confondere lo Sharpe ratio con il rendimento.**
Un portafoglio con Sharpe ratio alto non è necessariamente quello con il rendimento più alto — ha il rendimento **aggiustato per il rischio** più alto. Un investitore con alta tolleranza al rischio potrebbe preferire un portafoglio con Sharpe ratio minore ma rendimento atteso maggiore.

**Errore 7 — Dimenticare il vincolo di bilancio.**
In un portafoglio a due asset, se $w_1 = 0.895$, allora $w_2 = 1 - 0.895 = 0.105$, non $w_2 = 0.895$. Spesso si dimentica di usare il vincolo $\sum w_i = 1$ per ricavare i pesi rimanenti.

## 9. Applicazioni reali

**Gestione fondi pensione:** i fondi pensione allocano tra azioni, obbligazioni, real estate e materie prime seguendo la logica di Markowitz. La bassa correlazione tra obbligazioni e azioni (storicamente negativa nelle crisi) riduce la volatilità del portafoglio complessivo.

**ETF e portafogli indice:** gli ETF multi-asset come il portafoglio 60/40 (60% azioni, 40% obbligazioni) sono implementazioni pratiche della frontiera efficiente, approssimando il portafoglio di mercato con costi bassi.

**Risk management bancario:** le banche usano la teoria del portafoglio per calcolare il VaR (Value at Risk) aggregato dei loro book di trading, tenendo conto delle correlazioni tra posizioni in diverse asset class e geografie.

**Hedge fund:** i fondi hedge cercano asset con bassa correlazione con il mercato (es. strategie market-neutral) per ottenere rendimenti positivi indipendentemente dalla direzione del mercato — il massimo della logica di diversificazione.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Rendimento atteso portafoglio | $E[R_p] = \mathbf{w}'\boldsymbol{\mu}$ | Lineare nei pesi |
| Varianza portafoglio | $\sigma_p^2 = \mathbf{w}'\Sigma\mathbf{w}$ | Quadratica, include covarianze |
| Varianza 2 asset | $w_1^2\sigma_1^2 + w_2^2\sigma_2^2 + 2w_1w_2\rho\sigma_1\sigma_2$ | Termine covarianza cruciale |
| Peso MVP (2 asset) | $w_1^* = \frac{\sigma_2^2 - \rho\sigma_1\sigma_2}{\sigma_1^2+\sigma_2^2-2\rho\sigma_1\sigma_2}$ | Minima varianza |
| CML | $E[R_p] = r_f + SR_m \cdot \sigma_p$ | Con asset risk-free |
| Sharpe ratio | $SR = (E[R_p]-r_f)/\sigma_p$ | Rendimento per unità di rischio |
| Diversificazione limite | $\sigma_p^2 \to \bar{\sigma}$ per $n\to\infty$ | Resta rischio sistematico |

## 11. Esercizi

<details>
<summary>Esercizio 1: Portafoglio di due asset — rendimento e rischio</summary>

Asset Tech: $E[R] = 15\%$, $\sigma = 25\%$. Asset Bond: $E[R] = 4\%$, $\sigma = 8\%$. Correlazione $\rho = -0.2$. Portafoglio 70% Tech / 30% Bond.

Calcola $E[R_p]$ e $\sigma_p$.

**Soluzione:**

$E[R_p] = 0.7 \times 15\% + 0.3 \times 4\% = 10.5\% + 1.2\% = 11.7\%$

$\sigma_p^2 = (0.7)^2 \times 625 + (0.3)^2 \times 64 + 2 \times 0.7 \times 0.3 \times (-0.2) \times 25 \times 8$
$= 306.25 + 5.76 - 16.8 = 295.21$

$\sigma_p = \sqrt{295.21} \approx 17.18\%$

Media ponderata delle deviazioni: $0.7 \times 25 + 0.3 \times 8 = 17.5 + 2.4 = 19.9\%$. La diversificazione risparmia circa 2.7 punti percentuali di rischio.

</details>

<details>
<summary>Esercizio 2: Portafoglio a varianza minima</summary>

Con i dati dell'esercizio 1, trova il portafoglio a varianza minima.

**Soluzione:**

$w_{Tech}^* = \frac{\sigma_{Bond}^2 - \rho \cdot \sigma_{Tech} \cdot \sigma_{Bond}}{\sigma_{Tech}^2 + \sigma_{Bond}^2 - 2\rho \cdot \sigma_{Tech} \cdot \sigma_{Bond}}$

$= \frac{64 - (-0.2) \times 25 \times 8}{625 + 64 - 2 \times (-0.2) \times 25 \times 8}$

$= \frac{64 + 40}{625 + 64 + 80} = \frac{104}{769} \approx 13.5\%$

$w_{Bond}^* = 86.5\%$

Il portafoglio MVP ha quasi tutto in obbligazioni. $E[R_{MVP}] = 0.135 \times 15 + 0.865 \times 4 = 2.025 + 3.46 = 5.49\%$ — basso rendimento, basso rischio.

</details>

<details>
<summary>Esercizio 3: Sharpe ratio comparativo</summary>

Dati: $r_f = 2\%$. Portfolio A: $E[R] = 10\%$, $\sigma = 12\%$. Portfolio B: $E[R] = 14\%$, $\sigma = 20\%$. Quale è preferibile per un investitore razionale medio-varianza?

**Soluzione:**

$SR_A = (10\% - 2\%) / 12\% = 8/12 = 0.667$

$SR_B = (14\% - 2\%) / 20\% = 12/20 = 0.600$

Il portfolio A ha Sharpe ratio maggiore: offre rendimento extra per unità di rischio superiore. Un investitore che vuole il rendimento di B potrebbe prendere A con leva finanziaria: investendo 1.67 in A (con 0.67 di leva), ottiene $E[R] = 2\% + 1.67 \times 8\% = 15.3\%$ con $\sigma = 1.67 \times 12\% = 20\%$ — più rendimento di B con uguale rischio.

</details>

<details>
<summary>Esercizio 4: Diversificazione con correlazione zero</summary>

Dieci asset identici: $E[R_i] = 8\%$, $\sigma_i = 20\%$, $\rho_{ij} = 0$ per $i \neq j$. Portafoglio equi-pesato. Calcola $\sigma_p$.

**Soluzione:**

Con $n = 10$, $w_i = 0.1$:

$\sigma_p^2 = 10 \times (0.1)^2 \times (20)^2 + 0 = 10 \times 0.01 \times 400 = 40$

$\sigma_p = \sqrt{40} = 6.32\%$

Con un solo asset: $\sigma = 20\%$. Con 10 asset non correlati: $\sigma_p = 20\%/\sqrt{10} = 6.32\%$. La diversificazione ha ridotto il rischio del 68%!

</details>

<details>
<summary>Esercizio 5: Capital Market Line</summary>

Portafoglio di mercato: $E[R_m] = 9\%$, $\sigma_m = 16\%$. Risk-free $r_f = 2\%$. Un investitore vuole un rendimento atteso del 12%.

Quanta leva deve usare? Qual è il rischio del suo portafoglio?

**Soluzione:**

Dalla CML: $12\% = 2\% + \frac{9\% - 2\%}{16\%} \times \sigma_p$

$10\% = 0.4375 \times \sigma_p$

$\sigma_p = 10\% / 0.4375 = 22.86\%$

Il peso in $M$: $\alpha = \sigma_p / \sigma_m = 22.86\% / 16\% = 1.43$

L'investitore investe il 143% in $M$ e prende a prestito il 43% al tasso $r_f$. Verifica: $E[R_p] = (1-1.43) \times 2\% + 1.43 \times 9\% = -0.86\% + 12.87\% = 12.01\%$ ✓

</details>

<details>
<summary>Esercizio 6: Matrice di covarianza e varianza portafoglio</summary>

Tre asset con vettore dei pesi $\mathbf{w} = (0.5, 0.3, 0.2)'$ e matrice di covarianza (in $\%^2$):

$$\Sigma = \begin{pmatrix} 100 & 40 & 20 \\ 40 & 225 & 60 \\ 20 & 60 & 64 \end{pmatrix}$$

Calcola $\sigma_p^2 = \mathbf{w}'\Sigma\mathbf{w}$.

**Soluzione:**

$\Sigma\mathbf{w} = \begin{pmatrix} 0.5 \times 100 + 0.3 \times 40 + 0.2 \times 20 \\ 0.5 \times 40 + 0.3 \times 225 + 0.2 \times 60 \\ 0.5 \times 20 + 0.3 \times 60 + 0.2 \times 64 \end{pmatrix} = \begin{pmatrix} 50+12+4 \\ 20+67.5+12 \\ 10+18+12.8 \end{pmatrix} = \begin{pmatrix} 66 \\ 99.5 \\ 40.8 \end{pmatrix}$

$\sigma_p^2 = \mathbf{w}'\Sigma\mathbf{w} = 0.5 \times 66 + 0.3 \times 99.5 + 0.2 \times 40.8 = 33 + 29.85 + 8.16 = 71.01\%^2$

$\sigma_p = \sqrt{71.01} \approx 8.43\%$

</details>

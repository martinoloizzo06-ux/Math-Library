---
id: statistica-07-test-chi-f
subject: statistica
topic_it: Test di ipotesi
topic_en: Hypothesis testing
title_it: Test chi-quadro e test F
title_en: Chi-square and F tests
level: purple
order: 7
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 10 — Test non parametrici e varianze"
stato: da-rielaborare
---

## 1. Intuizione — analogia concreta + perché si studia

Immagina di lanciare un dado 600 volte e di voler verificare se è truccato. Non ti interessa la media dei risultati, ma la **distribuzione** — se le sei facce escono ciascuna circa 100 volte. Come misuri quanto la distribuzione osservata si discosta da quella teorica?

Karl Pearson risolse questo problema nel 1900 con la statistica chi-quadro ($\chi^2$): somma i quadrati degli scarti tra frequenze osservate e attese, normalizzati per le attese. Questa quantità segue (approssimativamente) una distribuzione chi-quadro, che permette di calcolare il p-value.

Il test $\chi^2$ di **bontà di adattamento** risponde a: "i miei dati seguono questa distribuzione teorica?" Il test $\chi^2$ di **indipendenza** risponde a: "queste due variabili categoriali sono associate?" Entrambi sono fondamentali in biologia, sociologia, genetica e scienze sociali dove i dati sono spesso categoriali.

Il **test F** affronta un problema diverso: confrontare le variabilità di due gruppi. Se vuoi sapere se la produzione di un macchinario è più stabile di un altro (non solo la media, ma la varianza), hai bisogno del test F. La statistica F è il rapporto tra due varianze campionarie, e sotto $H_0$ segue una distribuzione F di Fisher-Snedecor.

Questi test completano il kit base dello statistico: con test Z e t confrontiamo medie, con $\chi^2$ valutiamo distribuzioni categoriali e adattamento, con F confrontiamo varianze.

## 2. Prerequisiti

- Variabili casuali discrete e distribuzioni di probabilità
- Test di ipotesi: ipotesi, statistica test, p-value (lezione 05)
- Distribuzione $\chi^2$ (chi-quadro): definizione e proprietà
- Distribuzione F di Fisher-Snedecor
- Tavole di contingenza e frequenze attese/osservate
- Distribuzione t e test t (lezione 06), da cui deriva la F

## 3. Teoria — definizioni precise e teoremi commentati

### La distribuzione chi-quadro

Se $Z_1, \ldots, Z_k \sim N(0,1)$ sono indipendenti, allora:
$$\chi^2 = Z_1^2 + Z_2^2 + \cdots + Z_k^2 \sim \chi^2(k)$$

La distribuzione $\chi^2(k)$ ha:
- Media $k$
- Varianza $2k$
- È sempre $\geq 0$ (è una somma di quadrati)
- Per $k=1$: coincide con il quadrato di una normale standard
- Per $k$ grande: si approssima alla normale per il TLC

Risultato chiave: se $X_1,\ldots,X_n \sim N(\mu,\sigma^2)$, allora:
$$\frac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)$$

### Test chi-quadro di bontà di adattamento (Goodness-of-fit)

**Contesto:** $n$ osservazioni categoriali suddivise in $k$ categorie. Frequenze osservate $O_1, \ldots, O_k$ con $\sum O_i = n$. Vogliamo testare se la distribuzione segue le probabilità teoriche $p_1^0, \ldots, p_k^0$.

**Ipotesi:**
$$H_0: P(\text{categoria }i) = p_i^0 \quad \forall i=1,\ldots,k$$

**Frequenze attese** sotto $H_0$: $E_i = n \cdot p_i^0$.

**Statistica test di Pearson:**
$$\chi^2 = \sum_{i=1}^k \frac{(O_i - E_i)^2}{E_i}$$

Sotto $H_0$, per $n$ grande: $\chi^2 \approx \chi^2(k-1)$.

I gradi di libertà sono $k-1$ (non $k$) perché $\sum O_i = n$ impone un vincolo: note $k-1$ frequenze, la $k$-esima è determinata.

**Regola decisionale:** rifiutare $H_0$ se $\chi^2 > \chi^2_{k-1, \alpha}$.

La regione critica è **sempre sulla coda destra**: valori grandi di $\chi^2$ indicano forte discrepanza tra osservato e atteso.

**Condizione di applicabilità:** ogni frequenza attesa $E_i \geq 5$. Se non soddisfatta, raggruppare categorie adiacenti fino a soddisfarla.

**Interpretazione della statistica:** ogni termine $\frac{(O_i-E_i)^2}{E_i}$ è proporzionale al quadrato dello scarto relativo. Contribuisce poco se $O_i \approx E_i$, tanto se la categoria è molto "sorprendente".

### Test chi-quadro di indipendenza

**Contesto:** $n$ osservazioni su due variabili categoriali: variabile A con $r$ categorie, variabile B con $c$ categorie. I dati sono organizzati in una **tavola di contingenza** $r \times c$.

Notazione:
- $O_{ij}$: frequenza osservata nella cella (riga $i$, colonna $j$)
- $R_i = \sum_j O_{ij}$: totale di riga $i$
- $C_j = \sum_i O_{ij}$: totale di colonna $j$
- $n = \sum_{i,j} O_{ij}$: totale complessivo

**Ipotesi:**
$$H_0: \text{le variabili A e B sono indipendenti}$$

Sotto $H_0$ e usando la stima di massima verosimiglianza delle probabilità marginali, le **frequenze attese** sono:
$$E_{ij} = \frac{R_i \cdot C_j}{n}$$

**Statistica test:**
$$\chi^2 = \sum_{i=1}^r \sum_{j=1}^c \frac{(O_{ij} - E_{ij})^2}{E_{ij}} \approx \chi^2\bigl((r-1)(c-1)\bigr)$$

Gradi di libertà: $(r-1)(c-1)$. Per una tabella $2 \times 2$: $1$ grado di libertà.

**Correzione di Yates:** per tabelle $2 \times 2$ con campioni piccoli, si usa la correzione di continuità:
$$\chi^2_{\text{Yates}} = \sum \frac{(\lvert O_{ij} - E_{ij}\rvert - 0.5)^2}{E_{ij}}$$

Questa riduce leggermente la statistica e la avvicina alla distribuzione $\chi^2(1)$ continua.

### Test chi-quadro per la varianza

Per testare se la varianza di una popolazione normale è uguale a un valore $\sigma_0^2$:

$$H_0: \sigma^2 = \sigma_0^2 \quad \text{vs} \quad H_1: \sigma^2 \neq \sigma_0^2$$

$$\chi^2_{\text{obs}} = \frac{(n-1)S^2}{\sigma_0^2} \sim \chi^2(n-1) \text{ sotto } H_0$$

Regione critica bilaterale: $\chi^2_{\text{obs}} < \chi^2_{n-1, 1-\alpha/2}$ oppure $\chi^2_{\text{obs}} > \chi^2_{n-1, \alpha/2}$.

Nota: la distribuzione $\chi^2$ non è simmetrica, quindi i due valori critici **non sono simmetrici** attorno alla media $n-1$.

### Distribuzione F di Fisher-Snedecor

Se $U \sim \chi^2(d_1)$ e $V \sim \chi^2(d_2)$ sono indipendenti, allora:
$$F = \frac{U/d_1}{V/d_2} \sim F(d_1, d_2)$$

Proprietà: $F$ è sempre $\geq 0$. Se $X \sim F(d_1, d_2)$, allora $1/X \sim F(d_2, d_1)$.

Connessione con t: se $T \sim t(\nu)$, allora $T^2 \sim F(1, \nu)$.

### Test F per l'uguaglianza delle varianze

**Scenario:** due campioni indipendenti da popolazioni normali: $X_{1i} \sim N(\mu_1, \sigma_1^2)$ e $X_{2j} \sim N(\mu_2, \sigma_2^2)$.

**Ipotesi:**
$$H_0: \sigma_1^2 = \sigma_2^2 \quad \text{vs} \quad H_1: \sigma_1^2 \neq \sigma_2^2$$

**Statistica test:**
$$F = \frac{S_1^2}{S_2^2} \sim F(n_1-1,\, n_2-1) \text{ sotto } H_0$$

**Regione critica** (test bilaterale, livello $\alpha$):
$$F < F_{n_1-1,n_2-1,1-\alpha/2} \quad \text{oppure} \quad F > F_{n_1-1,n_2-1,\alpha/2}$$

dove $F_{\nu_1,\nu_2,p}$ indica il quantile $p$ della distribuzione $F(\nu_1,\nu_2)$.

Trucco pratico: costruire sempre la statistica mettendo al numeratore la varianza maggiore ($S_1^2 \geq S_2^2$), così $F \geq 1$ e si confronta solo con il quantile destro $F_{n_1-1,n_2-1,\alpha/2}$.

**Avvertenza:** il test F è molto sensibile alla violazione della normalità (non è robusto). Preferire il test di Levene o di Bartlett se la normalità è dubbia.

## 4. Derivazioni — passaggi algebrici commentati

### Perché $\chi^2$ con $k-1$ gradi di libertà?

Consideriamo il caso di un dado equilibrato con $k=6$ facce. Sotto $H_0$, ogni $O_i$ ha media $E_i = n/k$ e varianza $n p_i^0 (1-p_i^0)$. La statistica standardizzata $\frac{O_i - E_i}{\sqrt{E_i}}$ approssima $N(0,1)$. Ma abbiamo il vincolo $\sum O_i = n$, quindi solo $k-1$ di queste $k$ variabili standardizzate sono indipendenti. La somma dei quadrati di $k-1$ normali standard indipendenti è $\chi^2(k-1)$.

Formalmente, Pearson (1900) dimostrò che $\sum_{i=1}^k \frac{(O_i-E_i)^2}{E_i} \xrightarrow{d} \chi^2(k-1)$ per $n \to \infty$.

### Gradi di libertà per la tavola di contingenza

In una tabella $r \times c$, ci sono $r \cdot c$ celle. I vincoli sono:
- $r$ vincoli di riga: $\sum_j O_{ij} = R_i$ per ogni riga (ma uno è ridondante poiché $\sum_i R_i = n$) → $r-1$ vincoli indipendenti
- $c$ vincoli di colonna: analogamente $c-1$ vincoli

Vincoli totali indipendenti: $(r-1)+(c-1) = r+c-2$. Gradi di libertà: $rc - (r+c-2) - 1 = (r-1)(c-1)$.

### Frequenze attese sotto indipendenza

Se A e B sono indipendenti: $P(A=i, B=j) = P(A=i) \cdot P(B=j)$.

Stimiamo $\hat{P}(A=i) = R_i/n$ e $\hat{P}(B=j) = C_j/n$. Quindi:
$$E_{ij} = n \cdot \hat{P}(A=i) \cdot \hat{P}(B=j) = n \cdot \frac{R_i}{n} \cdot \frac{C_j}{n} = \frac{R_i C_j}{n}$$

## 5. Esempi — da facile a difficile

### Esempio 1 — Dado equilibrato

Un dado viene lanciato 120 volte. Frequenze osservate: 25, 18, 22, 21, 17, 17. Il dado è equilibrato? ($\alpha=0.05$)

$E_i = 120/6 = 20$ per ogni faccia. $k=6$, gradi di libertà $= 5$.

$$\chi^2 = \frac{(25-20)^2}{20}+\frac{(18-20)^2}{20}+\frac{(22-20)^2}{20}+\frac{(21-20)^2}{20}+\frac{(17-20)^2}{20}+\frac{(17-20)^2}{20}$$
$$= \frac{25+4+4+1+9+9}{20} = \frac{52}{20} = 2.6$$

Valore critico: $\chi^2_{5,0.05} = 11.07$. Poiché $2.6 \ll 11.07$: **non rifiutare** $H_0$. Il dado sembra equilibrato.

### Esempio 2 — Bontà di adattamento con distribuzione non uniforme

In un'urna ci si aspetta che il 50% delle palline sia rossa, 30% blu e 20% verde. In un campione di 200: 95 rosse, 65 blu, 40 verdi. Testare $H_0$.

Frequenze attese: $E_1=100$, $E_2=60$, $E_3=40$. Gradi di libertà $= 2$.

$$\chi^2 = \frac{(95-100)^2}{100}+\frac{(65-60)^2}{60}+\frac{(40-40)^2}{40} = 0.25+0.417+0 = 0.667$$

$\chi^2_{2,0.05} = 5.99$. Poiché $0.667 < 5.99$: **non rifiutare** $H_0$.

### Esempio 3 — Indipendenza in tavola 2×2

Testare se genere e preferenza di sport (calcio vs tennis) sono indipendenti ($n=200$, $\alpha=0.05$):

| | Calcio | Tennis | Totale |
| --- | --- | --- | --- |
| Uomini | 80 | 20 | 100 |
| Donne | 50 | 50 | 100 |
| Totale | 130 | 70 | 200 |

Frequenze attese: $E_{11}=100\cdot130/200=65$, $E_{12}=35$, $E_{21}=65$, $E_{22}=35$.

$$\chi^2 = \frac{(80-65)^2}{65}+\frac{(20-35)^2}{35}+\frac{(50-65)^2}{65}+\frac{(50-35)^2}{35}$$
$$= \frac{225}{65}+\frac{225}{35}+\frac{225}{65}+\frac{225}{35} = 3.46+6.43+3.46+6.43 = 19.78$$

Gradi di libertà $= (2-1)(2-1) = 1$. $\chi^2_{1,0.05} = 3.84$. Poiché $19.78 \gg 3.84$: **rifiutare** $H_0$. C'è una forte associazione tra genere e preferenza sportiva.

### Esempio 4 — Tavola di contingenza 3×2

Testare se lo stato di fumatore (mai, ex, corrente) è associato a malattia cardiaca (sì/no) in un campione di $n=300$:

| | Malattia | Sana | Totale |
| --- | --- | --- | --- |
| Mai fumato | 15 | 85 | 100 |
| Ex fumatore | 25 | 75 | 100 |
| Fumatore | 40 | 60 | 100 |
| Totale | 80 | 220 | 300 |

Frequenze attese: $E_{ij} = R_i C_j / 300$. Per la colonna "Malattia" ($C_j=80$): $E_{1j}=100\cdot80/300=26.67$, $E_{2j}=26.67$, $E_{3j}=26.67$. Per "Sana": $73.33$ per tutti.

$$\chi^2 = \frac{(15-26.67)^2}{26.67}+\frac{(85-73.33)^2}{73.33}+\frac{(25-26.67)^2}{26.67}+\frac{(75-73.33)^2}{73.33}+\frac{(40-26.67)^2}{26.67}+\frac{(60-73.33)^2}{73.33}$$
$$= 5.11+1.86+0.10+0.04+6.67+2.42 = 16.20$$

Gradi di libertà $= (3-1)(2-1) = 2$. $\chi^2_{2,0.05}=5.99$. **Rifiutare** $H_0$: l'abitudine al fumo è associata alla malattia cardiaca.

### Esempio 5 — Test F per le varianze

Due linee di produzione: $n_1=10$ pezzi con $s_1^2=16$; $n_2=15$ pezzi con $s_2^2=9$. Testare $H_0:\sigma_1^2=\sigma_2^2$ a $\alpha=0.10$.

$$F = \frac{16}{9} \approx 1.778$$

Distribuzione sotto $H_0$: $F(9,14)$. Per test bilaterale a $\alpha=0.10$, cerchiamo $F_{9,14,0.05}$.

Dalla tavola F: $F_{9,14,0.05} \approx 2.65$. Poiché $1.778 < 2.65$: **non rifiutare** $H_0$.

### Esempio 6 — Test chi-quadro per la varianza

Una macchina è progettata per produrre pezzi con $\sigma^2=4$ mm². Un campione di $n=20$ pezzi dà $s^2=6$ mm². Testare $H_0:\sigma^2=4$ a $\alpha=0.05$.

$$\chi^2_{\text{obs}} = \frac{19 \cdot 6}{4} = \frac{114}{4} = 28.5$$

Gradi di libertà $= 19$. Valori critici bilaterali: $\chi^2_{19,0.025} = 32.85$ e $\chi^2_{19,0.975} = 8.91$.

Poiché $8.91 < 28.5 < 32.85$: **non rifiutare** $H_0$ al livello 5%. La variabilità osservata è compatibile con le specifiche.

### Esempio 7 — Genetica mendeliana

Mendel predisse che incrociando piante eterozigoti si otterrebbe una proporzione 9:3:3:1 (quattro fenotipi). Osservato in $n=556$ piante: 315, 108, 101, 32. Verificare l'ipotesi mendeliana.

Proporzioni attese: $9/16, 3/16, 3/16, 1/16$. Frequenze attese: $556 \cdot 9/16 = 312.75$; $556 \cdot 3/16 = 104.25$; $104.25$; $556/16 = 34.75$.

$$\chi^2 = \frac{(315-312.75)^2}{312.75}+\frac{(108-104.25)^2}{104.25}+\frac{(101-104.25)^2}{104.25}+\frac{(32-34.75)^2}{34.75}$$
$$= 0.016+0.135+0.101+0.218 = 0.470$$

$\chi^2_{3,0.05}=7.81$. Poiché $0.470 \ll 7.81$: **non rifiutare** $H_0$. I dati sono straordinariamente compatibili con la legge di Mendel (forse troppo: alcuni storici hanno discusso se Mendel "abbellì" i dati).

## 6. Grafico

```plot
{"fn":"x>0?(Math.pow(x,3/2-1)*Math.exp(-x/2))/(Math.pow(2,3/2)*Math.exp(Math.lgamma(3/2))):0","domain":[0,15],"yDomain":[0,0.3],"title":"Distribuzione χ²(3) — coda destra, valore critico 7.81","label1":"χ²(3)","fn2":"x>7.81?(Math.pow(x,3/2-1)*Math.exp(-x/2))/(Math.pow(2,3/2)*Math.exp(Math.lgamma(3/2))):null","label2":"Regione rigetto α=0.05","color":"steelblue","color2":"crimson"}
```

## 7. Interattivo

```slider
{"fn":"x>0?(Math.pow(x,5/2-1)*Math.exp(-x/2))/(Math.pow(2,5/2)*Math.exp(Math.lgamma(5/2))):0","domain":[0,20],"yDomain":[0,0.25],"params":[{"name":"df","min":1,"max":20,"step":1,"default":5}],"title":"Distribuzione χ²(ν) al variare dei gradi di libertà"}
```

## 8. Errori comuni

**Errore 1 — Usare il test chi-quadro con frequenze attese troppo piccole.**
Il test di Pearson è un'approssimazione asintotica valida solo se ogni $E_i \geq 5$. Con frequenze attese minori, la distribuzione campionaria della statistica non è ben approssimata da $\chi^2$. Soluzione: raggruppare categorie o usare il test esatto di Fisher per tabelle $2 \times 2$.

**Errore 2 — Confondere frequenze osservate e attese.**
Un errore classico è calcolare $\frac{(E_i-O_i)^2}{O_i}$ invece di $\frac{(O_i-E_i)^2}{E_i}$. Il denominatore corretto è la frequenza **attesa** $E_i$, non quella osservata $O_i$.

**Errore 3 — Gradi di libertà errati nel test di indipendenza.**
Per una tabella $r \times c$ i gradi di libertà sono $(r-1)(c-1)$, non $r \cdot c - 1$. Un errore comune è usare $r+c-2$ oppure $rc-1$. Ricorda: per $2 \times 2$ è 1, per $3 \times 3$ è 4.

**Errore 4 — Interpretare il test di indipendenza come causalità.**
Trovare un'associazione significativa tra fumo e tumore con il test $\chi^2$ non implica causalità: lo studio potrebbe essere osservazionale con variabili confondenti. La causalità richiede design sperimentale (randomizzazione) o analisi causali specifiche.

**Errore 5 — Usare il test F per confrontare varianze senza verificare la normalità.**
Il test F per le varianze è molto sensibile alle deviazioni dalla normalità: anche piccoli scostamenti dalla normale possono produrre falsi positivi. Prima di usare il test F, verifica la normalità (Shapiro-Wilk). Alternativa robusta: test di Levene (basato sulla mediana delle deviazioni assolute).

**Errore 6 — Non tenere conto dell'asimmetria della distribuzione chi-quadro nel test bilaterale sulla varianza.**
Nel test bilaterale $H_0:\sigma^2=\sigma_0^2$, la regione critica è **asimmetrica**: $\chi^2 < \chi^2_{\nu,1-\alpha/2}$ OR $\chi^2 > \chi^2_{\nu,\alpha/2}$, dove i due valori critici sono diversi. Non dividere semplicemente $\alpha/2$ in modo simmetrico.

**Errore 7 — Confondere il test chi-quadro di indipendenza con quello di bontà di adattamento.**
Il test di bontà di adattamento confronta frequenze osservate con probabilità **teoriche** fissate a priori. Il test di indipendenza calcola le frequenze attese **dai margini** della tabella. I gradi di libertà e la procedura sono diversi.

## 9. Applicazioni reali

**Genetica:** il test $\chi^2$ di bontà di adattamento è usato per verificare la legge di Hardy-Weinberg (le frequenze genotipiche in una popolazione in equilibrio). Scostamenti significativi da $H_0$ suggeriscono selezione naturale, deriva genetica o migrazione.

**Epidemiologia:** nelle coorti di pazienti, il test $\chi^2$ di indipendenza testa l'associazione tra esposizione a fattori di rischio (fumo, obesità, radiazioni) e malattia. È la base per calcolare il rischio relativo e l'odds ratio.

**Controllo qualità e Six Sigma:** il test F confronta la variabilità di due processi produttivi. Prima di implementare il test t pooled per confrontare le medie, si usa il test F per verificare se le varianze sono uguali (o si opta per il test di Welch).

**Machine learning — test su distribuzioni:** nel monitoraggio dei modelli in produzione, il test $\chi^2$ di bontà di adattamento rileva il "data drift": quando la distribuzione dei dati in ingresso si discosta da quella del training set, il modello potrebbe degradare.

## 10. Riepilogo

| Test | Statistica | Distribuzione | Gradi di libertà | Uso |
| --- | --- | --- | --- | --- |
| $\chi^2$ goodness-of-fit | $\sum \frac{(O_i-E_i)^2}{E_i}$ | $\chi^2(k-1)$ | $k-1$ | Distribuzione teorica vs. osservata |
| $\chi^2$ indipendenza | $\sum_{i,j}\frac{(O_{ij}-E_{ij})^2}{E_{ij}}$ | $\chi^2((r-1)(c-1))$ | $(r-1)(c-1)$ | Associazione tra variabili categoriali |
| $\chi^2$ per varianza | $\frac{(n-1)S^2}{\sigma_0^2}$ | $\chi^2(n-1)$ | $n-1$ | Varianza vs. valore fisso |
| F per varianze | $S_1^2/S_2^2$ | $F(n_1-1, n_2-1)$ | $(n_1-1, n_2-1)$ | Uguaglianza di due varianze |

## 11. Esercizi

<details>
<summary>Esercizio 1: Bontà di adattamento — dado a sei facce</summary>

Un dado viene lanciato 60 volte. Frequenze osservate: 8, 12, 10, 11, 9, 10. Il dado è equilibrato? ($\alpha=0.05$)

**Soluzione.**

$E_i = 60/6 = 10$ per ogni faccia. $k=6$, gradi di libertà $=5$.

$$\chi^2 = \frac{(8-10)^2+(12-10)^2+(10-10)^2+(11-10)^2+(9-10)^2+(10-10)^2}{10} = \frac{4+4+0+1+1+0}{10} = 1.0$$

$\chi^2_{5,0.05} = 11.07$. Poiché $1.0 \ll 11.07$: **non rifiutare** $H_0$. Il dado sembra equilibrato.

</details>

<details>
<summary>Esercizio 2: Bontà di adattamento — distribuzione di Poisson</summary>

In 100 intervalli di 1 secondo, si contano 0, 1, 2, 3 o più arrivi in una coda. Osservato: 36, 40, 17, 7 (con 3+ raggruppati). Testare $H_0$: distribuzione di Poisson con $\lambda=1$.

**Soluzione.**

Probabilità teoriche per Poisson(1): $P(0)=e^{-1}\approx 0.368$; $P(1)\approx 0.368$; $P(2)\approx 0.184$; $P(3+)=1-0.368-0.368-0.184=0.080$.

Frequenze attese: $E_1=36.8$, $E_2=36.8$, $E_3=18.4$, $E_4=8.0$. Tutte $\geq 5$: ok.

$$\chi^2 = \frac{(36-36.8)^2}{36.8}+\frac{(40-36.8)^2}{36.8}+\frac{(17-18.4)^2}{18.4}+\frac{(7-8)^2}{8}$$
$$= 0.017+0.278+0.107+0.125 = 0.527$$

Nota: $\lambda$ è **stimato** dai dati? Se è dato a priori: $df=3$, $\chi^2_{3,0.05}=7.81$. Non rifiutare $H_0$.

Se $\lambda$ fosse stimato dai dati: $df=2$ (si perde 1 grado di libertà per ogni parametro stimato). Anche in questo caso non si rifiuta.

</details>

<details>
<summary>Esercizio 3: Test di indipendenza 2×2</summary>

Testare l'indipendenza tra genere e preferenza politica in un campione $n=100$:

| | Sinistra | Destra |
| --- | --- | --- |
| M | 30 | 20 |
| F | 25 | 25 |

**Soluzione.**

$R_1=50$, $R_2=50$, $C_1=55$, $C_2=45$, $n=100$.

$E_{11}=50\cdot55/100=27.5$, $E_{12}=22.5$, $E_{21}=27.5$, $E_{22}=22.5$.

$$\chi^2 = \frac{(30-27.5)^2}{27.5}+\frac{(20-22.5)^2}{22.5}+\frac{(25-27.5)^2}{27.5}+\frac{(25-22.5)^2}{22.5}$$
$$= 0.227+0.278+0.227+0.278 = 1.010$$

$\chi^2_{1,0.05}=3.84$. Poiché $1.01 < 3.84$: **non rifiutare** $H_0$. Non c'è evidenza di associazione.

</details>

<details>
<summary>Esercizio 4: Test di indipendenza 3×3</summary>

Testare se il livello di istruzione (basso, medio, alto) è associato alla soddisfazione lavorativa (bassa, media, alta) in $n=270$. Tavola osservata:

| | Sodd. bassa | Sodd. media | Sodd. alta |
| --- | --- | --- | --- |
| Istr. bassa | 40 | 20 | 10 |
| Istr. media | 30 | 40 | 20 |
| Istr. alta | 10 | 30 | 70 |

**Soluzione.**

Totali di riga: 70, 90, 110. Totali di colonna: 80, 90, 100. $n=270$.

Frequenze attese (es.): $E_{11}=70\cdot80/270=20.74$; $E_{12}=70\cdot90/270=23.33$; $E_{13}=70\cdot100/270=25.93$; e così via.

Calcolando $\chi^2$ (calcolo completo):
$\chi^2 \approx 18.44 + 0.48 + 11.28 + 4.23 + 0 + 0.40 + 10.93 + 1.39 + 27.76 \approx 60.8$ (approssimato)

Gradi di libertà $= (3-1)(3-1)=4$. $\chi^2_{4,0.001} \approx 18.5$. **Rifiutare** $H_0$ con forza: istruzione e soddisfazione lavorativa sono fortemente associate.

</details>

<details>
<summary>Esercizio 5: Test F per varianze</summary>

Due gruppi: $n_1=10$, $s_1^2=16$; $n_2=15$, $s_2^2=9$. Testare uguaglianza varianze a $\alpha=0.10$.

**Soluzione.**

$F = 16/9 \approx 1.778$. Distribuzione: $F(9,14)$.

Per test bilaterale a $\alpha=0.10$: cerco $F_{9,14,0.05}$ (quantile 95%). Dalle tavole: $F_{9,14,0.05} \approx 2.65$.

Poiché $1.778 < 2.65$: **non rifiutare** $H_0$. Non c'è evidenza che le varianze siano diverse.

</details>

<details>
<summary>Esercizio 6: Test chi-quadro per la varianza</summary>

Una macchina CNC dovrebbe produrre pezzi con varianza $\sigma^2 = 0.01$ mm². Un campione di $n=25$ pezzi dà $s^2 = 0.016$ mm². La macchina è fuori specifica? ($\alpha=0.05$, test bilaterale)

**Soluzione.**

$$\chi^2_{\text{obs}} = \frac{24 \cdot 0.016}{0.01} = \frac{0.384}{0.01} = 38.4$$

Valori critici con $\nu=24$: $\chi^2_{24,0.025}=39.36$ e $\chi^2_{24,0.975}=12.40$.

Regione critica: $\chi^2 < 12.40$ oppure $\chi^2 > 39.36$.

Poiché $12.40 < 38.4 < 39.36$: **non rifiutare** $H_0$ (appena dentro la regione di accettazione). La macchina è tecnicamente a specifica, ma al limite: un monitoraggio più frequente è raccomandato.

</details>

<details>
<summary>Esercizio 7: Correzione di Yates e test esatto di Fisher</summary>

In un trial clinico randomizzato ($n=40$), 10 pazienti su 20 nel gruppo trattamento migliorano vs. 6 su 20 nel gruppo controllo.

| | Migliora | Non migliora |
| --- | --- | --- |
| Trattamento | 10 | 10 |
| Controllo | 6 | 14 |

Testare l'indipendenza a $\alpha=0.05$ con e senza correzione di Yates.

**Soluzione.**

$n=40$, $R_1=R_2=20$, $C_1=16$, $C_2=24$.

$E_{11}=20\cdot16/40=8$, $E_{12}=12$, $E_{21}=8$, $E_{22}=12$.

Senza correzione: $\chi^2 = \frac{4}{8}+\frac{4}{12}+\frac{4}{8}+\frac{4}{12} = 0.5+0.333+0.5+0.333=1.667$.

Con correzione Yates: $\chi^2_Y = \frac{(\lvert 10-8\rvert-0.5)^2}{8}+\ldots = \frac{2.25}{8}+\frac{2.25}{12}+\frac{2.25}{8}+\frac{2.25}{12} = 0.281+0.188+0.281+0.188=0.938$.

$\chi^2_{1,0.05}=3.84$. In entrambi i casi: **non rifiutare** $H_0$. La correzione di Yates rende il test più conservativo (valore ancora più basso).

</details>

<details>
<summary>Esercizio 8: Scegliere il test giusto</summary>

Quale test usare in ciascun caso?

a) Verificare se la distribuzione dei gruppi sanguigni (A, B, AB, 0) in una città corrisponde alle proporzioni nazionali (45%, 8%, 4%, 43%).

b) Verificare se il genere e il tipo di contratto lavorativo (tempo pieno, parziale, occasionale) sono indipendenti in un campione di 500 lavoratori.

c) Verificare se la variabilità del rendimento di due fondi comuni è la stessa.

**Soluzione.**

a) **Test $\chi^2$ di bontà di adattamento**: si confronta la distribuzione osservata con probabilità teoriche fissate ($k=4$, $df=3$).

b) **Test $\chi^2$ di indipendenza**: tabella di contingenza $2\times3$ (2 generi $\times$ 3 tipi di contratto), $df=(2-1)(3-1)=2$.

c) **Test F per l'uguaglianza delle varianze**: rapporto tra varianze campionarie dei due fondi, distribuito come $F(n_1-1, n_2-1)$. Prima verificare la normalità dei rendimenti.

</details>

---
id: finanza-02-obbligazioni
subject: finanza
topic_it: Strumenti finanziari
topic_en: Financial instruments
title_it: Obbligazioni e valutazione
title_en: Bonds and valuation
level: purple
order: 2
source_book: "J.C. Hull, Options, Futures and Other Derivatives; Bodie, Kane & Marcus, Investments"
source_chapter: "Cap. 14 — Obbligazioni"
---

## 1. Intuizione — analogia concreta

Un'obbligazione è, in fondo, un prestito formalizzato. Immagina di prestare €1.000 a un amico che promette di restituirteli tra 5 anni con un interesse annuo del 5%. Ogni anno ricevi €50, e alla fine riavrai i tuoi €1.000. Questo è esattamente il funzionamento di un'obbligazione (bond): sei tu il creditore, l'emittente (lo stato, un'azienda) è il debitore.

Il mercato obbligazionario è il più grande mercato finanziario al mondo — più grande di quello azionario. Titoli di stato, obbligazioni corporate, mutui cartolarizzati: tutti questi strumenti seguono la stessa matematica fondamentale. Capire come si prezza un bond significa capire come il mercato valuta il futuro.

La relazione più importante da interiorizzare è questa: **prezzo e rendimento si muovono in direzioni opposte**. Se i tassi di mercato salgono, il prezzo dei bond esistenti scende — e viceversa. Questa intuizione, che può sembrare controintuitiva, è la chiave per capire il rischio tasso di interesse.

La **duration** è la misura di questa sensibilità: un bond con duration 5 anni perde circa il 5% di valore se i tassi salgono dell'1%. È lo strumento principale con cui banche e fondi gestiscono il rischio obbligazionario.

## 2. Prerequisiti

- TVM: valore attuale, attualizzazione, formula dell'annuity
- Rendita annua e perpetua (lezione 01)
- Derivate di funzioni algebriche e logaritmiche
- Somme di serie geometriche

## 3. Teoria

### 3.1 Struttura di un'obbligazione

Un'obbligazione è definita da:

- **Valore nominale $F$** (face value): il capitale rimborsato a scadenza (tipicamente €100 o €1.000)
- **Cedola $C$**: pagamento periodico, pari a $C = c \cdot F$ dove $c$ è il **tasso cedolare**
- **Scadenza $T$**: numero di periodi fino al rimborso
- **YTM $y$**: tasso di rendimento a scadenza (yield to maturity), il tasso interno di rendimento del bond

### 3.2 Prezzo del bond

Il prezzo $P$ è il valore attuale di tutti i flussi futuri, attualizzati al YTM $y$:

$$P = \sum_{t=1}^T \frac{C}{(1+y)^t} + \frac{F}{(1+y)^T}$$

Usando la formula dell'annuity:

$$P = C \cdot \frac{1-(1+y)^{-T}}{y} + \frac{F}{(1+y)^T}$$

Questa formula esprime $P$ come somma di due componenti:
1. Il valore attuale delle cedole (un'annuity)
2. Il valore attuale del nominale (un unico pagamento futuro)

### 3.3 Relazione prezzo-rendimento

La formula del prezzo implica tre casi fondamentali:

| Condizione | Relazione | Descrizione |
| --- | --- | --- |
| $y < c$ | $P > F$ | Bond **sopra la pari** (premium bond) |
| $y = c$ | $P = F$ | Bond **alla pari** (par bond) |
| $y > c$ | $P < F$ | Bond **sotto la pari** (discount bond) |

**Perché?** Se il tasso di mercato $y$ è maggiore del tasso cedolare $c$, il bond paga interessi inferiori al mercato: per compensare, il prezzo scende sotto la pari così che il rendimento totale (cedole + guadagno a scadenza) eguagli $y$.

### 3.4 Bond zero coupon

Un **zero coupon bond** non paga cedole ($C=0$) e rimborsa solo il nominale a scadenza:

$$P = \frac{F}{(1+y)^T}$$

Per uno ZCB, la duration di Macaulay coincide esattamente con la scadenza $T$. Sono molto usati per dedurre la struttura per scadenza dei tassi.

### 3.5 Duration di Macaulay

La **duration** misura la vita media ponderata dell'obbligazione, dove i pesi sono le quote del valore attuale di ogni flusso sul prezzo totale:

$$D = \sum_{t=1}^T t \cdot \frac{C/(1+y)^t}{P} + T \cdot \frac{F/(1+y)^T}{P}$$

Equivalentemente, in forma compatta:

$$D = \frac{1}{P} \left[\sum_{t=1}^T \frac{t \cdot C}{(1+y)^t} + \frac{T \cdot F}{(1+y)^T}\right]$$

La duration è espressa in anni (o periodi). Per uno ZCB, $D = T$. Per bond con cedole, $D < T$.

### 3.6 Modified Duration e sensibilità al prezzo

La **modified duration** $D^*$ è definita come:

$$D^* = \frac{D}{1+y}$$

È la misura di sensibilità del prezzo al rendimento: se $y$ cambia di $\Delta y$, il prezzo varia approssimativamente di:

$$\frac{\Delta P}{P} \approx -D^* \cdot \Delta y$$

Il segno negativo riflette la relazione inversa prezzo-rendimento. In termini assoluti:

$$\Delta P \approx -D^* \cdot P \cdot \Delta y$$

**Interpretazione:** un bond con $D^* = 7$ perde circa il 7% di valore se i tassi salgono dell'1% (100 basis points).

### 3.7 Convessità

La relazione prezzo-rendimento non è lineare ma convessa: la duration dà un'approssimazione di primo ordine. La correzione di secondo ordine usa la **convessità** (Convexity):

$$\text{Conv} = \frac{1}{P} \cdot \frac{d^2P}{dy^2} = \frac{1}{P(1+y)^2}\sum_{t=1}^T \frac{t(t+1) \cdot CF_t}{(1+y)^t}$$

dove $CF_t$ è il flusso al tempo $t$. L'approssimazione di secondo ordine è:

$$\frac{\Delta P}{P} \approx -D^* \cdot \Delta y + \frac{1}{2} \cdot \text{Conv} \cdot (\Delta y)^2$$

La convessità è sempre positiva per bond ordinari: il prezzo scende meno di quanto previsto dalla sola duration quando i tassi salgono, e sale di più quando i tassi scendono. La convessità è quindi una proprietà desiderabile.

### 3.8 Curva dei rendimenti (yield curve)

La **curva dei rendimenti** (term structure) rappresenta i YTM di bond privi di rischio in funzione della scadenza. La forma normale è crescente (tassi a lungo termine > breve termine). Una curva invertita (tassi brevi > lunghi) è spesso segnale di recessione imminente.

## 4. Derivazioni

### 4.1 Derivazione della modified duration

Il prezzo è: $P(y) = \displaystyle\sum_{t=1}^T CF_t \cdot (1+y)^{-t}$

Derivando rispetto a $y$:

$$\frac{dP}{dy} = -\sum_{t=1}^T t \cdot CF_t \cdot (1+y)^{-(t+1)} = -\frac{1}{1+y}\sum_{t=1}^T \frac{t \cdot CF_t}{(1+y)^t}$$

Dividendo per $P$:

$$\frac{1}{P}\frac{dP}{dy} = -\frac{1}{(1+y)} \cdot \frac{1}{P}\sum_{t=1}^T \frac{t \cdot CF_t}{(1+y)^t} = -\frac{D}{1+y} = -D^*$$

Quindi $D^* = -\dfrac{1}{P}\dfrac{dP}{dy}$, che motiva la definizione e mostra la relazione con la derivata del prezzo.

### 4.2 Formula chiusa per la duration di un bond con cedole

Esiste una formula chiusa che evita il calcolo termine per termine:

$$D = \frac{1+y}{y} - \frac{(1+y) + T(c-y)}{c[(1+y)^T - 1] + y}$$

dove $c = C/F$ è il tasso cedolare. Questa formula è utile per calcoli rapidi e per analizzare come la duration dipende da $c$, $y$ e $T$.

## 5. Esempi

**Esempio 1 — Prezzo di un BTP**

Un BTP con nominale €1.000, cedola annua 4%, scadenza 5 anni, YTM corrente di mercato 6%.

$$P = 40 \cdot \frac{1-(1{,}06)^{-5}}{0{,}06} + \frac{1000}{(1{,}06)^5}$$

$$= 40 \cdot 4{,}2124 + 1000 \cdot 0{,}7473 = 168{,}50 + 747{,}26 = \mathbf{€915{,}76}$$

Il bond è sotto la pari perché YTM (6%) > tasso cedolare (4%).

---

**Esempio 2 — Bond alla pari**

Se il YTM è uguale al tasso cedolare (entrambi 5%), il prezzo è sempre alla pari indipendentemente dalla scadenza:

$$P = 50 \cdot \frac{1-(1{,}05)^{-10}}{0{,}05} + \frac{1000}{(1{,}05)^{10}} = 50 \cdot 7{,}722 + 613{,}91 = 386{,}09 + 613{,}91 = €1.000$$

---

**Esempio 3 — Zero coupon bond**

ZCB con $F = €1.000$, scadenza 10 anni, YTM = 5%:

$$P = \frac{1000}{(1{,}05)^{10}} = \frac{1000}{1{,}6289} \approx €613{,}91$$

Duration di Macaulay = 10 anni (uguale alla scadenza).

---

**Esempio 4 — Calcolo della duration**

Bond con $F = €1.000$, cedola 6%, scadenza 3 anni, YTM = 6% (alla pari, $P = 1000$):

| $t$ | $CF_t$ | $PV(CF_t)$ | Peso $w_t$ | $t \cdot w_t$ |
| --- | --- | --- | --- | --- |
| 1 | 60 | 56,60 | 0,0566 | 0,0566 |
| 2 | 60 | 53,40 | 0,0534 | 0,1068 |
| 3 | 1060 | 890,00 | 0,8900 | 2,6700 |
| Tot | — | 1000 | 1,0000 | **2,8334 anni** |

$D = 2{,}83$ anni. $D^* = 2{,}83/1{,}06 = 2{,}67$ anni.

---

**Esempio 5 — Sensibilità al tasso**

Con la modified duration dell'esempio 4 ($D^* = 2{,}67$), se i tassi salgono di 1% (100 bp):

$$\frac{\Delta P}{P} \approx -2{,}67 \times 0{,}01 = -2{,}67\%$$

Su un bond da €1.000: $\Delta P \approx -€26{,}70$.

---

**Esempio 6 — Confronto duration e convessità**

Bond con $D^* = 5$ e Convexity = 30. Se i tassi salgono di 2%:

- Solo duration: $\Delta P/P \approx -5 \times 0{,}02 = -10\%$
- Con convessità: $-10\% + \frac{1}{2} \times 30 \times (0{,}02)^2 = -10\% + 0{,}6\% = -9{,}4\%$

La convessità attenua la perdita di circa 0,6 punti percentuali — rilevante su grandi portafogli.

---

**Esempio 7 — YTM implicito**

Un bond con $F=1.000$, cedola 8%, scadenza 4 anni, prezzo corrente €1.050. Qual è il YTM?

Non c'è formula chiusa: si risolve numericamente per $y$ da:

$$1050 = \frac{80}{1+y} + \frac{80}{(1+y)^2} + \frac{80}{(1+y)^3} + \frac{1080}{(1+y)^4}$$

Per iterazione (o con Excel RATA/RENDIMENTO): $y \approx 6{,}76\%$ — inferiore alla cedola perché il bond è sopra la pari.

## 6. Grafico

```plot
{"fn":"40*(1-Math.pow(1+x,-5))/x+1000*Math.pow(1+x,-5)","domain":[0.01,0.15],"yDomain":[700,1400],"title":"Prezzo del bond al variare del YTM (cedola 4%, scadenza 5 anni, F=1000)","label1":"Prezzo P(y)","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"c*F*(1-Math.pow(1+y,-T))/y+F*Math.pow(1+y,-T)","domain":[0,20],"yDomain":[0,1600],"params":[{"name":"c","min":0.01,"max":0.12,"step":0.01,"default":0.05},{"name":"y","min":0.01,"max":0.15,"step":0.005,"default":0.05},{"name":"F","min":100,"max":1000,"step":100,"default":1000},{"name":"T","min":1,"max":20,"step":1,"default":5}],"title":"Prezzo del bond: cedola c, YTM y, nominale F, scadenza T (asse x = scadenza)"}
```

## 8. Errori comuni

**Errore 1 — Confondere tasso cedolare e YTM.** Il tasso cedolare $c$ è fisso e determina i pagamenti periodici. Il YTM $y$ è il rendimento di mercato corrente, che cambia continuamente. Solo quando $y = c$ il bond vale alla pari.

**Errore 2 — Credere che duration = scadenza.** Solo per gli zero coupon la duration eguaglia la scadenza. Per bond con cedole, la duration è sempre inferiore alla scadenza, perché i flussi intermedi (cedole) abbassano la vita media ponderata.

**Errore 3 — Linearizzare troppo: usare solo la duration per grandi variazioni di tasso.** La formula $\Delta P/P \approx -D^* \Delta y$ è un'approssimazione lineare valida per piccole variazioni ($\Delta y < 1\%$). Per movimenti grandi, bisogna includere la convessità o ricalcolare il prezzo direttamente.

**Errore 4 — Ignorare la frequenza cedolare.** Le cedole possono essere semestrali (come i BTP italiani), non annuali. Con cedole semestrali: $P = \sum_{t=1}^{2T} \frac{C/2}{(1+y/2)^t} + \frac{F}{(1+y/2)^{2T}}$ — bisogna dimezzare cedola e YTM e raddoppiare i periodi.

**Errore 5 — Credere che un bond "sicuro" abbia prezzo stabile.** Un titolo di stato AAA ha rischio di credito quasi nullo, ma ha pieno rischio tasso: se i tassi salgono del 3%, un bond con duration 10 anni perde circa il 30% di valore. La "sicurezza" riguarda il rimborso, non la volatilità di prezzo.

**Errore 6 — Sommare duration di bond diversi senza pesare.** La duration di un portafoglio obbligazionario è la media ponderata delle duration dei singoli bond, con pesi proporzionali al valore di mercato: $D_p = \sum_i w_i D_i$.

**Errore 7 — Trascurare il rischio reinvestimento.** Il YTM assume implicitamente che tutte le cedole vengano reinvestite allo stesso tasso $y$. Se i tassi scendono nel tempo, il rendimento realizzato sarà inferiore al YTM atteso.

## 9. Applicazioni reali

**Gestione del rischio tasso nelle banche:** le banche hanno passività (depositi) con duration breve e attivi (mutui, bond) con duration lunga. L'"immunizzazione" consiste nel bilanciare le duration di attivo e passivo per minimizzare la sensibilità ai tassi.

**Politica monetaria e mercato obbligazionario:** quando la BCE alza i tassi, i prezzi dei bond esistenti scendono immediatamente. I fund manager monitorano la duration per stimare l'impatto di un rialzo di 25 o 50 basis points sul loro portafoglio.

**Curva dei rendimenti come indicatore economico:** un'inversione della curva (tassi a 2 anni > 10 anni) ha preceduto quasi tutte le recessioni americane degli ultimi 50 anni. Gli analisti la monitorano costantemente come leading indicator.

**Pricing di derivati obbligazionari:** le opzioni su bond (cap, floor, swaption) dipendono dalla volatilità dei tassi e dalla convessità. I modelli di Heath-Jarrow-Morton e Hull-White usano proprio la struttura per scadenza e la convessità per prezzare questi strumenti.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Prezzo bond | $P = C \cdot \frac{1-(1+y)^{-T}}{y} + F(1+y)^{-T}$ | Valore attuale flussi |
| Bond alla pari | $P = F$ se $y = c$ | Tasso cedolare = YTM |
| ZCB | $P = F/(1+y)^T$ | Cedola = 0 |
| Duration Macaulay | $D = \frac{1}{P}\sum_t t \cdot PV(CF_t)$ | Vita media ponderata (anni) |
| Modified duration | $D^* = D/(1+y)$ | Sensibilità del prezzo |
| Sensibilità lineare | $\Delta P/P \approx -D^* \Delta y$ | Approssimazione I ordine |
| Convessità | $\text{Conv} = \frac{1}{P}\frac{d^2P}{dy^2}$ | Correzione II ordine |
| Approssimazione II ordine | $\Delta P/P \approx -D^*\Delta y + \frac{1}{2}\text{Conv}(\Delta y)^2$ | Più preciso per $\lvert\Delta y\rvert$ grandi |

## 11. Esercizi

<details>
<summary>Esercizio 1: Prezzo di un BTP a tasso fisso</summary>

BTP: nominale €1.000, cedola annua 3%, scadenza 4 anni. Il YTM di mercato è 5%. Calcolare il prezzo e verificare se è sopra o sotto la pari.

**Soluzione:**

Cedola: $C = 0{,}03 \times 1000 = €30$

$$P = 30 \cdot \frac{1-(1{,}05)^{-4}}{0{,}05} + \frac{1000}{(1{,}05)^4}$$

$$= 30 \times 3{,}5460 + 1000 \times 0{,}8227 = 106{,}38 + 822{,}70 = \mathbf{€929{,}08}$$

Sotto la pari (€929 < €1000) perché YTM (5%) > tasso cedolare (3%). L'investitore guadagna la differenza €1000 - €929 = €71 come capital gain a scadenza.

</details>

<details>
<summary>Esercizio 2: Variazione di prezzo con la duration</summary>

Un bond ha prezzo €1.050, duration modificata $D^* = 6$ anni. I tassi scendono di 50 basis points (0,5%). Stimare il nuovo prezzo.

**Soluzione:**

$$\frac{\Delta P}{P} \approx -D^* \cdot \Delta y = -6 \times (-0{,}005) = +3\%$$

$$\Delta P = 0{,}03 \times 1050 = €31{,}50$$

Nuovo prezzo stimato: $1050 + 31{,}50 = \mathbf{€1.081{,}50}$

I tassi scendono → il prezzo sale. Bond con duration lunga amplificano questo effetto.

</details>

<details>
<summary>Esercizio 3: Calcolo completo della duration</summary>

Bond: $F = €1.000$, cedola 5%, scadenza 3 anni, YTM = 8%. Calcola prezzo, duration di Macaulay e modified duration.

**Soluzione:**

Prezzo: $P = 50/1{,}08 + 50/1{,}08^2 + 1050/1{,}08^3 = 46{,}30 + 42{,}87 + 833{,}52 = €922{,}69$

| $t$ | $CF_t$ | $PV$ | Peso | $t \times w_t$ |
| --- | --- | --- | --- | --- |
| 1 | 50 | 46,30 | 0,0502 | 0,0502 |
| 2 | 50 | 42,87 | 0,0465 | 0,0930 |
| 3 | 1050 | 833,52 | 0,9033 | 2,7099 |
| Tot | — | 922,69 | 1,0000 | **2,8531** |

$D = 2{,}853$ anni. $D^* = 2{,}853/1{,}08 = \mathbf{2{,}642}$ anni.

</details>

<details>
<summary>Esercizio 4: Duration di portafoglio</summary>

Un portafoglio obbligazionario ha tre bond:

- Bond A: valore €500.000, $D^* = 3$ anni
- Bond B: valore €300.000, $D^* = 7$ anni
- Bond C: valore €200.000, $D^* = 12$ anni

Calcola la duration del portafoglio e l'impatto di un rialzo di 1% sui tassi.

**Soluzione:**

Pesi: $w_A = 500/1000 = 0{,}5$, $w_B = 0{,}3$, $w_C = 0{,}2$

$D^*_p = 0{,}5 \times 3 + 0{,}3 \times 7 + 0{,}2 \times 12 = 1{,}5 + 2{,}1 + 2{,}4 = \mathbf{6\text{ anni}}$

Impatto del rialzo 1%: $\Delta P/P \approx -6 \times 0{,}01 = -6\%$

Perdita di valore: $-0{,}06 \times 1.000.000 = \mathbf{-€60.000}$

</details>

<details>
<summary>Esercizio 5: ZCB e confronto con bond con cedole</summary>

Confronta due bond con stessa scadenza (5 anni) e stesso YTM (6%):
- Bond A: ZCB, $F = €1.000$
- Bond B: cedola 6%, $F = €1.000$ (alla pari)

Calcola prezzo e duration di entrambi. Quale è più sensibile ai tassi?

**Soluzione:**

ZCB: $P_A = 1000/(1{,}06)^5 = €747{,}26$. Duration $= 5$ anni, $D^* = 5/1{,}06 = 4{,}72$ anni.

Bond B: alla pari $P_B = €1.000$. Usando la formula chiusa, $D \approx 4{,}33$ anni, $D^* \approx 4{,}09$ anni.

Lo ZCB ha duration maggiore (5 > 4,33 anni): è più sensibile ai movimenti di tasso. Per un rialzo dell'1%: ZCB perde circa 4,72% vs 4,09% del bond con cedole.

</details>

<details>
<summary>Esercizio 6: Effetto della convessità</summary>

Bond con $D^* = 8$ anni, Convexity $= 80$, prezzo €1.000. I tassi scendono del 2%.

Calcola la variazione di prezzo con solo duration e poi con duration + convessità.

**Soluzione:**

Solo duration: $\Delta P/P \approx -8 \times (-0{,}02) = +16\%$ → $\Delta P = +€160$

Con convessità: $+16\% + \frac{1}{2} \times 80 \times (0{,}02)^2 = +16\% + 1{,}6\% = +17{,}6\%$ → $\Delta P = +€176$

La convessità aggiunge €16 di guadagno — circa il 10% dell'effetto totale. Per variazioni grandi di tasso, trascurare la convessità porta a sottostimare i guadagni (o sovrastimare le perdite).

</details>

---
id: finanza-01-tvm
subject: finanza
topic_it: Matematica finanziaria
topic_en: Financial mathematics
title_it: Valore del denaro nel tempo (TVM)
title_en: Time value of money (TVM)
level: purple
order: 1
source_book: "J.C. Hull, Options, Futures and Other Derivatives; Bodie, Kane & Marcus, Investments"
source_chapter: "Cap. 1–2 — TVM"
stato: da-rielaborare
---

## 1. Intuizione — analogia concreta

Immagina di offrire a un amico la scelta tra ricevere €1000 oggi oppure €1000 tra un anno. Quasi chiunque sceglierebbe oggi — non per impazienza, ma per razionalità economica: €1000 disponibili adesso possono essere investiti, generare interessi, e diventare più di €1000 tra un anno. Questo principio fondamentale si chiama **valore temporale del denaro** (Time Value of Money, TVM).

Il TVM è il fondamento di tutta la matematica finanziaria. Ogni volta che una banca calcola una rata del mutuo, un analista valuta un'azienda, o un governo emette un'obbligazione, il TVM è al centro dei calcoli. Capirlo significa capire come i mercati finanziari misurano il valore nel tempo.

La chiave è il **tasso di interesse** $r$: la percentuale che misura quanto cresce (o quanto si sacrifica) il valore di un euro per ogni periodo di tempo. Un tasso del 5% annuo significa che €100 oggi equivalgono a €105 tra un anno — e inversamente, €105 ricevuti tra un anno valgono solo €100 oggi.

Il TVM ha due direzioni: **capitalizzazione** (portare un valore presente nel futuro) e **attualizzazione** (portare un valore futuro nel presente). Entrambe sono due facce della stessa moneta matematica.

## 2. Prerequisiti

- Potenze e radici: $a^n$, $a^{-n}$, $a^{1/n}$
- Funzione esponenziale $e^x$ e logaritmo naturale $\ln$
- Somme di progressioni geometriche: $\sum_{t=1}^T q^t = q\,\frac{1-q^T}{1-q}$
- Concetto intuitivo di limite: $\lim_{n\to\infty}(1+1/n)^n = e$

## 3. Teoria

### 3.1 Capitalizzazione semplice

L'**interesse semplice** calcola gli interessi solo sul capitale iniziale $PV$ (Present Value), ignorando gli interessi già maturati:

$$FV = PV\,(1 + rT)$$

dove $FV$ è il valore futuro (Future Value), $r$ è il tasso per periodo e $T$ è il numero di periodi. La crescita è lineare nel tempo.

### 3.2 Capitalizzazione composta

L'**interesse composto** capitalizza anche gli interessi già maturati — gli interessi producono ulteriori interessi. Con capitalizzazione annua:

$$FV = PV\,(1 + r)^T$$

Il fattore $(1+r)^T$ è detto **fattore di capitalizzazione**. La crescita è esponenziale: piccole differenze di tasso producono enormi differenze su orizzonti lunghi.

**Esempio:** €1 al 7% annuo composto per 30 anni diventa $(1{,}07)^{30} \approx 7{,}61€$ — quasi 8 volte il capitale iniziale.

### 3.3 Capitalizzazione con $m$ periodi per anno

Se gli interessi vengono capitalizzati $m$ volte per anno con tasso nominale $r_{\text{nom}}$:

$$FV = PV\left(1 + \frac{r_{\text{nom}}}{m}\right)^{mT}$$

Ogni anno avvengono $m$ capitalizzazioni, ciascuna con tasso $r_{\text{nom}}/m$. Il **tasso effettivo annuo (TAE)** equivalente è:

$$r_{\text{eff}} = \left(1 + \frac{r_{\text{nom}}}{m}\right)^m - 1$$

Il TAE permette di confrontare prodotti finanziari con frequenze di capitalizzazione diverse.

### 3.4 Capitalizzazione continua

Al limite per $m \to \infty$, usando la definizione di $e$:

$$\lim_{m\to\infty}\left(1+\frac{r}{m}\right)^{mT} = e^{rT}$$

Quindi con capitalizzazione continua:

$$FV = PV \cdot e^{rT}$$

La capitalizzazione continua è il caso limite teorico, molto usata in finanza matematica e nei modelli dei derivati (Black-Scholes, ecc.) perché semplifica enormemente le derivazioni.

### 3.5 Attualizzazione (discounting)

L'operazione inversa: trovare il valore attuale $PV$ di un flusso futuro $FV$:

$$PV = \frac{FV}{(1+r)^T} = FV \cdot (1+r)^{-T}$$

Il fattore $(1+r)^{-T}$ si chiama **fattore di sconto** (discount factor) e misura quanto vale oggi un euro ricevuto tra $T$ periodi. Con capitalizzazione continua:

$$PV = FV \cdot e^{-rT}$$

### 3.6 Rendita annua (annuity)

Una **rendita annua** è una sequenza di pagamenti uguali $C$ per $T$ periodi. Il valore attuale è la somma dei valori attuali di ogni pagamento:

$$PV = \sum_{t=1}^T \frac{C}{(1+r)^t} = C \cdot \frac{1-(1+r)^{-T}}{r}$$

Il fattore $\dfrac{1-(1+r)^{-T}}{r}$ è il **fattore di annualità** (present value annuity factor, PVAF).

### 3.7 Rendita perpetua

Una **rendita perpetua** è una sequenza infinita di pagamenti costanti $C$. Poiché $(1+r)^{-T} \to 0$ per $T\to\infty$:

$$PV = \lim_{T\to\infty} C \cdot \frac{1-(1+r)^{-T}}{r} = \frac{C}{r}$$

Formula elegante e potente: il valore di un flusso perpetuo è semplicemente il flusso diviso il tasso.

### 3.8 Rendita perpetua crescente (modello di Gordon)

Se i flussi crescono a tasso costante $g$ per sempre (con $r > g$):

$$PV = \frac{C}{r - g}$$

Questa formula è alla base del **modello di Gordon** per la valutazione delle azioni.

## 4. Derivazioni

### 4.1 Dalla somma geometrica alla formula dell'annuity

Scriviamo esplicitamente la somma:

$$PV = \frac{C}{1+r} + \frac{C}{(1+r)^2} + \cdots + \frac{C}{(1+r)^T}$$

Poniamo $v = (1+r)^{-1}$ (fattore di sconto unitario). Allora:

$$PV = C\,(v + v^2 + \cdots + v^T) = C \cdot v \cdot \frac{1-v^T}{1-v}$$

Sostituendo $v = (1+r)^{-1}$ e $1-v = r/(1+r)$:

$$PV = C \cdot \frac{1}{1+r} \cdot \frac{1 - (1+r)^{-T}}{\,r/(1+r)\,} = C \cdot \frac{1-(1+r)^{-T}}{r}$$

### 4.2 Derivazione del TAE

Investire €1 per un anno con tasso nominale $r_{\text{nom}}$ e $m$ capitalizzazioni annue dà:

$$\left(1 + \frac{r_{\text{nom}}}{m}\right)^m$$

Per avere lo stesso risultato con capitalizzazione annua a tasso $r_{\text{eff}}$:

$$1 + r_{\text{eff}} = \left(1 + \frac{r_{\text{nom}}}{m}\right)^m \implies r_{\text{eff}} = \left(1 + \frac{r_{\text{nom}}}{m}\right)^m - 1$$

Il TAE cresce con $m$: capitalizzare più spesso è più vantaggioso per il creditore.

### 4.3 Limite verso la capitalizzazione continua

Sia $x = m/r$, così che $m = rx$. Per $m\to\infty$ anche $x\to\infty$:

$$\left(1+\frac{r}{m}\right)^m = \left(1+\frac{1}{x}\right)^{rx} = \left[\left(1+\frac{1}{x}\right)^x\right]^r \to e^r$$

Quindi per $T$ anni: $(1+r/m)^{mT} \to e^{rT}$.

## 5. Esempi

**Esempio 1 — Confronto interesse semplice vs composto**

€10.000 investiti per 20 anni al 6% annuo.

- Semplice: $FV = 10000 \cdot (1 + 0{,}06 \cdot 20) = 10000 \cdot 2{,}2 = €22.000$
- Composto: $FV = 10000 \cdot (1{,}06)^{20} = 10000 \cdot 3{,}2071 \approx €32.071$

Differenza di oltre €10.000 — la capitalizzazione composta su lunghi periodi fa una differenza enorme.

---

**Esempio 2 — Valore attuale di un flusso futuro**

Riceverai €50.000 tra 10 anni. Con un tasso di attualizzazione del 7%, quanto vale oggi?

$$PV = \frac{50000}{(1{,}07)^{10}} = \frac{50000}{1{,}9672} \approx €25.419$$

Conclusione: ricevere €25.419 oggi è equivalente a ricevere €50.000 tra 10 anni (al 7%).

---

**Esempio 3 — Capitalizzazione continua vs annua**

€5.000 al 8% per 15 anni:
- Annua: $5000 \cdot (1{,}08)^{15} = 5000 \cdot 3{,}1722 \approx €15.861$
- Continua: $5000 \cdot e^{0{,}08\cdot15} = 5000 \cdot e^{1{,}2} = 5000 \cdot 3{,}3201 \approx €16.600$

La differenza è circa €739 (circa 4,7% in più con la capitalizzazione continua).

---

**Esempio 4 — TAE con capitalizzazione mensile**

Tasso nominale 12% con capitalizzazione mensile ($m=12$):

$$r_{\text{eff}} = \left(1 + \frac{0{,}12}{12}\right)^{12} - 1 = (1{,}01)^{12} - 1 = 1{,}1268 - 1 = 12{,}68\%$$

Il tasso effettivo è superiore al tasso nominale dichiarato.

---

**Esempio 5 — Valore attuale di un mutuo**

Mutuo da €300.000 a 20 anni, tasso 4% annuo. Qual è la rata annua?

Dalla formula dell'annuity: $PV = C \cdot \frac{1-(1+r)^{-T}}{r}$

$$C = \frac{PV \cdot r}{1-(1+r)^{-T}} = \frac{300000 \cdot 0{,}04}{1-(1{,}04)^{-20}} = \frac{12000}{1-0{,}4564} = \frac{12000}{0{,}5436} \approx €22.072 \text{ per anno}$$

---

**Esempio 6 — Rendita perpetua**

Un fondo immobiliare genera €80.000 di affitti all'anno per sempre. Con tasso di attualizzazione del 5%, il valore del fondo è:

$$PV = \frac{80000}{0{,}05} = €1.600.000$$

---

**Esempio 7 — Modello di Gordon**

Un'azienda paga un dividendo di €3 quest'anno, con crescita attesa perpetua del 3% e tasso richiesto del 8%:

$$PV = \frac{3}{0{,}08 - 0{,}03} = \frac{3}{0{,}05} = €60 \text{ per azione}$$

## 6. Grafico

```plot
{"fn":"1/Math.pow(1+0.05,x)","domain":[0,30],"yDomain":[0,1.1],"title":"Fattore di sconto al 5%: valore oggi di €1 ricevuto tra t anni","label1":"(1+5%)^(-t)","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"PV*Math.pow(1+r,x)","domain":[0,30],"yDomain":[-10,600],"params":[{"name":"PV","min":10,"max":100,"step":5,"default":50},{"name":"r","min":0.01,"max":0.15,"step":0.01,"default":0.05}],"title":"Valore futuro di PV euro investiti per t anni al tasso r"}
```

## 8. Errori comuni

**Errore 1 — Confondere tasso nominale e tasso effettivo.** Un tasso nominale del 12% mensile non è lo stesso del 12% annuo effettivo. Bisogna sempre specificare la frequenza di capitalizzazione e convertire al TAE prima di confrontare prodotti diversi.

**Errore 2 — Usare interesse semplice dove serve il composto.** L'interesse semplice è raramente usato nella pratica finanziaria oltre a brevi periodi (meno di un anno). Usarlo per lunghi orizzonti sottostima enormemente il valore futuro.

**Errore 3 — Dimenticare la condizione $r > g$ nel modello di Gordon.** Se $g \geq r$, la serie diverge e la formula non ha senso. Una crescita del dividendo superiore al tasso di attualizzazione è insostenibile nel lungo periodo.

**Errore 4 — Attualizzare flussi a periodi diversi con lo stesso fattore.** Ogni flusso va attualizzato al numero esatto di periodi che lo separa dall'oggi: $C_t / (1+r)^t$, non $C_t / (1+r)$ per tutti.

**Errore 5 — Ignorare l'inflazione.** Il tasso di interesse reale differisce da quello nominale: $r_{\text{reale}} \approx r_{\text{nominale}} - \pi$ (equazione di Fisher). Attualizzare flussi reali con tassi nominali è un errore frequente nelle analisi aziendali.

**Errore 6 — Sommare flussi in periodi diversi senza attualizzarli.** Non ha senso sommare €100 ricevuti oggi con €100 ricevuti tra 5 anni: bisogna prima riportarli tutti alla stessa data.

**Errore 7 — Confondere annualità ordinaria e annualità anticipata.** Nella rendita ordinaria i flussi arrivano a fine periodo; in quella anticipata a inizio periodo. La seconda vale di un fattore $(1+r)$ in più.

## 9. Applicazioni reali

**Valutazione di obbligazioni:** il prezzo di un bond è il valore attuale di cedole future più il rimborso del capitale, attualizzati al YTM corrente di mercato. Tutto il pricing dei titoli obbligazionari si basa sul TVM.

**Analisi investimenti aziendali (NPV):** per decidere se realizzare un progetto, le aziende calcolano il Valore Attuale Netto sommando i flussi di cassa futuri attualizzati al costo del capitale meno l'investimento iniziale. Se NPV > 0, il progetto crea valore.

**Mutui e prestiti:** le banche usano la formula dell'annuity per calcolare le rate dei mutui. Il piano di ammortamento (come la quota capitale e la quota interessi variano nel tempo) è interamente derivato dal TVM.

**Previdenza e piani pensionistici:** quanto occorre accantonare ogni anno per raggiungere un certo capitale in pensione? La risposta è la formula del valore futuro di un'annuity applicata al contrario — trovare il versamento $C$ dato il target $FV$.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Interesse semplice | $FV = PV(1 + rT)$ | Crescita lineare |
| Interesse composto | $FV = PV(1+r)^T$ | Crescita esponenziale |
| Capitalizzazione $m$ volte/anno | $FV = PV(1 + r/m)^{mT}$ | $r$ nominale |
| Capitalizzazione continua | $FV = PV \cdot e^{rT}$ | Limite per $m\to\infty$ |
| Fattore di sconto | $v^T = (1+r)^{-T}$ | Valore oggi di €1 futuro |
| Attualizzazione | $PV = FV \cdot (1+r)^{-T}$ | Operazione inversa |
| TAE | $r_{\text{eff}} = (1+r/m)^m - 1$ | Confronto prodotti |
| Annuity $T$ periodi | $PV = C \cdot \frac{1-(1+r)^{-T}}{r}$ | Mutui, piani rata |
| Rendita perpetua | $PV = C/r$ | $T\to\infty$ |
| Perpetuità crescente | $PV = C/(r-g)$ | Richiede $r > g$ |

## 11. Esercizi

<details>
<summary>Esercizio 1: Capitalizzazione composta e regola del 72</summary>

Hai €10.000 da investire. Vuoi raddoppiarli. Con un tasso del 6% annuo composto, quanti anni occorrono esattamente? Verifica anche con la **regola del 72** (approssimazione: anni ≈ 72/tasso%).

**Soluzione:**

Cerchiamo $T$ tale che $FV = 2 \cdot PV$, cioè $(1{,}06)^T = 2$.

Applicando il logaritmo: $T = \ln(2)/\ln(1{,}06) = 0{,}6931/0{,}0583 \approx 11{,}90$ anni.

Regola del 72: $T \approx 72/6 = 12$ anni — ottima approssimazione!

La regola del 72 funziona bene per tassi tra 6% e 10%.

</details>

<details>
<summary>Esercizio 2: Confronto TAE tra due conti deposito</summary>

Conto A: tasso nominale 5% con capitalizzazione trimestrale. Conto B: tasso nominale 4,9% con capitalizzazione continua. Quale conviene?

**Soluzione:**

TAE conto A: $(1 + 0{,}05/4)^4 - 1 = (1{,}0125)^4 - 1 = 1{,}05094 - 1 = 5{,}094\%$

TAE conto B: $e^{0{,}049} - 1 = 1{,}05022 - 1 = 5{,}022\%$

Conviene il Conto A (TAE 5,094% > 5,022%) nonostante il tasso nominale leggermente superiore.

</details>

<details>
<summary>Esercizio 3: Valore attuale di un piano ferie</summary>

Un dipendente riceverà un bonus di €5.000 tra 2 anni, €8.000 tra 4 anni e €12.000 tra 6 anni. Con tasso di attualizzazione del 6%, qual è il valore attuale totale?

**Soluzione:**

$$PV = \frac{5000}{(1{,}06)^2} + \frac{8000}{(1{,}06)^4} + \frac{12000}{(1{,}06)^6}$$

$$= \frac{5000}{1{,}1236} + \frac{8000}{1{,}2625} + \frac{12000}{1{,}4185}$$

$$= 4450{,}99 + 6338{,}28 + 8459{,}43 = \mathbf{€19.248{,}70}$$

</details>

<details>
<summary>Esercizio 4: Rata del mutuo</summary>

Mutuo da €200.000 a tasso 3,5% annuo, durata 25 anni. Calcola la rata annua e il totale degli interessi pagati.

**Soluzione:**

$$C = \frac{200000 \cdot 0{,}035}{1-(1{,}035)^{-25}} = \frac{7000}{1-0{,}4231} = \frac{7000}{0{,}5769} \approx €12.131 \text{ per anno}$$

Totale pagato: $12131 \times 25 = €303.275$

Totale interessi: $303.275 - 200.000 = \mathbf{€103.275}$ — più della metà del capitale!

</details>

<details>
<summary>Esercizio 5: Rendita perpetua con crescita</summary>

Un immobile genera affitti di €24.000 all'anno, che si prevede crescano del 2% per sempre. Il tasso di attualizzazione è 7%. Qual è il valore dell'immobile?

**Soluzione:**

$$PV = \frac{C}{r-g} = \frac{24000}{0{,}07-0{,}02} = \frac{24000}{0{,}05} = \mathbf{€480.000}$$

Se il tasso di crescita degli affitti salisse al 3%, il valore diventerebbe $24000/0{,}04 = €600.000$ (+25%).

</details>

<details>
<summary>Esercizio 6: Capitalizzazione continua in Black-Scholes</summary>

In un modello di pricing di opzioni, il fattore di sconto continuo è $e^{-rT}$. Con $r = 5\%$ e $T = 0{,}5$ anni (6 mesi), calcola il fattore di sconto e confrontalo con quello composto annuo.

**Soluzione:**

Continuo: $e^{-0{,}05 \times 0{,}5} = e^{-0{,}025} = 0{,}9753$

Composto annuo: $(1{,}05)^{-0{,}5} = 1/\sqrt{1{,}05} = 1/1{,}0247 = 0{,}9759$

Differenza: circa 0,06% — trascurabile a breve termine, importante su scadenze lunghe e capitali grandi.

</details>

<details>
<summary>Esercizio 7: Quanto risparmiare ogni anno per la pensione</summary>

Hai 30 anni e vuoi avere €500.000 a 65 anni (35 anni di risparmio). Con un rendimento annuo del 6%, quanto devi versare ogni anno?

**Soluzione:**

Dobbiamo trovare $C$ tale che il valore futuro dell'annuity sia €500.000.

$$FV = C \cdot \frac{(1+r)^T - 1}{r} \implies C = \frac{FV \cdot r}{(1+r)^T - 1}$$

$$C = \frac{500000 \cdot 0{,}06}{(1{,}06)^{35} - 1} = \frac{30000}{7{,}6861 - 1} = \frac{30000}{6{,}6861} \approx \mathbf{€4.487 \text{ per anno}}$$

Meno di €375 al mese per 35 anni! Il potere del tempo e della capitalizzazione composta.

</details>

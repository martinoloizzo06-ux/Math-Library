---
id: finanza-15-comportamentale
subject: finanza
topic_it: Finanza aziendale
topic_en: Corporate finance
title_it: Finanza comportamentale
title_en: Behavioral finance
level: purple
order: 15
source_book: "Bodie, Kane & Marcus, Investments"
source_chapter: "Cap. 12 — Finanza comportamentale"
stato: da-rielaborare
---

## 1. Intuizione — analogia concreta

La teoria finanziaria classica assume che gli investitori siano **razionali**: calcolano con precisione le probabilità, aggiornano correttamente le credenze (Bayes), e massimizzano l'utilità attesa. Ma basta osservare il proprio comportamento per vedere che non è così.

Hai mai venduto un'azione in guadagno troppo in fretta (per "assicurarti il guadagno") ma tenuto una in perdita sperando nella ripresa? Hai mai comprato qualcosa solo perché era "in offerta" rispetto al prezzo di qualche settimana fa, senza sapere se il prezzo originale fosse giusto? Hai mai preso una decisione diversa quando la stessa statistica ti veniva presentata come "90% di successo" invece di "10% di fallimento"?

Questi sono **bias cognitivi** — errori sistematici e prevedibili nella cognizione umana. Daniel Kahneman e Amos Tversky hanno dimostrato sperimentalmente negli anni '70 che questi errori non sono casuali: seguono pattern precisi. Nel 2002 Kahneman vinse il Nobel per aver introdotto la psicologia cognitiva nell'economia.

La **finanza comportamentale** studia come questi bias influenzano i prezzi dei mercati finanziari e le decisioni degli investitori. Non è solo accademia: capire i propri bias è il primo passo per non caderne vittima. E capire i bias degli altri investitori è il modo in cui alcuni fondi generano alfa — sfruttando le anomalie di prezzo che i bias creano.

## 2. Prerequisiti

- Teoria dell'utilità attesa (nozioni base)
- Concetto di razionalità in economia (homo economicus)
- Efficienza dei mercati (ipotesi EMH) — per capire cosa la finanza comportamentale mette in discussione
- Concetto di rendimento anomalo (alpha) vs rendimento di mercato (beta)
- Probabilità e valore atteso

## 3. Teoria

### Il sistema dual process (Kahneman)

Kahneman distingue due sistemi cognitivi:

**Sistema 1 — Pensiero veloce:** automatico, intuitivo, emotivo. Funziona per euristiche (regole del pollice). Veloce, poco costoso, ma soggetto a bias sistematici.

**Sistema 2 — Pensiero lento:** deliberativo, logico, lento, costoso in termini di sforzo cognitivo. Capace di calcoli precisi, ma spesso non viene attivato.

La maggior parte delle decisioni finanziarie quotidiane è guidata dal Sistema 1 — questo apre la porta ai bias cognitivi.

### Prospect Theory (Kahneman e Tversky, 1979)

La **Prospect Theory** è la principale alternativa alla teoria dell'utilità attesa (EU) per descrivere le decisioni sotto incertezza.

**Punto di riferimento (reference point):** le persone valutano gli outcome come **guadagni o perdite rispetto a un punto di riferimento** (tipicamente lo status quo o il prezzo di acquisto), non come livelli assoluti di ricchezza.

**Funzione del valore $v(x)$:**

$$v(x) = \begin{cases} x^\alpha & \text{se } x \geq 0 \quad \text{(guadagni)} \\ -\lambda (-x)^\beta & \text{se } x < 0 \quad \text{(perdite)} \end{cases}$$

con parametri stimati: $\alpha = \beta \approx 0.88$, $\lambda \approx 2.25$.

Proprietà:
- **Concava per i guadagni** ($\alpha < 1$): avversione al rischio nella zona dei guadagni. Si preferisce un guadagno certo a un guadagno atteso uguale ma incerto.
- **Convessa per le perdite** ($\beta < 1$): propensione al rischio nella zona delle perdite. Si preferisce un rischio a una perdita certa dello stesso importo.
- **Più ripida per le perdite** ($\lambda > 1$): le perdite fanno "più male" dei guadagni equivalenti che fanno "piacere". Con $\lambda = 2.25$: perdere €100 pesa psicologicamente come guadagnare €225.

**Ponderazione delle probabilità $w(p)$:** le persone non pesano le probabilità in modo lineare:
- **Sovrapesano le probabilità basse:** la differenza tra 0% e 1% sembra più grande di quella tra 40% e 41%. Questo spiega lotterie e assicurazioni: si paga troppo per eventi rari.
- **Sottopesano le probabilità intermedie-alte:** si ignora la differenza tra 95% e 96% di successo. Questo spiega l'underinsurance contro eventi probabili ma non certi.

**Funzione di ponderazione:**

$$w(p) = \frac{p^\gamma}{(p^\gamma + (1-p)^\gamma)^{1/\gamma}}, \quad \gamma \approx 0.69$$

### Bias cognitivi principali

**Overconfidence (eccessiva sicurezza in sé):** gli investitori sistematicamente sovrastimano la precisione delle proprie previsioni e la propria capacità di "battere il mercato". Conseguenze: trading eccessivo (si perde rendimento per i costi di transazione), sottostima del rischio, portafogli poco diversificati.

Evidenza empirica: Barber e Odean (2000) mostrano che gli investitori individuali che tradano di più guadagnano il 6% in meno all'anno di quelli che tradano di meno — principalmente per i costi e il timing sbagliato.

**Anchoring (ancoraggio):** le persone si "anchorano" a un numero di riferimento (spesso il prezzo di acquisto o il 52-week high) e faticano ad aggiornare le proprie valutazioni. Un analista che stima il prezzo target di un titolo parte spesso dal prezzo corrente e si muove "poco" — anche se le nuove informazioni giustificherebbero una revisione drastica.

**Availability heuristic (euristica della disponibilità):** si valuta la probabilità di un evento in base alla facilità con cui esempi vengono in mente. Dopo una crisi finanziaria o un crollo di borsa, il rischio appare esageratamente alto. Dopo anni di mercato rialzista, il rischio appare troppo basso — si dimentica che i crolli esistono.

**Framing (effetto inquadratura):** le scelte dipendono da come le opzioni vengono presentate, violando l'assioma di invarianza della EU. Lo stesso dato — "90% di sopravvivenza" vs "10% di mortalità" — porta a decisioni diverse. Nel marketing finanziario: "rendimento del 4%" suona meglio di "1 anno su 25 potete perdere tutto il capitale".

**Disposition effect:** la tendenza a vendere le azioni in guadagno troppo in fretta ("realizzare il guadagno") e a tenere le azioni in perdita troppo a lungo ("aspettare che recuperino"). Razionalmente, la decisione di vendere o tenere un titolo dovrebbe dipendere solo dalle prospettive future — non dal prezzo di acquisto (che è un costo affondato irrecuperabile).

**Mental accounting (contabilità mentale):** le persone organizzano la ricchezza in "conti mentali" separati con regole diverse. I soldi vinti a poker vengono spesi più facilmente di quelli guadagnati col lavoro. Si è più disposti ad accettare rischi con i "profitti del mercato" che col "capitale base". Questo viola il principio economico della fungibilità del denaro.

**Herding (effetto gregge):** gli investitori tendono a imitare il comportamento della maggioranza, invece di analizzare i fondamentali in modo indipendente. Questo amplifica le tendenze di mercato: alimenta le bolle (tutti comprano quello che comprano gli altri) e aggrava i crolli (tutti vendono).

**Overreaction e underreaction:** De Bondt e Thaler (1985) mostrano che i titoli che hanno avuto rendimenti molto negativi nei 3-5 anni precedenti tendono a sovraperformare nei successivi 3-5 anni. Gli investitori reagiscono in modo eccessivo alle cattive notizie, deprimendo troppo i prezzi. Nel breve termine, invece, c'è underreaction: le notizie vengono incorporate nel prezzo troppo lentamente (momentum).

### Limiti all'arbitraggio

Anche se esistono prezzi anomali, i trader razionali non li correggono sempre. Perché?

**Rischio di arbitraggio:** un titolo sopravvalutato può diventare ancora più sopravvalutato prima di correggere. Vendere allo scoperto un titolo in bolla richiede di sopravvivere finanziariamente fino alla correzione — "il mercato può rimanere irrazionale più a lungo di quanto tu possa rimanere solvente" (attribuita a Keynes).

**Rumore dei trader (noise trader risk):** le forze irrazionali (sentiment, moda, panico) possono persistere a lungo. Il trader razionale che vuole sfruttare l'anomalia deve esporsi a questo rischio.

**Costi di transazione e vincoli istituzionali:** le vendite allo scoperto richiedono il prestito dei titoli (costoso), sono soggette a limiti regolatori, e comportano perdite illimitate in teoria. Molti fondi istituzionali (es. fondi pensione) hanno divieti espliciti alle posizioni short.

**Sincronizzazione dei trader razionali:** anche se tutti sanno che un titolo è sopravvalutato, ognuno aspetta che sia "qualcun altro" a venderlo per primo. Il meccanismo di correzione non scatta automaticamente.

**Modello DSSW (De Long, Shleifer, Summers, Waldmann, 1990):** formalizza l'idea che i trader irrazionali (noise traders) possono persistere e guadagnare in equilibrio, proprio perché il rischio che creano non viene completamente arbitraggiato.

### Anomalie di mercato

Le anomalie di mercato sono pattern di rendimento che contraddicono l'efficienza dei mercati (EMH):

**Value anomaly:** le azioni con basso P/E o P/B (value stocks) tendono a sovraperformare le growth stocks nel lungo periodo (Fama & French 1992). Interpretazione comportamentale: gli investitori sono eccessivamente ottimisti sulle growth stocks e eccessivamente pessimisti sulle value stocks.

**Momentum:** le azioni con rendimenti alti negli ultimi 6-12 mesi tendono a continuare a salire nel breve termine (Jegadeesh & Titman 1993). Possibile spiegazione: underreaction alle informazioni — il prezzo aggiusta lentamente.

**January effect:** storicamente, i titoli small-cap tendono a sovraperformare a gennaio. Spiegazione: vendite fiscali di fine anno a dicembre (per realizzare perdite) seguite da riacquisti a gennaio.

**Post-earnings announcement drift (PEAD):** i titoli che annunciano utili sorprendentemente positivi continuano a salire nei 60 giorni successivi, invece di incorporare immediatamente la notizia. Ulteriore prova di underreaction.

## 4. Derivazioni

### Derivazione dell'avversione alle perdite nella Prospect Theory

Data la funzione di valore con $\alpha = \beta = 1$ (lineare, per semplicità) e $\lambda = 2.25$:

$$v(x) = \begin{cases} x & x \geq 0 \\ -2.25 \cdot x & x < 0 \end{cases}$$

Proposta: scommessa 50/50 — guadagno €X con probabilità 0.5, perdita €Y con probabilità 0.5.

Valore atteso (EU): $0.5X - 0.5Y$. Si accetta se $X > Y$.

Prospect value: $0.5 \cdot w(0.5) \cdot X - 0.5 \cdot w(0.5) \cdot 2.25 Y$. Si accetta se $X > 2.25 Y$.

Con ponderazione delle probabilità $w(0.5) \approx 0.42$ (sottopeso del 50%):

$0.42 \times 0.5 \cdot X - 0.42 \times 0.5 \cdot 2.25 Y > 0 \implies X > 2.25 Y$

Un investitore medio richiede un guadagno potenziale di almeno 2.25 volte la perdita per accettare una scommessa equiprobabile. Nelle famose parole di Kahneman: "le perdite fanno più male del doppio di quanto i guadagni facciano piacere."

### Il disposition effect dalla Prospect Theory

Il disposition effect segue direttamente dalla forma della funzione di valore:

- **Azione in guadagno** (sopra il prezzo di acquisto): siamo nella zona concava. Avversione al rischio → si preferisce vendere (realizzare il guadagno certo) rispetto a tenere (guadagno incerto).
- **Azione in perdita** (sotto il prezzo di acquisto): siamo nella zona convessa. Propensione al rischio → si preferisce tenere (speranza di recupero) rispetto a vendere (perdita certa).

Questo pattern è anti-ottimale: fiscalmente conviene fare il contrario (realizzare le perdite per ottenere il credito fiscale e tenere i guadagni per rinviarne la tassazione).

## 5. Esempi

**Esempio 1 — Framing dell'avversione alle perdite (esperimento classico)**

**Problema A:** hai €1.000. Scegli tra:
- (1) Ricevi €500 con certezza.
- (2) 50% di probabilità di ricevere €1.000, 50% di non ricevere nulla.

Esperimento: la maggioranza sceglie (1) — avversione al rischio nel dominio dei guadagni.

**Problema B:** hai €2.000. Scegli tra:
- (1) Perdi €500 con certezza.
- (2) 50% di probabilità di perdere €1.000, 50% di non perdere nulla.

Esperimento: la maggioranza sceglie (2) — propensione al rischio nel dominio delle perdite.

Ma il payoff finale è identico! Problema A: (1) → €1.500 certo, (2) → €2.000/€1.000. Problema B: (1) → €1.500 certo, (2) → €1.000/€2.000. La **presentazione** cambia la scelta, violando l'assioma di invarianza.

---

**Esempio 2 — Disposition effect quantificato**

Studio di Odean (1998) su 10.000 conti retail: gli investitori hanno il **142% in più di probabilità** di vendere azioni in guadagno rispetto a quelle in perdita, anche controllandoci altri fattori.

Conseguenza: i titoli venduti (in guadagno) continuano a salire del 3.4% nei 12 mesi successivi; i titoli tenuti (in perdita) scendono di un ulteriore 1.1%. Il disposition effect costa mediamente circa il 4% di rendimento annuo.

---

**Esempio 3 — Overconfidence e trading eccessivo**

Un investitore con portafoglio €50.000 esegue mediamente 3 transazioni al mese (36 all'anno). Costo medio per transazione (spread + commissioni): €30. Costo annuo: €1.080 = 2.16% del portafoglio.

Se il rendimento lordo è 8%, il rendimento netto è 5.84% — quasi un terzo del rendimento viene eroso dai costi generati dall'overconfidence.

Confronto: un investitore passivo che detiene un ETF e fa 2 transazioni all'anno ha costi di €60 = 0.12% del portafoglio. Rendimento netto: 7.88%.

---

**Esempio 4 — Anchoring: l'analista e il 52-week high**

Un analista studia azione XYZ che quota €45. Il massimo a 52 settimane era €60. L'analista stabilisce un target price di €52 (ipotetico "recovery" al 87% del massimo storico) — non basato sui fondamentali ma sull'anchoring al massimo precedente.

Un approccio fondamentale corretto richiederebbe: stima del FCFF → DCF al WACC → target price basato sul valore intrinseco. L'anchoring al prezzo storico è un bias procedurale che distorce la valutazione.

---

**Esempio 5 — Herding e bolla tech (1999-2000)**

Nel 1999, il P/E medio del NASDAQ era superiore a 100. Molte aziende internet non avevano utili ma quotavano a moltiplicatori di ricavi astronomici. Ogni settimana, nuove IPO raddoppiavano il primo giorno di trading. Gli investitori seguivano la tendenza (herding), spinti dall'overconfidence ("questa volta è diverso — internet ha cambiato tutto") e dall'availability heuristic (tutti conoscevano qualcuno che aveva guadagnato molto con i tech stock).

Il NASDAQ perse il 78% dal picco di marzo 2000 al minimo di ottobre 2002 — 2 anni e mezzo di distruzione di valore. Il limite all'arbitraggio: chi aveva shortato i tech stock nel 1998 era stato azzerato prima della correzione.

---

**Esempio 6 — Availability heuristic e sotto-diversificazione**

Dopo il crack di Parmalat (2003) e Cirio (2002), i piccoli investitori italiani che avevano subito perdite ridussero fortemente l'esposizione alle obbligazioni corporate italiane. L'availability delle esperienze negative distorceva la percezione del rischio: si evitavano obbligazioni corporate in generale, anche quelle di ottima qualità, mentre si accettavano rischi in altri strumenti (es. prodotti strutturati complessi) le cui perdite erano meno "disponibili" nella memoria.

---

**Esempio 7 — Mental accounting: l'effetto casa-money**

Dopo una serie di vincite al casino, un giocatore ha €500 di "profitti del gioco" separati mentalmente dal suo "capitale". È più disposto a scommettere i €500 perché li percepisce come "soldi del casino, non miei". Ma €500 sono €500 — la fungibilità del denaro rende questo ragionamento un errore.

Lo stesso effetto opera nei mercati: dopo anni di guadagni, gli investitori assumono più rischi perché "stanno giocando con le vincite" — dimenticando che anche le plusvalenze non realizzate fanno parte del loro patrimonio reale.

## 6. Grafico

```plot
{"fn":"x > 0 ? Math.pow(x, 0.88) : -2.25*Math.pow(-x, 0.88)","domain":[-50,50],"yDomain":[-80,40],"title":"Funzione del valore della Prospect Theory: asimmetria guadagni/perdite","label1":"v(x) = x^0.88 per x>0, -2.25(-x)^0.88 per x<0","color":"steelblue","xLabel":"Outcome x (€)","yLabel":"Valore psicologico v(x)"}
```

## 7. Interattivo

```slider
{"fn":"x >= 0 ? Math.pow(x, alpha/100) : -lambda/100 * Math.pow(-x, alpha/100)","domain":[-100,100],"yDomain":[-150,100],"params":[{"name":"alpha","min":50,"max":100,"step":5,"default":88},{"name":"lambda","min":100,"max":400,"step":25,"default":225}],"title":"Funzione del valore al variare di alpha (curvatura) e lambda (avversione alle perdite, in centesimi)"}
```

## 8. Errori comuni

**Errore 1 — Confondere bias cognitivi ed errori casuali.**
I bias cognitivi sono errori **sistematici e prevedibili** — non rumore casuale. L'overconfidence porta sempre nella stessa direzione (sovrastimare le proprie capacità); l'anchoring porta sempre verso il punto di riferimento. Questa sistematicità è ciò che li rende sfruttabili dagli investitori "razionali" che li riconoscono.

**Errore 2 — Pensare che i professionisti siano immuni dai bias.**
La ricerca mostra che analisti, gestori di fondi e banchieri d'investimento sono soggetti agli stessi bias dei retail investor — a volte anche di più (overconfidence è più pronunciata in chi ha avuto successo). La conoscenza teorica dei bias non elimina la loro influenza sul comportamento.

**Errore 3 — Confondere la Prospect Theory con la semplice avversione al rischio.**
La PT non dice solo che le persone sono avverse al rischio: dice che sono avverse al rischio nella zona dei guadagni e **propense** al rischio nella zona delle perdite. La forma a S della funzione di valore (concava per i guadagni, convessa per le perdite) è diversa dalla semplice concavità della funzione di utilità classica.

**Errore 4 — Dimenticare il punto di riferimento nella Prospect Theory.**
La PT valuta gli outcome rispetto al punto di riferimento (reference point), non in senso assoluto. Lo stesso guadagno di €100 può essere vissuto come una perdita se il punto di riferimento era "mi aspettavo €200". Il concetto di gain/loss dipende da cosa ci si aspettava.

**Errore 5 — Credere che le anomalie di mercato siano facili da sfruttare.**
Le anomalie (value, momentum, January effect) sono documentate in media su lunghi periodi, ma c'è alta varianza anno su anno. Un fondo che sfrutta il value premium può sottoperformare per 5-10 anni consecutivi (come accaduto negli anni 2010-2020). I costi di transazione, le imposte e il rischio di carriera rendono difficile la loro esploitazione sistematica.

**Errore 6 — Credere che il mercato sia "sempre irrazionale".**
La finanza comportamentale non nega che i mercati incorporino informazioni — solo che lo facciano in modo perfetto. Le anomalie tendono a correggere nel tempo (spesso non appena vengono documentate e rese pubbliche): il mercato è abbastanza efficiente da rendere difficile guadagnare sistematicamente sfruttando i bias altrui.

**Errore 7 — Confondere disposition effect e strategia contrarian.**
Il disposition effect è un bias che porta a **vendere presto i vincitori e tenere troppo i perdenti**. La strategia contrarian è razionale: compra i titoli che hanno perso molto (sfruttando l'overreaction) e vende quelli che sono saliti troppo. La differenza è che il contrarian si basa sui fondamentali, mentre il disposition effect si basa sul prezzo di acquisto personale.

## 9. Applicazioni reali

**Consulenza finanziaria e nudging:** la finanza comportamentale ha influenzato il design dei piani pensionistici. Il "Save More Tomorrow" (SMarT) program di Thaler e Benartzi usa il framing per aumentare il risparmio: i lavoratori si impegnano in anticipo ad aumentare la contribuzione pensionistica quando ricevono un aumento. L'ancoraggio al salario futuro riduce il dolore psicologico della contribuzione. In molti paesi, l'iscrizione automatica (opt-out invece di opt-in) ha triplicato la partecipazione ai fondi pensione.

**Trading algoritmico e exploit dei bias:** alcuni fondi quantitativi (es. Renaissance Technologies, AQR) costruiscono strategie sistematiche per sfruttare i bias altrui. Il momentum trading sfrutta l'underreaction; lo short selling sui titoli "hot" con alto Qtobin sfrutta l'overoptimismo; il value investing sfrutta l'overreaction negativa sulle value stock. L'algoritmo non è soggetto a bias emotivi — un vantaggio competitivo sul breve periodo.

**Comunicazione finanziaria e regolazione:** le autorità di vigilanza (Consob, ESMA) impongono ai produttori di strumenti finanziari di presentare le performance sia in termini di guadagno che di perdita, e di mostrare scenari sfavorevoli, proprio per contrastare il framing effect del marketing. I Key Information Document (KID) dei fondi UCITS sono progettati per essere leggibili e non usare framing ingannevoli.

**M&A e winner's curse:** nelle gare d'asta per acquisire un'azienda, l'overconfidence porta le aziende acquirenti a sopravvalutare sistematicamente i benefici delle sinergie. Il risultato statistico è che le acquisizioni, in media, distruggono valore per gli azionisti dell'acquirente (Roll 1986). Il prezzo di offerta include troppo dei "benefit to be realized" — il management è vittima dell'overconfidence e del winner's curse.

## 10. Riepilogo

| Concetto | Descrizione | Implicazione di mercato |
| --- | --- | --- |
| Overconfidence | Si sovrastima la propria precisione | Trading eccessivo, sotto-diversificazione |
| Anchoring | Ancoraggio a un numero di riferimento | Lenta revisione dei target price |
| Availability | Probabilità distorte da esempi vividi | Cicli di panico/euforia |
| Framing | Le scelte dipendono dalla presentazione | Marketing finanziario distorto |
| Disposition effect | Vendi vincitori, tieni perdenti | Costo opportunità 3-4% annuo |
| Mental accounting | Conti mentali separati | Rischio mal calibrato |
| Herding | Si segue la maggioranza | Bolle e crash amplificate |
| Prospect Theory | Asimmetria guadagni/perdite ($\lambda \approx 2.25$) | Avversione alle perdite sistematica |
| Limiti arbitraggio | I prezzi errati persistono | Le anomalie non si correggono subito |

## 11. Esercizi

<details>
<summary>Esercizio 1: Prospect Theory — valore psicologico</summary>

Con $\alpha = \beta = 0.88$ e $\lambda = 2.25$, calcola il valore psicologico $v(x)$ per:
(a) Un guadagno di €1.000.
(b) Una perdita di €1.000.
(c) Quale outcome ha valore assoluto maggiore? Di quanto?

**Soluzione:**

(a) $v(1000) = 1000^{0.88} = ?$

$\ln(v) = 0.88 \times \ln(1000) = 0.88 \times 6.9078 = 6.079 \implies v(1000) = e^{6.079} \approx 436$

(b) $v(-1000) = -2.25 \times 1000^{0.88} = -2.25 \times 436 = -981$

(c) La perdita di €1.000 ha valore assoluto $981$, il guadagno di €1.000 ha valore $436$. Il rapporto è $981/436 = 2.25$ — esattamente $\lambda$. Perdere €1.000 pesa psicologicamente $\lambda = 2.25$ volte di più di quanto guadagnare €1.000 faccia piacere.

</details>

<details>
<summary>Esercizio 2: Framing — invarianza violata</summary>

Presenta i seguenti due problemi a te stesso o a qualcuno e osserva la risposta.

**Problema 1:** Immagina di aver già perso €300 a poker. Ora ti viene offerto: (A) perdere altri €50 con certezza, oppure (B) 25% di probabilità di perdere altri €200, 75% di non perdere nulla.

**Problema 2:** Hai €1.000. Scegli: (A) ricevere €950 con certezza, oppure (B) 75% di ricevere €1.000, 25% di ricevere €800.

Valore atteso di B in entrambi i casi. Perché le risposte tendono a differire?

**Soluzione:**

Valore atteso del Problema 1, scelta B: $-(0.25 \times 200) = -€50$ — uguale a A. Valore atteso del Problema 2, scelta B: $0.75 \times 1.000 + 0.25 \times 800 = 750 + 200 = €950$ — uguale a A.

Entrambe le situazioni sono identiche in termini di valore atteso. Ma il framing cambia il punto di riferimento: nel Problema 1 si è in zona perdita (propensione al rischio → si tende a scegliere B). Nel Problema 2 si è in zona guadagno (avversione al rischio → si tende a scegliere A). La Prospect Theory prevede questa asimmetria; la teoria EU prevede scelte coerenti.

</details>

<details>
<summary>Esercizio 3: Disposition effect — calcolo del costo</summary>

Un investitore ha due azioni:
- Azione A: comprata a €50, ora vale €65 (+30%). Previsione: rendimento atteso 8% nei prossimi 12 mesi.
- Azione B: comprata a €80, ora vale €60 (-25%). Previsione: rendimento atteso 8% nei prossimi 12 mesi.

Per il disposition effect, l'investitore vende A e tiene B. Un anno dopo:
- A (venduta) sale a €70.20 (+8%).
- B (tenuta) scende a €60 × 0.92 = €55.20 (perde l'8%).

Calcola il costo del disposition effect.

**Soluzione:**

Assumendo che l'investitore abbia reinvestito il ricavato di A (€65) in un conto deposito al 2% invece di riacquistare A:

Rendimento effettivo reinvestimento: €65 × 1.02 = €66.30.
Rendimento se avesse tenuto A: €65 × 1.08 = €70.20. Costo opportunità: €3.90.

Perdita su B: valore scende da €60 a €55.20, perdita €4.80. Se avesse venduto B e reinvestito in A: €60 × 1.08 = €64.80. Costo del bias su B: €64.80 − €55.20 = €9.60.

Costo totale del disposition effect: €3.90 + €9.60 = €13.50 su un portafoglio iniziale di €125 = 10.8% perso per il bias.

</details>

<details>
<summary>Esercizio 4: Scommessa e avversione alle perdite</summary>

Ti viene proposta una scommessa: lancio di una moneta. Testa → perdi €100. Croce → vinci €X. Qual è il valore minimo di X che ti farebbe accettare la scommessa, secondo la Prospect Theory con $\lambda = 2.25$ e $\alpha = \beta = 1$ (funzione lineare)?

**Soluzione:**

Il valore atteso della Prospect Theory deve essere maggiore di zero:

$0.5 \times v(X) + 0.5 \times v(-100) > 0$

$0.5 \times X + 0.5 \times (-2.25 \times 100) > 0$

$0.5X > 0.5 \times 225$

$X > 225$

Secondo la Prospect Theory, un individuo medio accetterebbe la scommessa solo se la vincita potenziale fosse almeno €225 — oltre il doppio della perdita potenziale di €100. Questo spiega perché molte persone rifiutano scommesse "fair" (50/50 su €100/€100).

</details>

<details>
<summary>Esercizio 5: Anomalia di mercato — momentum</summary>

Un portafoglio "winner" (top decile di rendimento negli ultimi 12 mesi) ha registrato i seguenti rendimenti annuali nei 12 mesi successivi all'identificazione (dati ipotetici):

+15%, +8%, -3%, +22%, +11%, -5%, +18%, +6%, +14%, +9%.

Un portafoglio "benchmark" (mercato): +10%, +7%, +2%, +12%, +9%, -2%, +11%, +5%, +10%, +8%.

Calcola l'alpha medio annuo del momentum portfolio.

**Soluzione:**

Media winner: $(15+8-3+22+11-5+18+6+14+9)/10 = 95/10 = 9.5\%$

Media benchmark: $(10+7+2+12+9-2+11+5+10+8)/10 = 72/10 = 7.2\%$

Alpha medio: $9.5\% - 7.2\% = +2.3\%$ annuo.

L'anomalia del momentum produce un alpha positivo in questo campione. Ma nota la varianza: ci sono due anni in cui il winner perde. Un investitore deve sopportare la volatilità inter-annuale per catturare il premio medio nel lungo periodo — non è una "free lunch" facile da sfruttare.

</details>

<details>
<summary>Esercizio 6: Limiti all'arbitraggio — short selling</summary>

Un'azione tech ha un P/E di 150, mentre le comparabili nel settore hanno P/E di 30-40. Un analista stima il fair value a €50, ma il titolo quota €150.

Spiega perché è difficile arbitraggiare questa sopravvalutazione e quali rischi corrono i vendor allo scoperto.

**Soluzione:**

**Perché è difficile arbitraggiare:**

1. **Rischio di aumento:** il titolo sopravvalutato può continuare a salire (da €150 a €300 o €500) prima di correggere. Questo genera perdite mark-to-market immediate per chi è short.

2. **Costo del prestito:** per vendere allo scoperto, bisogna prendere il titolo a prestito. Titoli "di moda" spesso hanno costi di prestito dell'8-15% annuo — erodono la profittabilità anche se la tesi è giusta.

3. **Margin call:** se il titolo sale, il broker richiede margini aggiuntivi (margin call). Il trader razionale può essere costretto a chiudere la posizione in perdita prima della correzione.

4. **Squeeze:** se molti short sellers vengono forzati a coprire simultaneamente (come nel caso GameStop 2021), acquistano il titolo e lo fanno salire ulteriormente — un feedback loop che accelera le perdite.

5. **Timing incerto:** anche avendo ragione sul fair value, si può perdere per anni. Keynes: "il mercato può rimanere irrazionale più a lungo di quanto tu possa rimanere solvente".

In sintesi: avere ragione non basta — bisogna sopravvivere finanziariamente fino alla correzione, e questa incertezza di timing è il principale limite all'arbitraggio.

</details>

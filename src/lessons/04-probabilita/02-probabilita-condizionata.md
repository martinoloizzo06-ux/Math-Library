---
id: probabilita-02-condizionata
subject: probabilita
topic_it: Fondamenti
topic_en: Foundations
title_it: Probabilità condizionata e indipendenza
title_en: Conditional probability and independence
level: blue
order: 2
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 2 — Probabilità condizionata"
---

## 1. Intuizione

Immagina di sapere che l'esito di un dado è **pari**. Ora la domanda "è un 6?" cambia radicalmente: non stai più guardando tutti e 6 gli esiti, ma solo i 3 esiti pari $\{2, 4, 6\}$. La probabilità passa da $1/6$ a $1/3$. Questa operazione di **aggiornamento delle credenze alla luce di nuove informazioni** è esattamente la probabilità condizionata.

La probabilità condizionata è il cuore del ragionamento bayesiano: partiamo da una credenza iniziale (**prior**), osserviamo un'evidenza, e aggiorniamo la credenza (**posterior**). Questo schema — prior + evidenza → posterior — è alla base del machine learning, della diagnostica medica, dei filtri spam, e della statistica moderna.

Il **teorema di Bayes**, pur essendo algebricamente banale (è solo un riarrangiamento della definizione), è concettualmente rivoluzionario: ci dice come invertire le probabilità condizionate. Sappiamo quanto è probabile un sintomo dato una malattia; Bayes ci dice quanto è probabile la malattia dato il sintomo.

L'**indipendenza** è il caso speciale in cui conoscere $B$ non cambia nulla sulla probabilità di $A$: informazione irrilevante. Questo concetto è cruciale per semplificare calcoli complessi e per modellare variabili che "non si parlano".

## 2. Prerequisiti

- Spazi di probabilità e assiomi di Kolmogorov (lezione precedente)
- Operazioni sugli insiemi: intersezione, unione, complemento
- Concetto di partizione di $\Omega$
- Algebra di base: frazioni, prodotti

## 3. Teoria

### Probabilità condizionata

**Definizione.** Dati eventi $A, B$ con $P(B) > 0$, la **probabilità condizionata** di $A$ dato $B$ è:

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

**Interpretazione geometrica:** $P(A \mid B)$ è la "quota" di $B$ che appartiene anche ad $A$. Riduci il tuo universo da $\Omega$ a $B$, poi misura $A$ in questo nuovo universo normalizzato.

**Proprietà:** $P(\cdot \mid B)$ è essa stessa una misura di probabilità su $\Omega$. In particolare:
- $P(B \mid B) = 1$ (dato $B$, $B$ è certo)
- $P(A^c \mid B) = 1 - P(A \mid B)$
- $P(A \cup C \mid B) = P(A \mid B) + P(C \mid B) - P(A \cap C \mid B)$

### Regola della moltiplicazione

Dalla definizione di probabilità condizionata:

$$P(A \cap B) = P(A \mid B) \cdot P(B) = P(B \mid A) \cdot P(A)$$

**Generalizzazione (regola della catena):** Per $n$ eventi:
$$P(A_1 \cap A_2 \cap \cdots \cap A_n) = P(A_1) \cdot P(A_2 \mid A_1) \cdot P(A_3 \mid A_1 \cap A_2) \cdots P(A_n \mid A_1 \cap \cdots \cap A_{n-1})$$

### Formula della probabilità totale

**Definizione.** Una **partizione** di $\Omega$ è una famiglia $B_1, B_2, \ldots, B_n$ di eventi mutuamente esclusivi e esaustivi: $B_i \cap B_j = \emptyset$ per $i \neq j$, e $\bigcup_{i=1}^n B_i = \Omega$, con $P(B_i) > 0$.

**Teorema (Formula della probabilità totale).** Se $B_1, \ldots, B_n$ è una partizione di $\Omega$:

$$P(A) = \sum_{i=1}^n P(A \mid B_i) \cdot P(B_i)$$

**Come si usa:** Se $A$ può accadere tramite diversi "percorsi" (scenari $B_i$), la probabilità totale di $A$ è la media pesata delle probabilità condizionate, con pesi dati dalle probabilità degli scenari.

### Teorema di Bayes

**Teorema.** Se $B_1, \ldots, B_n$ è una partizione di $\Omega$ e $P(A) > 0$:

$$P(B_j \mid A) = \frac{P(A \mid B_j) \cdot P(B_j)}{\displaystyle\sum_{i=1}^n P(A \mid B_i) \cdot P(B_i)}$$

**Terminologia:**
- $P(B_j)$: probabilità **a priori** (prior) — credenza prima di osservare $A$
- $P(A \mid B_j)$: **verosimiglianza** (likelihood) — quanto è probabile $A$ se $B_j$ è vero
- $P(B_j \mid A)$: probabilità **a posteriori** (posterior) — credenza aggiornata dopo aver osservato $A$
- $P(A)$: **evidenza** — probabilità marginale di $A$ (normalizzazione)

**Formula compatta:** $\text{posterior} \propto \text{likelihood} \times \text{prior}$

### Indipendenza

**Definizione.** Due eventi $A$ e $B$ sono **indipendenti** se:

$$P(A \cap B) = P(A) \cdot P(B)$$

**Equivalenze** (ciascuna è equivalente alla definizione, quando $P(B) > 0$ e $P(A) > 0$):
- $P(A \mid B) = P(A)$ — conoscere $B$ non cambia la probabilità di $A$
- $P(B \mid A) = P(B)$ — conoscere $A$ non cambia la probabilità di $B$

**Attenzione:** Indipendenza non ha nulla a che fare con disgiunzione. Anzi, se $P(A) > 0$ e $P(B) > 0$ e $A \cap B = \emptyset$, allora $A$ e $B$ **non** sono indipendenti (se uno accade, l'altro è impossibile — massima dipendenza!).

**Indipendenza di più eventi.** Gli eventi $A_1, \ldots, A_n$ sono **mutuamente indipendenti** se per ogni sottoinsieme $\{i_1, \ldots, i_k\} \subseteq \{1, \ldots, n\}$:
$$P(A_{i_1} \cap \cdots \cap A_{i_k}) = P(A_{i_1}) \cdots P(A_{i_k})$$

**Nota:** l'indipendenza a coppie non implica l'indipendenza mutuale! Esistono esempi (controesempio di Bernstein) in cui tre eventi sono indipendenti a coppie ma non mutuamente indipendenti.

## 4. Derivazioni

### Derivazione del teorema di Bayes

Partiamo dalla regola della moltiplicazione:

$$P(A \cap B_j) = P(A \mid B_j) \cdot P(B_j)$$

Ma anche:

$$P(A \cap B_j) = P(B_j \mid A) \cdot P(A)$$

Uguagliando: $P(B_j \mid A) \cdot P(A) = P(A \mid B_j) \cdot P(B_j)$

Dividendo per $P(A) > 0$:

$$P(B_j \mid A) = \frac{P(A \mid B_j) \cdot P(B_j)}{P(A)}$$

Sostituendo $P(A)$ con la formula della probabilità totale:

$$P(B_j \mid A) = \frac{P(A \mid B_j) \cdot P(B_j)}{\sum_{i=1}^n P(A \mid B_i) \cdot P(B_i)}$$

### Perché la formula della probabilità totale funziona

I $B_i$ partitionano $\Omega$, quindi $A = (A \cap B_1) \cup \cdots \cup (A \cap B_n)$, con tutti gli insiemi disgiunti (perché $B_i$ sono disgiunti). Per additività:

$$P(A) = P(A \cap B_1) + \cdots + P(A \cap B_n) = P(A \mid B_1)P(B_1) + \cdots + P(A \mid B_n)P(B_n)$$

## 5. Esempi

**Esempio 1 (Base) — Dado con informazione.**
Lancio un dado equo. Dato che il risultato è $> 3$, qual è la probabilità che sia $> 4$?

$B = \{4,5,6\}$, $A = \{5,6\}$. $P(A \mid B) = P(A \cap B)/P(B) = (2/6)/(3/6) = 2/3$.

---

**Esempio 2 (Base) — Carte e figure.**
Estraggo una carta. Dato che è una figura (J, Q, K), qual è la probabilità che sia un re?

$B = $ figure (12 carte), $A = $ re (4 carte). $A \cap B = $ re-figure = 4 carte.

$P(A \mid B) = (4/52)/(12/52) = 4/12 = \mathbf{1/3}$.

---

**Esempio 3 (Medio) — Probabilità totale, urna.**
Un'urna contiene 3 palline rosse e 2 blu. Ne estraggo due in sequenza senza rimpiazzo. Qual è la probabilità che la seconda sia rossa?

Condiziono sulla prima estrazione:
- $P(\text{2a rossa} \mid \text{1a rossa}) = 2/4 = 1/2$
- $P(\text{2a rossa} \mid \text{1a blu}) = 3/4$

$P(\text{2a rossa}) = \frac{1}{2} \cdot \frac{3}{5} + \frac{3}{4} \cdot \frac{2}{5} = \frac{3}{10} + \frac{6}{20} = \frac{3}{10} + \frac{3}{10} = \mathbf{3/5}$.

Nota: la probabilità è la stessa della prima estrazione — simmetria della probabilità!

---

**Esempio 4 (Medio-Alto) — Test medico (Bayes).**
Un test ha sensibilità $P(+ \mid M) = 0.99$ e specificità $P(- \mid S) = 0.95$. Prevalenza della malattia: $P(M) = 0.01$.

$P(+ \mid S) = 1 - 0.95 = 0.05$ (falso positivo).

$P(+) = P(+\mid M)P(M) + P(+\mid S)P(S) = 0.99 \times 0.01 + 0.05 \times 0.99 = 0.0099 + 0.0495 = 0.0594$.

$P(M \mid +) = \dfrac{0.99 \times 0.01}{0.0594} \approx \mathbf{16.7\%}$.

Sorprendente: anche con un test quasi perfetto, se la malattia è rara, la maggior parte dei positivi sono falsi allarmi.

---

**Esempio 5 (Medio-Alto) — Problema di Monty Hall.**
Ci sono 3 porte; dietro una c'è un'auto, dietro le altre due capre. Scelgo la porta 1. Il conduttore apre la porta 3 (che ha una capra). Conviene cambiare alla porta 2?

$P(\text{auto in 1}) = 1/3$. Se l'auto è in 1, il conduttore può aprire 2 o 3 (indifferente). Se è in 2, deve aprire 3. Se è in 3, deve aprire 2.

$P(\text{conduttore apre 3} \mid \text{auto in 1}) = 1/2$, $P(\text{apre 3} \mid \text{auto in 2}) = 1$, $P(\text{apre 3} \mid \text{auto in 3}) = 0$.

$P(\text{apre 3}) = \frac{1}{2} \cdot \frac{1}{3} + 1 \cdot \frac{1}{3} + 0 \cdot \frac{1}{3} = \frac{1}{6} + \frac{1}{3} = \frac{1}{2}$.

$P(\text{auto in 2} \mid \text{apre 3}) = \dfrac{1 \cdot 1/3}{1/2} = \mathbf{2/3}$.

Conviene sempre cambiare! La probabilità di vincere cambiando è 2/3 vs 1/3 restando.

---

**Esempio 6 (Alto) — Indipendenza condizionale.**
$A$ = "studente supera il corso", $B$ = "studia almeno 3 ore al giorno", $C$ = "ha un buon professore". Potrebbe essere che $A$ e $C$ siano indipendenti dato $B$ — il professore conta poco se lo studente si impegna molto — ma dipendenti marginalmente.

Questo illustra il concetto di **indipendenza condizionale**: $A \perp C \mid B$ significa $P(A \cap C \mid B) = P(A \mid B) \cdot P(C \mid B)$.

---

**Esempio 7 (Alto) — Catena bayesiana.**
Lancio una moneta equa ripetutamente. Dato che le prime 3 uscite sono testa, qual è la probabilità che la quarta sia testa?

Per l'indipendenza dei lanci: $P(\text{4a testa} \mid \text{prime 3 testa}) = P(\text{4a testa}) = \mathbf{1/2}$.

I lanci sono indipendenti: la storia passata non influenza il futuro. (Errore comune: la "fallacia del giocatore" dice erroneamente che dopo molte teste viene croce!)

## 6. Grafico

```plot
{"fn":"Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)","fn2":"0.5*Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)","domain":[-4,4],"yDomain":[0,0.5],"title":"Probabilità a priori vs a posteriori (schema)","label1":"Prior P(B)","label2":"Posterior P(B|A)"}
```

## 7. Interattivo

```slider
{"fn":"(0.99 * p) / (0.99 * p + (1 - spec) * (1 - p))","domain":[0,1],"yDomain":[0,1],"params":[{"name":"p","min":0.001,"max":0.5,"step":0.001,"default":0.01},{"name":"spec","min":0.5,"max":0.999,"step":0.001,"default":0.95}],"title":"Valore predittivo positivo: P(malato | test+) in funzione della prevalenza p e specificità"}
```

## 8. Errori comuni

**Errore 1 — Invertire le condizionate (fallacia del procuratore).**
$P(A \mid B) \neq P(B \mid A)$ in generale. Confondere $P(\text{positivo} \mid \text{malato})$ con $P(\text{malato} \mid \text{positivo})$ porta a errori drammatici in medicina e nel diritto. Usa Bayes per invertire correttamente.

**Errore 2 — Confondere indipendenza con disgiunzione.**
Se $A$ e $B$ sono disgiunti (mutuamente esclusivi) con $P(A)>0$ e $P(B)>0$, allora sono **dipendenti**: $P(A \cap B) = 0 \neq P(A)P(B)$. Sapere che $B$ è accaduto rende $A$ impossibile.

**Errore 3 — Dimenticare la condizione $P(B) > 0$.**
$P(A \mid B)$ è definita solo se $P(B) > 0$. Condizionare su un evento di probabilità 0 richiede strumenti avanzati (teorema di Radon-Nikodym).

**Errore 4 — La fallacia del giocatore.**
Dopo $n$ teste consecutive, la probabilità della prossima testa è ancora 1/2 (per moneta equa). I lanci sono indipendenti: il passato non influenza il futuro. Credere il contrario è la "fallacia del giocatore".

**Errore 5 — Indipendenza a coppie ≠ indipendenza mutuale.**
Tre eventi possono essere indipendenti a coppie ($P(A_i \cap A_j) = P(A_i)P(A_j)$ per ogni $i \neq j$) ma non mutuamente indipendenti. L'indipendenza mutuale richiede che la proprietà valga per **tutti** i sottoinsiemi.

**Errore 6 — Applicare Bayes senza partizione.**
La formula della probabilità totale e Bayes richiedono che $B_1, \ldots, B_n$ sia una **partizione**: gli eventi devono essere esaustivi (coprire tutto $\Omega$) e mutuamente esclusivi. Dimenticare uno scenario porta a probabilità errate.

**Errore 7 — Confondere indipendenza con indipendenza condizionale.**
$A$ e $B$ possono essere indipendenti ma dipendenti dato $C$, oppure dipendenti ma indipendenti dato $C$. L'indipendenza è relativa al contesto informativo.

## 9. Applicazioni reali

**Diagnostica medica.** Il teorema di Bayes è la base del ragionamento diagnostico: si parte dalla prevalenza della malattia (prior), si osserva il risultato del test (evidenza), e si calcola la probabilità della malattia (posterior). La comprensione del valore predittivo positivo e negativo è cruciale per evitare diagnosi errate.

**Filtri antispam.** I classificatori bayesiani calcolano $P(\text{spam} \mid \text{parole nell'email})$ usando la regola di Bayes. Il modello si aggiorna continuamente con le nuove email classificate dall'utente, imparando a riconoscere lo spam personalizzato.

**Intelligenza artificiale e reti bayesiane.** Le reti bayesiane modellano le dipendenze condizionali tra variabili in un sistema complesso. Usate in diagnosi di guasti, previsioni meteorologiche, sistemi di raccomandazione. L'indipendenza condizionale riduce drasticamente il numero di parametri da stimare.

**Diritto e prove forensi.** L'interpretazione delle prove forensi (DNA, impronte digitali) richiede Bayes. L'"errore del procuratore" — confondere $P(\text{evidenza} \mid \text{innocente})$ con $P(\text{innocente} \mid \text{evidenza})$ — ha portato a condanne ingiuste reali.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Prob. condizionata | $P(A\mid B) = P(A\cap B)/P(B)$ | Richiede $P(B)>0$ |
| Regola moltiplicazione | $P(A\cap B) = P(A\mid B)P(B)$ | Simmetrica in $A$ e $B$ |
| Prob. totale | $P(A) = \sum_i P(A\mid B_i)P(B_i)$ | $B_i$ partizione di $\Omega$ |
| Teorema di Bayes | $P(B_j\mid A) = \frac{P(A\mid B_j)P(B_j)}{\sum_i P(A\mid B_i)P(B_i)}$ | Aggiorna le credenze |
| Indipendenza | $P(A\cap B) = P(A)P(B)$ | Equiv.: $P(A\mid B)=P(A)$ |
| Indip. condizionale | $P(A\cap C\mid B) = P(A\mid B)P(C\mid B)$ | Dipende dal contesto |

## 11. Esercizi

<details>
<summary>Esercizio 1: Probabilità condizionata su dado</summary>

Lancio due dadi. Dato che la somma è $\geq 10$, qual è la probabilità che la somma sia 12?

**Soluzione.**

$B = \{\text{somma} \geq 10\}$: $(4,6),(5,5),(5,6),(6,4),(6,5),(6,6)$ — 6 coppie. $P(B) = 6/36 = 1/6$.

$A = \{\text{somma} = 12\}$: solo $(6,6)$ — 1 coppia. $P(A \cap B) = P(A) = 1/36$.

$P(A \mid B) = (1/36)/(6/36) = 1/6 \approx \mathbf{16.7\%}$.

</details>

<details>
<summary>Esercizio 2: Formula della probabilità totale</summary>

Un'azienda ha due linee di produzione: A (70% dei prodotti) e B (30%). Il tasso di difettosità è 2% per A e 5% per B. Qual è la probabilità che un prodotto scelto a caso sia difettoso?

**Soluzione.**

$P(\text{difettoso}) = P(\text{dif}\mid A)P(A) + P(\text{dif}\mid B)P(B)$

$= 0.02 \times 0.70 + 0.05 \times 0.30 = 0.014 + 0.015 = \mathbf{0.029 = 2.9\%}$.

</details>

<details>
<summary>Esercizio 3: Teorema di Bayes — difetto di produzione</summary>

Usando i dati dell'esercizio 2, se un prodotto è difettoso, qual è la probabilità che venga dalla linea B?

**Soluzione.**

$P(B \mid \text{dif}) = \dfrac{P(\text{dif}\mid B) \cdot P(B)}{P(\text{dif})} = \dfrac{0.05 \times 0.30}{0.029} = \dfrac{0.015}{0.029} \approx \mathbf{51.7\%}$.

Anche se la linea B produce solo il 30% dei prodotti, è responsabile di oltre metà dei difetti.

</details>

<details>
<summary>Esercizio 4: Verifica di indipendenza</summary>

$P(A) = 0.4$, $P(B) = 0.3$, $P(A \cap B) = 0.12$. $A$ e $B$ sono indipendenti?

**Soluzione.**

$P(A) \cdot P(B) = 0.4 \times 0.3 = 0.12 = P(A \cap B)$.

Sì, $A$ e $B$ sono **indipendenti**.

</details>

<details>
<summary>Esercizio 5: Moneta sbilanciata e Bayes</summary>

Ho due monete: la moneta A ha $P(\text{testa}) = 0.6$, la moneta B ha $P(\text{testa}) = 0.4$. Scelgo una moneta a caso (equiprobabile) e ottengo testa. Qual è la probabilità di aver scelto la moneta A?

**Soluzione.**

Prior: $P(A) = P(B) = 0.5$.

$P(\text{testa}) = 0.6 \times 0.5 + 0.4 \times 0.5 = 0.3 + 0.2 = 0.5$.

$P(A \mid \text{testa}) = \dfrac{0.6 \times 0.5}{0.5} = \mathbf{0.6}$.

Aver ottenuto testa aggiorna la probabilità da 0.5 a 0.6 in favore della moneta A.

</details>

<details>
<summary>Esercizio 6: Regola della catena</summary>

Da un mazzo di 52 carte estraggo 3 carte in sequenza senza rimpiazzo. Qual è la probabilità che le prime tre carte siano tutte assi?

**Soluzione.**

$P(A_1 \cap A_2 \cap A_3) = P(A_1) \cdot P(A_2 \mid A_1) \cdot P(A_3 \mid A_1 \cap A_2)$

$= \dfrac{4}{52} \cdot \dfrac{3}{51} \cdot \dfrac{2}{50} = \dfrac{24}{132600} = \dfrac{1}{5525} \approx \mathbf{0.018\%}$.

</details>

<details>
<summary>Esercizio 7: Paradosso del bambino</summary>

Una famiglia ha due figli. Sapendo che almeno uno è maschio, qual è la probabilità che entrambi siano maschi?

**Soluzione.**

$\Omega = \{(M,M), (M,F), (F,M), (F,F)\}$, tutti equiprobabili.

$B = \{\text{almeno un maschio}\} = \{(M,M),(M,F),(F,M)\}$, $P(B) = 3/4$.

$A = \{(M,M)\}$, $P(A \cap B) = P(A) = 1/4$.

$P(A \mid B) = (1/4)/(3/4) = \mathbf{1/3}$.

Nota: se sapessi che il figlio **maggiore** è maschio, la risposta sarebbe 1/2 — il condizionamento conta!

</details>

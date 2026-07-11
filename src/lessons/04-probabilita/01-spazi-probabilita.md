---
id: probabilita-01-spazi
subject: probabilita
topic_it: Fondamenti
topic_en: Foundations
title_it: Spazi di probabilità e assiomi di Kolmogorov
title_en: Probability spaces and Kolmogorov's axioms
level: blue
order: 1
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 1 — Probabilità"
stato: da-rielaborare
---

## 1. Intuizione

Immagina di lanciare un dado: potresti ottenere 1, 2, 3, 4, 5 o 6. Prima del lancio, tutti questi esiti sono **possibili**. La probabilità è il linguaggio matematico che ci permette di descrivere con precisione **quanto è plausibile** ciascun esito, e come ragionare in modo coerente sull'incertezza.

Senza una struttura formale, il ragionamento probabilistico porta facilmente a paradossi. Ad esempio: se dico "la probabilità di pioggia è 0,7", cosa significa esattamente? Quale insieme di esiti sto considerando? La teoria di Kolmogorov (1933) risolve questi problemi costruendo la probabilità come una **misura** su insiemi, con tre soli assiomi da cui discende tutta la teoria.

Pensa alla probabilità come a un peso distribuito su un insieme di esiti. Il peso totale è sempre 1 (certezza). Gli assiomi di Kolmogorov ci dicono esattamente come questo peso deve essere distribuito in modo coerente: mai negativo, il tutto pesa 1, e i pesi di eventi disgiunti si sommano.

La struttura formale — spazio campionario, $\sigma$-algebra, misura di probabilità — può sembrare astratta, ma ha uno scopo concreto: renderci immuni dai paradossi e permetterci di trattare sia spazi finiti (dadi, carte) sia spazi infiniti (variabili continue, processi nel tempo) con lo stesso formalismo unificato.

## 2. Prerequisiti

- Teoria degli insiemi di base: unione, intersezione, complemento, differenza
- Concetto di funzione $f: A \to B$
- Somme di serie numeriche (per la proprietà di additività numerabile)
- Nozioni di base di combinatoria (per contare gli eventi in spazi finiti)

## 3. Teoria

### Spazio campionario $\Omega$

Lo **spazio campionario** $\Omega$ è l'insieme di tutti i possibili esiti di un esperimento aleatorio. Ogni elemento $\omega \in \Omega$ è detto **esito elementare**.

**Esempi:**
- Lancio di una moneta: $\Omega = \{T, C\}$
- Lancio di un dado: $\Omega = \{1, 2, 3, 4, 5, 6\}$
- Tempo di vita di un componente: $\Omega = [0, +\infty)$
- Sequenza infinita di lanci di moneta: $\Omega = \{T, C\}^{\infty}$

### Evento

Un **evento** è un sottoinsieme $A \subseteq \Omega$. Diciamo che l'evento $A$ **si verifica** quando l'esito osservato $\omega$ appartiene ad $A$.

**Operazioni sugli eventi** (corrispondono alle operazioni insiemistiche):

| Operazione | Simbolo | Significato |
| --- | --- | --- |
| Unione | $A \cup B$ | Almeno uno tra $A$ e $B$ accade |
| Intersezione | $A \cap B$ | Entrambi $A$ e $B$ accadono |
| Complementare | $A^c$ | $A$ non accade |
| Differenza | $A \setminus B$ | $A$ accade ma non $B$ |
| Evento certo | $\Omega$ | Sempre si verifica |
| Evento impossibile | $\emptyset$ | Non si verifica mai |

Due eventi $A$ e $B$ sono **mutualmente esclusivi** (o disgiunti) se $A \cap B = \emptyset$: non possono verificarsi entrambi.

### $\sigma$-algebra

Non tutti i sottoinsiemi di $\Omega$ devono necessariamente ricevere una probabilità (questo è rilevante per spazi non numerabili). La **$\sigma$-algebra** $\mathcal{F}$ è una famiglia di sottoinsiemi di $\Omega$ che rappresenta gli eventi "ammissibili", cioè quelli a cui possiamo assegnare una probabilità.

**Definizione.** $\mathcal{F}$ è una $\sigma$-algebra su $\Omega$ se:
1. $\Omega \in \mathcal{F}$
2. Se $A \in \mathcal{F}$, allora $A^c \in \mathcal{F}$ (chiusura per complementi)
3. Se $A_1, A_2, \ldots \in \mathcal{F}$, allora $\bigcup_{i=1}^{\infty} A_i \in \mathcal{F}$ (chiusura per unioni numerabili)

Per spazi finiti o numerabili, di solito $\mathcal{F} = 2^{\Omega}$ (tutti i sottoinsiemi). Per spazi continui si usa la **$\sigma$-algebra dei Boreliani** $\mathcal{B}(\mathbb{R})$, generata dagli intervalli aperti.

### Assiomi di Kolmogorov

**Definizione.** Dato uno spazio misurabile $(\Omega, \mathcal{F})$, una **misura di probabilità** è una funzione $P: \mathcal{F} \to [0,1]$ che soddisfa:

**Assioma 1 (Non negatività):** Per ogni $A \in \mathcal{F}$:
$$P(A) \geq 0$$

**Assioma 2 (Normalizzazione):**
$$P(\Omega) = 1$$

**Assioma 3 (Additività $\sigma$-numerabile):** Se $A_1, A_2, \ldots$ sono eventi mutualmente esclusivi a coppie ($A_i \cap A_j = \emptyset$ per $i \neq j$):
$$P\!\left(\bigcup_{i=1}^{\infty} A_i\right) = \sum_{i=1}^{\infty} P(A_i)$$

La tripla $(\Omega, \mathcal{F}, P)$ è detta **spazio di probabilità**.

### Conseguenze fondamentali

Da questi tre assiomi si derivano tutte le proprietà della probabilità.

**Proposizione 1.** $P(\emptyset) = 0$.

*Dimostrazione:* $\Omega = \Omega \cup \emptyset \cup \emptyset \cup \cdots$ (unione disgiunta). Per l'assioma 3: $P(\Omega) = P(\Omega) + P(\emptyset) + P(\emptyset) + \cdots$. Quindi $P(\emptyset)$ deve essere 0. $\square$

**Proposizione 2 (Additività finita).** Per $A_1, \ldots, A_n$ disgiunti:
$$P(A_1 \cup \cdots \cup A_n) = P(A_1) + \cdots + P(A_n)$$

**Proposizione 3 (Complementare).** $P(A^c) = 1 - P(A)$.

*Dimostrazione:* $\Omega = A \cup A^c$ (disgiunti). Per l'assioma 3: $1 = P(A) + P(A^c)$. $\square$

**Proposizione 4 (Monotonia).** Se $A \subseteq B$, allora $P(A) \leq P(B)$.

*Dimostrazione:* $B = A \cup (B \setminus A)$ (disgiunti). Quindi $P(B) = P(A) + P(B \setminus A) \geq P(A)$. $\square$

**Proposizione 5 (Inclusione-Esclusione).** Per due eventi qualsiasi:
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

*Dimostrazione:* $A \cup B = A \cup (B \setminus A)$ (disgiunti). $P(A \cup B) = P(A) + P(B \setminus A)$. Poiché $B = (A \cap B) \cup (B \setminus A)$ (disgiunti): $P(B \setminus A) = P(B) - P(A \cap B)$. Sostituendo si ottiene la formula. $\square$

**Inclusione-esclusione per tre eventi:**
$$P(A \cup B \cup C) = P(A)+P(B)+P(C) - P(A\cap B) - P(A\cap C) - P(B\cap C) + P(A\cap B\cap C)$$

### Spazi uniformi discreti

Quando $\Omega = \{\omega_1, \ldots, \omega_n\}$ è finito e tutti gli esiti sono equiprobabili, $P(\{\omega_i\}) = 1/n$ per ogni $i$. Quindi per ogni evento $A$:

$$P(A) = \frac{|A|}{|\Omega|} = \frac{\text{numero di casi favorevoli}}{\text{numero di casi totali}}$$

Questa è la **definizione classica** di probabilità (Laplace). Il calcolo combinatorio — permutazioni, combinazioni, principio della moltiplicazione — è lo strumento per contare $|A|$ e $|\Omega|$.

## 4. Derivazioni

### Derivazione dell'inclusione-esclusione generalizzata

Per $n$ eventi $A_1, \ldots, A_n$, la formula di inclusione-esclusione è:

$$P\!\left(\bigcup_{i=1}^n A_i\right) = \sum_{k=1}^n (-1)^{k+1} \sum_{1 \leq i_1 < \cdots < i_k \leq n} P(A_{i_1} \cap \cdots \cap A_{i_k})$$

L'idea è che ogni esito in $A_1 \cup \cdots \cup A_n$ viene contato esattamente una volta (si aggiunge, si sottrae in eccesso, si riagggiunge, ecc.). Si verifica per induzione sul numero di eventi.

### Probabilità del complementare — perché è utile

Se calcolare $P(A)$ direttamente è difficile, calcola $P(A^c)$ e usa:
$$P(A) = 1 - P(A^c)$$

Questa strategia è utile quando $A^c$ è più semplice da descrivere. Esempio classico: "almeno uno" ha complementare "nessuno".

## 5. Esempi

**Esempio 1 (Base) — Dado singolo.**
Lancio un dado equo. Qual è la probabilità di ottenere un numero pari?

$\Omega = \{1,2,3,4,5,6\}$, $|A| = |\{2,4,6\}| = 3$. $P(A) = 3/6 = \mathbf{1/2}$.

---

**Esempio 2 (Base) — Due dadi.**
Lancio due dadi. Qual è la probabilità di ottenere somma 7?

$|\Omega| = 36$. Coppie con somma 7: $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$ — sono 6. $P = 6/36 = \mathbf{1/6}$.

---

**Esempio 3 (Medio) — Carte.**
Estraggo una carta da un mazzo da 52. $A =$ cuori, $B =$ figure (J, Q, K di ogni seme).

$P(A) = 13/52$, $P(B) = 12/52$, $P(A \cap B) = 3/52$ (J, Q, K di cuori).

$P(A \cup B) = 13/52 + 12/52 - 3/52 = 22/52 = \mathbf{11/26} \approx 42.3\%$.

---

**Esempio 4 (Medio) — Strategia del complementare.**
In una classe di 30 studenti, qual è la probabilità che almeno uno sia nato in gennaio?

$P(\text{almeno uno}) = 1 - P(\text{nessuno nasce in gennaio})$.

Se i compleanni sono equiprobabili sui 12 mesi: $P(\text{nessuno}) = (11/12)^{30} \approx 0.0679$.

$P(\text{almeno uno}) \approx 1 - 0.0679 \approx \mathbf{93.2\%}$.

---

**Esempio 5 (Medio-Alto) — Problema del compleanno.**
Qual è la probabilità che in un gruppo di 23 persone almeno due abbiano lo stesso compleanno?

$P(\text{tutti diversi}) = \dfrac{365 \cdot 364 \cdots 343}{365^{23}} = \prod_{k=0}^{22}\dfrac{365-k}{365} \approx 0.4927$.

$P(\text{almeno due uguali}) = 1 - 0.4927 \approx \mathbf{50.7\%}$.

Risultato controintuitivo: bastano 23 persone per superare il 50%. Con 50 persone la probabilità sale al 97%.

---

**Esempio 6 (Alto) — Inclusione-esclusione per tre eventi.**
Un sondaggio rivela: $P(A) = 0.6$, $P(B) = 0.5$, $P(C) = 0.4$, $P(A \cap B) = 0.3$, $P(A \cap C) = 0.2$, $P(B \cap C) = 0.15$, $P(A \cap B \cap C) = 0.1$.

$P(A \cup B \cup C) = 0.6+0.5+0.4 - 0.3 - 0.2 - 0.15 + 0.1 = \mathbf{0.95}$.

---

**Esempio 7 (Alto) — Disuguaglianza di Boole.**
Qual è un limite superiore per $P(A \cup B \cup C)$ se conosco solo le probabilità individuali?

Per qualsiasi evento: $P(A_1 \cup \cdots \cup A_n) \leq P(A_1) + \cdots + P(A_n)$ (**disuguaglianza di Boole** o union bound). Utile quando non si conoscono le intersezioni.

## 6. Grafico

```plot
{"fn":"x*(1-x)","domain":[0,1],"yDomain":[0,0.3],"title":"P(A∩B) massima compatibile con P(A)=x, P(B)=x","label1":"min(x,x)-max(0,2x-1) = x(1-x) per eventi non correlati"}
```

## 7. Interattivo

```slider
{"fn":"1 - Math.pow((1 - 1/365), x*(x-1)/2)","domain":[2,60],"yDomain":[0,1],"params":[{"name":"n","min":2,"max":60,"step":1,"default":23}],"title":"Problema del compleanno: P(almeno 2 persone stesso giorno) con n persone"}
```

## 8. Errori comuni

**Errore 1 — Confondere evento ed esito elementare.**
L'evento $A = \{2, 4, 6\}$ contiene tre esiti elementari. Scrivere $P(\{2\}) + P(\{4\}) + P(\{6\})$ è corretto; scrivere $P(2)$ senza parentesi graffe è notazione imprecisa (e fonte di errori).

**Errore 2 — Dimenticare di sottrarre l'intersezione.**
$P(A \cup B) \neq P(A) + P(B)$ in generale. Vale solo se $A \cap B = \emptyset$. Aggiungere sempre $-P(A \cap B)$ nella formula di inclusione-esclusione.

**Errore 3 — Equiprobabilità non giustificata.**
La formula $P(A) = |A|/|\Omega|$ vale **solo** se gli esiti sono equiprobabili. Se un dado è truccato, non posso applicarla. È necessario verificare sempre l'ipotesi di equiprobabilità.

**Errore 4 — Confondere $P(\Omega) = 1$ con "tutti gli eventi hanno probabilità 1".**
$P(\Omega) = 1$ significa solo che l'evento certo (qualcosa accade) ha probabilità 1. Un evento particolare $A$ può avere qualsiasi probabilità in $[0,1]$.

**Errore 5 — Credere che $P(A) = 0$ implichi l'impossibilità.**
In spazi continui, eventi possibili possono avere probabilità 0. Ad esempio, la probabilità che una variabile uniforme su $[0,1]$ valga esattamente 0.5 è 0, ma è un esito possibile.

**Errore 6 — Applicare l'additività a eventi non disgiunti.**
$P(A_1 \cup A_2 \cup \cdots) = \sum P(A_i)$ vale solo se $A_i \cap A_j = \emptyset$ per $i \neq j$. Per eventi generali, si usa la formula di inclusione-esclusione.

**Errore 7 — Spazio campionario incompleto.**
Se dimentico alcuni esiti in $\Omega$, le probabilità non sommano a 1 e il modello è incoerente. È fondamentale che $\Omega$ contenga **tutti** i possibili esiti.

## 9. Applicazioni reali

**Controllo qualità industriale.** Un'azienda produce componenti; $\Omega$ = insieme di tutti i componenti prodotti. Si definiscono eventi come "componente difettoso", "rottura entro 100 ore". Le probabilità guidano le decisioni di controllo qualità e le garanzie.

**Modelli epidemiologici.** Nello studio della diffusione di malattie, $\Omega$ = insieme della popolazione. Gli assiomi garantiscono che le proporzioni di infetti, guariti e suscettibili formino una partizione coerente di $\Omega$ con probabilità che sommano a 1.

**Finanza e gestione del rischio.** Il prezzo futuro di un'azione è modellato come variabile aleatoria su uno spazio campionario continuo. La $\sigma$-algebra dei Boreliani è essenziale per costruire modelli matematicamente rigorosi (Black-Scholes, ecc.).

**Crittografia e sicurezza informatica.** La generazione di chiavi crittografiche si basa su eventi aleatori in spazi finiti enormi. La probabilità che un attaccante indovini la chiave corretta è calcolata sullo spazio campionario di tutte le possibili chiavi.

## 10. Riepilogo

| Concetto | Simbolo/Formula | Note |
| --- | --- | --- |
| Spazio campionario | $\Omega$ | Tutti i possibili esiti |
| Evento | $A \subseteq \Omega$ | Sottoinsieme di esiti |
| $\sigma$-algebra | $\mathcal{F}$ | Famiglia di eventi ammissibili |
| Non negatività | $P(A) \geq 0$ | Assioma 1 di Kolmogorov |
| Normalizzazione | $P(\Omega) = 1$ | Assioma 2 di Kolmogorov |
| Additività numerabile | $P(\bigcup A_i) = \sum P(A_i)$ se disgiunti | Assioma 3 di Kolmogorov |
| Complementare | $P(A^c) = 1 - P(A)$ | Conseguenza degli assiomi |
| Inclusione-esclusione | $P(A\cup B) = P(A)+P(B)-P(A\cap B)$ | Per eventi non disgiunti |
| Spazio uniforme | $P(A) = \lvert A \rvert / \lvert \Omega \rvert$ | Solo se esiti equiprobabili |
| Monotonia | $A\subseteq B \Rightarrow P(A)\leq P(B)$ | Conseguenza degli assiomi |

## 11. Esercizi

<details>
<summary>Esercizio 1: Dado equo e complementare</summary>

Si lancia un dado equo a 6 facce. Calcola la probabilità di ottenere un numero **non** multiplo di 3.

**Soluzione.**

Multipli di 3 in $\{1,...,6\}$: $\{3, 6\}$, quindi $P(\text{multiplo di 3}) = 2/6 = 1/3$.

Per il complementare: $P(\text{non multiplo di 3}) = 1 - 1/3 = \mathbf{2/3}$.

</details>

<details>
<summary>Esercizio 2: Inclusione-esclusione con carte</summary>

Estraggo una carta da un mazzo da 52. Sia $A =$ "carta rossa", $B =$ "figura" (J, Q, K). Calcola $P(A \cup B)$.

**Soluzione.**

$P(A) = 26/52 = 1/2$ (26 carte rosse). $P(B) = 12/52 = 3/13$ (12 figure). $P(A \cap B) = 6/52 = 3/26$ (6 figure rosse: J,Q,K di cuori e quadri).

$P(A \cup B) = 26/52 + 12/52 - 6/52 = 32/52 = \mathbf{8/13} \approx 61.5\%$.

</details>

<details>
<summary>Esercizio 3: Problema del compleanno semplificato</summary>

In una stanza di 4 persone, supponendo compleanni equiprobabili sui 365 giorni, qual è la probabilità che **almeno due** abbiano lo stesso compleanno?

**Soluzione.**

Calcolo prima $P(\text{tutti diversi})$:
$$\frac{365}{365} \cdot \frac{364}{365} \cdot \frac{363}{365} \cdot \frac{362}{365} = \frac{365 \cdot 364 \cdot 363 \cdot 362}{365^4} \approx \frac{4.832 \times 10^{10}}{1.779 \times 10^{10}} \approx 0.9836$$

$P(\text{almeno due uguali}) = 1 - 0.9836 \approx \mathbf{1.64\%}$.

</details>

<details>
<summary>Esercizio 4: Verifica degli assiomi</summary>

Un esperimento ha $\Omega = \{a, b, c\}$ con $P(\{a\}) = 0.3$, $P(\{b\}) = 0.5$, $P(\{c\}) = 0.2$. Verifica che $P$ soddisfa gli assiomi di Kolmogorov e calcola $P(\{a, c\})$.

**Soluzione.**

Assioma 1: tutte le probabilità sono $\geq 0$. ✓

Assioma 2: $0.3 + 0.5 + 0.2 = 1$. ✓

Assioma 3: per eventi disgiunti la probabilità si somma. ✓

$P(\{a, c\}) = P(\{a\}) + P(\{c\}) = 0.3 + 0.2 = \mathbf{0.5}$ (eventi disgiunti).

</details>

<details>
<summary>Esercizio 5: Union bound</summary>

Tre eventi $A, B, C$ hanno probabilità $P(A) = 0.1$, $P(B) = 0.08$, $P(C) = 0.05$. Senza conoscere le intersezioni, trova un limite superiore per $P(A \cup B \cup C)$.

**Soluzione.**

Per la disuguaglianza di Boole (union bound):
$$P(A \cup B \cup C) \leq P(A) + P(B) + P(C) = 0.1 + 0.08 + 0.05 = \mathbf{0.23}$$

Quindi la probabilità che almeno uno degli eventi accada è al più 23%.

</details>

<details>
<summary>Esercizio 6: Spazio campionario con due dadi</summary>

Lancio due dadi distinti. Definisci lo spazio campionario $\Omega$ e calcola la probabilità che il massimo dei due risultati sia 4.

**Soluzione.**

$\Omega = \{(i,j) : i,j \in \{1,...,6\}\}$, $|\Omega| = 36$.

Evento $A = \{(i,j) : \max(i,j) = 4\}$: almeno un dado vale 4, l'altro vale $\leq 4$.

Coppie: $(4,1),(4,2),(4,3),(4,4),(1,4),(2,4),(3,4)$ — 7 coppie.

$P(A) = 7/36 \approx \mathbf{19.4\%}$.

</details>

<details>
<summary>Esercizio 7: Tre eventi e inclusione-esclusione</summary>

In una classe: 60% studia matematica ($M$), 40% fisica ($F$), 30% informatica ($I$). Le intersezioni: $P(M\cap F)=0.2$, $P(M\cap I)=0.15$, $P(F\cap I)=0.1$, $P(M\cap F\cap I)=0.05$. Qual è la probabilità che uno studente studi almeno una delle tre materie?

**Soluzione.**

$$P(M\cup F\cup I) = 0.6+0.4+0.3 - 0.2 - 0.15 - 0.1 + 0.05 = \mathbf{0.90}$$

Il 90% degli studenti studia almeno una delle tre materie.

</details>

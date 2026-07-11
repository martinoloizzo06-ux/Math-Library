---
id: base-27-combinatoria
subject: base
topic_it: Ragionamento matematico
topic_en: Mathematical reasoning
title_it: Calcolo combinatorio
title_en: Combinatorics
level: green
order: 27
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Appendice — Combinatoria"
stato: da-rielaborare
---

## 1. Intuizione e motivazione

Quante password diverse si possono formare con 4 cifre? Quante squadre da 5 giocatori si possono scegliere da un gruppo di 20? Quante parole diverse si possono formare con le lettere di "MATEMATICA"? Il **calcolo combinatorio** risponde a domande del tipo "in quanti modi...?" senza dover elencare tutte le possibilità.

Questa branca della matematica è fondamentale ovunque si debbano contare configurazioni: probabilità (quante mani di poker favorevoli?), crittografia (quante chiavi possibili?), biologia (quante combinazioni di geni?), informatica (quante strutture dati distinte?). Il trucco è non elencare tutto, ma sfruttare la struttura del problema.

---

## 2. Prerequisiti

- Moltiplicazione e divisione tra interi
- Nozione di insieme e sottoinsieme
- Nozione di ordinamento (sequenza)
- Operazioni con frazioni

---

## 3. Teoria passo-passo

### Principio fondamentale del conteggio (Regola del prodotto)

Se un'operazione si compone di $k$ fasi indipendenti, con $n_1$ modi per la prima, $n_2$ per la seconda, ..., $n_k$ per la $k$-esima, il totale di modi è:

$$n_1 \times n_2 \times \cdots \times n_k$$

**Esempio:** Un PIN di 4 cifre (0–9) ha $10^4 = 10000$ combinazioni possibili.

### Fattoriale

$$n! = n \times (n-1) \times (n-2) \times \cdots \times 2 \times 1, \qquad 0! = 1$$

Il fattoriale cresce estremamente in fretta: $10! = 3\,628\,800$, $20! \approx 2.4 \times 10^{18}$.

| $n$ | $n!$ |
| --- | --- |
| 0 | 1 |
| 1 | 1 |
| 2 | 2 |
| 3 | 6 |
| 4 | 24 |
| 5 | 120 |
| 10 | 3 628 800 |

### Permutazioni semplici

Una **permutazione** di $n$ oggetti distinti è un loro ordinamento completo. Il numero di permutazioni è:

$$P_n = n!$$

**Intuizione:** Per la prima posizione ci sono $n$ scelte, per la seconda $n-1$, ..., per l'ultima $1$. Totale: $n \times (n-1) \times \cdots \times 1 = n!$.

### Permutazioni con elementi ripetuti

Se tra gli $n$ oggetti ci sono $n_1$ indistinguibili del tipo 1, $n_2$ del tipo 2, ..., $n_k$ del tipo $k$ (con $n_1 + n_2 + \cdots + n_k = n$):

$$P_n^{n_1, n_2, \ldots, n_k} = \frac{n!}{n_1!\, n_2!\, \cdots\, n_k!}$$

**Esempio:** Gli anagrammi di "MATEMATICA" (10 lettere: M×2, A×3, T×2, E×1, I×1, C×1):

$$\frac{10!}{2!\cdot 3!\cdot 2!\cdot 1!\cdot 1!\cdot 1!} = \frac{3\,628\,800}{2 \cdot 6 \cdot 2 \cdot 1 \cdot 1 \cdot 1} = \frac{3\,628\,800}{24} = 151\,200$$

### Disposizioni semplici

Le **disposizioni semplici** di $n$ oggetti in $k$ posti ($k \leq n$, ordine conta, senza ripetizione):

$$D_{n,k} = n(n-1)(n-2)\cdots(n-k+1) = \frac{n!}{(n-k)!}$$

**Esempio:** Il numero di podii (oro, argento, bronzo) da 10 atleti: $D_{10,3} = 10 \cdot 9 \cdot 8 = 720$.

### Disposizioni con ripetizione

Se si può scegliere lo stesso oggetto più volte:

$$D_{n,k}^r = n^k$$

**Esempio:** Password di 4 caratteri tra 26 lettere: $26^4 = 456\,976$.

### Combinazioni semplici

Le **combinazioni** di $n$ oggetti in gruppi di $k$ ($k \leq n$, ordine **non** conta, senza ripetizione):

$$\binom{n}{k} = C_{n,k} = \frac{n!}{k!\,(n-k)!}$$

Si legge "$n$ su $k$" o "coefficiente binomiale di $n$ su $k$".

**Differenza chiave con le disposizioni:** $\{A,B,C\}$ è lo stesso gruppo di $\{C,A,B\}$ nelle combinazioni, ma sono ordinamenti diversi nelle disposizioni.

**Proprietà fondamentali:**

$$\binom{n}{0} = \binom{n}{n} = 1$$

$$\binom{n}{k} = \binom{n}{n-k} \quad \text{(simmetria)}$$

$$\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1} \quad \text{(identità di Pascal)}$$

$$\sum_{k=0}^{n} \binom{n}{k} = 2^n \quad \text{(somma di riga nel triangolo di Pascal)}$$

### Triangolo di Pascal

Ogni numero è la somma dei due sopra di lui. La $n$-esima riga (partendo da $n=0$) contiene i coefficienti $\binom{n}{0}, \binom{n}{1}, \ldots, \binom{n}{n}$:

```
n=0:         1
n=1:        1 1
n=2:       1 2 1
n=3:      1 3 3 1
n=4:     1 4 6 4 1
n=5:    1 5 10 10 5 1
```

### Teorema binomiale (binomio di Newton)

$$(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k$$

I coefficienti sono i numeri del triangolo di Pascal.

**Esempi:**

$$(a+b)^2 = a^2 + 2ab + b^2$$

$$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$

---

## 4. Derivazione commentata

### Dimostrazione della formula delle combinazioni

Abbiamo $n$ oggetti e vogliamo scegliere gruppi di $k$ senza ripetizione, senza considerare l'ordine.

**Passo 1:** Scegliamo $k$ oggetti con l'ordine che conta: $D_{n,k} = \frac{n!}{(n-k)!}$ modi.

**Passo 2:** Ma ogni gruppo di $k$ oggetti può essere ordinato in $k!$ modi (le $k!$ permutazioni dei $k$ elementi scelti).

**Passo 3:** Quindi abbiamo contato ogni gruppo $k!$ volte in più. Dividiamo per $k!$:

$$C_{n,k} = \frac{D_{n,k}}{k!} = \frac{n!}{k!\,(n-k)!} \qquad \square$$

### Dimostrazione dell'identità di Pascal

Vogliamo mostrare che $\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1}$.

**Dimostrazione algebrica:**

$$\binom{n}{k} + \binom{n}{k+1} = \frac{n!}{k!(n-k)!} + \frac{n!}{(k+1)!(n-k-1)!}$$

$$= \frac{n!}{k!(n-k-1)!} \left[\frac{1}{n-k} + \frac{1}{k+1}\right] = \frac{n!}{k!(n-k-1)!} \cdot \frac{n+1}{(k+1)(n-k)}$$

$$= \frac{(n+1)!}{(k+1)!(n-k)!} = \binom{n+1}{k+1} \qquad \square$$

---

## 5. Esempi graduati

**Esempio 1 — Principio del prodotto.**
In quanti modi si può scegliere un completo (giacca + pantaloni + camicia) se si hanno 3 giacche, 4 pantaloni e 5 camicie?

$$3 \times 4 \times 5 = 60 \text{ modi}$$

---

**Esempio 2 — Permutazioni.**
In quanti modi si possono sistemare 6 libri su uno scaffale?

$$P_6 = 6! = 720$$

---

**Esempio 3 — Disposizioni.**
Un codice di sicurezza è formato da 3 lettere distinte scelti tra A, B, C, D, E (ordine conta). Quanti codici possibili?

$$D_{5,3} = \frac{5!}{2!} = \frac{120}{2} = 60$$

---

**Esempio 4 — Combinazioni.**
In quanti modi si possono scegliere 3 persone da un gruppo di 8 per formare una commissione (l'ordine non conta)?

$$\binom{8}{3} = \frac{8!}{3! \cdot 5!} = \frac{8 \cdot 7 \cdot 6}{3 \cdot 2 \cdot 1} = 56$$

---

**Esempio 5 — Permutazioni con ripetizioni.**
Quanti anagrammi ha la parola "SOLE" (4 lettere tutte distinte)?

$$4! = 24$$

Quanti ha "ESSE" (4 lettere, S ripetuta 2 volte)?

$$\frac{4!}{2!} = 12$$

---

**Esempio 6 — Teorema binomiale.**
Trovare il coefficiente di $x^3$ in $(2x - 1)^5$.

Il termine generico è $\binom{5}{k}(2x)^{5-k}(-1)^k$.

Per $x^3$: $5 - k = 3 \implies k = 2$.

$$\binom{5}{2}(2x)^3(-1)^2 = 10 \cdot 8x^3 \cdot 1 = 80x^3$$

Il coefficiente è **80**.

---

**Esempio 7 — Problema con vincoli.**
Una commissione di 3 persone deve essere scelta tra 8 candidati (6 uomini e 2 donne). Quante commissioni includono almeno una donna?

Complementare: commissioni con **nessuna donna** = $\binom{6}{3} = 20$.

Totale: $\binom{8}{3} = 56$.

Con almeno una donna: $56 - 20 = 36$.

---

## 6. Grafico

```plot
{
  "title": "Coefficienti binomiali C(10,k) per k = 0,...,10",
  "fn": "10/(Math.max(1, x*(10-x)*0.5+0.5))",
  "fn2": "2.5*(-(x-5)*(x-5))+260",
  "domain": [0, 10],
  "yDomain": [0, 280],
  "label1": "approssimazione C(10,k)",
  "label2": "curva gaussiana (forma)"
}
```

I coefficienti binomiali $\binom{10}{k}$ per $k = 0, 1, \ldots, 10$ sono: 1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1. La distribuzione è simmetrica e a forma di campana — precursore della distribuzione normale.

---

## 7. Elemento interattivo

```slider
{
  "title": "Disposizioni D(n,3) = n(n-1)(n-2) al variare di n",
  "fn": "x*(x-1)*(x-2)",
  "domain": [0, 10],
  "yDomain": [-50, 750],
  "pname": "n",
  "pmin": 3,
  "pmax": 10,
  "pdefault": 5,
  "pstep": 1,
  "plabel": "Oggetti totali n",
  "label1": "D(x,3) = x(x-1)(x-2)"
}
```

Il grafico mostra $D(x,3) = x(x-1)(x-2)$ — il numero di modi di disporre 3 oggetti scelti da $x$ oggetti totali (con ordine). Per $n = 5$: $5 \cdot 4 \cdot 3 = 60$. Per $n = 10$: $720$. La crescita è cubica.

---

## 8. Errori comuni

**Errore 1 — Confondere combinazioni e disposizioni.**
La differenza fondamentale: l'ordine conta? Se $\{A,B\}$ è lo stesso di $\{B,A\}$ → combinazioni. Se sono diversi → disposizioni. Sbagliare questo porta a contare troppo o troppo poco.

**Errore 2 — $0! = 0$ invece di $0! = 1$.**
Per definizione $0! = 1$. È necessario per avere $\binom{n}{0} = \frac{n!}{0! \cdot n!} = 1$.

**Errore 3 — Applicare il prodotto a fasi non indipendenti.**
Il principio del prodotto funziona solo se le scelte sono indipendenti. Se scegliere nel primo passo influenza il secondo, occorre analizzare caso per caso.

**Errore 4 — Usare $n!$ al posto di $D_{n,k}$.**
Se si scelgono $k$ oggetti da $n$ ($k < n$) con ordine, il risultato è $\frac{n!}{(n-k)!}$, non $n!$.

**Errore 5 — Dimenticare il denominatore nelle combinazioni.**
$\binom{8}{3} = \frac{8!}{3! \cdot 5!} = 56$, non $\frac{8!}{3!} = 6720$. Il termine $(n-k)!$ al denominatore è essenziale.

**Errore 6 — Confondere riga del triangolo di Pascal.**
La riga $n$ del triangolo di Pascal (partendo da $n=0$) contiene i coefficienti del binomio $(a+b)^n$. La riga 4 è 1, 4, 6, 4, 1 — non 1, 4, 5, 4, 1.

**Errore 7 — Sommare invece di moltiplicare (e viceversa).**
Per fasi **successive e indipendenti**: si **moltiplica** (principio del prodotto). Per scelte **alternative** (o una cosa o un'altra, mutuamente esclusive): si **somma** (principio della somma).

---

## 9. Applicazioni reali

**Probabilità e giochi.** Il calcolo combinatorio è la base della probabilità. La probabilità di un evento è (casi favorevoli)/(casi totali). Ad esempio, la probabilità di ottenere una coppia in una mano di poker da 5 carte tra 52 si calcola con le combinazioni: $\binom{13}{1}\binom{4}{2}\binom{12}{3}\binom{4}{1}^3 / \binom{52}{5}$. Ogni lotteria è un problema di combinazioni: al SuperEnalotto si scelgono 6 numeri tra 90, con $\binom{90}{6} = 622\,614\,630$ possibilità.

**Biologia molecolare e genetica.** Il DNA è una sequenza di 4 basi (A, T, G, C). Quante sequenze di 100 basi esistono? $4^{100} \approx 10^{60}$ — un numero astronomico, che spiega la varietà infinita della vita. I principi combinatori guidano anche lo studio delle mutazioni genetiche e la progettazione di esperimenti genetici: quante combinazioni di geni si ottengono incrociando due organismi?

**Informatica — algoritmi e strutture dati.** L'analisi della complessità degli algoritmi usa spesso le combinazioni: il numero di sottoinsiemi di un insieme di $n$ elementi è $2^n$ (tutti i possibili sottoinsiemi). Il problema del "commesso viaggiatore" (trovare il percorso più breve che visita $n$ città) ha $(n-1)!/2$ percorsi possibili — per $n = 20$, circa $6 \times 10^{16}$, troppi per enumerarli tutti. La combinatoria motiva la ricerca di algoritmi intelligenti.

---

## 10. Riepilogo tabellare

| Formula | Nome | Definizione | Formula |
| --- | --- | --- | --- |
| $n!$ | Fattoriale | $n \cdot (n-1) \cdots 1$ | — |
| $P_n$ | Permutazioni semplici | Ordinamenti di $n$ oggetti distinti | $n!$ |
| $P_n^{n_1,\ldots,n_k}$ | Perm. con ripetizioni | Ord. con elementi ripetuti | $\frac{n!}{n_1!\cdots n_k!}$ |
| $D_{n,k}$ | Disposizioni semplici | $k$ oggetti da $n$, con ordine | $\frac{n!}{(n-k)!}$ |
| $D_{n,k}^r$ | Disp. con ripetizione | $k$ oggetti da $n$, con ripetizione | $n^k$ |
| $\binom{n}{k}$ | Combinazioni semplici | $k$ oggetti da $n$, senza ordine | $\frac{n!}{k!(n-k)!}$ |

| Proprietà delle combinazioni | Formula |
| --- | --- |
| Simmetria | $\binom{n}{k} = \binom{n}{n-k}$ |
| Identità di Pascal | $\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1}$ |
| Somma di riga | $\sum_{k=0}^{n}\binom{n}{k} = 2^n$ |
| Binomio di Newton | $(a+b)^n = \sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^k$ |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Principio del prodotto</summary>

**Testo:** Una serratura ha 3 ruote, ciascuna con le cifre 0–9. Quante combinazioni esistono? E se le tre cifre devono essere tutte diverse?

**Soluzione:**

Senza vincoli: $10^3 = 1000$ combinazioni.

Con tre cifre diverse: $10 \times 9 \times 8 = 720$ combinazioni.

</details>

<details>
<summary>Esercizio 2 — Permutazioni con libri vincolati</summary>

**Testo:** In quanti modi si possono disporre 5 libri su uno scaffale se due libri specifici (A e B) devono essere sempre adiacenti?

**Soluzione:**

Trattiamo A e B come un blocco → 4 elementi da ordinare in $4! = 24$ modi.

Il blocco AB può essere ordinato internamente in $2! = 2$ modi (AB o BA).

Totale: $24 \times 2 = 48$.

</details>

<details>
<summary>Esercizio 3 — Combinazioni con vincoli</summary>

**Testo:** Una commissione di 4 persone è scelta tra 5 donne e 4 uomini. Quante commissioni includono esattamente 2 donne?

**Soluzione:**

Scegliamo 2 donne da 5: $\binom{5}{2} = 10$.

Scegliamo 2 uomini da 4: $\binom{4}{2} = 6$.

Totale: $10 \times 6 = 60$.

</details>

<details>
<summary>Esercizio 4 — Anagrammi</summary>

**Testo:** Quanti anagrammi ha la parola "RAGGIO" (6 lettere, con G ripetuta 2 volte)?

**Soluzione:**

$$\frac{6!}{2!} = \frac{720}{2} = 360$$

</details>

<details>
<summary>Esercizio 5 — Teorema binomiale</summary>

**Testo:** Trovare il termine di grado 4 nello sviluppo di $(x + 2)^6$.

**Soluzione:**

Il termine generico è $\binom{6}{k} x^{6-k} \cdot 2^k$.

Per grado 4: $6 - k = 4 \implies k = 2$.

$$\binom{6}{2} x^4 \cdot 2^2 = 15 \cdot 4 \cdot x^4 = 60x^4$$

</details>

<details>
<summary>Esercizio 6 — Triangolo di Pascal e proprietà</summary>

**Testo:** Calcolare $\binom{10}{3} + \binom{10}{4}$ usando l'identità di Pascal, e verificare.

**Soluzione:**

Identità di Pascal: $\binom{10}{3} + \binom{10}{4} = \binom{11}{4}$.

$$\binom{11}{4} = \frac{11!}{4! \cdot 7!} = \frac{11 \times 10 \times 9 \times 8}{4 \times 3 \times 2 \times 1} = \frac{7920}{24} = 330$$

Verifica diretta: $\binom{10}{3} = 120$, $\binom{10}{4} = 210$, e $120 + 210 = 330$ ✓.

</details>

<details>
<summary>Esercizio 7 — Disposizioni e poker</summary>

**Testo:** In un mazzo di 52 carte quante mani di 5 carte si possono formare? Quante contengono esattamente 1 asso?

**Soluzione:**

Mani totali: $\binom{52}{5} = \frac{52 \cdot 51 \cdot 50 \cdot 49 \cdot 48}{5!} = 2\,598\,960$.

Con esattamente 1 asso: scegliamo 1 asso tra 4 ($\binom{4}{1} = 4$) e 4 carte non-assi tra le 48 rimaste ($\binom{48}{4} = 194\,580$).

Totale: $4 \times 194\,580 = 778\,320$.

</details>

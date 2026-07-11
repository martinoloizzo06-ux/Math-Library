---
id: base-01-insiemi-numerici
subject: base
topic_it: Algebra e numeri
topic_en: Algebra and numbers
title_it: Insiemi numerici
title_en: Number sets
level: green
order: 1
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 1 — Fondamenti numerici"
stato: da-rielaborare
---

## 1. Intuizione e motivazione

Immagina di dover tenere i conti di un negozio. All'inizio basta contare: quante mele hai, quanti clienti sono entrati, quanti prodotti hai venduto. Per questo bastano i numeri naturali: 0, 1, 2, 3, ...

Poi arriva il momento in cui devi registrare un debito. Il negozio ha speso più di quanto ha incassato. Improvvisamente hai bisogno di numeri negativi. I numeri naturali non bastano più.

Poi vuoi dividere un guadagno tra tre soci. Non viene un numero intero: hai bisogno delle frazioni. E quando vuoi misurare la diagonale di un quadrato di lato 1? Ottieni $\sqrt{2}$, che non è una frazione. Serve un insieme ancora più grande.

La matematica ha costruito, nel corso dei secoli, una scala di insiemi numerici, ognuno più ricco del precedente, ognuno inventato per risolvere un problema che il precedente non poteva affrontare. Capire questa struttura è il punto di partenza di tutta la matematica.

Gli insiemi numerici si usano ovunque: in fisica per descrivere temperature negative, in economia per rappresentare debiti, in informatica per codificare dati, in statistica per misurare probabilità tra 0 e 1.

---

## 2. Prerequisiti

- Saper contare e usare le quattro operazioni elementari ($+$, $-$, $\times$, $\div$)
- Conoscere il concetto di insieme (una collezione di oggetti)
- Sapere cosa significa che un'operazione "è possibile" o "non è possibile" in un insieme

---

## 3. Teoria passo-passo

### I numeri naturali $\mathbb{N}$

$$\mathbb{N} = \{0, 1, 2, 3, 4, \ldots\}$$

Sono i numeri del contare, i più antichi della storia dell'umanità. Con $\mathbb{N}$ possiamo sommare e moltiplicare: il risultato è sempre un numero naturale. Ma la sottrazione non è sempre possibile: $3 - 5 \notin \mathbb{N}$.

**Nota:** alcuni testi escludono lo zero da $\mathbb{N}$, scrivendo $\mathbb{N}^* = \{1, 2, 3, \ldots\}$. In questo corso lo includiamo.

### I numeri interi $\mathbb{Z}$

$$\mathbb{Z} = \{\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots\}$$

La lettera $\mathbb{Z}$ viene dal tedesco *Zahlen* (numeri). Aggiungendo i numeri negativi otteniamo $\mathbb{Z}$, dove la sottrazione è sempre possibile. Tuttavia la divisione non lo è: $7 \div 3 \notin \mathbb{Z}$.

Vale la relazione di inclusione: $\mathbb{N} \subset \mathbb{Z}$.

### I numeri razionali $\mathbb{Q}$

$$\mathbb{Q} = \left\{ \frac{p}{q} \mid p \in \mathbb{Z},\ q \in \mathbb{Z},\ q \neq 0 \right\}$$

La lettera $\mathbb{Q}$ viene da *quoziente*. Un numero razionale è qualsiasi rapporto di due interi con denominatore non nullo. Esempi: $\frac{1}{2}$, $-\frac{7}{3}$, $5$ (che è $\frac{5}{1}$), $0{,}333\ldots = \frac{1}{3}$.

**Caratteristica fondamentale:** ogni numero razionale, scritto in forma decimale, è o **finito** (es. $\frac{1}{4} = 0{,}25$) oppure **periodico** (es. $\frac{1}{3} = 0{,}\overline{3}$). Vale $\mathbb{Z} \subset \mathbb{Q}$.

### I numeri irrazionali

I numeri irrazionali sono quelli che **non** si possono esprimere come frazione di interi. In forma decimale sono infiniti e non periodici. Esempi importantissimi:

$$\sqrt{2} = 1{,}41421356\ldots \qquad \pi = 3{,}14159265\ldots \qquad e = 2{,}71828182\ldots$$

La dimostrazione che $\sqrt{2}$ è irrazionale è uno dei teoremi più famosi della matematica antica (vedi sezione 4).

### I numeri reali $\mathbb{R}$

$$\mathbb{R} = \mathbb{Q} \cup \{\text{irrazionali}\}$$

I numeri reali riempiono completamente la retta numerica: non ci sono "buchi". Ogni punto sulla retta corrisponde a un numero reale e viceversa. Questa proprietà si chiama **completezza di $\mathbb{R}$**.

La gerarchia completa è:

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$$

### I numeri complessi $\mathbb{C}$ (cenno)

Estendendo $\mathbb{R}$ con l'unità immaginaria $i = \sqrt{-1}$, si ottiene $\mathbb{C} = \{a + bi \mid a, b \in \mathbb{R}\}$. I numeri complessi permettono di risolvere equazioni come $x^2 + 1 = 0$. Li studieremo in moduli avanzati.

### Notazione degli intervalli

Un **intervallo** è un sottoinsieme "continuo" di $\mathbb{R}$:

| Notazione | Significato | Grafico |
| --- | --- | --- |
| $[a, b]$ | $a \leq x \leq b$ (chiuso) | estremi inclusi |
| $(a, b)$ | $a < x < b$ (aperto) | estremi esclusi |
| $[a, b)$ | $a \leq x < b$ (semiaperto) | $a$ incluso, $b$ escluso |
| $(-\infty, b]$ | $x \leq b$ | illimitato a sinistra |
| $(a, +\infty)$ | $x > a$ | illimitato a destra |

---

## 4. Derivazione commentata: $\sqrt{2}$ è irrazionale

Questa è una delle dimostrazioni più eleganti della matematica. Usa il metodo della **contraddizione** (o *reductio ad absurdum*): supponiamo che $\sqrt{2}$ sia razionale e mostriamo che porta a una contraddizione.

**Passo 1 — Ipotesi:** supponiamo $\sqrt{2} = \frac{p}{q}$ con $p, q \in \mathbb{Z}$, $q \neq 0$ e la frazione **già ridotta ai minimi termini** (cioè $\text{MCD}(p, q) = 1$).

**Passo 2 — Eleviamo al quadrato entrambi i membri:**
$$2 = \frac{p^2}{q^2} \implies p^2 = 2q^2$$

**Passo 3 — Conclusione su $p$:** poiché $p^2$ è pari (è uguale a $2q^2$), anche $p$ deve essere pari. Scriviamo $p = 2k$ per qualche intero $k$.

**Passo 4 — Sostituiamo $p = 2k$:**
$$p^2 = 4k^2 = 2q^2 \implies q^2 = 2k^2$$

**Passo 5 — Conclusione su $q$:** per lo stesso ragionamento, $q^2$ è pari, quindi $q$ è pari.

**Contraddizione:** se sia $p$ che $q$ sono pari, hanno il fattore 2 in comune. Ma avevamo supposto che la frazione fosse ridotta ai minimi termini, cioè $\text{MCD}(p, q) = 1$. Contraddizione!

**Conclusione:** l'ipotesi che $\sqrt{2}$ sia razionale è falsa. Dunque $\sqrt{2} \in \mathbb{R} \setminus \mathbb{Q}$.

---

## 5. Esempi graduati

**Esempio 1 — Classificare un numero semplice**

Classificare $-6$.

$-6$ è intero (negativo), quindi $-6 \in \mathbb{Z}$. Poiché $\mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$, abbiamo: $-6 \in \mathbb{Z}$, $-6 \in \mathbb{Q}$, $-6 \in \mathbb{R}$.

---

**Esempio 2 — Classificare una frazione**

Classificare $\frac{3}{7}$.

$\frac{3}{7}$ è il rapporto di due interi con denominatore non nullo, quindi $\frac{3}{7} \in \mathbb{Q}$. Non è intero (non si può scrivere come $\frac{n}{1}$ con $n \in \mathbb{Z}$). In decimale: $0{,}\overline{428571}$ (periodico).

---

**Esempio 3 — Riconoscere un irrazionale**

$\sqrt{3}$: non è il quadrato di nessun numero razionale. La dimostrazione è analoga a quella per $\sqrt{2}$ (stessa struttura): $\sqrt{3} \in \mathbb{R} \setminus \mathbb{Q}$.

---

**Esempio 4 — Un numero apparentemente complicato**

$\sqrt{4} = 2$: anche se scritto con la radice, il risultato è un intero. Quindi $\sqrt{4} \in \mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$. Non è irrazionale!

---

**Esempio 5 — Operazioni che cambiano insieme**

- $3 - 5 = -2$: $3, 5 \in \mathbb{N}$ ma $-2 \notin \mathbb{N}$ (dobbiamo passare a $\mathbb{Z}$)
- $\frac{1}{3} + \frac{1}{6} = \frac{1}{2}$: somma di razionali, risultato razionale
- $\sqrt{2} + (-\sqrt{2}) = 0$: somma di irrazionali che dà un razionale (possibile!)
- $\sqrt{2} \cdot \sqrt{2} = 2$: prodotto di irrazionali che dà un naturale (possibile!)

---

**Esempio 6 — Intervalli sulla retta reale**

Descrivere l'insieme $A = \{x \in \mathbb{R} \mid -1 \leq x < 3\}$.

In notazione di intervallo: $A = [-1, 3)$. L'estremo $-1$ è incluso (parentesi quadra), l'estremo $3$ è escluso (parentesi tonda).

---

**Esempio 7 — Densità di $\mathbb{Q}$ in $\mathbb{R}$**

Tra qualsiasi due numeri reali $a < b$ esistono infiniti razionali e infiniti irrazionali. Per esempio, tra 1 e 2 ci sono: $\frac{3}{2}$, $\frac{4}{3}$, $\frac{5}{4}$ (razionali), $\sqrt{2}$, $\sqrt{3}$ (irrazionali), e infiniti altri.

---

## 6. Grafico — La retta numerica reale

```plot
{
  "title": "La retta numerica: N ⊂ Z ⊂ Q ⊂ R",
  "fn": "0*x",
  "fn2": "0*x",
  "domain": [-5, 5],
  "yDomain": [-1, 1],
  "label1": "Retta reale R",
  "label2": ""
}
```

---

## 7. Elemento interattivo — Dove vive un numero?

```slider
{
  "title": "Esplora la densità di Q in R",
  "fn": "Math.floor(a * x) / a",
  "domain": [-3, 3],
  "yDomain": [-3, 3],
  "pname": "a",
  "pmin": 1,
  "pmax": 20,
  "pdefault": 1,
  "pstep": 1,
  "plabel": "Denominatore (granularità razionale)",
  "label1": "Approssimazione razionale di x"
}
```

Aumentando il denominatore, la griglia razionale diventa più fitta. Ma i numeri irrazionali (come $\sqrt{2} \approx 1{,}414$) non cadranno mai esattamente su un punto della griglia, qualunque sia il denominatore.

---

## 8. Errori comuni

**Errore 1 — Confondere "razionale" con "con la virgola"**

Sbagliato: "0,5 è irrazionale perché ha la virgola."
Corretto: $0{,}5 = \frac{1}{2}$ è razionalissimo. I decimali finiti e quelli periodici sono sempre razionali.

---

**Errore 2 — Credere che tutti i numeri con $\sqrt{}$ siano irrazionali**

Sbagliato: "$\sqrt{9}$ è irrazionale perché ha la radice."
Corretto: $\sqrt{9} = 3 \in \mathbb{N}$. La radice di un quadrato perfetto è naturale.

---

**Errore 3 — Dimenticare che $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$**

Sbagliato: "5 non è un numero razionale, è un intero."
Corretto: ogni intero è anche razionale ($5 = \frac{5}{1}$) e anche reale. Gli insiemi si contengono l'uno nell'altro.

---

**Errore 4 — Credere che la somma di due irrazionali sia sempre irrazionale**

Sbagliato: "$\sqrt{2} + (-\sqrt{2})$ è irrazionale perché è somma di irrazionali."
Corretto: $\sqrt{2} + (-\sqrt{2}) = 0 \in \mathbb{N}$. La somma di irrazionali può essere razionale.

---

**Errore 5 — Confondere le parentesi degli intervalli**

Sbagliato: scrivere $[a, b[$ (notazione francese) invece di $[a, b)$.
Corretto: in questo corso usiamo la notazione anglosassone: $[$ e $]$ per estremi inclusi, $($ e $)$ per estremi esclusi.

---

**Errore 6 — Dividere per zero**

Sbagliato: pensare che $\frac{a}{0}$ sia uguale a $\infty$ o a qualcosa di definito.
Corretto: la divisione per zero è **indefinita** in $\mathbb{R}$. Non esiste nessun numero reale uguale a $\frac{a}{0}$.

---

## 9. Applicazioni reali

**Fisica e ingegneria.** Le misure fisiche (lunghezze, masse, temperature) sono numeri reali. La costante $\pi$ appare nel calcolo delle circonferenze e delle aree dei cerchi. Il numero $e$ governa la crescita esponenziale e il decadimento radioattivo. Quando un fisico misura la velocità di un oggetto, il risultato è un numero reale, quasi sempre irrazionale.

**Informatica e rappresentazione digitale.** I computer non possono memorizzare numeri reali arbitrari: usano approssimazioni finite (virgola mobile, standard IEEE 754). Questo introduce errori di arrotondamento. Capire la differenza tra razionali e irrazionali aiuta a capire perché certi calcoli al computer danno risultati inattesi: $0{,}1 + 0{,}2$ non è esattamente $0{,}3$ in binario a precisione finita.

**Economia e finanza.** I prezzi e i tassi di interesse sono razionali (si lavora con centesimi). Ma le formule matematiche della finanza, come il modello di Black-Scholes per la valutazione delle opzioni, usano $e$ e $\pi$ — numeri irrazionali — per descrivere comportamenti continui nel tempo.

---

## 10. Riepilogo tabellare

| Insieme | Simbolo | Elementi tipici | Chiuso per $+$ | Chiuso per $-$ | Chiuso per $\times$ | Chiuso per $\div$ |
| --- | --- | --- | --- | --- | --- | --- |
| Naturali | $\mathbb{N}$ | $0, 1, 2, 3$ | Sì | No | Sì | No |
| Interi | $\mathbb{Z}$ | $-2, 0, 5$ | Sì | Sì | Sì | No |
| Razionali | $\mathbb{Q}$ | $\frac{1}{3}, -\frac{7}{2}$ | Sì | Sì | Sì | Sì (tranne $\div 0$) |
| Reali | $\mathbb{R}$ | $\sqrt{2}, \pi, e$ | Sì | Sì | Sì | Sì (tranne $\div 0$) |

| Tipo decimale | Insieme | Esempio |
| --- | --- | --- |
| Decimale finito | $\mathbb{Q}$ | $0{,}75 = \frac{3}{4}$ |
| Decimale periodico | $\mathbb{Q}$ | $0{,}\overline{3} = \frac{1}{3}$ |
| Decimale infinito non periodico | $\mathbb{R} \setminus \mathbb{Q}$ | $\sqrt{2} = 1{,}41421\ldots$ |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Classificare numeri</summary>

**Testo:** Per ognuno dei seguenti numeri, indica tutti gli insiemi numerici a cui appartiene (tra $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$): $\quad 0, \quad -4, \quad \frac{2}{5}, \quad \sqrt{16}, \quad \sqrt{5}, \quad \pi$.

**Soluzione:**

- $0 \in \mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$
- $-4 \in \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$ (non in $\mathbb{N}$ perché negativo)
- $\frac{2}{5} \in \mathbb{Q} \subset \mathbb{R}$ (non intero, non naturale)
- $\sqrt{16} = 4 \in \mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$
- $\sqrt{5} \in \mathbb{R} \setminus \mathbb{Q}$ (irrazionale, dimostrabile per assurdo come $\sqrt{2}$)
- $\pi \in \mathbb{R} \setminus \mathbb{Q}$ (irrazionale, dimostrato nel 1761 da Lambert)

</details>

<details>
<summary>Esercizio 2 — Vero o falso</summary>

**Testo:** Vero o falso?
(a) Ogni numero intero è razionale.
(b) Esistono numeri irrazionali negativi.
(c) La somma di due numeri irrazionali è sempre irrazionale.
(d) $\mathbb{Q} \subset \mathbb{Z}$.

**Soluzione:**

- (a) **Vero.** Ogni intero $n$ si scrive $\frac{n}{1} \in \mathbb{Q}$.
- (b) **Vero.** Per esempio $-\sqrt{2} \approx -1{,}414\ldots$ è irrazionale e negativo.
- (c) **Falso.** Controesempio: $\sqrt{2} + (-\sqrt{2}) = 0 \in \mathbb{N}$.
- (d) **Falso.** È il contrario: $\mathbb{Z} \subset \mathbb{Q}$. Ci sono razionali non interi, come $\frac{1}{2}$.

</details>

<details>
<summary>Esercizio 3 — Intervalli</summary>

**Testo:** Scrivi in notazione di intervallo gli insiemi:
(a) $\{x \in \mathbb{R} \mid x \geq -3\}$
(b) $\{x \in \mathbb{R} \mid -1 < x \leq 4\}$
(c) $\{x \in \mathbb{R} \mid x < 0 \text{ o } x \geq 5\}$

**Soluzione:**

- (a) $[-3, +\infty)$
- (b) $(-1, 4]$
- (c) $(-\infty, 0) \cup [5, +\infty)$

</details>

<details>
<summary>Esercizio 4 — Dimostrare che √3 è irrazionale</summary>

**Testo:** Dimostra per assurdo che $\sqrt{3}$ è irrazionale.

**Soluzione:**

Supponiamo $\sqrt{3} = \frac{p}{q}$ ridotto ai minimi termini ($\text{MCD}(p,q) = 1$).

Elevando al quadrato: $3 = \frac{p^2}{q^2}$, quindi $p^2 = 3q^2$.

Questo significa che $3 \mid p^2$. Poiché 3 è primo, $3 \mid p$, cioè $p = 3k$.

Sostituendo: $(3k)^2 = 3q^2 \implies 9k^2 = 3q^2 \implies q^2 = 3k^2$.

Quindi $3 \mid q^2$, e poiché 3 è primo, $3 \mid q$.

Ma allora $3 \mid p$ e $3 \mid q$, contraddice $\text{MCD}(p,q) = 1$. Dunque $\sqrt{3}$ è irrazionale. $\square$

</details>

<details>
<summary>Esercizio 5 — Trovare razionali tra due reali</summary>

**Testo:** Trova tre numeri razionali compresi tra $\sqrt{2} \approx 1{,}414$ e $\sqrt{3} \approx 1{,}732$.

**Soluzione:**

Devo trovare razionali $r$ con $1{,}414 < r < 1{,}732$. Esempi:
- $r_1 = \frac{3}{2} = 1{,}5$ ✓
- $r_2 = \frac{5}{3} \approx 1{,}667$ ✓
- $r_3 = \frac{7}{5} = 1{,}4$ ✗ (troppo piccolo!) Invece: $\frac{7}{5} = 1{,}4 < 1{,}414$. Proviamo $\frac{8}{5} = 1{,}6$ ✓

Tre razionali validi: $\frac{3}{2}$, $\frac{5}{3}$, $\frac{8}{5}$.

</details>

<details>
<summary>Esercizio 6 — Operazioni e chiusura</summary>

**Testo:** Per ognuna delle seguenti operazioni, determina il più piccolo insieme numerico in cui il risultato è definito:
(a) $5 - 8$
(b) $\frac{4}{6}$
(c) $\sqrt{7}$
(d) $\frac{1}{0}$

**Soluzione:**

- (a) $5 - 8 = -3 \in \mathbb{Z}$ (il più piccolo insieme chiuso per la sottrazione che contiene 5 e 8)
- (b) $\frac{4}{6} = \frac{2}{3} \in \mathbb{Q}$ (razionale non intero)
- (c) $\sqrt{7} \in \mathbb{R} \setminus \mathbb{Q}$ (irrazionale; serve $\mathbb{R}$)
- (d) **Non definita** in nessun insieme numerico standard. La divisione per zero è indefinita.

</details>

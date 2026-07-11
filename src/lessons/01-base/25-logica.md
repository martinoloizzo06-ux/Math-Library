---
id: base-25-logica
subject: base
topic_it: Ragionamento matematico
topic_en: Mathematical reasoning
title_it: Logica di base e connettivi
title_en: Basic logic and connectives
level: green
order: 25
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Appendice — Logica e insiemi"
stato: da-rielaborare
---

## 1. Intuizione e motivazione

Ogni volta che scrivi una frase come "Se piove, allora prendo l'ombrello" stai usando la logica. La matematica ha formalizzato questo linguaggio naturale in un sistema preciso e privo di ambiguità: la **logica proposizionale**. Invece di frasi in italiano, lavoriamo con proposizioni $P$, $Q$, $R$ e connettivi simbolici ($\land$, $\lor$, $\Rightarrow$, ...) che ne descrivono le relazioni.

Perché studiare la logica? Perché è il fondamento di tutto il ragionamento matematico: ogni dimostrazione è una catena di implicazioni logiche. È anche la base dei circuiti digitali (ogni porta logica è un connettivo: AND, OR, NOT), dell'intelligenza artificiale, della programmazione (istruzioni `if-else`) e del diritto (interpretazione delle leggi). Saper ragionare con precisione è una delle competenze più trasferibili che la matematica insegna.

---

## 2. Prerequisiti

- Nozione di "affermazione vera o falsa"
- Lettura e interpretazione di enunciati
- Simboli di base: $\in$, $\forall$, $\exists$, $\mathbb{N}$, $\mathbb{R}$

---

## 3. Teoria passo-passo

### Proposizioni

Una **proposizione** (o enunciato) è un'affermazione che ha un preciso valore di verità: o è **Vera (V)** o è **Falsa (F)**, mai entrambe.

Esempi:
- "3 è un numero primo" → **V**
- "$\sqrt{2}$ è un numero razionale" → **F**
- "$7 > 5$" → **V**

Non sono proposizioni:
- "Quanto fa $x + 1$?" (non è un'affermazione)
- "Questa frase è falsa" (paradosso)
- "Il tempo è bello" (soggettivo, dipende da contesto)

### Connettivi logici

Dati enunciati $P$ e $Q$, si costruiscono nuovi enunciati mediante **connettivi**:

| Connettivo | Simbolo | Lettura | Vero quando... |
| --- | --- | --- | --- |
| Negazione | $\lnot P$ | "non $P$" | $P$ è falsa |
| Congiunzione | $P \land Q$ | "$P$ e $Q$" | entrambi veri |
| Disgiunzione | $P \lor Q$ | "$P$ o $Q$" | almeno uno vero |
| Implicazione | $P \Rightarrow Q$ | "se $P$ allora $Q$" | non accade V$\Rightarrow$F |
| Doppia implicazione | $P \Leftrightarrow Q$ | "$P$ se e solo se $Q$" | stesso valore di verità |

### Tabella di verità completa

| $P$ | $Q$ | $\lnot P$ | $P \land Q$ | $P \lor Q$ | $P \Rightarrow Q$ | $P \Leftrightarrow Q$ |
| --- | --- | --- | --- | --- | --- | --- |
| V | V | F | V | V | V | V |
| V | F | F | F | V | **F** | F |
| F | V | V | F | V | V | F |
| F | F | V | F | F | V | V |

**L'implicazione è il connettivo più sottile.** $P \Rightarrow Q$ è falsa solo quando $P$ è vera e $Q$ è falsa. In tutti gli altri casi è vera — anche quando $P$ è falsa ("ex falso quodlibet": da una premessa falsa si può concludere qualsiasi cosa).

### Forme associate all'implicazione

Dato $P \Rightarrow Q$ ("se $P$ allora $Q$"):

| Nome | Forma | Equivalente a $P\Rightarrow Q$? |
| --- | --- | --- |
| Diretta | $P \Rightarrow Q$ | — (è la stessa) |
| Conversa | $Q \Rightarrow P$ | No |
| Inversa | $\lnot P \Rightarrow \lnot Q$ | No |
| Contronominale | $\lnot Q \Rightarrow \lnot P$ | **Sì** |

La **contronominale** è logicamente equivalente alla diretta — un'utile tecnica di dimostrazione.

### Tautologie e contraddizioni

- **Tautologia:** formula sempre vera, per ogni combinazione di valori di $P$, $Q$, ...
  - Esempio: $P \lor \lnot P$ ("$P$ o non $P$" — legge del terzo escluso)
- **Contraddizione:** formula sempre falsa.
  - Esempio: $P \land \lnot P$ ("$P$ e non $P$" — impossibile)

### Quantificatori

I quantificatori estendono la logica a predicati che dipendono da una variabile:

- **Quantificatore universale $\forall$:** "$\forall x \in A, P(x)$" = "per ogni $x$ in $A$, $P(x)$ è vera"
- **Quantificatore esistenziale $\exists$:** "$\exists x \in A: P(x)$" = "esiste almeno un $x$ in $A$ per cui $P(x)$ è vera"

**Negazione dei quantificatori** (fondamentale!):

$$\lnot\bigl(\forall x \in A,\; P(x)\bigr) \equiv \exists x \in A:\; \lnot P(x)$$

$$\lnot\bigl(\exists x \in A:\; P(x)\bigr) \equiv \forall x \in A,\; \lnot P(x)$$

**Attenzione all'ordine dei quantificatori:** "$\forall x, \exists y: P(x,y)$" è diverso da "$\exists y, \forall x: P(x,y)$".

---

## 4. Derivazione commentata

### Verifica che la contronominale è equivalente alla diretta

Vogliamo mostrare che $P \Rightarrow Q$ e $\lnot Q \Rightarrow \lnot P$ hanno sempre lo stesso valore di verità.

Confrontiamo riga per riga le tabelle di verità:

| $P$ | $Q$ | $\lnot P$ | $\lnot Q$ | $P \Rightarrow Q$ | $\lnot Q \Rightarrow \lnot P$ |
| --- | --- | --- | --- | --- | --- |
| V | V | F | F | V | V |
| V | F | F | V | **F** | **F** |
| F | V | V | F | V | V |
| F | F | V | V | V | V |

I valori della quinta e sesta colonna coincidono in tutte e quattro le righe. Dunque le due formule sono **logicamente equivalenti** ($\equiv$). $\square$

Nota: la conversa $Q \Rightarrow P$ e l'inversa $\lnot P \Rightarrow \lnot Q$ sono equivalenti tra loro, ma non alla diretta.

---

## 5. Esempi graduati

**Esempio 1 — Valore di verità di proposizioni composite.**
Con $P$ = "$2 > 1$" (V) e $Q$ = "$3 < 0$" (F), determinare:
- $P \land Q$: V $\land$ F = **F**
- $P \lor Q$: V $\lor$ F = **V**
- $P \Rightarrow Q$: V $\Rightarrow$ F = **F**
- $\lnot Q$: $\lnot$F = **V**

---

**Esempio 2 — Tabella di verità di una formula.**
Costruire la tabella di verità di $(P \lor Q) \land \lnot P$.

| $P$ | $Q$ | $P \lor Q$ | $\lnot P$ | $(P \lor Q) \land \lnot P$ |
| --- | --- | --- | --- | --- |
| V | V | V | F | F |
| V | F | V | F | F |
| F | V | V | V | **V** |
| F | F | F | V | F |

La formula è vera solo quando $P$ è falsa e $Q$ è vera — equivalente a $\lnot P \land Q$.

---

**Esempio 3 — Contronominale.**
"Se $n^2$ è pari, allora $n$ è pari."

Contronominale: "Se $n$ è **dispari**, allora $n^2$ è **dispari**."

Equivalenti logicamente. La seconda è più facile da dimostrare direttamente.

---

**Esempio 4 — Tautologia.**
Verificare che $P \Rightarrow (P \lor Q)$ è una tautologia.

Se $P$ è vera, allora $P \lor Q$ è vera (almeno $P$), quindi V$\Rightarrow$V = V.
Se $P$ è falsa, allora V$\Rightarrow$qualsiasi cosa = V.

In entrambi i casi il risultato è V: è una tautologia ✓.

---

**Esempio 5 — Quantificatori.**
Scrivere formalmente e negare: "Ogni numero reale ha una radice quadrata reale."

Formale: $\forall x \in \mathbb{R},\; \exists y \in \mathbb{R}: y^2 = x$

Negazione: $\exists x \in \mathbb{R}:\; \forall y \in \mathbb{R},\; y^2 \neq x$

In parole: "Esiste un reale senza radice quadrata reale." (Vero: $x = -1$.)

---

**Esempio 6 — Ordine dei quantificatori.**
- "$\forall x \in \mathbb{R},\; \exists y \in \mathbb{R}: y > x$" — **vero** (per ogni $x$, basta $y = x+1$).
- "$\exists y \in \mathbb{R}:\; \forall x \in \mathbb{R},\; y > x$" — **falso** (non esiste un reale maggiore di tutti gli altri).

Scambiare l'ordine cambia completamente il significato!

---

**Esempio 7 — Legge di De Morgan.**
Le **leggi di De Morgan** per la logica proposizionale:

$$\lnot(P \land Q) \equiv \lnot P \lor \lnot Q$$
$$\lnot(P \lor Q) \equiv \lnot P \land \lnot Q$$

Applicazione: negare "è pari e minore di 10" → "è dispari o maggiore/uguale a 10".

---

## 6. Grafico

```plot
{
  "title": "Implicazione visiva: se x > 2 allora x² > 4",
  "fn": "x*x",
  "fn2": "4",
  "domain": [-1, 4],
  "yDomain": [-1, 12],
  "label1": "y = x² (tesi)",
  "label2": "y = 4 (soglia)"
}
```

Il grafico illustra l'implicazione $x > 2 \Rightarrow x^2 > 4$: per ogni $x > 2$ (a destra della soglia), la curva $y = x^2$ supera la linea retta $y = 4$. La contronominale: $x^2 \leq 4 \Rightarrow x \leq 2$.

---

## 7. Elemento interattivo

```slider
{
  "title": "Soglia dell'implicazione: se x > t allora x² > t²",
  "fn": "x*x",
  "fn2": "t*t",
  "domain": [-5, 5],
  "yDomain": [-2, 20],
  "pname": "t",
  "pmin": 0,
  "pmax": 4,
  "pdefault": 2,
  "pstep": 0.1,
  "plabel": "Soglia t",
  "label1": "y = x²",
  "label2": "y = t²"
}
```

Muovi lo slider: la linea rossa (soglia $y = t^2$) si alza al crescere di $t$. L'implicazione $x > t \Rightarrow x^2 > t^2$ vale per $t > 0$ — visibile come il fatto che la parabola supera la soglia proprio a destra di $x = t$.

---

## 8. Errori comuni

**Errore 1 — L'implicazione "falso implica tutto".**
$F \Rightarrow Q$ è **sempre vera**, qualunque sia $Q$. Molti pensano che una premessa falsa debba rendere la conclusione falsa — non è così.

**Errore 2 — Confondere conversa e contronominale.**
$P \Rightarrow Q$ è equivalente a $\lnot Q \Rightarrow \lnot P$ (contronominale), NON a $Q \Rightarrow P$ (conversa). "Se è un cane, allora è un animale" non equivale a "se è un animale, allora è un cane".

**Errore 3 — "O esclusivo" vs "o inclusivo".**
In matematica $P \lor Q$ è sempre **inclusivo** (almeno uno vero, incluso il caso in cui entrambi sono veri). L'italiano "o" è spesso esclusivo ("caffè o tè, non entrambi"): in matematica questo si scrive diversamente ($P \oplus Q$).

**Errore 4 — Negare l'implicazione sbagliando.**
$\lnot(P \Rightarrow Q)$ non è $\lnot P \Rightarrow \lnot Q$. La negazione corretta è $P \land \lnot Q$ (la premessa è vera ma la conclusione è falsa).

**Errore 5 — Ordine dei quantificatori.**
"$\forall x, \exists y$" e "$\exists y, \forall x$" sono due cose diverse. Scambiare l'ordine trasforma un enunciato vero in uno falso o viceversa.

**Errore 6 — Negare il quantificatore universale con "per nessun".**
$\lnot(\forall x, P(x))$ non significa "per nessun $x$, $P(x)$" — significa "esiste almeno un $x$ per cui $P(x)$ è falsa". Il "per nessun" sarebbe $\forall x, \lnot P(x)$, che è molto più forte.

**Errore 7 — Confondere equivalenza logica con uguaglianza.**
$P \equiv Q$ significa che $P$ e $Q$ hanno sempre lo stesso valore di verità. Non significa che $P$ e $Q$ sono "la stessa frase": possono essere formulate diversamente ma avere la stessa tavola di verità.

---

## 9. Applicazioni reali

**Informatica e circuiti digitali.** Ogni circuito elettronico è costruito con **porte logiche**: AND ($\land$), OR ($\lor$), NOT ($\lnot$), NAND, NOR. Un processore che esegue miliardi di operazioni al secondo non fa altro che valutare espressioni logiche su bit (0 = F, 1 = V). La progettazione di circuiti ottimali equivale a semplificare espressioni logiche — esattamente come si fa con le leggi di De Morgan e le tautologie.

**Programmazione.** Ogni istruzione `if-else` in un programma è un'implicazione logica. I cicli `while` e `for` usano predicati con quantificatori. I bug logici (il programma fa qualcosa di diverso da ciò che si intende) spesso derivano da un errore di logica proposizionale: aver scritto `&&` invece di `||`, o aver negato una condizione sbagliando il connettivo.

**Diritto e linguaggio normativo.** Le leggi sono costruite con connettivi logici: "Se la persona è maggiorenne E ha la patente, allora può guidare". I giuristi e i giudici devono interpretare tali connettivi con precisione. Molte controversie legali nascono da ambiguità nel significato di "o" (esclusivo o inclusivo?) o dalla mancata applicazione della contronominale in un contratto.

---

## 10. Riepilogo tabellare

| Connettivo | Simbolo | Falso quando... |
| --- | --- | --- |
| Negazione | $\lnot P$ | $P$ è vera |
| Congiunzione | $P \land Q$ | almeno uno falso |
| Disgiunzione | $P \lor Q$ | entrambi falsi |
| Implicazione | $P \Rightarrow Q$ | $P$ vera e $Q$ falsa |
| Doppia implicazione | $P \Leftrightarrow Q$ | valori diversi |

| Formula | Equivalente a |
| --- | --- |
| $P \Rightarrow Q$ | $\lnot Q \Rightarrow \lnot P$ (contronominale) |
| $\lnot(P \land Q)$ | $\lnot P \lor \lnot Q$ (De Morgan) |
| $\lnot(P \lor Q)$ | $\lnot P \land \lnot Q$ (De Morgan) |
| $\lnot(\forall x, P(x))$ | $\exists x: \lnot P(x)$ |
| $\lnot(\exists x: P(x))$ | $\forall x, \lnot P(x)$ |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Tabella di verità</summary>

**Testo:** Costruire la tabella di verità di $\lnot(P \land Q) \Rightarrow (\lnot P \lor \lnot Q)$.

**Soluzione:**

| $P$ | $Q$ | $P \land Q$ | $\lnot(P\land Q)$ | $\lnot P \lor \lnot Q$ | Risultato |
| --- | --- | --- | --- | --- | --- |
| V | V | V | F | F | V |
| V | F | F | V | V | V |
| F | V | F | V | V | V |
| F | F | F | V | V | V |

La formula è sempre vera: è una tautologia. In realtà è la prima legge di De Morgan ($\lnot(P \land Q) \equiv \lnot P \lor \lnot Q$), quindi le due formule sono equivalenti.

</details>

<details>
<summary>Esercizio 2 — Contronominale</summary>

**Testo:** Scrivere la contronominale e la conversa di: "Se $n$ è divisibile per 6, allora $n$ è divisibile per 3."

**Soluzione:**

Diretta: "$n$ div. per 6 $\Rightarrow$ $n$ div. per 3"

Contronominale (equivalente): "Se $n$ **non** è divisibile per 3, allora $n$ **non** è divisibile per 6."

Conversa (non equivalente): "Se $n$ è divisibile per 3, allora $n$ è divisibile per 6." — **falsa**: $n=3$ è div. per 3 ma non per 6.

</details>

<details>
<summary>Esercizio 3 — Negazione di enunciati quantificati</summary>

**Testo:** Negare: "Per ogni numero naturale $n$, $n^2 \geq n$."

**Soluzione:**

Enunciato formale: $\forall n \in \mathbb{N},\; n^2 \geq n$

Negazione: $\exists n \in \mathbb{N}:\; n^2 < n$

In parole: "Esiste un naturale $n$ tale che $n^2 < n$."

Verifica: per $n = 0$: $0 < 0$? No. Per $n = 1$: $1 < 1$? No. In realtà l'enunciato originale è vero per tutti i naturali (può essere dimostrato), quindi la negazione è falsa.

</details>

<details>
<summary>Esercizio 4 — Legge di De Morgan</summary>

**Testo:** Usando De Morgan, semplificare $\lnot(\lnot P \lor Q)$.

**Soluzione:**

$$\lnot(\lnot P \lor Q) \equiv \lnot(\lnot P) \land \lnot Q \equiv P \land \lnot Q$$

</details>

<details>
<summary>Esercizio 5 — Ordine dei quantificatori</summary>

**Testo:** Determinare se i seguenti enunciati sono veri o falsi (per $x, y \in \mathbb{R}$):
(a) $\forall x, \exists y: x + y = 0$
(b) $\exists y, \forall x: x + y = 0$

**Soluzione:**

(a) **Vero**: per ogni $x$, basta scegliere $y = -x$.

(b) **Falso**: richiederebbe un $y$ fisso che soddisfi $x + y = 0$ per ogni $x$, ma allora $y = -x$ dovrebbe valere per tutti gli $x$ contemporaneamente — impossibile.

</details>

<details>
<summary>Esercizio 6 — Implicazione in matematica</summary>

**Testo:** Per ognuno dei seguenti, dire se è vera o falsa la formula $P \Rightarrow Q$, dove $P =$ "$x = 2$" e $Q = $ "$x^2 = 4$".

**Soluzione:**

- Per $x = 2$: $P$ vera, $Q$ vera → V$\Rightarrow$V = **V** ✓
- Per $x = -2$: $P$ falsa, $Q$ vera → F$\Rightarrow$V = **V** ✓
- Per $x = 3$: $P$ falsa, $Q$ falsa → F$\Rightarrow$F = **V** ✓

La conversa $Q \Rightarrow P$: "se $x^2 = 4$ allora $x = 2$" è falsa per $x = -2$ (Q vera, P falsa).

</details>

<details>
<summary>Esercizio 7 — Tautologia</summary>

**Testo:** Verificare che $(P \Rightarrow Q) \Leftrightarrow (\lnot P \lor Q)$ è una tautologia.

**Soluzione:**

| $P$ | $Q$ | $P\Rightarrow Q$ | $\lnot P \lor Q$ | Biconditionale |
| --- | --- | --- | --- | --- |
| V | V | V | V | V |
| V | F | F | F | V |
| F | V | V | V | V |
| F | F | V | V | V |

Tutte le righe danno V: è una tautologia. Questo ci dice che $P \Rightarrow Q$ è equivalente a $\lnot P \lor Q$ — definizione alternativa dell'implicazione.

</details>

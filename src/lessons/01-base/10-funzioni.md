---
id: base-10-funzioni
subject: base
topic_it: Funzioni elementari
topic_en: Elementary functions
title_it: Concetto di funzione, dominio e codominio
title_en: Functions, domain and codomain
level: green
order: 10
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 5 — Funzioni"
---

## Intuizione e motivazione

Immagina una macchinetta del caffè: inserisci una moneta (input), la macchina esegue una trasformazione fissa, e ottieni una tazzina (output). A ogni moneta corrisponde **esattamente una** tazzina, mai zero, mai due. Questo è il concetto di funzione.

Le funzioni sono il linguaggio fondamentale della matematica applicata. Ogni volta che un fisico scrive $v = at$, ogni volta che un economista calcola il ricavo in base alla quantità venduta, ogni volta che uno sviluppatore trasforma un dato in output, sta usando una funzione. Senza funzioni non esisterebbero la meccanica, la termodinamica, l'economia matematica, il machine learning.

La vera potenza delle funzioni sta nel fatto che fissata la "regola", si può prevedere l'output per qualsiasi input senza fare esperimenti: basta calcolare.

## Prerequisiti

- Insiemi e notazione $\in$, $\subseteq$
- Piano cartesiano e coordinate $(x, y)$
- Operazioni algebriche di base (frazioni, radici, potenze)
- Nozione di disequazione: $x \geq 0$, $x \neq 0$

## Teoria passo-passo

### Definizione formale

Una **funzione** $f: A \to B$ è una corrispondenza che associa a ogni elemento $x \in A$ **uno e un solo** elemento $f(x) \in B$.

- $A$ si chiama **dominio** di $f$: è l'insieme di tutti i valori di input ammissibili.
- $B$ si chiama **codominio** di $f$: è l'insieme in cui "vivono" gli output (non tutti devono essere raggiunti).
- $f(x)$ si chiama **immagine di $x$** (o valore della funzione in $x$).
- L'**immagine** (o **range**) di $f$ è il sottoinsieme effettivamente raggiunto:

$$\text{Im}(f) = \{ f(x) \mid x \in A \} \subseteq B$$

### Test della retta verticale

Una curva nel piano cartesiano è il grafico di una funzione se e solo se **ogni retta verticale la interseca in al più un punto**. Se una retta verticale colpisce la curva in due punti, allora a quell'$x$ corrispondono due output diversi: la corrispondenza non è una funzione.

### Dominio naturale

Quando $f$ è definita da una formula algebrica, il **dominio naturale** è il più grande sottoinsieme di $\mathbb{R}$ per cui la formula è ben definita:

| Espressione | Condizione |
| --- | --- |
| $\dfrac{1}{g(x)}$ | $g(x) \neq 0$ |
| $\sqrt{g(x)}$ | $g(x) \geq 0$ |
| $\sqrt[n]{g(x)}$ con $n$ pari | $g(x) \geq 0$ |
| $\log_a g(x)$ | $g(x) > 0$ |
| Combinazione | intersezione di tutte le condizioni |

Se ci sono più vincoli contemporaneamente, il dominio è l'intersezione di tutti gli insiemi che soddisfano ogni singolo vincolo.

### Iniettività, suriettività, biettività

Una funzione $f: A \to B$ si dice:

- **Iniettiva** (o "uno a uno"): se input diversi producono output diversi. Formalmente:
$$x_1 \neq x_2 \implies f(x_1) \neq f(x_2)$$
Equivalentemente: $f(x_1) = f(x_2) \implies x_1 = x_2$.

- **Suriettiva** (o "su"): se ogni elemento del codominio è raggiunto da almeno un input. Formalmente: $\text{Im}(f) = B$.

- **Biiettiva** (o "biiezione", o "corrispondenza biunivoca"): se è contemporaneamente iniettiva e suriettiva. Ogni elemento di $B$ è immagine di **esattamente un** elemento di $A$.

**Come riconoscerle graficamente:** una funzione è iniettiva se ogni retta **orizzontale** interseca il grafico in al più un punto. È suriettiva se ogni retta orizzontale interseca il grafico in almeno un punto.

### Funzione inversa

Se $f: A \to B$ è biiettiva, esiste la **funzione inversa** $f^{-1}: B \to A$ tale che:
$$f^{-1}(f(x)) = x \quad \text{per ogni } x \in A$$
$$f(f^{-1}(y)) = y \quad \text{per ogni } y \in B$$

Il grafico di $f^{-1}$ si ottiene riflettendo il grafico di $f$ rispetto alla bisettrice $y = x$.

**Procedura per trovare $f^{-1}$:**
1. Scrivi $y = f(x)$.
2. Risolvi l'equazione per $x$ in funzione di $y$.
3. Scrivi $f^{-1}(y) = \ldots$ e rinomina $y$ con $x$.

### Composizione di funzioni

Dati $f: A \to B$ e $g: B \to C$, la **funzione composta** $g \circ f$ è:

$$(g \circ f)(x) = g(f(x))$$

Si legge "g dopo f": prima si applica $f$, poi $g$ al risultato.

> **Attenzione:** in generale $g \circ f \neq f \circ g$. La composizione non è commutativa.

**Dominio di $g \circ f$:** l'insieme degli $x \in A$ tali che $f(x)$ appartiene al dominio di $g$.

## Derivazioni commentate

### Come trovare il dominio naturale (procedura dettagliata)

Consideriamo $f(x) = \dfrac{\sqrt{x+1}}{x^2 - x - 6}$.

**Passo 1 — Identifico tutti i vincoli:**
- C'è una radice quadrata $\sqrt{x+1}$: richiede $x + 1 \geq 0$.
- C'è un denominatore $x^2 - x - 6$: richiede $x^2 - x - 6 \neq 0$.

**Passo 2 — Risolvo ogni vincolo:**
- $x + 1 \geq 0 \implies x \geq -1$, cioè $[-1, +\infty)$.
- $x^2 - x - 6 = (x-3)(x+2) = 0 \implies x = 3$ o $x = -2$.
  Quindi $x \neq 3$ e $x \neq -2$.

**Passo 3 — Intersezione:**
- Parto da $[-1, +\infty)$.
- Di questi, $-2$ non è comunque nel dominio (è minore di $-1$), quindi non è da escludere.
- Devo solo escludere $x = 3$.
- Risultato: $D = [-1, +\infty) \setminus \{3\}$.

## Esempi graduati

**Esempio 1 — Dominio semplice**

$f(x) = \sqrt{x - 4}$

Condizione: $x - 4 \geq 0 \implies x \geq 4$.
Dominio: $[4, +\infty)$.

---

**Esempio 2 — Denominatore**

$f(x) = \dfrac{1}{x^2 - 9}$

$x^2 - 9 \neq 0 \implies x \neq \pm 3$.
Dominio: $\mathbb{R} \setminus \{-3, 3\}$.

---

**Esempio 3 — Radice e denominatore**

$f(x) = \dfrac{\sqrt{x+3}}{x^2 - 1}$

Radice: $x \geq -3$. Denominatore: $x \neq \pm 1$.
Dominio: $[-3, +\infty) \setminus \{-1, 1\}$.

---

**Esempio 4 — Funzione inversa**

Trovare la funzione inversa di $f(x) = \dfrac{2x-1}{x+3}$, con $x \neq -3$.

$y = \dfrac{2x-1}{x+3}$. Moltiplico: $y(x+3) = 2x-1 \implies xy + 3y = 2x - 1$.

Raccolgo $x$: $x(y-2) = -1 - 3y \implies x = \dfrac{-1-3y}{y-2} = \dfrac{3y+1}{2-y}$.

$$f^{-1}(x) = \dfrac{3x+1}{2-x}, \quad x \neq 2$$

---

**Esempio 5 — Composizione**

$f(x) = x^2$, $g(x) = x + 1$.

$(g \circ f)(x) = g(f(x)) = g(x^2) = x^2 + 1$

$(f \circ g)(x) = f(g(x)) = f(x+1) = (x+1)^2 = x^2 + 2x + 1$

I due risultati sono diversi: la composizione non è commutativa.

---

**Esempio 6 — Dominio della composizione**

$f(x) = \sqrt{x}$ (dominio: $x \geq 0$), $g(x) = 1 - x^2$.

$(f \circ g)(x) = f(g(x)) = \sqrt{1 - x^2}$

Condizione: $1 - x^2 \geq 0 \implies x^2 \leq 1 \implies -1 \leq x \leq 1$.

Dominio di $f \circ g$: $[-1, 1]$.

---

**Esempio 7 — Riconoscere iniettività**

$f(x) = x^2$ su $\mathbb{R}$: non è iniettiva perché $f(2) = f(-2) = 4$.

$f(x) = x^2$ su $[0, +\infty)$: è iniettiva (ogni valore positivo ha un'unica radice non negativa).

La restrizione del dominio può rendere iniettiva una funzione che non lo era.

## Grafico

```plot
{
  "title": "Esempio: f(x) = √x e la sua inversa g(x) = x²  (x ≥ 0)",
  "fn": "Math.sqrt(x)",
  "fn2": "x * x",
  "domain": [0, 4],
  "yDomain": [0, 4],
  "label1": "f(x) = √x",
  "label2": "g(x) = x² (inversa)"
}
```

## Elemento interattivo

```slider
{
  "title": "Traslazione verticale: f(x) = √x + k",
  "fn": "Math.sqrt(Math.max(0, x)) + a",
  "domain": [0, 6],
  "yDomain": [-3, 6],
  "pname": "a",
  "pmin": -2,
  "pmax": 3,
  "pdefault": 0,
  "pstep": 0.5,
  "plabel": "Traslazione k",
  "label1": "f(x) = √x + k"
}
```

## Errori comuni

**Errore 1 — Confondere codominio e immagine.**
Il codominio è un insieme che "contiene" gli output; l'immagine è solo ciò che viene effettivamente raggiunto. Per $f: \mathbb{R} \to \mathbb{R}$, $f(x) = x^2$, il codominio è $\mathbb{R}$ ma l'immagine è solo $[0, +\infty)$.

**Errore 2 — Dimenticare di verificare le condizioni di esistenza nel dominio.**
Quando si trova il dominio, bisogna controllare tutti i vincoli: radici, logaritmi, denominatori. Dimenticarne uno porta a includere nel dominio valori non ammissibili.

**Errore 3 — Credere che $f^{-1}(x) = \dfrac{1}{f(x)}$.**
La notazione $f^{-1}$ indica la funzione inversa, non il reciproco. $f^{-1}(x)$ è l'input che produce $x$ come output; $\dfrac{1}{f(x)}$ è semplicemente il reciproco dell'output.

**Errore 4 — Invertire l'ordine nella composizione.**
$(g \circ f)(x)$ si calcola prima $f(x)$, poi $g$ di quel risultato. L'ordine è dall'interno verso l'esterno. Scrivere $g(f(x))$ non è lo stesso di $f(g(x))$.

**Errore 5 — Non verificare il dominio della composizione.**
Il dominio di $g \circ f$ non è semplicemente il dominio di $f$. Serve che $f(x)$ appartenga al dominio di $g$. Un passo omesso può includere valori vietati.

**Errore 6 — Tentare di invertire una funzione non biiettiva.**
$f(x) = x^2$ su $\mathbb{R}$ non ha inversa (non è iniettiva). Per invertirla bisogna prima restringere il dominio a $[0, +\infty)$ oppure $(-\infty, 0]$.

**Errore 7 — Affermare che ogni curva è il grafico di una funzione.**
La circonferenza $x^2 + y^2 = 1$ non è il grafico di una funzione su $\mathbb{R}$: la retta verticale $x = 0$ la taglia in $(0, 1)$ e $(0, -1)$, due punti distinti.

## Applicazioni reali

**Fisica.** La posizione di un oggetto in caduta libera è $s(t) = \frac{1}{2}gt^2$: è una funzione del tempo. Ogni istante $t$ corrisponde a una e una sola posizione. La funzione inversa $t(s) = \sqrt{2s/g}$ dice dopo quanto tempo l'oggetto raggiunge la quota $s$.

**Economia.** La curva di domanda associa a ogni prezzo $p$ la quantità domandata $q(p)$. Se la funzione è biiettiva (monotona), esiste la curva di domanda inversa $p(q)$, usata dai produttori per fissare il prezzo in base alla quantità prodotta.

**Informatica.** Le funzioni hash associano a ogni stringa di dati un valore numerico. Non sono iniettive (due dati diversi possono dare lo stesso hash), ma sono progettate per minimizzare le "collisioni". La composizione di funzioni è alla base della programmazione funzionale.

## Riepilogo tabellare

| Concetto | Definizione | Simbolo |
| --- | --- | --- |
| Funzione | Regola che a ogni $x \in A$ associa un unico $f(x) \in B$ | $f: A \to B$ |
| Dominio | Insieme degli input ammissibili | $D(f)$ o $A$ |
| Codominio | Insieme che contiene gli output | $B$ |
| Immagine | Sottoinsieme di $B$ effettivamente raggiunto | $\text{Im}(f)$ |
| Iniettiva | Input diversi $\Rightarrow$ output diversi | $x_1 \neq x_2 \Rightarrow f(x_1) \neq f(x_2)$ |
| Suriettiva | Ogni elemento di $B$ è raggiunto | $\text{Im}(f) = B$ |
| Biiettiva | Iniettiva e suriettiva | — |
| Inversa | $f^{-1}$ tale che $f^{-1}(f(x)) = x$ | $f^{-1}: B \to A$ |
| Composizione | Prima $f$, poi $g$ del risultato | $(g \circ f)(x) = g(f(x))$ |

## Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Dominio con radice e logaritmo</summary>

Trovare il dominio di $f(x) = \sqrt{x - 2} + \ln(5 - x)$.

**Soluzione:**

Radice: $x - 2 \geq 0 \implies x \geq 2$.

Logaritmo: $5 - x > 0 \implies x < 5$.

Intersezione: $2 \leq x < 5$.

$$D = [2, 5)$$

</details>

<details>
<summary>Esercizio 2 — Dominio complesso</summary>

Trovare il dominio di $f(x) = \dfrac{\sqrt{x+3}}{x^2 - 1}$.

**Soluzione:**

Radice: $x + 3 \geq 0 \implies x \geq -3$.

Denominatore: $x^2 - 1 \neq 0 \implies x \neq \pm 1$.

Partendo da $[-3, +\infty)$, escludo $x = -1$ e $x = 1$ (entrambi $\geq -3$).

$$D = [-3, +\infty) \setminus \{-1, 1\}$$

</details>

<details>
<summary>Esercizio 3 — Funzione inversa</summary>

Trovare la funzione inversa di $f(x) = \dfrac{2x - 1}{x + 3}$, $x \neq -3$.

**Soluzione:**

Pongo $y = \dfrac{2x-1}{x+3}$. Moltiplico: $y(x+3) = 2x-1$.

$xy + 3y = 2x - 1 \implies x(y-2) = -1 - 3y \implies x = \dfrac{3y+1}{2-y}$.

$$f^{-1}(x) = \dfrac{3x+1}{2-x}, \quad x \neq 2$$

</details>

<details>
<summary>Esercizio 4 — Composizione e dominio</summary>

Dati $f(x) = \sqrt{x}$ e $g(x) = 1 - x^2$, calcolare $(f \circ g)(x)$ e trovarne il dominio.

**Soluzione:**

$(f \circ g)(x) = \sqrt{1 - x^2}$.

Condizione: $1 - x^2 \geq 0 \implies x^2 \leq 1 \implies x \in [-1, 1]$.

$$D(f \circ g) = [-1, 1]$$

</details>

<details>
<summary>Esercizio 5 — Composizione in entrambi gli ordini</summary>

Per $f(x) = 2x + 1$ e $g(x) = x^2$, calcolare $(g \circ f)(x)$ e $(f \circ g)(x)$.

**Soluzione:**

$(g \circ f)(x) = g(2x+1) = (2x+1)^2 = 4x^2 + 4x + 1$

$(f \circ g)(x) = f(x^2) = 2x^2 + 1$

I risultati sono diversi: la composizione non è commutativa.

</details>

<details>
<summary>Esercizio 6 — Iniettività e suriettività</summary>

Determinare se $f: \mathbb{R} \to \mathbb{R}$, $f(x) = 2x - 3$ è iniettiva, suriettiva, biiettiva.

**Soluzione:**

**Iniettiva:** se $f(x_1) = f(x_2)$ allora $2x_1 - 3 = 2x_2 - 3 \implies x_1 = x_2$. Sì, è iniettiva.

**Suriettiva:** dato qualsiasi $y \in \mathbb{R}$, esiste $x = \dfrac{y+3}{2}$ tale che $f(x) = y$. Sì, è suriettiva.

**Biiettiva:** sì. La funzione inversa è $f^{-1}(x) = \dfrac{x+3}{2}$.

</details>

<details>
<summary>Esercizio 7 — Verifica della funzione inversa</summary>

Per $f(x) = x^3$, trovare $f^{-1}$ e verificare che $f(f^{-1}(x)) = x$.

**Soluzione:**

$y = x^3 \implies x = y^{1/3} = \sqrt[3]{y}$.

$f^{-1}(x) = \sqrt[3]{x} = x^{1/3}$.

Verifica: $f(f^{-1}(x)) = f(x^{1/3}) = (x^{1/3})^3 = x$. Corretto.

</details>

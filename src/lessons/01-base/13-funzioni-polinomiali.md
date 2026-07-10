---
id: base-13-funzioni-polinomiali
subject: base
topic_it: Funzioni elementari
topic_en: Elementary functions
title_it: Funzioni polinomiali e razionali
title_en: Polynomial and rational functions
level: green
order: 13
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 5 — Funzioni razionali"
---

## Intuizione e motivazione

Un ingegnere che calcola la forza di flessione di una trave, un economista che modella il costo totale, un fisico che approssima il comportamento di un sistema vicino all'equilibrio: tutti usano polinomi. I polinomi sono i mattoni base dell'analisi matematica perché sono semplici da calcolare, possono approssimare qualsiasi funzione continua (teorema di Weierstrass) e descrivono naturalmente fenomeni con molteplici effetti che si sommano.

Le funzioni razionali (rapporto di due polinomi) estendono questo potere modellando fenomeni con saturazione, asintoti, e comportamenti alla Meyer "il prodotto diminuisce se il costo aumenta troppo". La legge di gravitazione universale $F = G\dfrac{m_1 m_2}{r^2}$ è una funzione razionale in $r$.

Capire polinomi e funzioni razionali significa capire come il comportamento di una funzione dipende dal grado, dai coefficienti e dalle radici.

## Prerequisiti

- Funzione quadratica $f(x) = ax^2 + bx + c$
- Radici e fattorizzazione di polinomi di secondo grado
- Nozione di limite informale: $f(x) \to +\infty$ quando $x \to +\infty$
- Operazioni con frazioni algebriche

## Teoria passo-passo

### Polinomi: definizione

Una **funzione polinomiale** di grado $n$ è:

$$p(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0, \quad a_n \neq 0$$

Il termine $a_n x^n$ si chiama **termine dominante**, $a_n$ è il **coefficiente direttore**.

**Proprietà fondamentali:**
- Dominio: $\mathbb{R}$ (sempre definita su tutta la retta reale).
- Continua e derivabile ovunque (grafico senza buchi né spigoli).
- Ha al più $n$ radici reali (zeri).

### Comportamento agli estremi (comportamento asintotico)

Per $x \to \pm\infty$, il termine dominante $a_n x^n$ governa il comportamento:

| Grado $n$ | Segno di $a_n$ | $x \to +\infty$ | $x \to -\infty$ |
| --- | --- | --- | --- |
| Pari | $a_n > 0$ | $+\infty$ | $+\infty$ |
| Pari | $a_n < 0$ | $-\infty$ | $-\infty$ |
| Dispari | $a_n > 0$ | $+\infty$ | $-\infty$ |
| Dispari | $a_n < 0$ | $-\infty$ | $+\infty$ |

Regola pratica: un polinomio di grado pari "sale da entrambe le parti" (se $a_n > 0$) o "scende da entrambe le parti" (se $a_n < 0$). Un polinomio di grado dispari "sale da un lato e scende dall'altro".

### Zeri e molteplicità

Ogni radice (zero) $x_0$ di $p(x)$ ha una **molteplicità** $m \geq 1$: il fattore $(x - x_0)^m$ divide esattamente $p(x)$.

- Molteplicità **dispari** (1, 3, 5, ...): il grafico **attraversa** l'asse $x$ in $x_0$.
- Molteplicità **pari** (2, 4, ...): il grafico **tocca** l'asse $x$ in $x_0$ e rimbalza.

La somma di tutte le molteplicità (delle radici reali e complesse) è uguale al grado $n$.

**Teorema fondamentale dell'algebra:** ogni polinomio di grado $n \geq 1$ a coefficienti complessi ha esattamente $n$ radici in $\mathbb{C}$ (contate con molteplicità). Le radici complesse di un polinomio a coefficienti reali vengono a coppie coniugate.

### Funzioni razionali

Una **funzione razionale** è il rapporto di due polinomi:

$$f(x) = \frac{p(x)}{q(x)}, \quad q(x) \not\equiv 0$$

**Dominio:** $\{x \in \mathbb{R} : q(x) \neq 0\}$ (si escludono gli zeri del denominatore).

**Semplificazione:** se $p$ e $q$ hanno fattori comuni, si può semplificare, ma il dominio non cambia (i valori annullati nel denominatore vanno comunque esclusi, anche dopo la semplificazione — restano "buchi" nel grafico).

### Asintoti delle funzioni razionali

**Asintoto verticale** $x = a$: se $q(a) = 0$ e $p(a) \neq 0$, allora $f(x) \to \pm\infty$ per $x \to a$. Se invece sia $p(a) = 0$ che $q(a) = 0$, si tratta di un buco (discontinuità eliminabile dopo semplificazione).

**Asintoto orizzontale** (per $x \to \pm\infty$): dipende dal confronto tra i gradi $n = \deg p$ e $m = \deg q$:
- $n < m$: asintoto $y = 0$.
- $n = m$: asintoto $y = \dfrac{a_n}{b_m}$ (rapporto dei coefficienti direttori).
- $n > m$: nessun asintoto orizzontale.

**Asintoto obliquo** (solo quando $n = m + 1$): si divide $p(x) \div q(x)$ con la divisione euclidea. Il quoziente lineare $mx + q$ è l'asintoto obliquo.

## Derivazioni commentate

### Come trovare un asintoto obliquo passo per passo

Consideriamo $f(x) = \dfrac{x^2 - 1}{x + 2}$. Il grado del numeratore ($n = 2$) è uguale al grado del denominatore più 1 ($m + 1 = 2$), quindi esiste un asintoto obliquo.

**Passo 1 — Divido** $x^2 - 1$ per $x + 2$:

$x^2 - 1 = (x + 2) \cdot q(x) + r$

Provo $q(x) = x - 2$: $(x+2)(x-2) = x^2 - 4$. Resto: $-1 - (-4) = 3$.

Quindi $x^2 - 1 = (x+2)(x-2) + 3$.

**Passo 2 — Scrivo la funzione:**
$$f(x) = \frac{(x+2)(x-2) + 3}{x+2} = x - 2 + \frac{3}{x+2}$$

**Passo 3 — Per $x \to \pm\infty$**, il termine $\dfrac{3}{x+2} \to 0$.

**Conclusione:** l'asintoto obliquo è $y = x - 2$.

## Esempi graduati

**Esempio 1 — Comportamento di un polinomio**

$p(x) = -3x^5 + 2x^3 - x$. Termine dominante: $-3x^5$ (grado dispari, $a_n < 0$).

Per $x \to +\infty$: $p(x) \to -\infty$. Per $x \to -\infty$: $p(x) \to +\infty$.

---

**Esempio 2 — Molteplicità delle radici**

$p(x) = (x-1)^2(x+2)(x-3)^3$.

Grado: $2 + 1 + 3 = 6$.

- $x = 1$: molteplicità 2 (pari) → il grafico tocca e rimbalza.
- $x = -2$: molteplicità 1 (dispari) → il grafico attraversa.
- $x = 3$: molteplicità 3 (dispari) → il grafico attraversa (con punto di flesso).

---

**Esempio 3 — Asintoti di una funzione razionale semplice**

$f(x) = \dfrac{2x + 1}{x - 3}$.

Asintoto verticale: $x = 3$ (denominatore zero, numeratore $\neq 0$ in $x = 3$).

Gradi uguali ($n = m = 1$): asintoto orizzontale $y = 2/1 = 2$.

---

**Esempio 4 — Buco nel grafico vs asintoto**

$f(x) = \dfrac{x^2 + x - 2}{x^2 - 4} = \dfrac{(x-1)(x+2)}{(x-2)(x+2)}$.

In $x = -2$: sia numeratore che denominatore si annullano → si semplifica il fattore $(x+2)$, ma $x = -2$ resta escluso dal dominio (buco nel grafico).

In $x = 2$: $q(2) = 0$ e $p(2) = 4 \neq 0$ → **asintoto verticale** $x = 2$.

Funzione semplificata: $\dfrac{x-1}{x-2}$ con $x \neq -2$.

Asintoto orizzontale: gradi uguali → $y = 1$.

---

**Esempio 5 — Asintoto orizzontale $y = 0$**

$f(x) = \dfrac{3x + 1}{x^2 - 1}$. Grado numeratore $= 1$, grado denominatore $= 2$: $n < m$.

Asintoto orizzontale: $y = 0$.

---

**Esempio 6 — Asintoto obliquo**

$f(x) = \dfrac{x^2 - 1}{x + 2}$. Come derivato sopra, asintoto obliquo: $y = x - 2$.

Asintoto verticale: $x = -2$.

---

**Esempio 7 — Analisi completa**

$f(x) = \dfrac{x^2 - 4}{x - 1}$.

Dominio: $x \neq 1$.

Numeratore $= (x-2)(x+2)$: zeri in $x = 2$ e $x = -2$.

Asintoto verticale: $x = 1$ (denominatore zero, numeratore $\neq 0$).

Grado: $n = 2 = m + 1$ → asintoto obliquo. Divisione: $x^2 - 4 = (x-1)(x+1) + (-3)$, quindi $f(x) = x + 1 - \dfrac{3}{x-1}$. Asintoto obliquo: $y = x + 1$.

## Grafico

```plot
{
  "title": "Polinomio di grado 3: p(x) = x³ − 3x e di grado 4: q(x) = x⁴ − 4x²",
  "fn": "x*x*x - 3*x",
  "fn2": "x*x*x*x - 4*x*x",
  "domain": [-2.5, 2.5],
  "yDomain": [-5, 5],
  "label1": "p(x) = x³ − 3x",
  "label2": "q(x) = x⁴ − 4x²"
}
```

## Elemento interattivo

```slider
{
  "title": "Polinomio cubico: effetto del coefficiente a su f(x) = a·x³ − 3x",
  "fn": "a * x * x * x - 3 * x",
  "domain": [-3, 3],
  "yDomain": [-8, 8],
  "pname": "a",
  "pmin": -2,
  "pmax": 2,
  "pdefault": 1,
  "pstep": 0.1,
  "plabel": "Coefficiente a",
  "label1": "f(x) = a·x³ − 3x"
}
```

## Errori comuni

**Errore 1 — Credere che un polinomio di grado $n$ abbia sempre $n$ radici reali.**
Il teorema fondamentale garantisce $n$ radici nel campo complesso. Reali, possono essere di meno: $x^2 + 1 = 0$ non ha soluzioni reali. Il numero massimo di radici reali è $n$.

**Errore 2 — Non controllare se c'è un buco o un asintoto verticale.**
Quando il denominatore si annulla, bisogna sempre verificare se il numeratore si annulla anch'esso. Se sì, si semplificherà il fattore comune e ci sarà un buco; se no, c'è un asintoto verticale. Confondere i due casi porta a grafici sbagliati.

**Errore 3 — Pensare che $n < m$ implichi sempre asintoto orizzontale $y = 0$.**
Vero, ma l'asintoto $y = 0$ si ha solo se il grado del numeratore è strettamente minore del grado del denominatore. Se i gradi sono uguali, l'asintoto è il rapporto dei coefficienti direttori.

**Errore 4 — Confondere molteplicità pari e dispari nel grafico.**
Molteplicità pari → il grafico tocca l'asse e rimbalza (non attraversa). Molteplicità dispari → attraversa. Un grafico in cui si "rimbalza" indica radice di molteplicità pari.

**Errore 5 — Omettere le condizioni di dominio dopo la semplificazione.**
Se si semplifica $\dfrac{(x-2)(x+1)}{x-2} = x + 1$, il risultato non vale in $x = 2$. Il dominio originale va sempre rispettato.

**Errore 6 — Cercare asintoti obliqui quando $n \neq m+1$.**
Un asintoto obliquo esiste solo quando il grado del numeratore è esattamente uno in più del grado del denominatore. Se $n > m+1$, non c'è asintoto obliquo (c'è un asintoto curvilineo).

## Applicazioni reali

**Fisica — Legge di gravitazione.** La forza gravitazionale $F = G\dfrac{m_1 m_2}{r^2}$ è una funzione razionale della distanza $r$. L'asintoto verticale in $r = 0$ descrive il fatto che la forza diverge (cresce illimitatamente) a distanza nulla, e l'asintoto orizzontale $F \to 0$ per $r \to +\infty$ descrive che la forza diventa trascurabile a grande distanza.

**Ingegneria — Resistenza di cavi e travi.** La deflessione massima di una trave uniformemente caricata è un polinomio di quarto grado nella coordinata spaziale. I punti di zero (dove la trave non si piega) si trovano risolvendo $p(x) = 0$, e la loro molteplicità indica se la trave tocca o attraversa la posizione di riposo.

**Informatica — Analisi degli algoritmi.** La complessità computazionale di molti algoritmi è espressa da polinomi: un algoritmo "cubico" ha costo $O(n^3)$, uno "quadratico" $O(n^2)$. Per input grandi, il termine dominante (grado maggiore) determina quale algoritmo è più efficiente.

## Riepilogo tabellare

| Concetto | Dettagli |
| --- | --- |
| Polinomio grado $n$ | $p(x) = a_n x^n + \cdots + a_0$, $a_n \neq 0$ |
| Dominio | $\mathbb{R}$ (sempre) |
| Radici reali | Al più $n$ (esattamente $n$ in $\mathbb{C}$) |
| Comportamento: grado pari, $a_n > 0$ | $p(x) \to +\infty$ per $x \to \pm\infty$ |
| Comportamento: grado dispari, $a_n > 0$ | $+\infty$ per $x\to+\infty$, $-\infty$ per $x\to-\infty$ |
| Molteplicità pari → | grafico tocca e rimbalza sull'asse $x$ |
| Molteplicità dispari → | grafico attraversa l'asse $x$ |
| Asintoto verticale $x = a$ | $q(a) = 0$, $p(a) \neq 0$ |
| Asintoto orizzontale | $n < m$: $y=0$; $n=m$: $y = a_n/b_m$ |
| Asintoto obliquo | Solo se $n = m + 1$ |

## Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Comportamento agli estremi</summary>

Per $p(x) = -2x^4 + x^3 - 5$, descrivere il comportamento per $x \to +\infty$ e $x \to -\infty$.

**Soluzione:**

Termine dominante: $-2x^4$ (grado pari, $a_n = -2 < 0$).

Per $x \to +\infty$: $p(x) \to -\infty$.

Per $x \to -\infty$: $p(x) \to -\infty$.

La parabola (di grado 4) "scende da entrambe le parti".

</details>

<details>
<summary>Esercizio 2 — Molteplicità e grafico</summary>

Il polinomio $p(x) = x^2(x-1)(x+2)^3$ ha grado 6. Analizzare le radici e il comportamento del grafico in ognuna.

**Soluzione:**

- $x = 0$: molteplicità 2 (pari) → il grafico tocca e rimbalza.
- $x = 1$: molteplicità 1 (dispari) → il grafico attraversa.
- $x = -2$: molteplicità 3 (dispari) → il grafico attraversa (con punto di flesso).

Coefficiente direttore: $1 > 0$, grado pari → $p(x) \to +\infty$ per $x \to \pm\infty$.

</details>

<details>
<summary>Esercizio 3 — Asintoti di una funzione razionale</summary>

Trovare tutti gli asintoti di $f(x) = \dfrac{3x^2 - 1}{x^2 - 4}$.

**Soluzione:**

Denominatore: $(x-2)(x+2) = 0 \implies x = \pm 2$.

In $x = 2$: numeratore $= 12 - 1 = 11 \neq 0$ → asintoto verticale $x = 2$.

In $x = -2$: numeratore $= 12 - 1 = 11 \neq 0$ → asintoto verticale $x = -2$.

Gradi uguali ($n = m = 2$): asintoto orizzontale $y = 3/1 = 3$.

</details>

<details>
<summary>Esercizio 4 — Buco nel grafico</summary>

Analizzare $f(x) = \dfrac{x^2 - x - 6}{x - 3}$.

**Soluzione:**

Numeratore: $x^2 - x - 6 = (x-3)(x+2)$.

Semplificazione: $f(x) = \dfrac{(x-3)(x+2)}{x-3} = x + 2$, per $x \neq 3$.

In $x = 3$: c'è un **buco** nel grafico (discontinuità eliminabile), non un asintoto.

Il grafico è la retta $y = x + 2$ con un buco in $(3, 5)$.

</details>

<details>
<summary>Esercizio 5 — Asintoto obliquo</summary>

Trovare l'asintoto obliquo di $f(x) = \dfrac{2x^2 + x - 1}{x - 1}$.

**Soluzione:**

Divisione: $2x^2 + x - 1 = (x - 1)(2x + 3) + 2$.

$f(x) = 2x + 3 + \dfrac{2}{x-1}$

Per $x \to \pm\infty$, $\dfrac{2}{x-1} \to 0$.

Asintoto obliquo: $y = 2x + 3$. Asintoto verticale: $x = 1$.

</details>

<details>
<summary>Esercizio 6 — Analisi completa</summary>

Analizzare $f(x) = \dfrac{x^2}{x^2 - 1}$: dominio, asintoti, intersezioni.

**Soluzione:**

Dominio: $x \neq \pm 1$.

Asintoti verticali: $x = 1$ e $x = -1$.

Gradi uguali: asintoto orizzontale $y = 1$.

Intersezione con l'asse $x$: $x^2 = 0 \implies x = 0$. Punto: $(0, 0)$.

Intersezione con l'asse $y$: $f(0) = 0$. Stessa cosa: $(0, 0)$.

</details>

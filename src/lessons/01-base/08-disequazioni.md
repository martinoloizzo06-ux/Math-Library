---
id: base-08-disequazioni
subject: base
topic_it: Algebra e numeri
topic_en: Algebra and numbers
title_it: Disequazioni e sistemi di disequazioni
title_en: Inequalities and systems of inequalities
level: green
order: 8
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 4 — Disequazioni"
---

## 1. Intuizione e motivazione

Un'azienda produce oggetti a un costo di €5 l'uno, più un costo fisso di €200. Vende ogni oggetto a €12. Quante unità deve produrre per guadagnare almeno €100?

$\text{Profitto} \geq 100 \implies 12q - (5q + 200) \geq 100 \implies 7q \geq 300 \implies q \geq 43$ unità.

Questa è una disequazione. La differenza dall'equazione è sottile ma profonda: invece di cercare **un** valore che rende vera un'uguaglianza, cerchi **un insieme** di valori che rendono vera una disuguaglianza. La risposta è spesso un intervallo o un'unione di intervalli.

Le disequazioni sono ovunque nella vita reale: norme tecniche ("la pressione non deve superare X bar"), limiti di velocità ("$v \leq 130$ km/h"), margini di profitto ("i ricavi devono essere almeno il 20% in più dei costi"), condizioni di stabilità in fisica e ingegneria.

---

## 2. Prerequisiti

- Conoscere la retta numerica e gli intervalli
- Saper risolvere equazioni di primo e secondo grado
- Saper fattorizzare polinomi
- Conoscere le proprietà delle disuguaglianze numeriche

---

## 3. Teoria passo-passo

### Definizione e notazione

Una **disequazione** è una disuguaglianza che contiene un'incognita $x$. I simboli usati sono: $<$, $>$, $\leq$, $\geq$.

L'**insieme soluzione** $S$ è l'insieme di tutti i valori di $x$ per cui la disuguaglianza è vera.

### Principi di equivalenza per disequazioni

Le stesse regole delle equazioni, con un'eccezione cruciale:

**Principio additivo:** addizionare o sottrarre la stessa quantità a entrambi i membri **non cambia il verso** della disuguaglianza.
$$a > b \iff a + c > b + c$$

**Principio moltiplicativo:**
- Moltiplicare per un numero **positivo** lascia il verso invariato: $a > b \iff ka > kb$ ($k > 0$)
- Moltiplicare per un numero **negativo inverte il verso**: $a > b \iff ka < kb$ ($k < 0$)

> **Regola d'oro:** moltiplicare (o dividere) per un numero negativo **rovescia** la disuguaglianza.

### Disequazioni di primo grado

Si riducono alla forma $ax + b > 0$ (o $<$, $\leq$, $\geq$). La soluzione è un semiretta (o tutto $\mathbb{R}$, o $\emptyset$).

### Disequazioni di secondo grado

Per $ax^2 + bx + c > 0$ (o $< 0$):

1. Trovare le radici $x_1 \leq x_2$ dell'equazione $ax^2 + bx + c = 0$ (con $\Delta \geq 0$)
2. La parabola $y = ax^2 + bx + c$ è:
   - Sopra l'asse $x$ (positiva) **fuori** dalle radici se $a > 0$, **tra** le radici se $a < 0$
   - Sotto l'asse $x$ (negativa) all'opposto

**Schema di segno (con $a > 0$ e $\Delta > 0$):**

$$\begin{array}{c|ccccc} x & & x_1 & & x_2 & \\ \hline ax^2+bx+c & + & 0 & - & 0 & + \end{array}$$

**Regola mnemonica:** "il trinomio concorda con $a$ fuori delle radici."

### Disequazioni fratte

Una disequazione del tipo $\dfrac{N(x)}{D(x)} > 0$ si risolve studiando il **segno del rapporto**:
- Il rapporto è positivo quando numeratore e denominatore hanno lo **stesso segno**
- Il rapporto è negativo quando hanno **segno opposto**
- Il denominatore deve essere $\neq 0$ (condizione di esistenza)

### Sistemi di disequazioni

Un **sistema di disequazioni** si risolve trovando l'**intersezione** degli insiemi soluzione di ogni singola disequazione (la soluzione deve soddisfare **tutte** le disequazioni contemporaneamente).

---

## 4. Derivazione commentata: studio del segno del trinomio

Determiniamo il segno di $f(x) = x^2 - 3x - 4$.

**Passo 1 — Trovare le radici:**
$\Delta = 9 + 16 = 25$; $x_{1,2} = \frac{3 \pm 5}{2}$: $x_1 = -1$, $x_2 = 4$.

**Passo 2 — Costruire la tabella dei segni:**

Il coefficiente $a = 1 > 0$, quindi la parabola va verso l'alto.

$$\begin{array}{c|ccccc} x & (-\infty, -1) & -1 & (-1,4) & 4 & (4,+\infty) \\ \hline f(x) & + & 0 & - & 0 & + \end{array}$$

*Perché? La parabola con $a > 0$ è sopra l'asse $x$ fuori dalle radici (alle "code") e sotto tra le radici.*

**Passo 3 — Rispondere alle domande:**
- $f(x) > 0$ per $x \in (-\infty, -1) \cup (4, +\infty)$
- $f(x) < 0$ per $x \in (-1, 4)$
- $f(x) \geq 0$ per $x \in (-\infty, -1] \cup [4, +\infty)$ (includo le radici)

---

## 5. Esempi graduati

**Esempio 1 — Disequazione lineare semplice**

$3x - 6 > 0$

$3x > 6 \implies x > 2$. Soluzione: $S = (2, +\infty)$.

---

**Esempio 2 — Attenzione al cambio di verso**

$-2x + 4 \geq 8$

$-2x \geq 4 \implies x \leq -2$ (divido per $-2$, inverto).

$S = (-\infty, -2]$.

---

**Esempio 3 — Disequazione quadratica con $a > 0$**

$x^2 - x - 6 < 0$

Radici di $x^2 - x - 6 = 0$: $\Delta = 1 + 24 = 25$; $x_1 = -2$, $x_2 = 3$.

Con $a = 1 > 0$, il trinomio è $< 0$ tra le radici: $S = (-2, 3)$.

---

**Esempio 4 — Disequazione quadratica con $a < 0$**

$-x^2 + 4x - 3 > 0$, equivalente a $x^2 - 4x + 3 < 0$ (ho moltiplicato per $-1$, inverso il verso).

Radici di $x^2 - 4x + 3 = 0$: $x_1 = 1$, $x_2 = 3$.

Con $a = 1 > 0$: trinomio $< 0$ tra le radici. $S = (1, 3)$.

---

**Esempio 5 — Disequazione quadratica senza radici reali**

$x^2 + x + 1 > 0$

$\Delta = 1 - 4 = -3 < 0$. Non ha radici reali, il trinomio ha sempre lo stesso segno di $a = 1 > 0$: è sempre positivo.

$S = \mathbb{R}$.

---

**Esempio 6 — Disequazione fratta**

$\dfrac{x-1}{x+2} > 0$

Tabella dei segni:

| $x$ | $(-\infty,-2)$ | $-2$ | $(-2,1)$ | $1$ | $(1,+\infty)$ |
| --- | --- | --- | --- | --- | --- |
| $x-1$ | $-$ | $-$ | $-$ | $0$ | $+$ |
| $x+2$ | $-$ | $0$ | $+$ | $+$ | $+$ |
| rapporto | $+$ | n.d. | $-$ | $0$ | $+$ |

$S = (-\infty, -2) \cup (1, +\infty)$ (escludo $x = -2$ perché denominatore nullo, $x = 1$ perché rapporto $= 0$, non $> 0$).

---

**Esempio 7 — Sistema di disequazioni**

$\begin{cases} 2x - 1 > 3 \\ x^2 - 4 < 0 \end{cases}$

Prima disequazione: $2x > 4 \implies x > 2$. $S_1 = (2, +\infty)$.

Seconda disequazione: $x^2 - 4 < 0 \implies (x-2)(x+2) < 0 \implies -2 < x < 2$. $S_2 = (-2, 2)$.

Intersezione: $S_1 \cap S_2 = (2, +\infty) \cap (-2, 2) = \emptyset$.

---

**Esempio 8 — Disequazione fratta con semplificazione**

$\dfrac{x^2-4}{x-1} \geq 0$

Fattorizzo: $\dfrac{(x-2)(x+2)}{x-1} \geq 0$.

Tabella dei segni (zeri in $-2, 1, 2$):

| Intervallo | $(x+2)$ | $(x-2)$ | $(x-1)$ | rapporto |
| --- | --- | --- | --- | --- |
| $x < -2$ | $-$ | $-$ | $-$ | $-$ |
| $x = -2$ | $0$ | — | — | $0$ |
| $-2 < x < 1$ | $+$ | $-$ | $-$ | $+$ |
| $x = 1$ | — | — | $0$ | n.d. |
| $1 < x < 2$ | $+$ | $-$ | $+$ | $-$ |
| $x = 2$ | — | $0$ | — | $0$ |
| $x > 2$ | $+$ | $+$ | $+$ | $+$ |

$S = \{-2\} \cup (-2, 1) \cup \{2\} \cup (2, +\infty) = [-2, 1) \cup [2, +\infty)$.

---

## 6. Grafico — Segno del trinomio

```plot
{
  "title": "Studio del segno: f(x) = x² - x - 6",
  "fn": "x*x - x - 6",
  "fn2": "0*x",
  "domain": [-4, 5],
  "yDomain": [-8, 8],
  "label1": "f(x) = x² - x - 6",
  "label2": "y = 0"
}
```

La soluzione di $f(x) < 0$ è l'intervallo dove la parabola è **sotto** l'asse $x$: tra le radici $x = -2$ e $x = 3$.

---

## 7. Elemento interattivo — Effetto del coefficiente $a$ sul segno

```slider
{
  "title": "Trinomio ax² - x - 6: segno al variare di a",
  "fn": "a*x*x - x - 6",
  "domain": [-5, 5],
  "yDomain": [-10, 10],
  "pname": "a",
  "pmin": -2,
  "pmax": 2,
  "pdefault": 1,
  "pstep": 0.1,
  "plabel": "Coefficiente a",
  "label1": "f(x) = ax² - x - 6"
}
```

Osserva: per $a > 0$ la parabola è positiva fuori dalle radici; per $a < 0$ è negativa fuori dalle radici; per $a = 0$ diventa una retta (disequazione lineare).

---

## 8. Errori comuni

**Errore 1 — Non invertire il verso moltiplicando per un negativo**

Sbagliato: $-3x > 9 \implies x > -3$.
Corretto: $-3x > 9 \implies x < -3$ (divido per $-3$, inverso il verso).

---

**Errore 2 — Invertire il verso anche per i positivi**

Sbagliato: $2x > 6 \implies x < 3$.
Corretto: $2x > 6 \implies x > 3$ (divido per $+2$, il verso resta uguale).

---

**Errore 3 — Dimenticare che le radici vanno escluse nelle disequazioni strette**

Sbagliato: soluzione di $x^2 - 4 < 0$ è $[-2, 2]$.
Corretto: $x^2 - 4 < 0$ (strettamente minore) ha soluzione $(-2, 2)$ con parentesi tonde (estremi esclusi). Se fosse $\leq 0$ avrei $[-2, 2]$.

---

**Errore 4 — Sbagliare il segno della disequazione quadratica**

Sbagliato: per $x^2 - 4 > 0$ scrivere $S = (-2, 2)$.
Corretto: $x^2 - 4 = (x-2)(x+2) > 0$ è positivo **fuori** dalle radici (parabola con $a = 1 > 0$): $S = (-\infty, -2) \cup (2, +\infty)$.

---

**Errore 5 — Includere i punti dove il denominatore è nullo**

Sbagliato: soluzione di $\frac{x-1}{x+2} \geq 0$ include $x = -2$.
Corretto: $x = -2$ rende il denominatore nullo → non appartiene al dominio → va escluso sempre.

---

**Errore 6 — Sistema: prendere l'unione invece dell'intersezione**

Sbagliato: risolvere un sistema con "o" (unione).
Corretto: il sistema richiede che **tutte** le condizioni siano soddisfatte simultaneamente → intersezione ($\cap$). L'unione vale per i sistemi con "o" (disgiunzione).

---

## 9. Applicazioni reali

**Ingegneria — Tolleranze di produzione.** Un bullone deve avere diametro tra 9,95 mm e 10,05 mm per essere accettato. Questa è una disequazione doppia: $9{,}95 \leq d \leq 10{,}05$. Il controllo di qualità industriale si basa su sistemi di disequazioni: ogni dimensione di un pezzo meccanico ha tolleranze specificate come intervalli.

**Finanza — Gestione del rischio.** Un investitore vuole che il suo portafoglio perda al massimo il 10% in uno scenario pessimistico. Se il rendimento del portafoglio è $r(w)$ in funzione della proporzione $w$ investita in azioni, deve risolvere $r(w) \geq -0{,}10$. Il Value at Risk (VaR) è basato su disequazioni probabilistiche.

**Medicina e farmacologia.** La concentrazione di un farmaco nel sangue deve essere tra il livello minimo efficace ($C_{min}$) e il livello massimo sicuro ($C_{max}$): $C_{min} \leq C(t) \leq C_{max}$. La finestra terapeutica è definita da un sistema di due disequazioni. La posologia (dose e frequenza) è calcolata per mantenere $C(t)$ in questo intervallo.

---

## 10. Riepilogo tabellare

| Tipo | Forma | Soluzione (caso tipico) |
| --- | --- | --- |
| Lineare | $ax + b > 0$ | Semiretta (attenzione al segno di $a$) |
| Quadratica ($a > 0$, $\Delta > 0$) | $ax^2+bx+c > 0$ | $(-\infty,x_1) \cup (x_2,+\infty)$ |
| Quadratica ($a > 0$, $\Delta > 0$) | $ax^2+bx+c < 0$ | $(x_1, x_2)$ |
| Quadratica ($\Delta < 0$, $a > 0$) | $ax^2+bx+c > 0$ | $\mathbb{R}$ (sempre positivo) |
| Quadratica ($\Delta < 0$, $a > 0$) | $ax^2+bx+c < 0$ | $\emptyset$ (sempre positivo) |
| Fratta | $N/D > 0$ | Studio del segno di $N$ e $D$ |
| Sistema | più disequazioni | Intersezione delle soluzioni |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Disequazione lineare</summary>

**Testo:** Risolvi: $5 - 3x \leq 2x + 15$.

**Soluzione:**

$5 - 3x \leq 2x + 15$
$-3x - 2x \leq 15 - 5$
$-5x \leq 10$
$x \geq -2$ (ho diviso per $-5$, inverto)

$S = [-2, +\infty)$

</details>

<details>
<summary>Esercizio 2 — Disequazione quadratica</summary>

**Testo:** Risolvi: $x^2 - 7x + 12 \geq 0$.

**Soluzione:**

Radici di $x^2 - 7x + 12 = 0$: $(x-3)(x-4) = 0 \implies x_1 = 3$, $x_2 = 4$.

Con $a = 1 > 0$: il trinomio è $\geq 0$ fuori dalle radici (inclusi gli estremi).

$S = (-\infty, 3] \cup [4, +\infty)$

</details>

<details>
<summary>Esercizio 3 — Disequazione fratta</summary>

**Testo:** Risolvi: $\dfrac{2x+1}{x-3} \leq 0$.

**Soluzione:**

Zeri: numeratore $= 0$ per $x = -\frac{1}{2}$; denominatore $= 0$ per $x = 3$ (escluso dal dominio).

Tabella dei segni:

| $x$ | $x < -\frac{1}{2}$ | $x = -\frac{1}{2}$ | $-\frac{1}{2} < x < 3$ | $x = 3$ | $x > 3$ |
| --- | --- | --- | --- | --- | --- |
| $2x+1$ | $-$ | $0$ | $+$ | $+$ | $+$ |
| $x-3$ | $-$ | $-$ | $-$ | $0$ | $+$ |
| rapporto | $+$ | $0$ | $-$ | n.d. | $+$ |

Il rapporto è $\leq 0$ quando è negativo o zero: $x = -\frac{1}{2}$ o $-\frac{1}{2} < x < 3$.

$S = \left[-\frac{1}{2}, 3\right)$

</details>

<details>
<summary>Esercizio 4 — Sistema di disequazioni</summary>

**Testo:** Risolvi il sistema: $\begin{cases} x^2 - 9 < 0 \\ 2x + 1 > 0 \end{cases}$

**Soluzione:**

Prima: $x^2 - 9 < 0 \implies (x-3)(x+3) < 0 \implies S_1 = (-3, 3)$.

Seconda: $2x + 1 > 0 \implies x > -\frac{1}{2} \implies S_2 = (-\frac{1}{2}, +\infty)$.

Intersezione: $S = S_1 \cap S_2 = (-\frac{1}{2}, 3)$

</details>

<details>
<summary>Esercizio 5 — Disequazione con $\Delta < 0$</summary>

**Testo:** Risolvi: $x^2 - 2x + 5 > 0$.

**Soluzione:**

$\Delta = 4 - 20 = -16 < 0$. Nessuna radice reale. Con $a = 1 > 0$, il trinomio è sempre positivo.

$S = \mathbb{R}$

</details>

<details>
<summary>Esercizio 6 — Disequazione fratta con polinomio</summary>

**Testo:** Risolvi: $\dfrac{x^2 - x - 6}{x + 1} > 0$.

**Soluzione:**

Fattorizzo il numeratore: $x^2 - x - 6 = (x-3)(x+2)$.

Zeri: $x = 3$, $x = -2$ (numeratore), $x = -1$ (denominatore, escluso).

Tabella dei segni (da sinistra a destra, oltre $-2, -1, 3$):

| Intervallo | $(x+2)$ | $(x-3)$ | $(x+1)$ | rapporto |
| --- | --- | --- | --- | --- |
| $x < -2$ | $-$ | $-$ | $-$ | $-$ |
| $-2 < x < -1$ | $+$ | $-$ | $-$ | $+$ |
| $-1 < x < 3$ | $+$ | $-$ | $+$ | $-$ |
| $x > 3$ | $+$ | $+$ | $+$ | $+$ |

$S = (-2, -1) \cup (3, +\infty)$

</details>

<details>
<summary>Esercizio 7 — Applicazione economica</summary>

**Testo:** Il profitto è $\pi(q) = -2q^2 + 20q - 32$. Per quali quantità $q \geq 0$ il profitto è positivo?

**Soluzione:**

$-2q^2 + 20q - 32 > 0 \implies q^2 - 10q + 16 < 0$.

Radici: $\Delta = 100 - 64 = 36$; $q_{1,2} = \frac{10 \pm 6}{2}$: $q_1 = 2$, $q_2 = 8$.

Con $a = 1 > 0$: trinomio $< 0$ per $q \in (2, 8)$.

Considerando $q \geq 0$: $S = (2, 8)$ unità.

</details>

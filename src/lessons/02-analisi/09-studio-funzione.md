---
id: analisi-09-studio-funzione
subject: analisi
topic_it: Calcolo differenziale (una variabile)
topic_en: Differential calculus (one variable)
title_it: Studio di funzione completo
title_en: Complete function analysis
level: blue
order: 9
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 4 — Applicazioni della derivata"
---

## 1. Intuizione e motivazione

Immagina di dover descrivere a qualcuno il percorso di una montagna senza mostrargliela: dove sale, dove scende, dove ci sono vette e avvallamenti, dove la pendenza cambia bruscamente. Lo studio di funzione è esattamente questo: un metodo sistematico per estrarre dalla formula di $f(x)$ tutte le informazioni geometriche rilevanti e tracciare un grafico qualitativo accurato.

Prima dell'analisi, il grafico di una funzione complicata è una scatola nera. Dopo lo studio di funzione, conosciamo: dove la funzione è definita, dove si annulla, come si comporta all'infinito, dove cresce o decresce, dove ha picchi o valli, dove cambia curvatura. Il risultato è un profilo completo, costruito passo per passo con strumenti analitici precisi.

Questo schema si applica in fisica (studio del potenziale, della traiettoria), in economia (ottimizzazione dei profitti) e in ingegneria (analisi della risposta di un sistema). Imparare a eseguirlo in modo metodico è una competenza fondamentale.

---

## 2. Prerequisiti

- Dominio di funzioni elementari: $\sqrt{x}$, $\ln x$, $\dfrac{1}{x}$, $\arcsin x$
- Calcolo dei limiti, forme indeterminate, asintoti
- Derivate fondamentali e regole (prodotto, quoziente, catena)
- Criterio della derivata prima per massimi e minimi
- Criterio della derivata seconda per la concavità

---

## 3. Teoria passo-passo

Lo studio di funzione segue uno schema in **8 passi** che vanno eseguiti nell'ordine indicato.

### Passo 1 — Dominio

Trovare l'insieme $D \subseteq \mathbb{R}$ in cui $f(x)$ è ben definita. Le restrizioni tipiche:

- Denominatore $\neq 0$: se $f(x) = p(x)/q(x)$, imporre $q(x) \neq 0$
- Argomento del logaritmo $> 0$: se compare $\ln(g(x))$, imporre $g(x) > 0$
- Argomento della radice $\geq 0$: se compare $\sqrt{g(x)}$, imporre $g(x) \geq 0$
- Argomento di $\arcsin$ o $\arccos$: $g(x) \in [-1, 1]$

### Passo 2 — Simmetrie e periodicità

- **Funzione pari:** $f(-x) = f(x)$ — grafico simmetrico rispetto all'asse $y$
- **Funzione dispari:** $f(-x) = -f(x)$ — grafico simmetrico rispetto all'origine
- **Funzione periodica:** $f(x+T) = f(x)$ — basta studiare un periodo

### Passo 3 — Segno e zeri

Trovare dove $f(x) = 0$ (zeri della funzione) e dove $f(x) > 0$ o $f(x) < 0$.

Per funzioni razionali, si studia il segno di numeratore e denominatore separatamente, poi si combina con la regola dei segni.

### Passo 4 — Limiti agli estremi e asintoti

Calcolare i limiti per $x \to \pm\infty$ e nei punti di frontiera del dominio (dove la funzione potrebbe avere discontinuità).

**Asintoto orizzontale:** se $\lim_{x \to +\infty} f(x) = L$ (o $-\infty$), la retta $y = L$ è asintoto orizzontale destro.

**Asintoto verticale:** se $\lim_{x \to x_0^{\pm}} f(x) = \pm\infty$, la retta $x = x_0$ è asintoto verticale.

**Asintoto obliquo:** se $\lim_{x \to \pm\infty} \dfrac{f(x)}{x} = m \neq 0$ e $\lim_{x \to \pm\infty} [f(x) - mx] = q$, allora $y = mx + q$ è asintoto obliquo.

### Passo 5 — Derivata prima: monotonia e punti critici

Calcolare $f'(x)$ e risolvere:

$$f'(x) = 0 \quad \text{(punti critici stazionari)}$$
$$f'(x) \text{ non esiste} \quad \text{(punti critici non stazionari)}$$

**Criterio della derivata prima:**

| Segno di $f'$ | Comportamento di $f$ |
| --- | --- |
| $f'(x) > 0$ su $(a,b)$ | $f$ crescente su $(a,b)$ |
| $f'(x) < 0$ su $(a,b)$ | $f$ decrescente su $(a,b)$ |
| $f'$ cambia $+\to-$ in $c$ | massimo locale in $c$ |
| $f'$ cambia $-\to+$ in $c$ | minimo locale in $c$ |
| $f'$ non cambia segno in $c$ | né massimo né minimo (flesso a tangente orizzontale) |

### Passo 6 — Derivata seconda: concavità e flessi

Calcolare $f''(x)$ e risolvere $f''(x) = 0$.

**Criterio della derivata seconda per la concavità:**

| Segno di $f''$ | Concavità |
| --- | --- |
| $f''(x) > 0$ | concava verso l'alto (convessa) |
| $f''(x) < 0$ | concava verso il basso (concava) |

**Punti di flesso:** punti dove $f''$ cambia segno. In un flesso, la concavità della curva si inverte.

**Criterio della derivata seconda per i punti critici:** se $f'(c) = 0$:
- $f''(c) > 0 \Rightarrow$ minimo locale
- $f''(c) < 0 \Rightarrow$ massimo locale
- $f''(c) = 0 \Rightarrow$ test inconcludente (serve analisi di ordine superiore)

### Passo 7 — Schema riassuntivo

Raccogliere tutte le informazioni in una tabella dei segni di $f'$ e $f''$ sull'asse reale, indicando: intervalli di crescita/decrescita, concavità, massimi, minimi, flessi.

### Passo 8 — Grafico qualitativo

Tracciare il grafico usando tutte le informazioni raccolte. I punti da riportare esplicitamente: intersezioni con gli assi, massimi e minimi locali, punti di flesso, asintoti.

---

## 4. Derivazioni commentate

### Esempio completo: $f(x) = \dfrac{x^2 - 1}{x^2 - 4}$

Seguiamo tutti e 8 i passi.

**Passo 1 — Dominio:**

$x^2 - 4 = 0 \implies x = \pm 2$. Dominio: $D = \mathbb{R} \setminus \{-2, 2\}$.

**Passo 2 — Simmetrie:**

$f(-x) = \dfrac{(-x)^2 - 1}{(-x)^2 - 4} = \dfrac{x^2-1}{x^2-4} = f(x)$. La funzione è **pari**: grafico simmetrico rispetto all'asse $y$.

**Passo 3 — Zeri e segno:**

$f(x) = 0 \iff x^2 - 1 = 0 \iff x = \pm 1$.

Per il segno, numeriamo i fattori su una retta reale ($-2, -1, 1, 2$ sono i punti critici):

- In $(-\infty, -2)$: $(x^2-1) > 0$, $(x^2-4) > 0 \Rightarrow f > 0$
- In $(-2, -1)$: $(x^2-1) > 0$, $(x^2-4) < 0 \Rightarrow f < 0$
- In $(-1, 1)$: $(x^2-1) < 0$, $(x^2-4) < 0 \Rightarrow f > 0$
- In $(1, 2)$: $(x^2-1) > 0$, $(x^2-4) < 0 \Rightarrow f < 0$
- In $(2, +\infty)$: $(x^2-1) > 0$, $(x^2-4) > 0 \Rightarrow f > 0$

**Passo 4 — Limiti e asintoti:**

$$\lim_{x \to \pm\infty} \frac{x^2-1}{x^2-4} = \lim_{x\to\pm\infty}\frac{1-1/x^2}{1-4/x^2} = 1$$

Asintoto orizzontale: $y = 1$.

$$\lim_{x \to 2^{\pm}} f(x) = \pm\infty, \qquad \lim_{x \to -2^{\pm}} f(x) = \mp\infty$$

Asintoti verticali: $x = 2$ e $x = -2$.

**Passo 5 — Derivata prima:**

$$f'(x) = \frac{2x(x^2-4) - (x^2-1)\cdot 2x}{(x^2-4)^2} = \frac{2x[(x^2-4)-(x^2-1)]}{(x^2-4)^2} = \frac{2x(-3)}{(x^2-4)^2} = \frac{-6x}{(x^2-4)^2}$$

$f'(x) = 0 \iff x = 0$. 

Per $x < 0$: $f'(x) > 0$ (crescente). Per $x > 0$: $f'(x) < 0$ (decrescente).

$x = 0$ è un **massimo locale** con $f(0) = \dfrac{-1}{-4} = \dfrac{1}{4}$.

**Passo 6 — Derivata seconda:**

$$f''(x) = \frac{-6(x^2-4)^2 - (-6x) \cdot 2(x^2-4) \cdot 2x}{(x^2-4)^4}$$

Raccogliendo $(x^2-4)$ al numeratore:

$$f''(x) = \frac{-6(x^2-4) + 24x^2}{(x^2-4)^3} = \frac{18x^2 + 24}{(x^2-4)^3} = \frac{6(3x^2+4)}{(x^2-4)^3}$$

Il numeratore $6(3x^2+4) > 0$ sempre. Il segno di $f''$ dipende solo da $(x^2-4)^3$:

- Per $\lvert x \rvert > 2$: $(x^2-4)^3 > 0 \Rightarrow f'' > 0$ (concava verso l'alto)
- Per $\lvert x \rvert < 2$: $(x^2-4)^3 < 0 \Rightarrow f'' < 0$ (concava verso il basso)

Non ci sono flessi nel dominio (i punti $x = \pm 2$ non appartengono al dominio).

---

## 5. Esempi graduati

**Esempio 1 — Funzione polinomiale**

$f(x) = x^3 - 3x + 2$.

Dominio: $\mathbb{R}$. Nessuna simmetria. Zeri: $f(1) = 0$, $f(-2) = 0$ (con molteplicità 2).

$f'(x) = 3x^2 - 3 = 3(x-1)(x+1)$. Punti critici: $x = \pm 1$.

- Massimo locale in $x = -1$: $f(-1) = -1+3+2 = 4$
- Minimo locale in $x = 1$: $f(1) = 1-3+2 = 0$

$f''(x) = 6x$. Flesso in $x = 0$: $f(0) = 2$.

---

**Esempio 2 — Funzione con asintoto obliquo**

$f(x) = \dfrac{x^2}{x-1}$ su $D = \mathbb{R} \setminus \{1\}$.

Asintoto verticale: $x = 1$.

Per $x \to \pm\infty$: $\dfrac{f(x)}{x} = \dfrac{x}{x-1} \to 1$, quindi $m = 1$.

$\lim_{x\to\pm\infty}[f(x) - x] = \lim \dfrac{x^2 - x(x-1)}{x-1} = \lim \dfrac{x}{x-1} = 1$, quindi $q = 1$.

Asintoto obliquo: $y = x + 1$.

$f'(x) = \dfrac{2x(x-1)-x^2}{(x-1)^2} = \dfrac{x^2-2x}{(x-1)^2} = \dfrac{x(x-2)}{(x-1)^2}$.

Punti critici: $x = 0$ (massimo locale, $f(0) = 0$) e $x = 2$ (minimo locale, $f(2) = 4$).

---

**Esempio 3 — Funzione con logaritmo**

$f(x) = x \ln x$ su $D = (0, +\infty)$.

$\lim_{x \to 0^+} x\ln x = 0$ (limite notevole). $\lim_{x \to +\infty} x \ln x = +\infty$.

$f'(x) = \ln x + x \cdot \dfrac{1}{x} = \ln x + 1$. $f'(x) = 0 \iff \ln x = -1 \iff x = e^{-1} = 1/e$.

Minimo assoluto in $x = 1/e$: $f(1/e) = \dfrac{1}{e}\cdot(-1) = -\dfrac{1}{e}$.

$f''(x) = 1/x > 0$ per ogni $x > 0$: $f$ è sempre concava verso l'alto (nessun flesso).

---

**Esempio 4 — Funzione con valore assoluto**

$f(x) = x^2 e^{-x}$.

$f \geq 0$ per ogni $x$. Zero in $x = 0$. $\lim_{x\to-\infty} x^2 e^{-x} = +\infty$. $\lim_{x\to+\infty} x^2 e^{-x} = 0$ (esponenziale batte polinomio).

$f'(x) = 2xe^{-x} - x^2 e^{-x} = xe^{-x}(2-x)$. Zeri: $x = 0$ e $x = 2$.

Segno di $f'$: positivo per $x \in (0,2)$, negativo altrove (escluso $x < 0$ dove è negativo).

Massimo locale in $x = 2$: $f(2) = 4e^{-2} \approx 0.541$. Minimo locale (e zero) in $x = 0$.

---

**Esempio 5 — Funzione trigonometrica**

$f(x) = \sin x - x$ su $\mathbb{R}$.

$f'(x) = \cos x - 1 \leq 0$ per ogni $x$, uguale a zero solo in $x = 2k\pi$. La funzione è **debolmente decrescente**.

$f''(x) = -\sin x$. Flessi in $x = k\pi$ (dove $f'' = 0$ e cambia segno).

---

**Esempio 6 — Studio completo di una funzione razionale fratta**

$f(x) = \dfrac{x}{x^2+1}$.

Dominio: $\mathbb{R}$ (denominatore sempre $> 0$). Funzione dispari. Zero in $x = 0$.

$\lim_{x\to\pm\infty} f(x) = 0$: asintoto orizzontale $y = 0$.

$f'(x) = \dfrac{(x^2+1) - x \cdot 2x}{(x^2+1)^2} = \dfrac{1-x^2}{(x^2+1)^2}$.

$f'(x) = 0 \iff x = \pm 1$. Massimo in $x=1$: $f(1) = 1/2$. Minimo in $x=-1$: $f(-1) = -1/2$.

$f''(x) = \dfrac{-2x(x^2+1)^2 - (1-x^2)\cdot 2(x^2+1)\cdot 2x}{(x^2+1)^4}$. Semplificando: $f''(x) = \dfrac{2x(x^2-3)}{(x^2+1)^3}$.

$f''(x) = 0 \iff x = 0, \pm\sqrt{3}$. Tre flessi.

---

## 6. Grafico

```plot
{
  "title": "f(x) = x³ − 3x e f'(x) = 3x² − 3: massimi, minimi, monotonia",
  "fn": "x*x*x - 3*x",
  "fn2": "3*x*x - 3",
  "domain": [-2.5, 2.5],
  "yDomain": [-5, 5],
  "label1": "f(x) = x³ − 3x",
  "label2": "f'(x) = 3x² − 3"
}
```

Dove $f'(x) > 0$ la funzione cresce, dove $f'(x) < 0$ decresce. Il massimo locale è in $x = -1$ ($f = 2$), il minimo in $x = 1$ ($f = -2$). I due zeri di $f'$ corrispondono ai due estremi locali di $f$.

---

## 7. Elemento interattivo

```slider
{
  "title": "Studio di f(x) = x³ − a·x: punti critici al variare di a",
  "fn": "x*x*x - a*x",
  "fn2": "3*x*x - a",
  "domain": [-3, 3],
  "yDomain": [-6, 6],
  "pname": "a",
  "pmin": 0,
  "pmax": 6,
  "pdefault": 3,
  "pstep": 0.5,
  "plabel": "Parametro a",
  "label1": "f(x) = x³ − a·x",
  "label2": "f'(x) = 3x² − a"
}
```

Varia il parametro $a$ e osserva: per $a = 0$ la funzione $f(x) = x^3$ non ha punti critici. Per $a > 0$ compaiono un massimo e un minimo locali, che si allontanano dall'origine all'aumentare di $a$. La derivata $f'(x) = 3x^2 - a$ si annulla in $x = \pm\sqrt{a/3}$.

---

## 8. Errori comuni

**Errore 1 — Dimenticare di verificare il segno di $f'$ dopo aver trovato i punti critici**

Trovare che $f'(c) = 0$ non basta: bisogna verificare se $f'$ cambia segno in $c$. Se non cambia segno, $c$ è un **flesso a tangente orizzontale**, non un massimo o minimo.

Esempio: $f(x) = x^3$ ha $f'(0) = 0$, ma $f'(x) > 0$ per $x \neq 0$: $x = 0$ è un flesso, non un estremo.

---

**Errore 2 — Confondere massimo locale e massimo assoluto**

Un massimo locale è un punto più alto dei suoi vicini immediati. Il massimo assoluto è il punto più alto in tutto il dominio. Una funzione può avere molti massimi locali ma un solo massimo assoluto (o nessuno, se il dominio è illimitato e la funzione diverge).

---

**Errore 3 — Omettere i punti di non derivabilità nello studio di $f'$**

I punti in cui $f'$ non esiste (cuspidi, angoli, punti di non derivabilità) possono essere estremi locali. Ad esempio, $f(x) = \lvert x \rvert$ ha un minimo assoluto in $x = 0$ dove $f'(0)$ non esiste.

---

**Errore 4 — Sbagliare il segno dell'asintoto verticale**

Per calcolare $\lim_{x \to x_0^+} f(x)$, non basta sapere che il limite è infinito: bisogna determinare il segno ($+\infty$ o $-\infty$). Sostituire un valore di prova vicino a $x_0$ da destra e verificare il segno.

---

**Errore 5 — Cercare asintoti obliqui anche quando esiste l'asintoto orizzontale**

Se $\lim_{x\to\pm\infty} f(x) = L$ (finito), non può esserci un asintoto obliquo in quella direzione. L'asintoto obliquo esiste solo se $f(x)/x \to m \neq 0$ per $x \to \pm\infty$.

---

**Errore 6 — Non studiare separatamente $+\infty$ e $-\infty$**

Una funzione può avere asintoti diversi a destra e a sinistra. Ad esempio, $f(x) = \arctan x$ ha $\lim_{x\to+\infty} f(x) = \pi/2$ e $\lim_{x\to-\infty} f(x) = -\pi/2$: due asintoti orizzontali distinti.

---

**Errore 7 — Dimenticare di segnare i flessi nel grafico**

I flessi sono punti dove la concavità cambia. Non segnalarli porta a grafici qualitativamente errati (con la curva che "gira" nel verso sbagliato). Si trovano imponendo $f''(x) = 0$ e verificando che il segno di $f''$ cambi.

---

## 9. Applicazioni reali

**Ottimizzazione in economia.** L'imprenditore che vuole massimizzare il profitto $P(q) = R(q) - C(q)$ applica esattamente lo studio di funzione: trova i punti critici di $P$ imponendo $P'(q) = 0$ (ricavo marginale = costo marginale), verifica che siano massimi con $P''(q) < 0$, e controlla i valori agli estremi del dominio (livelli di produzione ammissibili). Lo studio completo rivela anche i punti di pareggio ($P(q) = 0$), i livelli di produzione con rendimento marginale decrescente (flessi di $C(q)$), e il comportamento a lungo termine.

**Fisica: potenziale e traiettorie.** In meccanica, il potenziale energetico $U(x)$ di una particella determina le posizioni di equilibrio (minimi di $U$), le barriere di potenziale (massimi di $U$) e i punti di flesso (dove la "forza di richiamo" $F = -U'(x)$ ha derivata nulla). Lo studio di funzione di $U(x)$ permette di classificare gli equilibri come stabili (minimi) o instabili (massimi) senza simulare la traiettoria.

**Ingegneria: risposta di sistemi.** La risposta in frequenza di un filtro elettronico, o la curva di resistenza di un materiale sotto carico, sono funzioni che si analizzano con lo studio di funzione per trovare frequenze di risonanza (massimi), punti di cedimento (massimi con derivata che cambia segno bruscamente) e comportamenti asintotici (guadagno per frequenze molto basse o molto alte). L'analisi sistematica evita di ricorrere a simulazioni numeriche costose.

---

## 10. Riepilogo tabellare

| Passo | Strumento | Informazione ottenuta |
| --- | --- | --- |
| 1. Dominio | Algebra | Dove $f$ è definita |
| 2. Simmetrie | Verifica $f(-x)$ | Parità, disparità, periodicità |
| 3. Zeri/segno | $f(x) = 0$ | Intersezioni con asse $x$ |
| 4. Limiti/asintoti | Calcolo limiti | Asintoti orizzontali, verticali, obliqui |
| 5. $f'(x)$ | Derivata prima | Crescenza, decrescenza, max/min locali |
| 6. $f''(x)$ | Derivata seconda | Concavità, punti di flesso |
| 7. Schema | Tabella segni | Visione d'insieme |
| 8. Grafico | Sintesi | Grafico qualitativo completo |

| Criterio | Condizione | Conclusione |
| --- | --- | --- |
| Massimo locale | $f'(c) = 0$, $f'$ cambia $+\to-$ | Massimo locale in $c$ |
| Minimo locale | $f'(c) = 0$, $f'$ cambia $-\to+$ | Minimo locale in $c$ |
| Concavità su | $f''(x) > 0$ | Curva concava verso l'alto |
| Concavità giù | $f''(x) < 0$ | Curva concava verso il basso |
| Flesso | $f''$ cambia segno in $c$ | Punto di flesso in $c$ |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Studio di una funzione polinomiale</summary>

**Testo:** Studia completamente $f(x) = x^4 - 4x^3$ (dominio, monotonia, estremi, concavità, flessi, grafico).

**Soluzione:**

Dominio: $\mathbb{R}$. Zero in $x=0$ (quarto ordine) e $x=4$.

$f'(x) = 4x^3 - 12x^2 = 4x^2(x-3)$. Punti critici: $x=0$ (non estremo, $f'$ non cambia segno) e $x=3$ (minimo locale, $f'$ cambia $-\to+$). $f(3) = 81 - 108 = -27$.

$f''(x) = 12x^2 - 24x = 12x(x-2)$. Flessi in $x=0$ (ma qui $f'=0$: flesso a tangente orizzontale) e $x=2$ ($f(2) = 16-32 = -16$).

</details>

<details>
<summary>Esercizio 2 — Funzione con asintoto verticale</summary>

**Testo:** Studia $f(x) = \dfrac{x^2}{x-1}$ e trovane gli asintoti e i punti critici.

**Soluzione:**

Dominio: $\mathbb{R}\setminus\{1\}$. Zero in $x=0$.

Asintoto verticale $x=1$. Asintoto obliquo: $m=1$, $q=1$, quindi $y = x+1$.

$f'(x) = \dfrac{x(x-2)}{(x-1)^2}$. Massimo in $x=0$: $f(0)=0$. Minimo in $x=2$: $f(2)=4$.

</details>

<details>
<summary>Esercizio 3 — Funzione trascendente</summary>

**Testo:** Studia $f(x) = \dfrac{\ln x}{x}$ sul dominio $(0, +\infty)$.

**Soluzione:**

Dominio: $(0,+\infty)$. Zero in $x=1$.

$\lim_{x\to 0^+} f(x) = -\infty$ (asintoto verticale $x=0$). $\lim_{x\to+\infty} f(x) = 0$ (asintoto orizzontale $y=0$).

$f'(x) = \dfrac{1 - \ln x}{x^2}$. Zero in $x = e$: massimo assoluto $f(e) = 1/e$.

Per $x \in (0,e)$: $f' > 0$ (crescente). Per $x > e$: $f' < 0$ (decrescente).

$f''(x) = \dfrac{-3 + 2\ln x}{x^3}$. Flesso in $x = e^{3/2}$.

</details>

<details>
<summary>Esercizio 4 — Funzione con esponenziale</summary>

**Testo:** Studia $f(x) = (x^2-2)e^{-x}$.

**Soluzione:**

Dominio: $\mathbb{R}$. $\lim_{x\to-\infty}f(x) = +\infty$, $\lim_{x\to+\infty}f(x) = 0$.

$f'(x) = 2xe^{-x} - (x^2-2)e^{-x} = e^{-x}(-x^2+2x+2)$. Zeri di $-x^2+2x+2$: $x = 1 \pm \sqrt{3}$.

Massimo in $x = 1+\sqrt{3} \approx 2.73$, minimo in $x = 1-\sqrt{3} \approx -0.73$.

</details>

<details>
<summary>Esercizio 5 — Funzione dispari</summary>

**Testo:** Sfrutta la parità/disparità per semplificare lo studio di $f(x) = \dfrac{x}{x^2+1}$.

**Soluzione:**

$f(-x) = -f(x)$: funzione dispari. Basta studiare $x \geq 0$ e riflettere.

Per $x \geq 0$: $f(0) = 0$, $f$ tende a $0$ per $x\to+\infty$.

$f'(x) = \dfrac{1-x^2}{(x^2+1)^2}$. Massimo in $x=1$: $f(1) = 1/2$.

Per disparità: minimo in $x=-1$: $f(-1) = -1/2$.

</details>

<details>
<summary>Esercizio 6 — Ricerca del massimo assoluto</summary>

**Testo:** Trova il massimo assoluto di $f(x) = \sin x + \cos x$ su $[0, 2\pi]$.

**Soluzione:**

$f'(x) = \cos x - \sin x = 0 \iff \tan x = 1 \iff x = \pi/4$ o $x = 5\pi/4$ in $[0, 2\pi]$.

Valori nei punti critici e agli estremi:
- $f(0) = 0 + 1 = 1$
- $f(\pi/4) = \sqrt{2}/2 + \sqrt{2}/2 = \sqrt{2} \approx 1.41$ ← massimo assoluto
- $f(5\pi/4) = -\sqrt{2}$ ← minimo assoluto
- $f(2\pi) = 0 + 1 = 1$

</details>

<details>
<summary>Esercizio 7 — Asintoto obliquo</summary>

**Testo:** Trova gli asintoti di $f(x) = \dfrac{x^3 + 1}{x^2}$ e studia la monotonia.

**Soluzione:**

Dominio: $\mathbb{R}\setminus\{0\}$. Asintoto verticale $x=0$.

$\dfrac{f(x)}{x} = \dfrac{x^3+1}{x^3} = 1 + \dfrac{1}{x^3} \to 1$ per $x\to\pm\infty$.

$f(x) - x = \dfrac{x^3+1}{x^2} - x = \dfrac{1}{x^2} \to 0$. Asintoto obliquo: $y = x$ (in entrambe le direzioni).

$f'(x) = \dfrac{3x^2 \cdot x^2 - (x^3+1)\cdot 2x}{x^4} = \dfrac{x^3 - 2}{x^3}$. Zero in $x = \sqrt[3]{2}$: minimo locale.

</details>

<details>
<summary>Esercizio 8 — Flessi e concavità</summary>

**Testo:** Trova tutti i punti di flesso di $f(x) = x^4 - 6x^2$.

**Soluzione:**

$f'(x) = 4x^3 - 12x$. $f''(x) = 12x^2 - 12 = 12(x-1)(x+1)$.

$f''(x) = 0 \iff x = \pm 1$. Verifica cambio di segno: $f''$ cambia da $+$ a $-$ in $x=-1$, da $-$ a $+$ in $x=1$.

Flessi in $x = \pm 1$: $f(\pm 1) = 1 - 6 = -5$.

</details>

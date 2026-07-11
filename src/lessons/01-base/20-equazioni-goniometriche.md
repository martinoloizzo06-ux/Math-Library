---
id: base-20-equazioni-goniometriche
subject: base
topic_it: Trigonometria
topic_en: Trigonometry
title_it: Equazioni e disequazioni goniometriche
title_en: Trigonometric equations and inequalities
level: green
order: 20
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 7 — Equazioni goniometriche"
stato: da-rielaborare
---

## Intuizione e motivazione

Un'equazione come $x^2 = 4$ ha due soluzioni: $x = 2$ e $x = -2$. Un'equazione come $\sin x = 0{,}5$ ne ha **infinite**: $x = \pi/6$, ma anche $x = 5\pi/6$, $x = \pi/6 + 2\pi$, $x = 5\pi/6 + 2\pi$, e così via per sempre. Questo perché il seno è **periodico**: torna allo stesso valore ogni $2\pi$.

Pensa a una boa che oscilla sul mare. Se chiedi "quando la boa è a 30 cm sopra la posizione di equilibrio?", la risposta è: in infiniti istanti, uno per ogni oscillazione. Le equazioni goniometriche descrivono esattamente questo tipo di problema: trovare **tutti** gli istanti (o angoli) in cui una funzione periodica assume un dato valore.

**Dove si usano:**
- Fisica: trovare i momenti di massima tensione in un circuito in corrente alternata
- Ingegneria audio: calcolare le frequenze di risonanza
- Ottica: angoli di interferenza costruttiva e distruttiva
- Navigazione: calcolo di rotte su sfere

---

## Prerequisiti

- Valori notevoli di $\sin$, $\cos$, $\tan$ (lezione 18)
- Periodicità: $\sin(\theta + 2\pi) = \sin\theta$, $\tan(\theta + \pi) = \tan\theta$
- Circonferenza goniometrica e quattro quadranti
- Funzioni arco: $\arcsin$, $\arccos$, $\arctan$ (inverse delle funzioni trig.)

---

## Teoria passo-passo

### Equazione $\sin x = k$

**Condizione di esistenza:** soluzione solo se $-1 \leq k \leq 1$.

La soluzione "principale" (o arcoseno) è:
$$x_0 = \arcsin(k) \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$$

Ma sulla circonferenza goniometrica, il valore $k$ sul seno è raggiunto in **due punti** in ogni periodo:
- Nel I o IV quadrante: $x = x_0$
- Nel II o III quadrante: $x = \pi - x_0$

**Soluzione generale:**

$$\boxed{x = x_0 + 2k\pi \quad \text{oppure} \quad x = \pi - x_0 + 2k\pi, \quad k \in \mathbb{Z}}$$

### Equazione $\cos x = k$

**Condizione di esistenza:** soluzione solo se $-1 \leq k \leq 1$.

La soluzione "principale" è:
$$x_0 = \arccos(k) \in [0, \pi]$$

Il coseno assume il valore $k$ in due punti simmetrici rispetto all'asse $x$:

**Soluzione generale:**

$$\boxed{x = \pm x_0 + 2k\pi, \quad k \in \mathbb{Z}}$$

### Equazione $\tan x = k$

**Condizione di esistenza:** nessuna — la tangente assume tutti i valori reali.

La soluzione "principale" è:
$$x_0 = \arctan(k) \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$$

La tangente ha periodo $\pi$ (non $2\pi$!), quindi:

**Soluzione generale:**

$$\boxed{x = x_0 + k\pi, \quad k \in \mathbb{Z}}$$

### Riepilogo struttura soluzioni

| Equazione | Soluzioni principali | Periodo |
| --- | --- | --- |
| $\sin x = k$ | $x_0 = \arcsin k$; $\pi - x_0$ | $2\pi$ |
| $\cos x = k$ | $x_0 = \arccos k$; $-x_0$ | $2\pi$ |
| $\tan x = k$ | $x_0 = \arctan k$ | $\pi$ |

### Equazioni riconducibili alle elementari

**Sostituzione algebrica:** se l'equazione contiene solo $\sin x$ (o solo $\cos x$), poni $t = \sin x$ (o $t = \cos x$) e risolvi l'equazione algebrica in $t$. Poi verifica che $\lvert t \rvert \leq 1$.

**Uso di identità:** se l'equazione mescola $\sin$ e $\cos$, usa le identità per ridurla a una sola funzione.

**Equazioni con argomento composto:** se l'equazione è $\sin(ax + b) = k$, prima risolvi $\sin u = k$ (dove $u = ax + b$), poi ricava $x = (u - b)/a$.

### Disequazioni goniometriche

Si usano il grafico o la circonferenza goniometrica per determinare gli intervalli.

**Metodo:**
1. Trovare le soluzioni dell'equazione corrispondente
2. Determinare su quale arco di circonferenza la funzione soddisfa la disuguaglianza
3. Scrivere la soluzione come unione di intervalli

**Esempio — $\sin x > 1/2$:**
- $\sin x = 1/2$ per $x = \pi/6$ e $x = 5\pi/6$ in $[0, 2\pi)$
- $\sin x > 1/2$ nell'arco superiore della circonferenza, tra $\pi/6$ e $5\pi/6$
- Soluzione: $x \in \left(\dfrac{\pi}{6} + 2k\pi,\; \dfrac{5\pi}{6} + 2k\pi\right)$, $k \in \mathbb{Z}$

---

## Derivazione commentata

**Perché $\sin x = k$ ha due famiglie di soluzioni?**

Pensa alla circonferenza goniometrica: l'equazione $\sin x = k$ chiede quali punti della circonferenza hanno ordinata (coordinata $y$) uguale a $k$. Una retta orizzontale $y = k$ interseca la circonferenza unitaria in **due punti** (se $-1 < k < 1$), uno nel I-II quadrante e uno nel III-IV quadrante.

I due punti sono simmetrici rispetto all'asse $y$. Se il primo ha angolo $x_0$ (nell'intervallo $[-\pi/2, \pi/2]$), il secondo ha angolo $\pi - x_0$ (che è il simmetrico rispetto all'asse $y$). Entrambi hanno lo stesso seno.

Poi, per periodicità, si sommano tutti i multipli interi di $2\pi$.

---

## Esempi graduati

**Esempio 1 — Equazione con sin, soluzione notevole**

Risolvere $\sin x = \dfrac{\sqrt{3}}{2}$.

$x_0 = \arcsin\!\left(\dfrac{\sqrt{3}}{2}\right) = \dfrac{\pi}{3}$.

$$x = \frac{\pi}{3} + 2k\pi \quad \text{oppure} \quad x = \pi - \frac{\pi}{3} + 2k\pi = \frac{2\pi}{3} + 2k\pi, \quad k \in \mathbb{Z}$$

**Esempio 2 — Equazione con cos, soluzione notevole**

Risolvere $\cos x = -\dfrac{1}{2}$.

$x_0 = \arccos\!\left(-\dfrac{1}{2}\right) = \dfrac{2\pi}{3}$.

$$x = \pm\frac{2\pi}{3} + 2k\pi, \quad k \in \mathbb{Z}$$

**Esempio 3 — Equazione con tan**

Risolvere $\tan x + \sqrt{3} = 0$.

$\tan x = -\sqrt{3}$.

$x_0 = \arctan(-\sqrt{3}) = -\dfrac{\pi}{3}$.

$$x = -\frac{\pi}{3} + k\pi, \quad k \in \mathbb{Z}$$

**Esempio 4 — Equazione con argomento composto**

Risolvere $\cos 2x = \dfrac{1}{2}$ in $[0, 2\pi)$.

Pongo $u = 2x$. L'equazione $\cos u = 1/2$ ha soluzioni $u = \pm\pi/3 + 2k\pi$.

- $u = \pi/3 + 2k\pi \implies 2x = \pi/3 + 2k\pi \implies x = \pi/6 + k\pi$
- $u = -\pi/3 + 2k\pi \implies 2x = -\pi/3 + 2k\pi \implies x = -\pi/6 + k\pi$

Per $x \in [0, 2\pi)$:
- Da $x = \pi/6 + k\pi$: $k=0 \to x=\pi/6$; $k=1 \to x=7\pi/6$
- Da $x = -\pi/6 + k\pi$: $k=0 \to x=-\pi/6$ (fuori); $k=1 \to x=5\pi/6$; $k=2 \to x=11\pi/6$

$S = \left\{\dfrac{\pi}{6},\; \dfrac{5\pi}{6},\; \dfrac{7\pi}{6},\; \dfrac{11\pi}{6}\right\}$

**Esempio 5 — Equazione algebrica in sin**

Risolvere $2\sin^2 x - \sin x - 1 = 0$.

Posto $t = \sin x$: $2t^2 - t - 1 = (2t + 1)(t - 1) = 0$.

$t = -1/2$: $\sin x = -1/2 \implies x = -\pi/6 + 2k\pi$ o $x = \pi + \pi/6 + 2k\pi = 7\pi/6 + 2k\pi$.

$t = 1$: $\sin x = 1 \implies x = \pi/2 + 2k\pi$.

**Esempio 6 — Disequazione goniometrica**

Risolvere $\cos x < -\dfrac{\sqrt{2}}{2}$ in $[0, 2\pi)$.

$\cos x = -\sqrt{2}/2$ per $x = 3\pi/4$ e $x = 5\pi/4$.

Il coseno è $< -\sqrt{2}/2$ nell'arco dove il coseno è ancora più negativo: tra $3\pi/4$ e $5\pi/4$.

$S = \left(\dfrac{3\pi}{4},\; \dfrac{5\pi}{4}\right)$

**Esempio 7 — Equazione con formula di duplicazione**

Risolvere $\sin 2x = \sin x$ in $[0, 2\pi)$.

$\sin 2x = \sin x \implies 2\sin x\cos x - \sin x = 0 \implies \sin x(2\cos x - 1) = 0$.

- $\sin x = 0 \implies x = 0, \pi$
- $\cos x = 1/2 \implies x = \pi/3, 5\pi/3$

$S = \left\{0,\; \dfrac{\pi}{3},\; \pi,\; \dfrac{5\pi}{3}\right\}$

---

## Grafico

```plot
{
  "title": "sin(x) = k — intersezioni con la retta orizzontale",
  "fn": "Math.sin(x)",
  "fn2": "0.5",
  "domain": [-6.28, 9.42],
  "yDomain": [-1.5, 1.5],
  "label1": "sin(x)",
  "label2": "k = 0.5"
}
```

Le intersezioni tra il grafico di $\sin x$ (blu) e la retta orizzontale $y = 0{,}5$ (arancio) sono le soluzioni di $\sin x = 0{,}5$. Nota come le intersezioni si ripetano con periodo $2\pi$: ogni periodo contiene esattamente **due** soluzioni.

---

## Elemento interattivo

```slider
{
  "title": "sin(x) = k — effetto del valore k",
  "fn": "Math.sin(x)",
  "domain": [-6.28, 9.42],
  "yDomain": [-1.5, 1.5],
  "pname": "a",
  "pmin": -1,
  "pmax": 1,
  "pdefault": 0.5,
  "pstep": 0.1,
  "plabel": "Valore k",
  "label1": "sin(x)"
}
```

Lo slider cambia il "livello" $k = a$ (immagina una retta orizzontale $y = a$ sovrapposta al grafico). Per $\lvert a \rvert < 1$, ci sono infinite soluzioni. Per $a = 1$ o $a = -1$, c'è solo una soluzione per periodo (il massimo o il minimo). Per $\lvert a \rvert > 1$ non ci sono soluzioni.

---

## Errori comuni

**Errore 1 — Dimenticare la seconda famiglia di soluzioni**

Per $\sin x = k$, scrivere solo $x = \arcsin(k) + 2k\pi$ e dimenticare $x = \pi - \arcsin(k) + 2k\pi$. Ogni retta orizzontale $y = k$ interseca il seno in **due** punti per periodo.

**Errore 2 — Confondere il periodo di sin/cos con quello di tan**

$\sin$ e $\cos$ hanno periodo $2\pi$, quindi le soluzioni si sommano $+2k\pi$. La $\tan$ ha periodo $\pi$: le soluzioni si sommano $+k\pi$. Usare $+2k\pi$ per la tangente dà metà delle soluzioni.

**Errore 3 — Non verificare la condizione di esistenza**

Se $\lvert k \rvert > 1$, l'equazione $\sin x = k$ non ha soluzioni. Scrivere $x = \arcsin(1{,}5)$ è un errore: la funzione $\arcsin$ non è definita fuori da $[-1, 1]$.

**Errore 4 — Risolvere $\sin x = 0$ o $\cos x = 0$ senza attenzione**

$\sin x = 0 \implies x = k\pi$ (non $x = 0$). $\cos x = 0 \implies x = \pi/2 + k\pi$ (non $x = \pi/2$).

**Errore 5 — Sbagliare il segno nella formula per cos**

$\cos x = k$ ha soluzioni $x = \pm x_0 + 2k\pi$. Il segno $\pm$ riguarda $x_0$, non $2k\pi$. La formula corretta non è $x = x_0 \pm 2k\pi$.

**Errore 6 — Perdere soluzioni in un intervallo limitato**

Quando si chiede di trovare soluzioni in $[0, 2\pi)$, è facile dimenticare alcune soluzioni. Il metodo sicuro: trovare prima la soluzione generale, poi sostituire diversi valori di $k$ (anche negativi) e verificare quali cadono nell'intervallo richiesto.

**Errore 7 — Non fattorizzare correttamente le equazioni algebriche**

Per $2\sin^2 x - \sin x - 1 = 0$, è un errore dividere per $\sin x$ (si perderebbero le soluzioni con $\sin x = 0$). Bisogna sempre portare tutto a sinistra e fattorizzare.

---

## Applicazioni reali

**Fisica — Circuiti in corrente alternata.** La tensione in un circuito RC vale $V(t) = V_0\sin(\omega t + \phi)$. Trovare gli istanti in cui $V = V_0/2$ significa risolvere $\sin(\omega t + \phi) = 1/2$: un'equazione goniometrica con argomento composto. Ingegneri elettrici risolvono queste equazioni per calcolare i tempi di carica e scarica dei condensatori.

**Acustica — Interferenza.** Quando due onde sonore si sovrappongono, la pressione risultante è $p = 2A\cos\!\left(\dfrac{\Delta\phi}{2}\right)\sin(\omega t)$. L'interferenza costruttiva (suono amplificato) si ha quando $\cos\!\left(\dfrac{\Delta\phi}{2}\right) = \pm 1$, cioè $\Delta\phi = 2k\pi$. Quella distruttiva (silenzio) quando $\cos\!\left(\dfrac{\Delta\phi}{2}\right) = 0$, cioè $\Delta\phi = (2k+1)\pi$. Le cuffie a cancellazione del rumore sfruttano l'interferenza distruttiva.

**Robotica e cinematica.** Un braccio robotico con due segmenti di lunghezza $l_1$ e $l_2$ deve raggiungere il punto $(x, y)$. Le equazioni di cinematica inversa sono sistemi di equazioni trigonometriche in $\theta_1$ e $\theta_2$ (gli angoli dei giunti). Risolverle — con le tecniche di questa lezione — permette di calcolare esattamente come orientare i giunti per raggiungere il target.

---

## Riepilogo tabellare

| Equazione | Condizione | Sol. principale $x_0$ | Soluzione generale |
| --- | --- | --- | --- |
| $\sin x = k$ | $\lvert k \rvert \leq 1$ | $\arcsin k \in [-\pi/2, \pi/2]$ | $x_0 + 2k\pi$ oppure $\pi - x_0 + 2k\pi$ |
| $\cos x = k$ | $\lvert k \rvert \leq 1$ | $\arccos k \in [0, \pi]$ | $\pm x_0 + 2k\pi$ |
| $\tan x = k$ | nessuna | $\arctan k \in (-\pi/2, \pi/2)$ | $x_0 + k\pi$ |

---

## Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Equazione elementare con sin</summary>

Risolvere $\sin x = -\dfrac{\sqrt{2}}{2}$.

**Soluzione:**

$x_0 = \arcsin\!\left(-\dfrac{\sqrt{2}}{2}\right) = -\dfrac{\pi}{4}$

$x = -\dfrac{\pi}{4} + 2k\pi$ oppure $x = \pi - \left(-\dfrac{\pi}{4}\right) + 2k\pi = \dfrac{5\pi}{4} + 2k\pi$, $k \in \mathbb{Z}$

</details>

<details>
<summary>Esercizio 2 — Equazione con cos in intervallo</summary>

Risolvere $\cos 2x = \dfrac{\sqrt{3}}{2}$ in $[0, \pi]$.

**Soluzione:**

$u = 2x$, con $u \in [0, 2\pi]$.

$\cos u = \sqrt{3}/2 \implies u = \pi/6$ o $u = 11\pi/6$.

$u = \pi/6 \implies x = \pi/12$

$u = 11\pi/6 \implies x = 11\pi/12$

$S = \left\{\dfrac{\pi}{12},\; \dfrac{11\pi}{12}\right\}$

</details>

<details>
<summary>Esercizio 3 — Equazione algebrica in cos</summary>

Risolvere $2\cos^2 x + \cos x = 0$.

**Soluzione:**

$\cos x(2\cos x + 1) = 0$

$\cos x = 0 \implies x = \dfrac{\pi}{2} + k\pi$

$\cos x = -\dfrac{1}{2} \implies x = \pm\dfrac{2\pi}{3} + 2k\pi$

</details>

<details>
<summary>Esercizio 4 — Disequazione con sin</summary>

Risolvere $\sin x > \dfrac{1}{2}$ in $[0, 2\pi)$.

**Soluzione:**

$\sin x = 1/2$ per $x = \pi/6$ e $x = 5\pi/6$.

$\sin x > 1/2$ nell'arco superiore tra questi due angoli.

$S = \left(\dfrac{\pi}{6},\; \dfrac{5\pi}{6}\right)$

</details>

<details>
<summary>Esercizio 5 — Equazione con formula di duplicazione</summary>

Risolvere $\cos 2x + \cos x = 0$ in $[0, 2\pi)$.

**Soluzione:**

$\cos 2x = 2\cos^2 x - 1$

$(2\cos^2 x - 1) + \cos x = 0 \implies 2\cos^2 x + \cos x - 1 = 0$

Posto $t = \cos x$: $(2t - 1)(t + 1) = 0$

$t = 1/2$: $\cos x = 1/2 \implies x = \pi/3$ o $x = 5\pi/3$

$t = -1$: $\cos x = -1 \implies x = \pi$

$S = \left\{\dfrac{\pi}{3},\; \pi,\; \dfrac{5\pi}{3}\right\}$

</details>

<details>
<summary>Esercizio 6 — Sistema di equazioni</summary>

Trovare tutti i valori $x \in [0, 2\pi)$ tali che $\sin x = \cos x$.

**Soluzione:**

$\sin x = \cos x \implies \tan x = 1 \implies x = \dfrac{\pi}{4} + k\pi$

In $[0, 2\pi)$: $x = \dfrac{\pi}{4}$ (I quad.) e $x = \dfrac{5\pi}{4}$ (III quad.).

Verifica: $\sin(\pi/4) = \cos(\pi/4) = \sqrt{2}/2$ ✓; $\sin(5\pi/4) = \cos(5\pi/4) = -\sqrt{2}/2$ ✓

</details>

<details>
<summary>Esercizio 7 — Disequazione con tan</summary>

Risolvere $\tan x < 1$ in $(-\pi/2, \pi/2)$.

**Soluzione:**

$\tan x = 1$ per $x = \pi/4$.

La tangente è crescente in $(-\pi/2, \pi/2)$, quindi $\tan x < 1$ per $x < \pi/4$.

$S = \left(-\dfrac{\pi}{2},\; \dfrac{\pi}{4}\right)$

</details>

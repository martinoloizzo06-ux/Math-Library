---
id: base-18-seno-coseno-tangente
subject: base
topic_it: Trigonometria
topic_en: Trigonometry
title_it: Funzioni seno, coseno, tangente
title_en: Sine, cosine and tangent functions
level: green
order: 18
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 7 — Funzioni trigonometriche"
stato: da-rielaborare
---

## Intuizione e motivazione

Pensa a una ruota che gira, come quella di una bicicletta. Fissa un punto sul bordo della ruota e osserva la sua altezza mentre la ruota gira: sale, raggiunge il massimo, scende, tocca il minimo, risale. Questa oscillazione regolare è esattamente il **seno**. La posizione orizzontale dello stesso punto segue invece il **coseno**.

Queste due funzioni descrivono qualsiasi fenomeno oscillatorio in natura: le maree, le correnti alternate, le onde sonore, le vibrazioni di una corda di chitarra. La **tangente** descrive invece l'inclinazione, ed è fondamentale in ottica (legge di Snell), in topografia e nell'analisi dei pendii.

**Dove si incontra nella realtà:**
- Acustica: ogni suono è somma di seni e coseni (teorema di Fourier)
- Elettrotecnica: la corrente alternata segue un andamento sinusoidale
- Architettura: calcolo delle forze su travi inclinate
- Computer grafica: rotazioni e animazioni

---

## Prerequisiti

- Circonferenza goniometrica e radianti (lezione 17)
- Coordinate cartesiane $(x, y)$
- Teorema di Pitagora: $a^2 + b^2 = c^2$
- Concetto di funzione e grafico

---

## Teoria passo-passo

### Definizioni sulla circonferenza goniometrica

Considera la circonferenza di raggio 1 centrata nell'origine. Per ogni angolo $\theta$ (in radianti, misurato in senso antiorario dall'asse $x$ positivo), il punto $P(\theta)$ sulla circonferenza ha coordinate:

$$\cos\theta = x\text{-coordinata di } P(\theta)$$

$$\sin\theta = y\text{-coordinata di } P(\theta)$$

Poiché il raggio è 1 e il punto è sulla circonferenza, vale sempre:

$$\sin^2\theta + \cos^2\theta = 1$$

Questa è l'**identità fondamentale** della trigonometria, e deriva direttamente dal teorema di Pitagora.

### La tangente

La **tangente** è il rapporto tra seno e coseno:

$$\tan\theta = \frac{\sin\theta}{\cos\theta} \qquad (\cos\theta \neq 0)$$

Geometricamente, $\tan\theta$ è la pendenza della retta che passa per l'origine e per $P(\theta)$ sulla circonferenza.

La tangente **non è definita** quando $\cos\theta = 0$, cioè per $\theta = \pi/2 + k\pi$ con $k$ intero. In quei punti, il grafico di $\tan$ ha asintoti verticali.

### Funzioni reciproche

Esistono tre ulteriori funzioni trigonometriche, meno usate ma utili:

$$\cot\theta = \frac{\cos\theta}{\sin\theta} \qquad \sec\theta = \frac{1}{\cos\theta} \qquad \csc\theta = \frac{1}{\sin\theta}$$

Il **cotangente** è l'inverso della tangente. Il **secante** è l'inverso del coseno. Il **cosecante** è l'inverso del seno.

### Valori notevoli

I valori notevoli si ricavano dalla geometria della circonferenza unitaria, usando i triangoli rettangoli con angoli speciali (30°-60°-90° e 45°-45°-90°).

| $\theta$ | Gradi | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
| --- | --- | --- | --- | --- |
| $0$ | 0° | $0$ | $1$ | $0$ |
| $\pi/6$ | 30° | $1/2$ | $\sqrt{3}/2$ | $1/\sqrt{3} = \sqrt{3}/3$ |
| $\pi/4$ | 45° | $\sqrt{2}/2$ | $\sqrt{2}/2$ | $1$ |
| $\pi/3$ | 60° | $\sqrt{3}/2$ | $1/2$ | $\sqrt{3}$ |
| $\pi/2$ | 90° | $1$ | $0$ | non def. |
| $\pi$ | 180° | $0$ | $-1$ | $0$ |
| $3\pi/2$ | 270° | $-1$ | $0$ | non def. |
| $2\pi$ | 360° | $0$ | $1$ | $0$ |

**Mnemonica per $\sin$ (da 0° a 90°):** $0,\; \dfrac{1}{2},\; \dfrac{\sqrt{2}}{2},\; \dfrac{\sqrt{3}}{2},\; 1$

Si può riscrivere come $\sqrt{0}/2,\; \sqrt{1}/2,\; \sqrt{2}/2,\; \sqrt{3}/2,\; \sqrt{4}/2$. Per il coseno, è la sequenza inversa.

### Segno nei quattro quadranti

| Quadrante | Intervallo | $\sin$ | $\cos$ | $\tan$ |
| --- | --- | --- | --- | --- |
| I | $0 < \theta < \pi/2$ | $+$ | $+$ | $+$ |
| II | $\pi/2 < \theta < \pi$ | $+$ | $-$ | $-$ |
| III | $\pi < \theta < 3\pi/2$ | $-$ | $-$ | $+$ |
| IV | $3\pi/2 < \theta < 2\pi$ | $-$ | $+$ | $-$ |

**Mnemonica CAST** (letta in senso antiorario, partendo dal IV quadrante):
- **C**oseno positivo (IV)
- **A**ll positive — tutti positivi (I)
- **S**eno positivo (II)
- **T**angente positivo (III)

### Periodicità e simmetrie

$$\sin(\theta + 2\pi) = \sin\theta \qquad \cos(\theta + 2\pi) = \cos\theta$$

$$\tan(\theta + \pi) = \tan\theta$$

La tangente ha periodo $\pi$ (la metà di seno e coseno).

**Simmetria pari/dispari:**
- $\cos(-\theta) = \cos\theta$ → il coseno è una **funzione pari** (simmetrica rispetto all'asse $y$)
- $\sin(-\theta) = -\sin\theta$ → il seno è una **funzione dispari** (simmetrica rispetto all'origine)
- $\tan(-\theta) = -\tan\theta$ → la tangente è **dispari**

### Proprietà delle grafici

| Proprietà | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
| --- | --- | --- | --- |
| Dominio | $\mathbb{R}$ | $\mathbb{R}$ | $\mathbb{R} \setminus \{\pi/2 + k\pi\}$ |
| Codominio | $[-1, 1]$ | $[-1, 1]$ | $\mathbb{R}$ |
| Periodo | $2\pi$ | $2\pi$ | $\pi$ |
| Valore max | $1$ | $1$ | $+\infty$ |
| Valore min | $-1$ | $-1$ | $-\infty$ |

---

## Derivazione commentata

**Come si ricava $\sin(\pi/6) = 1/2$?**

Considera un triangolo equilaterale con lato di lunghezza 2. Ogni angolo interno è 60°. Traccia l'altezza da un vertice: divide la base in due parti di lunghezza 1, e crea due triangoli rettangoli con angoli 30°-60°-90°.

In uno di questi triangoli:
- Ipotenusa: 2 (il lato del triangolo equilaterale)
- Cateto orizzontale: 1 (metà della base)
- Cateto verticale: $\sqrt{2^2 - 1^2} = \sqrt{3}$

L'angolo di 30° ($= \pi/6$) è in basso a sinistra. Il seno è opposto/ipotenusa:

$$\sin\frac{\pi}{6} = \frac{1}{2}$$

Il coseno è adiacente/ipotenusa:

$$\cos\frac{\pi}{6} = \frac{\sqrt{3}}{2}$$

Analogamente, per 60° ($= \pi/3$) gli stessi cateti si scambiano di ruolo:

$$\sin\frac{\pi}{3} = \frac{\sqrt{3}}{2} \qquad \cos\frac{\pi}{3} = \frac{1}{2}$$

---

## Esempi graduati

**Esempio 1 — Lettura diretta dei valori notevoli**

Calcolare $\sin(\pi/4)$ e $\cos(\pi/4)$.

Per $\theta = \pi/4 = 45°$, il triangolo rettangolo isoscele con ipotenusa 1 ha cateti di lunghezza $1/\sqrt{2} = \sqrt{2}/2$.

$$\sin\frac{\pi}{4} = \frac{\sqrt{2}}{2} \approx 0{,}707 \qquad \cos\frac{\pi}{4} = \frac{\sqrt{2}}{2} \approx 0{,}707$$

**Esempio 2 — Angolo nel II quadrante**

Calcolare $\sin\!\left(\dfrac{5\pi}{6}\right)$.

$\dfrac{5\pi}{6} = \pi - \dfrac{\pi}{6}$ (II quadrante). Nel II quadrante il seno è positivo e vale come nel I quadrante con lo stesso angolo di riferimento $\pi/6$:

$$\sin\frac{5\pi}{6} = \sin\frac{\pi}{6} = \frac{1}{2}$$

**Esempio 3 — Angolo nel III quadrante**

Calcolare $\cos\!\left(\dfrac{5\pi}{4}\right)$.

$\dfrac{5\pi}{4} = \pi + \dfrac{\pi}{4}$ (III quadrante). Nel III quadrante il coseno è negativo:

$$\cos\frac{5\pi}{4} = -\cos\frac{\pi}{4} = -\frac{\sqrt{2}}{2}$$

**Esempio 4 — Calcolare tutte e tre le funzioni**

Sapendo che $\sin\alpha = \dfrac{3}{5}$ con $\alpha$ nel II quadrante, trovare $\cos\alpha$ e $\tan\alpha$.

Dall'identità fondamentale: $\cos^2\alpha = 1 - \sin^2\alpha = 1 - \dfrac{9}{25} = \dfrac{16}{25}$.

Nel II quadrante $\cos\alpha < 0$, quindi $\cos\alpha = -\dfrac{4}{5}$.

$$\tan\alpha = \frac{\sin\alpha}{\cos\alpha} = \frac{3/5}{-4/5} = -\frac{3}{4}$$

**Esempio 5 — Sfruttare la periodicità**

Calcolare $\cos\!\left(\dfrac{47\pi}{4}\right)$.

$\dfrac{47\pi}{4} = 11\pi + \dfrac{3\pi}{4} = 10\pi + \dfrac{7\pi}{4}$.

Poiché $10\pi = 5 \cdot 2\pi$:

$$\cos\frac{47\pi}{4} = \cos\frac{7\pi}{4} = \cos\!\left(2\pi - \frac{\pi}{4}\right) = \cos\frac{\pi}{4} = \frac{\sqrt{2}}{2}$$

**Esempio 6 — Tangente con asintoto**

Calcolare $\tan\!\left(\dfrac{2\pi}{3}\right)$.

$\dfrac{2\pi}{3} = \pi - \dfrac{\pi}{3}$ (II quadrante). La tangente è negativa nel II quadrante:

$$\tan\frac{2\pi}{3} = -\tan\frac{\pi}{3} = -\sqrt{3}$$

**Esempio 7 — Onda sinusoidale**

Una corrente elettrica vale $I(t) = 5\sin(100\pi t)$ ampere, dove $t$ è in secondi. Trovare il valore di $I$ per $t = 0{,}01$ s.

$I(0{,}01) = 5\sin(100\pi \cdot 0{,}01) = 5\sin(\pi) = 5 \cdot 0 = 0$ A.

Il corrente è zero perché $t = 0{,}01$ s corrisponde esattamente a mezzo periodo.

---

## Grafico

```plot
{
  "title": "Seno e coseno a confronto",
  "fn": "Math.sin(x)",
  "fn2": "Math.cos(x)",
  "domain": [-6.28, 6.28],
  "yDomain": [-1.5, 1.5],
  "label1": "sin(x)",
  "label2": "cos(x)"
}
```

Osserva che il coseno è il seno traslato di $\pi/2$ verso sinistra: $\cos x = \sin(x + \pi/2)$. Le due curve hanno la stessa forma, ma sono sfasate di un quarto di periodo.

---

## Elemento interattivo

```slider
{
  "title": "Onda sinusoidale: effetto della frequenza",
  "fn": "Math.sin(f * x)",
  "domain": [-6.28, 6.28],
  "yDomain": [-1.5, 1.5],
  "pname": "f",
  "pmin": 0.5,
  "pmax": 5,
  "pdefault": 1,
  "pstep": 0.5,
  "plabel": "Frequenza f",
  "label1": "sin(f·x)"
}
```

Aumentando la frequenza $f$, il seno oscilla più rapidamente: il **periodo** diventa $\dfrac{2\pi}{f}$ invece di $2\pi$. In acustica, una frequenza maggiore corrisponde a un suono più acuto.

---

## Errori comuni

**Errore 1 — Confondere sin e cos nei valori notevoli**

Molti invertono i valori per $\pi/6$ e $\pi/3$. Ricorda: $\sin(\pi/6) = 1/2$ (piccolo angolo, valore piccolo), $\sin(\pi/3) = \sqrt{3}/2$ (angolo più grande, valore più grande).

**Errore 2 — Dimenticare il segno del quadrante**

Scrivere $\cos(5\pi/4) = \sqrt{2}/2$ senza il segno negativo. L'angolo $5\pi/4$ è nel III quadrante dove il coseno è negativo: il risultato corretto è $-\sqrt{2}/2$.

**Errore 3 — Credere che $\sin\theta = \theta$ sempre**

Per piccoli angoli, $\sin\theta \approx \theta$ (in radianti), ma è solo un'approssimazione. Per $\theta = \pi/2$, $\sin(\pi/2) = 1$ mentre $\pi/2 \approx 1{,}571$.

**Errore 4 — Usare la calcolatrice in modalità sbagliata**

Se la calcolatrice è in modalità gradi (DEG) e si inserisce $\sin(1{,}5708)$, si ottiene $\sin(1{,}5708°) \approx 0{,}0274$ invece di $\sin(\pi/2) = 1$. Verifica sempre la modalità.

**Errore 5 — Pensare che tan sia sempre definita**

$\tan(\pi/2)$ non esiste. Molte calcolatrici restituiscono un numero molto grande, ma il valore è matematicamente indefinito.

**Errore 6 — Sbagliare il periodo della tangente**

$\tan$ ha periodo $\pi$, non $2\pi$. Quindi $\tan(\theta + \pi) = \tan\theta$, non occorre aggiungere $2\pi$.

**Errore 7 — Credere che $\sin^2\theta$ significhi $\sin(\theta^2)$**

$\sin^2\theta = (\sin\theta)^2$: è il quadrato del valore del seno. Non ha nulla a che fare con $\sin(\theta^2)$, che è una funzione completamente diversa.

---

## Applicazioni reali

**Onde sonore e musica.** Un suono puro (tono sinusoidale) è descritto da $p(t) = A\sin(2\pi f t + \phi)$, dove $A$ è l'ampiezza (volume), $f$ la frequenza (altezza del suono) e $\phi$ la fase. Il teorema di Fourier afferma che qualsiasi suono complesso — il timbro di un violino, la voce umana — può essere scomposto in somma di seni e coseni. Gli equalizzatori audio non fanno altro che aumentare o diminuire le ampiezze di queste componenti.

**Corrente alternata e reti elettriche.** La tensione di rete in Italia è $V(t) = 325\sin(100\pi t)$ volt. Il valore di picco è 325 V, ma il valore efficace (RMS) è $325/\sqrt{2} \approx 230$ V, il valore nominale che conosciamo. Tutta l'analisi dei circuiti in corrente alternata — impedenza, sfasamento, potenza reattiva — si basa sulla matematica di seno e coseno.

**Topografia e distanze.** I GPS e i teodoliti usano le funzioni trigonometriche per calcolare distanze e quote. Se sai la distanza orizzontale $d$ da un punto e l'angolo di elevazione $\theta$ verso una cima, l'altezza è $h = d\tan\theta$. I segnali satellitari del GPS arrivano da angoli noti, e la posizione si ricava risolvendo sistemi di equazioni trigonometriche.

---

## Riepilogo tabellare

| Funzione | Definizione | Dominio | Codominio | Periodo | Parità |
| --- | --- | --- | --- | --- | --- |
| $\sin\theta$ | $y$-coord. su cerchio unit. | $\mathbb{R}$ | $[-1,1]$ | $2\pi$ | dispari |
| $\cos\theta$ | $x$-coord. su cerchio unit. | $\mathbb{R}$ | $[-1,1]$ | $2\pi$ | pari |
| $\tan\theta$ | $\sin\theta / \cos\theta$ | $\mathbb{R} \setminus \{\pi/2+k\pi\}$ | $\mathbb{R}$ | $\pi$ | dispari |
| $\cot\theta$ | $\cos\theta / \sin\theta$ | $\mathbb{R} \setminus \{k\pi\}$ | $\mathbb{R}$ | $\pi$ | dispari |
| $\sec\theta$ | $1/\cos\theta$ | $\mathbb{R} \setminus \{\pi/2+k\pi\}$ | $(-\infty,-1] \cup [1,+\infty)$ | $2\pi$ | pari |
| $\csc\theta$ | $1/\sin\theta$ | $\mathbb{R} \setminus \{k\pi\}$ | $(-\infty,-1] \cup [1,+\infty)$ | $2\pi$ | dispari |

---

## Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Valori esatti</summary>

Calcolare $\sin\!\left(\dfrac{5\pi}{6}\right)$, $\cos\!\left(\dfrac{5\pi}{4}\right)$, $\tan\!\left(\dfrac{4\pi}{3}\right)$.

**Soluzione:**

$\dfrac{5\pi}{6} = \pi - \dfrac{\pi}{6}$ (II quad.): $\sin\!\left(\dfrac{5\pi}{6}\right) = +\sin\!\left(\dfrac{\pi}{6}\right) = \dfrac{1}{2}$

$\dfrac{5\pi}{4} = \pi + \dfrac{\pi}{4}$ (III quad.): $\cos\!\left(\dfrac{5\pi}{4}\right) = -\cos\!\left(\dfrac{\pi}{4}\right) = -\dfrac{\sqrt{2}}{2}$

$\dfrac{4\pi}{3} = \pi + \dfrac{\pi}{3}$ (III quad.): $\tan\!\left(\dfrac{4\pi}{3}\right) = +\tan\!\left(\dfrac{\pi}{3}\right) = \sqrt{3}$ (nel III quad. la tangente è positiva)

</details>

<details>
<summary>Esercizio 2 — Angolo associato</summary>

Sapendo che $\cos\beta = -\dfrac{5}{13}$ con $\beta$ nel III quadrante, trovare $\sin\beta$, $\tan\beta$, $\sec\beta$.

**Soluzione:**

$\sin^2\beta = 1 - \cos^2\beta = 1 - \dfrac{25}{169} = \dfrac{144}{169}$

Nel III quadrante $\sin\beta < 0$: $\sin\beta = -\dfrac{12}{13}$

$\tan\beta = \dfrac{\sin\beta}{\cos\beta} = \dfrac{-12/13}{-5/13} = \dfrac{12}{5}$ (positivo: III quad. ✓)

$\sec\beta = \dfrac{1}{\cos\beta} = -\dfrac{13}{5}$

</details>

<details>
<summary>Esercizio 3 — Periodicità</summary>

Calcolare $\sin\!\left(\dfrac{47\pi}{6}\right)$ e $\tan\!\left(\dfrac{25\pi}{4}\right)$.

**Soluzione:**

$\dfrac{47\pi}{6} = 7\pi + \dfrac{5\pi}{6} = 6\pi + \pi + \dfrac{5\pi}{6} = 6\pi + \dfrac{11\pi}{6}$

Poiché $6\pi = 3 \cdot 2\pi$: $\sin\!\left(\dfrac{47\pi}{6}\right) = \sin\!\left(\dfrac{11\pi}{6}\right) = \sin\!\left(2\pi - \dfrac{\pi}{6}\right) = -\sin\!\left(\dfrac{\pi}{6}\right) = -\dfrac{1}{2}$

$\dfrac{25\pi}{4} = 6\pi + \dfrac{\pi}{4}$: poiché $\tan$ ha periodo $\pi$ e $6\pi = 6 \cdot \pi$, $\tan\!\left(\dfrac{25\pi}{4}\right) = \tan\!\left(\dfrac{\pi}{4}\right) = 1$

</details>

<details>
<summary>Esercizio 4 — Forma generale di un'onda</summary>

Un'onda è descritta da $f(t) = 3\cos(2t - \pi/4)$. Trovare: ampiezza, periodo, sfasamento, e il valore di $f$ in $t = \pi/8$.

**Soluzione:**

Forma generale: $A\cos(\omega t - \phi)$.

- Ampiezza: $A = 3$
- Pulsazione: $\omega = 2$ → Periodo: $T = 2\pi/\omega = \pi$
- Sfasamento: $\phi = \pi/4$

$f(\pi/8) = 3\cos(2 \cdot \pi/8 - \pi/4) = 3\cos(\pi/4 - \pi/4) = 3\cos(0) = 3$

</details>

<details>
<summary>Esercizio 5 — Calcolo dell'altezza</summary>

Un osservatore è a 100 m di distanza dalla base di un edificio. L'angolo di elevazione verso la cima è 35°. Calcola l'altezza dell'edificio.

**Soluzione:**

$h = 100 \cdot \tan(35°)$

$\tan(35°) \approx 0{,}7002$

$h \approx 70{,}0$ m

</details>

<details>
<summary>Esercizio 6 — Identità e semplificazione</summary>

Semplifica: $\dfrac{\sin\theta}{\tan\theta}$.

**Soluzione:**

$$\frac{\sin\theta}{\tan\theta} = \frac{\sin\theta}{\sin\theta/\cos\theta} = \sin\theta \cdot \frac{\cos\theta}{\sin\theta} = \cos\theta$$

</details>

<details>
<summary>Esercizio 7 — Trovare il segno senza calcolare</summary>

Senza calcolatrice, determinare il segno di $\sin(4)$ e $\cos(5)$ (angoli in radianti).

**Soluzione:**

$\pi \approx 3{,}14$, $3\pi/2 \approx 4{,}71$, $2\pi \approx 6{,}28$.

$4$ radianti: $\pi < 4 < 3\pi/2$ → III quadrante → $\sin(4) < 0$.

$5$ radianti: $3\pi/2 < 5 < 2\pi$ → IV quadrante → $\cos(5) > 0$.

</details>

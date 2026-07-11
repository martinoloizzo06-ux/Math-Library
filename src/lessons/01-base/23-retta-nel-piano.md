---
id: base-23-retta-nel-piano
subject: base
topic_it: Geometria analitica
topic_en: Analytic geometry
title_it: Retta nel piano
title_en: Lines in the plane
level: green
order: 23
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 8 — Rette"
stato: da-rielaborare
---

## 1. Intuizione e motivazione

Pensa a una strada dritta su una mappa. Non importa quanto la allunghi: rimane sempre "la stessa strada". Matematicamente, una retta è l'oggetto geometrico più semplice dopo il punto: è infinita, dritta, e completamente determinata da due punti qualsiasi che vi appartengono — o da un punto e una direzione.

La retta è il mattone fondamentale della geometria analitica. Le sue equazioni permettono di risolvere sistemi lineari (incroci stradali), ottimizzare funzioni (programmazione lineare in economia), calcolare distanze minime (logistica), e costruire le basi per calcolo differenziale e integrale. Ogni volta che si parla di "relazione lineare" tra due grandezze, si sta descrivendo una retta.

---

## 2. Prerequisiti

- Piano cartesiano e coordinate $(x, y)$
- Operazioni algebriche e frazioni
- Concetto di pendenza come "quanto sale per ogni passo a destra"
- Formula della distanza tra due punti: $d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$
- Valore assoluto $\lvert \cdot \rvert$

---

## 3. Teoria passo-passo

### Forma esplicita: $y = mx + q$

La forma più comune. Qui:

- $m$ è la **pendenza** (o coefficiente angolare): misura di quanto cresce $y$ per ogni unità che $x$ aumenta di 1. Se $m > 0$ la retta sale da sinistra a destra; se $m < 0$ scende; se $m = 0$ è orizzontale.
- $q$ è l'**intercetta** (o ordinata all'origine): il valore di $y$ quando $x = 0$, cioè dove la retta taglia l'asse $y$.

**Limitazione:** non rappresenta le rette verticali (per cui $x = a$, costante).

### Forma implicita (o generale): $ax + by + c = 0$

Dove $a$ e $b$ non sono entrambi zero. Questa forma è più generale: rappresenta ogni retta, incluse quelle verticali ($b = 0$: $ax + c = 0 \implies x = -c/a$).

Conversione: se $b \neq 0$, si può passare alla forma esplicita:

$$y = -\frac{a}{b}x - \frac{c}{b}$$

quindi la pendenza è $m = -a/b$ e l'intercetta è $q = -c/b$.

### Forma punto-pendenza

Data una pendenza $m$ e un punto $(x_0, y_0)$ sulla retta:

$$y - y_0 = m(x - x_0)$$

È la forma più diretta per scrivere l'equazione quando si conosce un punto e la direzione.

### Equazione per due punti

Dati $P_1 = (x_1, y_1)$ e $P_2 = (x_2, y_2)$ con $x_1 \neq x_2$, la pendenza è:

$$m = \frac{y_2 - y_1}{x_2 - x_1}$$

L'equazione si ottiene poi con la forma punto-pendenza. In forma compatta:

$$\frac{y - y_1}{x - x_1} = \frac{y_2 - y_1}{x_2 - x_1}$$

### Rette particolari

- **Retta verticale:** $x = a$ (non ha pendenza definita — si dice che $m = \pm\infty$)
- **Retta orizzontale:** $y = b$ (pendenza $m = 0$)
- **Retta per l'origine:** $y = mx$ (intercetta $q = 0$)

### Angolo di inclinazione

La pendenza $m$ è collegata all'angolo $\alpha$ che la retta forma con l'asse $x$ (in senso antiorario):

$$m = \tan(\alpha), \qquad \alpha \in [0°, 180°), \; \alpha \neq 90°$$

### Posizioni reciproche di due rette

Date $r_1: m_1 x + q_1$ e $r_2: m_2 x + q_2$:

| Posizione | Condizione |
| --- | --- |
| Parallele | $m_1 = m_2$ e $q_1 \neq q_2$ |
| Coincidenti | $m_1 = m_2$ e $q_1 = q_2$ |
| Incidenti | $m_1 \neq m_2$ |
| Perpendicolari | $m_1 \cdot m_2 = -1$ |

### Distanza punto-retta

La distanza dal punto $P_0 = (x_0, y_0)$ alla retta $r: ax + by + c = 0$ è:

$$d(P_0, r) = \frac{\lvert ax_0 + by_0 + c \rvert}{\sqrt{a^2 + b^2}}$$

Questa formula è fondamentale: misura la distanza minima (perpendicolare) tra il punto e la retta.

### Fascio di rette

Il **fascio proprio** di rette passanti per il punto $(x_0, y_0)$ è la famiglia:

$$y - y_0 = m(x - x_0), \qquad m \in \mathbb{R}$$

più la retta verticale $x = x_0$.

---

## 4. Derivazione commentata

### Derivazione della formula distanza punto-retta

Sia $r: ax + by + c = 0$ e $P_0 = (x_0, y_0)$.

Vogliamo trovare il punto $H$ su $r$ più vicino a $P_0$ (il piede della perpendicolare).

La retta perpendicolare a $r$ per $P_0$ ha direzione $(a, b)$ (il vettore normale a $r$):

$$\text{parametrica}: \; x = x_0 + at, \quad y = y_0 + bt$$

Sostituiamo in $ax + by + c = 0$:

$$a(x_0 + at) + b(y_0 + bt) + c = 0$$

$$ax_0 + by_0 + c + t(a^2 + b^2) = 0$$

$$t = -\frac{ax_0 + by_0 + c}{a^2 + b^2}$$

La distanza è $d = \lvert t \rvert \cdot \sqrt{a^2 + b^2}$ (modulo del vettore $(at, bt)$):

$$d = \frac{\lvert ax_0 + by_0 + c \rvert}{a^2 + b^2} \cdot \sqrt{a^2 + b^2} = \frac{\lvert ax_0 + by_0 + c \rvert}{\sqrt{a^2 + b^2}} \qquad \square$$

---

## 5. Esempi graduati

**Esempio 1 — Retta da intercetta e pendenza.**
Scrivi l'equazione della retta con $m = 2$ e $q = -3$.

$$y = 2x - 3$$

---

**Esempio 2 — Retta per un punto con pendenza data.**
Retta per $(1, 4)$ con $m = -1$.

$$y - 4 = -1(x - 1) \implies y = -x + 5$$

---

**Esempio 3 — Retta per due punti.**
Retta per $A = (-1, 3)$ e $B = (2, -3)$.

$$m = \frac{-3 - 3}{2 - (-1)} = \frac{-6}{3} = -2$$

$$y - 3 = -2(x + 1) \implies y = -2x + 1$$

---

**Esempio 4 — Retta perpendicolare.**
Trovare la retta perpendicolare a $y = -2x + 1$ passante per $B = (2, -3)$.

La pendenza perpendicolare è $m' = -\frac{1}{-2} = \frac{1}{2}$.

$$y - (-3) = \frac{1}{2}(x - 2) \implies y = \frac{1}{2}x - 4$$

---

**Esempio 5 — Distanza punto-retta.**
Distanza da $P = (3, 1)$ alla retta $3x - 4y + 5 = 0$.

$$d = \frac{\lvert 3(3) - 4(1) + 5 \rvert}{\sqrt{9 + 16}} = \frac{\lvert 9 - 4 + 5 \rvert}{5} = \frac{10}{5} = 2$$

---

**Esempio 6 — Distanza tra rette parallele.**
Distanza tra $3x - 4y + 1 = 0$ e $3x - 4y - 9 = 0$.

Prendo un punto sulla prima: per $x = 1$: $3 - 4y + 1 = 0 \implies y = 1$. Punto $Q = (1, 1)$.

$$d = \frac{\lvert 3(1) - 4(1) - 9 \rvert}{\sqrt{9+16}} = \frac{\lvert 3 - 4 - 9 \rvert}{5} = \frac{10}{5} = 2$$

---

**Esempio 7 — Triangolo formato da tre rette.**
Le rette $y = x$, $y = -x + 4$, $y = 0$ formano un triangolo. Trovarne i vertici e l'area.

Intersezioni:
- $y=x \cap y=0$: $x=0$ → $A = (0, 0)$
- $y=-x+4 \cap y=0$: $x=4$ → $B = (4, 0)$
- $y=x \cap y=-x+4$: $2x=4 \implies x=2, y=2$ → $C = (2, 2)$

Base $AB = 4$, altezza da $C$ all'asse $x$: $h = 2$.

$$\text{Area} = \frac{1}{2} \cdot 4 \cdot 2 = 4$$

---

## 6. Grafico

```plot
{
  "title": "Rette con diverse pendenze",
  "fn": "2*x - 1",
  "fn2": "-0.5*x + 3",
  "domain": [-3, 5],
  "yDomain": [-4, 8],
  "label1": "y = 2x − 1 (pendenza positiva)",
  "label2": "y = −0.5x + 3 (pendenza negativa)"
}
```

Il grafico mostra due rette con pendenza opposta. Nota come si intersecano: il punto di incrocio si trova risolvendo il sistema $2x - 1 = -0.5x + 3$.

---

## 7. Elemento interattivo

```slider
{
  "title": "Retta y = mx + 1 al variare della pendenza m",
  "fn": "m*x + 1",
  "domain": [-5, 5],
  "yDomain": [-8, 8],
  "pname": "m",
  "pmin": -3,
  "pmax": 3,
  "pdefault": 1,
  "pstep": 0.1,
  "plabel": "Pendenza m",
  "label1": "y = m·x + 1"
}
```

Muovi lo slider: quando $m = 0$ la retta è orizzontale, quando $m > 0$ sale, quando $m < 0$ scende. La retta passa sempre per $(0, 1)$ — il punto fisso è l'intercetta $q = 1$.

---

## 8. Errori comuni

**Errore 1 — Confondere $m$ e $q$ nella formula.**
In $y = mx + q$, $m$ è il coefficiente di $x$ (pendenza), $q$ è il termine costante (intercetta). Molti invertono i due.

**Errore 2 — Pendenza di retta verticale.**
La retta $x = 3$ non ha pendenza definita (non si può scrivere come $y = mx + q$). Scrivere $m = \infty$ è improprio; corretto è dire che la pendenza non esiste.

**Errore 3 — Perpendicolarità: usare lo stesso segno.**
Se $m_1 = 2$, la pendenza perpendicolare è $m_2 = -1/2$, NON $1/2$. Il prodotto deve dare $-1$: $2 \cdot (-1/2) = -1$.

**Errore 4 — Dimenticare il valore assoluto nella distanza.**
$d = \frac{ax_0 + by_0 + c}{\sqrt{a^2+b^2}}$ potrebbe essere negativa; il valore assoluto $\lvert \cdot \rvert$ garantisce $d \geq 0$.

**Errore 5 — Pendenza calcolata "al contrario".**
$m = \frac{x_2 - x_1}{y_2 - y_1}$ invece di $\frac{y_2 - y_1}{x_2 - x_1}$. La pendenza è sempre $\Delta y / \Delta x$.

**Errore 6 — Rette parallele con stessa intercetta.**
Se $m_1 = m_2$ e $q_1 = q_2$ le rette sono coincidenti, non parallele. Parallele richiede $q_1 \neq q_2$.

**Errore 7 — Non semplificare prima di usare la forma generale.**
Se la retta è $2x - 4y + 6 = 0$, si può semplificare a $x - 2y + 3 = 0$. Non è obbligatorio, ma evita errori di calcolo.

---

## 9. Applicazioni reali

**Economia e previsioni lineari.** Il modello lineare è la base della regressione statistica. Se i dati di vendita di un prodotto mostrano andamento approssimativamente lineare, si traccia la "retta di regressione" che meglio li approssima. La pendenza indica il tasso di crescita (vendite extra per ogni mese in più), l'intercetta il livello base.

**Fisica — moto rettilineo uniforme.** Nel grafico spazio-tempo di un oggetto in moto rettilineo uniforme, la posizione è $s(t) = s_0 + v \cdot t$. Questa è esattamente $y = mx + q$ con $y = s$, $x = t$, $m = v$ (velocità) e $q = s_0$ (posizione iniziale). La pendenza della retta nel grafico è la velocità.

**Ingegneria civile — livellamento.** Le strade devono avere pendenza controllata per garantire sicurezza e drenaggio. Una pendenza del 6% significa $m = 0.06$: per ogni 100 metri orizzontali, la strada sale di 6 metri. I tecnici calcolano distanze punto-retta per verificare che i raccordi tra sezioni di strada rispettino i limiti.

---

## 10. Riepilogo tabellare

| Forma | Equazione | Uso tipico |
| --- | --- | --- |
| Esplicita | $y = mx + q$ | Graficare, leggere pendenza e intercetta |
| Implicita/generale | $ax + by + c = 0$ | Calcoli generali, distanza punto-retta |
| Punto-pendenza | $y - y_0 = m(x - x_0)$ | Costruire retta da punto e pendenza |
| Per due punti | $m = \frac{y_2-y_1}{x_2-x_1}$ | Trovare retta da due punti |
| Verticale | $x = a$ | Rette senza pendenza |
| Distanza punto-retta | $\frac{\lvert ax_0+by_0+c \rvert}{\sqrt{a^2+b^2}}$ | Distanza minima |

| Relazione | Condizione |
| --- | --- |
| Parallele | $m_1 = m_2$, $q_1 \neq q_2$ |
| Perpendicolari | $m_1 \cdot m_2 = -1$ |
| Incidenti | $m_1 \neq m_2$ |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Retta per due punti e perpendicolare</summary>

**Testo:** Trovare la retta per $A = (0, 2)$ e $B = (3, 8)$, e la retta perpendicolare ad essa passante per $B$.

**Soluzione:**

$$m = \frac{8-2}{3-0} = \frac{6}{3} = 2$$

Retta $AB$: $y = 2x + 2$.

Pendenza perpendicolare: $m' = -\frac{1}{2}$.

Retta perpendicolare per $B = (3, 8)$:

$$y - 8 = -\frac{1}{2}(x - 3) \implies y = -\frac{1}{2}x + \frac{19}{2}$$

</details>

<details>
<summary>Esercizio 2 — Distanza punto-retta</summary>

**Testo:** Trovare la distanza dal punto $P = (1, -2)$ alla retta $5x + 12y - 10 = 0$.

**Soluzione:**

$$d = \frac{\lvert 5(1) + 12(-2) - 10 \rvert}{\sqrt{25 + 144}} = \frac{\lvert 5 - 24 - 10 \rvert}{\sqrt{169}} = \frac{\lvert -29 \rvert}{13} = \frac{29}{13}$$

</details>

<details>
<summary>Esercizio 3 — Distanza tra rette parallele</summary>

**Testo:** Calcolare la distanza tra le rette parallele $4x - 3y + 12 = 0$ e $4x - 3y - 3 = 0$.

**Soluzione:**

Prendo un punto sulla prima retta: per $x = 0$: $-3y + 12 = 0 \implies y = 4$. Punto $Q = (0, 4)$.

$$d = \frac{\lvert 4(0) - 3(4) - 3 \rvert}{\sqrt{16+9}} = \frac{\lvert 0 - 12 - 3 \rvert}{5} = \frac{15}{5} = 3$$

</details>

<details>
<summary>Esercizio 4 — Retta in forma implicita</summary>

**Testo:** Convertire $3x - 2y + 6 = 0$ in forma esplicita e trovare pendenza e intercetta.

**Soluzione:**

$$3x - 2y + 6 = 0 \implies 2y = 3x + 6 \implies y = \frac{3}{2}x + 3$$

Pendenza: $m = \frac{3}{2}$. Intercetta: $q = 3$.

</details>

<details>
<summary>Esercizio 5 — Tre rette e triangolo</summary>

**Testo:** Le rette $r: y = x + 1$, $s: y = -2x + 7$, $t: x = 0$ formano un triangolo. Trovare i vertici e l'area.

**Soluzione:**

$r \cap t$: $x = 0 \implies y = 1$ → $A = (0, 1)$

$s \cap t$: $x = 0 \implies y = 7$ → $B = (0, 7)$

$r \cap s$: $x + 1 = -2x + 7 \implies 3x = 6 \implies x = 2, y = 3$ → $C = (2, 3)$

Base $AB = 6$ (sull'asse $y$), altezza da $C$ all'asse $y$: $h = 2$.

$$\text{Area} = \frac{1}{2} \cdot 6 \cdot 2 = 6$$

</details>

<details>
<summary>Esercizio 6 — Fascio di rette</summary>

**Testo:** Trovare la retta del fascio per il punto $P = (1, 2)$ che sia parallela alla retta $y = 3x - 5$.

**Soluzione:**

La retta parallela ha la stessa pendenza $m = 3$. Passante per $(1, 2)$:

$$y - 2 = 3(x - 1) \implies y = 3x - 1$$

Verifica: $m = 3$ (parallela ✓), per $x=1$: $y = 3-1 = 2$ (passa per $P$ ✓).

</details>

<details>
<summary>Esercizio 7 — Punto su una retta</summary>

**Testo:** Trovare il valore di $k$ tale che il punto $P = (k, 3k - 1)$ sia a distanza $\sqrt{5}$ dalla retta $x - 2y + 3 = 0$.

**Soluzione:**

$$d = \frac{\lvert k - 2(3k-1) + 3 \rvert}{\sqrt{1 + 4}} = \frac{\lvert k - 6k + 2 + 3 \rvert}{\sqrt{5}} = \frac{\lvert -5k + 5 \rvert}{\sqrt{5}} = \sqrt{5}$$

$$\lvert -5k + 5 \rvert = 5 \implies -5k + 5 = \pm 5$$

$k = 0$ oppure $k = 2$.

</details>

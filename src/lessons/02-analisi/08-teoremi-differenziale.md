---
id: analisi-08-teoremi-differenziale
subject: analisi
topic_it: Calcolo differenziale (una variabile)
topic_en: Differential calculus (one variable)
title_it: Teoremi del calcolo differenziale (Rolle, Lagrange, de l'Hôpital)
title_en: Theorems of differential calculus (Rolle, MVT, L'Hôpital)
level: blue
order: 8
source_book: "J. Stewart, Calculus; W. Rudin, Principles"
source_chapter: "Cap. 4 — Teorema del valor medio"
---

## 1. Intuizione e motivazione

Hai mai guidato su un'autostrada dove il limite è 130 km/h e il tutor (sistema rilevamento velocità media) ti informa che in 100 km hai impiegato 40 minuti? La velocità media è 150 km/h, quindi sei **sicuramente** andato a più di 130 km/h in qualche istante. Non serve sapere esattamente quando o dove: basta sapere che la velocità istantanea ha dovuto uguagliare quella media in almeno un punto.

Questo è esattamente il **Teorema di Lagrange** (o del valore medio): se una funzione raggiunge un certo incremento medio, deve avere in qualche punto interno una derivata uguale a quell'incremento medio. È un risultato di esistenza — non dice dove si trova il punto, solo che esiste.

Da questo teorema derivano strumenti fondamentali: il teorema di Rolle (caso speciale), il teorema di Cauchy (versione parametrica) e la regola di de l'Hôpital per calcolare limiti di forme indeterminate. Tutti questi risultati si dimostrano l'uno dall'altro in una catena logica elegante.

---

## 2. Prerequisiti

- Continuità di una funzione su un intervallo chiuso $[a, b]$
- Derivabilità su un intervallo aperto $(a, b)$
- Teorema di Weierstrass: una funzione continua su $[a,b]$ ha massimo e minimo assoluti
- Teorema di Fermat: se $f$ ha un estremo locale in $c \in (a,b)$ e $f'(c)$ esiste, allora $f'(c) = 0$
- Calcolo delle derivate (regole fondamentali)

---

## 3. Teoria passo-passo

### Teorema di Rolle

**Enunciato:** Sia $f : [a,b] \to \mathbb{R}$ tale che:
1. $f$ è continua su $[a, b]$
2. $f$ è derivabile su $(a, b)$
3. $f(a) = f(b)$

Allora esiste almeno un punto $c \in (a, b)$ tale che $f'(c) = 0$.

**Interpretazione geometrica:** Se una funzione parte e arriva alla stessa quota, deve avere almeno un punto in cui la tangente è orizzontale (massimo o minimo locale, oppure un punto stazionario).

**Dimostrazione (schema):** Per il Teorema di Weierstrass, $f$ raggiunge su $[a,b]$ il suo massimo $M$ e il suo minimo $m$. Se $M = m$, $f$ è costante e $f'(c) = 0$ ovunque. Altrimenti, almeno uno tra $M$ e $m$ è raggiunto in un punto interno $c \in (a,b)$ (non agli estremi, perché $f(a) = f(b)$ non può essere sia massimo che minimo se $M \neq m$). Per il Teorema di Fermat, $f'(c) = 0$.

### Teorema di Lagrange (del valor medio)

**Enunciato:** Sia $f : [a,b] \to \mathbb{R}$ tale che:
1. $f$ è continua su $[a, b]$
2. $f$ è derivabile su $(a, b)$

Allora esiste almeno un punto $c \in (a, b)$ tale che:

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

**Interpretazione:** La derivata istantanea in $c$ è uguale al **rapporto incrementale medio** su $[a,b]$. Geometricamente: esiste un punto in cui la tangente alla curva è parallela alla corda che unisce $(a, f(a))$ a $(b, f(b))$.

**Dimostrazione:** Si costruisce una funzione ausiliare che soddisfi le ipotesi di Rolle. La retta per $(a, f(a))$ e $(b, f(b))$ ha equazione:

$$r(x) = f(a) + \frac{f(b)-f(a)}{b-a}(x-a)$$

Poniamo $g(x) = f(x) - r(x)$. Allora:
- $g$ è continua su $[a,b]$ e derivabile su $(a,b)$ (per linearità)
- $g(a) = f(a) - f(a) = 0$
- $g(b) = f(b) - f(b) = 0$

Per Rolle, esiste $c \in (a,b)$ con $g'(c) = 0$, cioè:

$$f'(c) - \frac{f(b)-f(a)}{b-a} = 0 \implies f'(c) = \frac{f(b)-f(a)}{b-a} \qquad \square$$

### Conseguenze del Teorema di Lagrange

**Corollario 1:** Se $f'(x) = 0$ per ogni $x \in (a,b)$, allora $f$ è costante su $(a,b)$.

**Corollario 2:** Se $f'(x) > 0$ per ogni $x \in (a,b)$, allora $f$ è strettamente crescente su $(a,b)$.

**Corollario 3:** Se $f'(x) < 0$ per ogni $x \in (a,b)$, allora $f$ è strettamente decrescente su $(a,b)$.

Questi corollari sono la base del **criterio della derivata prima** per lo studio della monotonia.

### Teorema di Cauchy (valor medio generalizzato)

**Enunciato:** Siano $f, g : [a,b] \to \mathbb{R}$ continue su $[a,b]$, derivabili su $(a,b)$, con $g'(x) \neq 0$ per ogni $x \in (a,b)$. Allora esiste $c \in (a,b)$ tale che:

$$\frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)}$$

Il teorema di Lagrange è il caso particolare $g(x) = x$.

### Regola di de l'Hôpital

**Enunciato:** Siano $f$ e $g$ derivabili in un intorno di $a$ (escluso eventualmente $a$), con $g'(x) \neq 0$ in tale intorno. Supponiamo che il limite sia una **forma indeterminata** del tipo $\frac{0}{0}$ o $\frac{\infty}{\infty}$. Allora:

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$

purché quest'ultimo limite esista (finito o infinito). La regola vale anche per $a = \pm\infty$.

**Forme indiriminate riconducibili a $0/0$ o $\infty/\infty$:**

- $0 \cdot \infty$: si riscrive come $\frac{f}{1/g}$ o $\frac{g}{1/f}$
- $\infty - \infty$: si porta a denominatore comune
- $0^0$, $1^\infty$, $\infty^0$: si usa $f^g = e^{g \ln f}$

**Derivazione della regola (caso $0/0$, versione semplificata):** Applicando il Teorema di Cauchy su $[a, x]$ per $x \to a$:

$$\frac{f(x)}{g(x)} = \frac{f(x) - f(a)}{g(x) - g(a)} = \frac{f'(c_x)}{g'(c_x)}$$

dove $c_x$ è tra $a$ e $x$. Poiché $c_x \to a$ per $x \to a$, se il limite del rapporto delle derivate esiste, allora:

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)} \qquad \square$$

---

## 4. Derivazioni commentate

### Dimostrazione dettagliata del Teorema di Rolle

**Ipotesi:** $f$ continua su $[a,b]$, derivabile su $(a,b)$, $f(a) = f(b)$.

**Passo 1 — Estremi assoluti:** Per Weierstrass, esistono $m = \min_{[a,b]} f$ e $M = \max_{[a,b]} f$.

**Passo 2 — Caso banale:** Se $m = M$, la funzione è costante: $f(x) = m$ per ogni $x \in [a,b]$. Allora $f'(c) = 0$ per ogni $c \in (a,b)$. La tesi è dimostrata.

**Passo 3 — Caso non banale:** Se $m < M$, almeno uno dei due estremi (diciamo $M$) è raggiunto in un punto $c \in (a,b)$ (non può essere raggiunto solo in $a$ e $b$ con $f(a) = f(b)$, altrimenti anche $m$ lo sarebbe, contraddicendo $m < M$).

**Passo 4 — Fermat:** Il punto $c$ è un massimo interno $\Rightarrow$ è un massimo locale $\Rightarrow$ per il Teorema di Fermat, $f'(c) = 0$. $\square$

---

## 5. Esempi graduati

**Esempio 1 — Verifica di Rolle**

$f(x) = x^2 - 4x + 3$ su $[1, 3]$.

Verifica: $f(1) = 1 - 4 + 3 = 0$, $f(3) = 9 - 12 + 3 = 0$. Le ipotesi di Rolle sono soddisfatte.

$f'(x) = 2x - 4 = 0 \implies x = 2$. Il punto $c = 2 \in (1,3)$ verifica $f'(2) = 0$. ✓

---

**Esempio 2 — Applicazione di Lagrange**

$f(x) = x^3$ su $[0, 2]$.

$$\frac{f(2)-f(0)}{2-0} = \frac{8-0}{2} = 4$$

Imponendo $f'(c) = 3c^2 = 4$: $c = \dfrac{2}{\sqrt{3}} \approx 1.155 \in (0, 2)$. ✓

---

**Esempio 3 — de l'Hôpital per forma $0/0$**

$$\lim_{x \to 0} \frac{\sin x}{x}$$

Forma $0/0$. Applichiamo de l'Hôpital:

$$\lim_{x \to 0} \frac{(\sin x)'}{(x)'} = \lim_{x \to 0} \frac{\cos x}{1} = 1$$

(Risultato classico, qui ottenuto senza sviluppi di Taylor.)

---

**Esempio 4 — de l'Hôpital per forma $\infty/\infty$**

$$\lim_{x \to +\infty} \frac{\ln x}{x}$$

Forma $\infty/\infty$:

$$\lim_{x \to +\infty} \frac{1/x}{1} = \lim_{x \to +\infty} \frac{1}{x} = 0$$

Conclusione: $\ln x$ cresce molto più lentamente di $x$.

---

**Esempio 5 — de l'Hôpital applicato due volte**

$$\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$$

Forma $0/0$. Prima applicazione:

$$\lim_{x \to 0} \frac{e^x - 1}{2x}$$

Ancora $0/0$. Seconda applicazione:

$$\lim_{x \to 0} \frac{e^x}{2} = \frac{1}{2}$$

---

**Esempio 6 — Forma $0 \cdot \infty$**

$$\lim_{x \to 0^+} x \ln x$$

Riscriviamo come $\dfrac{\ln x}{1/x}$, forma $-\infty/+\infty$:

$$\lim_{x \to 0^+} \frac{1/x}{-1/x^2} = \lim_{x \to 0^+} \frac{x^2 \cdot (-1)}{x} = \lim_{x \to 0^+}(-x) = 0$$

---

**Esempio 7 — Forma $1^\infty$**

$$\lim_{x \to 0} (1+x)^{1/x}$$

Scriviamo $(1+x)^{1/x} = e^{\frac{1}{x}\ln(1+x)}$. Calcoliamo l'esponente:

$$\lim_{x \to 0} \frac{\ln(1+x)}{x} \stackrel{\text{H}}{=} \lim_{x \to 0} \frac{1/(1+x)}{1} = 1$$

Quindi il limite è $e^1 = e$. (Definizione del numero di Nepero.)

---

**Esempio 8 — Conseguenza di Lagrange: disuguaglianza**

Dimostrare che $\lvert \sin b - \sin a \rvert \leq \lvert b - a \rvert$ per ogni $a, b \in \mathbb{R}$.

Per Lagrange su $[a,b]$ (o $[b,a]$), esiste $c$ tra $a$ e $b$ tale che:

$$\sin b - \sin a = \cos(c) \cdot (b - a)$$

Quindi $\lvert \sin b - \sin a \rvert = \lvert \cos c \rvert \cdot \lvert b - a \rvert \leq \lvert b - a \rvert$ (poiché $\lvert \cos c \rvert \leq 1$). $\square$

---

## 6. Grafico

```plot
{
  "title": "Teorema di Lagrange: tangente parallela alla corda",
  "fn": "x*x*x - 3*x",
  "fn2": "3*x*x - 3",
  "domain": [-2.5, 2.5],
  "yDomain": [-5, 5],
  "label1": "f(x) = x³ − 3x",
  "label2": "f'(x) = 3x² − 3"
}
```

La curva $f(x) = x^3 - 3x$ e la sua derivata $f'(x) = 3x^2 - 3$. I punti dove $f'(x)$ è uguale al rapporto incrementale medio su un intervallo $[a,b]$ sono i punti $c$ garantiti da Lagrange.

---

## 7. Elemento interattivo

```slider
{
  "title": "Derivata di f(x) = sin(x) + a·x al variare di a",
  "fn": "Math.sin(x) + a*x",
  "fn2": "Math.cos(x) + a",
  "domain": [-6.28, 6.28],
  "yDomain": [-8, 8],
  "pname": "a",
  "pmin": -1,
  "pmax": 1,
  "pdefault": 0,
  "pstep": 0.1,
  "plabel": "Termine lineare a",
  "label1": "f(x) = sin(x) + a·x",
  "label2": "f'(x) = cos(x) + a"
}
```

Variando $a$, la derivata $f'(x) = \cos(x) + a$ si sposta verticalmente. Quando $a = 1$, la derivata non si annulla mai: $f$ diventa strettamente crescente (per il Corollario 2 di Lagrange). Quando $a = -1$, $f'(x) = \cos(x) - 1 \leq 0$: $f$ è debolmente decrescente.

---

## 8. Errori comuni

**Errore 1 — Applicare Rolle senza verificare $f(a) = f(b)$**

Il teorema di Rolle richiede **esplicitamente** che i valori agli estremi siano uguali. Se $f(a) \neq f(b)$, Rolle non si applica: si può ancora applicare Lagrange, ma non c'è garanzia che $f'(c) = 0$.

---

**Errore 2 — Dimenticare la derivabilità nell'intervallo aperto**

$f(x) = \lvert x \rvert$ su $[-1, 1]$: $f(-1) = f(1) = 1$, ma $f$ non è derivabile in $x = 0$. Le ipotesi di Rolle non sono soddisfatte e infatti non esiste $c \in (-1,1)$ con $f'(c) = 0$.

---

**Errore 3 — Usare de l'Hôpital su forme che NON sono indeterminate**

❌ Errato: $\displaystyle\lim_{x \to 0} \frac{\sin x + x}{x^2 + 1}$ — il limite vale $\frac{0+0}{0+1} = 0$ direttamente. Non è una forma indeterminata.

De l'Hôpital si applica **solo** a $0/0$ o $\infty/\infty$.

---

**Errore 4 — Applicare de l'Hôpital anche quando il limite delle derivate non esiste**

La regola dice: il limite del rapporto è uguale al limite del rapporto delle derivate **se quest'ultimo esiste**. Se $\displaystyle\lim_{x \to a}\dfrac{f'(x)}{g'(x)}$ non esiste, non si può concludere nulla sul limite originale con de l'Hôpital (il limite potrebbe comunque esistere).

---

**Errore 5 — Confondere Lagrange con Rolle**

Rolle è un caso speciale di Lagrange (con $f(a) = f(b)$, il rapporto incrementale è zero, quindi $f'(c) = 0$). Lagrange è il caso generale: il punto $c$ garantisce $f'(c) = \text{rapporto incrementale medio}$, non necessariamente zero.

---

**Errore 6 — Credere che il punto $c$ di Lagrange sia unico**

Lagrange garantisce l'**esistenza** di almeno un punto $c$, non l'unicità. Per $f(x) = \sin x$ su $[0, 2\pi]$, esistono più punti $c$ dove la derivata è uguale al rapporto incrementale (che è zero).

---

## 9. Applicazioni reali

**Fisica: stima dell'errore nelle misure.** Se misuriamo una grandezza fisica $f(x)$ con un errore $\Delta x$ sulla variabile, l'errore sulla misura è approssimato da $\Delta f \approx f'(c) \cdot \Delta x$ per un certo $c$ nell'intervallo di incertezza. Questo è il Teorema di Lagrange applicato alla propagazione degli errori. Permette di stimare con rigore l'errore assoluto massimo senza dover calcolare $f$ in ogni punto.

**Analisi numerica: garanzia di convergenza.** Il Teorema di Lagrange è fondamentale per dimostrare la convergenza dei metodi numerici. Per il metodo di Newton–Raphson, si dimostra che l'errore al passo $(n+1)$ è proporzionale al quadrato dell'errore al passo $n$ (convergenza quadratica) usando una versione del Teorema del valore medio. Senza questo teorema, non si potrebbero dare garanzie rigorose sull'accuratezza dell'approssimazione.

**Economia: analisi marginale.** In microeconomia, il Teorema di Lagrange garantisce che se il costo totale $C(q)$ cresce da $C(0)$ a $C(Q)$ producendo $Q$ unità, esiste almeno un livello di produzione $q^* \in (0, Q)$ dove il costo marginale istantaneo $C'(q^*)$ è uguale al costo marginale medio. Questo risultato è usato per localizzare punti di efficienza produttiva.

---

## 10. Riepilogo tabellare

| Teorema | Ipotesi aggiuntive | Conclusione |
| --- | --- | --- |
| Rolle | $f(a) = f(b)$ | $\exists\, c \in (a,b) : f'(c) = 0$ |
| Lagrange | — | $\exists\, c \in (a,b) : f'(c) = \frac{f(b)-f(a)}{b-a}$ |
| Cauchy | $g'(x) \neq 0$ | $\exists\, c : \frac{f'(c)}{g'(c)} = \frac{f(b)-f(a)}{g(b)-g(a)}$ |
| de l'Hôpital | forma $0/0$ o $\infty/\infty$ | $\lim \frac{f}{g} = \lim \frac{f'}{g'}$ (se esiste) |

| Forma indeterminata | Riscrittura per de l'Hôpital |
| --- | --- |
| $0/0$ o $\infty/\infty$ | diretta |
| $0 \cdot \infty$ | $f \cdot g = f / (1/g)$ |
| $\infty - \infty$ | denominatore comune |
| $0^0$, $1^\infty$, $\infty^0$ | $f^g = e^{g \ln f}$ |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Applicazione di Rolle</summary>

**Testo:** Verifica che le ipotesi di Rolle siano soddisfatte per $f(x) = x^3 - x$ su $[-1, 1]$ e trova tutti i punti $c$.

**Soluzione:**

$f(-1) = -1 + 1 = 0$, $f(1) = 1 - 1 = 0$. $f$ è un polinomio, quindi continua e derivabile ovunque. Ipotesi verificate.

$f'(x) = 3x^2 - 1 = 0 \implies x = \pm 1/\sqrt{3} \approx \pm 0.577$.

Entrambi appartengono a $(-1, 1)$. ✓

</details>

<details>
<summary>Esercizio 2 — Punto di Lagrange</summary>

**Testo:** Trova il punto $c$ garantito da Lagrange per $f(x) = \sqrt{x}$ su $[1, 9]$.

**Soluzione:**

$$\frac{f(9) - f(1)}{9 - 1} = \frac{3 - 1}{8} = \frac{1}{4}$$

$f'(x) = \dfrac{1}{2\sqrt{x}}$. Imponendo $f'(c) = 1/4$:

$$\frac{1}{2\sqrt{c}} = \frac{1}{4} \implies \sqrt{c} = 2 \implies c = 4 \in (1, 9). \checkmark$$

</details>

<details>
<summary>Esercizio 3 — de l'Hôpital (forma 0/0)</summary>

**Testo:** Calcola $\displaystyle\lim_{x \to 0} \dfrac{e^x - 1 - x - x^2/2}{x^3}$.

**Soluzione:**

Forma $0/0$. Applichiamo de l'Hôpital tre volte:

$$\lim_{x\to 0}\frac{e^x - 1}{3x^2} \stackrel{\text{H}}{=} \lim_{x\to 0}\frac{e^x}{6x} \stackrel{\text{H}}{=} \lim_{x\to 0}\frac{e^x}{6} = \frac{1}{6}$$

</details>

<details>
<summary>Esercizio 4 — de l'Hôpital (forma ∞/∞)</summary>

**Testo:** Calcola $\displaystyle\lim_{x \to +\infty} \dfrac{x^2}{e^x}$.

**Soluzione:**

Forma $\infty/\infty$. Prima applicazione: $\dfrac{2x}{e^x}$, ancora $\infty/\infty$.

Seconda applicazione: $\dfrac{2}{e^x} \to 0$.

Il risultato è $0$: l'esponenziale cresce molto più velocemente di qualsiasi potenza.

</details>

<details>
<summary>Esercizio 5 — Forma 0·∞</summary>

**Testo:** Calcola $\displaystyle\lim_{x \to +\infty} x \cdot e^{-x}$.

**Soluzione:**

Riscriviamo come $\dfrac{x}{e^x}$, forma $\infty/\infty$:

$$\lim_{x\to+\infty}\frac{1}{e^x} = 0$$

</details>

<details>
<summary>Esercizio 6 — Forma 1^∞</summary>

**Testo:** Calcola $\displaystyle\lim_{x \to +\infty} \left(1 + \dfrac{3}{x}\right)^x$.

**Soluzione:**

Scriviamo $e^{x \ln(1 + 3/x)}$. Per $u = 3/x \to 0$:

$$x \ln\left(1+\frac{3}{x}\right) = \frac{\ln(1+3/x)}{1/x} \stackrel{\text{H}}{=} \frac{\frac{-3/x^2}{1+3/x}}{-1/x^2} = \frac{3}{1+3/x} \to 3$$

Il limite è $e^3$.

</details>

<details>
<summary>Esercizio 7 — Disuguaglianza con Lagrange</summary>

**Testo:** Dimostrare che $e^x \geq 1 + x$ per ogni $x \in \mathbb{R}$.

**Soluzione:**

Sia $f(x) = e^x - 1 - x$. $f(0) = 0$. $f'(x) = e^x - 1$.

Per $x > 0$: $f'(x) > 0$, quindi $f$ è crescente $\Rightarrow f(x) > f(0) = 0$.

Per $x < 0$: $f'(x) < 0$, quindi $f$ è decrescente $\Rightarrow f(x) > f(0) = 0$ (avvicinandosi a 0 da sinistra, $f$ aumenta).

Quindi $f(x) \geq 0$ per ogni $x$, cioè $e^x \geq 1 + x$. $\square$

</details>

<details>
<summary>Esercizio 8 — de l'Hôpital con forma ∞−∞</summary>

**Testo:** Calcola $\displaystyle\lim_{x \to 1} \left(\dfrac{1}{\ln x} - \dfrac{1}{x-1}\right)$.

**Soluzione:**

Forma $\infty - \infty$. Portiamo a denominatore comune:

$$\frac{x-1 - \ln x}{(x-1)\ln x}$$

Forma $0/0$ per $x \to 1$. Numeratore: $(x-1-\ln x)' = 1 - 1/x$. Denominatore: $((x-1)\ln x)' = \ln x + (x-1)/x$.

Per $x \to 1$: numeratore $\to 0$, denominatore $\to 0$. Seconda applicazione: numeratore $(1-1/x)' = 1/x^2$; denominatore $(\ln x + 1 - 1/x)' = 1/x + 1/x^2$.

$$\lim_{x\to 1} \frac{1/x^2}{1/x + 1/x^2} = \frac{1}{1+1} = \frac{1}{2}$$

</details>

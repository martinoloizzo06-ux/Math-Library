---
id: analisi-18-serie-potenze
subject: analisi
topic_it: Successioni e serie
topic_en: Sequences and series
title_it: Serie di potenze
title_en: Power series
level: blue
order: 18
source_book: "W. Rudin, Principles of Mathematical Analysis; MIT OCW 18.01"
source_chapter: "Cap. 3 — Serie di potenze"
stato: da-rielaborare
---

## 1. Intuizione — Un polinomio infinito

Un polinomio è una somma finita $a_0 + a_1 x + a_2 x^2 + \cdots + a_n x^n$. Cosa succede se lasciamo crescere il grado all'infinito? Otteniamo una **serie di potenze**: una somma infinita di monomiali $a_0 + a_1 x + a_2 x^2 + \cdots$

L'idea è potente: molte funzioni "difficili" come $e^x$, $\sin x$, $\ln(1+x)$ possono essere scritte esattamente come serie di potenze. Questo ci permette di calcolarle, integrarle, derivarle, approssimarle con un numero finito di termini.

La domanda cruciale è: **per quali valori di $x$ questa somma infinita converge?** La risposta è elegante: esiste sempre un intervallo $(-R, R)$ — il **raggio di convergenza** — dentro il quale la serie converge assolutamente, e fuori dal quale diverge. Alle estremità può succedere di tutto.

---

## 2. Prerequisiti

- **Serie numeriche** e criteri di convergenza: rapporto, radice, confronto (lezione 17)
- **Convergenza assoluta:** $\sum \lvert a_n \rvert < \infty$
- **Limite superiore** (limsup): il più grande valore limite di una successione
- **Operazioni sui limiti:** somma, prodotto, rapporto di limiti finiti
- **Derivazione e integrazione** di funzioni elementari
- **Continuità:** una funzione continua su un intervallo chiuso è limitata

---

## 3. Teoria — Definizioni formali

### Serie di potenze — definizione

Una **serie di potenze** centrata in $x_0 \in \mathbb{R}$ è:

$$\sum_{n=0}^\infty c_n (x - x_0)^n = c_0 + c_1(x-x_0) + c_2(x-x_0)^2 + \cdots$$

I coefficienti $c_n$ sono numeri reali. Per semplicità, quando $x_0 = 0$:

$$\sum_{n=0}^\infty c_n x^n = c_0 + c_1 x + c_2 x^2 + \cdots$$

### Raggio di convergenza

**Teorema di Hadamard:** Esiste un unico $R \in [0, +\infty]$ tale che:
- Per $\lvert x - x_0 \rvert < R$: la serie converge **assolutamente**
- Per $\lvert x - x_0 \rvert > R$: la serie **diverge**
- Per $\lvert x - x_0 \rvert = R$: comportamento da verificare caso per caso

$R$ si chiama **raggio di convergenza** e si calcola con:

$$\frac{1}{R} = \limsup_{n\to\infty} \sqrt[n]{\lvert c_n \rvert} \qquad \text{(formula di Hadamard)}$$

**In alternativa**, se esiste il limite:

$$R = \lim_{n\to\infty} \left\lvert \frac{c_n}{c_{n+1}} \right\rvert$$

Questa formula si ottiene applicando il criterio del rapporto alla serie numerica per un fissato $x$.

### Operazioni sulle serie di potenze

Dentro l'intervallo di convergenza $(\lvert x \rvert < R)$, la funzione $f(x) = \sum c_n x^n$ è continua, e si può derivare e integrare **termine a termine**:

$$f'(x) = \sum_{n=1}^\infty n\, c_n\, x^{n-1} = c_1 + 2c_2 x + 3c_3 x^2 + \cdots$$

$$\int_0^x f(t)\,dt = \sum_{n=0}^\infty \frac{c_n}{n+1} x^{n+1} = c_0 x + \frac{c_1}{2}x^2 + \frac{c_2}{3}x^3 + \cdots$$

Il raggio di convergenza rimane $R$ dopo derivazione e integrazione.

### Serie di potenze fondamentali

| Funzione | Serie | Raggio |
| --- | --- | --- |
| $\dfrac{1}{1-x}$ | $\displaystyle\sum_{n=0}^\infty x^n$ | $R = 1$ |
| $e^x$ | $\displaystyle\sum_{n=0}^\infty \dfrac{x^n}{n!}$ | $R = +\infty$ |
| $\sin x$ | $\displaystyle\sum_{n=0}^\infty \dfrac{(-1)^n x^{2n+1}}{(2n+1)!}$ | $R = +\infty$ |
| $\cos x$ | $\displaystyle\sum_{n=0}^\infty \dfrac{(-1)^n x^{2n}}{(2n)!}$ | $R = +\infty$ |
| $\ln(1+x)$ | $\displaystyle\sum_{n=1}^\infty \dfrac{(-1)^{n+1}}{n} x^n$ | $R = 1$ |

---

## 4. Derivazione — Formula del raggio via criterio del rapporto

Vogliamo trovare $R$ per $\displaystyle\sum_{n=0}^\infty c_n x^n$ usando il criterio del rapporto applicato alla serie numerica $\sum c_n x^n$ per un $x$ fissato.

Poniamo $a_n = c_n x^n$. Il criterio del rapporto dice: la serie converge se $\displaystyle\lim_{n\to\infty} \left\lvert \frac{a_{n+1}}{a_n} \right\rvert < 1$.

$$\left\lvert \frac{a_{n+1}}{a_n} \right\rvert = \left\lvert \frac{c_{n+1} x^{n+1}}{c_n x^n} \right\rvert = \left\lvert \frac{c_{n+1}}{c_n} \right\rvert \cdot \lvert x \rvert$$

Sia $\ell = \displaystyle\lim_{n\to\infty} \left\lvert \dfrac{c_{n+1}}{c_n} \right\rvert$. La serie converge se $\ell \cdot \lvert x \rvert < 1$, cioè se $\lvert x \rvert < 1/\ell$.

Quindi $R = 1/\ell = \displaystyle\lim_{n\to\infty} \left\lvert \dfrac{c_n}{c_{n+1}} \right\rvert$. $\square$

**Casi speciali:**
- Se $c_n = 0$ definitivamente, $R = +\infty$ (la serie è un polinomio)
- Se $c_{n+1}/c_n \to \infty$, allora $R = 0$ (converge solo in $x=0$)

---

## 5. Esempi risolti

**Esempio 1 — Calcolo del raggio: formula del rapporto**

Trovare il raggio di convergenza di $\displaystyle\sum_{n=1}^\infty \frac{x^n}{n \cdot 2^n}$.

$c_n = \dfrac{1}{n \cdot 2^n}$. Uso la formula:

$$R = \lim_{n\to\infty} \left\lvert \frac{c_n}{c_{n+1}} \right\rvert = \lim_{n\to\infty} \frac{(n+1) \cdot 2^{n+1}}{n \cdot 2^n} = \lim_{n\to\infty} \frac{2(n+1)}{n} = 2$$

Agli estremi: $x=2$: $\sum 1/n$ (armonica, **diverge**). $x=-2$: $\sum (-1)^n/n$ (Leibniz, **converge**).

Intervallo di convergenza: $[-2, 2)$.

---

**Esempio 2 — Raggio infinito**

Trovare il raggio di $\displaystyle\sum_{n=0}^\infty \frac{x^n}{n!}$.

$c_n = 1/n!$:

$$R = \lim_{n\to\infty} \frac{1/n!}{1/(n+1)!} = \lim_{n\to\infty} (n+1) = +\infty$$

La serie converge per ogni $x \in \mathbb{R}$ (è la serie di $e^x$).

---

**Esempio 3 — Derivazione termine a termine**

Trovare la serie di $\dfrac{1}{(1-x)^2}$ a partire da $\dfrac{1}{1-x} = \displaystyle\sum_{n=0}^\infty x^n$.

Derivo termine a termine per $\lvert x \rvert < 1$:

$$\frac{d}{dx} \sum_{n=0}^\infty x^n = \sum_{n=1}^\infty n\, x^{n-1} = \frac{1}{(1-x)^2}$$

Quindi $\dfrac{1}{(1-x)^2} = \displaystyle\sum_{n=0}^\infty (n+1)\, x^n = 1 + 2x + 3x^2 + 4x^3 + \cdots$

---

**Esempio 4 — Integrazione termine a termine: arcotangente**

Trovare la serie di $\arctan x$.

Parto da $\dfrac{1}{1+x^2} = \dfrac{1}{1-(-x^2)} = \displaystyle\sum_{n=0}^\infty (-x^2)^n = \sum_{n=0}^\infty (-1)^n x^{2n}$ per $\lvert x \rvert < 1$.

Integro da $0$ a $x$:

$$\arctan x = \int_0^x \frac{dt}{1+t^2} = \sum_{n=0}^\infty \frac{(-1)^n x^{2n+1}}{2n+1} = x - \frac{x^3}{3} + \frac{x^5}{5} - \cdots$$

Per $x = 1$ (con estensione al bordo): $\arctan 1 = \pi/4 = 1 - 1/3 + 1/5 - \cdots$ (formula di Leibniz-Gregory per $\pi$).

---

**Esempio 5 — Serie centrata in punto diverso da zero**

Trovare la serie di potenze di $e^x$ centrata in $x_0 = 1$.

Scrivo $e^x = e^{x-1+1} = e \cdot e^{x-1}$. Uso la serie di $e^t$ con $t = x-1$:

$$e^x = e \sum_{n=0}^\infty \frac{(x-1)^n}{n!} = \sum_{n=0}^\infty \frac{e}{n!}(x-1)^n$$

---

**Esempio 6 — Calcolo di serie numeriche via serie di potenze**

Calcolare $\displaystyle\sum_{n=0}^\infty \frac{(-1)^n}{2n+1}$.

Dalla serie dell'arcotangente con $x=1$:

$$\arctan(1) = \sum_{n=0}^\infty \frac{(-1)^n}{2n+1} \cdot 1^{2n+1} = \sum_{n=0}^\infty \frac{(-1)^n}{2n+1} = \frac{\pi}{4}$$

---

**Esempio 7 — Raggio via formula di Hadamard**

Trovare il raggio di $\displaystyle\sum_{n=0}^\infty n!\, x^n$.

$c_n = n!$:

$$\frac{1}{R} = \limsup_{n\to\infty} \sqrt[n]{n!}$$

Per la formula di Stirling $n! \sim \sqrt{2\pi n} (n/e)^n$, quindi $\sqrt[n]{n!} \sim n/e \to \infty$.

Quindi $R = 0$: la serie converge **solo per $x=0$**.

---

## 6. Grafico — Approssimazioni di $e^x$ con polinomi di grado crescente

```plot
{"title":"Approssimazioni di e^x (primi termini)","fn":"1 + x + x*x/2 + x*x*x/6","fn2":"Math.exp(x)","domain":[-3,3],"yDomain":[-1,8],"label1":"1+x+x²/2+x³/6","label2":"e^x esatto"}
```

Il polinomio di grado 3 approssima $e^x$ molto bene vicino a $0$, ma si discosta per $\lvert x \rvert$ grande. Aggiungendo più termini l'approssimazione migliora su intervalli sempre più ampi.

---

## 7. Slider — Approssimazioni di $\sin x$ con il parametro come grado

```slider
{"title":"Serie di 1/(1-x): approssimazione con grado variabile","fn":"(1 - Math.pow(a,Math.floor(x)+1))/(1-a)","domain":[0,10],"yDomain":[0,12],"pname":"a","pmin":0.1,"pmax":0.95,"pdefault":0.5,"pstep":0.05,"plabel":"r (ragione)","label1":"Somma parziale S_n"}
```

Variando $r$ vedi come la serie geometrica $\sum r^n$ converge più o meno velocemente: ragione piccola = convergenza rapida, ragione vicina a $1$ = convergenza lenta.

---

## 8. Errori comuni

**Errore 1 — Dimenticare di verificare gli estremi**

❌ "Il raggio è $R=2$, quindi l'intervallo è $(-2,2)$"

✓ Il raggio dice solo cosa succede **strettamente dentro** l'intervallo. Agli estremi $x = \pm R$ bisogna verificare separatamente con altri criteri (Leibniz, confronto, ecc.).

---

**Errore 2 — Usare la formula del rapporto con coefficienti nulli**

❌ Per $\sum x^{2n}$ calcolare $R = \lim c_n / c_{n+1}$ dove $c_n = 1$ per tutti gli $n$

✓ La serie $\sum x^{2n}$ ha $c_{2k}=1$ e $c_{2k+1}=0$. Bisogna usare la formula di Hadamard o riscrivere: è una geometrica in $x^2$, che converge per $\lvert x \rvert^2 < 1$, cioè $\lvert x \rvert < 1$, $R=1$.

---

**Errore 3 — Perdere il raggio dopo derivazione**

❌ "Dopo aver derivato la serie, il raggio cambia"

✓ La derivazione termine a termine **non cambia il raggio di convergenza**. Cambia solo il comportamento agli estremi.

---

**Errore 4 — Confondere la serie con il polinomio**

❌ "La serie di Taylor di $e^x$ è $1 + x + x^2/2$"

✓ Quello è il polinomio di Taylor di grado 2, non la serie. La serie di $e^x$ è la somma infinita $\sum x^n/n!$, che converge esattamente a $e^x$ per ogni $x$.

---

**Errore 5 — Derivare fuori dall'intervallo di convergenza**

❌ Derivare $\sum x^n = 1/(1-x)$ in $x=2$

✓ Le operazioni termine a termine (derivazione, integrazione) sono valide **solo per $\lvert x \rvert < R$**. Fuori dall'intervallo la serie non converge.

---

**Errore 6 — Sbagliare l'indice di partenza nella derivazione**

❌ $\dfrac{d}{dx} \sum_{n=0}^\infty c_n x^n = \sum_{n=0}^\infty n\, c_n x^{n-1}$

✓ Il termine $n=0$ ha derivata nulla ($c_0 \cdot 0 \cdot x^{-1} = 0$), quindi si può scrivere correttamente $\sum_{n=1}^\infty n\, c_n x^{n-1}$.

---

## 9. Applicazioni reali

**Calcolo scientifico e funzioni trascendenti.** I calcolatori e i computer non "conoscono" $\sin x$ o $e^x$ in forma chiusa: le calcolano troncando la serie di potenze al numero di termini necessario per la precisione richiesta. Ad esempio, per calcolare $\sin(0.1)$ con 15 cifre significative bastano pochissimi termini della serie di McLaurin, perché l'errore decresce come $(0.1)^{2n+3}/(2n+3)!$ — rapidissimamente.

**Risoluzione di equazioni differenziali.** Molte equazioni differenziali ordinarie non hanno soluzioni esprimibili in forma chiusa. Il metodo delle serie di potenze cerca la soluzione come $y(x) = \sum_{n=0}^\infty c_n x^n$, sostituisce nell'equazione, e determina i coefficienti $c_n$ per ricorrenza. Ad esempio, l'equazione di Bessel $x^2 y'' + x y' + (x^2 - \nu^2)y = 0$ ha soluzioni date da serie di potenze (funzioni di Bessel), fondamentali in fisica delle onde e in meccanica quantistica.

**Crittografia e teoria dei codici.** Le funzioni generatrici, che sono serie di potenze formali, sono uno strumento fondamentale nella combinatoria e nella teoria dei codici correttori di errori. Il coefficiente $[x^n]$ di una funzione generatrice conta oggetti combinatori: per esempio, $1/(1-x)^k = \sum \binom{n+k-1}{k-1} x^n$ genera i coefficienti binomiali generalizzati, usati nella codifica di segnali digitali.

---

## 10. Riepilogo

| Oggetto | Formula/Risultato |
| --- | --- |
| Serie di potenze | $\sum_{n=0}^\infty c_n (x-x_0)^n$ |
| Raggio (Hadamard) | $1/R = \limsup \sqrt[n]{\lvert c_n \rvert}$ |
| Raggio (rapporto) | $R = \lim \lvert c_n / c_{n+1} \rvert$ |
| Convergenza assoluta | Per $\lvert x - x_0 \rvert < R$ |
| Divergenza | Per $\lvert x - x_0 \rvert > R$ |
| Estremi | Da verificare caso per caso |
| Derivazione | $\left(\sum c_n x^n\right)' = \sum n\, c_n x^{n-1}$, stesso $R$ |
| Integrazione | $\int \sum c_n x^n = \sum \frac{c_n}{n+1} x^{n+1}$, stesso $R$ |

---

## 11. Esercizi

<details>
<summary>Esercizio 1 — Raggio di convergenza</summary>

Trovare il raggio e l'intervallo di convergenza di $\displaystyle\sum_{n=0}^\infty \frac{(x-2)^n}{3^n \sqrt{n+1}}$.

**Soluzione:**

$c_n = \dfrac{1}{3^n \sqrt{n+1}}$, centrata in $x_0 = 2$.

$$R = \lim_{n\to\infty} \frac{c_n}{c_{n+1}} = \lim_{n\to\infty} \frac{3^{n+1}\sqrt{n+2}}{3^n \sqrt{n+1}} = 3 \lim_{n\to\infty} \sqrt{\frac{n+2}{n+1}} = 3$$

Estremi: $x=5$ ($x-2=3$): $\sum \dfrac{1}{\sqrt{n+1}}$ diverge ($p=1/2$). $x=-1$ ($x-2=-3$): $\sum \dfrac{(-1)^n}{\sqrt{n+1}}$ converge (Leibniz).

Intervallo: $[-1, 5)$.

</details>

<details>
<summary>Esercizio 2 — Serie da derivazione</summary>

Ricavare la serie di $\dfrac{x}{(1-x)^2}$ per $\lvert x \rvert < 1$.

**Soluzione:**

Da $\dfrac{1}{(1-x)^2} = \displaystyle\sum_{n=0}^\infty (n+1)x^n$ (derivata di $\sum x^n$):

$$\frac{x}{(1-x)^2} = x \cdot \sum_{n=0}^\infty (n+1)x^n = \sum_{n=0}^\infty (n+1)x^{n+1} = \sum_{n=1}^\infty n\, x^n$$

</details>

<details>
<summary>Esercizio 3 — Serie da integrazione</summary>

Trovare la serie di $\ln(1+x)$ integrando $\dfrac{1}{1+x}$.

**Soluzione:**

$\dfrac{1}{1+x} = \displaystyle\sum_{n=0}^\infty (-1)^n x^n$ per $\lvert x \rvert < 1$.

$$\ln(1+x) = \int_0^x \frac{dt}{1+t} = \sum_{n=0}^\infty \frac{(-1)^n x^{n+1}}{n+1} = \sum_{n=1}^\infty \frac{(-1)^{n+1}}{n} x^n$$

All'estremo $x=1$: $\ln 2 = 1 - 1/2 + 1/3 - 1/4 + \cdots$ (converge per Leibniz).

</details>

<details>
<summary>Esercizio 4 — Calcolo di somma tramite serie nota</summary>

Calcolare $\displaystyle\sum_{n=0}^\infty \frac{(-1)^n}{3^n}$.

**Soluzione:**

È una serie geometrica con $x = -1/3$:

$$\sum_{n=0}^\infty \left(-\frac{1}{3}\right)^n = \frac{1}{1-(-1/3)} = \frac{1}{4/3} = \frac{3}{4}$$

</details>

<details>
<summary>Esercizio 5 — Raggio con coefficienti speciali</summary>

Trovare il raggio di $\displaystyle\sum_{n=0}^\infty n^2 x^n$.

**Soluzione:**

$c_n = n^2$.

$$R = \lim_{n\to\infty} \frac{n^2}{(n+1)^2} = \lim_{n\to\infty} \left(\frac{n}{n+1}\right)^2 = 1$$

</details>

<details>
<summary>Esercizio 6 — Valore numerico da serie di potenze</summary>

Usando la serie $e^x = \displaystyle\sum_{n=0}^\infty \dfrac{x^n}{n!}$, calcolare $e^{-1}$ come serie e verificare che i primi 5 termini danno un'approssimazione di $1/e \approx 0.3679$.

**Soluzione:**

$e^{-1} = \displaystyle\sum_{n=0}^\infty \dfrac{(-1)^n}{n!} = 1 - 1 + \dfrac{1}{2} - \dfrac{1}{6} + \dfrac{1}{24} - \dfrac{1}{120} + \cdots$

Primi 5 termini (fino a $n=4$): $1 - 1 + 0.5 - 0.1\overline{6} + 0.041\overline{6} = 0.375$.

Aggiungendo $n=5$: $0.375 - 1/120 \approx 0.3667$. Il valore esatto è $1/e \approx 0.36788$. La convergenza è rapida.

</details>

<details>
<summary>Esercizio 7 — Raggio con formula di Hadamard</summary>

Trovare il raggio di $\displaystyle\sum_{n=0}^\infty \dfrac{x^n}{2^n + 3^n}$.

**Soluzione:**

$c_n = \dfrac{1}{2^n + 3^n}$. Per $n$ grande: $2^n + 3^n \sim 3^n$, quindi $\sqrt[n]{c_n} \sim \sqrt[n]{1/3^n} = 1/3$.

Formalmente: $\limsup \sqrt[n]{c_n} = \displaystyle\lim_{n\to\infty} \dfrac{1}{\sqrt[n]{2^n + 3^n}} = \dfrac{1}{3}$.

Quindi $R = 3$.

</details>

<details>
<summary>Esercizio 8 — Serie con salto di indice</summary>

Trovare il raggio di $\displaystyle\sum_{n=0}^\infty \dfrac{x^{2n}}{4^n}$.

**Soluzione:**

Scrivo $x^{2n} = (x^2)^n$:

$$\sum_{n=0}^\infty \frac{x^{2n}}{4^n} = \sum_{n=0}^\infty \left(\frac{x^2}{4}\right)^n$$

È una serie geometrica in $x^2/4$. Converge per $\lvert x^2/4 \rvert < 1$, cioè $\lvert x \rvert^2 < 4$, cioè $\lvert x \rvert < 2$. Quindi $R = 2$.

</details>

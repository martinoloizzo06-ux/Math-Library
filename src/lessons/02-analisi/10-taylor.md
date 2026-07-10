---
id: analisi-10-taylor
subject: analisi
topic_it: Calcolo differenziale (una variabile)
topic_en: Differential calculus (one variable)
title_it: Polinomio di Taylor e sviluppi di MacLaurin
title_en: Taylor polynomial and MacLaurin expansions
level: blue
order: 10
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 11 — Serie di Taylor"
---

## 1. Intuizione e motivazione

Quanto è difficile calcolare $\sin(0.1)$ a mano? O $e^{0.5}$? Le funzioni trascendenti non si calcolano con le quattro operazioni. Eppure i calcolatori le calcolano in microsecondi — come?

La risposta è il **polinomio di Taylor**: ogni funzione "liscia" (infinitamente derivabile) può essere approssimata localmente con un polinomio, che invece si calcola facilmente. Un polinomio di grado 5 approssima $\sin(0.1)$ con errore inferiore a $10^{-15}$. La calcolatrice usa esattamente questa strategia.

Ma Taylor non serve solo per i numeri. Serve per capire come si comporta una funzione vicino a un punto: se cresce, se ha un minimo, quanto velocemente tende a zero. Permette di confrontare infinitesimi, calcolare limiti di forme indeterminate, e risolvere equazioni differenziali in modo approssimato. È uno degli strumenti più potenti dell'intera analisi matematica.

L'idea è semplice: costruire un polinomio $T_n(x)$ che abbia le stesse derivate di $f$ nel punto $a$, fino all'ordine $n$. Più alto è $n$, migliore è l'approssimazione — almeno vicino ad $a$.

---

## 2. Prerequisiti

- Derivate di ordine superiore: $f^{(n)}(x) = \dfrac{d^n f}{dx^n}$
- Derivate delle funzioni elementari: $e^x$, $\sin x$, $\cos x$, $\ln x$, $(1+x)^\alpha$
- Fattoriale: $n! = 1 \cdot 2 \cdot 3 \cdots n$, con $0! = 1$
- Infinitesimi e simbolo $o(\cdot)$ (o-piccolo)
- Limiti e forme indeterminate

---

## 3. Teoria passo-passo

### Costruzione del polinomio di Taylor

**Idea:** vogliamo un polinomio $T_n(x)$ di grado $n$ tale che:

$$T_n^{(k)}(a) = f^{(k)}(a) \qquad \text{per } k = 0, 1, 2, \ldots, n$$

cioè che abbia le stesse derivate di $f$ nel punto $a$ fino all'ordine $n$.

Un polinomio generale di grado $n$ centrato in $a$ è:

$$T_n(x) = c_0 + c_1(x-a) + c_2(x-a)^2 + \cdots + c_n(x-a)^n$$

Derivando $k$ volte e valutando in $x = a$, otteniamo $T_n^{(k)}(a) = k!\,c_k$. Imponendo $T_n^{(k)}(a) = f^{(k)}(a)$:

$$c_k = \frac{f^{(k)}(a)}{k!}$$

**Formula di Taylor di ordine $n$ centrata in $a$:**

$$T_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x-a)^k = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \cdots + \frac{f^{(n)}(a)}{n!}(x-a)^n$$

Ogni termine $\dfrac{f^{(k)}(a)}{k!}(x-a)^k$ porta l'informazione della derivata $k$-esima di $f$ nel punto $a$: il termine costante è il valore, il termine lineare è la pendenza, il quadratico la curvatura, e così via.

### Il resto (errore di approssimazione)

La differenza tra $f(x)$ e il suo polinomio di Taylor si chiama **resto** di ordine $n$:

$$f(x) = T_n(x) + R_n(x)$$

**Resto di Lagrange:** Se $f$ è $(n+1)$ volte derivabile su $[a, x]$, esiste $\xi$ tra $a$ e $x$ tale che:

$$R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}$$

Questa formula permette di **stimare l'errore**: se $\lvert f^{(n+1)}(\xi) \rvert \leq M$ per ogni $\xi$ nell'intervallo, allora:

$$\lvert R_n(x) \rvert \leq \frac{M}{(n+1)!}\lvert x-a \rvert^{n+1}$$

**Resto di Peano (formula asintotica):** Per $x \to a$:

$$f(x) = T_n(x) + o((x-a)^n)$$

Il simbolo $o((x-a)^n)$ significa che il resto è trascurabile rispetto a $(x-a)^n$ per $x \to a$. Questa versione è usata nel calcolo di limiti.

### Caso speciale: sviluppi di MacLaurin

Quando il centro è $a = 0$, la formula si semplifica:

$$f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(0)}{k!}x^k + o(x^n)$$

### Sviluppi fondamentali di MacLaurin

Gli sviluppi seguenti valgono per $x \to 0$ e sono fondamentali:

$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots + \frac{x^n}{n!} + o(x^n)$$

$$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots + (-1)^{k}\frac{x^{2k+1}}{(2k+1)!} + o(x^{2k+2})$$

$$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots + (-1)^{k}\frac{x^{2k}}{(2k)!} + o(x^{2k+1})$$

$$\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots + (-1)^{n-1}\frac{x^n}{n} + o(x^n)$$

$$(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2!}x^2 + \cdots + \binom{\alpha}{k}x^k + o(x^k)$$

dove $\binom{\alpha}{k} = \dfrac{\alpha(\alpha-1)\cdots(\alpha-k+1)}{k!}$.

Casi particolari di $(1+x)^\alpha$:

$$\frac{1}{1+x} = 1 - x + x^2 - x^3 + \cdots \qquad (\alpha = -1)$$

$$\sqrt{1+x} = 1 + \frac{x}{2} - \frac{x^2}{8} + \cdots \qquad (\alpha = 1/2)$$

### Ordine dell'infinitesimo e confronto

Una funzione $f(x) \to 0$ per $x \to 0$ è un **infinitesimo di ordine $k$** se:

$$\lim_{x \to 0} \frac{f(x)}{x^k} = L \neq 0$$

Gli sviluppi di MacLaurin permettono di identificare immediatamente l'ordine dell'infinitesimo guardando il primo termine non nullo.

Esempi:
- $\sin x \sim x$ (ordine 1, cioè primo infinitesimo) per $x \to 0$
- $1 - \cos x \sim \dfrac{x^2}{2}$ (ordine 2) per $x \to 0$
- $\ln(1+x) \sim x$ (ordine 1) per $x \to 0$

---

## 4. Derivazioni commentate

### Calcolo delle derivate di $\sin x$ per lo sviluppo di MacLaurin

Dobbiamo calcolare $f^{(k)}(0)$ per $f(x) = \sin x$:

| $k$ | $f^{(k)}(x)$ | $f^{(k)}(0)$ |
| --- | --- | --- |
| 0 | $\sin x$ | $0$ |
| 1 | $\cos x$ | $1$ |
| 2 | $-\sin x$ | $0$ |
| 3 | $-\cos x$ | $-1$ |
| 4 | $\sin x$ | $0$ |

Il pattern si ripete con periodo 4. I termini non nulli sono per $k = 1, 3, 5, \ldots$ (indici dispari), con segni alternati $+, -, +, \ldots$. Quindi:

$$\sin x = x - \frac{x^3}{6} + \frac{x^5}{120} - \frac{x^7}{5040} + \cdots$$

### Stima dell'errore per $\sin x$

Usiamo il resto di Lagrange per stimare l'errore nell'approssimazione $\sin x \approx x$ per $x \in [0, 0.1]$.

Il primo termine trascurato è $x^3/6$. La derivata quarta di $\sin x$ è $\sin x$, che in $[0, 0.1]$ è $\leq \sin(0.1) < 0.1$. Quindi:

$$\lvert R_2(x) \rvert \leq \frac{0.1}{3!} \cdot (0.1)^3 = \frac{0.001}{6} \approx 1.67 \times 10^{-4}$$

Usando invece il termine $x - x^3/6$, l'errore è dell'ordine di $x^5/120 < 10^{-6}$.

---

## 5. Esempi graduati

**Esempio 1 — Polinomio di Taylor di grado 2**

$f(x) = e^x$ centrato in $a = 0$, fino al secondo ordine.

$f(0) = 1$, $f'(0) = 1$, $f''(0) = 1$.

$$T_2(x) = 1 + x + \frac{x^2}{2}$$

Errore in $x = 0.5$: $e^{0.5} \approx 1.6487$, $T_2(0.5) = 1 + 0.5 + 0.125 = 1.625$. Errore $\approx 0.024$.

---

**Esempio 2 — Sviluppo intorno a $a \neq 0$**

$f(x) = \ln x$ centrato in $a = 1$. Calcoliamo le derivate in $x = 1$:

$f(1) = 0$, $f'(1) = 1$, $f''(1) = -1$, $f'''(1) = 2$.

$$T_3(x) = (x-1) - \frac{(x-1)^2}{2} + \frac{(x-1)^3}{3}$$

Ponendo $h = x - 1$ si ottiene: $\ln(1+h) = h - h^2/2 + h^3/3 - \cdots$ (MacLaurin di $\ln(1+x)$). ✓

---

**Esempio 3 — Calcolo di un limite con Taylor**

$$\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$$

Sviluppiamo $e^x = 1 + x + x^2/2 + o(x^2)$:

$$\frac{e^x - 1 - x}{x^2} = \frac{x^2/2 + o(x^2)}{x^2} = \frac{1}{2} + o(1) \to \frac{1}{2}$$

---

**Esempio 4 — Confronto tra infinitesimi**

Confrontare $\sin x$ e $\arctan x$ per $x \to 0$.

$\sin x = x - x^3/6 + o(x^3)$. $\arctan x = x - x^3/3 + o(x^3)$.

$$\frac{\sin x}{\arctan x} = \frac{x - x^3/6 + o(x^3)}{x - x^3/3 + o(x^3)} = \frac{1 - x^2/6 + o(x^2)}{1 - x^2/3 + o(x^2)} \to 1$$

I due infinitesimi sono equivalenti: $\sin x \sim \arctan x$ per $x \to 0$.

---

**Esempio 5 — Limite forma indeterminata con Taylor**

$$\lim_{x \to 0} \frac{1 - \cos x}{x^2}$$

$\cos x = 1 - x^2/2 + o(x^2)$, quindi $1 - \cos x = x^2/2 + o(x^2)$:

$$\frac{1-\cos x}{x^2} = \frac{x^2/2 + o(x^2)}{x^2} = \frac{1}{2} + o(1) \to \frac{1}{2}$$

---

**Esempio 6 — Limite di ordine superiore**

$$\lim_{x \to 0} \frac{x - \sin x}{x^3}$$

$\sin x = x - x^3/6 + o(x^3)$, quindi $x - \sin x = x^3/6 + o(x^3)$:

$$\frac{x - \sin x}{x^3} = \frac{x^3/6 + o(x^3)}{x^3} = \frac{1}{6} + o(1) \to \frac{1}{6}$$

---

**Esempio 7 — Classificazione di un punto critico con Taylor**

$f(x) = 1 - \cos x$ ha un punto critico in $x = 0$ (poiché $f'(0) = \sin 0 = 0$). Ma $f''(0) = \cos 0 = 1 > 0$: minimo.

Confermato dallo sviluppo: $f(x) = x^2/2 - x^4/24 + \cdots \geq 0$ vicino a $x = 0$, con uguaglianza solo in $x = 0$.

---

**Esempio 8 — Approssimazione numerica**

Calcolare $\sqrt{1.04}$ con errore inferiore a $10^{-4}$.

Usiamo $(1+x)^{1/2}$ con $x = 0.04$:

$$\sqrt{1.04} \approx 1 + \frac{0.04}{2} - \frac{(0.04)^2}{8} = 1 + 0.02 - 0.0002 = 1.0198$$

Valore esatto: $1.01980...$. Errore $< 10^{-6}$. ✓

---

## 6. Grafico

```plot
{
  "title": "sin(x) vs polinomio di MacLaurin di ordine 3: x − x³/6",
  "fn": "Math.sin(x)",
  "fn2": "x - x*x*x/6",
  "domain": [-4, 4],
  "yDomain": [-2, 2],
  "label1": "sin(x)",
  "label2": "T₃(x) = x − x³/6"
}
```

Il polinomio $T_3(x) = x - x^3/6$ approssima perfettamente $\sin x$ vicino a $x = 0$, ma si discosta rapidamente per $\lvert x \rvert > 1$. Per migliorare l'approssimazione su un intervallo più ampio, occorre aumentare il grado $n$.

---

## 7. Elemento interattivo

```slider
{
  "title": "Sviluppo di e^(a·x) al variare di a: f(x) ≈ 1 + a·x + (a·x)²/2",
  "fn": "Math.exp(a*x)",
  "fn2": "1 + a*x + (a*x)*(a*x)/2",
  "domain": [-3, 3],
  "yDomain": [-1, 10],
  "pname": "a",
  "pmin": 0.2,
  "pmax": 2,
  "pdefault": 1,
  "pstep": 0.1,
  "plabel": "Parametro a",
  "label1": "e^(a·x)",
  "label2": "T₂(x) = 1 + ax + (ax)²/2"
}
```

Per $a$ piccolo, il polinomio di Taylor di grado 2 approssima bene $e^{ax}$ su un intervallo più ampio. Per $a$ grande, la funzione cresce più rapidamente e l'approssimazione si deteriora prima. La regola della catena spiega perché: lo sviluppo di $e^{ax}$ si ottiene sostituendo $x \to ax$ in quello di $e^x$.

---

## 8. Errori comuni

**Errore 1 — Dimenticare il denominatore fattoriale**

❌ Errato: $e^x \approx 1 + x + x^2 + x^3$

✅ Corretto: $e^x \approx 1 + x + \dfrac{x^2}{2!} + \dfrac{x^3}{3!} = 1 + x + \dfrac{x^2}{2} + \dfrac{x^3}{6}$

---

**Errore 2 — Confondere il punto di sviluppo con la variabile**

Lo sviluppo $\ln(1+x) = x - x^2/2 + \cdots$ vale attorno ad $a = 0$. Se vogliamo sviluppare $\ln(2+x)$ attorno a $x = 0$, scriviamo $\ln(2+x) = \ln 2 + \ln(1 + x/2)$ e poi sviluppiamo $\ln(1+u)$ con $u = x/2$.

---

**Errore 3 — Usare un ordine insufficiente nel limite**

Se il numeratore e il denominatore hanno lo stesso ordine di infinitesimo, l'errore $o(x^n)$ deve essere di ordine strettamente superiore. Se sviluppiamo fino all'ordine sbagliato, otteniamo $0/0$ invece del limite.

Esempio: per $\dfrac{x - \sin x}{x^3}$, sviluppare $\sin x \approx x$ dà $0/0$. Bisogna arrivare al termine $x^3/6$.

---

**Errore 4 — Sbagliare i segni nelle serie di seno e coseno**

$\sin x = x - x^3/6 + x^5/120 - \cdots$ (segni alternati, primo termine positivo).

$\cos x = 1 - x^2/2 + x^4/24 - \cdots$ (segni alternati, primo termine positivo).

Un modo per ricordare: la derivata dello sviluppo di $\cos x$ deve dare quello di $-\sin x$, e viceversa.

---

**Errore 5 — Applicare Taylor fuori dal raggio di convergenza**

Lo sviluppo $\ln(1+x) = x - x^2/2 + x^3/3 - \cdots$ converge solo per $\lvert x \rvert \leq 1$ (con $x \neq -1$). Per $x = 2$, la serie non converge a $\ln 3$: si può usare $\ln 3 = \ln(4/4 \cdot 3) = \ln 4 - \ln(4/3)$ e sviluppare $\ln(1 - 1/4)$.

---

**Errore 6 — Non semplificare prima di applicare Taylor**

Per calcolare $\displaystyle\lim_{x\to 0}\dfrac{\sqrt{1+x}-1}{x}$, non serve sviluppare $\sqrt{1+x}$ fino all'ordine 3. Basta il termine lineare: $\sqrt{1+x} \approx 1 + x/2$, quindi il limite è $1/2$. Sviluppare più del necessario complica i calcoli senza migliorare il risultato.

---

## 9. Applicazioni reali

**Fisica: approssimazioni in meccanica quantistica e relativistica.** In fisica, gli sviluppi di Taylor sono onnipresenti nelle approssimazioni. L'energia cinetica relativistica $E = mc^2/\sqrt{1-v^2/c^2}$ sviluppata per $v \ll c$ dà $E \approx mc^2 + mv^2/2 + \cdots$: il primo termine è l'energia a riposo di Einstein, il secondo è la classica energia cinetica. In meccanica quantistica, le perturbazioni all'hamiltoniano vengono trattate con espansioni simili a serie di Taylor nello spazio degli stati.

**Analisi numerica: metodi di integrazione e di risoluzione di equazioni.** Il metodo di Eulero per le equazioni differenziali è basato sull'approssimazione del primo ordine di Taylor: $y(t+h) \approx y(t) + h\,y'(t)$. I metodi di Runge-Kutta usano approssimazioni di ordine superiore per aumentare la precisione. Lo sviluppo di Taylor è anche alla base dei metodi di quadratura numerica (regola dei trapezi, di Simpson), che approssimano l'integrale con polinomi di grado crescente.

**Ingegneria del segnale: linearizzazione di sistemi non lineari.** Un sistema di controllo con una non-linearità $f(u)$ viene spesso linearizzato attorno al punto di lavoro $u_0$: $f(u) \approx f(u_0) + f'(u_0)(u - u_0)$. Questo è il primo ordine di Taylor. Se la linearizzazione non è sufficiente, si usano termini di ordine superiore per modellare effetti non lineari (saturazione, bistabilità). L'intero campo del controllo lineare si basa su questa approssimazione.

---

## 10. Riepilogo tabellare

| Funzione | Sviluppo di MacLaurin | Primo termine |
| --- | --- | --- |
| $e^x$ | $\displaystyle\sum_{k=0}^{n}\frac{x^k}{k!} + o(x^n)$ | $1 + x$ |
| $\sin x$ | $\displaystyle x - \frac{x^3}{6} + \frac{x^5}{120} + o(x^5)$ | $x$ |
| $\cos x$ | $\displaystyle 1 - \frac{x^2}{2} + \frac{x^4}{24} + o(x^4)$ | $1$ |
| $\ln(1+x)$ | $\displaystyle x - \frac{x^2}{2} + \frac{x^3}{3} + o(x^3)$ | $x$ |
| $(1+x)^\alpha$ | $\displaystyle 1 + \alpha x + \frac{\alpha(\alpha-1)}{2}x^2 + o(x^2)$ | $1 + \alpha x$ |
| $\dfrac{1}{1+x}$ | $\displaystyle 1 - x + x^2 - x^3 + o(x^3)$ | $1 - x$ |
| $\arctan x$ | $\displaystyle x - \frac{x^3}{3} + \frac{x^5}{5} + o(x^5)$ | $x$ |

| Concetto | Formula |
| --- | --- |
| Formula di Taylor | $f(x) = \displaystyle\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k + R_n(x)$ |
| Resto di Lagrange | $R_n(x) = \dfrac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}$ |
| Resto di Peano | $R_n(x) = o((x-a)^n)$ per $x \to a$ |
| Stima errore | $\lvert R_n \rvert \leq \dfrac{M}{(n+1)!}\lvert x-a \rvert^{n+1}$ |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Scrittura del polinomio di Taylor</summary>

**Testo:** Scrivi il polinomio di MacLaurin di $f(x) = \cos x$ fino all'ordine 6.

**Soluzione:**

Derivate in $x = 0$: $f(0)=1$, $f''(0)=-1$, $f^{(4)}(0)=1$, $f^{(6)}(0)=-1$ (tutti i termini dispari sono 0).

$$T_6(x) = 1 - \frac{x^2}{2} + \frac{x^4}{24} - \frac{x^6}{720}$$

</details>

<details>
<summary>Esercizio 2 — Limite con Taylor (forma 0/0)</summary>

**Testo:** Calcola $\displaystyle\lim_{x \to 0} \frac{\ln(1+x) - x}{x^2}$.

**Soluzione:**

$\ln(1+x) = x - x^2/2 + x^3/3 + o(x^3)$. Quindi $\ln(1+x) - x = -x^2/2 + x^3/3 + o(x^3)$.

$$\frac{\ln(1+x)-x}{x^2} = \frac{-x^2/2 + o(x^2)}{x^2} = -\frac{1}{2} + o(1) \to -\frac{1}{2}$$

</details>

<details>
<summary>Esercizio 3 — Confronto infinitesimi</summary>

**Testo:** Determina l'ordine dell'infinitesimo di $f(x) = e^x - 1 - x - x^2/2$ per $x \to 0$.

**Soluzione:**

$e^x = 1 + x + x^2/2 + x^3/6 + o(x^3)$. Quindi:

$$f(x) = \frac{x^3}{6} + o(x^3)$$

$f(x)$ è un infinitesimo di **ordine 3** per $x \to 0$: $f(x) \sim x^3/6$.

</details>

<details>
<summary>Esercizio 4 — Sviluppo di una funzione composta</summary>

**Testo:** Calcola lo sviluppo di MacLaurin di $f(x) = e^{\sin x}$ fino all'ordine 3.

**Soluzione:**

$\sin x = x - x^3/6 + o(x^3)$. Poniamo $u = \sin x$:

$$e^u = 1 + u + \frac{u^2}{2} + \frac{u^3}{6} + o(u^3)$$

Sostituendo (e tenendo solo i termini fino all'ordine 3 in $x$):

$$e^{\sin x} = 1 + x - \frac{x^3}{6} + \frac{x^2}{2} + \frac{x^3}{6} + o(x^3) = 1 + x + \frac{x^2}{2} + o(x^3)$$

(I termini cubici si cancellano: il primo di $u^3/6$ è $x^3/6$, e il contributo $u^2/2$ al terzo ordine è $x^3/2 \cdot (-1/6) \cdot 2 = -x^3/6$, che si sommano a dare $0$.)

</details>

<details>
<summary>Esercizio 5 — Approssimazione numerica con stima dell'errore</summary>

**Testo:** Approssima $e^{0.1}$ usando il polinomio di MacLaurin di grado 3 e stima l'errore.

**Soluzione:**

$T_3(0.1) = 1 + 0.1 + (0.1)^2/2 + (0.1)^3/6 = 1 + 0.1 + 0.005 + 0.000167 = 1.105167$.

Stima del resto: $\lvert R_3(0.1) \rvert \leq \dfrac{e^{0.1}}{4!}(0.1)^4 < \dfrac{1.11}{24} \cdot 10^{-4} \approx 4.6 \times 10^{-6}$.

Valore esatto $e^{0.1} \approx 1.10517092$. Errore effettivo $\approx 9.2 \times 10^{-7}$. ✓

</details>

<details>
<summary>Esercizio 6 — Limite di forma indeterminata superiore</summary>

**Testo:** Calcola $\displaystyle\lim_{x \to 0}\frac{\sin x - x\cos x}{x^3}$.

**Soluzione:**

$\sin x = x - x^3/6 + o(x^3)$. $x\cos x = x(1 - x^2/2 + o(x^2)) = x - x^3/2 + o(x^3)$.

$$\sin x - x\cos x = \left(x - \frac{x^3}{6}\right) - \left(x - \frac{x^3}{2}\right) + o(x^3) = \frac{x^3}{3} + o(x^3)$$

$$\frac{\sin x - x\cos x}{x^3} \to \frac{1}{3}$$

</details>

<details>
<summary>Esercizio 7 — Taylor centrato in a ≠ 0</summary>

**Testo:** Scrivi il polinomio di Taylor di $f(x) = \sqrt{x}$ centrato in $a = 4$, fino all'ordine 2.

**Soluzione:**

$f(4) = 2$. $f'(x) = \dfrac{1}{2\sqrt{x}}$, $f'(4) = 1/4$. $f''(x) = -\dfrac{1}{4x^{3/2}}$, $f''(4) = -1/32$.

$$T_2(x) = 2 + \frac{1}{4}(x-4) - \frac{1}{64}(x-4)^2$$

</details>

<details>
<summary>Esercizio 8 — Classificazione di un punto critico con Taylor</summary>

**Testo:** Usa lo sviluppo di Taylor per classificare il punto critico di $f(x) = 1 - \cos(x^2)$ in $x = 0$.

**Soluzione:**

$f'(x) = 2x\sin(x^2)$, quindi $f'(0) = 0$: punto critico.

Sviluppo: $\cos(u) = 1 - u^2/2 + o(u^2)$ con $u = x^2$:

$$1 - \cos(x^2) = 1 - \left(1 - \frac{x^4}{2} + o(x^4)\right) = \frac{x^4}{2} + o(x^4)$$

Poiché il primo termine dello sviluppo è $x^4/2 > 0$ per $x \neq 0$, il punto $x = 0$ è un **minimo locale** (assoluto nel dominio).

</details>

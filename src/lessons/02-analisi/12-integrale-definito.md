---
id: analisi-12-integrale-definito
subject: analisi
topic_it: Calcolo integrale (una variabile)
topic_en: Integral calculus (one variable)
title_it: Integrale definito e teorema fondamentale
title_en: Definite integral and the fundamental theorem of calculus
level: blue
order: 12
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 5 — Il teorema fondamentale"
stato: da-rielaborare
---

## 1. Intuizione — Sommare infiniti rettangolini

Come si calcola l'area di una figura con bordi curvi? L'idea di Riemann è elementare: **approssima la curva con rettangoli**. Più rettangoli usi, migliore è l'approssimazione. Al limite, con infiniti rettangoli infinitamente sottili, ottieni l'area esatta.

Immagina di dover misurare l'area di un lago su una mappa. Lo copri con una griglia di quadratini e conti quelli pieni — ma i quadratini ai bordi ti danno solo un'approssimazione. Riducendo la dimensione dei quadratini all'infinito, l'errore scompare.

Il teorema fondamentale del calcolo aggiunge poi una svolta straordinaria: **non è necessario fare questa somma esplicitamente**. Basta trovare una primitiva! Questo è stato uno dei grandi momenti nella storia della matematica — Newton e Leibniz scoprirono che derivazione e integrazione sono operazioni inverse.

---

## 2. Prerequisiti

- Derivate e loro significato geometrico (pendenza della tangente)
- Concetto di limite: $\lim_{n\to\infty}$
- Integrale indefinito e primitive: $F'(x) = f(x)$
- Funzioni continue su un intervallo $[a, b]$
- Somme finite: $\displaystyle\sum_{i=1}^n a_i$

---

## 3. Teoria

### Costruzione dell'integrale di Riemann

Sia $f$ una funzione definita su $[a, b]$. Si costruisce così:

1. **Partizione:** si divide $[a,b]$ in $n$ sottointervalli $[x_{i-1}, x_i]$ di ampiezza $\Delta x = \dfrac{b-a}{n}$

2. **Punti campione:** si sceglie un punto $x_i^* \in [x_{i-1}, x_i]$ in ogni sottointervallo

3. **Somma di Riemann:** si sommano le aree dei rettangoli:
$$S_n = \sum_{i=1}^n f(x_i^*)\,\Delta x$$

4. **Integrale definito:** si prende il limite:
$$\int_a^b f(x)\,dx = \lim_{n \to \infty} S_n$$

L'integrale esiste (è finito) se $f$ è continua su $[a,b]$ (o ha al più un numero finito di discontinuità).

**Interpretazione geometrica:** l'integrale definito è l'**area con segno** tra il grafico di $f$ e l'asse $x$ su $[a,b]$:
- dove $f(x) > 0$: contributo positivo (area sopra l'asse)
- dove $f(x) < 0$: contributo negativo (area sotto l'asse)

### Notazione e significato di $dx$

Il simbolo $dx$ rappresenta la larghezza infinitesima di ogni rettangolo. L'espressione $f(x)\,dx$ è l'area di un rettangolo infinitesimo di altezza $f(x)$ e base $dx$. L'integrale $\int$ è una "S" (da Summa) che somma tutti questi contributi infinitesimi.

### Proprietà fondamentali

$$\int_a^b [f(x) \pm g(x)]\,dx = \int_a^b f(x)\,dx \pm \int_a^b g(x)\,dx$$

$$\int_a^b c\,f(x)\,dx = c\int_a^b f(x)\,dx \quad (c \in \mathbb{R})$$

$$\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx \quad (c \in [a,b])$$

$$\int_a^a f(x)\,dx = 0 \qquad \int_a^b f(x)\,dx = -\int_b^a f(x)\,dx$$

**Stima dell'integrale:** se $m \leq f(x) \leq M$ su $[a,b]$:
$$m(b-a) \leq \int_a^b f(x)\,dx \leq M(b-a)$$

---

## 4. Derivazione — Il Teorema Fondamentale del Calcolo

Il TFC stabilisce il legame profondo tra derivazione e integrazione. È composto da due parti.

### Parte 1 — L'integrale come funzione di un estremo

Definiamo la **funzione integrale**:
$$G(x) = \int_a^x f(t)\,dt \quad x \in [a,b]$$

**Enunciato:** Se $f$ è continua su $[a,b]$, allora $G$ è derivabile e $G'(x) = f(x)$.

**Dimostrazione:** Calcoliamo il rapporto incrementale di $G$:

$$\frac{G(x+h) - G(x)}{h} = \frac{1}{h}\int_x^{x+h} f(t)\,dt$$

Per il teorema del valor medio per gli integrali, esiste $c_h \in [x, x+h]$ tale che:

$$\frac{1}{h}\int_x^{x+h} f(t)\,dt = f(c_h)$$

Quando $h \to 0$, $c_h \to x$. Per la continuità di $f$: $f(c_h) \to f(x)$. Quindi:

$$G'(x) = \lim_{h\to 0}\frac{G(x+h)-G(x)}{h} = f(x) \quad \blacksquare$$

**Significato:** derivare un integrale rispetto al suo estremo superiore "restituisce" l'integranda.

### Parte 2 — La regola di Newton-Leibniz

**Enunciato:** Se $F$ è una primitiva di $f$ continua su $[a,b]$, allora:

$$\boxed{\int_a^b f(x)\,dx = F(b) - F(a) = \Big[F(x)\Big]_a^b}$$

**Dimostrazione:** Dalla Parte 1, $G(x) = \int_a^x f(t)\,dt$ è una primitiva di $f$. Ogni altra primitiva differisce per una costante: $F(x) = G(x) + C$. Allora:

$$F(b) - F(a) = [G(b) + C] - [G(a) + C] = G(b) - G(a) = \int_a^b f(t)\,dt - 0 = \int_a^b f(x)\,dx \quad \blacksquare$$

La costante $C$ si cancella: ecco perché nell'integrale definito non compare!

### Valor medio di una funzione

Il **valor medio** di $f$ su $[a,b]$ è:
$$\bar{f} = \frac{1}{b-a}\int_a^b f(x)\,dx$$

**Teorema del valor medio per gli integrali:** se $f$ è continua su $[a,b]$, esiste $c \in [a,b]$ tale che $f(c) = \bar{f}$.

*Interpretazione:* l'area sotto la curva è uguale all'area del rettangolo di base $(b-a)$ e altezza $f(c)$.

---

## 5. Esempi

**Esempio 1 — Calcolo diretto con TFC**

$$\int_0^2 (3x^2 - 2x + 1)\,dx = \Big[x^3 - x^2 + x\Big]_0^2 = (8 - 4 + 2) - 0 = 6$$

---

**Esempio 2 — Funzione trigonometrica**

$$\int_0^{\pi} \sin x\,dx = \Big[-\cos x\Big]_0^{\pi} = (-\cos\pi) - (-\cos 0) = 1 + 1 = 2$$

Geometricamente: l'arco del seno tra $0$ e $\pi$ ha area esattamente uguale a 2.

---

**Esempio 3 — Area di un arco con cambio di segno**

$$\int_0^{2\pi} \sin x\,dx = \Big[-\cos x\Big]_0^{2\pi} = (-\cos 2\pi) - (-\cos 0) = -1 + 1 = 0$$

Attenzione: l'integrale è zero perché l'area sopra l'asse ($[0,\pi]$) cancella quella sotto ($[\pi, 2\pi]$). Per l'**area geometrica** (non con segno), bisogna integrare $\lvert \sin x\rvert$, ottenendo 4.

---

**Esempio 4 — TFC Parte 1 con regola della catena**

$$\frac{d}{dx}\int_1^{x^2} \ln t\,dt$$

Sia $G(u) = \int_1^u \ln t\,dt$. Allora $G'(u) = \ln u$. Con $u = x^2$ e la regola della catena:

$$\frac{d}{dx}G(x^2) = G'(x^2)\cdot 2x = \ln(x^2)\cdot 2x = 4x\ln x$$

---

**Esempio 5 — Integrale con sostituzione**

$$\int_0^1 \frac{x}{1+x^2}\,dx$$

$u = 1+x^2$, $du = 2x\,dx$. Quando $x=0$: $u=1$; quando $x=1$: $u=2$. Fondamentale: **i limiti di integrazione cambiano!**

$$\int_1^2 \frac{du}{2u} = \frac{1}{2}\Big[\ln u\Big]_1^2 = \frac{1}{2}(\ln 2 - \ln 1) = \frac{\ln 2}{2}$$

---

**Esempio 6 — Area tra due curve**

Trovare l'area tra $y = x^2$ e $y = x + 2$.

Intersezioni: $x^2 = x + 2 \Rightarrow x^2 - x - 2 = 0 \Rightarrow x = -1,\; x = 2$.

Su $[-1, 2]$: $x + 2 \geq x^2$ (verificare in $x=0$: $2 > 0$).

$$A = \int_{-1}^2 (x+2-x^2)\,dx = \left[\frac{x^2}{2} + 2x - \frac{x^3}{3}\right]_{-1}^2 = \left(2 + 4 - \frac{8}{3}\right) - \left(\frac{1}{2} - 2 + \frac{1}{3}\right) = \frac{10}{3} + \frac{7}{6} = \frac{9}{2}$$

---

**Esempio 7 — Valor medio**

Il valor medio di $f(x) = x^2$ su $[0, 3]$:

$$\bar{f} = \frac{1}{3}\int_0^3 x^2\,dx = \frac{1}{3}\cdot\left[\frac{x^3}{3}\right]_0^3 = \frac{1}{3}\cdot 9 = 3$$

Il punto $c$ garantito dal TVM: $f(c) = 3 \Rightarrow c^2 = 3 \Rightarrow c = \sqrt{3} \approx 1.73 \in [0,3]$.

---

## 6. Grafico

Visualizza l'area con segno tra $f(x) = x^2 - 1$ e l'asse $x$ su $[-2, 2]$: tra $-1$ e $1$ la funzione è negativa (area contata come negativa), fuori è positiva.

```plot
{"title":"Area con segno: f(x) = x² - 1","fn":"x*x - 1","fn2":"0*x","domain":[-2.5,2.5],"yDomain":[-2,5],"label1":"f(x)=x²-1","label2":"asse x"}
```

---

## 7. Slider — Somme di Riemann

Osserva come la somma di Riemann con $n$ rettangoli (altezza nel punto medio) approssima $\int_0^1 x^2\,dx = 1/3$. Al crescere di $n$ l'approssimazione migliora.

```slider
{"title":"Approssimazione dell'integrale ∫₀¹ xᵃ dx al variare di a","fn":"Math.pow(x, a)","domain":[0,1],"yDomain":[-0.2,2.5],"pname":"a","pmin":0.5,"pmax":4,"pdefault":2,"pstep":0.5,"plabel":"a","label1":"xᵃ"}
```

Con $a=1$: l'integrale è $1/2$ (area del triangolo). Con $a=2$: è $1/3$. Con $a=3$: è $1/4$. La formula generale: $\int_0^1 x^a\,dx = \frac{1}{a+1}$.

---

## 8. Errori comuni

**Errore 1 — Dimenticare di aggiornare i limiti con la sostituzione**

- Sbagliato: $\int_0^1 2x\,e^{x^2}\,dx \overset{u=x^2}{=} \int_0^1 e^u\,du$
- Corretto: quando $x=0 \Rightarrow u=0$; quando $x=1 \Rightarrow u=1$. In questo caso coincide per fortuna, ma in generale i limiti cambiano.

Esempio in cui fa differenza: $\int_0^{\sqrt{\pi}} 2x\sin(x^2)\,dx$. Con $u=x^2$: limiti da $u=0$ a $u=\pi$.

---

**Errore 2 — Confondere area geometrica e integrale definito**

- Sbagliato: $\int_0^{2\pi}\sin x\,dx = 0$ quindi $\sin x$ non ha area
- Corretto: l'integrale è zero perché le aree si cancellano. L'area geometrica è $\int_0^{2\pi}\lvert\sin x\rvert\,dx = 4$

---

**Errore 3 — Applicare TFC senza verificare la continuità**

- Sbagliato: $\int_{-1}^1 \frac{1}{x^2}\,dx = \left[-\frac{1}{x}\right]_{-1}^1 = -1-1 = -2$
- Corretto: $\frac{1}{x^2}$ ha una singolarità in $x=0 \in [-1,1]$. È un integrale improprio e in realtà diverge a $+\infty$.

---

**Errore 4 — Sbagliare il segno nella regola $\int_a^b = -\int_b^a$**

- Sbagliato: $\int_3^1 x\,dx = \left[\frac{x^2}{2}\right]_3^1 = \frac{1}{2} - \frac{9}{2} = -4$... ma si pensava di ottenere 4
- Corretto: il risultato $-4$ è giusto! Invertire i limiti cambia segno. Se vuoi l'area positiva: $\int_1^3 x\,dx = 4$.

---

**Errore 5 — Derivare l'integrale con limiti costanti**

- Sbagliato: $\frac{d}{dx}\int_1^3 f(t)\,dt = f(x)$
- Corretto: $\int_1^3 f(t)\,dt$ è una **costante** (non dipende da $x$), quindi la sua derivata è 0. Il TFC parte 1 vale solo quando $x$ è il limite superiore di integrazione.

---

**Errore 6 — Non riconoscere un integrale che vale zero per simmetria**

Se $f$ è dispari ($f(-x) = -f(x)$) e $[-a, a]$ è un intervallo simmetrico:
$$\int_{-a}^a f(x)\,dx = 0$$

Esempio: $\int_{-2}^2 x^3\,dx = 0$ (senza calcolare!). Riconoscere la parità può risparmiare molto lavoro.

---

## 9. Applicazioni reali

**Fisica — Lavoro e energia.** Se una forza variabile $F(x)$ agisce su un oggetto che si sposta da $a$ a $b$, il lavoro compiuto è $W = \int_a^b F(x)\,dx$. Per una molla di costante $k$: $F(x) = kx$ e $W = \int_0^d kx\,dx = \frac{1}{2}kd^2$. Questa formula è alla base di tutta la meccanica elastica.

**Economia — Surplus del consumatore.** Il surplus del consumatore è la differenza tra quanto i consumatori sarebbero disposti a pagare e quanto pagano effettivamente. Se $D(q)$ è la curva di domanda e $p^*$ è il prezzo di equilibrio per la quantità $q^*$: $SC = \int_0^{q^*} [D(q) - p^*]\,dq$. L'integrale definito misura questa "area tra la curva e la linea orizzontale".

**Probabilità — Distribuzione di probabilità.** Per una variabile aleatoria continua con densità $f(x)$, la probabilità che $X$ cada nell'intervallo $[a,b]$ è esattamente $P(a \leq X \leq b) = \int_a^b f(x)\,dx$. La condizione $\int_{-\infty}^{+\infty} f(x)\,dx = 1$ assicura che la probabilità totale sia 1.

---

## 10. Riepilogo

| Concetto | Formula | Condizioni |
| --- | --- | --- |
| Somma di Riemann | $S_n = \sum_{i=1}^n f(x_i^*)\Delta x$ | $\Delta x = (b-a)/n$ |
| Integrale definito | $\int_a^b f(x)\,dx = \lim_{n\to\infty}S_n$ | $f$ integrabile su $[a,b]$ |
| TFC Parte 1 | $\frac{d}{dx}\int_a^x f(t)\,dt = f(x)$ | $f$ continua |
| TFC Parte 2 | $\int_a^b f(x)\,dx = F(b) - F(a)$ | $F$ primitiva di $f$ |
| Valor medio | $\bar{f} = \frac{1}{b-a}\int_a^b f(x)\,dx$ | $f$ continua |
| Area tra curve | $A = \int_a^b [f(x)-g(x)]\,dx$ | $f(x) \geq g(x)$ su $[a,b]$ |

---

## 11. Esercizi

<details>
<summary>Esercizio 1 — Calcolo diretto</summary>

Calcolare:
(a) $\displaystyle\int_1^4 \left(\sqrt{x} - \frac{1}{\sqrt{x}}\right)dx$
(b) $\displaystyle\int_0^{\pi/4} \sec^2 x\,dx$

**Soluzione:**

(a) $\displaystyle\int_1^4 (x^{1/2} - x^{-1/2})\,dx = \left[\frac{2}{3}x^{3/2} - 2x^{1/2}\right]_1^4 = \left(\frac{16}{3} - 4\right) - \left(\frac{2}{3} - 2\right) = \frac{14}{3} - 2 = \frac{8}{3}$

(b) $\Big[\tan x\Big]_0^{\pi/4} = \tan(\pi/4) - \tan(0) = 1 - 0 = 1$

</details>

<details>
<summary>Esercizio 2 — TFC Parte 1</summary>

Calcolare $\dfrac{d}{dx}\displaystyle\int_x^{x^2} e^{t^2}\,dt$.

**Soluzione:**

Scriviamo: $\displaystyle\int_x^{x^2} e^{t^2}\,dt = \int_0^{x^2}e^{t^2}\,dt - \int_0^x e^{t^2}\,dt$

Derivando (regola della catena per il primo termine):

$$\frac{d}{dx}\int_0^{x^2}e^{t^2}\,dt = e^{(x^2)^2}\cdot 2x = 2x\,e^{x^4}$$

$$\frac{d}{dx}\int_0^x e^{t^2}\,dt = e^{x^2}$$

Risultato: $2x\,e^{x^4} - e^{x^2}$

</details>

<details>
<summary>Esercizio 3 — Sostituzione con cambio dei limiti</summary>

Calcolare $\displaystyle\int_0^{\pi/2}\sin x\cos^3 x\,dx$.

**Soluzione:**

Poniamo $u = \cos x$, $du = -\sin x\,dx$. Limiti: $x=0 \Rightarrow u=1$; $x=\pi/2 \Rightarrow u=0$.

$$\int_1^0 u^3(-du) = \int_0^1 u^3\,du = \left[\frac{u^4}{4}\right]_0^1 = \frac{1}{4}$$

</details>

<details>
<summary>Esercizio 4 — Area tra curve</summary>

Trovare l'area della regione delimitata da $y = x^3$ e $y = x$.

**Soluzione:**

Intersezioni: $x^3 = x \Rightarrow x(x^2-1) = 0 \Rightarrow x = -1, 0, 1$.

Su $[-1, 0]$: $x^3 \geq x$. Su $[0, 1]$: $x \geq x^3$. Per simmetria, basta calcolare su $[0,1]$ e raddoppiare:

$$A = 2\int_0^1 (x - x^3)\,dx = 2\left[\frac{x^2}{2} - \frac{x^4}{4}\right]_0^1 = 2\cdot\frac{1}{4} = \frac{1}{2}$$

</details>

<details>
<summary>Esercizio 5 — Valor medio</summary>

Trovare il valor medio di $f(x) = \cos x$ su $[0, \pi/2]$ e determinare il punto $c$ del TVM.

**Soluzione:**

$$\bar{f} = \frac{1}{\pi/2}\int_0^{\pi/2}\cos x\,dx = \frac{2}{\pi}\Big[\sin x\Big]_0^{\pi/2} = \frac{2}{\pi}(1-0) = \frac{2}{\pi} \approx 0.637$$

Punto $c$: $\cos c = \frac{2}{\pi} \Rightarrow c = \arccos\left(\frac{2}{\pi}\right) \approx 0.881 \in [0, \pi/2]$.

</details>

<details>
<summary>Esercizio 6 — Simmetria</summary>

Senza calcolare esplicitamente, determinare $\displaystyle\int_{-3}^3 (x^5 - 3x^3 + x)\,dx$.

**Soluzione:**

La funzione $f(x) = x^5 - 3x^3 + x$ è **dispari**: ogni termine ha potenza dispari, quindi $f(-x) = -f(x)$.

L'integrale su un intervallo simmetrico $[-3, 3]$ di una funzione dispari è uguale a **zero**.

$$\int_{-3}^3 (x^5 - 3x^3 + x)\,dx = 0$$

</details>

<details>
<summary>Esercizio 7 — Integrale con funzione assoluta</summary>

Calcolare $\displaystyle\int_{-2}^2 \lvert x^2 - 1\rvert\,dx$.

**Soluzione:**

$x^2 - 1 = 0$ per $x = \pm 1$. Su $[-2,-1]$ e $[1,2]$: $x^2-1 \geq 0$. Su $[-1,1]$: $x^2-1 \leq 0$.

$$\int_{-2}^2\lvert x^2-1\rvert\,dx = \int_{-2}^{-1}(x^2-1)\,dx + \int_{-1}^1(1-x^2)\,dx + \int_1^2(x^2-1)\,dx$$

Per simmetria, i tre integrali si calcolano facilmente:

$\left[\frac{x^3}{3}-x\right]_{-2}^{-1} = \left(-\frac{1}{3}+1\right) - \left(-\frac{8}{3}+2\right) = \frac{2}{3} + \frac{2}{3} = \frac{4}{3}$

$\left[x - \frac{x^3}{3}\right]_{-1}^1 = \frac{2}{3} - (-\frac{2}{3}) = \frac{4}{3}$

Per simmetria il terzo contribuisce anch'esso $\frac{4}{3}$.

Totale: $\frac{4}{3} + \frac{4}{3} + \frac{4}{3} = 4$

</details>

<details>
<summary>Esercizio 8 — Stima dell'integrale</summary>

Senza calcolare esplicitamente, stimare $\displaystyle\int_0^1 e^{-x^2}\,dx$.

**Soluzione:**

Su $[0,1]$: $0 \leq x^2 \leq 1$, quindi $-1 \leq -x^2 \leq 0$, quindi $e^{-1} \leq e^{-x^2} \leq e^0 = 1$.

$$e^{-1}\cdot(1-0) \leq \int_0^1 e^{-x^2}\,dx \leq 1\cdot(1-0)$$

$$\frac{1}{e} \approx 0.368 \leq \int_0^1 e^{-x^2}\,dx \leq 1$$

Il valore esatto (non calcolabile con primitive elementari) è circa $0.747$.

</details>

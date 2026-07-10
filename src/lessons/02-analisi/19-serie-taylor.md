---
id: analisi-19-serie-taylor
subject: analisi
topic_it: Successioni e serie
topic_en: Sequences and series
title_it: Serie di Taylor e McLaurin
title_en: Taylor and Maclaurin series
level: blue
order: 19
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 11 — Serie di Taylor"
---

## 1. Intuizione — Approssimare con polinomi

Perché complicarsi la vita con $\sin x$ o $e^x$, funzioni "trascendenti" difficili da calcolare? L'idea di Taylor è semplice e brillante: **qualsiasi funzione liscia si comporta localmente come un polinomio**. E i polinomi si calcolano con sole addizioni e moltiplicazioni.

Pensa alla retta tangente: è la migliore approssimazione lineare di $f$ in un punto. Il polinomio di Taylor estende questa idea: possiamo approssimare $f$ con un polinomio di grado qualsiasi, scegliendo i coefficienti in modo che **tutte le derivate coincidano** con quelle di $f$ nel punto.

Il risultato è straordinario: per funzioni come $e^x$, $\sin x$, $\cos x$, il polinomio di Taylor di grado infinito **converge esattamente** alla funzione su tutto $\mathbb{R}$. Queste funzioni sono, letteralmente, i loro sviluppi in serie.

---

## 2. Prerequisiti

- **Derivate di ordine superiore** $f^{(n)}(x)$: derivare $n$ volte una funzione
- **Polinomi:** struttura, valutazione, derivazione
- **Serie di potenze** e raggio di convergenza (lezione 18)
- **Limite e confronto** asintotico tra funzioni
- **Notazione $O$-grande:** $f(x) = O(g(x))$ per $x \to 0$ significa $\lvert f \rvert \leq C \lvert g \rvert$
- **Disuguaglianza del valore medio** e teorema di Lagrange

---

## 3. Teoria — Definizioni formali

### Polinomio di Taylor

Sia $f$ una funzione $n$ volte derivabile nel punto $x_0$. Il **polinomio di Taylor di ordine $n$** centrato in $x_0$ è:

$$T_n(x) = \sum_{k=0}^n \frac{f^{(k)}(x_0)}{k!}(x-x_0)^k$$

Esplicitato:

$$T_n(x) = f(x_0) + f'(x_0)(x-x_0) + \frac{f''(x_0)}{2!}(x-x_0)^2 + \cdots + \frac{f^{(n)}(x_0)}{n!}(x-x_0)^n$$

**Perché questi coefficienti?** Per costruzione: $T_n^{(k)}(x_0) = f^{(k)}(x_0)$ per $k = 0, 1, \ldots, n$. Il polinomio di Taylor è l'unico polinomio di grado $\leq n$ che ha le stesse prime $n$ derivate di $f$ in $x_0$.

### Serie di Taylor

Se $f \in C^\infty$ (derivabile infinite volte) in un intorno di $x_0$, la **serie di Taylor** di $f$ centrata in $x_0$ è:

$$\sum_{n=0}^\infty \frac{f^{(n)}(x_0)}{n!}(x-x_0)^n$$

Si dice che $f$ è **analitica** in $x_0$ se la sua serie di Taylor converge a $f(x)$ in un intorno di $x_0$.

**Serie di McLaurin** = serie di Taylor con $x_0 = 0$.

### Resto di Lagrange

$$f(x) = T_n(x) + R_n(x)$$

dove il **resto di Lagrange** è:

$$R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x-x_0)^{n+1}$$

per qualche $c$ strettamente compreso tra $x_0$ e $x$. Il punto $c$ dipende da $x$ e $n$, ma non è noto esplicitamente: serve solo per **stimare** l'errore.

**Stima dell'errore:** se $\lvert f^{(n+1)}(t) \rvert \leq M$ per ogni $t$ tra $x_0$ e $x$:

$$\lvert R_n(x) \rvert \leq \frac{M}{(n+1)!} \lvert x - x_0 \rvert^{n+1}$$

### Sviluppi fondamentali in $x_0 = 0$

| Funzione | Serie di McLaurin | Raggio |
| --- | --- | --- |
| $e^x$ | $\displaystyle\sum_{n=0}^\infty \dfrac{x^n}{n!} = 1 + x + \dfrac{x^2}{2!} + \dfrac{x^3}{3!} + \cdots$ | $+\infty$ |
| $\sin x$ | $\displaystyle\sum_{n=0}^\infty \dfrac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \dfrac{x^3}{6} + \dfrac{x^5}{120} - \cdots$ | $+\infty$ |
| $\cos x$ | $\displaystyle\sum_{n=0}^\infty \dfrac{(-1)^n x^{2n}}{(2n)!} = 1 - \dfrac{x^2}{2} + \dfrac{x^4}{24} - \cdots$ | $+\infty$ |
| $\ln(1+x)$ | $\displaystyle\sum_{n=1}^\infty \dfrac{(-1)^{n+1}}{n}x^n = x - \dfrac{x^2}{2} + \dfrac{x^3}{3} - \cdots$ | $R=1$, $x \in (-1,1]$ |
| $(1+x)^\alpha$ | $1 + \alpha x + \dfrac{\alpha(\alpha-1)}{2!}x^2 + \cdots$ | $R=1$ |

---

## 4. Derivazione — Unicità e costruzione dei coefficienti

**Perché $c_k = f^{(k)}(x_0)/k!$?** Sia $T(x) = \displaystyle\sum_{k=0}^n c_k (x-x_0)^k$ il polinomio cercato.

Valutiamo $T$ e le sue derivate in $x_0$:

- $T(x_0) = c_0$ → imponiamo $c_0 = f(x_0)$
- $T'(x) = c_1 + 2c_2(x-x_0) + \cdots$ → $T'(x_0) = c_1$ → $c_1 = f'(x_0)$
- $T''(x) = 2c_2 + 6c_3(x-x_0) + \cdots$ → $T''(x_0) = 2c_2$ → $c_2 = f''(x_0)/2$
- In generale: $T^{(k)}(x_0) = k!\, c_k$ → $c_k = f^{(k)}(x_0)/k!$

**Dimostrazione del Resto di Lagrange** (schema):

Sia $g(t) = f(x) - T_n(x) - \dfrac{R_n(x)}{(x-x_0)^{n+1}}(t-x_0)^{n+1}$.

La funzione $g$ si annulla in $t = x_0$ e in $t = x$. Per il teorema di Rolle applicato $n+1$ volte, esiste $c$ tra $x_0$ e $x$ con $g^{(n+1)}(c) = 0$. Questo dà:

$$f^{(n+1)}(c) = \frac{(n+1)!\, R_n(x)}{(x-x_0)^{n+1}} \implies R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x-x_0)^{n+1} \quad \square$$

---

## 5. Esempi risolti

**Esempio 1 — McLaurin di $e^{-x^2}$**

Trovare il polinomio di McLaurin di ordine 4 di $f(x) = e^{-x^2}$.

Non calcolo le derivate (tedioso!). Sostituisco $t = -x^2$ nella serie di $e^t$:

$$e^{-x^2} = \sum_{n=0}^\infty \frac{(-x^2)^n}{n!} = 1 - x^2 + \frac{x^4}{2!} - \frac{x^6}{3!} + \cdots$$

Troncando all'ordine 4: $T_4(x) = 1 - x^2 + \dfrac{x^4}{2}$.

---

**Esempio 2 — Limite con Taylor**

Calcolare $\displaystyle\lim_{x\to 0} \frac{e^x - 1 - x}{x^2}$.

Forma $0/0$. Sviluppo $e^x = 1 + x + \dfrac{x^2}{2} + O(x^3)$:

$$\frac{e^x - 1 - x}{x^2} = \frac{x^2/2 + O(x^3)}{x^2} = \frac{1}{2} + O(x) \to \frac{1}{2}$$

---

**Esempio 3 — Stima dell'errore**

Con quanti termini approssimare $\sin(0.5)$ con errore $< 10^{-6}$?

Il resto di Lagrange per $T_{2n+1}(x)$ di $\sin x$ è $\lvert R_{2n+1} \rvert \leq \dfrac{\lvert x \rvert^{2n+3}}{(2n+3)!}$.

Per $x = 0.5$:

- $n=1$: $0.5^5/120 \approx 2.6 \times 10^{-4}$ — troppo grande
- $n=2$: $0.5^7/5040 \approx 2 \times 10^{-6}$ — troppo grande  
- $n=3$: $0.5^9/362880 \approx 5.4 \times 10^{-9}$ — ok!

Bastano 4 termini: $\sin(0.5) \approx 0.5 - 0.5^3/6 + 0.5^5/120 - 0.5^7/5040$.

---

**Esempio 4 — Taylor di $\ln x$ in $x_0 = 1$**

Trovare lo sviluppo di Taylor di $\ln x$ centrato in $x_0 = 1$.

Calcoliamo le derivate in $x_0 = 1$:

- $f(x) = \ln x$, $f(1) = 0$
- $f'(x) = 1/x$, $f'(1) = 1$
- $f''(x) = -1/x^2$, $f''(1) = -1$
- $f^{(n)}(x) = (-1)^{n-1}(n-1)!/x^n$, $f^{(n)}(1) = (-1)^{n-1}(n-1)!$

Quindi:

$$\ln x = \sum_{n=1}^\infty \frac{(-1)^{n-1}(n-1)!}{n!}(x-1)^n = \sum_{n=1}^\infty \frac{(-1)^{n-1}}{n}(x-1)^n$$

Coincide con la serie di $\ln(1+t)$ con $t = x-1$.

---

**Esempio 5 — Formula di Eulero**

Derivare $e^{i\theta} = \cos\theta + i\sin\theta$ dalle serie.

Sostituiamo $x = i\theta$ nella serie di $e^x$:

$$e^{i\theta} = \sum_{n=0}^\infty \frac{(i\theta)^n}{n!} = \sum_{k=0}^\infty \frac{(i\theta)^{2k}}{(2k)!} + \sum_{k=0}^\infty \frac{(i\theta)^{2k+1}}{(2k+1)!}$$

Usando $i^{2k} = (-1)^k$ e $i^{2k+1} = i(-1)^k$:

$$e^{i\theta} = \sum_{k=0}^\infty \frac{(-1)^k \theta^{2k}}{(2k)!} + i\sum_{k=0}^\infty \frac{(-1)^k \theta^{2k+1}}{(2k+1)!} = \cos\theta + i\sin\theta$$

Per $\theta = \pi$: $e^{i\pi} = \cos\pi + i\sin\pi = -1 + 0 = -1$, cioè $e^{i\pi} + 1 = 0$.

---

**Esempio 6 — Confronto asintotico**

Confrontare $\sin x$ e $x$ per $x \to 0$.

$\sin x = x - x^3/6 + O(x^5)$, quindi $\sin x - x = -x^3/6 + O(x^5)$.

Quindi $\sin x \sim x$ per $x \to 0$ (il termine principale è $x$), e più precisamente:

$$\sin x = x - \frac{x^3}{6} + O(x^5)$$

Questo spiega perché nelle approssimazioni per piccoli angoli (ottica, fisica) si usa $\sin\theta \approx \theta$.

---

**Esempio 7 — Sviluppo binomiale**

Trovare il McLaurin di $\sqrt{1+x}$ al terzo ordine.

$f(x) = (1+x)^{1/2}$, $\alpha = 1/2$:

$$\sqrt{1+x} = 1 + \frac{1}{2}x + \frac{(1/2)(1/2-1)}{2!}x^2 + \frac{(1/2)(-1/2)(-3/2)}{3!}x^3 + \cdots$$

$$= 1 + \frac{x}{2} - \frac{x^2}{8} + \frac{x^3}{16} - \cdots$$

---

**Esempio 8 — Calcolo di integrale con serie**

Calcolare $\displaystyle\int_0^1 e^{-x^2}\,dx$ con errore $< 10^{-3}$.

Uso la serie $e^{-x^2} = 1 - x^2 + \dfrac{x^4}{2} - \dfrac{x^6}{6} + \cdots$ e integro termine a termine:

$$\int_0^1 e^{-x^2}\,dx = \left[x - \frac{x^3}{3} + \frac{x^5}{10} - \frac{x^7}{42} + \frac{x^9}{216} - \cdots\right]_0^1 = 1 - \frac{1}{3} + \frac{1}{10} - \frac{1}{42} + \frac{1}{216} - \cdots$$

Questa è una serie alternata a termini decrescenti: l'errore è $\leq$ il primo termine trascurato. Con 4 termini: $1 - 1/3 + 1/10 - 1/42 \approx 0.7429$. Il quinto termine $1/216 \approx 0.0046 > 10^{-3}$, quindi ne serve uno di più: con 5 termini l'errore è $< 1/1320 \approx 7.6 \times 10^{-4} < 10^{-3}$.

---

## 6. Grafico — Approssimazioni di $\sin x$ con polinomi di Taylor

```plot
{"title":"sin(x) e approssimazione T₃(x) = x - x³/6","fn":"x - x*x*x/6","fn2":"Math.sin(x)","domain":[-4,4],"yDomain":[-2,2],"label1":"T₃(x) = x - x³/6","label2":"sin(x) esatto"}
```

Il polinomio di Taylor di grado 3 approssima $\sin x$ bene vicino a $0$, ma si discosta per $\lvert x \rvert > 1.5$ circa. Aggiungendo termini si estende l'intervallo di buona approssimazione.

---

## 7. Slider — Polinomio di Taylor di $e^x$ al variare dell'ordine

```slider
{"title":"Approssimazione di e^x: 1 + x + x²/2 + ... + x^a/a!","fn":"1 + x + x*x/2 + x*x*x/6 + Math.pow(x,4)/24","domain":[-3,3],"yDomain":[-1,10],"pname":"a","pmin":1,"pmax":5,"pdefault":3,"pstep":1,"plabel":"grado appross.","label1":"T_n(x)"}
```

Il grafico mostra come l'approssimazione migliora aggiungendo termini. Vicino a $x=0$ anche pochi termini bastano; lontano da $0$ serve un grado più alto.

---

## 8. Errori comuni

**Errore 1 — Confondere $C^\infty$ con analitica**

❌ "Se $f$ è derivabile infinite volte, la sua serie di Taylor converge a $f$"

✓ Esistono funzioni $C^\infty$ la cui serie di Taylor converge ma **non** a $f$. La funzione classica $e^{-1/x^2}$ (con $f(0)=0$) ha tutte le derivate nulle in $x=0$: la serie di Taylor è $\equiv 0$, ma $f \not\equiv 0$.

---

**Errore 2 — Sbagliare i segni nella serie di $\sin x$ o $\cos x$**

❌ $\sin x = x + x^3/6 + x^5/120 + \cdots$

✓ $\sin x = x - x^3/6 + x^5/120 - \cdots$ (segni alternati $(-1)^n$).

---

**Errore 3 — Dimenticare i fattoriali nei coefficienti**

❌ "Il polinomio di Taylor è $f(x_0) + f'(x_0)(x-x_0) + f''(x_0)(x-x_0)^2$"

✓ Il coefficiente del termine $(x-x_0)^k$ è $\dfrac{f^{(k)}(x_0)}{k!}$, con il fattoriale al denominatore.

---

**Errore 4 — Usare il resto di Lagrange senza stimare la derivata**

❌ "Il resto $R_n = \dfrac{f^{(n+1)}(c)}{(n+1)!}x^{n+1}$" senza trovare un bound per $f^{(n+1)}$

✓ Il punto $c$ non è noto: bisogna trovare $M$ tale che $\lvert f^{(n+1)}(t) \rvert \leq M$ per tutti i $t$ rilevanti, poi usare $\lvert R_n \rvert \leq \dfrac{M \lvert x \rvert^{n+1}}{(n+1)!}$.

---

**Errore 5 — Troncamento impreciso dell'ordine**

❌ "L'ordine 4 di $e^{-x^2}$ è $1 - x^2 + x^4/2 - x^6/6$"

✓ "Ordine 4" significa potenze fino a $x^4$. Il termine $-x^6/6$ va escluso: $T_4(x) = 1 - x^2 + x^4/2$.

---

**Errore 6 — Calcolare limit con Taylor senza identificare l'ordine giusto**

❌ Sviluppare $\cos x = 1 - x^2/2$ per calcolare $\lim_{x\to 0}\dfrac{1-\cos x}{x^2}$ e fermarsi lì senza verificare

✓ $\dfrac{1-\cos x}{x^2} = \dfrac{x^2/2 + O(x^4)}{x^2} = \dfrac{1}{2} + O(x^2) \to \dfrac{1}{2}$. Bisogna sviluppare abbastanza ordini da eliminare l'indeterminazione $0/0$.

---

## 9. Applicazioni reali

**Fisica e approssimazione per piccoli angoli.** In meccanica e ottica si usano sistematicamente le approssimazioni del primo ordine: $\sin\theta \approx \theta$, $\cos\theta \approx 1 - \theta^2/2$, $\tan\theta \approx \theta$ per $\theta$ piccolo (in radianti). Queste non sono semplificazioni ad occhio, ma i primi termini dello sviluppo di Taylor. L'equazione del pendolo semplice $\ddot{\theta} + (g/L)\sin\theta = 0$ diventa lineare ($\ddot{\theta} + (g/L)\theta = 0$) solo grazie all'approssimazione $\sin\theta \approx \theta$, e questo permette di ricavare la formula del periodo.

**Analisi numerica e integrazione di funzioni speciali.** Integrali come $\displaystyle\int e^{-x^2}dx$ (integrale di Gauss) non hanno forma chiusa, ma si possono calcolare numericamente con precisione arbitraria sviluppando l'integrando in serie e integrando termine a termine. Questo è alla base del calcolo della funzione di errore $\mathrm{erf}(x)$, usata in statistica (distribuzione normale), fisica (teoria della diffusione), ingegneria dei segnali.

**Machine learning e ottimizzazione.** L'algoritmo di aggiornamento dei pesi in una rete neurale si basa sulla discesa del gradiente, che è un'approssimazione del primo ordine di Taylor della funzione di perdita: $L(w + \Delta w) \approx L(w) + \nabla L(w) \cdot \Delta w$. Metodi più sofisticati come Adam o l'ottimizzazione del secondo ordine usano il termine quadratico (matrice Hessiana) per una convergenza più rapida — concretamente, il polinomio di Taylor di grado 2 della funzione obiettivo.

---

## 10. Riepilogo

| Oggetto | Formula |
| --- | --- |
| Polinomio di Taylor | $T_n(x) = \displaystyle\sum_{k=0}^n \dfrac{f^{(k)}(x_0)}{k!}(x-x_0)^k$ |
| McLaurin | Taylor con $x_0 = 0$ |
| Resto di Lagrange | $R_n(x) = \dfrac{f^{(n+1)}(c)}{(n+1)!}(x-x_0)^{n+1}$ |
| Stima errore | $\lvert R_n(x) \rvert \leq \dfrac{M}{(n+1)!}\lvert x-x_0 \rvert^{n+1}$ |
| $e^x$ | $1 + x + x^2/2! + x^3/3! + \cdots$ |
| $\sin x$ | $x - x^3/3! + x^5/5! - \cdots$ |
| $\cos x$ | $1 - x^2/2! + x^4/4! - \cdots$ |
| $\ln(1+x)$ | $x - x^2/2 + x^3/3 - \cdots$, $x \in (-1,1]$ |
| Formula di Eulero | $e^{i\theta} = \cos\theta + i\sin\theta$ |

---

## 11. Esercizi

<details>
<summary>Esercizio 1 — McLaurin di composizione</summary>

Trovare il polinomio di McLaurin di ordine 4 di $f(x) = \cos(x^2)$.

**Soluzione:**

Sostituisco $t = x^2$ nella serie di $\cos t$:

$$\cos(x^2) = \sum_{n=0}^\infty \frac{(-1)^n (x^2)^{2n}}{(2n)!} = 1 - \frac{x^4}{2} + \frac{x^8}{24} - \cdots$$

Troncando all'ordine 4: $T_4(x) = 1 - \dfrac{x^4}{2}$.

</details>

<details>
<summary>Esercizio 2 — Limite con Taylor</summary>

Calcolare $\displaystyle\lim_{x\to 0} \frac{\sin x - x + x^3/6}{x^5}$.

**Soluzione:**

$\sin x = x - \dfrac{x^3}{3!} + \dfrac{x^5}{5!} - \dfrac{x^7}{7!} + \cdots$

$$\sin x - x + \frac{x^3}{6} = \left(x - \frac{x^3}{6} + \frac{x^5}{120} - \cdots\right) - x + \frac{x^3}{6} = \frac{x^5}{120} + O(x^7)$$

$$\lim_{x\to 0} \frac{x^5/120 + O(x^7)}{x^5} = \frac{1}{120}$$

</details>

<details>
<summary>Esercizio 3 — Stima dell'errore</summary>

Quanti termini della serie di $\cos x$ servono per approssimare $\cos(1)$ con errore $< 10^{-8}$?

**Soluzione:**

Il resto è $\lvert R_{2n} \rvert \leq \dfrac{1}{(2n+2)!}$ (poiché $\lvert f^{(2n+2)}(c) \rvert = \lvert\cos c\lvert \leq 1$ e $\lvert x\lvert = 1$).

- $n=3$: $1/8! = 1/40320 \approx 2.5 \times 10^{-5}$: troppo grande
- $n=4$: $1/10! \approx 2.8 \times 10^{-7}$: troppo grande
- $n=5$: $1/12! \approx 2.1 \times 10^{-9} < 10^{-8}$: ok

Servono 5 termini non nulli ($1, x^2/2!, x^4/4!, x^6/6!, x^8/8!$), cioè il polinomio $T_{10}(x)$.

</details>

<details>
<summary>Esercizio 4 — Taylor di ln(x) centrato in 1</summary>

Trovare i primi 4 termini dello sviluppo di Taylor di $\ln(x)$ centrato in $x_0 = 1$.

**Soluzione:**

$f(x) = \ln x$: $f(1)=0$, $f'(1)=1$, $f''(1)=-1$, $f'''(1)=2$.

$$\ln x = (x-1) - \frac{(x-1)^2}{2} + \frac{(x-1)^3}{3} - \frac{(x-1)^4}{4} + \cdots$$

(Coincide con $\ln(1+(x-1))$ sviluppato in serie di McLaurin con $t=x-1$.)

</details>

<details>
<summary>Esercizio 5 — Sviluppo binomiale</summary>

Trovare il McLaurin di ordine 3 di $f(x) = \dfrac{1}{\sqrt{1-x^2}}$.

**Soluzione:**

$\dfrac{1}{\sqrt{1-x^2}} = (1-x^2)^{-1/2}$. Uso $(1+t)^\alpha$ con $\alpha=-1/2$ e $t=-x^2$:

$$(1+t)^{-1/2} = 1 - \frac{t}{2} + \frac{3t^2}{8} - \cdots$$

Sostituendo $t = -x^2$:

$$(1-x^2)^{-1/2} = 1 + \frac{x^2}{2} + \frac{3x^4}{8} + \cdots$$

All'ordine 3 (potenze fino a $x^3$): $T_3(x) = 1 + \dfrac{x^2}{2}$.

</details>

<details>
<summary>Esercizio 6 — Integrale tramite serie</summary>

Calcolare $\displaystyle\int_0^{0.5} \frac{\sin x}{x}\,dx$ con errore $< 10^{-4}$.

**Soluzione:**

$\dfrac{\sin x}{x} = 1 - \dfrac{x^2}{6} + \dfrac{x^4}{120} - \dfrac{x^6}{5040} + \cdots$

$$\int_0^{0.5} \frac{\sin x}{x}\,dx = \left[x - \frac{x^3}{18} + \frac{x^5}{600} - \frac{x^7}{35280} + \cdots\right]_0^{0.5}$$

$$= 0.5 - \frac{0.125}{18} + \frac{0.03125}{600} - \cdots \approx 0.5 - 0.00694 + 0.0000521 - \cdots$$

L'errore con 3 termini è $< 0.5^7/35280 \approx 3.6 \times 10^{-6} < 10^{-4}$. Valore: $\approx 0.49311$.

</details>

<details>
<summary>Esercizio 7 — Formula di Eulero e trigonometria</summary>

Usando $e^{i\theta} = \cos\theta + i\sin\theta$, ricavare le formule $\cos\theta = \dfrac{e^{i\theta}+e^{-i\theta}}{2}$ e $\sin\theta = \dfrac{e^{i\theta}-e^{-i\theta}}{2i}$.

**Soluzione:**

$e^{i\theta} = \cos\theta + i\sin\theta$

$e^{-i\theta} = \cos\theta - i\sin\theta$

Sommando: $e^{i\theta} + e^{-i\theta} = 2\cos\theta$ → $\cos\theta = \dfrac{e^{i\theta}+e^{-i\theta}}{2}$.

Sottraendo: $e^{i\theta} - e^{-i\theta} = 2i\sin\theta$ → $\sin\theta = \dfrac{e^{i\theta}-e^{-i\theta}}{2i}$.

Queste sono le **formule di Eulero** e sono la base per collegare funzioni trigonometriche e funzioni iperboliche.

</details>

<details>
<summary>Esercizio 8 — Limite con forma indeterminata complessa</summary>

Calcolare $\displaystyle\lim_{x\to 0} \frac{e^x \sin x - x - x^2}{x^3}$.

**Soluzione:**

Sviluppo $e^x \sin x$ usando i prodotti delle serie:

$e^x = 1 + x + x^2/2 + x^3/6 + O(x^4)$

$\sin x = x - x^3/6 + O(x^5)$

$$e^x \sin x = \left(1 + x + \frac{x^2}{2} + \frac{x^3}{6}\right)\left(x - \frac{x^3}{6}\right) + O(x^4)$$

$$= x - \frac{x^3}{6} + x^2 - \frac{x^4}{6} + \frac{x^3}{2} + \frac{x^4}{6} + O(x^4) = x + x^2 + \frac{x^3}{3} + O(x^4)$$

Quindi:

$$\frac{e^x\sin x - x - x^2}{x^3} = \frac{x^3/3 + O(x^4)}{x^3} = \frac{1}{3} + O(x) \to \frac{1}{3}$$

</details>

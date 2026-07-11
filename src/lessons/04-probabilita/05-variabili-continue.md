---
id: probabilita-05-var-continue
subject: probabilita
topic_it: Variabili aleatorie
topic_en: Random variables
title_it: Variabili aleatorie continue
title_en: Continuous random variables
level: blue
order: 5
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 5 — Variabili aleatorie continue"
stato: da-rielaborare
---

## 1. Intuizione — analogia concreta + perché si studia

Misurare l'altezza di una persona, la temperatura di un oggetto, il tempo di attesa a uno sportello: queste grandezze non assumono valori in un insieme numerabile ma in un intervallo continuo. La probabilità che l'altezza sia esattamente 1.73000... metri è zero — eppure la probabilità di essere tra 1.70 e 1.75 metri è un numero positivo e significativo.

Questo è il paradosso delle variabili aleatorie continue: ogni singolo valore ha probabilità zero, ma intervalli di valori hanno probabilità positive. La soluzione è introdurre la **funzione di densità di probabilità** (PDF), che non dà la probabilità di un punto ma la "concentrazione" di probabilità per unità di intervallo. Come la densità di massa in fisica: la densità in un punto non è una massa, ma integrandola su un volume si ottiene la massa di quella regione.

Il salto concettuale è passare dalle sommatorie agli integrali: dove prima si sommava $\sum_x p_X(x)$, ora si integra $\int f_X(x)\,dx$. Tutte le formule per il valore atteso, la varianza, i momenti diventano integrali invece di serie, ma la logica è identica.

Le variabili continue sono fondamentali in fisica (misure, distribuzioni di probabilità nella meccanica quantistica), ingegneria (segnali, rumore, controllo), statistica (test di ipotesi, regressione) e machine learning (distribuzioni continue come la Normale, l'Esponenziale, la Beta).

## 2. Prerequisiti

- Variabili aleatorie discrete: PMF, CDF, valore atteso, varianza
- Calcolo integrale: integrali definiti e impropri
- Teorema fondamentale del calcolo (TFC): relazione tra integrale e derivata
- Integrazione per parti e per sostituzione
- Serie di Taylor (utile per funzioni generatrici)

## 3. Teoria

### Definizione di VA continua e densità di probabilità

Una VA $X$ è **continua** se esiste una funzione $f_X : \mathbb{R} \to [0, +\infty)$, chiamata **funzione di densità di probabilità** (PDF, probability density function), tale che:

$$P(a \leq X \leq b) = \int_a^b f_X(x)\,dx \quad \text{per ogni } a \leq b$$

La funzione $f_X$ deve soddisfare:
1. **Non negatività:** $f_X(x) \geq 0$ per ogni $x \in \mathbb{R}$
2. **Normalizzazione:** $\displaystyle\int_{-\infty}^{+\infty} f_X(x)\,dx = 1$

**Importante:** $f_X(x)$ **non è una probabilità**. Può essere maggiore di 1 (es: $\text{Unif}(0, 0.1)$ ha densità $= 10$). È la probabilità per unità di lunghezza. Solo il suo integrale su un intervallo dà una probabilità.

**Conseguenza chiave:** per le VA continue, $P(X = x) = 0$ per ogni singolo valore $x$. Quindi:

$$P(a \leq X \leq b) = P(a < X \leq b) = P(a \leq X < b) = P(a < X < b)$$

Le disuguaglianze strette o non strette non importano per le VA continue.

### Funzione di ripartizione (CDF) per VA continue

$$F_X(x) = P(X \leq x) = \int_{-\infty}^x f_X(t)\,dt$$

Proprietà:
- $F_X$ è **continua** (a differenza del caso discreto dove ha salti)
- $F_X$ è **debolmente crescente**: $x_1 < x_2 \Rightarrow F_X(x_1) \leq F_X(x_2)$
- $\lim_{x \to -\infty} F_X(x) = 0$ e $\lim_{x \to +\infty} F_X(x) = 1$

**Teorema fondamentale del calcolo applicato:** dove $f_X$ è continua,

$$f_X(x) = \frac{d}{dx} F_X(x) = F_X'(x)$$

Quindi PDF e CDF sono legate da derivazione/integrazione: conoscere una significa conoscere l'altra.

**Calcolo di probabilità dalla CDF:**

$$P(a < X \leq b) = F_X(b) - F_X(a)$$

### Valore atteso e momenti

$$E[X] = \int_{-\infty}^{+\infty} x\,f_X(x)\,dx$$

L'integrale deve convergere assolutamente: $\int_{-\infty}^{+\infty} \lvert x \rvert f_X(x)\,dx < +\infty$.

**Legge dello statistico inconsapevole (LOTUS continua):** per qualunque funzione misurabile $g$,

$$E[g(X)] = \int_{-\infty}^{+\infty} g(x)\,f_X(x)\,dx$$

Non serve la distribuzione di $g(X)$: si integra rispetto a $f_X$.

**Linearità:** $E[aX + b] = aE[X] + b$.

**Varianza:** $\text{Var}(X) = E[X^2] - (E[X])^2 = \displaystyle\int_{-\infty}^{+\infty} x^2 f_X(x)\,dx - \mu^2$

### Distribuzione Uniforme continua

$X \sim \text{Unif}(a, b)$: ogni valore in $[a, b]$ è "ugualmente probabile".

$$f_X(x) = \frac{1}{b-a} \quad \text{per } x \in [a,b], \qquad f_X(x) = 0 \text{ altrove}$$

$$F_X(x) = \begin{cases} 0 & x < a \\ \dfrac{x-a}{b-a} & a \leq x \leq b \\ 1 & x > b \end{cases}$$

$$E[X] = \frac{a+b}{2}, \qquad \text{Var}(X) = \frac{(b-a)^2}{12}$$

### Distribuzione Esponenziale

$X \sim \text{Exp}(\lambda)$ con $\lambda > 0$: modella i tempi di attesa tra eventi con tasso $\lambda$.

$$f_X(x) = \lambda e^{-\lambda x} \quad x > 0, \qquad f_X(x) = 0 \text{ per } x \leq 0$$

$$F_X(x) = 1 - e^{-\lambda x} \quad x > 0$$

$$E[X] = \frac{1}{\lambda}, \qquad \text{Var}(X) = \frac{1}{\lambda^2}, \qquad \sigma_X = \frac{1}{\lambda}$$

Nota: per l'Esponenziale, media e deviazione standard sono uguali.

**Assenza di memoria (memorylessness):**

$$P(X > s + t \mid X > s) = P(X > t) \quad \text{per ogni } s, t > 0$$

L'Esponenziale è l'unica distribuzione continua con questa proprietà — è l'analoga continua della Geometrica.

### Cambio di variabile (trasformazione)

Se $Y = g(X)$ con $g$ monotona e derivabile, la PDF di $Y$ si ottiene dal **metodo Jacobiano**:

$$f_Y(y) = f_X(g^{-1}(y)) \cdot \left|\frac{d}{dy}g^{-1}(y)\right|$$

Il termine $\lvert \frac{d}{dy}g^{-1}(y) \rvert$ è il **Jacobiano**: tiene conto della "dilatazione" o "compressione" della scala quando si cambia variabile.

## 4. Derivazioni

### Derivazione di $E[X]$ per $X \sim \text{Unif}(a,b)$

$$E[X] = \int_a^b x \cdot \frac{1}{b-a}\,dx = \frac{1}{b-a} \cdot \frac{x^2}{2}\Bigg|_a^b = \frac{1}{b-a}\cdot\frac{b^2-a^2}{2} = \frac{(b+a)(b-a)}{2(b-a)} = \frac{a+b}{2} \qquad \blacksquare$$

### Derivazione di $\text{Var}(X)$ per $X \sim \text{Unif}(a,b)$

$E[X^2] = \displaystyle\int_a^b x^2 \cdot \frac{1}{b-a}\,dx = \frac{b^3-a^3}{3(b-a)} = \frac{a^2+ab+b^2}{3}$

$\text{Var}(X) = \frac{a^2+ab+b^2}{3} - \left(\frac{a+b}{2}\right)^2 = \frac{4(a^2+ab+b^2) - 3(a+b)^2}{12} = \frac{a^2-2ab+b^2}{12} = \frac{(b-a)^2}{12} \qquad \blacksquare$

### Derivazione dell'assenza di memoria dell'Esponenziale

$P(X > t) = \displaystyle\int_t^\infty \lambda e^{-\lambda x}\,dx = e^{-\lambda t}$

$P(X > s+t \mid X > s) = \frac{P(X > s+t)}{P(X > s)} = \frac{e^{-\lambda(s+t)}}{e^{-\lambda s}} = e^{-\lambda t} = P(X > t) \qquad \blacksquare$

### Derivazione della PDF di $Y = X^2$ per $X \sim \text{Unif}(0,1)$

**Metodo CDF:** $F_Y(y) = P(Y \leq y) = P(X^2 \leq y) = P(X \leq \sqrt{y}) = \sqrt{y}$ per $y \in [0,1]$

$f_Y(y) = F_Y'(y) = \frac{1}{2\sqrt{y}}$ per $y \in (0,1)$

La densità va a infinito vicino a $y=0$: la trasformazione "comprime" la probabilità vicino all'origine.

## 5. Esempi

**Esempio 1 — Uniforme: probabilità su un sottoinsieme.**

$X \sim \text{Unif}(0, 4)$. Calcolare $P(1 \leq X \leq 3)$ e $E[X^2]$.

$f_X(x) = 1/4$ su $[0,4]$.

$P(1 \leq X \leq 3) = \displaystyle\int_1^3 \frac{1}{4}\,dx = \frac{2}{4} = \frac{1}{2}$

$E[X^2] = \displaystyle\int_0^4 x^2 \cdot \frac{1}{4}\,dx = \frac{1}{4}\cdot\frac{64}{3} = \frac{16}{3}$

$\text{Var}(X) = \frac{16}{3} - 4 = \frac{4}{3}$. Verifica: $(b-a)^2/12 = 16/12 = 4/3$. ✓

---

**Esempio 2 — Esponenziale: durata di vita.**

$X \sim \text{Exp}(1/5)$ (durata media 5 anni). Prob. che duri più di 3 anni?

$P(X > 3) = e^{-3/5} = e^{-0.6} \approx 0.5488$

$P(1 < X < 4) = F_X(4) - F_X(1) = (1-e^{-4/5}) - (1-e^{-1/5}) = e^{-0.2} - e^{-0.8} \approx 0.8187 - 0.4493 = 0.3694$

---

**Esempio 3 — Assenza di memoria dell'Esponenziale.**

$X \sim \text{Exp}(\lambda)$. Dato che il componente ha già funzionato 2 anni, prob. che duri altri 3?

$P(X > 5 \mid X > 2) = P(X > 3) = e^{-3\lambda}$

La durata residua ha la stessa distribuzione della durata originale: "un componente esponenziale non invecchia".

---

**Esempio 4 — Verifica che una funzione è una PDF.**

Verificare che $f(x) = ce^{-x^2/2}$ per $c = 1/\sqrt{2\pi}$ è una PDF su $\mathbb{R}$.

$\displaystyle\int_{-\infty}^{+\infty} \frac{1}{\sqrt{2\pi}}e^{-x^2/2}\,dx = 1$ (integrale gaussiano standard). ✓

Questa è la densità della distribuzione Normale standard $\mathcal{N}(0,1)$.

---

**Esempio 5 — Calcolo della CDF dalla PDF.**

$f_X(x) = 2x$ per $x \in [0,1]$. Trovare $F_X$ e $P(1/3 < X < 2/3)$.

$F_X(x) = \displaystyle\int_0^x 2t\,dt = x^2$ per $x \in [0,1]$

$P(1/3 < X < 2/3) = F_X(2/3) - F_X(1/3) = (4/9) - (1/9) = 3/9 = 1/3$

Verifica: la mediana è $F_X(m) = 1/2 \Rightarrow m = 1/\sqrt{2} \approx 0.707$.

---

**Esempio 6 — Trasformazione: $Y = -\ln(X)$ con $X \sim \text{Unif}(0,1)$.**

$g^{-1}(y) = e^{-y}$, $\lvert \frac{d}{dy}e^{-y}\rvert = e^{-y}$

$f_Y(y) = f_X(e^{-y}) \cdot e^{-y} = 1 \cdot e^{-y} = e^{-y}$ per $y > 0$

Quindi $Y \sim \text{Exp}(1)$. Questo è il metodo della **trasformazione inversa** per simulare una Esponenziale da una Uniforme!

---

**Esempio 7 — Valore atteso da un'integrazione per parti.**

$X \sim \text{Exp}(\lambda)$. Calcolare $E[X]$.

$E[X] = \displaystyle\int_0^\infty x \lambda e^{-\lambda x}\,dx$

Integrazione per parti con $u = x$, $dv = \lambda e^{-\lambda x}dx$:

$= \left[-xe^{-\lambda x}\right]_0^\infty + \displaystyle\int_0^\infty e^{-\lambda x}\,dx = 0 + \left[-\frac{1}{\lambda}e^{-\lambda x}\right]_0^\infty = \frac{1}{\lambda}$

## 6. Grafico

```plot
{"fn":"x>=0?0.5*Math.exp(-0.5*x):0","domain":[0,8],"yDomain":[-0.02,0.55],"title":"PDF di Exp(λ=0.5) — f(x) = λe^{-λx}","label1":"f(x)=0.5e^{-0.5x}"}
```

## 7. Interattivo

```slider
{"fn":"x>=a&&x<=b?1/(b-a):0","domain":[-1,6],"yDomain":[-0.05,2.5],"params":[{"name":"a","min":0,"max":4,"step":0.5,"default":0},{"name":"b","min":1,"max":5,"step":0.5,"default":2}],"title":"Uniforme(a,b): densità 1/(b-a)"}
```

## 8. Errori comuni

1. **Interpretare $f_X(x)$ come probabilità.** La PDF non è una probabilità: $f_X(x)$ può essere maggiore di 1, e $f_X(x_0)$ non è $P(X = x_0)$ (che è zero). Solo $\int_a^b f_X(x)\,dx$ è una probabilità.

2. **Dimenticare che $P(X = x) = 0$ per le VA continue.** Per le VA continue, eventi del tipo "$X$ vale esattamente 3.14159" hanno probabilità zero. Non ha senso calcolare $P(X = 3)$ con la formula discreta.

3. **Confondere PDF e CDF.** La CDF è sempre compresa in $[0,1]$; la PDF può essere $> 1$. La PDF si ottiene **derivando** la CDF, non il contrario. Un errore classico è integrare la PDF e poi usare il risultato come CDF senza aggiungere la costante di integrazione (la CDF deve valere 0 a $-\infty$).

4. **Dimenticare il valore assoluto nel metodo Jacobiano.** La formula $f_Y(y) = f_X(g^{-1}(y))\cdot \lvert \frac{d}{dy}g^{-1}(y) \rvert$ richiede il valore assoluto della derivata. Dimenticarlo porta a densità negative per trasformazioni decrescenti.

5. **Usare gli estremi sbagliati negli integrali.** La PDF è definita su tutto $\mathbb{R}$ (con valore 0 fuori dal supporto). Per l'Esponenziale, integrare da $0$ a $\infty$, non da $-\infty$. Per l'Uniforme$(a,b)$, integrare da $a$ a $b$.

6. **Scambiare media e varianza per l'Esponenziale.** $E[X] = 1/\lambda$ e $\text{Var}(X) = 1/\lambda^2$. La deviazione standard è $1/\lambda$, uguale alla media. Un errore frequente è usare $\lambda$ come media invece di $1/\lambda$.

7. **Pensare che la CDF continua non possa avere derivata nulla.** La CDF può essere costante in regioni dove $f_X = 0$. Per esempio, $\text{Exp}(\lambda)$ ha $F_X(x) = 0$ per $x < 0$ (quindi $F_X' = 0$ per $x < 0$, coerente con $f_X = 0$ lì).

## 9. Applicazioni reali

**Fisica e ingegneria.** L'Esponenziale modella i tempi di decadimento radioattivo (mezza vita), i tempi di vita di componenti elettronici, gli intervalli tra arrivi in un processo di Poisson. L'assenza di memoria riflette il fatto che gli atomi "non invecchiano".

**Finanza e assicurazioni.** La distribuzione dei rendimenti azionari giornalieri si modella con distribuzioni continue (spesso Normale o t di Student con code pesanti). I premi assicurativi si calcolano come valori attesi di VA continue che modellano le perdite.

**Simulazione Monte Carlo.** Il metodo della trasformazione inversa ($Y = F_X^{-1}(U)$ con $U \sim \text{Unif}(0,1)$) permette di generare al computer campioni da qualsiasi distribuzione continua. È alla base di ogni simulatore statistico.

**Statistica medica.** I tempi di sopravvivenza dei pazienti (analisi di sopravvivenza) usano distribuzioni continue come l'Esponenziale e la Weibull. Le stime di Kaplan-Meier sono versioni non parametriche della CDF.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| PDF | $f_X(x) \geq 0$, $\int f_X = 1$ | Non è una probabilità |
| Probabilità | $P(a \leq X \leq b) = \int_a^b f_X(x)\,dx$ | $P(X=x)=0$ sempre |
| CDF | $F_X(x) = \int_{-\infty}^x f_X(t)\,dt$ | Continua, crescente |
| PDF da CDF | $f_X(x) = F_X'(x)$ | Dove $F_X$ è derivabile |
| Valore atteso | $E[X] = \int_{-\infty}^{+\infty} x f_X(x)\,dx$ | Deve convergere assolutamente |
| LOTUS | $E[g(X)] = \int g(x) f_X(x)\,dx$ | Non serve la distribuzione di $g(X)$ |
| Varianza | $\text{Var}(X) = E[X^2] - (E[X])^2$ | Come nel caso discreto |
| Unif$(a,b)$ | $f = 1/(b-a)$ | $E = (a+b)/2$, $\text{Var} = (b-a)^2/12$ |
| Exp$(\lambda)$ | $f = \lambda e^{-\lambda x}$ per $x>0$ | $E = 1/\lambda$, $\text{Var} = 1/\lambda^2$ |
| Jacobiano | $f_Y(y) = f_X(g^{-1}(y)) \cdot \lvert (g^{-1})'(y) \rvert$ | Solo per $g$ monotona |

## 11. Esercizi

<details>
<summary>Esercizio 1: Verificare che è una PDF e trovare la CDF</summary>

Sia $f(x) = 3x^2$ per $x \in [0,1]$, zero altrove. (a) Verificare che è una PDF. (b) Trovare $F_X(x)$. (c) Calcolare $P(0.5 < X < 0.8)$.

**Soluzione.**

(a) $f(x) \geq 0$ su $[0,1]$. $\int_0^1 3x^2\,dx = [x^3]_0^1 = 1$. ✓

(b) $F_X(x) = \int_0^x 3t^2\,dt = x^3$ per $x \in [0,1]$; $F_X(x)=0$ per $x<0$; $F_X(x)=1$ per $x>1$.

(c) $P(0.5 < X < 0.8) = (0.8)^3 - (0.5)^3 = 0.512 - 0.125 = 0.387$

</details>

<details>
<summary>Esercizio 2: Valore atteso e varianza di Unif(2,6)</summary>

$X \sim \text{Unif}(2,6)$. Calcolare $E[X]$, $\text{Var}(X)$, $P(X > 4)$, mediana.

**Soluzione.**

$E[X] = (2+6)/2 = 4$

$\text{Var}(X) = (6-2)^2/12 = 16/12 = 4/3$

$P(X > 4) = \int_4^6 \frac{1}{4}\,dx = \frac{2}{4} = 0.5$ (simmetria attorno alla media)

Mediana: $F_X(m) = 0.5 \Rightarrow (m-2)/4 = 0.5 \Rightarrow m = 4$ (uguale alla media per la simmetria)

</details>

<details>
<summary>Esercizio 3: Esponenziale e assenza di memoria</summary>

I guasti di un server seguono $X \sim \text{Exp}(1/3)$ (media 3 ore). (a) Probabilità che il server funzioni più di 5 ore. (b) Dato che ha già funzionato 2 ore senza guasti, probabilità di arrivare a 5 ore.

**Soluzione.**

(a) $P(X > 5) = e^{-5/3} \approx e^{-1.667} \approx 0.189$

(b) Per l'assenza di memoria: $P(X > 5 \mid X > 2) = P(X > 3) = e^{-3/3} = e^{-1} \approx 0.368$

La "distanza residua" di 3 ore ha la stessa distribuzione di una nuova Exp(1/3).

</details>

<details>
<summary>Esercizio 4: LOTUS applicata</summary>

$X \sim \text{Unif}(0, \pi)$. Calcolare $E[\sin(X)]$.

**Soluzione.**

$E[\sin(X)] = \int_0^\pi \sin(x) \cdot \frac{1}{\pi}\,dx = \frac{1}{\pi}[-\cos(x)]_0^\pi = \frac{1}{\pi}(-\cos\pi + \cos 0) = \frac{1}{\pi}(1+1) = \frac{2}{\pi}$

Nota: $E[\sin(X)] = 2/\pi \approx 0.637 \neq \sin(E[X]) = \sin(\pi/2) = 1$. La non-linearità di sin conta!

</details>

<details>
<summary>Esercizio 5: Trasformazione di variabile</summary>

$X \sim \text{Unif}(0,1)$. Trovare la PDF di $Y = -2\ln(X)$.

**Soluzione.**

$g^{-1}(y) = e^{-y/2}$, $\frac{d}{dy}e^{-y/2} = -\frac{1}{2}e^{-y/2}$, valore assoluto: $\frac{1}{2}e^{-y/2}$.

$f_Y(y) = f_X(e^{-y/2}) \cdot \frac{1}{2}e^{-y/2} = 1 \cdot \frac{1}{2}e^{-y/2}$ per $y > 0$

Quindi $Y \sim \text{Exp}(1/2)$ con media $E[Y] = 2$.

</details>

<details>
<summary>Esercizio 6: Calcolo della mediana</summary>

$X \sim \text{Exp}(\lambda)$. Trovare la mediana $m$ tale che $P(X \leq m) = 0.5$.

**Soluzione.**

$F_X(m) = 1 - e^{-\lambda m} = 0.5$

$e^{-\lambda m} = 0.5 \Rightarrow -\lambda m = \ln(0.5) \Rightarrow m = \frac{\ln 2}{\lambda}$

La mediana è $\ln(2)/\lambda \approx 0.693/\lambda < 1/\lambda = E[X]$. La mediana è inferiore alla media perché la distribuzione Esponenziale è asimmetrica verso destra.

</details>

<details>
<summary>Esercizio 7: Percentile e intervallo di confidenza</summary>

$X \sim \text{Unif}(0, 10)$. Trovare il 90° percentile e l'intervallo $[a, b]$ simmetrico attorno alla media contenente il 60% della probabilità.

**Soluzione.**

90° percentile: $F_X(p_{0.9}) = 0.9 \Rightarrow p_{0.9}/10 = 0.9 \Rightarrow p_{0.9} = 9$.

Intervallo simmetrico: vogliamo $P(5-d < X < 5+d) = 0.6 \Rightarrow \int_{5-d}^{5+d} \frac{1}{10}\,dx = \frac{2d}{10} = 0.6 \Rightarrow d = 3$.

Intervallo: $[2, 8]$.

</details>

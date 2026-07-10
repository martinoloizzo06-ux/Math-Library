---
id: probabilita-07-funzioni-va
subject: probabilita
topic_it: Variabili aleatorie
topic_en: Random variables
title_it: Funzioni di variabili aleatorie
title_en: Functions of random variables
level: blue
order: 7
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 7 — Trasformazioni di VA"
---

## 1. Intuizione — analogia concreta + perché si studia

Se sai che la temperatura $X$ di un forno è una VA con una certa distribuzione, come calcoli la distribuzione dell'energia irradiata $Y = \sigma X^4$? Se sai che il guadagno di un investimento $X$ è distribuito come una Normale, come è distribuito il capitale finale $Y = e^X$? Queste domande richiedono la teoria delle **trasformazioni di variabili aleatorie**.

Il problema è fondamentale: dato che conosci la distribuzione di $X$ e calcoli $Y = g(X)$, qual è la distribuzione di $Y$? Non basta conoscere $E[g(X)]$ (che si calcola con LOTUS); a volte serve la distribuzione completa di $Y$, cioè la sua PDF o CDF.

L'intuizione geometrica del metodo Jacobiano è questa: se $g$ "schiaccia" un intervallo di $X$ (cioè la derivata di $g^{-1}$ è piccola in modulo), la probabilità si concentra e la densità di $Y$ aumenta; se $g$ "allarga" un intervallo, la densità di $Y$ diminuisce. Il fattore $\lvert (g^{-1})' \rvert$ corregge esattamente questa distorsione.

I metodi che si studiano sono tre: il **metodo della CDF** (universale ma a volte laborioso), il **metodo Jacobiano** (diretto per funzioni monotone), e la **funzione generatrice dei momenti** (che identifica la distribuzione dai suoi momenti). Questi strumenti compaiono in ogni area della probabilità applicata: dalla teoria delle distribuzioni statistiche ai modelli di trasformazione in machine learning (normalizing flows).

## 2. Prerequisiti

- Variabili aleatorie continue: PDF, CDF, valore atteso
- Calcolo: derivate, integrali, funzioni composte, teorema della funzione inversa
- Teorema fondamentale del calcolo
- Derivata della funzione inversa: se $y = g(x)$, allora $\frac{dy}{dx} = 1 / \frac{dx}{dy}$
- Serie di Taylor: $e^x = \sum_{k=0}^\infty x^k/k!$

## 3. Teoria

### Metodo della CDF

Il metodo più generale. Per trovare la distribuzione di $Y = g(X)$:

**Passo 1.** Esprimere l'evento $\{Y \leq y\}$ in termini di $X$: trovare l'insieme $A_y = \{x : g(x) \leq y\}$.

**Passo 2.** Calcolare la CDF di $Y$: $F_Y(y) = P(Y \leq y) = P(X \in A_y) = \int_{A_y} f_X(x)\,dx$.

**Passo 3.** Derivare: $f_Y(y) = F_Y'(y)$.

Questo metodo funziona per qualsiasi $g$, anche non monotona o non continua.

### Metodo Jacobiano (funzioni monotone)

Se $g$ è **strettamente monotona** e **derivabile** su tutto il supporto di $X$, allora $Y = g(X)$ ha PDF:

$$f_Y(y) = f_X(g^{-1}(y)) \cdot \left|\frac{d}{dy}g^{-1}(y)\right|$$

Il termine $\lvert \frac{d}{dy}g^{-1}(y) \rvert$ è chiamato **Jacobiano** della trasformazione (in una variabile, è il valore assoluto della derivata della funzione inversa).

**Derivazione:** Se $g$ è crescente, $F_Y(y) = P(g(X) \leq y) = P(X \leq g^{-1}(y)) = F_X(g^{-1}(y))$. Derivando per $y$: $f_Y(y) = f_X(g^{-1}(y)) \cdot (g^{-1})'(y)$.

Se $g$ è decrescente, $F_Y(y) = P(g(X) \leq y) = P(X \geq g^{-1}(y)) = 1 - F_X(g^{-1}(y))$. Derivando: $f_Y(y) = -f_X(g^{-1}(y)) \cdot (g^{-1})'(y) = f_X(g^{-1}(y)) \cdot \lvert (g^{-1})'(y) \rvert$ (negativo del negativo).

In entrambi i casi si arriva alla stessa formula con il valore assoluto.

### Distribuzione log-normale

Se $X \sim \mathcal{N}(\mu, \sigma^2)$ e $Y = e^X$, allora $Y$ ha distribuzione **log-normale** $\text{LogN}(\mu, \sigma^2)$.

**PDF della log-normale:** $g^{-1}(y) = \ln y$, $(g^{-1})'(y) = 1/y$:

$$f_Y(y) = \frac{1}{y\sigma\sqrt{2\pi}}\exp\!\left(-\frac{(\ln y - \mu)^2}{2\sigma^2}\right), \quad y > 0$$

$$E[Y] = e^{\mu + \sigma^2/2}, \qquad \text{Var}(Y) = (e^{\sigma^2}-1)e^{2\mu+\sigma^2}$$

Usata per modellare prezzi di azioni (legge di Black-Scholes), redditi, lunghezze di parole nel linguaggio naturale.

### Funzione generatrice dei momenti (MGF)

Per una VA $X$ (discreta o continua), la **MGF** è:

$$M_X(t) = E[e^{tX}]$$

La MGF esiste quando l'integrale (o la serie) converge in un intorno aperto di $t=0$.

**Proprietà fondamentale:** se $M_X(t)$ esiste in un intorno di $t=0$, allora:

$$E[X^n] = M_X^{(n)}(0) = \left.\frac{d^n}{dt^n}M_X(t)\right|_{t=0}$$

**Unicità:** se $M_X(t) = M_Y(t)$ per tutti i $t$ in un intorno di 0, allora $X$ e $Y$ hanno la stessa distribuzione.

**Somme indipendenti:** se $X$ e $Y$ sono indipendenti:

$$M_{X+Y}(t) = M_X(t) \cdot M_Y(t)$$

Questo è il teorema più potente della MGF: moltiplicare le MGF corrisponde a convoluzione delle distribuzioni.

### Momenti, cumulanti e asimmetria

Il **momento di ordine $n$** è $\mu_n = E[X^n]$.

Il **momento centrale di ordine $n$** è $\mu_n' = E[(X - E[X])^n]$.

**Asimmetria (skewness):** $\gamma_1 = \dfrac{\mu_3'}{\sigma^3}$. Misura quanto la distribuzione è asimmetrica.
- $\gamma_1 > 0$: coda destra più lunga (distribuzione positivamente asimmetrica)
- $\gamma_1 < 0$: coda sinistra più lunga
- $\gamma_1 = 0$: simmetria (non implica normalità)

**Curtosi (kurtosis):** $\gamma_2 = \dfrac{\mu_4'}{\sigma^4} - 3$. Misura lo spessore delle code rispetto alla Normale.
- $\gamma_2 = 0$: code come la Normale (mesocurtica)
- $\gamma_2 > 0$: code più pesanti della Normale (leptocurtica)
- $\gamma_2 < 0$: code più leggere della Normale (platicurtica)

La sottrazione di 3 normalizza rispetto alla Normale standard (che ha $\mu_4' = 3\sigma^4$).

### Trasformazioni non monotone: metodo CDF

Se $g$ non è monotona (es. $Y = X^2$ con $X$ che assume valori positivi e negativi), il metodo CDF è necessario. Per $Y = X^2$:

$F_Y(y) = P(X^2 \leq y) = P(-\sqrt{y} \leq X \leq \sqrt{y}) = F_X(\sqrt{y}) - F_X(-\sqrt{y})$

$f_Y(y) = \frac{1}{2\sqrt{y}}\left[f_X(\sqrt{y}) + f_X(-\sqrt{y})\right]$ per $y > 0$

## 4. Derivazioni

### Derivazione della MGF della Normale

$X \sim \mathcal{N}(\mu, \sigma^2)$, $f_X(x) = \frac{1}{\sigma\sqrt{2\pi}}e^{-(x-\mu)^2/(2\sigma^2)}$.

$M_X(t) = E[e^{tX}] = \frac{1}{\sigma\sqrt{2\pi}}\int_{-\infty}^\infty e^{tx} e^{-(x-\mu)^2/(2\sigma^2)}\,dx$

Completando il quadrato nell'esponente:

$tx - \frac{(x-\mu)^2}{2\sigma^2} = -\frac{1}{2\sigma^2}\left[(x-\mu)^2 - 2t\sigma^2 x\right] = -\frac{(x-(\mu+t\sigma^2))^2}{2\sigma^2} + \mu t + \frac{\sigma^2 t^2}{2}$

L'integrale del termine gaussiano vale 1, quindi:

$$M_X(t) = e^{\mu t + \sigma^2 t^2/2}$$

### Derivazione dei momenti della Normale da MGF

$M_X(t) = e^{\mu t + \sigma^2 t^2/2}$

$M_X'(t) = (\mu + \sigma^2 t)e^{\mu t + \sigma^2 t^2/2}$

$E[X] = M_X'(0) = \mu$. ✓

$M_X''(t) = \sigma^2 e^{\mu t + \sigma^2 t^2/2} + (\mu+\sigma^2 t)^2 e^{\mu t + \sigma^2 t^2/2}$

$E[X^2] = M_X''(0) = \sigma^2 + \mu^2$, quindi $\text{Var}(X) = \sigma^2$. ✓

### Derivazione della distribuzione chi-quadro da somma di normali

Se $Z_1, \ldots, Z_n \sim \mathcal{N}(0,1)$ i.i.d., ogni $Z_i^2$ ha MGF $M_{Z_i^2}(t) = (1-2t)^{-1/2}$ per $t < 1/2$.

Per l'indipendenza: $M_{\sum Z_i^2}(t) = \prod_i M_{Z_i^2}(t) = (1-2t)^{-n/2}$.

Questa è la MGF di una distribuzione $\chi^2(n)$.

## 5. Esempi

**Esempio 1 — Metodo CDF: $Y = X^2$ con $X \sim \text{Unif}(0,1)$.**

$F_Y(y) = P(X^2 \leq y) = P(X \leq \sqrt{y}) = \sqrt{y}$ per $y \in [0,1]$.

$f_Y(y) = \frac{1}{2\sqrt{y}}$ per $y \in (0,1)$.

La densità esplode verso $y=0$: la trasformazione quadratica comprime l'intervallo $[0,\varepsilon]$ in $[0,\varepsilon^2]$, quindi la probabilità si concentra.

---

**Esempio 2 — Metodo Jacobiano: $Y = e^X$ con $X \sim \text{Exp}(1)$.**

$f_X(x) = e^{-x}$ per $x > 0$. $g^{-1}(y) = \ln y$, $\lvert (g^{-1})'(y)\rvert = 1/y$.

$f_Y(y) = e^{-\ln y} \cdot \frac{1}{y} = \frac{1}{y} \cdot \frac{1}{y} = \frac{1}{y^2}$ per $y \geq 1$.

Verifica: $\int_1^\infty 1/y^2\,dy = [-1/y]_1^\infty = 1$. ✓

---

**Esempio 3 — Trasformazione lineare di una Normale.**

$X \sim \mathcal{N}(\mu, \sigma^2)$, $Y = aX + b$ ($a \neq 0$). $g^{-1}(y) = (y-b)/a$, $\lvert (g^{-1})'\rvert = 1/\lvert a\rvert$.

$f_Y(y) = \frac{1}{\lvert a\rvert}\cdot\frac{1}{\sigma\sqrt{2\pi}}\exp\!\left(-\frac{((y-b)/a-\mu)^2}{2\sigma^2}\right) = \frac{1}{\lvert a\rvert\sigma\sqrt{2\pi}}\exp\!\left(-\frac{(y-(a\mu+b))^2}{2a^2\sigma^2}\right)$

Quindi $Y \sim \mathcal{N}(a\mu+b, a^2\sigma^2)$. La Normale è chiusa rispetto a trasformazioni lineari.

---

**Esempio 4 — MGF per trovare momenti della Poisson.**

$X \sim \text{Pois}(\lambda)$. $M_X(t) = e^{\lambda(e^t - 1)}$.

$M_X'(t) = \lambda e^t \cdot e^{\lambda(e^t-1)}$

$E[X] = M_X'(0) = \lambda$. ✓

$M_X''(t) = \lambda e^t e^{\lambda(e^t-1)} + (\lambda e^t)^2 e^{\lambda(e^t-1)}$

$E[X^2] = M_X''(0) = \lambda + \lambda^2$, quindi $\text{Var}(X) = \lambda$. ✓

---

**Esempio 5 — Metodo CDF per $Y = X^2$ con $X \sim \mathcal{N}(0,1)$.**

$P(Y \leq y) = P(X^2 \leq y) = P(-\sqrt{y} \leq X \leq \sqrt{y}) = \Phi(\sqrt{y}) - \Phi(-\sqrt{y}) = 2\Phi(\sqrt{y}) - 1$ per $y > 0$.

$f_Y(y) = \frac{d}{dy}[2\Phi(\sqrt{y})-1] = 2\phi(\sqrt{y})\cdot\frac{1}{2\sqrt{y}} = \frac{\phi(\sqrt{y})}{\sqrt{y}} = \frac{1}{\sqrt{2\pi y}}e^{-y/2}$

Questa è la PDF di $\chi^2(1)$ (chi-quadro con 1 grado di libertà): $f(y) = \frac{y^{-1/2}e^{-y/2}}{2^{1/2}\Gamma(1/2)}$ con $\Gamma(1/2)=\sqrt{\pi}$.

---

**Esempio 6 — Distribuzione log-normale applicata alla finanza.**

Il prezzo di un'azione tra un mese è $Y = S_0 e^X$ dove $X \sim \mathcal{N}(\mu, \sigma^2)$ e $S_0 = 100$.

$E[Y] = S_0 e^{\mu + \sigma^2/2}$, $\text{Var}(Y) = S_0^2(e^{\sigma^2}-1)e^{2\mu+\sigma^2}$

Per $\mu = 0.01$ (mese) e $\sigma = 0.05$: $E[Y] = 100\,e^{0.01+0.00125} \approx 100 \cdot 1.0113 = 101.13$€

La mediana di $Y$ è $S_0 e^\mu = 100\,e^{0.01} \approx 101.0$€, inferiore alla media.

---

**Esempio 7 — Somma di normali indipendenti via MGF.**

$X \sim \mathcal{N}(\mu_1, \sigma_1^2)$, $Y \sim \mathcal{N}(\mu_2, \sigma_2^2)$ indipendenti. Distribuzione di $X+Y$?

$M_{X+Y}(t) = M_X(t)\cdot M_Y(t) = e^{\mu_1 t + \sigma_1^2 t^2/2}\cdot e^{\mu_2 t + \sigma_2^2 t^2/2} = e^{(\mu_1+\mu_2)t + (\sigma_1^2+\sigma_2^2)t^2/2}$

Questa è la MGF di $\mathcal{N}(\mu_1+\mu_2, \sigma_1^2+\sigma_2^2)$. La Normale è chiusa rispetto a somme.

## 6. Grafico

```plot
{"fn":"x>0?1/(x*Math.sqrt(2*Math.PI))*Math.exp(-Math.pow(Math.log(x),2)/2):0","domain":[0,5],"yDomain":[-0.02,0.7],"title":"PDF Log-normale(μ=0, σ=1)","label1":"f(x)"}
```

## 7. Interattivo

```slider
{"fn":"Math.exp(mu*x+sigma*sigma*x*x/2)","domain":[-2,2],"yDomain":[-0.1,10],"params":[{"name":"mu","min":-2,"max":2,"step":0.1,"default":0},{"name":"sigma","min":0.1,"max":2,"step":0.1,"default":1}],"title":"MGF di Normale(μ, σ²): M(t) = e^{μt + σ²t²/2}"}
```

## 8. Errori comuni

1. **Dimenticare il Jacobiano nel cambio di variabile.** La formula $f_Y(y) = f_X(g^{-1}(y))$ senza il fattore $\lvert (g^{-1})' \rvert$ è sbagliata. Il Jacobiano corregge la distorsione della scala. Senza di esso, la PDF di $Y$ non integra a 1.

2. **Applicare il metodo Jacobiano a funzioni non monotone.** Se $g$ non è monotona (es. $g(x) = x^2$ con $X$ che può essere negativo), occorre usare il metodo CDF. Il metodo Jacobiano funziona solo quando $g$ è strettamente crescente o strettamente decrescente.

3. **Confondere MGF e PDF.** $M_X(t) = E[e^{tX}]$ è una funzione di $t$, non una densità di probabilità. Il suo argomento è $t$, non $x$. Derivare $M_X(t)$ rispetto a $t$ in $t=0$ dà i momenti, non la PDF.

4. **Credere che l'assenza di MGF implichi assenza di momenti.** La distribuzione di Cauchy ha tutti i momenti di ordine $\geq 1$ infiniti, quindi la MGF non esiste. Ma esistono distribuzioni con momenti finiti per cui la MGF non esiste (es. la distribuzione log-normale ha tutti i momenti finiti ma la MGF è infinita per $t > 0$).

5. **Sbagliare il range della nuova variabile.** Quando si calcola la CDF di $Y = g(X)$, il range di $y$ dipende dall'immagine di $g$. Per $Y = e^X$ con $X \in \mathbb{R}$, $y$ varia in $(0, +\infty)$. Non includere il range corretto porta a densità che non integrano a 1.

6. **Confondere skewness e asimmetria visiva.** Una distribuzione con coda destra lunga ha $\gamma_1 > 0$ (positivamente asimmetrica), ma la media è a destra della mediana. L'intuizione "asimmetrica a destra = concentrazione a destra" è sbagliata: la concentrazione è a sinistra, la coda è a destra.

7. **Calcolare la varianza della log-normale con la formula della Normale.** $\text{Var}(e^X) \neq e^{\sigma^2}$. La varianza della log-normale è $(e^{\sigma^2}-1)e^{2\mu+\sigma^2}$, una formula non intuitiva che si deriva calcolando $E[Y^2] - (E[Y])^2$.

## 9. Applicazioni reali

**Finanza quantitativa.** Il modello di Black-Scholes assume che i prezzi delle azioni seguano una distribuzione log-normale. Questo permette di prezzare opzioni e altri derivati in forma chiusa. L'intera teoria si basa sulla trasformazione $Y = e^X$ con $X$ Normale.

**Ingegneria delle comunicazioni.** Se $X$ è il guadagno di un canale radio (distribuito come una Normale), allora la potenza ricevuta $P = X^2$ segue una distribuzione chi-quadro. Il calcolo della probabilità di errore in comunicazioni wireless usa direttamente queste trasformazioni.

**Machine learning: normalizing flows.** I "flussi normalizzanti" sono reti neurali che imparano trasformazioni $g$ invertibili per mappare una distribuzione semplice (es. Normale) in una distribuzione complessa dei dati. La formula Jacobiana è al cuore del calcolo della log-verosimiglianza.

**Statistica inferenziale.** Le distribuzioni $\chi^2$, $t$ di Student e $F$ di Fisher — fondamentali nei test di ipotesi — si derivano tutte da trasformazioni di variabili Normali. Capire queste trasformazioni è essenziale per comprendere perché i test statistici funzionano.

## 10. Riepilogo

| Metodo | Quando usare | Formula chiave |
| --- | --- | --- |
| Metodo CDF | Qualsiasi $g$, anche non monotona | $F_Y(y) = P(g(X) \leq y)$, poi derivare |
| Metodo Jacobiano | $g$ strettamente monotona e derivabile | $f_Y(y) = f_X(g^{-1}(y))\cdot \lvert (g^{-1})'(y)\rvert$ |
| MGF | Identificare distribuzione, calcolare momenti | $M_X(t) = E[e^{tX}]$, $E[X^n] = M_X^{(n)}(0)$ |
| Somme (MGF) | $X+Y$ con $X,Y$ indipendenti | $M_{X+Y}(t) = M_X(t) \cdot M_Y(t)$ |
| Skewness | Misurare asimmetria | $\gamma_1 = E[(X-\mu)^3]/\sigma^3$ |
| Curtosi | Misurare spessore code | $\gamma_2 = E[(X-\mu)^4]/\sigma^4 - 3$ |
| Log-normale | $X$ Normale, $Y = e^X$ | $E[Y] = e^{\mu+\sigma^2/2}$ |

## 11. Esercizi

<details>
<summary>Esercizio 1: Metodo CDF — Y = √X</summary>

$X \sim \text{Unif}(0,4)$. Trovare la PDF di $Y = \sqrt{X}$.

**Soluzione.**

$g^{-1}(y) = y^2$ (per $y \in [0,2]$), $\lvert (g^{-1})'(y)\rvert = 2y$.

$f_Y(y) = f_X(y^2)\cdot 2y = \frac{1}{4}\cdot 2y = \frac{y}{2}$ per $y \in [0,2]$.

Verifica: $\int_0^2 y/2\,dy = [y^2/4]_0^2 = 1$. ✓

$E[Y] = \int_0^2 y \cdot \frac{y}{2}\,dy = \frac{1}{2}\int_0^2 y^2\,dy = \frac{1}{2}\cdot\frac{8}{3} = \frac{4}{3}$

</details>

<details>
<summary>Esercizio 2: Jacobiano — Y = ln(X)</summary>

$X \sim \text{Exp}(\lambda)$. Trovare la PDF di $Y = \ln X$.

**Soluzione.**

$g^{-1}(y) = e^y$, $\lvert (g^{-1})'(y)\rvert = e^y$. $y$ varia in $(-\infty, +\infty)$ poiché $X > 0$.

$f_Y(y) = f_X(e^y)\cdot e^y = \lambda e^{-\lambda e^y}\cdot e^y = \lambda e^y e^{-\lambda e^y}$ per $y \in \mathbb{R}$.

Questa è la distribuzione di Gumbel del minimo. (Non è né Normale né Esponenziale.)

</details>

<details>
<summary>Esercizio 3: MGF della Binomiale</summary>

$X \sim \text{Bin}(n,p)$. (a) Calcolare la MGF. (b) Ricavare $E[X]$.

**Soluzione.**

(a) $M_X(t) = E[e^{tX}] = \sum_{k=0}^n e^{tk}\binom{n}{k}p^k(1-p)^{n-k} = \sum_{k=0}^n \binom{n}{k}(pe^t)^k(1-p)^{n-k} = (pe^t + 1-p)^n$

(b) $M_X'(t) = n(pe^t + 1-p)^{n-1}\cdot pe^t$

$E[X] = M_X'(0) = n(p+1-p)^{n-1}\cdot p = np$. ✓

</details>

<details>
<summary>Esercizio 4: Log-normale — applicazione finanziaria</summary>

Il rendimento mensile di un'azione è $X \sim \mathcal{N}(0.02, 0.04)$. Il prezzo iniziale è $S_0 = 50$€ e dopo un mese vale $S_1 = S_0 e^X$. Calcolare $E[S_1]$ e la probabilità che $S_1 > 55$.

**Soluzione.**

$E[S_1] = S_0 e^{\mu + \sigma^2/2} = 50\,e^{0.02 + 0.02} = 50\,e^{0.04} \approx 50 \cdot 1.0408 = 52.04$€

$P(S_1 > 55) = P(e^X > 55/50) = P(X > \ln 1.1) = P\!\left(Z > \frac{\ln 1.1 - 0.02}{0.2}\right)$

$\ln 1.1 \approx 0.0953$, quindi $P\!\left(Z > \frac{0.0953-0.02}{0.2}\right) = P(Z > 0.377) \approx 1 - 0.647 = 35.3\%$

</details>

<details>
<summary>Esercizio 5: Trasformazione non monotona</summary>

$X \sim \mathcal{N}(0,1)$. Trovare la PDF di $Y = \lvert X \rvert$.

**Soluzione.**

Per $y \geq 0$: $F_Y(y) = P(\lvert X \rvert \leq y) = P(-y \leq X \leq y) = \Phi(y) - \Phi(-y) = 2\Phi(y) - 1$

$f_Y(y) = 2\phi(y) = \frac{2}{\sqrt{2\pi}}e^{-y^2/2}$ per $y \geq 0$

Questa è la distribuzione semi-normale (o distribuzione di Maxwell con $n=1$).

</details>

<details>
<summary>Esercizio 6: Somma di VA esponenziali via MGF</summary>

$X_1, \ldots, X_n \sim \text{Exp}(\lambda)$ i.i.d. Identificare la distribuzione di $S_n = \sum_{i=1}^n X_i$.

**Soluzione.**

La MGF di $\text{Exp}(\lambda)$ è $M_{X_i}(t) = \lambda/(\lambda-t)$ per $t < \lambda$.

Per l'indipendenza: $M_{S_n}(t) = \prod_{i=1}^n \frac{\lambda}{\lambda-t} = \left(\frac{\lambda}{\lambda-t}\right)^n$

Questa è la MGF di una distribuzione $\text{Gamma}(n, \lambda)$. Quindi la somma di $n$ esponenziali i.i.d. è una Gamma.

</details>

<details>
<summary>Esercizio 7: Skewness e interpretazione</summary>

$X \sim \text{Exp}(\lambda)$. Calcolare la skewness $\gamma_1$.

**Soluzione.**

$E[X] = 1/\lambda$, $E[X^2] = 2/\lambda^2$, $E[X^3] = 6/\lambda^3$ (dalla MGF).

$\sigma^2 = \text{Var}(X) = 1/\lambda^2$, $\sigma = 1/\lambda$

$\mu_3' = E[(X-1/\lambda)^3] = E[X^3] - 3E[X^2]\cdot\frac{1}{\lambda} + 3E[X]\cdot\frac{1}{\lambda^2} - \frac{1}{\lambda^3}$

$= \frac{6}{\lambda^3} - \frac{6}{\lambda^3} + \frac{3}{\lambda^3} - \frac{1}{\lambda^3} = \frac{2}{\lambda^3}$

$\gamma_1 = \frac{2/\lambda^3}{(1/\lambda)^3} = 2$

La distribuzione esponenziale ha sempre skewness 2 (fortemente asimmetrica a destra) indipendentemente da $\lambda$.

</details>

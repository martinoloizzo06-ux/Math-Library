---
id: analisi-16-successioni
subject: analisi
topic_it: Successioni e serie
topic_en: Sequences and series
title_it: Successioni numeriche e limiti
title_en: Numerical sequences and limits
level: blue
order: 16
source_book: "W. Rudin, Principles of Mathematical Analysis; MIT OCW 18.01"
source_chapter: "Cap. 3 — Successioni"
---

## 1. Intuizione — Una lista infinita di numeri

Immagina di avere una lista infinita di numeri, uno per ogni giorno dell'anno a venire: il primo giorno guadagni 1 euro, il secondo 1/2 euro, il terzo 1/3 euro... Cosa succede andando avanti? I guadagni giornalieri si avvicinano sempre di più a zero, anche se non ci arrivano mai esattamente. Questo è il concetto di **successione convergente**: una lista infinita di numeri che "si stabilizza" verso un valore fisso man mano che andiamo avanti.

Oppure pensa a un pallone che rimbalza: ogni rimbalzo è la metà del precedente. La sequenza delle altezze $1, 1/2, 1/4, 1/8, \ldots$ converge a zero. Al contrario, una successione come $1, 2, 3, 4, \ldots$ non si stabilizza mai: diverge verso infinito.

Le successioni sono gli **atomi fondamentali dell'analisi matematica**: ogni concetto di limite, integrale, serie, si riduce infine allo studio del comportamento di una lista infinita di numeri.

---

## 2. Prerequisiti

Prima di studiare le successioni, assicurati di conoscere:

- **Insiemi di numeri reali** $\mathbb{R}$, $\mathbb{N}$: interi, razionali, reali
- **Valore assoluto** $\lvert x \rvert$: distanza di $x$ dallo zero
- **Funzioni reali** $f: A \to \mathbb{R}$: dominio, codominio, immagine
- **Limite di funzione** $\lim_{x \to \infty} f(x)$: comportamento per valori grandi
- **Disuguaglianze** e manipolazione algebrica di espressioni con $n$
- **Principio di induzione matematica**: per dimostrazioni su tutti gli $n \in \mathbb{N}$

---

## 3. Teoria — Definizioni formali

### Successione

Una **successione reale** è una funzione $a: \mathbb{N} \to \mathbb{R}$. Si scrive $(a_n)_{n \geq 1}$ oppure $\{a_n\}$. Il valore $a_n$ si chiama **termine** di indice $n$.

**Esempi fondamentali:**

| Successione | Primi termini | Comportamento |
| --- | --- | --- |
| $a_n = \dfrac{1}{n}$ | $1,\, \tfrac{1}{2},\, \tfrac{1}{3},\, \tfrac{1}{4},\ldots$ | Converge a $0$ |
| $a_n = n^2$ | $1,\, 4,\, 9,\, 16,\ldots$ | Diverge a $+\infty$ |
| $a_n = (-1)^n$ | $-1,\, 1,\, -1,\, 1,\ldots$ | Irregolare |
| $a_n = \left(1 + \tfrac{1}{n}\right)^n$ | $2,\, 2.25,\, 2.37,\ldots$ | Converge a $e$ |

### Convergenza — definizione epsilon-N

La successione $(a_n)$ **converge** al limite $L \in \mathbb{R}$ se:

$$\forall\, \varepsilon > 0,\quad \exists\, N \in \mathbb{N} : \quad n > N \implies \lvert a_n - L \rvert < \varepsilon$$

Si scrive $\displaystyle\lim_{n \to \infty} a_n = L$ oppure $a_n \to L$.

**Lettura simbolo per simbolo:**
- $\forall\, \varepsilon > 0$: per qualsiasi soglia di precisione, piccola quanto si vuole
- $\exists\, N$: esiste un indice soglia
- $n > N$: per tutti i termini dopo quella soglia
- $\lvert a_n - L \rvert < \varepsilon$: il termine dista meno di $\varepsilon$ dal limite

### Divergenza e irregolarità

- $(a_n)$ **diverge a $+\infty$** se $\forall M > 0, \exists N : n > N \implies a_n > M$
- $(a_n)$ **diverge a $-\infty$** se $\forall M > 0, \exists N : n > N \implies a_n < -M$
- $(a_n)$ è **irregolare** se non converge e non diverge a $\pm\infty$

### Successioni monotone e limitate

Una successione è:
- **crescente** se $a_{n+1} \geq a_n$ per ogni $n$
- **strettamente crescente** se $a_{n+1} > a_n$
- **decrescente** se $a_{n+1} \leq a_n$
- **limitata** se esiste $M > 0$ tale che $\lvert a_n \rvert \leq M$ per ogni $n$

---

## 4. Derivazione — Teorema fondamentale sulla monotonia

**Teorema:** Ogni successione monotona e limitata converge.

**Dimostrazione** (caso crescente):

Sia $(a_n)$ crescente e limitata superiormente. Per la completezza di $\mathbb{R}$, l'insieme $\{a_n : n \in \mathbb{N}\}$ ammette **estremo superiore**: sia $L = \sup_n a_n$.

Vogliamo mostrare che $a_n \to L$.

Sia $\varepsilon > 0$. Per la definizione di estremo superiore, esiste $N$ tale che $a_N > L - \varepsilon$ (altrimenti $L - \varepsilon$ sarebbe un maggiorante più piccolo, contraddizione).

Poiché la successione è crescente e $L$ è un maggiorante:

$$n > N \implies a_N \leq a_n \leq L$$

Quindi $L - \varepsilon < a_N \leq a_n \leq L$, da cui $\lvert a_n - L \rvert < \varepsilon$. $\square$

**Questo teorema è potentissimo:** permette di dimostrare la convergenza **senza** conoscere il limite in anticipo. Basta trovare monotonia e limitatezza.

---

## 5. Esempi risolti

**Esempio 1 — Limite di un rapporto polinomiale**

Calcolare $\displaystyle\lim_{n\to\infty} \frac{3n^2 + n}{2n^2 - 1}$.

Divido numeratore e denominatore per $n^2$ (il termine dominante):

$$\frac{3n^2 + n}{2n^2 - 1} = \frac{3 + \tfrac{1}{n}}{2 - \tfrac{1}{n^2}} \xrightarrow{n\to\infty} \frac{3 + 0}{2 - 0} = \frac{3}{2}$$

---

**Esempio 2 — Successione con fattoriale**

Calcolare $\displaystyle\lim_{n\to\infty} \frac{2^n}{n!}$.

Uso il criterio del rapporto: $r = \displaystyle\lim_{n\to\infty} \frac{a_{n+1}}{a_n} = \lim_{n\to\infty} \frac{2^{n+1}/(n+1)!}{2^n/n!} = \lim_{n\to\infty} \frac{2}{n+1} = 0 < 1$.

Quindi $\dfrac{2^n}{n!} \to 0$. Il fattoriale cresce molto più velocemente di $2^n$.

---

**Esempio 3 — Il numero $e$ come limite**

Dimostrare che $a_n = \left(1 + \dfrac{1}{n}\right)^n$ è crescente e limitata.

**Crescente:** usando la disuguaglianza AM-GM si dimostra $a_{n+1} \geq a_n$.

**Limitata:** per ogni $n$, sviluppando il binomio:

$$\left(1 + \frac{1}{n}\right)^n = \sum_{k=0}^n \binom{n}{k} \frac{1}{n^k} \leq \sum_{k=0}^n \frac{1}{k!} \leq \sum_{k=0}^\infty \frac{1}{k!} = e < 3$$

Quindi il limite esiste e si chiama per definizione $e \approx 2.71828\ldots$

---

**Esempio 4 — Successione ricorsiva**

Data $a_1 = 1$, $a_{n+1} = \sqrt{2 + a_n}$. Dimostrare che converge e trovare il limite.

**Passo 1 — Limitata superiormente:** per induzione, $a_n < 2$ per ogni $n$.
- Base: $a_1 = 1 < 2$ ✓
- Passo: se $a_n < 2$, allora $a_{n+1} = \sqrt{2 + a_n} < \sqrt{2 + 2} = 2$ ✓

**Passo 2 — Crescente:** per induzione, $a_{n+1} > a_n$.
- Base: $a_2 = \sqrt{3} > 1 = a_1$ ✓
- Passo: se $a_{n+1} > a_n$, allora $a_{n+2} = \sqrt{2 + a_{n+1}} > \sqrt{2 + a_n} = a_{n+1}$ ✓

Per il teorema, esiste $L = \lim a_n$. Passando al limite nell'equazione ricorsiva:

$$L = \sqrt{2 + L} \implies L^2 = 2 + L \implies L^2 - L - 2 = 0 \implies (L-2)(L+1) = 0$$

Poiché $L > 0$, si ha $L = 2$.

---

**Esempio 5 — Teorema dei Carabinieri (squeeze)**

Calcolare $\displaystyle\lim_{n\to\infty} \frac{\sin n}{n}$.

Poiché $\lvert \sin n \rvert \leq 1$ per ogni $n$:

$$-\frac{1}{n} \leq \frac{\sin n}{n} \leq \frac{1}{n}$$

Dato che $-\dfrac{1}{n} \to 0$ e $\dfrac{1}{n} \to 0$, per il teorema dei carabinieri: $\dfrac{\sin n}{n} \to 0$.

---

**Esempio 6 — Limite notevole con esponenziale**

Calcolare $\displaystyle\lim_{n\to\infty} \left(1 + \frac{x}{n}\right)^n$.

Scrivo $\left(1 + \dfrac{x}{n}\right)^n = \left[\left(1 + \dfrac{1}{n/x}\right)^{n/x}\right]^x$. Ponendo $m = n/x \to \infty$, riconosco il limite che definisce $e$:

$$\lim_{n\to\infty} \left(1 + \frac{x}{n}\right)^n = e^x$$

---

**Esempio 7 — Criterio del rapporto applicato**

Studiare $a_n = \dfrac{n^3}{3^n}$.

$$r = \lim_{n\to\infty} \frac{a_{n+1}}{a_n} = \lim_{n\to\infty} \frac{(n+1)^3}{3^{n+1}} \cdot \frac{3^n}{n^3} = \frac{1}{3} \lim_{n\to\infty} \left(\frac{n+1}{n}\right)^3 = \frac{1}{3} \cdot 1 = \frac{1}{3} < 1$$

Quindi $a_n \to 0$: l'esponenziale $3^n$ vince su qualsiasi potenza $n^3$.

---

## 6. Grafico — Comportamento di alcune successioni classiche

```plot
{"title":"Successioni a confronto","fn":"1/x","fn2":"Math.pow(1+1/x,x)","domain":[1,30],"yDomain":[0,3],"label1":"1/n → 0","label2":"(1+1/n)^n → e"}
```

Il grafico mostra due successioni fondamentali: $1/n$ che scende verso $0$ e $(1+1/n)^n$ che sale verso $e \approx 2.718$, illustrando come successioni diverse possono convergere a limiti molto diversi.

---

## 7. Slider — Velocità di convergenza di $(1 + a/n)^n \to e^a$

```slider
{"title":"Convergenza di (1+a/n)^n verso e^a","fn":"Math.pow(1+a/x,x)","domain":[1,100],"yDomain":[0,8],"pname":"a","pmin":0.1,"pmax":2,"pdefault":1,"pstep":0.1,"plabel":"a","label1":"(1+a/n)^n"}
```

Muovi il parametro $a$: vedi come la successione converge a $e^a$. Per $a=1$ converge a $e \approx 2.718$, per $a=2$ a $e^2 \approx 7.389$.

---

## 8. Errori comuni

**Errore 1 — Confondere $a_n \to 0$ con la serie che converge**

❌ "$a_n = 1/n \to 0$, quindi $\sum 1/n$ converge"

✓ La condizione $a_n \to 0$ è **necessaria** ma non sufficiente per la convergenza della serie. La serie armonica $\sum 1/n$ diverge.

---

**Errore 2 — Applicare il criterio del rapporto quando il limite non esiste**

❌ Usare il criterio del rapporto su $a_n = (-1)^n / n$ senza prendere il valore assoluto

✓ Il criterio del rapporto richiede $\lim \lvert a_{n+1}/a_n \rvert$. Per successioni con segno alternante, bisogna stare attenti: qui $\lvert a_{n+1}/a_n \rvert = n/(n+1) \to 1$, non conclusivo.

---

**Errore 3 — Dimenticare che $r=1$ non è conclusivo**

❌ "Il rapporto tende a 1, quindi la successione tende a 1"

✓ Se $r = 1$, il criterio non dice nulla. Ad esempio $a_n = n$ ha $a_{n+1}/a_n \to 1$ ma diverge, mentre $a_n = 1/n$ ha $a_{n+1}/a_n \to 1$ ma converge a 0.

---

**Errore 4 — Sbagliare il segno nel teorema dei carabinieri**

❌ Se $0 \leq a_n \leq b_n$ e $b_n \to 0$, allora $a_n \to 0$ — "ma vale anche per $a_n$ negativi?"

✓ Il teorema vale se $b_n \leq a_n \leq c_n$ con $b_n, c_n \to L$. Bisogna avere una **stima inferiore** e una **superiore**.

---

**Errore 5 — Fare algebra con il simbolo $\infty$**

❌ $\lim (a_n - b_n) = \lim a_n - \lim b_n = \infty - \infty = 0$

✓ Le forme indeterminate $\infty - \infty$, $0 \cdot \infty$, $\infty/\infty$ richiedono analisi separata. Non si può semplicemente sottrarre infiniti.

---

**Errore 6 — Confondere convergenza di $(a_n)$ con limitatezza**

❌ "La successione è limitata, quindi converge"

✓ $a_n = (-1)^n$ è limitata ($\lvert a_n \rvert = 1$) ma non converge (è irregolare). La limitatezza è necessaria per la convergenza, non sufficiente.

---

## 9. Applicazioni reali

**Calcolo numerico e algoritmi iterativi.** Molti algoritmi computazionali generano una successione di approssimazioni che converge alla soluzione esatta. Il metodo di Newton per trovare zeri di funzioni genera $x_{n+1} = x_n - f(x_n)/f'(x_n)$, una successione ricorsiva che, partendo da un punto vicino alla radice, converge con velocità quadratica. Analizzare la convergenza di questa successione è fondamentale per capire l'efficienza dell'algoritmo.

**Finanza e interesse composto.** Il capitale dopo $n$ periodi con tasso $r/n$ per periodo è $C \cdot (1 + r/n)^n$. Questa è esattamente la successione che converge a $C \cdot e^r$: il capitale con interesse composto continuo. La formula finanziaria dell'interesse continuo $Ce^{rt}$ emerge direttamente dal limite di una successione.

**Fisica — stati stazionari.** In termodinamica e meccanica statistica, le successioni descrivono l'avvicinamento di un sistema all'equilibrio termico. Se il sistema evolve con legge $T_{n+1} = \alpha T_n + (1-\alpha)T_{\text{ambiente}}$, la successione delle temperature converge (per $\lvert \alpha \rvert < 1$) alla temperatura ambiente: questo è il principio fisico del raffreddamento di Newton espresso in forma discreta.

---

## 10. Riepilogo

| Concetto | Definizione/Criterio | Esempio |
| --- | --- | --- |
| Convergenza | $\forall \varepsilon > 0, \exists N : n > N \Rightarrow \lvert a_n - L \rvert < \varepsilon$ | $1/n \to 0$ |
| Divergenza a $+\infty$ | $\forall M > 0, \exists N : n > N \Rightarrow a_n > M$ | $n^2 \to +\infty$ |
| Irregolare | Non converge, non diverge | $(-1)^n$ |
| Monotona + limitata | Converge (teorema) | $\left(1+1/n\right)^n \to e$ |
| Criterio del rapporto | $r = \lim \lvert a_{n+1}/a_n \rvert$: $r<1 \Rightarrow 0$, $r>1 \Rightarrow \infty$ | $2^n/n! \to 0$ |
| Squeeze | $b_n \leq a_n \leq c_n$, $b_n,c_n \to L \Rightarrow a_n \to L$ | $\sin n / n \to 0$ |
| Limite notevole | $\left(1 + x/n\right)^n \to e^x$ | Con $x=1$: $e$ |
| Limite notevole | $n^k / a^n \to 0$ per $a > 1$ | $n^3 / 3^n \to 0$ |

---

## 11. Esercizi

<details>
<summary>Esercizio 1 — Limite di rapporto polinomiale</summary>

Calcolare $\displaystyle\lim_{n\to\infty} \frac{5n^3 - 2n + 1}{3n^3 + n^2}$.

**Soluzione:**

Divido per $n^3$:

$$\frac{5n^3 - 2n + 1}{3n^3 + n^2} = \frac{5 - 2/n^2 + 1/n^3}{3 + 1/n} \xrightarrow{n\to\infty} \frac{5}{3}$$

</details>

<details>
<summary>Esercizio 2 — Criterio del rapporto</summary>

Studiare il comportamento di $a_n = \dfrac{3^n}{n!}$.

**Soluzione:**

$$r = \lim_{n\to\infty} \frac{a_{n+1}}{a_n} = \lim_{n\to\infty} \frac{3^{n+1}}{(n+1)!} \cdot \frac{n!}{3^n} = \lim_{n\to\infty} \frac{3}{n+1} = 0 < 1$$

Quindi $a_n \to 0$. Il fattoriale cresce più velocemente di qualsiasi esponenziale.

</details>

<details>
<summary>Esercizio 3 — Successione ricorsiva</summary>

Data $a_1 = 2$, $a_{n+1} = \dfrac{1}{2}\left(a_n + \dfrac{4}{a_n}\right)$. Dimostrare che converge e trovare il limite.

**Soluzione:**

**Limitata inferiormente:** per la disuguaglianza AM-GM, $a_{n+1} = \dfrac{a_n + 4/a_n}{2} \geq \sqrt{a_n \cdot \dfrac{4}{a_n}} = 2$. Quindi $a_n \geq 2$ per ogni $n$.

**Decrescente:** $a_{n+1} - a_n = \dfrac{4/a_n - a_n}{2} = \dfrac{4 - a_n^2}{2a_n} \leq 0$ poiché $a_n \geq 2$.

Per il teorema converge. Passando al limite: $L = \dfrac{1}{2}(L + 4/L)$, quindi $2L = L + 4/L$, $L^2 = 4$, $L = 2$ (positivo).

</details>

<details>
<summary>Esercizio 4 — Teorema dei carabinieri</summary>

Dimostrare che $\displaystyle\lim_{n\to\infty} \frac{(-1)^n \cdot n}{n^2 + 1} = 0$.

**Soluzione:**

$$\left\lvert \frac{(-1)^n \cdot n}{n^2 + 1} \right\rvert = \frac{n}{n^2 + 1} \leq \frac{n}{n^2} = \frac{1}{n} \to 0$$

Poiché $-\dfrac{1}{n} \leq \dfrac{(-1)^n n}{n^2+1} \leq \dfrac{1}{n}$ e entrambe tendono a $0$, per il teorema dei carabinieri il limite è $0$.

</details>

<details>
<summary>Esercizio 5 — Limite con esponenziale e polinomio</summary>

Calcolare $\displaystyle\lim_{n\to\infty} \frac{n^{100}}{1.01^n}$.

**Soluzione:**

È della forma $n^k / a^n$ con $a = 1.01 > 1$ e $k = 100$. Per il limite notevole:

$$\lim_{n\to\infty} \frac{n^k}{a^n} = 0 \quad \text{per ogni } a > 1, k > 0$$

Quindi il limite è $0$: l'esponenziale, anche con base di poco superiore a 1, batte qualsiasi potenza.

</details>

<details>
<summary>Esercizio 6 — Limite notevole con e</summary>

Calcolare $\displaystyle\lim_{n\to\infty} \left(1 - \frac{3}{n}\right)^n$.

**Soluzione:**

Scrivo $-3$ al posto di $x$ nel limite notevole $\left(1 + \dfrac{x}{n}\right)^n \to e^x$:

$$\left(1 - \frac{3}{n}\right)^n = \left(1 + \frac{-3}{n}\right)^n \to e^{-3} = \frac{1}{e^3}$$

</details>

<details>
<summary>Esercizio 7 — Analisi di successione oscillante</summary>

La successione $a_n = (-1)^n \cdot \dfrac{n}{n+1}$ converge, diverge, o è irregolare?

**Soluzione:**

Il valore assoluto è $\lvert a_n \rvert = \dfrac{n}{n+1} \to 1$. La successione oscilla tra valori che si avvicinano a $+1$ (indici pari) e $-1$ (indici dispari). Non si avvicina a nessun limite unico, non va a $\pm\infty$: è **irregolare**.

</details>

<details>
<summary>Esercizio 8 — Successione di Fibonacci e limite del rapporto</summary>

Nella successione di Fibonacci $F_1=1, F_2=1, F_{n+1}=F_n+F_{n-1}$, calcolare $\displaystyle\lim_{n\to\infty} \frac{F_{n+1}}{F_n}$.

**Soluzione:**

Ammettendo che il limite $L = \lim F_{n+1}/F_n$ esista (dimostrabile rigorosamente), dall'equazione $F_{n+1} = F_n + F_{n-1}$ divido per $F_n$:

$$\frac{F_{n+1}}{F_n} = 1 + \frac{F_{n-1}}{F_n} = 1 + \frac{1}{F_n/F_{n-1}}$$

Passando al limite: $L = 1 + \dfrac{1}{L}$, quindi $L^2 - L - 1 = 0$, $L = \dfrac{1 + \sqrt{5}}{2} \approx 1.618$ (sezione aurea $\varphi$).

</details>

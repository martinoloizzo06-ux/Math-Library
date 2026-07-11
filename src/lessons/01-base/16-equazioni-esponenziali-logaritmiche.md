---
id: base-16-equazioni-esponenziali-logaritmiche
subject: base
topic_it: Funzioni elementari
topic_en: Elementary functions
title_it: Equazioni e disequazioni esponenziali e logaritmiche
title_en: Exponential and logarithmic equations and inequalities
level: green
order: 16
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 6 — Equazioni trascendenti"
stato: da-rielaborare
---

## Intuizione e motivazione

Sai che un batterio si duplica ogni 20 minuti. Vuoi sapere quante ore ci vogliono per raggiungere un milione di batteri partendo da uno solo. Questo porta all'equazione $2^{3t} = 10^6$ (dove $t$ è in ore). Per risolverla, devi applicare il logaritmo. Ecco perché le equazioni esponenziali e logaritmiche sono fondamentali: emergono ogni volta che devi trovare *il tempo* di un processo di crescita o decadimento, il tasso di un investimento, la data di un reperto con il carbonio-14, il volume da cui parte un segnale acustico.

Nelle scienze naturali queste equazioni appaiono letteralmente ovunque: dalla farmacologia (quando smettere di prendere un farmaco) all'epidemiologia (quando un'epidemia raggiungerà il picco), dalla geologia (l'età delle rocce) all'astrofisica (la luminosità delle stelle). La tecnica di risoluzione è semplice: si applica la funzione inversa per "sbloccare" la variabile dall'esponente.

## Prerequisiti

- Proprietà delle potenze: $a^{m+n} = a^m \cdot a^n$, $(a^m)^n = a^{mn}$
- Proprietà dei logaritmi: prodotto, quoziente, potenza
- Formula del cambio di base: $\log_a x = \ln x / \ln a$
- Funzione quadratica e sostituzione algebrica

## Teoria passo-passo

### Equazioni esponenziali — Tipo 1: stessa base

Se $a^{f(x)} = a^{g(x)}$ con $a > 0$, $a \neq 1$, allora:

$$f(x) = g(x)$$

L'esponenziale è iniettiva: output uguali implicano input uguali.

**Strategia:** riscrivere entrambi i membri come potenze della stessa base, poi uguagliare gli esponenti.

### Equazioni esponenziali — Tipo 2: logaritmazione

Se non si riesce a ricondurre alla stessa base, si applica il logaritmo (di qualsiasi base, ma di solito $\ln$ o $\log$) a entrambi i membri.

Per $a^x = b$ con $b > 0$:

$$x \ln a = \ln b \implies x = \frac{\ln b}{\ln a} = \log_a b$$

### Equazioni esponenziali — Tipo 3: sostituzione

Quando l'equazione contiene $a^x$ e $a^{2x}$ (o potenze multiple), si pone $t = a^x > 0$ e si risolve l'equazione algebrica (spesso quadratica) in $t$.

Importante: alla fine si deve tornare alla variabile originale risolvendo $a^x = t_i$ per ogni radice accettabile. Le radici $t \leq 0$ vanno scartate perché $a^x > 0$ sempre.

### Equazioni logaritmiche — Metodo

1. **Unificare** tutti i logaritmi in un unico $\log_a[\ldots] = k$ o $\log_a f(x) = \log_a g(x)$.
2. **Applicare la funzione esponenziale** (funzione inversa): da $\log_a[\ldots] = k$ si ottiene $[\ldots] = a^k$.
3. **Risolvere** l'equazione algebrica risultante.
4. **Verificare le condizioni di esistenza**: ogni argomento di logaritmo deve essere strettamente positivo. Le soluzioni che non soddisfano le condizioni vanno scartate.

### Disequazioni esponenziali

$a^{f(x)} \bowtie a^{g(x)}$ (dove $\bowtie$ è $<$, $>$, $\leq$, $\geq$):

- Se $a > 1$: stessa direzione della disuguaglianza → $f(x) \bowtie g(x)$.
- Se $0 < a < 1$: si inverte la direzione → $f(x)$ confrontato con $g(x)$ in senso opposto.

Regola mnemonica: la funzione esponenziale $a^x$ è crescente se $a > 1$ e decrescente se $0 < a < 1$. Quando si "tolgono le basi", la disuguaglianza si conserva o si inverte a seconda della monotonia.

### Disequazioni logaritmiche

$\log_a f(x) \bowtie \log_a g(x)$ (con le condizioni di dominio $f(x) > 0$, $g(x) > 0$):

- Se $a > 1$: stessa direzione → $f(x) \bowtie g(x)$.
- Se $0 < a < 1$: si inverte la direzione.

Si devono intersecare le soluzioni trovate con le condizioni di dominio.

## Derivazioni commentate

### Come si risolve un'equazione esponenziale tipo 3: passo per passo

Risolvo $4^x - 3 \cdot 2^x - 4 = 0$.

**Passo 1 — Riconosco la struttura:** $4^x = (2^2)^x = (2^x)^2$.

L'equazione contiene $2^x$ e $(2^x)^2$: è una quadratica "mascherata" nella variabile $t = 2^x$.

**Passo 2 — Sostituzione:** posto $t = 2^x$ (con $t > 0$ perché $2^x > 0$ sempre):

$$t^2 - 3t - 4 = 0$$

**Passo 3 — Risolvo la quadratica:** $(t - 4)(t + 1) = 0 \implies t = 4$ oppure $t = -1$.

**Passo 4 — Scarto le soluzioni negative:** $t = -1$ è scartata perché $2^x > 0$. Rimane $t = 4$.

**Passo 5 — Torno alla variabile originale:** $2^x = 4 = 2^2 \implies x = 2$.

**Verifica:** $4^2 - 3 \cdot 2^2 - 4 = 16 - 12 - 4 = 0$ ✓

## Esempi graduati

**Esempio 1 — Stessa base (semplice)**

$2^{x+3} = 2^5$

Stessa base: $x + 3 = 5 \implies x = 2$.

---

**Esempio 2 — Riduzione alla stessa base**

$4^{x-1} = 8^x$: riscrivo come potenze di 2.

$2^{2(x-1)} = 2^{3x} \implies 2x - 2 = 3x \implies x = -2$

---

**Esempio 3 — Logaritmazione**

$3^x = 7$

$x \ln 3 = \ln 7 \implies x = \dfrac{\ln 7}{\ln 3} = \log_3 7 \approx 1{,}771$

---

**Esempio 4 — Sostituzione quadratica**

$5^{2x} - 6 \cdot 5^x + 5 = 0$

Posto $t = 5^x$: $t^2 - 6t + 5 = 0 \implies (t-1)(t-5) = 0$.

$t = 1 \implies 5^x = 1 \implies x = 0$.

$t = 5 \implies 5^x = 5 \implies x = 1$.

$S = \{0, 1\}$

---

**Esempio 5 — Equazione logaritmica (base logaritmo)**

$\log_3(x + 2) = 4$

$x + 2 = 3^4 = 81 \implies x = 79$

Verifica condizione: $x + 2 = 81 > 0$ ✓

---

**Esempio 6 — Equazione logaritmica (due logaritmi)**

$\ln(x+1) - \ln(x-1) = \ln 3$

$\ln\dfrac{x+1}{x-1} = \ln 3 \implies \dfrac{x+1}{x-1} = 3 \implies x+1 = 3x-3 \implies x = 2$

Verifica: $x + 1 = 3 > 0$ e $x - 1 = 1 > 0$ ✓. $\ln 3 - \ln 1 = \ln 3$ ✓

---

**Esempio 7 — Disequazione esponenziale con base $< 1$**

$\left(\dfrac{1}{3}\right)^{x-2} > \left(\dfrac{1}{3}\right)^{2x}$

Base $1/3 < 1$: si inverte. $x - 2 < 2x \implies -2 < x \implies x > -2$.

$S = (-2, +\infty)$

---

**Esempio 8 — Disequazione logaritmica**

$\log_{0{,}5}(2x-1) < \log_{0{,}5}(x+3)$

Base $0{,}5 < 1$: si inverte. $2x - 1 > x + 3 \implies x > 4$.

Condizioni di dominio: $2x - 1 > 0 \implies x > 1/2$ e $x + 3 > 0 \implies x > -3$.

Intersezione: $x > 4$.

$S = (4, +\infty)$

## Grafico

```plot
{
  "title": "Intersezione di eˣ e 3: soluzione di eˣ = 3 è x = ln 3",
  "fn": "Math.exp(x)",
  "fn2": "3",
  "domain": [-2, 3],
  "yDomain": [-1, 10],
  "label1": "f(x) = eˣ",
  "label2": "g(x) = 3"
}
```

## Elemento interattivo

```slider
{
  "title": "Trova graficamente la soluzione di aˣ = 5 al variare della base a",
  "fn": "Math.pow(Math.abs(a) < 0.01 ? 0.01 : a, x)",
  "domain": [-2, 4],
  "yDomain": [-1, 12],
  "pname": "a",
  "pmin": 1.2,
  "pmax": 5,
  "pdefault": 2,
  "pstep": 0.1,
  "plabel": "Base a",
  "label1": "f(x) = aˣ"
}
```

## Errori comuni

**Errore 1 — Non verificare le condizioni di esistenza nelle equazioni logaritmiche.**
Dopo aver trovato le soluzioni, bisogna sostituirle negli argomenti dei logaritmi e verificare che siano tutti positivi. Una soluzione che rende negativo un argomento va scartata anche se algebricamente corretta.

**Errore 2 — Applicare il logaritmo a un membro negativo o zero.**
Il logaritmo è definito solo per argomenti positivi. Se un'equazione porta a $\log(\text{numero negativo})$, la soluzione non esiste nel campo reale.

**Errore 3 — Dimenticare di scartare $t \leq 0$ nella sostituzione.**
Quando si pone $t = a^x$, bisogna ricordare che $a^x > 0$ sempre. Le radici negative dell'equazione in $t$ non corrispondono ad alcun $x$ reale.

**Errore 4 — Non invertire la disuguaglianza con base $< 1$.**
Nelle disequazioni esponenziali e logaritmiche con base $0 < a < 1$, la funzione è decrescente, quindi la disuguaglianza si inverte quando si "tolgono le basi". Dimenticare questo porta a un insieme soluzione sbagliato.

**Errore 5 — Applicare $\log$ a entrambi i membri senza considerare il segno.**
Il logaritmo è definito solo per valori positivi. Se $f(x) < 0$ in un'equazione del tipo $a^{f(x)} = b$, bisogna fare attenzione: il problema non è $f(x)$ nell'esponente (può essere negativo), ma bisogna assicurarsi che $b > 0$ prima di prendere il logaritmo.

**Errore 6 — Confondere $\log(a \cdot b)$ con $\log a \cdot \log b$.**
$\log(ab) = \log a + \log b$ (somma). Il prodotto dei logaritmi ($\log a \cdot \log b$) non ha una semplificazione utile.

**Errore 7 — Non usare il cambio di base per basi diverse.**
Se l'equazione ha esponenziali con basi diverse (es. $2^x$ e $3^x$), bisogna logaritmare entrambi i membri con un logaritmo comune ($\ln$ o $\log$) e usare $a^x = e^{x\ln a}$ per ricondurre a un'unica base.

## Applicazioni reali

**Radiodatazione (carbonio-14).** La quantità di carbonio-14 in un reperto decade secondo $N(t) = N_0 e^{-0{,}000121 \cdot t}$, dove $t$ è in anni. Per trovare l'età del reperto si misura $N/N_0$ e si risolve l'equazione esponenziale per $t$: $t = -\ln(N/N_0)/0{,}000121$. Questo ha permesso di datare la Sindone di Torino, le pitture rupestri di Lascaux e migliaia di altri reperti.

**Finanza — Tasso di rendimento.** Se un investimento cresce da $P$ a $A$ in $t$ anni con capitalizzazione continua, il tasso annuo si trova dall'equazione $A = Pe^{rt}$. Risolvendo: $r = \dfrac{\ln(A/P)}{t}$. Per esempio, se 1000 € diventano 1500 € in 5 anni: $r = \dfrac{\ln 1{,}5}{5} \approx \dfrac{0{,}405}{5} \approx 8{,}1\%$ annuo.

**Acustica — Livello sonoro.** Il livello di pressione sonora in decibel è $L = 20\log_{10}(p/p_0)$, dove $p_0 = 20\,\mu\text{Pa}$ è la soglia uditiva. Per trovare la pressione corrispondente a un livello $L$ dB si risolve l'equazione logaritmica: $p = p_0 \cdot 10^{L/20}$. Un concerto rock a 110 dB ha pressione $p = 20 \times 10^{110/20} \approx 63{.}000\,\mu\text{Pa}$.

## Riepilogo tabellare

| Tipo di equazione | Metodo | Forma risultante |
| --- | --- | --- |
| $a^{f(x)} = a^{g(x)}$ | Uguaglio gli esponenti | $f(x) = g(x)$ |
| $a^x = b$ | Logaritmo | $x = \ln b / \ln a$ |
| $a^{2x} + c \cdot a^x + d = 0$ | Sostituzione $t = a^x$ | Equazione quadratica in $t$ |
| $\log_a f(x) = k$ | Esponenziale | $f(x) = a^k$ |
| $\log_a f(x) = \log_a g(x)$ | Eguaglio argomenti | $f(x) = g(x)$ (+verifica) |
| Diseq. espon. $a>1$ | Stessa direzione | $f(x) \bowtie g(x)$ |
| Diseq. espon. $0 < a < 1$ | Inverto direzione | $f(x)$ opposto a $g(x)$ |
| Diseq. log. $a > 1$ | Stessa direzione + dominio | $f(x) \bowtie g(x)$ |
| Diseq. log. $0 < a < 1$ | Inverto + dominio | $f(x)$ opposto a $g(x)$ |

## Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Stessa base</summary>

Risolvere $9^{x+1} = 27^{2x-1}$.

**Soluzione:**

Riscrivo come potenze di 3: $3^{2(x+1)} = 3^{3(2x-1)}$.

$2x + 2 = 6x - 3 \implies 5 = 4x \implies x = \dfrac{5}{4}$

</details>

<details>
<summary>Esercizio 2 — Logaritmazione</summary>

Risolvere $2^x = 10$. Esprimere la soluzione in forma esatta e in forma decimale.

**Soluzione:**

$x = \log_2 10 = \dfrac{\ln 10}{\ln 2} = \dfrac{2{,}3026}{0{,}6931} \approx 3{,}322$

</details>

<details>
<summary>Esercizio 3 — Sostituzione</summary>

Risolvere $4^x - 3 \cdot 2^x - 4 = 0$.

**Soluzione:**

$t = 2^x$: $t^2 - 3t - 4 = 0 \implies (t-4)(t+1) = 0$.

$t = 4 \implies 2^x = 2^2 \implies x = 2$. ($t = -1$ scartata.)

</details>

<details>
<summary>Esercizio 4 — Equazione logaritmica con due log</summary>

Risolvere $\log_2(x+3) + \log_2(x-1) = 5$.

**Soluzione:**

Condizioni: $x > -3$ e $x > 1 \implies x > 1$.

$\log_2[(x+3)(x-1)] = 5 \implies (x+3)(x-1) = 32$

$x^2 + 2x - 3 = 32 \implies x^2 + 2x - 35 = 0 \implies (x+7)(x-5) = 0$

$x = 5$ (accettata, $> 1$) oppure $x = -7$ (scartata).

$S = \{5\}$

</details>

<details>
<summary>Esercizio 5 — Equazione mista</summary>

Risolvere $e^{2x} - 5e^x + 6 = 0$.

**Soluzione:**

$t = e^x$: $t^2 - 5t + 6 = 0 \implies (t-2)(t-3) = 0$.

$t = 2 \implies e^x = 2 \implies x = \ln 2$.

$t = 3 \implies e^x = 3 \implies x = \ln 3$.

$S = \{\ln 2,\; \ln 3\}$

</details>

<details>
<summary>Esercizio 6 — Disequazione esponenziale</summary>

Risolvere $\left(\dfrac{1}{2}\right)^{x-1} \leq 4$.

**Soluzione:**

$\left(\dfrac{1}{2}\right)^{x-1} = 2^{-(x-1)} = 2^{1-x}$.

$2^{1-x} \leq 2^2$. Base $2 > 1$: stessa direzione. $1 - x \leq 2 \implies x \geq -1$.

$S = [-1, +\infty)$

</details>

<details>
<summary>Esercizio 7 — Disequazione logaritmica</summary>

Risolvere $\log_2(x-1) > \log_2(3-x)$.

**Soluzione:**

Condizioni: $x - 1 > 0 \implies x > 1$ e $3 - x > 0 \implies x < 3$.

Dominio: $1 < x < 3$.

Base $2 > 1$: stessa direzione. $x - 1 > 3 - x \implies 2x > 4 \implies x > 2$.

Intersezione con dominio: $2 < x < 3$.

$S = (2, 3)$

</details>

<details>
<summary>Esercizio 8 — Applicazione: radiodatazione</summary>

Un reperto ha il 30% del carbonio-14 originale. Sapendo che $t_{1/2} = 5730$ anni, determinare l'età del reperto.

**Soluzione:**

$N(t) = N_0 \cdot (1/2)^{t/5730} = 0{,}3 N_0$

$(1/2)^{t/5730} = 0{,}3$

$\dfrac{t}{5730} \ln(1/2) = \ln 0{,}3$

$\dfrac{t}{5730} \cdot (-\ln 2) = \ln 0{,}3$

$t = \dfrac{-5730 \ln 0{,}3}{\ln 2} = \dfrac{5730 \times 1{,}204}{0{,}693} \approx \dfrac{6899}{0{,}693} \approx 9960$ anni.

</details>

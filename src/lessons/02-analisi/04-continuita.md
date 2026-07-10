---
id: analisi-04-continuita
subject: analisi
topic_it: Limiti e continuità
topic_en: Limits and continuity
title_it: Continuità e teoremi fondamentali
title_en: Continuity and fundamental theorems
level: blue
order: 4
source_book: "J. Stewart, Calculus; W. Rudin, Principles of Mathematical Analysis"
source_chapter: "Cap. 3 — Continuità"
---

## 1. Intuizione e motivazione

Disegna una curva su un foglio senza mai alzare la matita. Qualunque curva tu tracci — una sinusoide, una spirale, una parabola — è il grafico di una funzione **continua**. La continuità cattura matematicamente l'idea di "non avere salti, buchi o esplosioni": la funzione evolve in modo prevedibile e senza discontinuità.

Nella vita reale, la maggior parte delle grandezze fisiche osservabili sono continue: la temperatura di un corpo, la posizione di un oggetto in movimento, la pressione atmosferica, il voltaggio in un circuito elettrico. Un salto repentino e istantaneo (una discontinuità di salto) richiede un'infinita velocità di variazione — fisicamente irrealizzabile per grandezze macroscopiche.

Ma la continuità non è solo una proprietà "estetica": è la chiave per usare teoremi potentissimi. Il **teorema di Weierstrass** garantisce che una funzione continua su un intervallo chiuso raggiunga massimo e minimo — proprietà usata in ogni problema di ottimizzazione. Il **teorema di Bolzano** (o degli zeri) garantisce l'esistenza di soluzioni di equazioni — ed è alla base di algoritmi numerici come la bisezione, usati ogni giorno in ingegneria e scienze.

---

## 2. Prerequisiti

- Definizione di **limite** (lezione 1) e definizione ε–δ (lezione 2)
- Concetto di **intorno** di un punto $a$ e intorno bucato
- Limiti unilaterali $\lim_{x\to a^-}$ e $\lim_{x\to a^+}$
- **Algebra dei limiti** (lezione 3): somme, prodotti, quozienti di funzioni continue
- Nozione di **funzione composta** $f \circ g$ e composizione di limiti

---

## 3. Teoria passo-passo

### Definizione di continuità in un punto

**Definizione.** Una funzione $f$ è **continua nel punto** $a$ se soddisfa tutte e tre le condizioni seguenti, contemporaneamente:

1. $f(a)$ è **definita** (il punto $a$ appartiene al dominio di $f$)
2. $\lim_{x \to a} f(x)$ **esiste** (finito)
3. $\lim_{x \to a} f(x) = f(a)$ (il limite coincide con il valore della funzione nel punto)

Se anche una sola condizione è violata, la funzione non è continua in $a$.

**Equivalentemente** (con la definizione ε–δ): $f$ è continua in $a$ se:

$$\forall \varepsilon > 0 \; \exists \delta > 0 : \lvert x - a \rvert < \delta \implies \lvert f(x) - f(a) \rvert < \varepsilon$$

Notate la differenza con la definizione di limite: qui la condizione è $\lvert x - a \rvert < \delta$ (include $x = a$), non $0 < \lvert x-a \rvert < \delta$. La continuità richiede coerenza anche nel punto stesso: il valore di $f(a)$ deve "corrispondere" al comportamento limite.

Un modo equivalente di enunciare la continuità: $f$ è continua in $a$ se e solo se:

$$\lim_{x \to a} f(x) = f\!\left(\lim_{x \to a} x\right) = f(a)$$

Cioè, per le funzioni continue, il limite "entra dentro" la funzione. Questa proprietà si chiama anche **permutabilità di limite e funzione**.

### Continuità su un intervallo

$f$ è **continua su** $(a,b)$ se è continua in ogni punto dell'intervallo aperto.

$f$ è **continua su** $[a,b]$ se:
- è continua su $(a,b)$
- è **continua da destra** in $a$: $\lim_{x\to a^+} f(x) = f(a)$
- è **continua da sinistra** in $b$: $\lim_{x\to b^-} f(x) = f(b)$

### Operazioni che preservano la continuità

**Teorema.** Se $f$ e $g$ sono continue in $a$, allora sono continue in $a$ anche:

- $f + g$, $f - g$, $f \cdot g$
- $f/g$, purché $g(a) \neq 0$
- $\lvert f \rvert$ (il valore assoluto preserva la continuità)
- $f^n$ per $n \in \mathbb{N}$
- $f \circ g$ (funzione composta), se $g$ è continua in $a$ e $f$ è continua in $g(a)$

**Conseguenza pratica:** polinomi, funzioni razionali (nei punti in cui il denominatore non si annulla), funzioni trigonometriche ($\sin$, $\cos$, $\tan$, ecc.), esponenziali, logaritmi, e tutte le loro composizioni finite sono continue nei loro domini naturali.

### Tipi di discontinuità

Se $f$ non è continua in $a$, la discontinuità si classifica in tre tipi secondo il comportamento dei limiti unilaterali:

**Discontinuità eliminabile:** il limite $\lim_{x\to a} f(x) = L$ esiste ed è finito, ma:
- $f(a)$ non è definita (buco nel dominio), oppure
- $f(a)$ è definita ma $f(a) \neq L$

Si chiama "eliminabile" perché si può correggere ridefinendo $f(a) = L$: la funzione così modificata è continua in $a$. Esempio: $f(x) = \frac{\sin x}{x}$ in $x=0$ (il limite vale 1, ma $f(0)$ non è definita).

**Discontinuità di salto:** esistono entrambi i limiti unilaterali, ma sono diversi:

$$\lim_{x\to a^-} f(x) = L^- \neq L^+ = \lim_{x\to a^+} f(x)$$

La funzione "salta" da $L^-$ a $L^+$ nel punto $a$. Il **salto** ha ampiezza $\lvert L^+ - L^- \rvert$. Esempio: la funzione segno $\text{sgn}(x) = \begin{cases} -1 & x < 0 \\ 1 & x > 0 \end{cases}$ in $x=0$ ha salto di ampiezza 2.

**Discontinuità essenziale (o di seconda specie):** almeno uno dei due limiti unilaterali non esiste (è infinito o non esiste affatto per oscillazione). Esempi:
- $f(x) = 1/x$ in $x=0$: i limiti unilaterali sono $\pm\infty$ (discontinuità verticale)
- $f(x) = \sin(1/x)$ in $x=0$: il limite non esiste per oscillazione

### Teorema di Weierstrass

**Teorema (Weierstrass).** Se $f$ è continua su un intervallo **chiuso e limitato** $[a,b]$, allora:
1. $f$ è **limitata** su $[a,b]$: esiste $M > 0$ tale che $\lvert f(x) \rvert \leq M$ per ogni $x \in [a,b]$
2. $f$ raggiunge il proprio **massimo e minimo assoluti**: esistono $x_M, x_m \in [a,b]$ tali che:

$$f(x_m) \leq f(x) \leq f(x_M) \quad \forall x \in [a,b]$$

**Ipotesi necessarie:** l'intervallo deve essere sia **chiuso** (include gli estremi) sia **limitato** (non infinito). Entrambe le ipotesi sono necessarie:
- $f(x) = x$ su $(0,1)$: continua, ma non raggiunge il massimo (il sup è 1, ma $1 \notin (0,1)$)
- $f(x) = x$ su $[0,+\infty)$: continua su chiuso ma illimitato, non è limitata

### Teorema degli zeri (Bolzano) e Teorema dei valori intermedi

**Teorema (Bolzano, 1817).** Se $f$ è continua su $[a,b]$ e $f(a)$ e $f(b)$ hanno segni opposti (cioè $f(a) \cdot f(b) < 0$), allora esiste almeno un $c \in (a,b)$ tale che $f(c) = 0$.

**Teorema dei valori intermedi (TVI).** Se $f$ è continua su $[a,b]$ e $k$ è un valore qualsiasi compreso tra $f(a)$ e $f(b)$, esiste almeno un $c \in (a,b)$ tale che $f(c) = k$.

Il TVI generalizza Bolzano (che è il caso $k = 0$): una funzione continua non può "saltare" da un valore all'altro, ma deve passare per tutti i valori intermedi. Questo è intuitivamente ovvio — una curva continua che passa da sotto lo zero a sopra lo zero deve attraversare lo zero — ma la dimostrazione rigorosa richiede la completezza di $\mathbb{R}$.

---

## 4. Derivazione commentata

**Dimostrazione del teorema di Bolzano (metodo della bisezione).**

Siano $a_0 = a$ e $b_0 = b$ con $f(a_0) < 0 < f(b_0)$ (per fissare le idee).

**Passo 1 — Prima bisezione:** sia $c_0 = \dfrac{a_0+b_0}{2}$ il punto medio di $[a_0, b_0]$. Si presentano tre casi:
- Se $f(c_0) = 0$: trovato uno zero. $\square$
- Se $f(c_0) < 0$: poniamo $a_1 = c_0$, $b_1 = b_0$. Il nuovo intervallo $[a_1, b_1]$ ha $f < 0$ a sinistra e $f > 0$ a destra.
- Se $f(c_0) > 0$: poniamo $a_1 = a_0$, $b_1 = c_0$.

**Passo 2 — Iterazione:** si costruisce così una successione di intervalli $[a_n, b_n]$ con:
- $f(a_n) < 0$, $f(b_n) > 0$ per ogni $n$ (la funzione cambia segno)
- $b_n - a_n = \dfrac{b-a}{2^n}$ (l'ampiezza dimezza a ogni passo)

**Passo 3 — Convergenza:** le successioni $(a_n)$ e $(b_n)$ sono entrambe di Cauchy (la distanza $b_n - a_n \to 0$), e per la **completezza di $\mathbb{R}$** convergono allo stesso limite:

$$\lim_{n\to\infty} a_n = \lim_{n\to\infty} b_n = c \in [a,b]$$

**Passo 4 — $f(c) = 0$:** per la **continuità** di $f$:

$$f(c) = \lim_{n\to\infty} f(a_n) \leq 0 \quad \text{e} \quad f(c) = \lim_{n\to\infty} f(b_n) \geq 0$$

Quindi $f(c) = 0$. $\square$

**Osservazioni sulla dimostrazione:**
- La dimostrazione è **costruttiva**: fornisce un algoritmo esplicito per approssimare lo zero.
- Dopo $n$ iterazioni, l'errore è al massimo $\frac{b-a}{2^n}$ — convergenza geometrica.
- La completezza di $\mathbb{R}$ è essenziale: su $\mathbb{Q}$, la funzione $f(x) = x^2 - 2$ cambia segno su $[1,2]$ ma $\sqrt{2} \notin \mathbb{Q}$, e il teorema fallirebbe.

---

## 5. Esempi graduati

**Esempio 1 — Verifica delle tre condizioni di continuità**

Sia $f(x) = \dfrac{x^2-4}{x-2}$. Verificare la continuità in $x=2$.

- Condizione 1: $f(2)$ non è definita (denominatore nullo). La condizione 1 fallisce.

La funzione **non è continua** in $x=2$. Tuttavia, $\lim_{x\to 2} f(x) = \lim_{x\to 2}(x+2) = 4$ esiste. Si tratta di una **discontinuità eliminabile**: ridefinendo $f(2) = 4$, la nuova funzione è continua in $x=2$.

---

**Esempio 2 — Discontinuità di salto in una funzione a tratti**

Sia $h(x) = \begin{cases} 2x+1 & x < 1 \\ x^2+3 & x \geq 1 \end{cases}$

- $\lim_{x\to 1^-} h(x) = 2(1)+1 = 3$
- $\lim_{x\to 1^+} h(x) = 1+3 = 4$

I limiti unilaterali esistono ma sono diversi ($3 \neq 4$): **discontinuità di salto** di ampiezza 1 in $x=1$. Il limite bilatero non esiste.

---

**Esempio 3 — Determinare la costante per garantire la continuità**

Trovare $k$ tale che $f(x) = \begin{cases} kx + 3 & x \leq 2 \\ x^2 - 1 & x > 2 \end{cases}$ sia continua in $x=2$.

Per la continuità, occorre che i limiti unilaterali coincidano con il valore $f(2)$:

$$\lim_{x\to 2^-} (kx+3) = 2k+3 \quad \text{e} \quad f(2) = 2k+3$$

$$\lim_{x\to 2^+} (x^2-1) = 3$$

Condizione di continuità: $2k+3 = 3$, quindi $k=0$.

Verifica: con $k=0$, $f(x) = \begin{cases} 3 & x\leq 2 \\ x^2-1 & x>2 \end{cases}$. In $x=2$: $f(2)=3$, $\lim_{x\to 2^-} = 3$, $\lim_{x\to 2^+} = 3$. Continua. $\square$

---

**Esempio 4 — Applicazione del teorema di Bolzano**

Dimostrare che $x^3 - x - 1 = 0$ ha almeno una radice in $[1,2]$.

Sia $f(x) = x^3 - x - 1$. Polinomio, continuo ovunque.

$f(1) = 1 - 1 - 1 = -1 < 0$ e $f(2) = 8 - 2 - 1 = 5 > 0$.

Poiché $f$ è continua su $[1,2]$ e $f(1) \cdot f(2) < 0$, per Bolzano esiste $c \in (1,2)$ tale che $f(c) = 0$. $\square$

(La radice esatta è $c \approx 1.3247$, trovabile numericamente con la bisezione.)

---

**Esempio 5 — Discontinuità essenziale**

$f(x) = \sin\!\left(\dfrac{1}{x}\right)$ per $x \neq 0$.

Per $x\to 0$, la funzione oscilla tra $-1$ e $1$ con frequenza crescente: i limiti unilaterali non esistono. Qualunque valore si assegni a $f(0)$, la funzione non può diventare continua in $x=0$. Si tratta di **discontinuità essenziale** — non riparabile nemmeno ridefinendo il valore nel punto.

---

**Esempio 6 — Continuità della funzione composta**

Dimostrare che $h(x) = \sin(x^2+1)$ è continua ovunque.

$g(x) = x^2+1$ è un polinomio, continuo su tutto $\mathbb{R}$. $f(t) = \sin(t)$ è continua su tutto $\mathbb{R}$. Per il teorema sulla continuità delle funzioni composte, $h = f \circ g$ è continua su tutto $\mathbb{R}$. $\square$

---

**Esempio 7 — Applicazione del teorema di Weierstrass**

Trovare massimo e minimo assoluti di $f(x) = x^2 - 2x$ su $[0, 3]$.

$f$ è un polinomio, continuo su $[0,3]$ (chiuso e limitato). Per Weierstrass, il massimo e il minimo assoluti esistono.

Candidati: punti critici interni con $f'(x) = 2x-2 = 0 \Rightarrow x=1$, e gli estremi $x=0$, $x=3$.

| $x$ | $f(x) = x^2-2x$ |
| --- | --- |
| $0$ | $0$ |
| $1$ | $-1$ |
| $3$ | $3$ |

Minimo assoluto: $-1$ (in $x=1$). Massimo assoluto: $3$ (in $x=3$).

---

## 6. Grafico

```plot
{
  "title": "Discontinuità di salto in x=0: f(x) a tratti",
  "fn": "(x < 0) ? x + 2 : x * x + 0.5",
  "fn2": "2",
  "domain": [-3, 3],
  "yDomain": [-1, 5],
  "label1": "f(x) con salto in x=0",
  "label2": "y = 2 (limite sinistro in x=0)"
}
```

---

## 7. Elemento interattivo

Lo slider mostra come il parametro $k$ in una funzione a tratti determina la presenza o assenza di una discontinuità. Per $k=1$, i due "pezzi" si congiungono perfettamente in $x=1$: la funzione è continua. Per $k \neq 1$, si crea un salto visibile. Osserva come il punto di raccordo si sposta verticalmente al variare di $k$.

```slider
{
  "title": "Continuità vs discontinuità: f(x) = k·x² per x<1, f(x)=x+k−1 per x≥1",
  "fn": "(x < 1) ? a * x * x : x + a - 1",
  "domain": [-1, 3],
  "yDomain": [-1, 6],
  "pname": "a",
  "pmin": 0.2,
  "pmax": 3,
  "pdefault": 1,
  "pstep": 0.1,
  "plabel": "Parametro k (k=1: continua in x=1)",
  "label1": "f(x) a tratti"
}
```

---

## 8. Errori comuni

**Errore 1 — Credere che "il limite esiste" implichi "la funzione è continua".**
Il limite di $f$ in $a$ può esistere senza che $f$ sia continua in $a$: basta che $f(a)$ non sia definita, o che $f(a) \neq \lim_{x\to a} f(x)$. La continuità richiede tutte e tre le condizioni simultaneamente. Il limite è una condizione necessaria ma non sufficiente per la continuità.

**Errore 2 — Credere che una funzione definita a tratti non sia mai continua nei punti di raccordo.**
Una funzione a tratti può essere perfettamente continua nei punti di raccordo, se i valori delle due espressioni coincidono. L'Esempio 3 lo mostra: bisogna sempre verificare esplicitamente i limiti unilaterali nel punto di raccordo.

**Errore 3 — Applicare Weierstrass su intervalli aperti o illimitati.**
$f(x) = x$ su $(0,1)$ è continua, ma non raggiunge il supremo (che sarebbe 1, ma $1 \notin (0,1)$). $f(x) = x$ su $[0,+\infty)$ è continua su un insieme chiuso ma illimitato, e non è limitata. Il teorema di Weierstrass richiede l'intervallo sia **sia chiuso sia limitato**: entrambe le ipotesi sono essenziali.

**Errore 4 — Confondere discontinuità eliminabile con funzione "non definita".**
Una funzione con discontinuità eliminabile in $a$ ha un buco nel dominio (o un valore "sbagliato") in $a$, ma si può correggere ridefinendo quel singolo punto. Non si tratta di un problema intrinseco della funzione, ma di come è stata scritta. Ad esempio, $\frac{\sin x}{x}$ ha discontinuità eliminabile in $x=0$ ma è "quasi" continua.

**Errore 5 — Applicare il teorema di Bolzano senza verificare la continuità.**
Il teorema di Bolzano richiede la continuità su $[a,b]$. Una funzione discontinua può avere $f(a) < 0 < f(b)$ senza che esista uno zero in $(a,b)$: basta che la funzione "salti" sopra lo zero. Esempio: la funzione segno su $[-1,1]$ vale $-1$ per $x<0$ e $+1$ per $x>0$, senza passare per 0.

**Errore 6 — Credere che il teorema di Bolzano fornisca un unico zero.**
Il teorema garantisce l'esistenza di **almeno un** zero, non di esattamente uno. Una funzione continua può avere molti zeri nell'intervallo. Per l'unicità servono ipotesi aggiuntive: ad esempio, la stretta monotonia della funzione.

---

## 9. Applicazioni reali

**Informatica — metodo della bisezione.** Il metodo della bisezione è un algoritmo fondamentale per trovare radici numeriche di equazioni non lineari. Si basa interamente sul teorema di Bolzano: se $f$ è continua e cambia segno in $[a,b]$, si prende il punto medio $c = (a+b)/2$ e si sceglie il sotto-intervallo dove $f$ cambia segno. Dopo $n$ iterazioni, l'errore è al massimo $\frac{b-a}{2^n}$. Per ottenere 10 cifre decimali di precisione bastano circa $\log_2(10^{10}) \approx 33$ iterazioni. La semplicità e la garanzia di convergenza rendono la bisezione uno degli algoritmi numerici più usati.

**Fisica — principio di conservazione.** La continuità della temperatura è fondamentale in termodinamica: due corpi a contatto termico raggiungono una temperatura di contatto comune (senza salti). Matematicamente, questa è una condizione di continuità al contorno delle equazioni del calore. Una discontinuità di temperatura in un punto materiale implicherebbe un flusso di calore infinito in quel punto — fisicamente impossibile. Le equazioni differenziali della conduzione termica impongono la continuità della temperatura e del flusso come condizioni di raccordo.

**Economia e game theory — teorema di Nash.** Il teorema del punto fisso di Brouwer — che afferma che ogni funzione continua da un compatto convesso in sé ha almeno un punto fisso — si basa su una generalizzazione del teorema dei valori intermedi. Nash lo usò per dimostrare l'esistenza dell'equilibrio di Nash in qualsiasi gioco finito con strategie miste: la continuità delle funzioni di miglior risposta dei giocatori garantisce l'esistenza di un equilibrio. Senza continuità, l'esistenza dell'equilibrio non sarebbe garantita.

---

## 10. Riepilogo tabellare

| Concetto | Condizione |
| --- | --- |
| Continuità in $a$ | $f(a)$ definita, $\lim_{x\to a} f(x)$ esiste, $\lim = f(a)$ |
| Continuità da destra in $a$ | $\lim_{x\to a^+} f(x) = f(a)$ |
| Continuità da sinistra in $b$ | $\lim_{x\to b^-} f(x) = f(b)$ |
| Disc. eliminabile in $a$ | $\lim_{x\to a} f(x) = L$ esiste, ma $f(a)$ non definita o $\neq L$ |
| Disc. di salto in $a$ | $\lim_{x\to a^-} f(x) \neq \lim_{x\to a^+} f(x)$ (entrambi finiti) |
| Disc. essenziale in $a$ | Almeno un limite unilaterale non esiste o è infinito |
| Teorema di Weierstrass | $f$ continua su $[a,b]$ chiuso e limitato $\Rightarrow$ $f$ raggiunge max e min |
| Teorema di Bolzano | $f$ continua su $[a,b]$, $f(a)\cdot f(b) < 0$ $\Rightarrow$ $\exists c \in (a,b): f(c)=0$ |
| Teorema dei valori intermedi | $f$ continua su $[a,b]$, $k$ tra $f(a)$ e $f(b)$ $\Rightarrow$ $\exists c: f(c)=k$ |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Verifica della continuità in un punto</summary>

**Testo:** Verificare se $f(x) = \begin{cases} \frac{x^2-1}{x-1} & x \neq 1 \\ 3 & x = 1 \end{cases}$ è continua in $x=1$.

**Soluzione:**

1. $f(1) = 3$: definita. ✓
2. $\lim_{x\to 1} \frac{x^2-1}{x-1} = \lim_{x\to 1}(x+1) = 2$: esiste. ✓
3. $\lim_{x\to 1} f(x) = 2 \neq 3 = f(1)$: il limite non coincide con il valore. ✗

La funzione **non è continua** in $x=1$: ha una discontinuità eliminabile. Ridefinendo $f(1) = 2$ (invece di 3), la funzione diventerebbe continua.

</details>

<details>
<summary>Esercizio 2 — Trovare k per la continuità</summary>

**Testo:** Trovare $k$ tale che $f(x) = \begin{cases} kx^2 - 1 & x \leq 2 \\ 3x - k & x > 2 \end{cases}$ sia continua in $x=2$.

**Soluzione:**

Per la continuità in $x=2$, il limite da sinistra deve coincidere con il limite da destra e con $f(2)$:

$$\lim_{x\to 2^-} (kx^2-1) = 4k-1$$
$$\lim_{x\to 2^+} (3x-k) = 6-k$$

Condizione: $4k-1 = 6-k$, cioè $5k = 7$, quindi $k = \dfrac{7}{5}$.

Verifica: $f(2) = 4 \cdot \frac{7}{5} - 1 = \frac{28-5}{5} = \frac{23}{5}$ e $\lim_{x\to 2^+} = 6 - \frac{7}{5} = \frac{23}{5}$. ✓

</details>

<details>
<summary>Esercizio 3 — Classificazione della discontinuità</summary>

**Testo:** Classificare la discontinuità di $f(x) = \dfrac{x^2 - x - 2}{x - 2}$ in $x=2$.

**Soluzione:**

$f(2)$ non è definita (denominatore nullo). Fattorizziamo: $x^2-x-2 = (x-2)(x+1)$.

$$\lim_{x\to 2} \frac{(x-2)(x+1)}{x-2} = \lim_{x\to 2} (x+1) = 3$$

Il limite esiste (vale 3), ma $f(2)$ non è definita. Si tratta di una **discontinuità eliminabile**. Ridefinendo $f(2) = 3$, la funzione diventa continua.

</details>

<details>
<summary>Esercizio 4 — Applicazione del teorema di Bolzano</summary>

**Testo:** Dimostrare che l'equazione $e^x = 3 - x$ ha almeno una soluzione reale.

**Soluzione:**

Riscriviamo come $f(x) = e^x + x - 3 = 0$. $f$ è continua su $\mathbb{R}$ (somma di funzioni continue).

- $f(0) = 1 + 0 - 3 = -2 < 0$
- $f(2) = e^2 + 2 - 3 = e^2 - 1 \approx 6.39 > 0$

Per il teorema di Bolzano, esiste $c \in (0,2)$ tale che $f(c) = 0$, cioè $e^c = 3 - c$. $\square$

</details>

<details>
<summary>Esercizio 5 — Weierstrass: trovare massimo e minimo assoluti</summary>

**Testo:** $f(x) = x^3 - 3x$ su $[-2, 2]$. Trovare massimo e minimo assoluti.

**Soluzione:**

$f$ è un polinomio, continuo su $[-2,2]$ (chiuso e limitato). Per Weierstrass, il massimo e il minimo assoluti esistono.

Punti critici: $f'(x) = 3x^2 - 3 = 0 \Rightarrow x = \pm 1$.

| $x$ | $f(x)$ |
| --- | --- |
| $-2$ | $-8+6 = -2$ |
| $-1$ | $-1+3 = 2$ |
| $1$ | $1-3 = -2$ |
| $2$ | $8-6 = 2$ |

Massimo assoluto: $2$ (raggiunto in $x=-1$ e $x=2$). Minimo assoluto: $-2$ (raggiunto in $x=-2$ e $x=1$).

</details>

<details>
<summary>Esercizio 6 — Discontinuità di funzione composta</summary>

**Testo:** Determinare i punti di discontinuità di $f(x) = \dfrac{1}{\sin x}$.

**Soluzione:**

$\sin x$ è continuo ovunque. $1/t$ è continuo per $t \neq 0$.

$f$ è discontinua dove $\sin x = 0$, cioè in $x = k\pi$ per $k \in \mathbb{Z}$.

In questi punti: $\lim_{x \to k\pi} \frac{1}{\sin x} = \pm\infty$ (il segno dipende da quale lato si approccia). Si tratta di **discontinuità essenziali** (i limiti unilaterali sono $\pm\infty$).

</details>

<details>
<summary>Esercizio 7 — Funzione di Heaviside</summary>

**Testo:** La funzione di Heaviside è $H(x) = \begin{cases} 0 & x < 0 \\ 1 & x \geq 0 \end{cases}$. Classificare la discontinuità in $x=0$. La funzione è continua da destra in $x=0$?

**Soluzione:**

- $\lim_{x\to 0^-} H(x) = 0$ (limite sinistro)
- $\lim_{x\to 0^+} H(x) = 1$ (limite destro)
- $H(0) = 1$

I limiti unilaterali esistono ma sono diversi: **discontinuità di salto** di ampiezza 1. Il limite bilatero non esiste.

La funzione è **continua da destra** in $x=0$: $\lim_{x\to 0^+} H(x) = H(0) = 1$. Non è continua da sinistra: $\lim_{x\to 0^-} H(x) = 0 \neq 1 = H(0)$.

</details>

<details>
<summary>Esercizio 8 — Applicazione del teorema dei valori intermedi</summary>

**Testo:** Dimostrare che $f(x) = x^4 + x - 3$ assume il valore $k = 2$ in almeno un punto dell'intervallo $[1,2]$.

**Soluzione:**

$f$ è un polinomio, continuo su $[1,2]$.

$f(1) = 1 + 1 - 3 = -1 < 2$ e $f(2) = 16 + 2 - 3 = 15 > 2$.

Poiché $k = 2$ è compreso tra $f(1) = -1$ e $f(2) = 15$, per il **teorema dei valori intermedi** esiste $c \in (1,2)$ tale che $f(c) = 2$. $\square$

(Esplicitamente: $x^4 + x - 3 = 2 \iff x^4 + x - 5 = 0$, e il valore $c \approx 1.28$ soddisfa l'equazione.)

</details>

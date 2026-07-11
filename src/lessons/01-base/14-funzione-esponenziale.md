---
id: base-14-funzione-esponenziale
subject: base
topic_it: Funzioni elementari
topic_en: Elementary functions
title_it: Funzione esponenziale
title_en: Exponential function
level: green
order: 14
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 6 — Esponenziale e logaritmo"
stato: da-rielaborare
---

## Intuizione e motivazione

Metti 1000 euro in un conto bancario con un interesse annuo del 5%. Dopo il primo anno hai 1050 euro. Il secondo anno l'interesse si calcola su 1050, non su 1000: ottieni 1102,50 euro. Il terzo anno l'interesse si calcola su 1102,50: hai 1157,63 euro. Ogni anno la somma cresce di una percentuale fissa rispetto al valore precedente, non rispetto al valore iniziale. Questo meccanismo — la crescita proporzionale al valore attuale — è esattamente quello che descrive la funzione esponenziale.

La funzione esponenziale è la funzione più importante per descrivere fenomeni di crescita e decrescita nel tempo. La popolazione mondiale, la diffusione di un virus in una pandemia, il decadimento di un isotopo radioattivo, la scarica di un condensatore, il valore di un investimento con interesse composto: tutti seguono una legge esponenziale. In biologia si chiama "crescita malthusiana", in fisica "decadimento esponenziale", in finanza "interesse composto continuo".

La caratteristica distintiva: la velocità di crescita è proporzionale al valore corrente. Più si ha, più si guadagna (crescita esponenziale). Meno si ha, meno si perde (decadimento esponenziale).

## Prerequisiti

- Operazioni con le potenze: $a^m \cdot a^n = a^{m+n}$, $(a^m)^n = a^{mn}$
- Potenze con esponente negativo e frazionario: $a^{-n} = 1/a^n$, $a^{1/n} = \sqrt[n]{a}$
- Grafico di una funzione e lettura dei valori
- Nozione intuitiva di limite: comportamento per $x \to \pm\infty$

## Teoria passo-passo

### Definizione

La **funzione esponenziale** di base $a$ è:

$$f(x) = a^x, \quad a > 0, \; a \neq 1, \quad x \in \mathbb{R}$$

Il parametro $a$ si chiama **base**. L'ipotesi $a > 0$ garantisce che $a^x$ sia reale per ogni $x \in \mathbb{R}$; l'ipotesi $a \neq 1$ esclude la funzione costante $f(x) = 1$.

### Proprietà generali

| Proprietà | Dettaglio |
| --- | --- |
| Dominio | $\mathbb{R}$ |
| Codominio | $(0, +\infty)$ — sempre positiva |
| Passaggio per $(0, 1)$ | $a^0 = 1$ per ogni $a$ |
| Passaggio per $(1, a)$ | $a^1 = a$ per definizione |
| Monotonia | strettamente crescente se $a > 1$; strettamente decrescente se $0 < a < 1$ |

### Caso $a > 1$ (crescita esponenziale)

- $f(x) \to +\infty$ per $x \to +\infty$.
- $f(x) \to 0^+$ per $x \to -\infty$ (asintoto orizzontale: l'asse $x$ con $y = 0$).
- Più grande è $a$, più rapida è la crescita.

### Caso $0 < a < 1$ (decrescita esponenziale)

- $f(x) \to 0^+$ per $x \to +\infty$ (asintoto orizzontale: $y = 0$).
- $f(x) \to +\infty$ per $x \to -\infty$.
- Il grafico di $a^x$ con $0 < a < 1$ è il riflesso (rispetto all'asse $y$) del grafico di $(1/a)^x$.

**Relazione simmetrica:** $(1/a)^x = a^{-x}$. Quindi $f(x) = (1/a)^x$ e $g(x) = a^x$ sono simmetrici rispetto all'asse $y$.

### Il numero di Eulero $e$

Il numero $e \approx 2{,}71828\ldots$ è definito come:

$$e = \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n$$

È un numero irrazionale (e trascendente). La funzione $f(x) = e^x$ è chiamata **esponenziale naturale** e si scrive anche $\exp(x)$.

La proprietà più importante di $e^x$: è l'unica funzione (a meno di costanti moltiplicative) uguale alla propria derivata:

$$\frac{d}{dx}(e^x) = e^x$$

Questo la rende la funzione più naturale per descrivere fenomeni di crescita e decrescita in fisica e ingegneria.

### Proprietà delle potenze reali

Le regole per gli esponenti si estendono dagli interi ai reali:

$$a^{x+y} = a^x \cdot a^y \qquad a^{x-y} = \frac{a^x}{a^y}$$

$$(a^x)^y = a^{xy} \qquad (ab)^x = a^x b^x$$

$$a^0 = 1 \qquad a^{-x} = \frac{1}{a^x}$$

### Legge esponenziale di crescita e decadimento

Molti fenomeni naturali seguono la legge:

$$N(t) = N_0 \cdot e^{kt}$$

dove:
- $N_0 = N(0)$: valore iniziale (al tempo $t = 0$).
- $k > 0$: **crescita** esponenziale.
- $k < 0$: **decadimento** esponenziale.
- Il tempo di dimezzamento (half-life) è $t_{1/2} = \dfrac{\ln 2}{\lvert k \rvert}$.

## Derivazioni commentate

### Da dove viene la definizione di $e$?

L'interesse composto con tasso annuo $r$ applicato $n$ volte l'anno su un capitale iniziale di 1 euro dà, dopo un anno:

$$A_n = \left(1 + \frac{r}{n}\right)^n$$

Più frequentemente si applica l'interesse ($n$ grande), più il capitale cresce. Ma non cresce illimitatamente: il limite per $n \to \infty$ è finito. Per $r = 1$ (tasso del 100%):

$$\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e \approx 2{,}718\ldots$$

Con capitalizzazione continua a tasso $r$, il capitale dopo un anno è esattamente $e^r$ euro.

**Calcolo parziale per $n = 1, 2, 10, 100, 1000$:**

| $n$ | $\left(1 + 1/n\right)^n$ |
| --- | --- |
| 1 | 2,000 |
| 2 | 2,250 |
| 10 | 2,5937... |
| 100 | 2,7048... |
| 1000 | 2,7169... |
| $\infty$ | $e = 2,71828...$ |

La sequenza converge lentamente verso $e$.

## Esempi graduati

**Esempio 1 — Calcolo diretto**

$f(x) = 2^x$. Valori: $f(0) = 1$, $f(1) = 2$, $f(2) = 4$, $f(3) = 8$, $f(-1) = 1/2$, $f(-2) = 1/4$.

La funzione raddoppia ad ogni incremento unitario di $x$.

---

**Esempio 2 — Confronto con la retta verticale**

$f(x) = e^x$ vs $g(x) = 10x$. Per $x = 1$: $e^1 \approx 2{,}72$ vs $10$. Per $x = 5$: $e^5 \approx 148$ vs $50$. Per $x = 10$: $e^{10} \approx 22026$ vs $100$.

L'esponenziale, anche se parte sotto la retta, la supera definitivamente e poi la distanzia senza limiti.

---

**Esempio 3 — Simmetria tra basi reciproche**

$f(x) = 2^x$ e $g(x) = (1/2)^x = 2^{-x}$.

$g(x) = f(-x)$: il grafico di $g$ è il riflesso del grafico di $f$ rispetto all'asse $y$.

$f(x) \to +\infty$ per $x \to +\infty$; $g(x) \to 0$ per $x \to +\infty$.

---

**Esempio 4 — Semplificazione con le proprietà**

Semplificare $\dfrac{(2^3)^x \cdot 4^{x+1}}{8^x}$.

$2^{3x} \cdot 2^{2x+2} / 2^{3x} = 2^{2x+2} = 4 \cdot 4^x$.

---

**Esempio 5 — Interesse composto continuo**

Un capitale di 1000 € investito con tasso continuo del 5% annuo. Dopo 10 anni:

$$A = 1000 \cdot e^{0{,}05 \times 10} = 1000 \cdot e^{0{,}5} \approx 1000 \cdot 1{,}6487 \approx 1648{,}7 \text{ €}$$

---

**Esempio 6 — Decadimento radioattivo**

Il carbonio-14 ha tempo di dimezzamento $t_{1/2} \approx 5730$ anni. Partendo da 100 g, quanti grammi rimangono dopo 11460 anni?

$11460 = 2 \times 5730$: sono trascorsi 2 tempi di dimezzamento.

$N = 100 \cdot (1/2)^2 = 100/4 = 25$ g.

Formula generale: $N(t) = 100 \cdot e^{-(\ln 2 / 5730) \cdot t}$.

---

**Esempio 7 — Confronto $e^x$ vs $2^x$ vs $3^x$**

In $x = 0$: tutti e tre valgono 1.

In $x = 2$: $2^2 = 4$, $e^2 \approx 7{,}39$, $3^2 = 9$.

Per basi più grandi, la crescita è più rapida. Tutte e tre le funzioni hanno lo stesso asintoto $y = 0$ per $x \to -\infty$.

## Grafico

```plot
{
  "title": "Confronto esponenziali: eˣ e 2ˣ",
  "fn": "Math.exp(x)",
  "fn2": "Math.pow(2, x)",
  "domain": [-3, 3],
  "yDomain": [-1, 12],
  "label1": "f(x) = eˣ",
  "label2": "g(x) = 2ˣ"
}
```

## Elemento interattivo

```slider
{
  "title": "Funzione esponenziale f(x) = aˣ: varia la base a",
  "fn": "Math.pow(Math.abs(a), x)",
  "domain": [-3, 3],
  "yDomain": [-0.5, 10],
  "pname": "a",
  "pmin": 0.2,
  "pmax": 4,
  "pdefault": 2,
  "pstep": 0.1,
  "plabel": "Base a",
  "label1": "f(x) = aˣ"
}
```

## Errori comuni

**Errore 1 — Confondere $a^x$ con $x^a$.**
$2^x$ è una funzione esponenziale (la base è costante, l'esponente è la variabile). $x^2$ è una funzione potenza (la base è la variabile, l'esponente è costante). Hanno comportamenti completamente diversi: $2^x$ cresce molto più velocemente di $x^2$ per $x$ grande.

**Errore 2 — Credere che $a^x$ possa diventare negativa o zero.**
$a^x > 0$ per ogni $x \in \mathbb{R}$ e ogni $a > 0$. Il grafico di una funzione esponenziale non tocca mai l'asse $x$: si avvicina all'asse come asintoto, ma non lo raggiunge mai.

**Errore 3 — Applicare erroneamente le proprietà delle potenze.**
$a^{x+y} = a^x \cdot a^y$ (corretto), ma $a^{xy} \neq a^x \cdot a^y$ (sbagliato). Anche $(a^x)^y = a^{xy}$ è corretto, ma $a^{x^y}$ significa $a^{(x^y)}$, che è diverso da $(a^x)^y$.

**Errore 4 — Confondere base e esponente nelle formule di crescita.**
In $N(t) = N_0 e^{kt}$, il parametro $k$ sta nell'esponente. Un segno sbagliato su $k$ trasforma una crescita in un decadimento. Verificare sempre: se il fenomeno cresce nel tempo, $k > 0$; se decresce, $k < 0$.

**Errore 5 — Pensare che $e$ sia uguale a 3 o a $\pi$.**
$e \approx 2{,}71828\ldots$ è un numero diverso sia da $\pi \approx 3{,}14159\ldots$ sia da qualsiasi numero razionale. Non è un'approssimazione comoda: è esattamente il limite $\lim_{n\to\infty}(1+1/n)^n$.

**Errore 6 — Sbagliare il calcolo del tempo di dimezzamento.**
Il tempo di dimezzamento si trova ponendo $e^{kt_{1/2}} = 1/2$, da cui $t_{1/2} = -\ln 2 / k$ (nota: $k < 0$, quindi $t_{1/2} > 0$). Un errore nel segno porta a un tempo di dimezzamento negativo, che è privo di senso.

## Applicazioni reali

**Biologia — Crescita batterica.** Un batterio si riproduce ogni 20 minuti in condizioni ideali. Partendo da un singolo batterio, dopo $t$ ore ci sono $N(t) = 2^{3t}$ batteri (ogni ora si duplica 3 volte). In 24 ore: $2^{72} \approx 4{,}7 \times 10^{21}$ batteri — più degli atomi in un grammo di carbonio. Nella realtà la crescita rallenta per mancanza di nutrienti.

**Finanza — Interesse composto.** Con un capitale iniziale $P$, tasso annuo $r$ e capitalizzazione continua, il valore dopo $t$ anni è $A(t) = Pe^{rt}$. Il tempo di raddoppio si trova da $e^{rt} = 2$, cioè $t = \ln 2 / r$. Per $r = 7\%$: raddoppio in circa 10 anni (regola del 70: $70/r$ anni).

**Medicina — Eliminazione dei farmaci.** La concentrazione di un farmaco nel sangue decade esponenzialmente dopo l'ultima dose: $C(t) = C_0 e^{-kt}$, dove $k$ dipende dal farmaco e dal paziente. L'emivita (tempo perché la concentrazione si dimezzi) è $t_{1/2} = \ln 2 / k$. Questo governa la frequenza di somministrazione: un farmaco con emivita di 8 ore va preso ogni 8 ore per mantenere una concentrazione terapeutica.

## Riepilogo tabellare

| Proprietà | $a > 1$ | $0 < a < 1$ |
| --- | --- | --- |
| Monotonia | Strettamente crescente | Strettamente decrescente |
| $x \to +\infty$ | $+\infty$ | $0^+$ (asintoto $y=0$) |
| $x \to -\infty$ | $0^+$ (asintoto $y=0$) | $+\infty$ |
| Valore in $x=0$ | $1$ | $1$ |
| Valore in $x=1$ | $a$ | $a$ |
| Segno | Sempre $> 0$ | Sempre $> 0$ |

| Formula | Significato |
| --- | --- |
| $a^{x+y} = a^x \cdot a^y$ | Prodotto degli esponenziali |
| $(a^x)^y = a^{xy}$ | Potenza di potenza |
| $e = \lim_{n\to\infty}(1+1/n)^n$ | Definizione di $e$ |
| $N(t) = N_0 e^{kt}$ | Legge di crescita/decadimento |
| $t_{1/2} = \ln 2 / \lvert k \rvert$ | Tempo di dimezzamento |

## Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Calcolo di valori esponenziali</summary>

Calcolare $f(x) = 3^x$ in $x = -2, -1, 0, 1, 2, 3$.

**Soluzione:**

$f(-2) = 1/9$, $f(-1) = 1/3$, $f(0) = 1$, $f(1) = 3$, $f(2) = 9$, $f(3) = 27$.

La funzione triplica ad ogni incremento unitario di $x$.

</details>

<details>
<summary>Esercizio 2 — Semplificazione</summary>

Semplificare $\dfrac{4^x \cdot 8^{x-1}}{2^{3x+1}}$.

**Soluzione:**

$4^x = 2^{2x}$, $8^{x-1} = 2^{3(x-1)} = 2^{3x-3}$, denominatore $= 2^{3x+1}$.

$$\frac{2^{2x} \cdot 2^{3x-3}}{2^{3x+1}} = \frac{2^{5x-3}}{2^{3x+1}} = 2^{5x-3-3x-1} = 2^{2x-4} = \frac{4^x}{16}$$

</details>

<details>
<summary>Esercizio 3 — Confronto tra funzioni</summary>

Per quale valore intero $n$ vale per la prima volta $e^n > n^3$?

**Soluzione:**

Calcolo caso per caso:
- $n = 1$: $e \approx 2{,}72$ vs $1$ → $e^1 > 1^3$ ✓
- Ma per $n = 2$: $e^2 \approx 7{,}39$ vs $8$ → $e^2 < 2^3$
- Per $n = 3$: $e^3 \approx 20{,}09$ vs $27$ → $e^3 < 3^3$
- Per $n = 4$: $e^4 \approx 54{,}6$ vs $64$ → $e^4 < 4^3$
- Per $n = 5$: $e^5 \approx 148{,}4$ vs $125$ → $e^5 > 5^3$ ✓

Dall'intero $n = 5$ in poi $e^n > n^3$ (e l'esponenziale domina definitivamente).

</details>

<details>
<summary>Esercizio 4 — Interesse composto</summary>

Un capitale di 5000 € è investito al tasso continuo del 3% annuo. Dopo quanti anni raddoppia?

**Soluzione:**

$5000 e^{0{,}03t} = 10000 \implies e^{0{,}03t} = 2 \implies 0{,}03t = \ln 2 \implies t = \dfrac{\ln 2}{0{,}03} \approx \dfrac{0{,}6931}{0{,}03} \approx 23{,}1$ anni.

</details>

<details>
<summary>Esercizio 5 — Decadimento</summary>

Il polonio-210 ha emivita di 138 giorni. Quanta frazione rimane dopo un anno (365 giorni)?

**Soluzione:**

$k = -\dfrac{\ln 2}{138}$. Dopo 365 giorni:

$$\frac{N}{N_0} = e^{k \cdot 365} = e^{-\frac{365 \ln 2}{138}} = 2^{-365/138} \approx 2^{-2{,}645} \approx \frac{1}{6{,}25} \approx 0{,}16$$

Rimane circa il 16% del polonio iniziale.

</details>

<details>
<summary>Esercizio 6 — Grafico e lettura</summary>

La funzione $f(x) = 2 \cdot e^{-x}$ è crescente o decrescente? Trova l'asintoto orizzontale, il valore in $x = 0$ e in $x = \ln 2$.

**Soluzione:**

$f(x) = 2e^{-x}$: decrescente (base $e > 1$ ma esponente $-x$ è una funzione decrescente di $x$).

Asintoto: $f(x) \to 0$ per $x \to +\infty$. Asse $x$ come asintoto ($y = 0$).

$f(0) = 2e^0 = 2$.

$f(\ln 2) = 2e^{-\ln 2} = 2 \cdot \dfrac{1}{2} = 1$.

</details>

<details>
<summary>Esercizio 7 — Applicazione: Covid</summary>

In una fase iniziale di pandemia, il numero di contagiati cresce come $N(t) = 100 \cdot e^{0{,}2t}$ dove $t$ è in giorni. Quanti giorni servono per raggiungere 10000 contagiati?

**Soluzione:**

$100 e^{0{,}2t} = 10000 \implies e^{0{,}2t} = 100 \implies 0{,}2t = \ln 100 = 2\ln 10 \approx 4{,}605$

$t = \dfrac{4{,}605}{0{,}2} \approx 23$ giorni.

</details>

---
id: base-15-funzione-logaritmica
subject: base
topic_it: Funzioni elementari
topic_en: Elementary functions
title_it: Funzione logaritmica e proprietà dei logaritmi
title_en: Logarithmic function and properties of logarithms
level: green
order: 15
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 6 — Logaritmi"
---

## Intuizione e motivazione

Quante volte devi raddoppiare 1 per ottenere 1024? La risposta è 10, perché $2^{10} = 1024$. Il logaritmo in base 2 di 1024 è esattamente 10. Il logaritmo risponde alla domanda: "a quale esponente devo elevare la base per ottenere questo numero?"

Il logaritmo è ovunque nelle scienze e nella tecnologia. La scala Richter dei terremoti è logaritmica: un terremoto di magnitudo 7 è 10 volte più intenso di uno di magnitudo 6, non 1 in più. La scala decibel del suono è logaritmica. Il pH in chimica è $-\log_{10}[\text{H}^+]$. In informatica, gli algoritmi di ricerca binaria hanno complessità $O(\log n)$. La teoria dell'informazione di Shannon usa il logaritmo in base 2 per misurare i bit.

Il logaritmo è anche lo strumento fondamentale per risolvere equazioni esponenziali: è l'operazione inversa dell'elevamento a potenza, esattamente come la sottrazione è l'inversa dell'addizione.

## Prerequisiti

- Funzione esponenziale $f(x) = a^x$ e sue proprietà
- Concetto di funzione inversa: $f^{-1}$ tale che $f^{-1}(f(x)) = x$
- Riflesso di un grafico rispetto alla bisettrice $y = x$
- Operazioni con le potenze e le radici

## Teoria passo-passo

### Definizione

Il **logaritmo in base $a$** di $x$ è l'esponente a cui bisogna elevare $a$ per ottenere $x$:

$$\log_a x = y \iff a^y = x$$

con $a > 0$, $a \neq 1$ e $x > 0$.

La definizione risponde alla domanda: "$a$ elevato a quale potenza dà $x$?".

**Relazioni fondamentali (funzione inversa):**

$$\log_a(a^x) = x \quad \text{per ogni } x \in \mathbb{R}$$
$$a^{\log_a x} = x \quad \text{per ogni } x > 0$$

Queste due identità esprimono il fatto che $\log_a$ e $a^x$ sono l'una l'inversa dell'altra.

### Casi particolari importanti

- $\log_e x = \ln x$: **logaritmo naturale** (base $e \approx 2{,}718$). Il più usato in matematica e fisica.
- $\log_{10} x = \log x$: **logaritmo decimale** (base 10). Il più usato in chimica, acustica, sismologia.
- $\log_2 x$: **logaritmo binario**. Il più usato in informatica e teoria dell'informazione.

### Proprietà grafiche e dominio

| Proprietà | Valore |
| --- | --- |
| Dominio | $(0, +\infty)$ — solo numeri positivi |
| Codominio | $\mathbb{R}$ |
| Passaggio per $(1, 0)$ | $\log_a 1 = 0$ per ogni base $a$ |
| Passaggio per $(a, 1)$ | $\log_a a = 1$ per ogni base $a$ |

Comportamento:
- Se $a > 1$: **crescente**. $\log_a x \to +\infty$ per $x \to +\infty$; $\log_a x \to -\infty$ per $x \to 0^+$ (asintoto verticale $x = 0$).
- Se $0 < a < 1$: **decrescente**. I comportamenti agli estremi si invertono.

Il grafico di $\log_a x$ è la riflessione del grafico di $a^x$ rispetto alla bisettrice $y = x$.

### Le cinque proprietà dei logaritmi

Per $a > 0$, $a \neq 1$ e $x, y > 0$, $k \in \mathbb{R}$:

$$\log_a(x \cdot y) = \log_a x + \log_a y \qquad \text{(prodotto)}$$

$$\log_a\!\left(\frac{x}{y}\right) = \log_a x - \log_a y \qquad \text{(quoziente)}$$

$$\log_a(x^k) = k \cdot \log_a x \qquad \text{(potenza)}$$

$$\log_a 1 = 0 \qquad \text{(logaritmo di 1)}$$

$$\log_a a = 1 \qquad \text{(logaritmo della base)}$$

> **Origine delle proprietà:** vengono direttamente dalle proprietà delle potenze. Per esempio, $\log_a(xy) = \log_a x + \log_a y$ perché $a^{p+q} = a^p \cdot a^q$: se $\log_a x = p$ e $\log_a y = q$, allora $xy = a^p \cdot a^q = a^{p+q}$, quindi $\log_a(xy) = p + q$.

### Formula del cambio di base

$$\log_a x = \frac{\log_b x}{\log_b a} = \frac{\ln x}{\ln a} = \frac{\log x}{\log a}$$

Questa formula permette di calcolare qualsiasi logaritmo usando solo il logaritmo naturale (o decimale) disponibile su qualsiasi calcolatore.

## Derivazioni commentate

### Dimostrazione della proprietà del prodotto

Voglio dimostrare che $\log_a(xy) = \log_a x + \log_a y$.

**Passo 1:** pongo $p = \log_a x$ e $q = \log_a y$. Per definizione di logaritmo:

$$x = a^p \quad \text{e} \quad y = a^q$$

**Passo 2:** calcolo il prodotto $xy$:

$$xy = a^p \cdot a^q = a^{p+q}$$

**Passo 3:** applico il logaritmo in base $a$ ad entrambi i membri:

$$\log_a(xy) = \log_a(a^{p+q}) = p + q = \log_a x + \log_a y$$

La dimostrazione è completa. Le altre proprietà si dimostrano in modo analogo.

### Derivazione della formula del cambio di base

Voglio esprimere $\log_a x$ in termini di $\ln$.

**Passo 1:** pongo $y = \log_a x$, cioè $a^y = x$.

**Passo 2:** applico $\ln$ a entrambi i membri:

$$\ln(a^y) = \ln x \implies y \ln a = \ln x$$

**Passo 3:** risolvo per $y$:

$$y = \frac{\ln x}{\ln a} \implies \log_a x = \frac{\ln x}{\ln a}$$

## Esempi graduati

**Esempio 1 — Calcolo diretto**

$\log_2 8 = 3$ perché $2^3 = 8$.

$\log_{10} 1000 = 3$ perché $10^3 = 1000$.

$\log_3 \frac{1}{9} = -2$ perché $3^{-2} = 1/9$.

$\ln e^5 = 5$ per la proprietà $\log_e(e^x) = x$.

---

**Esempio 2 — Calcolo con le proprietà**

Semplificare $\ln\!\left(\dfrac{e^3 \sqrt{x}}{y^2}\right)$.

$$= \ln(e^3) + \ln(\sqrt{x}) - \ln(y^2) = 3 + \frac{1}{2}\ln x - 2\ln y$$

---

**Esempio 3 — Cambio di base**

$\log_4 32 = \dfrac{\log_2 32}{\log_2 4} = \dfrac{5}{2} = 2{,}5$

Verifica: $4^{2{,}5} = (2^2)^{5/2} = 2^5 = 32$ ✓

---

**Esempio 4 — Espandere un logaritmo**

$\log_2\!\left(\dfrac{x^3 y}{\sqrt{z}}\right) = \log_2 x^3 + \log_2 y - \log_2 z^{1/2} = 3\log_2 x + \log_2 y - \frac{1}{2}\log_2 z$

---

**Esempio 5 — Contrarre un'espressione**

$2\ln x - \ln(x+1) + 3\ln y$

$= \ln x^2 - \ln(x+1) + \ln y^3 = \ln\!\left(\dfrac{x^2 y^3}{x+1}\right)$

---

**Esempio 6 — Calcolo numerico con cambio di base**

$\log_5 17 = \dfrac{\ln 17}{\ln 5} \approx \dfrac{2{,}833}{1{,}609} \approx 1{,}760$

Verifica parziale: $5^{1{,}760} \approx 17$ ✓

---

**Esempio 7 — Proprietà per verificare identità**

Verificare che $\log_a(a^n) = n$.

Per definizione: $\log_a(a^n) = y$ significa $a^y = a^n$, quindi $y = n$.

Oppure usando la proprietà della potenza: $\log_a(a^n) = n \cdot \log_a a = n \cdot 1 = n$.

## Grafico

```plot
{
  "title": "Logaritmo e esponenziale: funzioni inverse (simmetria rispetto a y = x)",
  "fn": "Math.log(x)",
  "fn2": "Math.exp(x)",
  "domain": [-2, 4],
  "yDomain": [-3, 6],
  "label1": "f(x) = ln(x)",
  "label2": "g(x) = eˣ"
}
```

## Elemento interattivo

```slider
{
  "title": "Logaritmo in base a: f(x) = log_a(x) — varia la base",
  "fn": "Math.log(Math.max(x, 0.001)) / Math.log(Math.abs(a) < 0.01 ? 0.01 : a)",
  "domain": [0.1, 6],
  "yDomain": [-3, 3],
  "pname": "a",
  "pmin": 0.2,
  "pmax": 5,
  "pdefault": 2,
  "pstep": 0.1,
  "plabel": "Base a",
  "label1": "f(x) = log_a(x)"
}
```

## Errori comuni

**Errore 1 — $\log_a(x + y) \neq \log_a x + \log_a y$.**
La proprietà del prodotto dice $\log_a(xy) = \log_a x + \log_a y$. La somma sotto al logaritmo non si separa: $\ln(x + y)$ non ha una forma semplificata in termini di $\ln x$ e $\ln y$.

**Errore 2 — $\log_a\!\left(\dfrac{x}{y}\right) \neq \dfrac{\log_a x}{\log_a y}$.**
Il logaritmo del quoziente è la differenza dei logaritmi ($\log_a x - \log_a y$), non il quoziente dei logaritmi. Il quoziente dei logaritmi appare solo nella formula del cambio di base.

**Errore 3 — Dimenticare che il logaritmo esige argomento positivo.**
$\log_a x$ è definito solo per $x > 0$. Quando si risolve un'equazione logaritmica, bisogna sempre verificare che le soluzioni trovate rendano positivi gli argomenti di tutti i logaritmi.

**Errore 4 — Confondere $\ln x$ con $\log x$ (base 10).**
In matematica e fisica $\log$ spesso indica il logaritmo naturale. In chimica e ingegneria spesso indica il logaritmo decimale. Verificare sempre la convenzione usata nel contesto.

**Errore 5 — $(\log_a x)^k \neq k \cdot \log_a x$.**
La proprietà della potenza dice $\log_a(x^k) = k \log_a x$: la potenza è dentro l'argomento del logaritmo. Se la potenza è fuori, cioè $(\log_a x)^k$, non si può semplificare.

**Errore 6 — Cambiare base sbagliando la formula.**
La formula corretta è $\log_a x = \dfrac{\ln x}{\ln a}$. Un errore comune è scrivere $\dfrac{\ln a}{\ln x}$ (invertendo numeratore e denominatore).

**Errore 7 — Credere che il logaritmo di un numero grande sia anch'esso grande.**
Il logaritmo cresce molto lentamente. $\ln(10^6) = 6 \ln 10 \approx 13{,}8$. $\ln(10^{100}) \approx 230$. Numeri astronomicamente grandi hanno logaritmi sorprendentemente piccoli.

## Applicazioni reali

**Chimica — pH.** Il pH di una soluzione è definito come $\text{pH} = -\log_{10}[\text{H}^+]$, dove $[\text{H}^+]$ è la concentrazione degli ioni idrogeno in mol/L. Una soluzione acida con $[\text{H}^+] = 10^{-3}$ mol/L ha pH 3. Il pH è logaritmico perché la chimica degli acidi copre molti ordini di grandezza di concentrazione.

**Informatica — Ricerca binaria.** Dato un array ordinato di $n$ elementi, la ricerca binaria trova un elemento in al più $\lceil \log_2 n \rceil$ confronti. Con $n = 10^9$ elementi, bastano $\log_2(10^9) \approx 30$ confronti. Il logaritmo esprime il "numero di dimezzamenti" necessari per ridurre il problema da $n$ a 1.

**Sismologia — Scala Richter.** La magnitudo di un terremoto è $M = \log_{10}(A/A_0)$, dove $A$ è l'ampiezza massima delle onde sismiche e $A_0$ è un'ampiezza di riferimento. Un aumento di 1 punto di magnitudo corrisponde a un'ampiezza 10 volte maggiore (e a un'energia rilasciata circa 32 volte maggiore). Il logaritmo comprime la scala enormemente: senza di esso, i valori da confrontare andrebbero da 1 a $10^{10}$.

## Riepilogo tabellare

| Proprietà | Formula |
| --- | --- |
| Definizione | $\log_a x = y \iff a^y = x$ |
| Dominio | $(0, +\infty)$ |
| Passaggio per $(1,0)$ | $\log_a 1 = 0$ |
| Passaggio per $(a,1)$ | $\log_a a = 1$ |
| Prodotto | $\log_a(xy) = \log_a x + \log_a y$ |
| Quoziente | $\log_a(x/y) = \log_a x - \log_a y$ |
| Potenza | $\log_a(x^k) = k \log_a x$ |
| Cambio di base | $\log_a x = \ln x / \ln a$ |
| Inversa esponenziale | $\log_a(a^x) = x$ e $a^{\log_a x} = x$ |

## Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Calcolo diretto</summary>

Calcolare: a) $\log_2 64$, b) $\log_{10} 0{,}001$, c) $\ln e^7$, d) $\log_3 \frac{1}{27}$.

**Soluzione:**

a) $\log_2 64 = \log_2 2^6 = 6$

b) $\log_{10} 0{,}001 = \log_{10} 10^{-3} = -3$

c) $\ln e^7 = 7$

d) $\log_3 \frac{1}{27} = \log_3 3^{-3} = -3$

</details>

<details>
<summary>Esercizio 2 — Espandere un logaritmo</summary>

Espandere $\log_2\!\left(\dfrac{8x^4}{y^2 \sqrt{z}}\right)$.

**Soluzione:**

$$= \log_2 8 + \log_2 x^4 - \log_2 y^2 - \log_2 z^{1/2}$$
$$= 3 + 4\log_2 x - 2\log_2 y - \frac{1}{2}\log_2 z$$

</details>

<details>
<summary>Esercizio 3 — Contrarre un'espressione</summary>

Scrivere come logaritmo singolo: $3\ln x - 2\ln y + \frac{1}{2}\ln z$.

**Soluzione:**

$$= \ln x^3 - \ln y^2 + \ln z^{1/2} = \ln\!\left(\frac{x^3 \sqrt{z}}{y^2}\right)$$

</details>

<details>
<summary>Esercizio 4 — Cambio di base</summary>

Calcolare $\log_6 100$ usando $\ln$.

**Soluzione:**

$$\log_6 100 = \frac{\ln 100}{\ln 6} = \frac{2\ln 10}{\ln 6} \approx \frac{2 \times 2{,}3026}{1{,}7918} \approx \frac{4{,}6052}{1{,}7918} \approx 2{,}571$$

</details>

<details>
<summary>Esercizio 5 — Dominio di funzione logaritmica</summary>

Trovare il dominio di $f(x) = \ln(x^2 - 4)$.

**Soluzione:**

Condizione: $x^2 - 4 > 0 \implies x^2 > 4 \implies \lvert x \rvert > 2$.

$D = (-\infty, -2) \cup (2, +\infty)$

</details>

<details>
<summary>Esercizio 6 — Applicazione al pH</summary>

Il succo di limone ha concentrazione $[\text{H}^+] = 6{,}3 \times 10^{-3}$ mol/L. Calcolare il pH.

**Soluzione:**

$$\text{pH} = -\log_{10}(6{,}3 \times 10^{-3}) = -(\log_{10} 6{,}3 + \log_{10} 10^{-3})$$
$$= -(\log_{10} 6{,}3 - 3) = 3 - \log_{10} 6{,}3 \approx 3 - 0{,}799 \approx 2{,}2$$

Il limone è acido (pH inferiore a 7).

</details>

<details>
<summary>Esercizio 7 — Equazione logaritmica</summary>

Risolvere $\log_3(x+2) + \log_3(x-2) = 3$, con le condizioni di esistenza.

**Soluzione:**

Condizioni: $x + 2 > 0$ e $x - 2 > 0 \implies x > 2$.

Unisco i logaritmi: $\log_3[(x+2)(x-2)] = 3 \implies x^2 - 4 = 3^3 = 27$

$x^2 = 31 \implies x = \sqrt{31} \approx 5{,}57$ (l'altra soluzione $-\sqrt{31}$ non soddisfa $x > 2$).

Verifica: $\sqrt{31} > 2$ ✓

</details>

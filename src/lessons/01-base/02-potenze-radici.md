---
id: base-02-potenze-radici
subject: base
topic_it: Algebra e numeri
topic_en: Algebra and numbers
title_it: Potenze, radici e notazione scientifica
title_en: Powers, roots and scientific notation
level: green
order: 2
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 2 — Operazioni e proprietà"
stato: da-rielaborare
---

## 1. Intuizione e motivazione

Supponi di dover descrivere quanti granelli di sabbia ci sono su una spiaggia. Un numero come 7 000 000 000 000 000 000 è difficile da leggere e da scrivere. Gli astronomi hanno lo stesso problema con le distanze stellari: la stella più vicina al Sole, Proxima Centauri, è a circa 40 000 000 000 000 km. I biologi studiano batteri di dimensione 0,000 001 m.

Le potenze risolvono questo problema: $7 \times 10^{18}$, $4 \times 10^{13}$ km, $10^{-6}$ m. Sono anche lo strumento con cui descrivere la crescita esponenziale: una popolazione di batteri che raddoppia ogni ora, dopo $n$ ore sarà $2^n$ volte la dimensione iniziale. Dopo 10 ore: $2^{10} = 1024$ volte. Dopo 20 ore: $2^{20} = 1\,048\,576$ volte.

Le radici sono l'operazione inversa: se le potenze "amplificano", le radici "trovano la base". La radice quadrata risponde alla domanda "quale numero, elevato al quadrato, dà questo risultato?". È fondamentale in geometria (il teorema di Pitagora), in statistica (la deviazione standard) e in fisica.

---

## 2. Prerequisiti

- Conoscere i quattro insiemi numerici: $\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{R}$
- Sapere eseguire le quattro operazioni su numeri interi e razionali
- Conoscere il concetto di numero negativo

---

## 3. Teoria passo-passo

### Potenze con esponente naturale

Dato $a \in \mathbb{R}$ e $n \in \mathbb{N}$ con $n \geq 1$:

$$a^n = \underbrace{a \cdot a \cdot \cdots \cdot a}_{n \text{ fattori}}$$

Si chiama $a$ la **base** e $n$ l'**esponente**. La potenza è semplicemente una moltiplicazione ripetuta.

**Casi speciali fondamentali:**
$$a^1 = a \qquad a^0 = 1 \quad (a \neq 0) \qquad 0^0 = \text{indefinito}$$

### Potenze con esponente intero negativo

Per $a \neq 0$ e $n \in \mathbb{N}$, $n \geq 1$:
$$a^{-n} = \frac{1}{a^n}$$

L'esponente negativo significa "ribalta la frazione". Per esempio: $2^{-3} = \frac{1}{2^3} = \frac{1}{8}$.

### Proprietà delle potenze

Per $a, b \in \mathbb{R}$ (con $a, b \neq 0$ dove richiesto) e $m, n \in \mathbb{Z}$:

| Proprietà | Formula | Esempio |
| --- | --- | --- |
| Prodotto di stessa base | $a^m \cdot a^n = a^{m+n}$ | $2^3 \cdot 2^4 = 2^7 = 128$ |
| Quoziente di stessa base | $\dfrac{a^m}{a^n} = a^{m-n}$ | $\dfrac{5^6}{5^2} = 5^4 = 625$ |
| Potenza di potenza | $(a^m)^n = a^{m \cdot n}$ | $(3^2)^4 = 3^8 = 6561$ |
| Potenza di prodotto | $(ab)^n = a^n b^n$ | $(2 \cdot 3)^3 = 8 \cdot 27 = 216$ |
| Potenza di quoziente | $\left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}$ | $\left(\dfrac{2}{3}\right)^2 = \dfrac{4}{9}$ |

### Potenze con esponente razionale

Per $a > 0$, $m \in \mathbb{Z}$, $n \in \mathbb{N}$, $n \geq 1$:

$$a^{m/n} = \sqrt[n]{a^m} = \left(\sqrt[n]{a}\right)^m$$

Questa è la connessione fondamentale tra potenze e radici.

### Radici

La **radice $n$-esima** di $a$ è il numero $b \geq 0$ tale che $b^n = a$:

$$b = \sqrt[n]{a} \iff b^n = a, \quad b \geq 0$$

**Condizioni di esistenza in $\mathbb{R}$:**
- Se $n$ è pari: $a$ deve essere $\geq 0$ (la radice pari di un negativo non è reale)
- Se $n$ è dispari: $a$ può essere qualsiasi numero reale

**Casi particolari:**
$$\sqrt{a} = \sqrt[2]{a} \qquad \sqrt[3]{a} \text{ è definita anche per } a < 0$$

### Notazione scientifica

Un numero in **notazione scientifica** si scrive:
$$a \times 10^n, \quad 1 \leq \lvert a \rvert < 10, \quad n \in \mathbb{Z}$$

Permette di esprimere numeri molto grandi o molto piccoli in forma compatta.

---

## 4. Derivazioni commentate

### Perché $a^0 = 1$ (con $a \neq 0$)?

Partiamo dalla proprietà del quoziente di stessa base:
$$\frac{a^m}{a^n} = a^{m-n}$$

Applichiamola con $m = n$:
$$\frac{a^n}{a^n} = a^{n-n} = a^0$$

Ma $\frac{a^n}{a^n} = 1$ per qualsiasi $a \neq 0$. Quindi **deve valere** $a^0 = 1$. Non è una convenzione arbitraria: è l'unica scelta coerente con le proprietà delle potenze.

### Perché $a^{-n} = \frac{1}{a^n}$?

Applichiamo ancora il quoziente con $m = 0$:
$$\frac{a^0}{a^n} = a^{0-n} = a^{-n}$$

Ma $\frac{a^0}{a^n} = \frac{1}{a^n}$. Quindi $a^{-n} = \frac{1}{a^n}$. Anche questa non è una definizione arbitraria: emerge naturalmente dalle proprietà.

---

## 5. Esempi graduati

**Esempio 1 — Calcolo diretto di una potenza**

Calcolare $(-3)^4$.

$$(-3)^4 = (-3) \cdot (-3) \cdot (-3) \cdot (-3) = 9 \cdot 9 = 81$$

Attenzione: $(-3)^4 = 81 > 0$ perché l'esponente è pari. Invece $(-3)^3 = -27 < 0$.

---

**Esempio 2 — Potenza con esponente negativo**

Calcolare $\left(\frac{2}{3}\right)^{-2}$.

$$\left(\frac{2}{3}\right)^{-2} = \frac{1}{\left(\frac{2}{3}\right)^2} = \frac{1}{\frac{4}{9}} = \frac{9}{4}$$

L'esponente negativo "ribalta" la base: $\left(\frac{a}{b}\right)^{-n} = \left(\frac{b}{a}\right)^n$.

---

**Esempio 3 — Applicare le proprietà**

Semplificare $\dfrac{x^5 \cdot x^{-2}}{x^3}$.

$$\frac{x^5 \cdot x^{-2}}{x^3} = \frac{x^{5+(-2)}}{x^3} = \frac{x^3}{x^3} = x^{3-3} = x^0 = 1$$

(valido per $x \neq 0$)

---

**Esempio 4 — Radice come potenza frazionaria**

Calcolare $8^{2/3}$.

$$8^{2/3} = \left(\sqrt[3]{8}\right)^2 = 2^2 = 4$$

Oppure: $8^{2/3} = \sqrt[3]{8^2} = \sqrt[3]{64} = 4$. Stesso risultato.

---

**Esempio 5 — Semplificare un'espressione con radici**

Semplificare $\sqrt{12}$.

$$\sqrt{12} = \sqrt{4 \cdot 3} = \sqrt{4} \cdot \sqrt{3} = 2\sqrt{3}$$

La strategia è: estrarre i fattori che sono quadrati perfetti.

---

**Esempio 6 — Notazione scientifica**

Convertire in notazione scientifica: (a) $45\,800\,000$; (b) $0{,}000\,073$.

(a) $45\,800\,000 = 4{,}58 \times 10^7$ (sposto la virgola di 7 posizioni a sinistra)

(b) $0{,}000\,073 = 7{,}3 \times 10^{-5}$ (sposto la virgola di 5 posizioni a destra)

---

**Esempio 7 — Crescita esponenziale**

Un investimento di €1000 cresce del 5% all'anno. Dopo $n$ anni vale $1000 \cdot (1{,}05)^n$. Dopo 10 anni:
$$1000 \cdot (1{,}05)^{10} = 1000 \cdot 1{,}6289\ldots \approx \text{€}1628{,}89$$

Dopo 20 anni: $1000 \cdot (1{,}05)^{20} \approx \text{€}2653{,}30$. La crescita accelera nel tempo — questo è il potere dell'interesse composto.

---

## 6. Grafico — Confronto tra potenze

```plot
{
  "title": "Confronto: x², x³, √x per x ≥ 0",
  "fn": "x*x",
  "fn2": "Math.sqrt(x)",
  "domain": [0, 4],
  "yDomain": [0, 10],
  "label1": "f(x) = x²",
  "label2": "g(x) = √x"
}
```

---

## 7. Elemento interattivo — Crescita esponenziale

```slider
{
  "title": "Potenza a^x: effetto della base",
  "fn": "Math.pow(a, x)",
  "domain": [-3, 5],
  "yDomain": [-1, 20],
  "pname": "a",
  "pmin": 0.5,
  "pmax": 3,
  "pdefault": 2,
  "pstep": 0.1,
  "plabel": "Base a",
  "label1": "f(x) = aˣ"
}
```

Osserva: per $a > 1$ la funzione cresce rapidamente. Per $a = 1$ è costante (vale 1 ovunque). Per $0 < a < 1$ è decrescente (decadimento esponenziale). Il punto $x = 0$ dà sempre $f(0) = a^0 = 1$.

---

## 8. Errori comuni

**Errore 1 — Confondere $(-a)^n$ con $-a^n$**

$(-3)^2 = (-3) \cdot (-3) = 9$, ma $-3^2 = -(3^2) = -9$. Le parentesi cambiano tutto! Per convenzione, l'esponente "lega" solo alla base immediata: $-3^2$ si legge $-(3^2)$.

---

**Errore 2 — Distribuire la potenza su una somma**

Sbagliato: $(a + b)^2 = a^2 + b^2$.
Corretto: $(a + b)^2 = a^2 + 2ab + b^2$. La potenza di una somma NON è la somma delle potenze. Questo errore è così comune da avere un nome: "errore del quadrato del binomio".

---

**Errore 3 — Radice di un numero negativo con esponente pari**

Sbagliato: $\sqrt{-4} = -2$.
Corretto: $\sqrt{-4}$ non è un numero reale. $(-2)^2 = 4$, non $-4$. Per avere $\sqrt{-4}$ serve uscire da $\mathbb{R}$ e andare in $\mathbb{C}$.

---

**Errore 4 — Sommare potenze di stessa base come se fossero prodotti**

Sbagliato: $2^3 + 2^4 = 2^7$.
Corretto: $2^3 + 2^4 = 8 + 16 = 24$. Si può raccogliere: $2^3(1 + 2) = 8 \cdot 3 = 24$. La proprietà $a^m \cdot a^n = a^{m+n}$ vale per il **prodotto**, non per la **somma**.

---

**Errore 5 — Calcolare $\sqrt{a^2} = a$ senza valore assoluto**

Sbagliato: $\sqrt{(-5)^2} = -5$.
Corretto: $\sqrt{(-5)^2} = \sqrt{25} = 5$. In generale: $\sqrt{a^2} = \lvert a \rvert$ (sempre positivo o zero).

---

**Errore 6 — Dimenticare le condizioni di esistenza**

$\sqrt[n]{a}$ con $n$ pari richiede $a \geq 0$. Scrivere $\sqrt{x-3}$ senza specificare $x \geq 3$ è incompleto.

---

## 9. Applicazioni reali

**Fisica e ordini di grandezza.** In fisica si lavora costantemente con potenze di 10: la carica dell'elettrone è $1{,}6 \times 10^{-19}$ coulomb, la massa del Sole è $2 \times 10^{30}$ kg. Senza la notazione scientifica e le potenze, sarebbe impossibile fare calcoli con questi numeri.

**Informatica.** La capacità di memoria dei computer si misura in potenze di 2: 1 KB = $2^{10} = 1024$ byte, 1 MB = $2^{20}$, 1 GB = $2^{30}$. La complessità degli algoritmi si descrive con funzioni come $n^2$ (quadratica) o $2^n$ (esponenziale). Un algoritmo esponenziale diventa rapidamente inutilizzabile: per $n = 100$ dati, fare $2^{100} \approx 10^{30}$ operazioni richiederebbe più tempo dell'età dell'universo.

**Biologia e medicina.** La crescita batterica è esponenziale: $N(t) = N_0 \cdot 2^{t/T}$ dove $T$ è il tempo di raddoppio. Il decadimento radioattivo segue la legge $N(t) = N_0 \cdot \left(\frac{1}{2}\right)^{t/t_{1/2}}$, usata nella datazione al carbonio-14. Le radici quadrate appaiono nella formula della deviazione standard in statistica.

---

## 10. Riepilogo tabellare

| Concetto | Formula | Esempio |
| --- | --- | --- |
| Potenza intera positiva | $a^n = a \cdot a \cdots a$ ($n$ volte) | $2^5 = 32$ |
| Potenza zero | $a^0 = 1$ ($a \neq 0$) | $7^0 = 1$ |
| Esponente negativo | $a^{-n} = \dfrac{1}{a^n}$ | $3^{-2} = \frac{1}{9}$ |
| Prodotto stessa base | $a^m \cdot a^n = a^{m+n}$ | $x^3 \cdot x^5 = x^8$ |
| Quoziente stessa base | $\dfrac{a^m}{a^n} = a^{m-n}$ | $\dfrac{x^7}{x^3} = x^4$ |
| Potenza di potenza | $(a^m)^n = a^{mn}$ | $(x^2)^3 = x^6$ |
| Esponente razionale | $a^{m/n} = \sqrt[n]{a^m}$ | $4^{3/2} = (\sqrt{4})^3 = 8$ |
| Notazione scientifica | $a \times 10^n$, $1 \leq \lvert a \rvert < 10$ | $0{,}0045 = 4{,}5 \times 10^{-3}$ |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Calcolo diretto</summary>

**Testo:** Calcola: (a) $(-2)^5$; (b) $3^{-3}$; (c) $\left(\frac{1}{2}\right)^{-4}$; (d) $0^7$.

**Soluzione:**

(a) $(-2)^5 = -32$ (esponente dispari, risultato negativo)

(b) $3^{-3} = \frac{1}{3^3} = \frac{1}{27}$

(c) $\left(\frac{1}{2}\right)^{-4} = 2^4 = 16$

(d) $0^7 = 0$ (zero elevato a qualsiasi esponente positivo è zero)

</details>

<details>
<summary>Esercizio 2 — Semplificare con le proprietà</summary>

**Testo:** Semplifica: $\dfrac{(2x^3)^2 \cdot x^{-1}}{4x^4}$.

**Soluzione:**

$$\frac{(2x^3)^2 \cdot x^{-1}}{4x^4} = \frac{4x^6 \cdot x^{-1}}{4x^4} = \frac{4x^{6-1}}{4x^4} = \frac{4x^5}{4x^4} = x^{5-4} = x$$

</details>

<details>
<summary>Esercizio 3 — Radici come potenze</summary>

**Testo:** Calcola: (a) $27^{1/3}$; (b) $16^{3/4}$; (c) $(-8)^{2/3}$.

**Soluzione:**

(a) $27^{1/3} = \sqrt[3]{27} = 3$

(b) $16^{3/4} = (\sqrt[4]{16})^3 = 2^3 = 8$

(c) $(-8)^{2/3} = (\sqrt[3]{-8})^2 = (-2)^2 = 4$ (la radice cubica di un negativo è definita)

</details>

<details>
<summary>Esercizio 4 — Notazione scientifica</summary>

**Testo:** Esegui il calcolo e scrivi il risultato in notazione scientifica: $(3 \times 10^5) \cdot (4 \times 10^{-2})$.

**Soluzione:**

$$(3 \times 10^5) \cdot (4 \times 10^{-2}) = (3 \cdot 4) \times 10^{5+(-2)} = 12 \times 10^3 = 1{,}2 \times 10^4$$

</details>

<details>
<summary>Esercizio 5 — Semplificare radici</summary>

**Testo:** Semplifica: (a) $\sqrt{72}$; (b) $\sqrt[3]{54}$; (c) $\sqrt{50} - 2\sqrt{8}$.

**Soluzione:**

(a) $\sqrt{72} = \sqrt{36 \cdot 2} = 6\sqrt{2}$

(b) $\sqrt[3]{54} = \sqrt[3]{27 \cdot 2} = 3\sqrt[3]{2}$

(c) $\sqrt{50} - 2\sqrt{8} = 5\sqrt{2} - 2 \cdot 2\sqrt{2} = 5\sqrt{2} - 4\sqrt{2} = \sqrt{2}$

</details>

<details>
<summary>Esercizio 6 — Crescita esponenziale</summary>

**Testo:** Una colonia di batteri parte da 500 individui e raddoppia ogni 3 ore. Quanti batteri ci sono dopo 12 ore?

**Soluzione:**

In 12 ore ci sono $\frac{12}{3} = 4$ periodi di raddoppio. Quindi:
$$N(12) = 500 \cdot 2^4 = 500 \cdot 16 = 8000 \text{ batteri}$$

</details>

<details>
<summary>Esercizio 7 — Trovare l'esponente</summary>

**Testo:** Trova $n$ tale che $2^n = 512$.

**Soluzione:**

$512 = 2 \cdot 256 = 2 \cdot 2^8 = 2^9$. Quindi $n = 9$.

Verifica: $2^9 = 2^{10}/2 = 1024/2 = 512$ ✓

</details>

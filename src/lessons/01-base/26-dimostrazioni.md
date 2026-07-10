---
id: base-26-dimostrazioni
subject: base
topic_it: Ragionamento matematico
topic_en: Mathematical reasoning
title_it: Tecniche di dimostrazione
title_en: Proof techniques
level: green
order: 26
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Appendice — Dimostrazioni"
---

## 1. Intuizione e motivazione

In matematica non basta che qualcosa "sembri vero" o funzioni per i primi mille casi. Serve una **dimostrazione**: un argomento rigoroso che garantisce la verità di un enunciato per tutti i casi possibili, senza eccezioni. Questo è ciò che distingue la matematica da ogni altra disciplina — la certezza assoluta, non la probabilità.

Considera la formula $1 + 2 + 3 + \cdots + n = \frac{n(n+1)}{2}$. Potresti verificarla per $n = 1, 2, 3, \ldots, 1000$. Ma c'è una formula per $n = 10^{100}$? Nessun computer del mondo potrebbe verificarla caso per caso. Solo una dimostrazione può garantirla per ogni $n$. Le tecniche di dimostrazione sono gli strumenti per costruire questi argomenti: dimostrazione diretta, per assurdo, per contrapposizione, e induzione matematica.

---

## 2. Prerequisiti

- Logica proposizionale: implicazione $P \Rightarrow Q$, contronominale, negazione
- Divisibilità e numeri pari/dispari
- Notazione $\forall$, $\exists$, $\in$, $\mathbb{Z}$, $\mathbb{N}$
- Massimo comun divisore $\gcd(a, b)$
- Sommatorie $\sum_{i=1}^{n}$

---

## 3. Teoria passo-passo

### Struttura di una dimostrazione

Una dimostrazione ha sempre:
- **Ipotesi**: ciò che si assume vero (le premesse)
- **Tesi**: ciò che si vuole dimostrare (la conclusione)
- **Argomento**: la catena di passi logici che porta dalle ipotesi alla tesi

Il risultato dimostrato si chiama **teorema** (o lemma, se è un risultato preparatorio; corollario, se segue facilmente da un teorema già dimostrato).

### Tecnica 1: Dimostrazione diretta

Si parte dalle ipotesi e si deriva la tesi con deduzioni successive, usando teoremi noti e proprietà algebriche.

**Schema:** Ipotesi $P$ → Passo 1 → Passo 2 → ... → Tesi $Q$

**Esempio:** Somma di due numeri pari è pari.

Siano $m$ e $n$ pari. Per definizione: $m = 2a$, $n = 2b$ con $a, b \in \mathbb{Z}$.

$$m + n = 2a + 2b = 2(a+b)$$

Poiché $a+b \in \mathbb{Z}$, la somma è pari. $\square$

### Tecnica 2: Dimostrazione per assurdo (contraddizione)

Si assume la **negazione della tesi** e si mostra che ciò porta a una **contraddizione** (un enunciato simultaneamente vero e falso). La contraddizione prova che la negazione non può essere vera, quindi la tesi è vera.

**Schema:** Ipotesi $P$, $\lnot Q$ assunta → ... → $A \land \lnot A$ (contraddizione) → Q dimostrata

**Esempio classico:** $\sqrt{2}$ è irrazionale.

Assumiamo per assurdo $\sqrt{2} = p/q$ con $p, q \in \mathbb{Z}$, $q \neq 0$, $\gcd(p,q)=1$.

Allora $2 = p^2/q^2$, cioè $p^2 = 2q^2$. Quindi $p^2$ è pari → $p$ è pari → $p = 2k$.

Sostituendo: $4k^2 = 2q^2 \implies q^2 = 2k^2$ → $q$ è pari.

Quindi $p$ e $q$ sono entrambi pari → $\gcd(p,q) \geq 2$: contraddizione con $\gcd(p,q)=1$. $\square$

### Tecnica 3: Dimostrazione per contrapposizione

Invece di dimostrare $P \Rightarrow Q$, si dimostra la **contronominale** equivalente $\lnot Q \Rightarrow \lnot P$.

**Schema:** Si assume $\lnot Q$ e si dimostra $\lnot P$ con una dimostrazione diretta.

**Esempio:** "Se $n^2$ è pari, allora $n$ è pari."

Dimostriamo la contronominale: "Se $n$ è dispari, allora $n^2$ è dispari."

Sia $n$ dispari: $n = 2k+1$.

$$n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$$

Il risultato è dispari. $\square$

### Tecnica 4: Induzione matematica

Per dimostrare che $P(n)$ vale per ogni intero $n \geq n_0$:

1. **Base:** Verificare $P(n_0)$.
2. **Passo induttivo:** Assumere $P(k)$ vera per un $k \geq n_0$ (**ipotesi induttiva**) e dimostrare $P(k+1)$.

**Perché funziona:** è come una catena di dominó. Se il primo cade (base), e ogni domino fa cadere il successivo (passo), allora cadono tutti.

**Varianti:**
- **Induzione forte:** si assume $P(n_0), P(n_0+1), \ldots, P(k)$ per dimostrare $P(k+1)$.
- **Induzione discendente:** si assume vera per $n_0 = \infty$ e si scende.

---

## 4. Derivazione commentata

### Dimostrazione per induzione: $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$

**Tesi:** $S(n) = 1 + 2 + 3 + \cdots + n = \dfrac{n(n+1)}{2}$ per ogni $n \geq 1$.

**Base ($n=1$):**

$$S(1) = 1 \qquad \text{e} \qquad \frac{1 \cdot 2}{2} = 1 \checkmark$$

**Passo induttivo:** Assumiamo vera $S(k) = \dfrac{k(k+1)}{2}$ per un certo $k \geq 1$. Dobbiamo dimostrare $S(k+1) = \dfrac{(k+1)(k+2)}{2}$.

$$S(k+1) = \underbrace{1 + 2 + \cdots + k}_{= S(k)} + (k+1) = \frac{k(k+1)}{2} + (k+1)$$

$$= (k+1)\left(\frac{k}{2} + 1\right) = (k+1) \cdot \frac{k+2}{2} = \frac{(k+1)(k+2)}{2} \checkmark$$

Il passo è verificato. Per il principio di induzione, la formula vale per ogni $n \geq 1$. $\square$

---

## 5. Esempi graduati

**Esempio 1 — Diretta: prodotto di due dispari.**
Dimostrare che il prodotto di due numeri dispari è dispari.

Siano $m = 2a+1$ e $n = 2b+1$:

$$mn = (2a+1)(2b+1) = 4ab + 2a + 2b + 1 = 2(2ab+a+b) + 1$$

Il risultato è della forma $2k+1$: dispari. $\square$

---

**Esempio 2 — Per assurdo: infiniti numeri primi.**
(Dimostrazione di Euclide) Supponiamo per assurdo che i numeri primi siano finiti: $p_1, p_2, \ldots, p_k$.

Costruiamo $N = p_1 p_2 \cdots p_k + 1$.

$N$ non è divisibile da nessuno dei $p_i$ (il resto è sempre 1). Quindi $N$ è primo, o ha un divisore primo diverso da $p_1, \ldots, p_k$: contraddizione. $\square$

---

**Esempio 3 — Per contrapposizione: $n$ pari implica $n^2$ pari.**
Contronominale: "$n^2$ dispari implica $n$ dispari."

Sia $n^2 = 2k+1$. Per assurdo se $n$ fosse pari, $n = 2m$, allora $n^2 = 4m^2$ pari. Contraddizione. $\square$

---

**Esempio 4 — Induzione: somma dei primi $n$ numeri dispari.**
Dimostrare che $1 + 3 + 5 + \cdots + (2n-1) = n^2$.

**Base:** $n=1$: $1 = 1^2$ ✓.

**Passo:** $\sum_{i=1}^{k+1}(2i-1) = k^2 + (2k+1) = k^2 + 2k + 1 = (k+1)^2$ ✓. $\square$

---

**Esempio 5 — Induzione: disuguaglianza di Bernoulli.**
Dimostrare che $(1+x)^n \geq 1 + nx$ per $x > -1$, $n \in \mathbb{N}$.

**Base:** $n=0$: $(1+x)^0 = 1 \geq 1$ ✓. (O $n=1$: $1+x \geq 1+x$ ✓.)

**Passo:** Assumiamo $(1+x)^k \geq 1+kx$. Allora:

$$(1+x)^{k+1} = (1+x)^k \cdot (1+x) \geq (1+kx)(1+x) = 1 + (k+1)x + kx^2 \geq 1 + (k+1)x$$

(poiché $kx^2 \geq 0$). $\square$

---

**Esempio 6 — Per assurdo: irrazionalità di $\sqrt{3}$.**
Supponiamo $\sqrt{3} = p/q$, $\gcd(p,q)=1$.

$p^2 = 3q^2$ → $3 \mid p^2$ → $3 \mid p$ (perché 3 è primo) → $p = 3k$.

$9k^2 = 3q^2$ → $q^2 = 3k^2$ → $3 \mid q$ → $\gcd(p,q) \geq 3$: contraddizione. $\square$

---

**Esempio 7 — Per assurdo: no interi con $a^2 - 4b = 2$.**
Supponiamo esistano $a, b \in \mathbb{Z}$ con $a^2 = 4b + 2 = 2(2b+1)$.

Quindi $a^2$ è pari → $a$ è pari → $a = 2c$.

$4c^2 = 4b + 2 \implies 2c^2 - 2b = 1 \implies 2(c^2 - b) = 1$.

Il membro sinistro è pari, il destro è dispari: contraddizione. $\square$

---

## 6. Grafico

```plot
{
  "title": "Somma 1+2+...+n = n(n+1)/2 (visualizzazione)",
  "fn": "x*(x+1)/2",
  "fn2": "x*x/2",
  "domain": [0, 10],
  "yDomain": [0, 55],
  "label1": "S(n) = n(n+1)/2",
  "label2": "confronto: n²/2"
}
```

Il grafico mostra la formula chiusa $S(n) = n(n+1)/2$ come funzione continua, confrontata con $n^2/2$. Per $n$ intero, i valori di $S(n)$ coincidono con la somma dei primi $n$ interi.

---

## 7. Elemento interattivo

```slider
{
  "title": "Somma parziale 1+2+...+n al variare di n",
  "fn": "Math.floor(x)*(Math.floor(x)+1)/2",
  "domain": [0, 15],
  "yDomain": [0, 130],
  "pname": "n",
  "pmin": 1,
  "pmax": 15,
  "pdefault": 5,
  "pstep": 1,
  "plabel": "Valore di n",
  "label1": "S(n) = n(n+1)/2"
}
```

Muovi lo slider per vedere come cresce la somma. Per $n = 10$: $S(10) = 55$. Per $n = 15$: $S(15) = 120$. La crescita è quadratica — confermata dalla formula $\frac{n(n+1)}{2} \approx \frac{n^2}{2}$.

---

## 8. Errori comuni

**Errore 1 — Dimenticare di dimostrare la base nell'induzione.**
Il passo induttivo funziona solo se c'è un "primo domino" che cade. Senza la base, il passo non garantisce nulla.

**Errore 2 — Usare la tesi nel passo induttivo.**
Scrivere "$S(k+1) = \frac{(k+1)(k+2)}{2}$" come primo passo del passo induttivo è circolare — si sta assumendo ciò che si vuole dimostrare.

**Errore 3 — Confondere induzione con verificare casi.**
Verificare la formula per $n = 1, 2, 3$ non è un'induzione. L'induzione richiede di dimostrare il passo per un $k$ generico.

**Errore 4 — Ipotesi assurda: assumere ciò che si vuole negare.**
Nella dimostrazione per assurdo, si assume $\lnot$ (tesi), non la tesi stessa. Un errore comune è assumere la tesi (dimostrando nulla).

**Errore 5 — Dimostrazione per esempi.**
Mostrare che qualcosa vale per 100 esempi non è una dimostrazione matematica. Un solo controesempio basta invece per falsificare un enunciato universale.

**Errore 6 — Confondere ipotesi e tesi.**
Nella dimostrazione per assurdo di $P \Rightarrow Q$: si assumono le ipotesi $P$ più la negazione della tesi $\lnot Q$, non $\lnot P$ o $\lnot(P \Rightarrow Q)$.

**Errore 7 — Passo induttivo troppo vago.**
Nel passo induttivo occorre usare esplicitamente l'ipotesi induttiva $P(k)$ per derivare $P(k+1)$. Scrivere "e così via" o "il ragionamento è analogo" non è accettabile.

---

## 9. Applicazioni reali

**Crittografia e sicurezza informatica.** Gli algoritmi crittografici moderni (RSA, elliptic curve) si basano su teoremi dimostrati rigorosamente — ad esempio l'irrazionalità di certi logaritmi, la difficoltà di fattorizzare grandi numeri. Una "dimostrazione" con soli esempi non garantirebbe nulla sulla sicurezza dei dati. La correttezza degli algoritmi (cioè che facciano quello che devono fare) si dimostra per induzione o per invarianti.

**Algoritmi e informatica teorica.** La complessità computazionale (quanto tempo e memoria richiede un algoritmo) viene dimostrata rigorosamente. Le dimostrazioni per induzione sono fondamentali per dimostrare la correttezza di algoritmi ricorsivi: la base corrisponde al caso base della ricorsione, il passo al caso ricorsivo. Senza dimostrazioni rigorose, non si potrebbe certificare che un programma funziona correttamente.

**Fisica matematica.** Molte leggi fisiche fondamentali sono accompagnate da dimostrazioni matematiche. Il teorema di conservazione dell'energia (teorema di Noether, 1915) dimostra che ogni simmetria fisica implica una legge di conservazione — e la dimostrazione è rigorosa al pari di qualsiasi teorema matematico. La capacità di distinguere "sembra vero empiricamente" da "è dimostrato matematicamente" è cruciale per capire i limiti e le certezze della fisica.

---

## 10. Riepilogo tabellare

| Tecnica | Strategia | Quando usarla |
| --- | --- | --- |
| Diretta | Ipotesi → ... → Tesi | La strada è chiara, la tesi si ottiene manipolando le ipotesi |
| Assurdo | Assume $\lnot$Tesi → Contraddizione | La tesi è difficile da dimostrare direttamente |
| Contrapposizione | Dimostra $\lnot Q \Rightarrow \lnot P$ | La negazione è più facile da manipolare |
| Induzione | Base + Passo $(k \to k+1)$ | Enunciati su tutti i naturali/interi |

| Termine | Significato |
| --- | --- |
| Teorema | Risultato dimostrato importante |
| Lemma | Risultato ausiliario, usato per dimostrare un teorema |
| Corollario | Risultato che segue facilmente da un teorema |
| Assioma | Principio non dimostrato, assunto come base |
| $\square$ (o QED) | Fine della dimostrazione |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Diretta: prodotto di pari e dispari</summary>

**Testo:** Dimostrare che il prodotto di un numero pari e qualsiasi intero è pari.

**Soluzione:**

Sia $m = 2a$ (pari) e $n \in \mathbb{Z}$ qualsiasi.

$$mn = 2a \cdot n = 2(an)$$

Poiché $an \in \mathbb{Z}$, il prodotto è pari. $\square$

</details>

<details>
<summary>Esercizio 2 — Per assurdo: $\sqrt{3}$ irrazionale</summary>

**Testo:** Dimostrare che $\sqrt{3}$ è irrazionale.

**Soluzione:**

Supponiamo per assurdo $\sqrt{3} = p/q$ con $p, q \in \mathbb{Z}$, $q \neq 0$, $\gcd(p,q)=1$.

Allora $p^2 = 3q^2$. Quindi $3 \mid p^2$. Poiché 3 è primo, $3 \mid p$, cioè $p = 3k$.

Sostituendo: $9k^2 = 3q^2 \implies q^2 = 3k^2$ → $3 \mid q$.

Ma allora $\gcd(p,q) \geq 3$: contraddizione con $\gcd(p,q) = 1$. $\square$

</details>

<details>
<summary>Esercizio 3 — Induzione: somma dei quadrati</summary>

**Testo:** Dimostrare per induzione che $\displaystyle\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$.

**Soluzione:**

**Base ($n=1$):** $1 = \frac{1 \cdot 2 \cdot 3}{6} = 1$ ✓.

**Passo:** Assumiamo $\sum_{i=1}^{k} i^2 = \frac{k(k+1)(2k+1)}{6}$.

$$\sum_{i=1}^{k+1} i^2 = \frac{k(k+1)(2k+1)}{6} + (k+1)^2 = \frac{(k+1)[k(2k+1) + 6(k+1)]}{6}$$

$$= \frac{(k+1)(2k^2+7k+6)}{6} = \frac{(k+1)(k+2)(2k+3)}{6} \quad \square$$

</details>

<details>
<summary>Esercizio 4 — Per contrapposizione</summary>

**Testo:** Dimostrare per contrapposizione: "Se $n^3$ è dispari, allora $n$ è dispari."

**Soluzione:**

Contronominale: "Se $n$ è pari, allora $n^3$ è pari."

Sia $n = 2k$. Allora $n^3 = 8k^3 = 2(4k^3)$, che è pari. $\square$

Per contrapposizione, se $n^3$ è dispari allora $n$ è dispari.

</details>

<details>
<summary>Esercizio 5 — Per assurdo: nessun razionale con quadrato 2</summary>

**Testo:** Dimostrare che non esiste $r \in \mathbb{Q}$ tale che $r^2 = 2$. (Stesso di $\sqrt{2}$ irrazionale.)

**Soluzione:**

Questa è la dimostrazione classica dell'irrazionalità di $\sqrt{2}$ già vista nella teoria. Riepiloghiamo:

Supponiamo $r = p/q$, $\gcd(p,q)=1$, $p^2 = 2q^2$. Allora $p$ è pari ($p = 2m$), sostituendo $4m^2 = 2q^2$, $q^2 = 2m^2$, $q$ è pari. Contraddizione. $\square$

</details>

<details>
<summary>Esercizio 6 — Induzione forte: successione di Fibonacci</summary>

**Testo:** La successione di Fibonacci è $F_1=1$, $F_2=1$, $F_{n+2}=F_{n+1}+F_n$. Dimostrare per induzione forte che $F_n \leq 2^n$ per ogni $n \geq 1$.

**Soluzione:**

**Base:** $F_1 = 1 \leq 2$, $F_2 = 1 \leq 4$ ✓.

**Passo (induzione forte):** Assumiamo $F_j \leq 2^j$ per tutti $j \leq k$.

$$F_{k+1} = F_k + F_{k-1} \leq 2^k + 2^{k-1} = 2^{k-1}(2+1) = 3 \cdot 2^{k-1} \leq 4 \cdot 2^{k-1} = 2^{k+1} \quad \square$$

</details>

<details>
<summary>Esercizio 7 — Induzione: diseguaglianza $2^n > n^2$ per $n \geq 5$</summary>

**Testo:** Dimostrare per induzione che $2^n > n^2$ per ogni $n \geq 5$.

**Soluzione:**

**Base ($n=5$):** $2^5 = 32 > 25 = 5^2$ ✓.

**Passo:** Assumiamo $2^k > k^2$.

$$2^{k+1} = 2 \cdot 2^k > 2k^2$$

Dobbiamo mostrare $2k^2 \geq (k+1)^2 = k^2 + 2k + 1$, cioè $k^2 \geq 2k + 1$, cioè $(k-1)^2 \geq 2$.

Per $k \geq 5$: $k-1 \geq 4 \geq 2 > \sqrt{2}$, quindi $(k-1)^2 \geq 4 > 2$ ✓.

Dunque $2^{k+1} > (k+1)^2$. $\square$

</details>

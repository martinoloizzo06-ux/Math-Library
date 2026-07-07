---
id: base-01-insiemi-numerici
subject: base
topic_it: Algebra e numeri
topic_en: Algebra and numbers
title_it: Insiemi numerici
title_en: Number sets
level: green
order: 1
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 1 — Fondamenti numerici"
---

## I grandi insiemi numerici

La matematica si costruisce su insiemi di numeri sempre più ricchi. Ognuno estende il precedente per risolvere problemi che il precedente non riesce a risolvere.

### I numeri naturali $\mathbb{N}$

$$\mathbb{N} = \{0, 1, 2, 3, 4, \ldots\}$$

Sono i numeri del contare. Con $\mathbb{N}$ possiamo sommare e moltiplicare, ma la sottrazione non è sempre possibile: $3 - 5$ non appartiene a $\mathbb{N}$.

### I numeri interi $\mathbb{Z}$

$$\mathbb{Z} = \{\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots\}$$

Aggiungendo i numeri negativi otteniamo $\mathbb{Z}$. Ora la sottrazione è sempre possibile, ma la divisione no: $7 \div 3 \notin \mathbb{Z}$.

### I numeri razionali $\mathbb{Q}$

$$\mathbb{Q} = \left\{ \frac{p}{q} \;\middle|\; p \in \mathbb{Z},\; q \in \mathbb{Z},\; q \neq 0 \right\}$$

Ogni frazione di interi appartiene a $\mathbb{Q}$. In $\mathbb{Q}$ sono possibili le quattro operazioni (tranne divisione per zero). I numeri razionali si riconoscono perché la loro espansione decimale è **finita** oppure **periodica**:

$$\frac{1}{3} = 0{,}\overline{3} \qquad \frac{5}{4} = 1{,}25$$

### I numeri reali $\mathbb{R}$

Esistono lunghezze geometriche che non corrispondono ad alcun razionale. Il caso più famoso è la diagonale del quadrato di lato 1:

$$\sqrt{2} \notin \mathbb{Q}$$

**Dimostrazione per assurdo.** Supponiamo $\sqrt{2} = p/q$ con $p, q$ interi positivi e $\gcd(p,q) = 1$. Allora $2 = p^2/q^2$, cioè $p^2 = 2q^2$. Questo implica che $p^2$ è pari, quindi $p$ è pari: scriviamo $p = 2k$. Sostituendo, $(2k)^2 = 2q^2$, da cui $q^2 = 2k^2$, quindi anche $q$ è pari. Ma allora $p$ e $q$ hanno il fattore 2 in comune, contraddicendo $\gcd(p,q)=1$. $\contradiction$

I **numeri irrazionali** come $\sqrt{2}$, $\pi$, $e$ hanno espansioni decimali infinite e non periodiche. L'insieme $\mathbb{R}$ contiene tutti i razionali e tutti gli irrazionali; rappresenta geometricamente l'intera retta numerica.

### La gerarchia degli insiemi

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$$

Ogni insieme è contenuto nel successivo.

## Proprietà di $\mathbb{R}$

$\mathbb{R}$ è un **campo ordinato completo**. Le tre proprietà fondamentali sono:

1. **Campo:** si può sommare, sottrarre, moltiplicare e dividere (tranne per zero).
2. **Ordinato:** dati $a, b \in \mathbb{R}$, vale esattamente una tra: $a < b$, $a = b$, $a > b$.
3. **Completo:** ogni successione di Cauchy converge; non ci sono "buchi" nella retta.

La **densità** di $\mathbb{Q}$ in $\mathbb{R}$ afferma che tra due qualsiasi numeri reali esiste sempre un razionale (e anche un irrazionale).

---

## Esercizi

<details>
<summary>Esercizio 1 — Classificazione</summary>

Classifica ciascuno dei seguenti numeri come elemento di $\mathbb{N}$, $\mathbb{Z} \setminus \mathbb{N}$, $\mathbb{Q} \setminus \mathbb{Z}$, oppure $\mathbb{R} \setminus \mathbb{Q}$:

$$-7, \quad \frac{11}{4}, \quad 0, \quad \sqrt{9}, \quad \sqrt{5}, \quad 0{,}125, \quad \pi - \pi$$

**Soluzione.**

| Numero | Insieme |
|---|---|
| $-7$ | $\mathbb{Z} \setminus \mathbb{N}$ |
| $11/4 = 2{,}75$ | $\mathbb{Q} \setminus \mathbb{Z}$ |
| $0$ | $\mathbb{N}$ |
| $\sqrt{9} = 3$ | $\mathbb{N}$ |
| $\sqrt{5}$ | $\mathbb{R} \setminus \mathbb{Q}$ |
| $0{,}125 = 1/8$ | $\mathbb{Q} \setminus \mathbb{Z}$ |
| $\pi - \pi = 0$ | $\mathbb{N}$ |

</details>

<details>
<summary>Esercizio 2 — Tra due reali</summary>

Trovare un numero razionale e un numero irrazionale compresi tra $1$ e $\sqrt{2}$.

**Soluzione.**

Per il razionale basta prendere, ad esempio, $\dfrac{5}{4} = 1{,}25$. Verifica: $1 < 1{,}25$ e $1{,}25 < \sqrt{2} \approx 1{,}414$. ✓

Per l'irrazionale: consideriamo $\dfrac{\sqrt{2}+1}{2}$. Poiché $1 < \sqrt{2}$, abbiamo $2 < 1 + \sqrt{2}$, quindi $1 < \dfrac{1+\sqrt{2}}{2}$. Dall'altro lato, $1 + \sqrt{2} < 2\sqrt{2}$ (perché $1 < \sqrt{2}$), quindi $\dfrac{1+\sqrt{2}}{2} < \sqrt{2}$. È irrazionale perché è la metà di $1 + \sqrt{2}$, che è irrazionale.

</details>

<details>
<summary>Esercizio 3 — Espansione decimale</summary>

Convertire $0{,}142857142857\ldots = 0{,}\overline{142857}$ in forma di frazione.

**Soluzione.**

Sia $x = 0{,}\overline{142857}$. Il periodo ha 6 cifre, quindi moltiplicare per $10^6 = 1\,000\,000$:

$$1\,000\,000\,x = 142857{,}\overline{142857}$$

Sottraendo: $999\,999\,x = 142\,857$, quindi

$$x = \frac{142\,857}{999\,999} = \frac{1}{7}$$

Verifica: $1 \div 7 = 0{,}\overline{142857}$. ✓

</details>

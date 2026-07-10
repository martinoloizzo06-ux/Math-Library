---
id: algebra-11-prodotto-scalare
subject: algebra-lineare
topic_it: Ortogonalità
topic_en: Orthogonality
title_it: Prodotto scalare e spazi con norma
title_en: Inner product and normed spaces
level: blue
order: 11
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 4 — Ortogonalità"
---

## 1. Intuizione

Nel piano cartesiano siamo abituati a misurare distanze e angoli. Ma in algebra lineare lavoriamo con spazi astratti: vettori in $\mathbb{R}^n$, funzioni continue, matrici. Come si misura la "lunghezza" di una funzione? Come si verifica se due funzioni sono "perpendicolari"?

Il **prodotto scalare interno** generalizza queste idee geometriche a qualsiasi spazio vettoriale. Come il prodotto scalare standard $\mathbf{u}\cdot\mathbf{v}$ in $\mathbb{R}^2$ cattura l'angolo tra vettori, il prodotto scalare in $L^2$ cattura la "correlazione" tra funzioni. Le serie di Fourier, la meccanica quantistica, e la regressione lineare poggiano tutte su questo stesso concetto.

Pensa a una serie di Fourier: un segnale sonoro viene scomposto in sinusoidi. Questo funziona perché le sinusoidi sono "ortogonali" rispetto al prodotto scalare $L^2$: $\int_0^{2\pi}\sin(mx)\sin(nx)\,dx = 0$ per $m\neq n$. La struttura di prodotto scalare è ciò che permette questa decomposizione pulita.

## 2. Prerequisiti

- Spazi vettoriali su $\mathbb{R}$
- Prodotto scalare standard in $\mathbb{R}^n$: $\mathbf{u}^T\mathbf{v} = \sum u_i v_i$
- Norma euclidea: $\lVert\mathbf{v}\rVert = \sqrt{\mathbf{v}^T\mathbf{v}}$
- Nozione di integrale definito (per lo spazio $L^2$)

## 3. Teoria

**Definizione.** Un **prodotto scalare interno** su uno spazio vettoriale $V$ (su $\mathbb{R}$) è una funzione $\langle\cdot,\cdot\rangle: V\times V \to \mathbb{R}$ che soddisfa, per ogni $\mathbf{u}, \mathbf{v}, \mathbf{w} \in V$ e $c \in \mathbb{R}$:

1. **Simmetria:** $\langle\mathbf{u},\mathbf{v}\rangle = \langle\mathbf{v},\mathbf{u}\rangle$.
2. **Linearità nel primo argomento:** $\langle c\mathbf{u}+\mathbf{w},\mathbf{v}\rangle = c\langle\mathbf{u},\mathbf{v}\rangle + \langle\mathbf{w},\mathbf{v}\rangle$.
3. **Positività definita:** $\langle\mathbf{v},\mathbf{v}\rangle \geq 0$, con $\langle\mathbf{v},\mathbf{v}\rangle = 0 \iff \mathbf{v} = \mathbf{0}$.

Dalla simmetria e linearità segue la linearità anche nel secondo argomento: il prodotto scalare è **bilineare**.

**Prodotto scalare standard in $\mathbb{R}^n$.**

$$\langle\mathbf{u},\mathbf{v}\rangle = \mathbf{u}^T\mathbf{v} = \sum_{i=1}^n u_i v_i$$

**Norma indotta.** Da qualsiasi prodotto scalare si ottiene una norma:

$$\lVert\mathbf{v}\rVert = \sqrt{\langle\mathbf{v},\mathbf{v}\rangle}$$

Proprietà della norma: $\lVert\mathbf{v}\rVert \geq 0$ (zero $\iff \mathbf{v}=\mathbf{0}$), $\lVert c\mathbf{v}\rVert = \lvert c\rvert\,\lVert\mathbf{v}\rVert$, disuguaglianza triangolare.

**Prodotto scalare in $L^2([a,b])$.** Lo spazio delle funzioni di quadrato integrabile su $[a,b]$:

$$\langle f,g\rangle = \int_a^b f(x)g(x)\,dx, \qquad \lVert f\rVert = \sqrt{\int_a^b [f(x)]^2\,dx}$$

Questo è il contesto naturale per le serie di Fourier, le trasformate integrali e la meccanica quantistica.

**Prodotto scalare pesato.** Per un peso $w(x) > 0$:

$$\langle f,g\rangle_w = \int_a^b f(x)g(x)w(x)\,dx$$

Usato per polinomi ortogonali (Legendre, Chebyshev, Laguerre) con pesi diversi.

**Coseno dell'angolo.** Il prodotto scalare e la norma determinano l'angolo $\theta$ tra vettori:

$$\cos\theta = \frac{\langle\mathbf{u},\mathbf{v}\rangle}{\lVert\mathbf{u}\rVert\,\lVert\mathbf{v}\rVert}$$

**Ortogonalità.** $\mathbf{u} \perp \mathbf{v}$ se $\langle\mathbf{u},\mathbf{v}\rangle = 0$, cioè $\theta = 90°$.

**Teorema di Pitagora generalizzato.** Se $\mathbf{u}\perp\mathbf{v}$:

$$\lVert\mathbf{u}+\mathbf{v}\rVert^2 = \lVert\mathbf{u}\rVert^2 + \lVert\mathbf{v}\rVert^2$$

## 4. Derivazione

**Dimostrazione della disuguaglianza di Cauchy-Schwarz.**

$$\lvert\langle\mathbf{u},\mathbf{v}\rangle\rvert \leq \lVert\mathbf{u}\rVert\,\lVert\mathbf{v}\rVert$$

Se $\mathbf{v} = \mathbf{0}$ entrambi i lati sono 0. Per $\mathbf{v}\neq\mathbf{0}$, consideriamo la funzione scalare $f(t) = \lVert\mathbf{u} + t\mathbf{v}\rVert^2 \geq 0$ per ogni $t\in\mathbb{R}$:

$$f(t) = \lVert\mathbf{u}\rVert^2 + 2t\langle\mathbf{u},\mathbf{v}\rangle + t^2\lVert\mathbf{v}\rVert^2 \geq 0$$

Questo è un polinomio in $t$ non negativo: il discriminante deve essere $\leq 0$:

$$\Delta = 4\langle\mathbf{u},\mathbf{v}\rangle^2 - 4\lVert\mathbf{u}\rVert^2\lVert\mathbf{v}\rVert^2 \leq 0$$

$$\langle\mathbf{u},\mathbf{v}\rangle^2 \leq \lVert\mathbf{u}\rVert^2\lVert\mathbf{v}\rVert^2 \implies \lvert\langle\mathbf{u},\mathbf{v}\rangle\rvert \leq \lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert \quad \square$$

L'uguaglianza vale quando $f(t) = 0$ per qualche $t$, cioè $\mathbf{u} + t\mathbf{v} = \mathbf{0}$: i vettori sono proporzionali.

**Derivazione della disuguaglianza triangolare.**

$$\lVert\mathbf{u}+\mathbf{v}\rVert^2 = \lVert\mathbf{u}\rVert^2 + 2\langle\mathbf{u},\mathbf{v}\rangle + \lVert\mathbf{v}\rVert^2 \leq \lVert\mathbf{u}\rVert^2 + 2\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert + \lVert\mathbf{v}\rVert^2 = (\lVert\mathbf{u}\rVert+\lVert\mathbf{v}\rVert)^2$$

Prendendo la radice quadrata: $\lVert\mathbf{u}+\mathbf{v}\rVert \leq \lVert\mathbf{u}\rVert + \lVert\mathbf{v}\rVert$. $\square$

## 5. Esempi

**Esempio 1 — Ortogonalità in $\mathbb{R}^4$.**

$$\mathbf{u} = (1, 2, -1, 0), \quad \mathbf{v} = (2, -1, 0, 3)$$

$$\langle\mathbf{u},\mathbf{v}\rangle = 1\cdot2 + 2\cdot(-1) + (-1)\cdot0 + 0\cdot3 = 2 - 2 + 0 + 0 = 0$$

I vettori sono ortogonali. $\lVert\mathbf{u}\rVert = \sqrt{1+4+1+0} = \sqrt{6}$, $\lVert\mathbf{v}\rVert = \sqrt{4+1+0+9} = \sqrt{14}$.

---

**Esempio 2 — Norma $L^2$ di $\sin x$.**

$$\lVert\sin\rVert^2 = \int_0^\pi \sin^2 x\,dx = \int_0^\pi\frac{1-\cos 2x}{2}\,dx = \left[\frac{x}{2} - \frac{\sin 2x}{4}\right]_0^\pi = \frac{\pi}{2}$$

$\lVert\sin\rVert = \sqrt{\pi/2}$.

---

**Esempio 3 — Ortogonalità di seno e coseno.**

$$\langle\sin, \cos\rangle = \int_0^\pi \sin x\cos x\,dx = \frac{1}{2}\int_0^\pi\sin 2x\,dx = \left[-\frac{\cos 2x}{4}\right]_0^\pi = \frac{-1+1}{4} = 0$$

$\sin x$ e $\cos x$ sono ortogonali su $[0,\pi]$! Questo è il fondamento delle serie di Fourier.

---

**Esempio 4 — Angolo tra vettori.**

$$\mathbf{u} = (1,0,0), \quad \mathbf{v} = (1,1,0)$$

$$\cos\theta = \frac{\langle\mathbf{u},\mathbf{v}\rangle}{\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert} = \frac{1}{1\cdot\sqrt{2}} = \frac{1}{\sqrt{2}}$$

$\theta = 45°$.

---

**Esempio 5 — Cauchy-Schwarz applicata.**

Dimostrare che $\left(\sum_{i=1}^n a_i b_i\right)^2 \leq \left(\sum_{i=1}^n a_i^2\right)\left(\sum_{i=1}^n b_i^2\right)$.

Applicando Cauchy-Schwarz con $\mathbf{a} = (a_1,\ldots,a_n)$ e $\mathbf{b}=(b_1,\ldots,b_n)$:

$$\lvert\langle\mathbf{a},\mathbf{b}\rangle\rvert^2 \leq \lVert\mathbf{a}\rVert^2\lVert\mathbf{b}\rVert^2 \iff \left(\sum a_i b_i\right)^2 \leq \left(\sum a_i^2\right)\left(\sum b_i^2\right) \quad \square$$

---

**Esempio 6 — Prodotto scalare pesato.**

Spazio: polinomi su $[0,1]$ con peso $w(x)=e^{-x}$.

$$\langle 1, x\rangle_w = \int_0^1 e^{-x}\,dx = [-e^{-x}]_0^1 = 1 - e^{-1} \neq 0$$

Le funzioni 1 e $x$ non sono ortogonali in questo spazio pesato.

---

**Esempio 7 — Norma e distanza nel piano.**

Con il prodotto scalare standard in $\mathbb{R}^2$, la distanza tra $\mathbf{u}=(3,4)$ e $\mathbf{v}=(0,0)$ è:

$$\lVert\mathbf{u}-\mathbf{v}\rVert = \sqrt{3^2+4^2} = \sqrt{25} = 5$$

Teorema di Pitagora! In generale, $d(\mathbf{u},\mathbf{v}) = \lVert\mathbf{u}-\mathbf{v}\rVert$.

---

**Esempio 8 — Ortogonalità di $\sin(mx)$ e $\sin(nx)$.**

Per $m\neq n$ interi positivi, su $[0,\pi]$:

$$\langle\sin(mx), \sin(nx)\rangle = \int_0^\pi\sin(mx)\sin(nx)\,dx = 0$$

(usando le identità prodotto-somma). Le funzioni $\sin(nx)$ formano una famiglia ortogonale — la base delle serie di Fourier in seno.

## 6. Grafico

```plot
{"title":"Prodotto scalare L²: sovrapposizione di sin(x) e cos(x)","fn":"Math.sin(x)","fn2":"Math.cos(x)","domain":[0,6.28],"yDomain":[-1.2,1.2],"label1":"sin(x)","label2":"cos(x)"}
```

## 7. Slider interattivo

```slider
{"title":"Norma L² di sin(nx): variazione con la frequenza","fn":"Math.sin(a*x)","domain":[0,6.28],"yDomain":[-1.2,1.2],"pname":"a","pmin":1,"pmax":5,"pdefault":1,"pstep":1,"plabel":"frequenza n","label1":"sin(nx)"}
```

## 8. Errori comuni

**Errore 1 — Confondere prodotto scalare e moltiplicazione matriciale.** Il prodotto scalare $\langle\mathbf{u},\mathbf{v}\rangle$ restituisce uno **scalare**. La moltiplicazione $\mathbf{u}\mathbf{v}^T$ restituisce una **matrice** ($n\times n$). Sono oggetti completamente diversi.

**Errore 2 — Pensare che ortogonalità dipenda sempre dal prodotto scalare standard.** Due vettori possono essere ortogonali rispetto a un prodotto scalare ma non a un altro. L'ortogonalità è relativa alla struttura di prodotto scalare scelta.

**Errore 3 — Dimenticare la positività definita.** Una forma bilineare simmetrica non è un prodotto scalare se ammette $\langle\mathbf{v},\mathbf{v}\rangle < 0$ o se $\langle\mathbf{v},\mathbf{v}\rangle = 0$ con $\mathbf{v}\neq\mathbf{0}$ (queste si chiamano forme indefinite o semidefinite).

**Errore 4 — Sbagliare il segno in $\cos\theta$.** Se $\langle\mathbf{u},\mathbf{v}\rangle < 0$, allora $\cos\theta < 0$ e $\theta > 90°$. I vettori "puntano in direzioni opposte". Non è un errore — ha senso geometrico.

**Errore 5 — Applicare Cauchy-Schwarz solo in $\mathbb{R}^n$.** La disuguaglianza vale in qualsiasi spazio con prodotto scalare interno, inclusi $L^2$ e spazi di funzioni. È uno dei risultati più universali dell'analisi.

**Errore 6 — Confondere norma e norma al quadrato.** La distanza è $\lVert\mathbf{u}-\mathbf{v}\rVert$, non $\lVert\mathbf{u}-\mathbf{v}\rVert^2$. La norma al quadrato è più comoda nei calcoli, ma non è una metrica (non soddisfa la disuguaglianza triangolare).

**Errore 7 — Pensare che ogni norma provenga da un prodotto scalare.** Le norme $\lVert\mathbf{v}\rVert_1 = \sum\lvert v_i\rvert$ e $\lVert\mathbf{v}\rVert_\infty = \max_i\lvert v_i\rvert$ sono norme legittime, ma non provengono da nessun prodotto scalare. Solo le norme che soddisfano l'identità del parallelogramma $\lVert\mathbf{u}+\mathbf{v}\rVert^2 + \lVert\mathbf{u}-\mathbf{v}\rVert^2 = 2(\lVert\mathbf{u}\rVert^2+\lVert\mathbf{v}\rVert^2)$ sono indotte da prodotti scalari.

## 9. Applicazioni reali

**Serie di Fourier e analisi del segnale.** L'idea centrale delle serie di Fourier è esprimere un segnale $f(x)$ come combinazione di sinusoidi: $f(x) = \sum_n c_n\sin(nx) + d_n\cos(nx)$. I coefficienti si calcolano tramite il prodotto scalare $L^2$: $c_n = \langle f, \sin(nx)\rangle / \lVert\sin(nx)\rVert^2$. Questo funziona perché $\{\sin(nx), \cos(nx)\}$ è una famiglia ortogonale in $L^2([0,2\pi])$. Senza la struttura di prodotto scalare, non sarebbe possibile trovare i coefficienti "proiettando" il segnale su ciascuna frequenza. Le applicazioni spaziano dalla compressione audio MP3 all'elettroencefalografia.

**Meccanica quantistica.** Lo spazio degli stati quantistici è uno spazio di Hilbert $\mathcal{H}$ — cioè uno spazio con prodotto scalare interno completo. Lo stato di una particella è un vettore $\lvert\psi\rangle$, la probabilità di misurare un risultato è $\lvert\langle\phi\lvert\psi\rangle\rvert^2$, e gli stati ortogonali $\langle\phi\lvert\psi\rangle=0$ rappresentano eventi mutuamente esclusivi. Tutta la struttura probabilistica della meccanica quantistica è encoded nel prodotto scalare dello spazio di Hilbert.

**Apprendimento automatico: kernel methods.** Il metodo dei kernel (Support Vector Machines, regressione kernel) sfrutta il fatto che l'algoritmo dipende dai dati solo tramite prodotti scalari $\langle\mathbf{x}_i, \mathbf{x}_j\rangle$. Sostituendo con un kernel $K(\mathbf{x}_i,\mathbf{x}_j)$ — un prodotto scalare in uno spazio ad alta dimensionalità — si riesce a separare dati non linearmente separabili senza mai calcolare esplicitamente le coordinate in quello spazio (il "trucco del kernel"). Questo è possibile grazie alle proprietà formali del prodotto scalare (Mercer's theorem).

## 10. Riepilogo

| Concetto | Definizione / Formula |
| --- | --- |
| Prodotto scalare | $\langle\mathbf{u},\mathbf{v}\rangle$: simmetrico, bilineare, positivo definito |
| Standard in $\mathbb{R}^n$ | $\langle\mathbf{u},\mathbf{v}\rangle = \mathbf{u}^T\mathbf{v} = \sum u_i v_i$ |
| In $L^2([a,b])$ | $\langle f,g\rangle = \int_a^b f(x)g(x)\,dx$ |
| Norma indotta | $\lVert\mathbf{v}\rVert = \sqrt{\langle\mathbf{v},\mathbf{v}\rangle}$ |
| Angolo | $\cos\theta = \langle\mathbf{u},\mathbf{v}\rangle / (\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert)$ |
| Ortogonalità | $\mathbf{u}\perp\mathbf{v} \iff \langle\mathbf{u},\mathbf{v}\rangle = 0$ |
| Cauchy-Schwarz | $\lvert\langle\mathbf{u},\mathbf{v}\rangle\rvert \leq \lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert$ |
| Disuguaglianza triangolare | $\lVert\mathbf{u}+\mathbf{v}\rVert \leq \lVert\mathbf{u}\rVert + \lVert\mathbf{v}\rVert$ |
| Teorema di Pitagora | $\mathbf{u}\perp\mathbf{v} \Rightarrow \lVert\mathbf{u}+\mathbf{v}\rVert^2 = \lVert\mathbf{u}\rVert^2 + \lVert\mathbf{v}\rVert^2$ |

## 11. Esercizi

<details>
<summary>Esercizio 1 — Ortogonalità in $\mathbb{R}^4$</summary>

Verificare se $\mathbf{u}=(1,2,-1,0)$ e $\mathbf{v}=(2,-1,0,3)$ sono ortogonali e calcolare le loro norme.

**Soluzione:**

$\langle\mathbf{u},\mathbf{v}\rangle = 1\cdot2 + 2\cdot(-1) + (-1)\cdot0 + 0\cdot3 = 2-2+0+0 = 0$. Ortogonali!

$\lVert\mathbf{u}\rVert = \sqrt{1+4+1+0} = \sqrt{6}$.

$\lVert\mathbf{v}\rVert = \sqrt{4+1+0+9} = \sqrt{14}$.

Verifica Pitagora: $\lVert\mathbf{u}+\mathbf{v}\rVert^2 = \lVert(3,1,-1,3)\rVert^2 = 9+1+1+9 = 20 = 6+14 = \lVert\mathbf{u}\rVert^2+\lVert\mathbf{v}\rVert^2$ ✓.

</details>

<details>
<summary>Esercizio 2 — Norma $L^2$</summary>

Calcolare $\lVert f\rVert$ per $f(x) = x$ su $[0,1]$.

**Soluzione:**

$$\lVert f\rVert^2 = \int_0^1 x^2\,dx = \left[\frac{x^3}{3}\right]_0^1 = \frac{1}{3}$$

$\lVert f\rVert = 1/\sqrt{3}$.

</details>

<details>
<summary>Esercizio 3 — Cauchy-Schwarz</summary>

Usando Cauchy-Schwarz, dimostrare che per $a_1,\ldots,a_n > 0$:

$$\left(\sum_{i=1}^n a_i\right)^2 \leq n\sum_{i=1}^n a_i^2$$

**Soluzione:**

Applicare Cauchy-Schwarz con $\mathbf{u}=(a_1,\ldots,a_n)$ e $\mathbf{v}=(1,1,\ldots,1)$:

$$\lvert\langle\mathbf{u},\mathbf{v}\rangle\rvert^2 \leq \lVert\mathbf{u}\rVert^2\lVert\mathbf{v}\rVert^2 \implies \left(\sum a_i\right)^2 \leq \left(\sum a_i^2\right)\cdot n \quad \square$$

</details>

<details>
<summary>Esercizio 4 — Angolo tra vettori</summary>

Calcolare l'angolo $\theta$ tra $\mathbf{u}=(1,1,0)$ e $\mathbf{v}=(0,1,1)$.

**Soluzione:**

$\langle\mathbf{u},\mathbf{v}\rangle = 0+1+0 = 1$.

$\lVert\mathbf{u}\rVert = \sqrt{2}$, $\lVert\mathbf{v}\rVert = \sqrt{2}$.

$\cos\theta = 1/(\sqrt{2}\cdot\sqrt{2}) = 1/2$.

$\theta = 60°$.

</details>

<details>
<summary>Esercizio 5 — Ortogonalità in $L^2$</summary>

Verificare che $f(x)=\sin x$ e $g(x)=\cos x$ sono ortogonali su $[0,2\pi]$.

**Soluzione:**

$$\langle\sin,\cos\rangle = \int_0^{2\pi}\sin x\cos x\,dx = \frac{1}{2}\int_0^{2\pi}\sin 2x\,dx = \left[-\frac{\cos 2x}{4}\right]_0^{2\pi} = \frac{-1+1}{4} = 0$$

Ortogonali. ✓

</details>

<details>
<summary>Esercizio 6 — Identificare il prodotto scalare</summary>

Verificare che $\langle f,g\rangle = \int_0^1 f(x)g(x)\,dx$ soddisfa i tre assiomi.

**Soluzione:**

1. **Simmetria:** $\int_0^1 f(x)g(x)\,dx = \int_0^1 g(x)f(x)\,dx$ per commutatività del prodotto. ✓

2. **Linearità:** $\langle cf+h,g\rangle = \int_0^1(cf+h)g\,dx = c\int_0^1 fg\,dx + \int_0^1 hg\,dx = c\langle f,g\rangle+\langle h,g\rangle$. ✓

3. **Positività definita:** $\langle f,f\rangle = \int_0^1[f(x)]^2\,dx \geq 0$. È zero solo se $f(x)=0$ quasi ovunque. ✓

</details>

<details>
<summary>Esercizio 7 — Disuguaglianza triangolare</summary>

Verificare la disuguaglianza triangolare per $\mathbf{u}=(3,4)$ e $\mathbf{v}=(-4,3)$.

**Soluzione:**

$\lVert\mathbf{u}\rVert = 5$, $\lVert\mathbf{v}\rVert = 5$.

$\mathbf{u}+\mathbf{v} = (-1,7)$, $\lVert\mathbf{u}+\mathbf{v}\rVert = \sqrt{1+49} = \sqrt{50} \approx 7.07$.

$\lVert\mathbf{u}\rVert + \lVert\mathbf{v}\rVert = 10 \geq 7.07$ ✓.

Nota: $\langle\mathbf{u},\mathbf{v}\rangle = -12+12 = 0$: i vettori sono ortogonali, e $\lVert\mathbf{u}+\mathbf{v}\rVert^2 = \lVert\mathbf{u}\rVert^2+\lVert\mathbf{v}\rVert^2 = 50$.

</details>

<details>
<summary>Esercizio 8 — Prodotto scalare in $\mathbb{R}^n$ come matrice</summary>

Mostrare che per vettori colonna $\mathbf{u},\mathbf{v}\in\mathbb{R}^n$, il prodotto scalare standard è $\mathbf{u}^T\mathbf{v}$ (numero) e il prodotto esterno è $\mathbf{u}\mathbf{v}^T$ (matrice $n\times n$).

**Soluzione:**

$\mathbf{u}^T\mathbf{v}$: vettore riga $(1\times n)$ per vettore colonna $(n\times 1)$ = scalare $\sum u_iv_i$. ✓

$\mathbf{u}\mathbf{v}^T$: vettore colonna $(n\times 1)$ per vettore riga $(1\times n)$ = matrice $n\times n$ con elemento $(i,j)$ uguale a $u_iv_j$. ✓

Esempio: $\mathbf{u}=(1,2)^T$, $\mathbf{v}=(3,4)^T$: $\mathbf{u}^T\mathbf{v} = 3+8=11$, $\mathbf{u}\mathbf{v}^T = \begin{pmatrix}3&4\\6&8\end{pmatrix}$.

</details>

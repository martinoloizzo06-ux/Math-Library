---
id: analisi-07-regole-derivazione
subject: analisi
topic_it: Calcolo differenziale (una variabile)
topic_en: Differential calculus (one variable)
title_it: Regole di derivazione
title_en: Rules of differentiation
level: blue
order: 7
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 3 — Regole di derivazione"
---

## 1. Intuizione e motivazione

Immagina di guidare un'auto su un percorso complicato: curve, salite, discese. La tua velocità in ogni istante è la derivata della posizione. Se il percorso fosse $f(x) = x^3 - 3x + \sin(x)$, calcolarne la derivata partendo dalla definizione limite sarebbe un'impresa lunga e soggetta a errori. Esiste però un modo molto più rapido: le **regole di derivazione**.

Queste regole sono il "kit di attrezzi" del calcolo differenziale. Proprio come in aritmetica non ricalcoliamo ogni volta che $7 \times 8 = 56$, in analisi non rideduciamo ogni volta la derivata di $\sin(x)$ dalla definizione: la conosciamo, e la usiamo. Con linearità, regola del prodotto, del quoziente e della catena, siamo in grado di derivare qualsiasi funzione elementare in modo meccanico e affidabile.

Il punto cruciale è che queste regole **non sono trucchi arbitrari**: ognuna si dimostra rigorosamente dalla definizione di derivata come limite del rapporto incrementale. Capire le dimostrazioni significa capire perché le regole funzionano — e ricordarle in modo permanente.

---

## 2. Prerequisiti

- Definizione di derivata: $f'(x) = \lim_{h \to 0} \dfrac{f(x+h) - f(x)}{h}$
- Continuità e derivabilità di una funzione
- Proprietà dei limiti: somma, prodotto, quoziente
- Funzioni elementari: $x^n$, $e^x$, $\ln x$, $\sin x$, $\cos x$, $\tan x$
- Composizione di funzioni $f \circ g$

---

## 3. Teoria passo-passo

### Derivate fondamentali

Le seguenti derivate si dimostrano direttamente dalla definizione e costituiscono la base di tutte le altre:

$$\frac{d}{dx}[c] = 0 \qquad (c \text{ costante})$$

$$\frac{d}{dx}[x^n] = n\,x^{n-1} \qquad (n \in \mathbb{R})$$

$$\frac{d}{dx}[e^x] = e^x$$

$$\frac{d}{dx}[\ln x] = \frac{1}{x} \qquad (x > 0)$$

$$\frac{d}{dx}[\sin x] = \cos x \qquad \frac{d}{dx}[\cos x] = -\sin x$$

$$\frac{d}{dx}[\tan x] = \frac{1}{\cos^2 x} = \sec^2 x$$

$$\frac{d}{dx}[\arcsin x] = \frac{1}{\sqrt{1-x^2}} \qquad \frac{d}{dx}[\arctan x] = \frac{1}{1+x^2}$$

### Regola di linearità

Se $f$ e $g$ sono derivabili e $\alpha, \beta \in \mathbb{R}$, allora:

$$(\alpha f + \beta g)' = \alpha f' + \beta g'$$

Questa regola combina due proprietà: **additività** (la derivata di una somma è la somma delle derivate) e **omogeneità** (le costanti escono dalla derivata).

### Regola del prodotto (Leibniz)

Se $f$ e $g$ sono derivabili, allora:

$$(f \cdot g)' = f' \cdot g + f \cdot g'$$

**Mnemonica:** "derivata del primo per secondo, più primo per derivata del secondo."

### Regola del quoziente

Se $f$ e $g$ sono derivabili e $g(x) \neq 0$:

$$\left(\frac{f}{g}\right)' = \frac{f' \cdot g - f \cdot g'}{g^2}$$

**Mnemonica:** "derivata del numeratore per denominatore, meno numeratore per derivata del denominatore, tutto fratto il denominatore al quadrato."

### Regola della catena (chain rule)

Se $g$ è derivabile in $x$ e $f$ è derivabile in $g(x)$, allora la composizione $h = f \circ g$ è derivabile e:

$$h'(x) = f'(g(x)) \cdot g'(x)$$

In notazione di Leibniz, se $y = f(u)$ e $u = g(x)$:

$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$

Questa regola è la più potente e anche la più usata: quasi ogni funzione complicata è una composizione di funzioni semplici.

### Derivate di ordine superiore

La derivata di una derivata si chiama **derivata seconda** e si indica $f''(x)$ oppure $\dfrac{d^2f}{dx^2}$. In generale, la derivata di ordine $n$ è:

$$f^{(n)}(x) = \frac{d^n f}{dx^n}$$

Esempi fondamentali:
- Se $f(x) = e^x$, allora $f^{(n)}(x) = e^x$ per ogni $n$
- Se $f(x) = x^m$, allora $f^{(n)}(x) = m(m-1)\cdots(m-n+1)\,x^{m-n}$ per $n \leq m$, e $f^{(n)}(x) = 0$ per $n > m$

La derivata seconda è fondamentale per lo studio della **concavità** di una funzione.

### Derivazione implicita

Quando una funzione è definita implicitamente da un'equazione $F(x, y) = 0$, si deriva entrambi i membri rispetto a $x$ trattando $y$ come funzione di $x$, applicando la regola della catena:

$$\frac{d}{dx}[F(x, y)] = 0 \implies \frac{\partial F}{\partial x} + \frac{\partial F}{\partial y} \cdot y' = 0 \implies y' = -\frac{\partial F / \partial x}{\partial F / \partial y}$$

---

## 4. Derivazioni commentate

### Dimostrazione della regola del prodotto

Vogliamo dimostrare che $(fg)' = f'g + fg'$. Partiamo dalla definizione:

$$\frac{d}{dx}[f(x)g(x)] = \lim_{h \to 0} \frac{f(x+h)g(x+h) - f(x)g(x)}{h}$$

**Passo 1:** aggiungiamo e sottraiamo $f(x)g(x+h)$ al numeratore (trucco algebrico classico):

$$= \lim_{h \to 0} \frac{f(x+h)g(x+h) - f(x)g(x+h) + f(x)g(x+h) - f(x)g(x)}{h}$$

**Passo 2:** raccogliamo per gruppi:

$$= \lim_{h \to 0} \left[\frac{f(x+h) - f(x)}{h} \cdot g(x+h) + f(x) \cdot \frac{g(x+h) - g(x)}{h}\right]$$

**Passo 3:** per $h \to 0$, le due frazioni tendono a $f'(x)$ e $g'(x)$; $g(x+h) \to g(x)$ per continuità di $g$:

$$= f'(x) \cdot g(x) + f(x) \cdot g'(x) \qquad \square$$

### Dimostrazione della regola della catena

Sia $h(x) = f(g(x))$. Per la definizione di derivata:

$$h'(x) = \lim_{k \to 0} \frac{f(g(x+k)) - f(g(x))}{k}$$

**Passo 1:** poniamo $u = g(x)$ e $\Delta u = g(x+k) - g(x)$. Se $\Delta u \neq 0$, moltiplichiamo e dividiamo per $\Delta u$:

$$h'(x) = \lim_{k \to 0} \frac{f(u + \Delta u) - f(u)}{\Delta u} \cdot \frac{\Delta u}{k}$$

**Passo 2:** per $k \to 0$: $\Delta u \to 0$ (per continuità di $g$), e le due frazioni tendono rispettivamente a $f'(u) = f'(g(x))$ e $g'(x)$:

$$h'(x) = f'(g(x)) \cdot g'(x) \qquad \square$$

---

## 5. Esempi graduati

**Esempio 1 — Derivata di un polinomio**

$f(x) = 3x^4 - 7x^2 + 2x - 5$

Per linearità e regola della potenza:

$$f'(x) = 12x^3 - 14x + 2$$

---

**Esempio 2 — Regola del prodotto**

$f(x) = x^2 \sin x$

$$f'(x) = (x^2)' \sin x + x^2 (\sin x)' = 2x \sin x + x^2 \cos x$$

---

**Esempio 3 — Regola del quoziente**

$f(x) = \dfrac{x^2 + 1}{x - 1}$

$$f'(x) = \frac{2x(x-1) - (x^2+1) \cdot 1}{(x-1)^2} = \frac{2x^2 - 2x - x^2 - 1}{(x-1)^2} = \frac{x^2 - 2x - 1}{(x-1)^2}$$

---

**Esempio 4 — Regola della catena (semplice)**

$f(x) = \sin(3x^2)$

La funzione esterna è $\sin$, quella interna è $u = 3x^2$:

$$f'(x) = \cos(3x^2) \cdot 6x = 6x\cos(3x^2)$$

---

**Esempio 5 — Catena doppia**

$f(x) = e^{\sin(x^2)}$

Tre strati: $e^u$, $\sin v$, $x^2$. Applichiamo la catena dal più esterno:

$$f'(x) = e^{\sin(x^2)} \cdot \cos(x^2) \cdot 2x = 2x\cos(x^2)\,e^{\sin(x^2)}$$

---

**Esempio 6 — Prodotto di tre fattori**

$f(x) = x \cdot e^x \cdot \cos x$

Applichiamo la regola del prodotto due volte. Prima deriviamo $x \cdot e^x$:

$$(x e^x)' = e^x + x e^x = e^x(1+x)$$

Poi applichiamo la regola del prodotto tra $xe^x$ e $\cos x$:

$$f'(x) = e^x(1+x)\cos x + xe^x(-\sin x) = e^x[(1+x)\cos x - x\sin x]$$

---

**Esempio 7 — Derivazione implicita**

Sia $x^2 + y^2 = 25$ (cerchio di raggio 5). Deriviamo rispetto a $x$:

$$2x + 2y\,y' = 0 \implies y' = -\frac{x}{y}$$

Nel punto $(3, 4)$: $y' = -3/4$. La tangente al cerchio in $(3,4)$ ha pendenza $-3/4$.

---

**Esempio 8 — Derivata seconda**

$f(x) = x^3 - 3x$. Prima derivata: $f'(x) = 3x^2 - 3$. Seconda derivata:

$$f''(x) = 6x$$

$f''(0) = 0$ (flesso), $f''(x) > 0$ per $x > 0$ (concavità verso l'alto), $f''(x) < 0$ per $x < 0$ (concavità verso il basso).

---

## 6. Grafico

```plot
{
  "title": "f(x) = x³ − 3x e la sua derivata f'(x) = 3x² − 3",
  "fn": "x*x*x - 3*x",
  "fn2": "3*x*x - 3",
  "domain": [-3, 3],
  "yDomain": [-5, 5],
  "label1": "f(x) = x³ − 3x",
  "label2": "f'(x) = 3x² − 3"
}
```

Osserva: dove $f'(x) = 0$ (cioè $x = \pm 1$), la funzione $f$ ha un massimo o un minimo locale. Dove $f'(x) > 0$, $f$ è crescente; dove $f'(x) < 0$, $f$ è decrescente.

---

## 7. Elemento interattivo

```slider
{
  "title": "Derivata di f(x) = a·sin(x) al variare di a",
  "fn": "a*Math.sin(x)",
  "fn2": "a*Math.cos(x)",
  "domain": [-6.28, 6.28],
  "yDomain": [-4, 4],
  "pname": "a",
  "pmin": 0.5,
  "pmax": 3,
  "pdefault": 1,
  "pstep": 0.1,
  "plabel": "Ampiezza a",
  "label1": "f(x) = a·sin(x)",
  "label2": "f'(x) = a·cos(x)"
}
```

Modifica l'ampiezza $a$: nota come la derivata abbia sempre la stessa forma (coseno) ma l'ampiezza scala di conseguenza. La regola è $(a\sin x)' = a\cos x$ — la costante $a$ esce invariata dalla derivazione.

---

## 8. Errori comuni

**Errore 1 — Applicare la regola della potenza a funzioni composte**

❌ Errato: $\dfrac{d}{dx}[\sin^2 x] = 2\sin x$

✅ Corretto: applicare la catena — la funzione esterna è $u^2$ con $u = \sin x$:
$$\frac{d}{dx}[\sin^2 x] = 2\sin x \cdot \cos x$$

---

**Errore 2 — Confondere prodotto e catena**

❌ Errato: $\dfrac{d}{dx}[\sin(x) \cdot \cos(x)] = \cos(x) \cdot (-\sin(x)) = -\sin(x)\cos(x)$

(Si è "derivato come se fosse una catena")

✅ Corretto: regola del prodotto:
$$\frac{d}{dx}[\sin x \cos x] = \cos x \cdot \cos x + \sin x \cdot (-\sin x) = \cos^2 x - \sin^2 x$$

---

**Errore 3 — Derivata del quoziente con segno sbagliato**

❌ Errato: $\left(\dfrac{f}{g}\right)' = \dfrac{f'g' - fg''}{g^2}$

✅ Corretto: $\left(\dfrac{f}{g}\right)' = \dfrac{f'g - fg'}{g^2}$

Il numeratore è $f'g - fg'$, con il segno meno sul secondo termine.

---

**Errore 4 — Dimenticare la derivata interna nella catena**

❌ Errato: $\dfrac{d}{dx}[e^{3x}] = e^{3x}$

✅ Corretto: la funzione interna è $u = 3x$, quindi $u' = 3$:
$$\frac{d}{dx}[e^{3x}] = e^{3x} \cdot 3 = 3e^{3x}$$

---

**Errore 5 — Derivata di $\ln(f(x))$ senza applicare la catena**

❌ Errato: $\dfrac{d}{dx}[\ln(x^2+1)] = \dfrac{1}{x^2+1}$

✅ Corretto: derivata di $\ln u$ è $1/u$, moltiplicata per la derivata interna $2x$:
$$\frac{d}{dx}[\ln(x^2+1)] = \frac{2x}{x^2+1}$$

---

**Errore 6 — Derivata di $x^n$ con $n$ negativo o frazionario**

La regola $\dfrac{d}{dx}[x^n] = nx^{n-1}$ vale per **tutti** i reali $n$, non solo per gli interi positivi.

Ad esempio: $\dfrac{d}{dx}\left[\dfrac{1}{x^2}\right] = \dfrac{d}{dx}[x^{-2}] = -2x^{-3} = -\dfrac{2}{x^3}$.

---

## 9. Applicazioni reali

**Fisica: cinematica e dinamica.** La posizione di un oggetto è $s(t)$. La velocità istantanea è $v(t) = s'(t)$, l'accelerazione è $a(t) = v'(t) = s''(t)$. Le regole di derivazione permettono di passare da leggi di moto anche complesse (traiettorie paraboliche, moto armonico) a velocità e accelerazioni in modo diretto. Nella meccanica quantistica, i commutatori di operatori si calcolano usando la regola del prodotto.

**Economia: elasticità e ottimizzazione.** Il profitto di un'impresa è $P(q) = R(q) - C(q)$, dove $R$ è il ricavo e $C$ il costo. Il massimo profitto si trova imponendo $P'(q) = 0$, che per linearità diventa $R'(q) = C'(q)$: ricavo marginale uguale a costo marginale. La regola del quoziente consente di calcolare l'elasticità della domanda $\varepsilon = \frac{dQ}{dP} \cdot \frac{P}{Q}$.

**Ingegneria: sistemi di controllo.** La risposta di un circuito RC a un ingresso variabile richiede di derivare funzioni del tipo $e^{-t/\tau}\sin(\omega t)$, cioè prodotti di esponenziali e trigonometriche. La regola del prodotto e la catena sono strumenti indispensabili per calcolare la risposta in frequenza e verificare la stabilità del sistema.

---

## 10. Riepilogo tabellare

| Funzione | Derivata |
| --- | --- |
| $c$ (costante) | $0$ |
| $x^n$ | $n\,x^{n-1}$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x \ln a$ |
| $\ln x$ | $1/x$ |
| $\log_a x$ | $1/(x \ln a)$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $1/\cos^2 x$ |
| $\arcsin x$ | $1/\sqrt{1-x^2}$ |
| $\arccos x$ | $-1/\sqrt{1-x^2}$ |
| $\arctan x$ | $1/(1+x^2)$ |

| Regola | Formula |
| --- | --- |
| Linearità | $(\alpha f + \beta g)' = \alpha f' + \beta g'$ |
| Prodotto | $(fg)' = f'g + fg'$ |
| Quoziente | $(f/g)' = (f'g - fg')/g^2$ |
| Catena | $(f \circ g)' = f'(g) \cdot g'$ |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Derivata di un polinomio con termine costante</summary>

**Testo:** Calcola $f'(x)$ e $f''(x)$ per $f(x) = 5x^4 - 3x^3 + 2x - 7$.

**Soluzione:**

$$f'(x) = 20x^3 - 9x^2 + 2$$

$$f''(x) = 60x^2 - 18x$$

</details>

<details>
<summary>Esercizio 2 — Regola del prodotto con esponenziale</summary>

**Testo:** Calcola $f'(x)$ per $f(x) = x^3 e^x$.

**Soluzione:**

$$f'(x) = (x^3)' e^x + x^3 (e^x)' = 3x^2 e^x + x^3 e^x = x^2 e^x(3 + x)$$

</details>

<details>
<summary>Esercizio 3 — Regola del quoziente</summary>

**Testo:** Calcola $f'(x)$ per $f(x) = \dfrac{\sin x}{x}$ (con $x \neq 0$).

**Soluzione:**

$$f'(x) = \frac{\cos x \cdot x - \sin x \cdot 1}{x^2} = \frac{x\cos x - \sin x}{x^2}$$

</details>

<details>
<summary>Esercizio 4 — Regola della catena tripla</summary>

**Testo:** Calcola $f'(x)$ per $f(x) = \ln(\cos(x^2))$.

**Soluzione:**

Tre strati: $\ln u$, $\cos v$, $x^2$. Applicando la catena dall'esterno:

$$f'(x) = \frac{1}{\cos(x^2)} \cdot (-\sin(x^2)) \cdot 2x = \frac{-2x\sin(x^2)}{\cos(x^2)} = -2x\tan(x^2)$$

</details>

<details>
<summary>Esercizio 5 — Derivazione implicita</summary>

**Testo:** Trova $y'$ per la curva $x^3 + y^3 = 6xy$ (folium di Descartes).

**Soluzione:**

Derivando rispetto a $x$ entrambi i membri:

$$3x^2 + 3y^2\,y' = 6y + 6x\,y'$$

Raccogliendo $y'$:

$$y'(3y^2 - 6x) = 6y - 3x^2 \implies y' = \frac{6y - 3x^2}{3y^2 - 6x} = \frac{2y - x^2}{y^2 - 2x}$$

</details>

<details>
<summary>Esercizio 6 — Funzione con prodotto e catena</summary>

**Testo:** Calcola $f'(x)$ per $f(x) = x^2 \ln(x^2 + 1)$.

**Soluzione:**

Regola del prodotto con $u = x^2$ e $v = \ln(x^2+1)$:

$$u' = 2x, \qquad v' = \frac{2x}{x^2+1}$$

$$f'(x) = 2x\ln(x^2+1) + x^2 \cdot \frac{2x}{x^2+1} = 2x\ln(x^2+1) + \frac{2x^3}{x^2+1}$$

</details>

<details>
<summary>Esercizio 7 — Derivata di una potenza con esponente irrazionale</summary>

**Testo:** Calcola $f'(x)$ per $f(x) = x^{\sqrt{2}}$.

**Soluzione:**

La regola della potenza vale per ogni esponente reale:

$$f'(x) = \sqrt{2}\,x^{\sqrt{2}-1}$$

</details>

<details>
<summary>Esercizio 8 — Tangente alla curva</summary>

**Testo:** Trova l'equazione della retta tangente a $f(x) = e^x \sin x$ nel punto $x = 0$.

**Soluzione:**

$f(0) = e^0 \sin 0 = 0$. Calcolo di $f'(x)$:

$$f'(x) = e^x \sin x + e^x \cos x = e^x(\sin x + \cos x)$$

$f'(0) = e^0(0 + 1) = 1$.

La tangente nel punto $(0, 0)$ con pendenza $1$ è: $y = x$.

</details>

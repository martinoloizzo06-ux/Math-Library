---
id: analisi-13-tecniche-integrazione
subject: analisi
topic_it: Calcolo integrale (una variabile)
topic_en: Integral calculus (one variable)
title_it: Tecniche di integrazione (frazioni parziali, sostituzione trigonometrica)
title_en: Integration techniques (partial fractions, trigonometric substitution)
level: blue
order: 13
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 7 — Tecniche di integrazione"
stato: da-rielaborare
---

## 1. Intuizione — Smontare per integrare

Non tutte le funzioni si integrano con le formule base. Alcune richiedono una preparazione: bisogna **trasformare** l'espressione in qualcosa di più semplice prima di integrare.

La tecnica delle **frazioni parziali** funziona come smontare un puzzle: una frazione razionale complicata si decompone in pezzi semplici (del tipo $\frac{A}{x-a}$), ognuno integrabile facilmente. È come scomporre $\frac{5}{6}$ in $\frac{1}{2} + \frac{1}{3}$ — più facile da trattare.

La **sostituzione trigonometrica** sfrutta le identità fondamentali del seno e del coseno per eliminare radicali ostici. Se vedi $\sqrt{a^2 - x^2}$, pensi a un triangolo rettangolo: $x = a\sin\theta$ trasforma la radice in $a\cos\theta$, pulita e integrabile.

Entrambe le tecniche ampliano enormemente il repertorio di funzioni che puoi integrare esattamente.

---

## 2. Prerequisiti

- Integrale indefinito, sostituzione semplice, integrazione per parti
- Divisione tra polinomi (divisione euclidea)
- Scomposizione di polinomi in fattori
- Identità trigonometriche: $\sin^2\theta + \cos^2\theta = 1$, $1+\tan^2\theta = \sec^2\theta$
- Primitiva di $\frac{1}{x}$, $\frac{1}{x^2+a^2}$, $\frac{1}{\sqrt{a^2-x^2}}$

---

## 3. Teoria

### Frazioni parziali — Idea generale

Una **funzione razionale** è un rapporto $\dfrac{p(x)}{q(x)}$ tra due polinomi. La tecnica delle frazioni parziali la decompone in una somma di frazioni più semplici.

**Procedura a 4 passi:**

**Passo 1 — Grado:** se $\deg p \geq \deg q$, esegui la divisione polinomiale:
$$\frac{p(x)}{q(x)} = s(x) + \frac{r(x)}{q(x)}$$
dove $s(x)$ è il quoziente e $r(x)$ il resto (con $\deg r < \deg q$).

**Passo 2 — Fattorizzazione:** scomponi $q(x)$ in fattori lineari e quadratici irriducibili.

**Passo 3 — Forma della decomposizione:**

| Tipo di fattore | Contributo alla decomposizione |
| --- | --- |
| $(x - a)$ semplice | $\dfrac{A}{x-a}$ |
| $(x - a)^k$ ripetuto | $\dfrac{A_1}{x-a} + \dfrac{A_2}{(x-a)^2} + \cdots + \dfrac{A_k}{(x-a)^k}$ |
| $(x^2+bx+c)$ irriducibile | $\dfrac{Ax+B}{x^2+bx+c}$ |
| $(x^2+bx+c)^k$ ripetuto | $\dfrac{A_1 x+B_1}{x^2+bx+c} + \cdots + \dfrac{A_k x+B_k}{(x^2+bx+c)^k}$ |

**Passo 4 — Determinazione dei coefficienti:** moltiplica entrambi i membri per $q(x)$, poi sostituisci valori strategici di $x$ o confronta i coefficienti.

### Integrazione dopo la decomposizione

Le frazioni semplici ottenute si integrano con formule note:

$$\int \frac{A}{x-a}\,dx = A\ln\lvert x-a\rvert + C$$

$$\int \frac{A}{(x-a)^k}\,dx = \frac{A}{(1-k)(x-a)^{k-1}} + C \quad (k \geq 2)$$

$$\int \frac{dx}{x^2+a^2} = \frac{1}{a}\arctan\frac{x}{a} + C$$

$$\int \frac{x\,dx}{x^2+a^2} = \frac{1}{2}\ln(x^2+a^2) + C$$

### Sostituzione trigonometrica

Usata per eliminare radicali del tipo $\sqrt{a^2 - x^2}$, $\sqrt{a^2 + x^2}$, $\sqrt{x^2 - a^2}$.

| Espressione | Sostituzione | Identità | Differenziale |
| --- | --- | --- | --- |
| $\sqrt{a^2 - x^2}$ | $x = a\sin\theta$, $\theta\in[-\pi/2,\pi/2]$ | $\sqrt{a^2-a^2\sin^2\theta}=a\cos\theta$ | $dx = a\cos\theta\,d\theta$ |
| $\sqrt{a^2 + x^2}$ | $x = a\tan\theta$, $\theta\in(-\pi/2,\pi/2)$ | $\sqrt{a^2+a^2\tan^2\theta}=a\sec\theta$ | $dx = a\sec^2\theta\,d\theta$ |
| $\sqrt{x^2 - a^2}$ | $x = a\sec\theta$, $\theta\in[0,\pi/2)$ | $\sqrt{a^2\sec^2\theta-a^2}=a\tan\theta$ | $dx = a\sec\theta\tan\theta\,d\theta$ |

**Ritorno alle variabili originali:** dopo l'integrazione in $\theta$, usa il triangolo rettangolo per esprimere $\sin\theta$, $\cos\theta$, $\tan\theta$ in termini di $x$.

---

## 4. Derivazione — Frazioni parziali con fattori ripetuti

**Problema:** $\displaystyle\int \frac{x^2+2x+3}{(x+1)^3}\,dx$

Il denominatore ha un fattore lineare ripetuto di ordine 3. La decomposizione è:

$$\frac{x^2+2x+3}{(x+1)^3} = \frac{A}{x+1} + \frac{B}{(x+1)^2} + \frac{C}{(x+1)^3}$$

Moltiplichiamo per $(x+1)^3$:

$$x^2 + 2x + 3 = A(x+1)^2 + B(x+1) + C$$

**Valore strategico** $x = -1$: $1 - 2 + 3 = C \Rightarrow C = 2$

**Confronto coefficiente $x^2$:** $1 = A$

**Confronto termine costante:** $3 = A + B + C = 1 + B + 2 \Rightarrow B = 0$

Quindi:
$$\int\left(\frac{1}{x+1} + \frac{2}{(x+1)^3}\right)dx = \ln\lvert x+1\rvert - \frac{1}{(x+1)^2} + C$$

**Verifica (derivando):** $\dfrac{1}{x+1} + \dfrac{2}{(x+1)^3}$. Moltiplicando per $(x+1)^3$: $x^2+2x+1+2 = x^2+2x+3$ ✓

---

## 5. Esempi

**Esempio 1 — Frazioni parziali: fattori lineari semplici**

$$\int \frac{dx}{x^2 - 1} = \int \frac{dx}{(x-1)(x+1)}$$

Decomposizione: $\dfrac{1}{(x-1)(x+1)} = \dfrac{A}{x-1} + \dfrac{B}{x+1}$

Moltiplicando: $1 = A(x+1) + B(x-1)$. Con $x=1$: $A = \frac{1}{2}$. Con $x=-1$: $B = -\frac{1}{2}$.

$$\int\left(\frac{1/2}{x-1} - \frac{1/2}{x+1}\right)dx = \frac{1}{2}\ln\lvert x-1\rvert - \frac{1}{2}\ln\lvert x+1\rvert + C = \frac{1}{2}\ln\left\lvert\frac{x-1}{x+1}\right\rvert + C$$

---

**Esempio 2 — Con divisione polinomiale prima**

$$\int \frac{x^2}{x^2-1}\,dx$$

Poiché il grado è uguale, dividiamo: $\dfrac{x^2}{x^2-1} = 1 + \dfrac{1}{x^2-1}$.

$$\int\left(1 + \frac{1}{(x-1)(x+1)}\right)dx = x + \frac{1}{2}\ln\left\lvert\frac{x-1}{x+1}\right\rvert + C$$

---

**Esempio 3 — Fattore quadratico irriducibile**

$$\int \frac{x+2}{x^2+4}\,dx$$

Il denominatore $x^2+4$ è irriducibile ($\Delta = -16 < 0$). Separiamo:

$$\frac{x+2}{x^2+4} = \frac{x}{x^2+4} + \frac{2}{x^2+4}$$

$$\int\frac{x}{x^2+4}\,dx = \frac{1}{2}\ln(x^2+4) + C_1 \quad \text{(sostituzione: } u=x^2+4\text{)}$$

$$\int\frac{2}{x^2+4}\,dx = 2\cdot\frac{1}{2}\arctan\frac{x}{2} + C_2 = \arctan\frac{x}{2} + C_2$$

Risultato: $\dfrac{1}{2}\ln(x^2+4) + \arctan\dfrac{x}{2} + C$

---

**Esempio 4 — Sostituzione trigonometrica: $\sqrt{a^2 - x^2}$**

$$\int \sqrt{4-x^2}\,dx$$

Poniamo $x = 2\sin\theta$, $dx = 2\cos\theta\,d\theta$, $\sqrt{4-x^2} = 2\cos\theta$:

$$\int 2\cos\theta \cdot 2\cos\theta\,d\theta = 4\int\cos^2\theta\,d\theta = 4\int\frac{1+\cos 2\theta}{2}\,d\theta = 2\theta + \sin 2\theta + C$$

Ritorno: $\theta = \arcsin\frac{x}{2}$, $\sin 2\theta = 2\sin\theta\cos\theta = 2\cdot\frac{x}{2}\cdot\frac{\sqrt{4-x^2}}{2} = \frac{x\sqrt{4-x^2}}{2}$.

$$\int\sqrt{4-x^2}\,dx = 2\arcsin\frac{x}{2} + \frac{x\sqrt{4-x^2}}{2} + C$$

---

**Esempio 5 — Sostituzione trigonometrica: $\sqrt{a^2+x^2}$**

$$\int \frac{dx}{\sqrt{1+x^2}}$$

Poniamo $x = \tan\theta$, $dx = \sec^2\theta\,d\theta$, $\sqrt{1+x^2} = \sec\theta$:

$$\int \frac{\sec^2\theta\,d\theta}{\sec\theta} = \int\sec\theta\,d\theta = \ln\lvert\sec\theta + \tan\theta\rvert + C$$

Ritorno: $\tan\theta = x$, $\sec\theta = \sqrt{1+x^2}$:

$$\int\frac{dx}{\sqrt{1+x^2}} = \ln\lvert x + \sqrt{1+x^2}\rvert + C = \text{arcsinh}(x) + C$$

---

**Esempio 6 — Completare il quadrato prima della sostituzione trig**

$$\int \frac{dx}{\sqrt{6x - x^2}}$$

Completiamo il quadrato: $6x - x^2 = -(x^2-6x) = -(x^2-6x+9-9) = 9-(x-3)^2$.

Poniamo $u = x-3$, $du = dx$:

$$\int\frac{du}{\sqrt{9-u^2}} = \arcsin\frac{u}{3} + C = \arcsin\frac{x-3}{3} + C$$

---

**Esempio 7 — Frazioni parziali con fattori misti**

$$\int \frac{3x+1}{(x-1)(x^2+1)}\,dx$$

Decomposizione: $\dfrac{3x+1}{(x-1)(x^2+1)} = \dfrac{A}{x-1} + \dfrac{Bx+D}{x^2+1}$

Moltiplicando per $(x-1)(x^2+1)$: $3x+1 = A(x^2+1) + (Bx+D)(x-1)$

Con $x=1$: $4 = 2A \Rightarrow A = 2$. Espandendo e confrontando i coefficienti:
- $x^2$: $0 = A + B \Rightarrow B = -2$
- Costante: $1 = A - D \Rightarrow D = 1$

$$\int\left(\frac{2}{x-1} + \frac{-2x+1}{x^2+1}\right)dx = 2\ln\lvert x-1\rvert - \ln(x^2+1) + \arctan x + C$$

---

## 6. Grafico

Visualizzazione di $\dfrac{1}{x^2-1}$ e della sua scomposizione in frazioni parziali: $\dfrac{1/2}{x-1} - \dfrac{1/2}{x+1}$.

```plot
{"title":"f(x) = 1/(x²-1) vicino all'origine","fn":"1/(x*x - 1)","fn2":"0.5/(x-1) - 0.5/(x+1)","domain":[-0.9,0.9],"yDomain":[-5,5],"label1":"1/(x²-1)","label2":"frazioni parziali"}
```

Le due curve sono identiche — la decomposizione è esatta.

---

## 7. Slider — Sostituzione trigonometrica

Osserva come al variare di $a$ cambia l'integrale $\int_0^a \sqrt{1-x^2}\,dx = \frac{1}{2}\arcsin(a) + \frac{a\sqrt{1-a^2}}{2}$ (un settore di cerchio).

```slider
{"title":"Settore del cerchio unitario: ∫₀ᵃ √(1-x²) dx","fn":"Math.sqrt(Math.max(0, 1 - x*x))","domain":[-1.2,1.2],"yDomain":[-0.2,1.4],"pname":"a","pmin":0,"pmax":1,"pdefault":0.5,"pstep":0.05,"plabel":"a","label1":"√(1-x²)"}
```

L'area sotto la curva da 0 ad $a$ è esattamente l'area del settore circolare — l'integrale "calcola" il settore.

---

## 8. Errori comuni

**Errore 1 — Non eseguire la divisione quando il grado è uguale o maggiore**

- Sbagliato: decomporre $\dfrac{x^2}{x^2-1}$ direttamente in frazioni parziali
- Corretto: prima dividere: $\dfrac{x^2}{x^2-1} = 1 + \dfrac{1}{x^2-1}$, poi decomporre il resto

---

**Errore 2 — Dimenticare un fattore nella decomposizione per fattori ripetuti**

- Sbagliato: $\dfrac{p(x)}{(x-1)^2} = \dfrac{A}{(x-1)^2}$ (un solo termine)
- Corretto: $\dfrac{p(x)}{(x-1)^2} = \dfrac{A}{x-1} + \dfrac{B}{(x-1)^2}$ (due termini)

Per un fattore ripetuto di ordine $k$ occorrono esattamente $k$ termini.

---

**Errore 3 — Cancellare fattori comuni senza attenzione al dominio**

- Sbagliato: $\dfrac{(x+1)(x-2)}{(x+1)(x+3)} = \dfrac{x-2}{x+3}$ (valido per ogni $x$)
- Corretto: la semplificazione vale solo per $x \neq -1$. La funzione originale non è definita in $x=-1$.

---

**Errore 4 — Sostituzione trigonometrica: dimenticare il dominio di $\theta$**

- Sbagliato: scegliere $\theta$ senza restrizioni
- Corretto: per $x = a\sin\theta$: $\theta \in [-\pi/2, \pi/2]$ per garantire $\cos\theta > 0$ e la correttezza di $\sqrt{a^2-x^2} = a\cos\theta$ (senza valore assoluto)

---

**Errore 5 — Non tornare alla variabile originale dopo la sostituzione trig**

- Sbagliato: lasciare il risultato in $\theta$
- Corretto: usare il triangolo rettangolo (o le relazioni inverse) per esprimere tutto in $x$

---

**Errore 6 — Segno sbagliato nella sostituzione $x = a\sec\theta$**

Per $\sqrt{x^2 - a^2}$ con $x = a\sec\theta$: $\sqrt{x^2-a^2} = a\lvert\tan\theta\rvert$.

Con $\theta \in [0, \pi/2)$: $\tan\theta \geq 0$, quindi $\lvert\tan\theta\rvert = \tan\theta$. Ma se $x < 0$, occorre $\theta \in (\pi/2, \pi]$ e il segno va gestito con cura.

---

**Errore 7 — Forma sbagliata per fattore quadratico irriducibile**

- Sbagliato: $\dfrac{p(x)}{x^2+1} = \dfrac{A}{x^2+1}$ (numeratore costante)
- Corretto: $\dfrac{p(x)}{x^2+1} = \dfrac{Ax+B}{x^2+1}$ (numeratore lineare, grado $< 2$)

---

## 9. Applicazioni reali

**Ingegneria elettrica — Circuiti RC.** L'analisi in frequenza di circuiti usa funzioni di trasferimento razionali $H(s) = \frac{N(s)}{D(s)}$. La scomposizione in frazioni parziali (nel dominio di Laplace) permette di ricavare la risposta al gradino o all'impulso come somma di esponenziali. Ogni polo della funzione di trasferimento corrisponde a un termine della decomposizione.

**Meccanica celeste — Orbite.** Le equazioni del moto dei pianeti coinvolgono integrali con radicali del tipo $\sqrt{a^2 - x^2}$ (per orbite ellittiche) o $\sqrt{x^2 - a^2}$ (per iperbole). La sostituzione trigonometrica (o la sostituzione con funzioni iperboliche) è lo strumento standard per calcolarli. È il meccanismo che porta all'equazione dell'anomalia eccentrica di Keplero.

**Statistica — Distribuzione di Cauchy.** La densità di Cauchy è $f(x) = \frac{1}{\pi(1+x^2)}$. Per calcolare probabilità su intervalli finiti si integra questa funzione, ottenendo $\arctan$. Le frazioni parziali compaiono quando si calcola la distribuzione di rapporti di variabili normali con diversi parametri.

---

## 10. Riepilogo

| Tecnica | Quando usarla | Formula chiave |
| --- | --- | --- |
| Frazioni parziali | Integranda razionale $\frac{p(x)}{q(x)}$ | Decomposizione in $\frac{A}{x-a}$, $\frac{Ax+B}{x^2+c}$, ... |
| Divisione euclidea | $\deg p \geq \deg q$ | $\frac{p}{q} = s + \frac{r}{q}$ con $\deg r < \deg q$ |
| Sost. trig ($\sqrt{a^2-x^2}$) | Radice con $a^2-x^2$ | $x = a\sin\theta$ |
| Sost. trig ($\sqrt{a^2+x^2}$) | Radice con $a^2+x^2$ | $x = a\tan\theta$ |
| Sost. trig ($\sqrt{x^2-a^2}$) | Radice con $x^2-a^2$ | $x = a\sec\theta$ |
| Completamento quadrato | Denominatore $ax^2+bx+c$ | $a(x+h)^2 + k$ |

---

## 11. Esercizi

<details>
<summary>Esercizio 1 — Frazioni parziali: fattori lineari</summary>

Calcolare $\displaystyle\int\frac{3x-1}{(x+2)(x-1)}\,dx$.

**Soluzione:**

$\dfrac{3x-1}{(x+2)(x-1)} = \dfrac{A}{x+2} + \dfrac{B}{x-1}$

$3x-1 = A(x-1) + B(x+2)$. Con $x=1$: $2=3B \Rightarrow B=2/3$. Con $x=-2$: $-7=-3A \Rightarrow A=7/3$.

$$\int\left(\frac{7/3}{x+2} + \frac{2/3}{x-1}\right)dx = \frac{7}{3}\ln\lvert x+2\rvert + \frac{2}{3}\ln\lvert x-1\rvert + C$$

</details>

<details>
<summary>Esercizio 2 — Con divisione polinomiale</summary>

Calcolare $\displaystyle\int\frac{x^3+1}{x^2-x}\,dx$.

**Soluzione:**

Dividiamo: $x^3+1 = (x^2-x)(x+1) + (x+1)$, quindi $\dfrac{x^3+1}{x^2-x} = x+1 + \dfrac{x+1}{x(x-1)}$.

Frazioni parziali: $\dfrac{x+1}{x(x-1)} = \dfrac{A}{x} + \dfrac{B}{x-1}$. Con $x=0$: $-1=-A \Rightarrow A=1$. Con $x=1$: $2=B$.

$$\int\left(x+1+\frac{1}{x}+\frac{2}{x-1}\right)dx = \frac{x^2}{2}+x+\ln\lvert x\rvert+2\ln\lvert x-1\rvert+C$$

</details>

<details>
<summary>Esercizio 3 — Fattore quadratico irriducibile</summary>

Calcolare $\displaystyle\int\frac{2x+3}{x^2+2x+5}\,dx$.

**Soluzione:**

Scriviamo $x^2+2x+5 = (x+1)^2+4$. Il numeratore $2x+3 = 2(x+1)+1$.

$$\int\frac{2(x+1)+1}{(x+1)^2+4}\,dx = \int\frac{2(x+1)}{(x+1)^2+4}\,dx + \int\frac{1}{(x+1)^2+4}\,dx$$

Primo integrale: $u=(x+1)^2+4 \Rightarrow \ln\lvert u\rvert + C_1 = \ln((x+1)^2+4)+C_1$.

Secondo: $\frac{1}{4}\cdot\frac{1}{1+(\frac{x+1}{2})^2}\cdot\frac{1}{?}$... usando la formula $\int\frac{du}{u^2+a^2} = \frac{1}{a}\arctan\frac{u}{a}$:

$$\int\frac{1}{(x+1)^2+4}\,dx = \frac{1}{2}\arctan\frac{x+1}{2}+C_2$$

Risultato: $\ln((x+1)^2+4) + \dfrac{1}{2}\arctan\dfrac{x+1}{2} + C$

</details>

<details>
<summary>Esercizio 4 — Sostituzione trig con √(a²-x²)</summary>

Calcolare $\displaystyle\int\frac{x^2}{\sqrt{9-x^2}}\,dx$.

**Soluzione:**

Poniamo $x = 3\sin\theta$, $dx = 3\cos\theta\,d\theta$, $\sqrt{9-x^2} = 3\cos\theta$:

$$\int\frac{9\sin^2\theta}{3\cos\theta}\cdot 3\cos\theta\,d\theta = 9\int\sin^2\theta\,d\theta = 9\int\frac{1-\cos 2\theta}{2}\,d\theta = \frac{9}{2}\left(\theta - \frac{\sin 2\theta}{2}\right)+C$$

Ritorno: $\theta=\arcsin\frac{x}{3}$, $\sin 2\theta = 2\sin\theta\cos\theta = \frac{2x}{3}\cdot\frac{\sqrt{9-x^2}}{3} = \frac{2x\sqrt{9-x^2}}{9}$.

$$\frac{9}{2}\arcsin\frac{x}{3} - \frac{x\sqrt{9-x^2}}{4} + C$$

</details>

<details>
<summary>Esercizio 5 — Sostituzione trig con √(x²+a²)</summary>

Calcolare $\displaystyle\int_0^1\frac{dx}{(1+x^2)^{3/2}}$.

**Soluzione:**

Poniamo $x = \tan\theta$, $dx=\sec^2\theta\,d\theta$, $(1+x^2)^{3/2} = \sec^3\theta$. Limiti: $x=0 \Rightarrow \theta=0$; $x=1 \Rightarrow \theta=\pi/4$.

$$\int_0^{\pi/4}\frac{\sec^2\theta}{\sec^3\theta}\,d\theta = \int_0^{\pi/4}\cos\theta\,d\theta = \Big[\sin\theta\Big]_0^{\pi/4} = \frac{\sqrt{2}}{2}$$

</details>

<details>
<summary>Esercizio 6 — Frazioni parziali con fattori ripetuti</summary>

Calcolare $\displaystyle\int\frac{x^2+1}{x(x-1)^2}\,dx$.

**Soluzione:**

$\dfrac{x^2+1}{x(x-1)^2} = \dfrac{A}{x}+\dfrac{B}{x-1}+\dfrac{C}{(x-1)^2}$

$x^2+1 = A(x-1)^2+Bx(x-1)+Cx$. Con $x=0$: $1=A$. Con $x=1$: $2=C$. Coefficienti $x^2$: $1=A+B \Rightarrow B=0$.

$$\int\left(\frac{1}{x}+\frac{2}{(x-1)^2}\right)dx = \ln\lvert x\rvert - \frac{2}{x-1}+C$$

</details>

<details>
<summary>Esercizio 7 — Completamento del quadrato</summary>

Calcolare $\displaystyle\int\frac{dx}{x^2-4x+13}$.

**Soluzione:**

$x^2-4x+13 = (x-2)^2+9$. Con $u = x-2$, $du = dx$:

$$\int\frac{du}{u^2+9} = \frac{1}{3}\arctan\frac{u}{3}+C = \frac{1}{3}\arctan\frac{x-2}{3}+C$$

</details>

<details>
<summary>Esercizio 8 — Combinazione di tecniche</summary>

Calcolare $\displaystyle\int\frac{x+5}{(x^2+4)(x-1)}\,dx$.

**Soluzione:**

$\dfrac{x+5}{(x^2+4)(x-1)} = \dfrac{A}{x-1}+\dfrac{Bx+D}{x^2+4}$

Moltiplicando: $x+5 = A(x^2+4)+(Bx+D)(x-1)$. Con $x=1$: $6=5A \Rightarrow A=6/5$.

Confronto $x^2$: $0=A+B \Rightarrow B=-6/5$. Confronto costante: $5=4A-D \Rightarrow D = 4\cdot\frac{6}{5}-5 = \frac{24}{5}-5=-\frac{1}{5}$.

$$\int\left(\frac{6/5}{x-1}+\frac{-6x/5-1/5}{x^2+4}\right)dx = \frac{6}{5}\ln\lvert x-1\rvert - \frac{3}{5}\ln(x^2+4) - \frac{1}{10}\arctan\frac{x}{2}+C$$

</details>

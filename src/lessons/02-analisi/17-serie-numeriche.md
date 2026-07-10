---
id: analisi-17-serie-numeriche
subject: analisi
topic_it: Successioni e serie
topic_en: Sequences and series
title_it: Serie numeriche e criteri di convergenza
title_en: Numerical series and convergence criteria
level: blue
order: 17
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 11 — Serie"
---

## 1. Intuizione — Infiniti addendi, somma finita?

Possiamo sommare infiniti numeri e ottenere un risultato finito? A prima vista sembra impossibile: aggiungere sempre qualcosa dovrebbe portare all'infinito. Eppure considera questo: se cammini verso una porta facendo ogni volta **metà** della distanza rimanente, i passi che fai sono $\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots$ La distanza totale percorsa è esattamente $1$, nonostante tu faccia infiniti passi.

Questo è il paradosso di Zenone risolto dalla matematica: la somma di una serie geometrica con ragione $1/2$ è $1$. Ma non tutte le somme infinite convergono. La serie armonica $1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \cdots$ diverge lentissimamente verso infinito — anche se i termini tendono a zero, le somme parziali crescono senza limite.

Le serie numeriche sono lo strumento con cui l'analisi risponde alla domanda: **quando si può sommare infiniti termini e ottenere qualcosa di finito?**

---

## 2. Prerequisiti

- **Successioni e limiti** $a_n \to L$: comportamento asintotico di una lista infinita (lezione 16)
- **Limite di funzione** e operazioni sui limiti
- **Valore assoluto** $\lvert x \rvert$ e disuguaglianze
- **Confronto asintotico** $a_n \sim b_n$: equivalenza per $n \to \infty$
- **Serie geometrica finita:** formula $\sum_{k=0}^n r^k = \dfrac{1-r^{n+1}}{1-r}$
- **Disuguaglianza triangolare:** $\lvert a + b \rvert \leq \lvert a \rvert + \lvert b \rvert$

---

## 3. Teoria — Definizioni formali

### Definizione di serie

Data una successione $(a_n)_{n \geq 1}$, la **serie** di termine generale $a_n$ è la somma formale:

$$\sum_{n=1}^\infty a_n = a_1 + a_2 + a_3 + \cdots$$

Le **somme parziali** sono $S_N = \displaystyle\sum_{n=1}^N a_n$.

La serie **converge** a $S$ se $\displaystyle\lim_{N \to \infty} S_N = S$. In tal caso $S$ è il valore della serie.

La serie **diverge** se $\lim S_N = \pm\infty$ o il limite non esiste.

### Serie geometrica

$$\sum_{n=0}^\infty r^n = \frac{1}{1-r} \quad \text{se } \lvert r \rvert < 1$$

**Dimostrazione:** $S_N = 1 + r + r^2 + \cdots + r^N = \dfrac{1-r^{N+1}}{1-r}$. Per $\lvert r \rvert < 1$, $r^{N+1} \to 0$, quindi $S_N \to \dfrac{1}{1-r}$.

Per $\lvert r \rvert \geq 1$ la serie diverge.

### Serie armonica e p-armonica

$$\sum_{n=1}^\infty \frac{1}{n} = +\infty \qquad \text{(serie armonica — diverge)}$$

$$\sum_{n=1}^\infty \frac{1}{n^p} \begin{cases} \text{converge} & \text{se } p > 1 \\ \text{diverge} & \text{se } p \leq 1 \end{cases}$$

### Convergenza assoluta e condizionata

- $\sum a_n$ **converge assolutamente** se $\sum \lvert a_n \rvert < \infty$
- $\sum a_n$ **converge condizionatamente** se converge ma $\sum \lvert a_n \rvert = +\infty$

La convergenza assoluta implica la convergenza (ma non viceversa).

---

## 4. Derivazione — Divergenza della serie armonica

**Teorema:** $\displaystyle\sum_{n=1}^\infty \frac{1}{n}$ diverge.

**Dimostrazione** (raggruppamento di Cauchy):

Raggruppiamo i termini in blocchi raddoppiati:

$$S = 1 + \underbrace{\frac{1}{2}}_{\geq 1/2} + \underbrace{\frac{1}{3} + \frac{1}{4}}_{\geq 1/2} + \underbrace{\frac{1}{5}+\frac{1}{6}+\frac{1}{7}+\frac{1}{8}}_{\geq 1/2} + \cdots$$

Il $k$-esimo blocco contiene $2^{k-1}$ termini, ognuno $\geq \dfrac{1}{2^k}$, quindi ogni blocco contribuisce almeno $\dfrac{2^{k-1}}{2^k} = \dfrac{1}{2}$.

Aggiungendo $k$ blocchi: $S_{2^k} \geq 1 + \dfrac{k}{2} \to +\infty$. Quindi la serie diverge. $\square$

**Paradosso:** i termini $1/n \to 0$ (condizione necessaria!), eppure la serie diverge. Questo mostra che $a_n \to 0$ non basta per la convergenza.

---

## 5. Esempi risolti

**Esempio 1 — Serie geometrica**

Calcolare $\displaystyle\sum_{n=0}^\infty \left(\frac{2}{3}\right)^n$.

È una serie geometrica con $r = 2/3$, $\lvert r \rvert < 1$:

$$\sum_{n=0}^\infty \left(\frac{2}{3}\right)^n = \frac{1}{1 - 2/3} = \frac{1}{1/3} = 3$$

---

**Esempio 2 — Criterio del termine generale**

Studiare $\displaystyle\sum_{n=1}^\infty \frac{n^2}{n^2 + 1}$.

Il termine generale: $a_n = \dfrac{n^2}{n^2+1} \to 1 \neq 0$.

Per il criterio del termine generale (necessario): se una serie converge, allora $a_n \to 0$. Qui $a_n \not\to 0$, quindi la serie **diverge**.

---

**Esempio 3 — Criterio del rapporto**

Studiare $\displaystyle\sum_{n=1}^\infty \frac{n!}{3^n}$.

$$L = \lim_{n\to\infty} \frac{a_{n+1}}{a_n} = \lim_{n\to\infty} \frac{(n+1)!}{3^{n+1}} \cdot \frac{3^n}{n!} = \lim_{n\to\infty} \frac{n+1}{3} = +\infty > 1$$

Per il criterio del rapporto la serie **diverge**.

---

**Esempio 4 — Criterio della radice**

Studiare $\displaystyle\sum_{n=1}^\infty \left(\frac{n}{2n+1}\right)^n$.

$$L = \lim_{n\to\infty} \sqrt[n]{a_n} = \lim_{n\to\infty} \frac{n}{2n+1} = \frac{1}{2} < 1$$

Per il criterio della radice la serie **converge assolutamente**.

---

**Esempio 5 — Confronto asintotico**

Studiare $\displaystyle\sum_{n=1}^\infty \frac{n+2}{n^3+1}$.

Per $n \to \infty$: $\dfrac{n+2}{n^3+1} \sim \dfrac{n}{n^3} = \dfrac{1}{n^2}$.

Poiché $\displaystyle\sum \dfrac{1}{n^2}$ converge ($p=2>1$), per il criterio asintotico la serie **converge**.

---

**Esempio 6 — Criterio di Leibniz (serie alternata)**

Studiare $\displaystyle\sum_{n=1}^\infty \frac{(-1)^{n+1}}{n} = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots$

$a_n = 1/n$ è decrescente e $a_n \to 0$. Per il criterio di Leibniz la serie **converge**.

Non converge assolutamente (è la serie armonica), quindi è **convergenza condizionata**. Il valore è $\ln 2$.

---

**Esempio 7 — Confronto diretto**

Studiare $\displaystyle\sum_{n=1}^\infty \frac{1}{n(n+1)}$.

Uso la decomposizione in frazioni parziali: $\dfrac{1}{n(n+1)} = \dfrac{1}{n} - \dfrac{1}{n+1}$.

$$S_N = \sum_{n=1}^N \left(\frac{1}{n} - \frac{1}{n+1}\right) = 1 - \frac{1}{N+1} \to 1$$

La serie è **telescopica** e converge a $1$.

---

**Esempio 8 — Criterio integrale**

Verificare che $\displaystyle\sum_{n=1}^\infty \dfrac{1}{n^2}$ converge confrontandola con $\int_1^\infty \dfrac{1}{x^2}\,dx$.

L'integrale converge: $\int_1^\infty \dfrac{1}{x^2}\,dx = \left[-\dfrac{1}{x}\right]_1^\infty = 1$.

Poiché $f(x) = 1/x^2$ è decrescente e positiva, e $\sum a_n$ e $\int f\,dx$ hanno lo stesso carattere (criterio integrale), la serie **converge**.

---

## 6. Grafico — Serie geometrica: somme parziali che convergono

```plot
{"title":"Somme parziali di ∑(1/2)^n → 2","fn":"2 - Math.pow(0.5,x)","fn2":"2 - Math.pow(0.9,x)","domain":[0,30],"yDomain":[0,2.5],"label1":"∑(1/2)^n (veloce)","label2":"∑(0.9)^n (lento)"}
```

Il grafico mostra le somme parziali di due serie geometriche. Entrambe convergono, ma con velocità diverse: ragione $1/2$ converge rapidamente al valore $2$, ragione $0.9$ converge più lentamente al valore $10$.

---

## 7. Slider — Convergenza della serie geometrica $\sum r^n$

```slider
{"title":"Serie geometrica ∑r^n — somme parziali","fn":"1/(1-a) - Math.pow(a,x)/(1-a)","domain":[1,40],"yDomain":[0,12],"pname":"a","pmin":0.1,"pmax":0.95,"pdefault":0.5,"pstep":0.05,"plabel":"r","label1":"Somma parziale S_n"}
```

Muovi $r$: il valore limite è $1/(1-r)$ (linea che la curva si avvicina). Per $r$ vicino a $1$ la convergenza è lentissima; per $r$ vicino a $0$ è rapidissima.

---

## 8. Errori comuni

**Errore 1 — Invertire il criterio del termine generale**

❌ "$a_n \to 0$, quindi $\sum a_n$ converge"

✓ La condizione $a_n \to 0$ è **necessaria** ma non sufficiente. La serie armonica ha $1/n \to 0$ ma diverge.

---

**Errore 2 — Dimenticare il caso $L=1$ nel criterio del rapporto**

❌ "Il rapporto tende a 1, quindi la serie converge"

✓ Se $L = 1$ il criterio del rapporto è **non conclusivo**. Bisogna usare un altro criterio (confronto, criterio integrale, p-serie).

---

**Errore 3 — Applicare Leibniz a serie non alternate**

❌ Usare il criterio di Leibniz su $\sum (-1)^n / n^2$ senza verificare la monotonia di $a_n$

✓ Leibniz richiede: (1) segni alternati, (2) $a_n$ **decrescente** per ogni $n$, (3) $a_n \to 0$.

---

**Errore 4 — Confondere convergenza assoluta e condizionata**

❌ "Se $\sum a_n$ converge, allora $\sum \lvert a_n \rvert$ converge"

✓ È falso in generale: $\sum (-1)^{n+1}/n$ converge (condizionatamente) ma $\sum 1/n$ diverge.

---

**Errore 5 — Sbagliare il criterio del confronto**

❌ "$0 \leq a_n \leq b_n$ e $\sum a_n$ converge $\Rightarrow$ $\sum b_n$ converge"

✓ È il contrario: se $a_n \leq b_n$ e $\sum a_n$ converge, non si può concludere nulla su $\sum b_n$. Funziona così: se $\sum b_n$ converge, allora $\sum a_n$ converge; se $\sum a_n$ diverge, allora $\sum b_n$ diverge.

---

**Errore 6 — Dimenticare di verificare il segno nel confronto**

❌ Confronto con $\sum 1/n^2$ senza verificare che $a_n > 0$

✓ Il criterio del confronto standard richiede termini **non negativi**. Per serie con segno variabile bisogna lavorare con $\lvert a_n \rvert$ (convergenza assoluta).

---

## 9. Applicazioni reali

**Calcolo di $\pi$ e di costanti matematiche.** Le serie infinite sono la base degli algoritmi per calcolare le cifre di $\pi$. La formula di Leibniz-Gregory $\pi/4 = 1 - 1/3 + 1/5 - 1/7 + \cdots = \sum (-1)^n/(2n+1)$ è semplice ma lentissima. Algoritmi moderni usano serie che convergono esponenzialmente veloci, come la formula di Chudnovsky, capace di calcolare miliardi di cifre di $\pi$ con pochi termini.

**Elettronica e segnali digitali.** Le serie di Fourier decompongono qualsiasi segnale periodico in una somma infinita di seni e coseni. Un'onda quadra, ad esempio, si scrive come $\sum_{k=0}^\infty \frac{\sin((2k+1)x)}{2k+1}$. La convergenza di questa serie determina con quante armoniche bisogna approssimare il segnale per ottenere una qualità audio sufficientemente alta — un problema pratico in ogni sistema di compressione audio (MP3, AAC).

**Fisica quantistica e funzioni di partizione.** In meccanica statistica, la funzione di partizione di un sistema quantistico è spesso una serie infinita $Z = \sum_n e^{-E_n/(k_B T)}$. La convergenza di questa serie dipende dalla struttura dei livelli energetici del sistema. Calcolare $Z$ con precisione determina le proprietà termodinamiche (energia media, calore specifico, entropia) del sistema fisico.

---

## 10. Riepilogo

| Criterio | Condizione | Conclusione |
| --- | --- | --- |
| Termine generale | $a_n \not\to 0$ | Diverge |
| Serie geometrica | $\lvert r \rvert < 1$ | Converge a $1/(1-r)$ |
| p-serie | $p > 1$ | $\sum 1/n^p$ converge |
| p-serie | $p \leq 1$ | $\sum 1/n^p$ diverge |
| Rapporto | $L < 1$ | Converge assolutamente |
| Rapporto | $L > 1$ | Diverge |
| Rapporto | $L = 1$ | Non conclusivo |
| Radice | $L < 1$ | Converge |
| Confronto | $0 \leq a_n \leq b_n$, $\sum b_n < \infty$ | $\sum a_n$ converge |
| Leibniz | $a_n \searrow 0$, segni alternati | Converge |

---

## 11. Esercizi

<details>
<summary>Esercizio 1 — Serie geometrica con sfasamento</summary>

Calcolare $\displaystyle\sum_{n=3}^\infty \left(\frac{1}{3}\right)^n$.

**Soluzione:**

$$\sum_{n=3}^\infty \left(\frac{1}{3}\right)^n = \sum_{n=0}^\infty \left(\frac{1}{3}\right)^n - \left(\frac{1}{3}\right)^0 - \left(\frac{1}{3}\right)^1 - \left(\frac{1}{3}\right)^2 = \frac{1}{1-1/3} - 1 - \frac{1}{3} - \frac{1}{9} = \frac{3}{2} - \frac{13}{9} = \frac{1}{18}$$

</details>

<details>
<summary>Esercizio 2 — Criterio del rapporto</summary>

Studiare la convergenza di $\displaystyle\sum_{n=1}^\infty \frac{n^2 \cdot 2^n}{n!}$.

**Soluzione:**

$$L = \lim_{n\to\infty} \frac{(n+1)^2 \cdot 2^{n+1}}{(n+1)!} \cdot \frac{n!}{n^2 \cdot 2^n} = \lim_{n\to\infty} \frac{(n+1)^2}{n^2} \cdot \frac{2}{n+1} = \lim_{n\to\infty} \frac{2(n+1)}{n^2} = 0 < 1$$

La serie **converge assolutamente**.

</details>

<details>
<summary>Esercizio 3 — Confronto asintotico</summary>

Studiare $\displaystyle\sum_{n=1}^\infty \frac{2n^2 + 3n}{n^4 - 1}$.

**Soluzione:**

Per $n \to \infty$: $\dfrac{2n^2 + 3n}{n^4 - 1} \sim \dfrac{2n^2}{n^4} = \dfrac{2}{n^2}$.

Poiché $\sum \dfrac{2}{n^2} = 2 \sum \dfrac{1}{n^2}$ converge ($p=2>1$), per il criterio asintotico la serie **converge**.

</details>

<details>
<summary>Esercizio 4 — Serie alternata e convergenza condizionata</summary>

Studiare $\displaystyle\sum_{n=1}^\infty \frac{(-1)^n}{\sqrt{n}}$.

**Soluzione:**

**Convergenza:** $a_n = 1/\sqrt{n}$ è decrescente e $\to 0$. Per il criterio di Leibniz la serie **converge**.

**Convergenza assoluta:** $\sum \dfrac{1}{\sqrt{n}} = \sum \dfrac{1}{n^{1/2}}$ con $p = 1/2 < 1$: **diverge**.

Quindi la convergenza è **condizionata**.

</details>

<details>
<summary>Esercizio 5 — Serie telescopica</summary>

Calcolare $\displaystyle\sum_{n=1}^\infty \frac{1}{n(n+2)}$.

**Soluzione:**

Decomposizione: $\dfrac{1}{n(n+2)} = \dfrac{1}{2}\left(\dfrac{1}{n} - \dfrac{1}{n+2}\right)$.

$$S_N = \frac{1}{2}\sum_{n=1}^N\left(\frac{1}{n}-\frac{1}{n+2}\right) = \frac{1}{2}\left(1 + \frac{1}{2} - \frac{1}{N+1} - \frac{1}{N+2}\right) \to \frac{1}{2} \cdot \frac{3}{2} = \frac{3}{4}$$

</details>

<details>
<summary>Esercizio 6 — Criterio della radice</summary>

Studiare $\displaystyle\sum_{n=1}^\infty \left(\frac{3n}{4n-1}\right)^n$.

**Soluzione:**

$$L = \lim_{n\to\infty} \sqrt[n]{a_n} = \lim_{n\to\infty} \frac{3n}{4n-1} = \frac{3}{4} < 1$$

Per il criterio della radice la serie **converge**.

</details>

<details>
<summary>Esercizio 7 — Determinare il carattere della serie</summary>

Studiare $\displaystyle\sum_{n=1}^\infty \frac{1}{\sqrt{n^3 + 2n}}$.

**Soluzione:**

Per $n \to \infty$: $\dfrac{1}{\sqrt{n^3 + 2n}} \sim \dfrac{1}{\sqrt{n^3}} = \dfrac{1}{n^{3/2}}$.

Poiché $\sum \dfrac{1}{n^{3/2}}$ converge ($p = 3/2 > 1$), per il criterio asintotico la serie **converge**.

</details>

<details>
<summary>Esercizio 8 — Serie mista, test multipli</summary>

Studiare $\displaystyle\sum_{n=1}^\infty (-1)^n \cdot \frac{n}{n^2+1}$.

**Soluzione:**

**Convergenza assoluta:** $\lvert a_n \rvert = \dfrac{n}{n^2+1} \sim \dfrac{1}{n}$. Poiché $\sum 1/n$ diverge, la serie non converge assolutamente.

**Criterio di Leibniz:** $b_n = \dfrac{n}{n^2+1}$. Verifica: $b_n' = \dfrac{(n^2+1) - n \cdot 2n}{(n^2+1)^2} = \dfrac{1-n^2}{(n^2+1)^2} < 0$ per $n \geq 2$ (decrescente). Inoltre $b_n \to 0$. Quindi la serie **converge condizionatamente**.

</details>

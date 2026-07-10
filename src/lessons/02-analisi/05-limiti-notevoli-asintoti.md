---
id: analisi-05-limiti-notevoli-asintoti
subject: analisi
topic_it: Limiti e continuità
topic_en: Limits and continuity
title_it: Limiti notevoli e asintoti
title_en: Notable limits and asymptotes
level: blue
order: 5
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 2 — Asintoti e limiti speciali"
---

## 1. Intuizione e motivazione

Immagina di osservare un aereo che vola sempre più in alto. Man mano che si allontana, la sua traiettoria curva — la curvatura della Terra — diventa sempre meno rilevante: a grandissime distanze, l'aereo sembra muoversi lungo una retta. Quella retta immaginaria verso cui la traiettoria converge si chiama **asintoto**.

Viceversa, pensa al decadimento radioattivo: la quantità di sostanza radioattiva si dimezza ogni periodo di dimezzamento, avvicinandosi sempre più a zero ma non toccandolo mai in tempo finito. L'asse delle $x$ (la retta $y=0$) è l'asintoto orizzontale della curva di decadimento $N(t) = N_0 e^{-\lambda t}$.

Per studiare questi comportamenti limite servono i **limiti notevoli**: risultati esatti che compaiono così frequentemente nell'analisi da meritare un nome e una memorizzazione. Il più importante è $\lim_{x\to 0}\frac{\sin x}{x} = 1$ — non è solo un risultato elegante, ma la pietra angolare di tutta la trigonometria differenziale. Da esso discende la derivata di $\sin x$, e da quella l'intera analisi delle onde, dei segnali, dei circuiti elettrici.

Altrettanto fondamentale è $\lim_{x\to\infty}\left(1+\frac{1}{x}\right)^x = e$: questa è la definizione stessa del numero di Eulero, la base dei logaritmi naturali e delle equazioni differenziali che governano crescita, decadimento e interesse composto.

---

## 2. Prerequisiti

- Definizione di **limite** (lezione 1) e tecniche di calcolo (lezione 3)
- **Continuità** e comportamento delle funzioni elementari (lezione 4)
- **Teorema del confronto** (lezione 2): fondamentale per dimostrare $\frac{\sin x}{x} \to 1$
- Proprietà delle funzioni **trigonometriche**: identità pitagorica $\sin^2 x + \cos^2 x = 1$, interpretazione geometrica degli angoli in radianti
- Nozione di **logaritmo** e di **esponenziale**: proprietà di base, derivate (anticipazione)

---

## 3. Teoria passo-passo

### Limiti notevoli fondamentali

**Limite 1 — Il seno fondamentale:**

$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

Questo limite vale solo quando $x$ è in **radianti**. In gradi il risultato sarebbe $\pi/180$. È il fondamento di tutta la trigonometria differenziale.

**Limite 2 — Il coseno:**

$$\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}$$

Equivalentemente: $\lim_{x\to 0}\frac{1-\cos x}{x} = 0$. Il coseno si avvicina a 1 più "velocemente" del seno si avvicina a 0.

**Limite 3 — Il numero di Eulero (forma $+\infty$):**

$$\lim_{x \to +\infty} \left(1 + \frac{1}{x}\right)^x = e \approx 2{,}71828\ldots$$

Questa è una delle definizioni equivalenti di $e$.

**Limite 4 — Il numero di Eulero (forma $0$):**

$$\lim_{x \to 0} (1 + x)^{1/x} = e$$

Forma equivalente del limite 3, con la sostituzione $x \mapsto 1/x$.

**Limite 5 — Logaritmo naturale:**

$$\lim_{x \to 0} \frac{\ln(1+x)}{x} = 1$$

Equivalenza asintotica: $\ln(1+x) \sim x$ per $x \to 0$.

**Limite 6 — Esponenziale:**

$$\lim_{x \to 0} \frac{e^x - 1}{x} = 1$$

Equivalenza asintotica: $e^x - 1 \sim x$ per $x \to 0$.

**Limite 7 — Generalizzazione con parametro:**

$$\lim_{x \to +\infty} \left(1 + \frac{a}{x}\right)^x = e^a \quad \forall a \in \mathbb{R}$$

Tutti questi limiti sono collegati. I limiti 5 e 6 si deducono dal limite 3. Le **equivalenze asintotiche** più utili per $x \to 0$:

$$\sin x \sim x, \quad 1-\cos x \sim \frac{x^2}{2}, \quad \tan x \sim x$$

$$\ln(1+x) \sim x, \quad e^x-1 \sim x, \quad (1+x)^\alpha - 1 \sim \alpha x$$

Il simbolo $f \sim g$ significa $\lim \frac{f}{g} = 1$ e si può usare in **moltiplicazioni** (non in addizioni o sottrazioni).

### Asintoti

Un **asintoto** di $f$ è una retta $\ell$ tale che la distanza tra il punto $(x, f(x))$ e la retta $\ell$ tende a 0 quando $x \to \pm\infty$ o $x \to a^{\pm}$.

**Asintoto orizzontale:** la retta $y = L$ è asintoto orizzontale di $f$ se:

$$\lim_{x \to +\infty} f(x) = L \quad \text{oppure} \quad \lim_{x \to -\infty} f(x) = L$$

Una funzione può avere due asintoti orizzontali distinti (uno per $+\infty$ e uno per $-\infty$).

**Asintoto verticale:** la retta $x = a$ è asintoto verticale di $f$ se almeno uno tra:

$$\lim_{x \to a^+} f(x) = \pm\infty \quad \text{o} \quad \lim_{x \to a^-} f(x) = \pm\infty$$

Gli asintoti verticali si trovano tipicamente dove il denominatore si annulla e il numeratore no.

**Asintoto obliquo:** la retta $y = mx + q$ (con $m \neq 0$) è asintoto obliquo di $f$ per $x\to+\infty$ se:

$$\lim_{x \to +\infty} [f(x) - (mx + q)] = 0$$

**Come trovare $m$ e $q$:**

$$m = \lim_{x \to +\infty} \frac{f(x)}{x} \quad \text{(se questo limite esiste e è finito e } \neq 0\text{)}$$

$$q = \lim_{x \to +\infty} [f(x) - mx] \quad \text{(se questo limite esiste e è finito)}$$

Se l'asintoto orizzontale esiste (cioè $\lim f(x) = L$ finito), allora $m = 0$ e l'asintoto obliquo degenera in quello orizzontale: non esistono entrambi separatamente.

---

## 4. Derivazione commentata

**Dimostrazione geometrica che $\lim_{x \to 0^+} \dfrac{\sin x}{x} = 1$.**

Consideriamo un angolo $x$ in radianti con $0 < x < \pi/2$. Disegniamo un cerchio di raggio 1 centrato nell'origine O. Siano:
- $A = (1, 0)$
- $B = (\cos x, \sin x)$ il punto sul cerchio corrispondente all'angolo $x$
- $C = (1, \tan x)$ il punto sulla tangente verticale all'asse $x$ in $x=1$

Confrontiamo le aree di tre figure (tutte contenute una nell'altra):

**Triangolo $OAB$:** area $= \frac{1}{2} \cdot \text{base} \cdot \text{altezza} = \frac{1}{2} \cdot 1 \cdot \sin x = \dfrac{\sin x}{2}$

**Settore circolare $OAB$:** area $= \frac{x}{2\pi} \cdot \pi \cdot 1^2 = \dfrac{x}{2}$ (poiché il settore ha angolo $x$ su $2\pi$)

**Triangolo $OAC$:** area $= \frac{1}{2} \cdot 1 \cdot \tan x = \dfrac{\tan x}{2}$

Poiché Triangolo $OAB$ $\subset$ Settore $\subset$ Triangolo $OAC$:

$$\frac{\sin x}{2} \leq \frac{x}{2} \leq \frac{\tan x}{2}$$

Dividiamo tutto per $\dfrac{\sin x}{2} > 0$:

$$1 \leq \frac{x}{\sin x} \leq \frac{1}{\cos x}$$

Prendiamo i reciproci (invertendo le disuguaglianze):

$$\cos x \leq \frac{\sin x}{x} \leq 1$$

Per $x\to 0^+$: $\cos x \to 1$ e $1 \to 1$. Per il **teorema del confronto**:

$$\lim_{x\to 0^+} \frac{\sin x}{x} = 1$$

Poiché $\frac{\sin x}{x}$ è una funzione pari (numeratore dispari, denominatore dispari, il rapporto è pari), anche $\lim_{x\to 0^-} \frac{\sin x}{x} = 1$.

Quindi $\lim_{x \to 0} \dfrac{\sin x}{x} = 1$. $\square$

**Commenti importanti:**
- La dimostrazione usa le **aree** di figure geometriche, che richiedono che $x$ sia in radianti. In gradi il limite sarebbe diverso.
- Il teorema del confronto è la chiave: "schiaccia" $\frac{\sin x}{x}$ tra $\cos x$ e 1, entrambi convergenti a 1.
- La parità di $\frac{\sin x}{x}$ permette di estendere il risultato a $x \to 0^-$.

---

## 5. Esempi graduati

**Esempio 1 — Uso diretto del limite notevole del seno**

$$\lim_{x \to 0} \frac{\sin(5x)}{x}$$

Riscriviamo per ottenere la forma $\frac{\sin(t)}{t}$ con $t = 5x \to 0$:

$$= \lim_{x \to 0} 5 \cdot \frac{\sin(5x)}{5x} = 5 \cdot 1 = 5$$

---

**Esempio 2 — Rapporto di due seni**

$$\lim_{x \to 0} \frac{\sin(3x)}{\sin(7x)}$$

Moltiplichiamo e dividiamo opportunamente per ridurre a limiti notevoli noti:

$$= \lim_{x\to 0} \frac{\sin(3x)}{3x} \cdot \frac{7x}{\sin(7x)} \cdot \frac{3x}{7x} = 1 \cdot 1 \cdot \frac{3}{7} = \frac{3}{7}$$

---

**Esempio 3 — Limite di $(1+a/x)^x$**

$$\lim_{x \to +\infty} \left(1 + \frac{2}{x}\right)^x$$

Forma $1^\infty$, caso del limite notevole 7 con $a=2$. Verifichiamo riscrivendo:

$$\left(1 + \frac{2}{x}\right)^x = \left[\left(1 + \frac{2}{x}\right)^{x/2}\right]^2$$

Posto $t = x/2 \to +\infty$ con $x \to +\infty$:

$$= \left[\left(1 + \frac{1}{t}\right)^t\right]^2 \to e^2$$

---

**Esempio 4 — Asintoto orizzontale**

Trovare gli asintoti orizzontali di $f(x) = \dfrac{3x^2 - 1}{x^2 + 2}$.

$$\lim_{x \to \pm\infty} \frac{3x^2-1}{x^2+2} = \lim_{x\to\pm\infty} \frac{3 - 1/x^2}{1 + 2/x^2} = \frac{3}{1} = 3$$

La retta $y = 3$ è asintoto orizzontale sia per $x\to+\infty$ che per $x\to-\infty$ (unico asintoto orizzontale).

---

**Esempio 5 — Asintoto verticale**

Trovare gli asintoti verticali di $f(x) = \dfrac{x+1}{x^2-4}$.

Il denominatore $x^2-4 = (x-2)(x+2)$ si annulla in $x = \pm 2$. Verifichiamo:

Per $x = 2$: numeratore $= 3 \neq 0$. $\lim_{x\to 2^+} \frac{x+1}{(x-2)(x+2)} = \frac{3}{0^+ \cdot 4} = +\infty$. Asintoto verticale $x=2$.

Per $x = -2$: numeratore $= -1 \neq 0$. $\lim_{x\to -2^+} \frac{x+1}{(x-2)(x+2)} = \frac{-1}{(-4)\cdot 0^+} = +\infty$. Asintoto verticale $x=-2$.

---

**Esempio 6 — Asintoto obliquo (divisione polinomiale)**

Trovare l'asintoto obliquo di $f(x) = \dfrac{x^2+1}{x-1}$ per $x\to+\infty$.

**Passo 1 — trovare $m$:**

$$m = \lim_{x\to+\infty} \frac{f(x)}{x} = \lim_{x\to+\infty} \frac{x^2+1}{x(x-1)} = \lim_{x\to+\infty} \frac{x^2+1}{x^2-x} = 1$$

**Passo 2 — trovare $q$:**

$$q = \lim_{x\to+\infty} [f(x) - x] = \lim_{x\to+\infty} \frac{x^2+1 - x(x-1)}{x-1} = \lim_{x\to+\infty} \frac{x+1}{x-1} = 1$$

L'asintoto obliquo è $y = x + 1$.

*Verifica con divisione polinomiale:* $\frac{x^2+1}{x-1} = x + 1 + \frac{2}{x-1}$. Per $x\to+\infty$, il resto $\frac{2}{x-1} \to 0$, confermando $y=x+1$.

---

**Esempio 7 — Equivalenza asintotica (composizione)**

$$\lim_{x \to 0} \frac{\ln(1+\sin x)}{x}$$

Per $x\to 0$: $\sin x \sim x$, poi $\ln(1+t) \sim t$ per $t \to 0$. Quindi $\ln(1+\sin x) \sim \sin x \sim x$:

$$\lim_{x\to 0} \frac{\ln(1+\sin x)}{x} = 1$$

*Verifica rigorosa:* $\frac{\ln(1+\sin x)}{x} = \frac{\ln(1+\sin x)}{\sin x} \cdot \frac{\sin x}{x} \to 1 \cdot 1 = 1$.

---

**Esempio 8 — Tutti gli asintoti di una funzione irrazionale**

Trovare tutti gli asintoti di $f(x) = \sqrt{x^2 + x} - x$ per $x\to+\infty$.

Razionalizziamo (forma $\infty - \infty$):

$$\sqrt{x^2+x} - x = \frac{(\sqrt{x^2+x}-x)(\sqrt{x^2+x}+x)}{\sqrt{x^2+x}+x} = \frac{x^2+x-x^2}{\sqrt{x^2+x}+x} = \frac{x}{\sqrt{x^2+x}+x}$$

Per $x>0$: $\sqrt{x^2+x} = x\sqrt{1+1/x}$:

$$= \frac{x}{x\sqrt{1+1/x}+x} = \frac{1}{\sqrt{1+1/x}+1} \to \frac{1}{1+1} = \frac{1}{2}$$

La retta $y = 1/2$ è asintoto orizzontale per $x\to+\infty$.

---

## 6. Grafico

```plot
{
  "title": "sin(x)/x → 1 per x→0 e y→0 per x→±∞",
  "fn": "(Math.abs(x) > 0.001) ? Math.sin(x) / x : 1",
  "fn2": "1",
  "domain": [-10, 10],
  "yDomain": [-0.5, 1.5],
  "label1": "sin(x)/x",
  "label2": "y = 1 (asintoto orizzontale)"
}
```

---

## 7. Elemento interattivo

Lo slider mostra come $(1 + a/x)^x$ converge a $e^a$ al crescere di $x$. Per ogni valore fisso di $x$, la curva si stabilizza progressivamente attorno al valore $e^a$. Prova diversi valori di $a$: per $a=1$ il limite è $e \approx 2.718$, per $a=2$ è $e^2 \approx 7.389$, per $a=0.5$ è $\sqrt{e} \approx 1.649$.

```slider
{
  "title": "(1 + a/x)ˣ → eᵃ per x→+∞ al variare di a",
  "fn": "Math.pow(1 + a / Math.max(x, 0.1), x)",
  "domain": [0.5, 30],
  "yDomain": [0, 20],
  "pname": "a",
  "pmin": 0.5,
  "pmax": 3,
  "pdefault": 1,
  "pstep": 0.1,
  "plabel": "Parametro a (limite = eᵃ)",
  "label1": "(1+a/x)ˣ"
}
```

---

## 8. Errori comuni

**Errore 1 — Usare i limiti notevoli con angoli in gradi invece di radianti.**
Il limite $\lim_{x\to 0}\frac{\sin x}{x} = 1$ vale SOLO in radianti. In gradi il risultato è $\frac{\pi}{180} \approx 0.0175$, perché $\sin(x°) = \sin\!\left(\frac{\pi x}{180}\right)$ e il limite diventa $\frac{\pi}{180}$. In analisi matematica gli angoli sono **sempre** in radianti.

**Errore 2 — Applicare $\frac{\sin x}{x} \to 1$ quando l'argomento non tende a 0 insieme a $x$.**
Il limite $\lim_{x\to 0}\frac{\sin(2x^2+x)}{x}$ non vale 1. L'argomento del seno è $2x^2+x$, non $x$: bisogna riscrivere come $\frac{\sin(2x^2+x)}{2x^2+x} \cdot \frac{2x^2+x}{x} = 1 \cdot (2x+1) \to 1$. Occorre sempre adattare la forma.

**Errore 3 — Credere che il grafico non possa attraversare un asintoto orizzontale.**
La definizione di asintoto riguarda il comportamento per $x \to \pm\infty$: il grafico può attraversare l'asintoto per valori finiti di $x$. Ad esempio, $\frac{\sin x}{x}$ attraversa infinitamente volte la retta $y=0$ (il suo asintoto orizzontale per $x\to\pm\infty$), pur tendendo a 0.

**Errore 4 — Cercare asintoti obliqui quando esiste un asintoto orizzontale.**
Se $\lim_{x\to+\infty} f(x) = L$ finito, allora $m = \lim_{x\to+\infty} \frac{f(x)}{x} = 0$: non c'è asintoto obliquo con $m \neq 0$. L'asintoto orizzontale è il caso $m=0$ dell'asintoto obliquo.

**Errore 5 — Dimenticare di controllare entrambe le direzioni per gli asintoti orizzontali.**
Una funzione può avere asintoti orizzontali diversi per $x\to+\infty$ e $x\to-\infty$. Esempio: $\arctan(x)$ ha asintoto $y=\pi/2$ per $x\to+\infty$ e $y=-\pi/2$ per $x\to-\infty$. Bisogna sempre calcolare il limite in entrambe le direzioni.

**Errore 6 — Concludere che denominatore nullo implica sempre asintoto verticale.**
Se il numeratore si annulla nello stesso punto del denominatore, il limite potrebbe essere finito (discontinuità eliminabile, non asintoto). Esempio: $\frac{x^2-1}{x-1}$ ha $x-1=0$ in $x=1$, ma il limite è 2 (non $\pm\infty$). Bisogna sempre fattorizzare e analizzare numeratore e denominatore insieme.

---

## 9. Applicazioni reali

**Segnali e comunicazioni — funzione sinc.** In elaborazione del segnale, la funzione $\text{sinc}(x) = \frac{\sin(\pi x)}{\pi x}$ è fondamentale nel teorema di campionamento di Nyquist-Shannon. Il suo valore in $x=0$ si definisce per continuità come il limite $\lim_{x\to 0}\frac{\sin(\pi x)}{\pi x} = 1$. Questa funzione descrive la risposta impulsiva di un filtro passa-basso ideale: ogni volta che si digitalizza un segnale audio, si comprime un'immagine o si codifica un video, la funzione sinc è implicita nel processo. Il campionamento a frequenza $f_s$ permette la ricostruzione esatta di segnali con frequenza $\leq f_s/2$ proprio grazie alle proprietà della funzione sinc.

**Finanza — capitalizzazione continua.** Il limite $\lim_{n\to\infty}\left(1+\frac{r}{n}\right)^n = e^r$ è alla base della capitalizzazione continua degli interessi. Se un capitale $C_0$ cresce al tasso annuo $r$ capitalizzato $n$ volte l'anno, dopo un anno vale $C_0\left(1+\frac{r}{n}\right)^n$. Per $n\to\infty$ (capitalizzazione continua), diventa $C_0 e^r$. Questa formula è usata in tutta la finanza moderna: dalla valorizzazione di opzioni (formula di Black-Scholes) ai modelli di crescita economica, dalla gestione del rischio ai derivati finanziari.

**Fisica — decadimento esponenziale e asintoti.** La quantità di una sostanza radioattiva segue $N(t) = N_0 e^{-\lambda t}$, dove $\lambda > 0$ è la costante di decadimento. La retta $N=0$ è l'asintoto orizzontale per $t\to+\infty$: la quantità si avvicina a zero senza mai raggiungerlo in tempo finito — un esempio perfetto di comportamento asintotico. Il numero $e$ entra nella formula precisamente attraverso il limite $\lim_{n\to\infty}(1+1/n)^n = e$: il decadimento "continuo" è il limite del decadimento a passi discreti.

---

## 10. Riepilogo tabellare

| Limite notevole | Formula | Note |
| --- | --- | --- |
| Seno fondamentale | $\lim_{x\to 0}\frac{\sin x}{x} = 1$ | $x$ in radianti — fondamentale |
| Coseno | $\lim_{x\to 0}\frac{1-\cos x}{x^2} = \frac{1}{2}$ | Equivale a $1-\cos x \sim x^2/2$ |
| Numero $e$ (grande) | $\lim_{x\to+\infty}\left(1+\frac{1}{x}\right)^x = e$ | Forma per $x\to+\infty$ |
| Numero $e$ (piccolo) | $\lim_{x\to 0}(1+x)^{1/x} = e$ | Forma equivalente per $x\to 0$ |
| Generalizzato | $\lim_{x\to+\infty}\left(1+\frac{a}{x}\right)^x = e^a$ | Per ogni $a\in\mathbb{R}$ |
| Logaritmo | $\lim_{x\to 0}\frac{\ln(1+x)}{x} = 1$ | Equivale a $\ln(1+x)\sim x$ |
| Esponenziale | $\lim_{x\to 0}\frac{e^x-1}{x} = 1$ | Equivale a $e^x-1\sim x$ |
| Asintoto orizzontale | $\lim_{x\to\pm\infty}f(x)=L$ | Retta $y=L$ |
| Asintoto verticale | $\lim_{x\to a^\pm}f(x)=\pm\infty$ | Retta $x=a$ |
| Asintoto obliquo ($m$) | $m=\lim_{x\to\infty}\frac{f(x)}{x}$ | Se $m\neq 0$ e finito |
| Asintoto obliquo ($q$) | $q=\lim_{x\to\infty}[f(x)-mx]$ | Dopo aver trovato $m$ |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Limite notevole diretto</summary>

**Testo:** Calcola $\lim_{x\to 0} \dfrac{\sin(4x)}{3x}$.

**Soluzione:**

Riscriviamo moltiplicando e dividendo per 4:

$$= \lim_{x\to 0} \frac{4}{3} \cdot \frac{\sin(4x)}{4x} = \frac{4}{3} \cdot 1 = \frac{4}{3}$$

Il limite vale $\boxed{\dfrac{4}{3}}$.

</details>

<details>
<summary>Esercizio 2 — Limite con tangente</summary>

**Testo:** Calcola $\lim_{x\to 0} \dfrac{\tan x}{x}$.

**Soluzione:**

Usiamo $\tan x = \frac{\sin x}{\cos x}$:

$$\frac{\tan x}{x} = \frac{\sin x}{x} \cdot \frac{1}{\cos x}$$

Per $x\to 0$: $\frac{\sin x}{x} \to 1$ e $\frac{1}{\cos x} \to \frac{1}{1} = 1$. Quindi il limite è $\boxed{1}$.

Equivalentemente: $\tan x \sim x$ per $x \to 0$.

</details>

<details>
<summary>Esercizio 3 — Asintoto orizzontale con radice</summary>

**Testo:** Trovare gli asintoti orizzontali di $f(x) = \dfrac{2x-1}{\sqrt{x^2+1}}$.

**Soluzione:**

Per $x\to+\infty$ ($x>0$, quindi $\sqrt{x^2} = x$):

$$\lim_{x\to+\infty} \frac{2x-1}{\sqrt{x^2+1}} = \lim_{x\to+\infty} \frac{x(2-1/x)}{x\sqrt{1+1/x^2}} = \frac{2-0}{\sqrt{1+0}} = 2$$

Per $x\to-\infty$ ($x<0$, quindi $\sqrt{x^2} = -x$):

$$\lim_{x\to-\infty} \frac{2x-1}{\sqrt{x^2+1}} = \lim_{x\to-\infty} \frac{x(2-1/x)}{-x\sqrt{1+1/x^2}} = \frac{2}{-1} = -2$$

La funzione ha **due asintoti orizzontali**: $y=2$ (per $x\to+\infty$) e $y=-2$ (per $x\to-\infty$).

</details>

<details>
<summary>Esercizio 4 — Asintoto obliquo completo</summary>

**Testo:** Trovare l'asintoto obliquo di $f(x) = \dfrac{x^2 - 3x + 1}{x + 2}$ per $x\to+\infty$.

**Soluzione:**

$$m = \lim_{x\to+\infty} \frac{x^2-3x+1}{x(x+2)} = \lim_{x\to+\infty} \frac{1-3/x+1/x^2}{1+2/x} = 1$$

$$q = \lim_{x\to+\infty} \left[\frac{x^2-3x+1}{x+2} - x\right] = \lim_{x\to+\infty} \frac{x^2-3x+1-x(x+2)}{x+2} = \lim_{x\to+\infty} \frac{-5x+1}{x+2} = -5$$

L'asintoto obliquo è $y = x - 5$.

*Verifica con divisione polinomiale:* $\frac{x^2-3x+1}{x+2} = x - 5 + \frac{11}{x+2}$. Per $x\to+\infty$, il resto $\to 0$. ✓

</details>

<details>
<summary>Esercizio 5 — Equivalenti asintotici</summary>

**Testo:** Calcola $\lim_{x\to 0} \dfrac{e^{2x} - 1}{\sin(3x)}$.

**Soluzione:**

Usiamo gli equivalenti per $x\to 0$: $e^{2x}-1 \sim 2x$ e $\sin(3x) \sim 3x$:

$$\lim_{x\to 0} \frac{e^{2x}-1}{\sin(3x)} = \lim_{x\to 0} \frac{2x}{3x} = \frac{2}{3}$$

*Verifica rigorosa:*

$$\frac{e^{2x}-1}{\sin(3x)} = \frac{e^{2x}-1}{2x} \cdot \frac{3x}{\sin(3x)} \cdot \frac{2}{3} \to 1 \cdot 1 \cdot \frac{2}{3} = \frac{2}{3}$$

Il limite vale $\boxed{\dfrac{2}{3}}$.

</details>

<details>
<summary>Esercizio 6 — Trovare tutti gli asintoti</summary>

**Testo:** Trovare tutti gli asintoti di $f(x) = \dfrac{x^2}{x^2-1}$.

**Soluzione:**

**Asintoti verticali:** il denominatore $x^2-1 = (x-1)(x+1)$ si annulla in $x = \pm 1$.

In $x=1$ e $x=-1$: il numeratore vale $1 \neq 0$, quindi il limite è $\pm\infty$. Entrambe sono asintoti verticali.

**Asintoto orizzontale:**

$$\lim_{x\to\pm\infty} \frac{x^2}{x^2-1} = \lim_{x\to\pm\infty} \frac{1}{1-1/x^2} = 1$$

La retta $y=1$ è asintoto orizzontale (in entrambe le direzioni).

**Asintoto obliquo:** poiché esiste l'asintoto orizzontale, $m = \lim f(x)/x = 0$: non c'è asintoto obliquo separato.

**Riepilogo:** asintoti verticali $x=\pm 1$, asintoto orizzontale $y=1$.

</details>

<details>
<summary>Esercizio 7 — Limite con parametro negativo</summary>

**Testo:** Calcola $\lim_{x\to+\infty} \left(1 - \dfrac{3}{x}\right)^{2x}$.

**Soluzione:**

Questa è la forma $e^a$ con $a = -3$ e l'esponente $2x$ (non $x$).

Usiamo il logaritmo: $L = \lim_{x\to+\infty} 2x \cdot \ln\!\left(1 - \frac{3}{x}\right)$.

Per $x\to+\infty$: $\ln(1-3/x) \sim -3/x$, quindi:

$$L = \lim_{x\to+\infty} 2x \cdot \left(-\frac{3}{x}\right) = -6$$

Il limite originale è $e^L = \boxed{e^{-6}}$.

</details>

<details>
<summary>Esercizio 8 — Limite notevole con coseno</summary>

**Testo:** Calcola $\lim_{x\to 0} \dfrac{1 - \cos(2x)}{x^2}$.

**Soluzione:**

Usiamo il limite notevole $\lim_{t\to 0}\frac{1-\cos t}{t^2} = \frac{1}{2}$ con $t = 2x$:

$$\frac{1-\cos(2x)}{x^2} = \frac{1-\cos(2x)}{(2x)^2} \cdot \frac{(2x)^2}{x^2} = \frac{1-\cos(2x)}{(2x)^2} \cdot 4$$

Per $x\to 0$: $2x\to 0$, quindi $\frac{1-\cos(2x)}{(2x)^2} \to \frac{1}{2}$.

Il limite è $\frac{1}{2} \cdot 4 = \boxed{2}$.

*Alternativa:* usando la formula trigonometrica $1-\cos(2x) = 2\sin^2(x)$:

$$\frac{2\sin^2 x}{x^2} = 2\left(\frac{\sin x}{x}\right)^2 \to 2 \cdot 1^2 = 2$$

</details>

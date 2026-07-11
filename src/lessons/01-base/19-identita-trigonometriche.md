---
id: base-19-identita-trigonometriche
subject: base
topic_it: Trigonometria
topic_en: Trigonometry
title_it: Identità e formule fondamentali
title_en: Trigonometric identities and formulas
level: green
order: 19
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 7 — Identità trigonometriche"
stato: da-rielaborare
---

## Intuizione e motivazione

Un'**identità** è un'equazione vera per ogni valore della variabile. Le identità trigonometriche non sono semplici formule da memorizzare: sono relazioni profonde tra le funzioni trigonometriche, tutte riconducibili alla geometria del cerchio.

Pensa a una tastiera del piano: puoi suonare la stessa nota in ottave diverse, o raggrupparla in accordi. Le identità trigonometriche fanno qualcosa di simile: permettono di **riscrivere** un'espressione in una forma diversa, più semplice o più adatta al contesto. Sono strumenti di trasformazione.

**Dove si usano:**
- Semplificare integrali in analisi matematica (cambio di variabile trigonometrico)
- Comprimere segnali audio e video: la trasformata discreta del coseno (DCT) è alla base di JPEG e MP3
- Analisi di circuiti: sfasamenti tra corrente e tensione
- Dimostrare che due espressioni apparentemente diverse descrivono lo stesso fenomeno fisico

---

## Prerequisiti

- Definizioni di $\sin\theta$, $\cos\theta$, $\tan\theta$ sulla circonferenza goniometrica (lezione 18)
- Identità fondamentale: $\sin^2\theta + \cos^2\theta = 1$
- Simmetrie di base: parità/disparità di seno e coseno
- Algebricamente: prodotti notevoli, scomposizione in fattori

---

## Teoria passo-passo

### Gruppo 1 — Identità pitagoriche

L'identità madre, derivata dal teorema di Pitagora applicato al cerchio unitario:

$$\sin^2\theta + \cos^2\theta = 1$$

Dividendo entrambi i membri per $\cos^2\theta$ (con $\cos\theta \neq 0$):

$$\tan^2\theta + 1 = \sec^2\theta$$

Dividendo entrambi i membri per $\sin^2\theta$ (con $\sin\theta \neq 0$):

$$1 + \cot^2\theta = \csc^2\theta$$

### Gruppo 2 — Simmetrie e angoli associati

**Parità e disparità:**
$$\sin(-\theta) = -\sin\theta \qquad \cos(-\theta) = \cos\theta \qquad \tan(-\theta) = -\tan\theta$$

**Supplementari** ($\pi - \theta$):
$$\sin(\pi - \theta) = \sin\theta \qquad \cos(\pi - \theta) = -\cos\theta$$

**Complementari** ($\pi/2 - \theta$) — le co-funzioni:
$$\sin\!\left(\frac{\pi}{2} - \theta\right) = \cos\theta \qquad \cos\!\left(\frac{\pi}{2} - \theta\right) = \sin\theta$$

**Simmetria rispetto a $\pi$:**
$$\sin(\theta + \pi) = -\sin\theta \qquad \cos(\theta + \pi) = -\cos\theta$$

### Gruppo 3 — Formule di addizione

Queste formule permettono di calcolare seno e coseno della somma o differenza di due angoli a partire dai valori dei singoli angoli:

$$\sin(\alpha \pm \beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta$$

$$\cos(\alpha \pm \beta) = \cos\alpha\cos\beta \mp \sin\alpha\sin\beta$$

$$\tan(\alpha \pm \beta) = \frac{\tan\alpha \pm \tan\beta}{1 \mp \tan\alpha\tan\beta}$$

**Come ricordare il segno di $\cos$:** i segni si **invertono** rispetto a quello dell'argomento. Per $\cos(\alpha + \beta)$ si usa la differenza dei prodotti; per $\cos(\alpha - \beta)$ si usa la somma.

### Gruppo 4 — Formule di duplicazione

Si ottengono ponendo $\beta = \alpha$ nelle formule di addizione:

$$\sin 2\alpha = 2\sin\alpha\cos\alpha$$

$$\cos 2\alpha = \cos^2\alpha - \sin^2\alpha$$

Usando l'identità pitagorica, il coseno doppio ha tre forme equivalenti:

$$\cos 2\alpha = 2\cos^2\alpha - 1 = 1 - 2\sin^2\alpha$$

$$\tan 2\alpha = \frac{2\tan\alpha}{1 - \tan^2\alpha}$$

### Gruppo 5 — Formule di bisezione (o abbassamento di grado)

Dalle forme del $\cos 2\alpha$, isolando $\sin^2$ e $\cos^2$:

$$\sin^2\alpha = \frac{1 - \cos 2\alpha}{2} \qquad \cos^2\alpha = \frac{1 + \cos 2\alpha}{2}$$

Sono fondamentali per calcolare integrali di $\sin^2$ e $\cos^2$.

### Gruppo 6 — Formule prostaferetiche (somma-prodotto)

**Prodotto → Somma:**

$$\sin\alpha\cos\beta = \frac{1}{2}[\sin(\alpha+\beta) + \sin(\alpha-\beta)]$$

$$\cos\alpha\cos\beta = \frac{1}{2}[\cos(\alpha-\beta) + \cos(\alpha+\beta)]$$

$$\sin\alpha\sin\beta = \frac{1}{2}[\cos(\alpha-\beta) - \cos(\alpha+\beta)]$$

**Somma → Prodotto:**

$$\sin p + \sin q = 2\sin\frac{p+q}{2}\cos\frac{p-q}{2}$$

$$\cos p + \cos q = 2\cos\frac{p+q}{2}\cos\frac{p-q}{2}$$

$$\cos p - \cos q = -2\sin\frac{p+q}{2}\sin\frac{p-q}{2}$$

---

## Derivazione commentata

**Dimostrazione della formula di addizione: $\cos(\alpha - \beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta$**

Considera due punti sulla circonferenza unitaria:
- $A = (\cos\alpha, \sin\alpha)$ — punto corrispondente all'angolo $\alpha$
- $B = (\cos\beta, \sin\beta)$ — punto corrispondente all'angolo $\beta$

La distanza al quadrato tra $A$ e $B$ usando la formula della distanza:

$$\lvert AB \rvert^2 = (\cos\alpha - \cos\beta)^2 + (\sin\alpha - \sin\beta)^2$$

Espandendo:

$$= \cos^2\alpha - 2\cos\alpha\cos\beta + \cos^2\beta + \sin^2\alpha - 2\sin\alpha\sin\beta + \sin^2\beta$$

Usando $\sin^2 + \cos^2 = 1$ due volte:

$$= 1 + 1 - 2(\cos\alpha\cos\beta + \sin\alpha\sin\beta) = 2 - 2(\cos\alpha\cos\beta + \sin\alpha\sin\beta)$$

D'altra parte, l'angolo tra $A$ e $B$ è $\alpha - \beta$. La legge del coseno in un triangolo isoscele (con due lati di lunghezza 1, angolo al centro $\alpha - \beta$) dà:

$$\lvert AB \rvert^2 = 2 - 2\cos(\alpha - \beta)$$

Uguagliando le due espressioni:

$$\boxed{\cos(\alpha - \beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta}$$

Tutte le altre formule di addizione si ricavano da questa sostituendo $\beta \to -\beta$ e usando $\sin(-\beta) = -\sin\beta$, $\cos(-\beta) = \cos\beta$.

---

## Esempi graduati

**Esempio 1 — Calcolo esatto con formula di addizione**

Calcolare $\sin 75°$ esattamente.

$75° = 45° + 30°$

$$\sin 75° = \sin 45°\cos 30° + \cos 45°\sin 30° = \frac{\sqrt{2}}{2}\cdot\frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2}\cdot\frac{1}{2} = \frac{\sqrt{6}+\sqrt{2}}{4}$$

**Esempio 2 — Calcolo di $\cos 15°$**

$15° = 45° - 30°$

$$\cos 15° = \cos 45°\cos 30° + \sin 45°\sin 30° = \frac{\sqrt{2}}{2}\cdot\frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2}\cdot\frac{1}{2} = \frac{\sqrt{6}+\sqrt{2}}{4}$$

Interessante: $\sin 75° = \cos 15°$. È previsto dalla formula delle co-funzioni: $\sin(90° - \theta) = \cos\theta$.

**Esempio 3 — Formula di duplicazione**

Sapendo che $\cos\alpha = -\dfrac{1}{3}$ con $\pi/2 < \alpha < \pi$, calcolare $\sin 2\alpha$ e $\cos 2\alpha$.

$\sin^2\alpha = 1 - 1/9 = 8/9$; nel II quadrante $\sin\alpha > 0$: $\sin\alpha = \dfrac{2\sqrt{2}}{3}$.

$$\sin 2\alpha = 2\sin\alpha\cos\alpha = 2 \cdot \frac{2\sqrt{2}}{3} \cdot \left(-\frac{1}{3}\right) = -\frac{4\sqrt{2}}{9}$$

$$\cos 2\alpha = 2\cos^2\alpha - 1 = 2 \cdot \frac{1}{9} - 1 = -\frac{7}{9}$$

**Esempio 4 — Abbassamento di grado**

Esprimere $\cos^2\theta - \sin^2\theta$ come funzione di $2\theta$.

Dalla formula di duplicazione: $\cos 2\theta = \cos^2\theta - \sin^2\theta$.

Quindi la risposta è semplicemente $\cos 2\theta$.

**Esempio 5 — Dimostrazione di identità**

Dimostrare che $\dfrac{\sin 2\theta}{1 + \cos 2\theta} = \tan\theta$.

Numeratore: $\sin 2\theta = 2\sin\theta\cos\theta$.

Denominatore: $1 + \cos 2\theta = 1 + (1 - 2\sin^2\theta) = 2\cos^2\theta$.

Alternativamente: $1 + \cos 2\theta = 2\cos^2\theta$ (dalla formula di bisezione).

$$\frac{2\sin\theta\cos\theta}{2\cos^2\theta} = \frac{\sin\theta}{\cos\theta} = \tan\theta \quad \checkmark$$

**Esempio 6 — Formula prostaferetic**

Scrivere $\sin 5x + \sin 3x$ come prodotto.

$$\sin 5x + \sin 3x = 2\sin\frac{5x+3x}{2}\cos\frac{5x-3x}{2} = 2\sin 4x \cos x$$

**Esempio 7 — Applicazione alle formule di bisezione**

Calcolare $\cos^2(\pi/8)$.

$$\cos^2\frac{\pi}{8} = \frac{1 + \cos(2 \cdot \pi/8)}{2} = \frac{1 + \cos(\pi/4)}{2} = \frac{1 + \sqrt{2}/2}{2} = \frac{2 + \sqrt{2}}{4}$$

---

## Grafico

```plot
{
  "title": "sin²(x) + cos²(x) = 1 (identità pitagorica)",
  "fn": "Math.pow(Math.sin(x), 2)",
  "fn2": "Math.pow(Math.cos(x), 2)",
  "domain": [-6.28, 6.28],
  "yDomain": [-0.2, 1.5],
  "label1": "sin²(x)",
  "label2": "cos²(x)"
}
```

Nota visivamente che le due curve si "completano" a vicenda: quando $\sin^2(x)$ è grande, $\cos^2(x)$ è piccolo, e la loro somma è sempre 1. Questo è il significato geometrico dell'identità pitagorica.

---

## Elemento interattivo

```slider
{
  "title": "Formula di duplicazione: sin(2x) vs 2·sin(x)·cos(x)",
  "fn": "Math.sin(2 * x)",
  "domain": [-6.28, 6.28],
  "yDomain": [-1.5, 1.5],
  "pname": "a",
  "pmin": 0.5,
  "pmax": 4,
  "pdefault": 1,
  "pstep": 0.5,
  "plabel": "Frequenza (sin(a·2x))",
  "label1": "sin(2·a·x)"
}
```

Il grafico mostra $\sin(2ax)$: al variare di $a$, la frequenza raddoppia rispetto a $\sin(ax)$ (formula di duplicazione). Prova $a=1$: ottieni $\sin(2x)$, che ha periodo $\pi$ invece di $2\pi$.

---

## Errori comuni

**Errore 1 — Distribuire il seno su una somma**

Scrivere $\sin(\alpha + \beta) = \sin\alpha + \sin\beta$. È profondamente sbagliato. La formula corretta è $\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$. Verifica: $\sin(30° + 30°) = \sin 60° = \sqrt{3}/2$, ma $\sin 30° + \sin 30° = 1 \neq \sqrt{3}/2$.

**Errore 2 — Sbagliare il segno nel $\cos$ di addizione**

$\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta$ (non $+$!). I segni sono opposti rispetto alla formula del seno. Un modo per ricordarlo: il coseno "sottrae".

**Errore 3 — Dimenticare le tre forme di $\cos 2\alpha$**

Esiste solo una formula corretta, ma ha tre espressioni equivalenti. Se devi semplificare un'espressione con $\sin^2$ e $\cos^2$, scegli la forma più conveniente:
- $\cos^2\alpha - \sin^2\alpha$ (se hai entrambe)
- $2\cos^2\alpha - 1$ (se vuoi eliminare il seno)
- $1 - 2\sin^2\alpha$ (se vuoi eliminare il coseno)

**Errore 4 — Confondere le formule di bisezione**

$\sin^2\alpha = \dfrac{1 - \cos 2\alpha}{2}$ (segno meno) ma $\cos^2\alpha = \dfrac{1 + \cos 2\alpha}{2}$ (segno più). Un modo: $\cos^2$ ha il segno **più** perché il coseno è massimo in 0 (dove anche $\cos^2$ è massimo).

**Errore 5 — Applicare le identità fuori dal dominio**

La formula $\tan^2\theta + 1 = \sec^2\theta$ vale solo dove $\cos\theta \neq 0$. Usarla per $\theta = \pi/2$ è un errore: entrambi i membri sono indefiniti.

**Errore 6 — Pensare che dimostrazione di identità = equazione**

Quando si dimostra un'identità, non si sommano o sottraggono termini dai due membri. Si trasforma solo un membro (solitamente il più complesso) fino ad ottenere l'altro.

**Errore 7 — Sbagliare la formula prostaferetic**

$\sin p + \sin q = 2\sin\dfrac{p+q}{2}\cos\dfrac{p-q}{2}$: le frazioni sono $\dfrac{p+q}{2}$ e $\dfrac{p-q}{2}$, non $p+q$ e $p-q$.

---

## Applicazioni reali

**Compressione JPEG e MP3.** Queste formule sono alla base della **Trasformata Discreta del Coseno (DCT)**, l'algoritmo che comprime immagini e audio. Un'immagine viene scomposta in somme di coseni a diverse frequenze (usando le formule di addizione e prostaferetics). I componenti a frequenza alta (non percettibili dall'occhio) vengono scartati, ottenendo una compressione con minima perdita di qualità percepita.

**Sintesi di suoni.** Un sintetizzatore musicale genera suoni complessi sommando onde sinusoidali. La formula $2\sin\alpha\cos\beta = \sin(\alpha+\beta) + \sin(\alpha-\beta)$ spiega il fenomeno dei **battimenti**: due note vicine in frequenza producono un terzo suono pulsante alla frequenza differenza. I costruttori di pianoforti sfruttano questo per accordare le corde.

**Analisi degli stress nelle strutture.** In ingegneria civile, le tensioni in un materiale (trave, pilastro) si trasformano con le formule di addizione e duplicazione quando si cambia il sistema di riferimento (rotazione degli assi). Il **cerchio di Mohr**, usato dagli ingegneri per calcolare tensioni massime e minime, è la visualizzazione geometrica di queste identità trigonometriche.

---

## Riepilogo tabellare

| Gruppo | Formula | Note |
| --- | --- | --- |
| Pitagorica | $\sin^2\theta + \cos^2\theta = 1$ | sempre valida |
| Pitagorica | $\tan^2\theta + 1 = \sec^2\theta$ | per $\cos\theta \neq 0$ |
| Pitagorica | $1 + \cot^2\theta = \csc^2\theta$ | per $\sin\theta \neq 0$ |
| Addizione sin | $\sin(\alpha \pm \beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta$ | segni concordi |
| Addizione cos | $\cos(\alpha \pm \beta) = \cos\alpha\cos\beta \mp \sin\alpha\sin\beta$ | segni discordi |
| Duplicazione | $\sin 2\alpha = 2\sin\alpha\cos\alpha$ | da addizione con $\beta=\alpha$ |
| Duplicazione | $\cos 2\alpha = \cos^2\alpha - \sin^2\alpha = 2\cos^2\alpha - 1 = 1 - 2\sin^2\alpha$ | 3 forme equivalenti |
| Bisezione | $\sin^2\alpha = \dfrac{1 - \cos 2\alpha}{2}$ | abbassa il grado |
| Bisezione | $\cos^2\alpha = \dfrac{1 + \cos 2\alpha}{2}$ | abbassa il grado |

---

## Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Calcolo esatto con addizione</summary>

Calcolare esattamente $\sin 105°$ e $\cos 105°$.

**Soluzione:**

$105° = 60° + 45°$

$\sin 105° = \sin 60°\cos 45° + \cos 60°\sin 45° = \dfrac{\sqrt{3}}{2}\cdot\dfrac{\sqrt{2}}{2} + \dfrac{1}{2}\cdot\dfrac{\sqrt{2}}{2} = \dfrac{\sqrt{6}+\sqrt{2}}{4}$

$\cos 105° = \cos 60°\cos 45° - \sin 60°\sin 45° = \dfrac{1}{2}\cdot\dfrac{\sqrt{2}}{2} - \dfrac{\sqrt{3}}{2}\cdot\dfrac{\sqrt{2}}{2} = \dfrac{\sqrt{2}-\sqrt{6}}{4}$

</details>

<details>
<summary>Esercizio 2 — Duplicazione da valori noti</summary>

Sapendo che $\tan\alpha = 2$ con $\alpha$ nel I quadrante, calcolare $\sin 2\alpha$, $\cos 2\alpha$, $\tan 2\alpha$.

**Soluzione:**

Da $\tan\alpha = 2$: $\sin\alpha = 2/\sqrt{5}$, $\cos\alpha = 1/\sqrt{5}$ (nel I quad., entrambi positivi).

$\sin 2\alpha = 2\sin\alpha\cos\alpha = 2 \cdot \dfrac{2}{\sqrt{5}} \cdot \dfrac{1}{\sqrt{5}} = \dfrac{4}{5}$

$\cos 2\alpha = \cos^2\alpha - \sin^2\alpha = \dfrac{1}{5} - \dfrac{4}{5} = -\dfrac{3}{5}$

$\tan 2\alpha = \dfrac{2\tan\alpha}{1-\tan^2\alpha} = \dfrac{4}{1-4} = -\dfrac{4}{3}$

</details>

<details>
<summary>Esercizio 3 — Dimostrare un'identità</summary>

Dimostrare che $\dfrac{1 - \cos 2\theta}{\sin 2\theta} = \tan\theta$.

**Soluzione:**

Numeratore: $1 - \cos 2\theta = 2\sin^2\theta$ (formula di bisezione).

Denominatore: $\sin 2\theta = 2\sin\theta\cos\theta$.

$$\frac{2\sin^2\theta}{2\sin\theta\cos\theta} = \frac{\sin\theta}{\cos\theta} = \tan\theta \quad \checkmark$$

</details>

<details>
<summary>Esercizio 4 — Bisezione</summary>

Calcolare $\sin^2(5\pi/12)$ usando le formule di bisezione.

**Soluzione:**

$\dfrac{5\pi}{12} = \dfrac{5\pi}{12}$. Uso $\sin^2\alpha = \dfrac{1 - \cos 2\alpha}{2}$ con $\alpha = 5\pi/12$, quindi $2\alpha = 5\pi/6$.

$$\sin^2\frac{5\pi}{12} = \frac{1 - \cos(5\pi/6)}{2} = \frac{1 - (-\sqrt{3}/2)}{2} = \frac{1 + \sqrt{3}/2}{2} = \frac{2+\sqrt{3}}{4}$$

</details>

<details>
<summary>Esercizio 5 — Formula prostaferetic</summary>

Trasformare in prodotto: $\cos 3x - \cos 7x$.

**Soluzione:**

$$\cos 3x - \cos 7x = -2\sin\frac{3x+7x}{2}\sin\frac{3x-7x}{2} = -2\sin 5x \sin(-2x) = 2\sin 5x \sin 2x$$

</details>

<details>
<summary>Esercizio 6 — Identità combinata</summary>

Semplificare $(\sin\theta + \cos\theta)^2$.

**Soluzione:**

$$(\sin\theta + \cos\theta)^2 = \sin^2\theta + 2\sin\theta\cos\theta + \cos^2\theta = 1 + \sin 2\theta$$

</details>

<details>
<summary>Esercizio 7 — Applicazione della formula di addizione a tan</summary>

Calcolare $\tan(7\pi/12)$ esattamente.

**Soluzione:**

$7\pi/12 = \pi/3 + \pi/4 = 60° + 45°$

$$\tan\frac{7\pi}{12} = \frac{\tan(\pi/3)+\tan(\pi/4)}{1 - \tan(\pi/3)\tan(\pi/4)} = \frac{\sqrt{3}+1}{1-\sqrt{3}} = \frac{(\sqrt{3}+1)(1+\sqrt{3})}{(1-\sqrt{3})(1+\sqrt{3})} = \frac{4+2\sqrt{3}}{1-3} = -(2+\sqrt{3})$$

</details>

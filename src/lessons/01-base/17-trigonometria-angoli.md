---
id: base-17-trigonometria-angoli
subject: base
topic_it: Trigonometria
topic_en: Trigonometry
title_it: Angoli, radianti e circonferenza goniometrica
title_en: Angles, radians and the unit circle
level: green
order: 17
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 7 — Trigonometria"
stato: da-rielaborare
---

## Intuizione e motivazione

Immagina di guardare le lancette di un orologio. Quando la lancetta dei minuti compie un giro completo, torna esattamente al punto di partenza. Gli angoli descrivono esattamente questo: **quanta rotazione** è avvenuta, indipendentemente da quanto è lunga la lancetta.

Ma i gradi (°) sono una scelta arbitraria: dividere il cerchio in 360 parti deriva dall'astronomia babilonese, legata all'anno solare. I **radianti** sono invece la misura "naturale" degli angoli: nascono direttamente dal rapporto tra l'arco percorso e il raggio del cerchio. Per questo motivo, in matematica avanzata, fisica e ingegneria, si usano quasi sempre i radianti.

**Dove si incontra nella realtà:**
- Navigazione e GPS: posizioni sulla Terra descritte con angoli (latitudine, longitudine)
- Ingegneria meccanica: velocità angolare dei motori in rad/s
- Fisica delle onde: la frequenza angolare $\omega$ di un'onda sonora o luminosa è in rad/s
- Robotica: i servomotori ricevono comandi in radianti

---

## Prerequisiti

- Conoscenza del piano cartesiano (coordinate $x$, $y$)
- Concetto di circonferenza e raggio $r$
- Nozione di proporzione e conversione tra unità di misura
- Teorema di Pitagora (per la sezione successiva)

---

## Teoria passo-passo

### Misura degli angoli in gradi

Il **grado** (simbolo °) divide la rotazione completa in **360 parti uguali**. Questa scelta è convenzione storica:
- Angolo piatto: 180°
- Angolo retto: 90°
- Rotazione completa: 360°

### Misura degli angoli in radianti

Un angolo di **1 radiante** è l'angolo al centro di un cerchio che sottende un arco di lunghezza **uguale al raggio**.

$$\theta \text{ [rad]} = \frac{\text{lunghezza arco}}{\text{raggio}} = \frac{l}{r}$$

Poiché la **circonferenza intera** ha lunghezza $2\pi r$, una rotazione completa corrisponde a:

$$\theta = \frac{2\pi r}{r} = 2\pi \text{ rad}$$

Quindi: **360° = $2\pi$ rad**, ovvero **180° = $\pi$ rad**.

### Formula di conversione

$$\theta \text{ [rad]} = \theta \text{ [°]} \cdot \frac{\pi}{180°}$$

$$\theta \text{ [°]} = \theta \text{ [rad]} \cdot \frac{180°}{\pi}$$

**Come ricordarlo:** moltiplica per $\dfrac{\pi}{180}$ per andare da gradi a radianti; dividi per la stessa frazione (o moltiplica per $\dfrac{180}{\pi}$) per fare il contrario.

### Angoli notevoli

| Gradi | Radianti | Note |
| --- | --- | --- |
| 0° | $0$ | punto di partenza |
| 30° | $\pi/6$ | un sesto di $\pi$ |
| 45° | $\pi/4$ | un quarto di $\pi$ |
| 60° | $\pi/3$ | un terzo di $\pi$ |
| 90° | $\pi/2$ | angolo retto |
| 120° | $2\pi/3$ | — |
| 135° | $3\pi/4$ | — |
| 150° | $5\pi/6$ | — |
| 180° | $\pi$ | angolo piatto |
| 270° | $3\pi/2$ | — |
| 360° | $2\pi$ | rotazione completa |

### La circonferenza goniometrica

La **circonferenza goniometrica** (o unitaria) è la circonferenza di raggio $r = 1$ centrata nell'origine. È lo strumento fondamentale per definire le funzioni trigonometriche.

Ogni angolo $\theta$ (misurato in senso **antiorario** dall'asse $x$ positivo) individua un unico punto $P$ sulla circonferenza, con coordinate:

$$P = (\cos\theta,\; \sin\theta)$$

Questo è in realtà la **definizione** di seno e coseno — ma ci torneremo nella lezione successiva.

**Periodicità:** poiché la circonferenza si chiude su se stessa, gli angoli $\theta$ e $\theta + 2k\pi$ (con $k$ intero) individuano lo **stesso punto**. Le funzioni trigonometriche sono quindi **periodiche di periodo $2\pi$**:

$$\cos(\theta + 2k\pi) = \cos\theta \qquad \sin(\theta + 2k\pi) = \sin\theta$$

### I quattro quadranti

Il piano cartesiano è diviso in quattro quadranti dal punto di vista dell'angolo $\theta$:

| Quadrante | Intervallo di $\theta$ | Segno di $x = \cos\theta$ | Segno di $y = \sin\theta$ |
| --- | --- | --- | --- |
| I | $0 < \theta < \pi/2$ | $+$ | $+$ |
| II | $\pi/2 < \theta < \pi$ | $-$ | $+$ |
| III | $\pi < \theta < 3\pi/2$ | $-$ | $-$ |
| IV | $3\pi/2 < \theta < 2\pi$ | $+$ | $-$ |

### Arco e settore circolare

Per un cerchio di raggio $r$ con angolo al centro $\theta$ (in **radianti**):

$$\text{Lunghezza arco} = r\theta$$

$$\text{Area del settore} = \frac{1}{2}r^2\theta$$

**Nota:** queste formule funzionano **solo se $\theta$ è in radianti**. Se l'angolo è in gradi, convertilo prima.

---

## Derivazione commentata

**Perché l'area del settore è $\frac{1}{2}r^2\theta$?**

L'area dell'intera circonferenza (disco) è $\pi r^2$. Un settore con angolo $\theta$ è una "fetta di torta" che occupa la frazione $\dfrac{\theta}{2\pi}$ dell'intero cerchio:

$$A_{\text{settore}} = \pi r^2 \cdot \frac{\theta}{2\pi} = \frac{r^2 \theta}{2} = \frac{1}{2}r^2\theta$$

La formula è coerente: per $\theta = 2\pi$ (cerchio completo) si ottiene $A = \pi r^2$. ✓

---

## Esempi graduati

**Esempio 1 — Conversione semplice (da gradi a radianti)**

Convertire 45° in radianti.

$$45° \cdot \frac{\pi}{180°} = \frac{45\pi}{180} = \frac{\pi}{4}$$

**Esempio 2 — Conversione semplice (da radianti a gradi)**

Convertire $\dfrac{2\pi}{3}$ in gradi.

$$\frac{2\pi}{3} \cdot \frac{180°}{\pi} = \frac{2 \cdot 180°}{3} = 120°$$

**Esempio 3 — Angolo non notevole**

Convertire 100° in radianti (risultato approssimato).

$$100° \cdot \frac{\pi}{180°} = \frac{100\pi}{180} = \frac{5\pi}{9} \approx 1{,}745 \text{ rad}$$

**Esempio 4 — Lunghezza di arco**

Un settore ha raggio $r = 6$ cm e angolo al centro $\theta = 60° = \pi/3$ rad. Calcola la lunghezza dell'arco.

$$l = r\theta = 6 \cdot \frac{\pi}{3} = 2\pi \approx 6{,}28 \text{ cm}$$

**Esempio 5 — Area del settore**

Con gli stessi dati dell'esempio 4, calcola l'area del settore.

$$A = \frac{1}{2}r^2\theta = \frac{1}{2} \cdot 36 \cdot \frac{\pi}{3} = 6\pi \approx 18{,}85 \text{ cm}^2$$

**Esempio 6 — Trovare il quadrante**

In quale quadrante si trova $\theta = \dfrac{7\pi}{5}$?

$\dfrac{7\pi}{5} = 1{,}4\pi$. Poiché $\pi < 1{,}4\pi < \dfrac{3\pi}{2} = 1{,}5\pi$, l'angolo è nel **III quadrante**.

**Esempio 7 — Angolo equivalente**

Trovare l'angolo equivalente in $[0, 2\pi)$ di $\theta = \dfrac{25\pi}{4}$.

$\dfrac{25\pi}{4} = 6\pi + \dfrac{\pi}{4} = 3 \cdot 2\pi + \dfrac{\pi}{4}$.

Quindi l'angolo equivalente è $\dfrac{\pi}{4}$ (I quadrante).

**Esempio 8 — Velocità angolare**

Una ruota gira a 3 giri al secondo. Qual è la sua velocità angolare in rad/s?

Un giro = $2\pi$ rad. Quindi $\omega = 3 \cdot 2\pi = 6\pi \approx 18{,}85$ rad/s.

---

## Grafico

```plot
{
  "title": "sin(x) e cos(x) — variazione con l'angolo θ",
  "fn": "Math.sin(x)",
  "fn2": "Math.cos(x)",
  "domain": [-6.28, 6.28],
  "yDomain": [-1.5, 1.5],
  "label1": "sin(θ)",
  "label2": "cos(θ)"
}
```

Il grafico mostra come le coordinate del punto $P = (\cos\theta, \sin\theta)$ sulla circonferenza goniometrica variano al variare di $\theta$ da $-2\pi$ a $2\pi$. Nota il comportamento periodico: entrambe le funzioni si ripetono ogni $2\pi$.

---

## Elemento interattivo

```slider
{
  "title": "Velocità angolare: effetto della frequenza",
  "fn": "Math.sin(f * x)",
  "domain": [-6.28, 6.28],
  "yDomain": [-1.5, 1.5],
  "pname": "f",
  "pmin": 0.5,
  "pmax": 4,
  "pdefault": 1,
  "pstep": 0.5,
  "plabel": "Frequenza angolare f",
  "label1": "sin(f·θ)"
}
```

Muovi lo slider per aumentare la **frequenza angolare** $f$. Nota come il seno completa più cicli nello stesso intervallo: l'onda si "comprime". Nella fisica, questo corrisponde a un suono di frequenza più alta (tono più acuto).

---

## Errori comuni

**Errore 1 — Confondere gradi e radianti**

Scrivere $\sin(90)$ su una calcolatrice in modalità radianti dà $\sin(90 \text{ rad}) \neq 1$. Bisogna usare $\sin(\pi/2) = 1$ oppure passare la calcolatrice in modalità gradi.

**Errore 2 — Dimenticare di convertire prima di usare le formule**

La formula $l = r\theta$ vale **solo se $\theta$ è in radianti**. Usarla con $\theta$ in gradi dà un risultato sbagliato. Esempio: $l = 5 \cdot 60°$ è privo di senso dimensionale.

**Errore 3 — Credere che i radianti abbiano unità di misura**

Il radiante è **adimensionale** (è un rapporto tra due lunghezze: arco/raggio). Scrivere "rad" è una convenzione per chiarezza, non un'unità fisica.

**Errore 4 — Sbagliare il senso di rotazione**

Per convenzione, gli angoli si misurano in senso **antiorario** dall'asse $x$ positivo. Un angolo negativo indica una rotazione **oraria**.

**Errore 5 — Pensare che ogni angolo corrisponda a un unico punto sulla circonferenza (e viceversa)**

Un punto sulla circonferenza corrisponde a **infiniti** angoli: $\theta$, $\theta + 2\pi$, $\theta + 4\pi$, ecc. La relazione "angolo → punto" è molti-a-uno.

**Errore 6 — Sbagliare la formula $A = \frac{1}{2}r^2\theta$**

Confonderla con $A = r^2\theta$ (senza il fattore $\frac{1}{2}$). Ricorda: è analoga all'area del triangolo $\frac{1}{2} \cdot base \cdot altezza$.

---

## Applicazioni reali

**GPS e navigazione.** La Terra è approssimativamente sferica, e le posizioni si esprimono in gradi di latitudine e longitudine. Ma i calcoli della distanza tra due punti (formula dell'emisenoverso, usata dai sistemi GPS) richiedono gli angoli in radianti. Ogni grado di latitudine corrisponde a circa 111 km di arco.

**Fisica delle onde e ingegneria audio.** Un suono di frequenza $f$ Hz completa $f$ oscillazioni al secondo. In termini angolari, la frequenza angolare è $\omega = 2\pi f$ rad/s. Le equazioni d'onda — ad esempio la pressione dell'aria in un altoparlante — si scrivono come $p(t) = A\sin(\omega t + \phi)$, dove tutti gli angoli sono in radianti. Senza questa conversione, le formule della fisica non funzionano.

**Meccanica e robotica.** I servomotori e i motori elettrici sono controllati tramite velocità angolare $\omega$ (rad/s) e accelerazione angolare $\alpha$ (rad/s²). La relazione tra velocità lineare $v$ del bordo di una ruota e velocità angolare è $v = \omega r$, dove $r$ è il raggio. Questa formula elegante esiste proprio perché il radiante è adimensionale.

---

## Riepilogo tabellare

| Concetto | Formula | Note |
| --- | --- | --- |
| Gradi → Radianti | $\theta_{\text{rad}} = \theta_° \cdot \dfrac{\pi}{180}$ | moltiplica per $\pi/180$ |
| Radianti → Gradi | $\theta_° = \theta_{\text{rad}} \cdot \dfrac{180}{\pi}$ | moltiplica per $180/\pi$ |
| Angolo completo | $2\pi \text{ rad} = 360°$ | definizione base |
| Lunghezza arco | $l = r\theta$ | $\theta$ in radianti |
| Area settore | $A = \dfrac{1}{2}r^2\theta$ | $\theta$ in radianti |
| Periodicità | $\theta \equiv \theta + 2k\pi$ | stesso punto su cerchio |

---

## Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Conversione gradi–radianti</summary>

Convertire in radianti: 135°, 270°, 315°. Convertire in gradi: $\dfrac{5\pi}{4}$, $\dfrac{7\pi}{6}$, $\dfrac{11\pi}{3}$.

**Soluzione:**

$135° = 135 \cdot \dfrac{\pi}{180} = \dfrac{3\pi}{4}$

$270° = 270 \cdot \dfrac{\pi}{180} = \dfrac{3\pi}{2}$

$315° = 315 \cdot \dfrac{\pi}{180} = \dfrac{7\pi}{4}$

$\dfrac{5\pi}{4} \cdot \dfrac{180°}{\pi} = 225°$

$\dfrac{7\pi}{6} \cdot \dfrac{180°}{\pi} = 210°$

$\dfrac{11\pi}{3} \cdot \dfrac{180°}{\pi} = 660°$ (che equivale a $660° - 360° = 300°$ nella prima rotazione)

</details>

<details>
<summary>Esercizio 2 — Arco e settore</summary>

Un settore circolare ha raggio 5 cm e angolo al centro 72°. Trovare la lunghezza dell'arco e l'area del settore.

**Soluzione:**

Prima converto: $72° = 72 \cdot \dfrac{\pi}{180} = \dfrac{2\pi}{5}$ rad.

Lunghezza arco: $l = r\theta = 5 \cdot \dfrac{2\pi}{5} = 2\pi \approx 6{,}28$ cm.

Area settore: $A = \dfrac{1}{2}r^2\theta = \dfrac{1}{2} \cdot 25 \cdot \dfrac{2\pi}{5} = 5\pi \approx 15{,}71$ cm².

</details>

<details>
<summary>Esercizio 3 — Quadrante e angolo equivalente</summary>

Determinare il quadrante e l'angolo equivalente in $[0, 2\pi)$ per: (a) $\dfrac{11\pi}{6}$, (b) $-\dfrac{\pi}{3}$, (c) $\dfrac{17\pi}{4}$.

**Soluzione:**

(a) $\dfrac{11\pi}{6} \approx 1{,}83\pi$. Poiché $\dfrac{3\pi}{2} < \dfrac{11\pi}{6} < 2\pi$, siamo nel **IV quadrante**. Già in $[0, 2\pi)$.

(b) $-\dfrac{\pi}{3}$: angolo negativo = rotazione oraria. Angolo equivalente: $-\dfrac{\pi}{3} + 2\pi = \dfrac{5\pi}{3}$. Siamo nel **IV quadrante**.

(c) $\dfrac{17\pi}{4} = 4\pi + \dfrac{\pi}{4} = 2 \cdot 2\pi + \dfrac{\pi}{4}$. Angolo equivalente: $\dfrac{\pi}{4}$, nel **I quadrante**.

</details>

<details>
<summary>Esercizio 4 — Velocità angolare</summary>

La Terra compie una rotazione completa in 24 ore. Calcola la velocità angolare $\omega$ in rad/s e la velocità lineare di un punto sull'equatore (raggio terrestre $R = 6371$ km).

**Soluzione:**

Una rotazione = $2\pi$ rad in $T = 24 \cdot 3600 = 86400$ s.

$$\omega = \frac{2\pi}{86400} \approx 7{,}27 \times 10^{-5} \text{ rad/s}$$

Velocità lineare all'equatore:

$$v = \omega R = 7{,}27 \times 10^{-5} \cdot 6{,}371 \times 10^6 \approx 463 \text{ m/s} \approx 1667 \text{ km/h}$$

</details>

<details>
<summary>Esercizio 5 — Angolo da arco e raggio</summary>

Un arco di lunghezza $l = 12$ cm appartiene a una circonferenza di raggio $r = 8$ cm. Qual è l'angolo al centro in radianti e in gradi?

**Soluzione:**

$$\theta = \frac{l}{r} = \frac{12}{8} = 1{,}5 \text{ rad}$$

In gradi: $1{,}5 \cdot \dfrac{180°}{\pi} = \dfrac{270°}{\pi} \approx 85{,}94°$.

</details>

<details>
<summary>Esercizio 6 — Settore con area nota</summary>

Un settore circolare ha area $A = 18\pi$ cm² e raggio $r = 6$ cm. Trova l'angolo al centro.

**Soluzione:**

Dalla formula $A = \dfrac{1}{2}r^2\theta$:

$$\theta = \frac{2A}{r^2} = \frac{2 \cdot 18\pi}{36} = \pi \text{ rad} = 180°$$

Il settore è un semicerchio.

</details>

<details>
<summary>Esercizio 7 — Problema misto</summary>

Due ingranaggi sono collegati da una cinghia. Il primo ha raggio $r_1 = 4$ cm e gira a $\omega_1 = 3\pi$ rad/s. Il secondo ha raggio $r_2 = 12$ cm. Qual è la velocità angolare $\omega_2$ del secondo ingranaggio?

**Soluzione:**

La velocità lineare della cinghia è la stessa per i due ingranaggi: $v = \omega_1 r_1 = \omega_2 r_2$.

$$\omega_2 = \frac{\omega_1 r_1}{r_2} = \frac{3\pi \cdot 4}{12} = \pi \text{ rad/s}$$

Il secondo ingranaggio è più grande, quindi gira più lentamente.

</details>

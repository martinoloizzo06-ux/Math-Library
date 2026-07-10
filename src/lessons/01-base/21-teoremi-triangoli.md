---
id: base-21-teoremi-triangoli
subject: base
topic_it: Trigonometria
topic_en: Trigonometry
title_it: Teoremi sui triangoli (seni e coseno)
title_en: Triangle theorems (law of sines and cosines)
level: green
order: 21
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 7 — Triangoli"
---

## Intuizione e motivazione

Immagina di dover calcolare la distanza tra due punti inaccessibili: due cime montuose, due navi in mare, o la distanza tra due stelle. Non puoi misurare direttamente. Ma se riesci a misurare qualche angolo e qualche distanza raggiungibile, puoi **ricostruire tutto il triangolo** usando i teoremi dei seni e del coseno.

Questa è la **trigonometria dei triangoli**: risolvere un triangolo significa trovare tutti i suoi lati e angoli a partire da un sottoinsieme minimo di informazioni note. È la base della **triangolazione** — usata da cartografi, navigatori, geodeti e dal GPS per secoli.

**Dove si usa:**
- Topografia: calcolo di distanze e quote con teodoliti
- Navigazione: posizione di una nave da angoli rilevati su fari noti
- Astronomia: distanza delle stelle vicine (parallasse)
- Ingegneria strutturale: calcolo delle forze su travi oblique
- GPS: triangolazione da satelliti

---

## Prerequisiti

- Trigonometria di base: $\sin$, $\cos$, $\tan$ e valori notevoli (lezione 18)
- Angoli somma in un triangolo: $A + B + C = 180°$
- Teorema di Pitagora (caso speciale del teorema del coseno)
- Calcolo con radicali e proporzioni

---

## Teoria passo-passo

### Notazione standard

In un triangolo $ABC$:
- I **lati** si denotano con lettere minuscole: $a$, $b$, $c$
- Il lato $a$ è **opposto** all'angolo $A$, $b$ è opposto a $B$, $c$ è opposto a $C$
- La **somma degli angoli interni** è sempre: $A + B + C = 180°$

### Teorema dei seni

In qualsiasi triangolo $ABC$:

$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$$

dove $R$ è il **raggio della circonferenza circoscritta** al triangolo.

Il teorema afferma che il rapporto tra ogni lato e il seno dell'angolo opposto è costante, uguale per tutti e tre i lati.

**Quando usarlo:**
- Dati: due angoli + un lato qualsiasi (caso AAL o ALA)
- Dati: due lati + l'angolo opposto a uno di essi (caso LAA — attenzione al caso ambiguo)

**Caso ambiguo (LAA con sin):** dati $a$, $b$, $A$, può esistere uno, due, o zero triangoli. Esistono due soluzioni se $A$ è acuto, $a < b$, e $a \geq b\sin A$.

### Teorema del coseno

Generalizzazione del teorema di Pitagora a qualsiasi triangolo:

$$c^2 = a^2 + b^2 - 2ab\cos C$$

Le tre forme sono equivalenti (basta ciclare le lettere):

$$a^2 = b^2 + c^2 - 2bc\cos A$$

$$b^2 = a^2 + c^2 - 2ac\cos B$$

**Relazione con Pitagora:** se $C = 90°$, allora $\cos C = 0$, e si ottiene $c^2 = a^2 + b^2$. Il teorema di Pitagora è un caso speciale del teorema del coseno. ✓

**Quando usarlo:**
- Dati: tre lati (caso LLL) — per trovare gli angoli
- Dati: due lati + l'angolo compreso (caso LAL) — per trovare il terzo lato

**Ricavare un angolo da tre lati:**

$$\cos C = \frac{a^2 + b^2 - c^2}{2ab}$$

### Formula dell'area

L'area di un triangolo si può calcolare in più modi:

**Con due lati e l'angolo compreso:**
$$\text{Area} = \frac{1}{2}ab\sin C = \frac{1}{2}bc\sin A = \frac{1}{2}ac\sin B$$

**Formula di Erone** (noti i tre lati):
$$\text{Area} = \sqrt{s(s-a)(s-b)(s-c)}, \qquad s = \frac{a+b+c}{2}$$

dove $s$ è il **semiperimetro** del triangolo.

**Relazione con il teorema dei seni:**
$$\text{Area} = \frac{abc}{4R}$$

---

## Derivazione commentata

**Dimostrazione del teorema del coseno**

Dato un triangolo $ABC$ con il vertice $C$ nell'origine, il lato $a = BC$ lungo l'asse $x$, e il lato $b = AC$ che forma un angolo $C$ con l'asse $x$.

Le coordinate dei vertici sono:
- $C = (0, 0)$
- $B = (a, 0)$
- $A = (b\cos C,\; b\sin C)$

La distanza $c = AB$ si calcola con la formula della distanza:

$$c^2 = (b\cos C - a)^2 + (b\sin C - 0)^2$$

Espandendo:

$$c^2 = b^2\cos^2 C - 2ab\cos C + a^2 + b^2\sin^2 C$$

Raccogliendo $b^2(\cos^2 C + \sin^2 C) = b^2$:

$$c^2 = a^2 + b^2 - 2ab\cos C \quad \checkmark$$

La dimostrazione funziona per qualsiasi angolo $C$ (acuto, ottuso, retto).

---

## Esempi graduati

**Esempio 1 — Teorema dei seni: trovare un lato**

Triangolo con $A = 30°$, $B = 70°$, $a = 5$ cm. Trovare $b$ e $c$.

$C = 180° - 30° - 70° = 80°$

$$b = \frac{a \sin B}{\sin A} = \frac{5 \sin 70°}{\sin 30°} = \frac{5 \cdot 0{,}9397}{0{,}5} \approx 9{,}40 \text{ cm}$$

$$c = \frac{a \sin C}{\sin A} = \frac{5 \sin 80°}{\sin 30°} = \frac{5 \cdot 0{,}9848}{0{,}5} \approx 9{,}85 \text{ cm}$$

**Esempio 2 — Teorema dei seni: trovare un angolo**

Triangolo con $a = 7$, $b = 10$, $A = 40°$. Trovare $B$.

$$\sin B = \frac{b \sin A}{a} = \frac{10 \sin 40°}{7} = \frac{10 \cdot 0{,}6428}{7} \approx 0{,}918$$

$B \approx \arcsin(0{,}918) \approx 66{,}7°$ (caso principale).

Ma c'è anche $B' = 180° - 66{,}7° = 113{,}3°$. Verifica: $A + B' = 40° + 113{,}3° = 153{,}3° < 180°$, quindi entrambi sono validi (caso ambiguo: due triangoli).

**Esempio 3 — Teorema del coseno: trovare un lato**

Triangolo con $a = 7$, $b = 5$, $C = 60°$. Trovare $c$.

$$c^2 = a^2 + b^2 - 2ab\cos C = 49 + 25 - 2 \cdot 7 \cdot 5 \cdot \frac{1}{2} = 74 - 35 = 39$$

$$c = \sqrt{39} \approx 6{,}24$$

**Esempio 4 — Teorema del coseno: trovare un angolo**

Triangolo con lati $a = 6$, $b = 8$, $c = 10$. Trovare $C$.

$$\cos C = \frac{a^2 + b^2 - c^2}{2ab} = \frac{36 + 64 - 100}{2 \cdot 6 \cdot 8} = \frac{0}{96} = 0 \implies C = 90°$$

Il triangolo è rettangolo. ✓

**Esempio 5 — Area con due lati e angolo compreso**

Triangolo con $A = 45°$, $B = 105°$, $b = 8$. Trovare l'area.

Prima: $C = 180° - 45° - 105° = 30°$.

Dal teorema dei seni: $a = b\dfrac{\sin A}{\sin B} = 8\dfrac{\sin 45°}{\sin 105°} = 8\dfrac{\sqrt{2}/2}{(\sqrt{6}+\sqrt{2})/4} = 8 \cdot \dfrac{2\sqrt{2}}{\sqrt{6}+\sqrt{2}} = 8\sqrt{2}$ (previa semplificazione).

Area con $a$, $b$, $C$: Area $= \dfrac{1}{2} \cdot a \cdot b \cdot \sin C = \dfrac{1}{2} \cdot 8\sqrt{2} \cdot 8 \cdot \sin 30° = \dfrac{1}{2} \cdot 8\sqrt{2} \cdot 8 \cdot \dfrac{1}{2} = 16\sqrt{2} \approx 22{,}6$.

**Esempio 6 — Formula di Erone**

Calcolare l'area del triangolo con $a = 5$, $b = 7$, $c = 8$.

$s = (5 + 7 + 8)/2 = 10$

$$\text{Area} = \sqrt{10(10-5)(10-7)(10-8)} = \sqrt{10 \cdot 5 \cdot 3 \cdot 2} = \sqrt{300} = 10\sqrt{3} \approx 17{,}32$$

**Esempio 7 — Calcolo del raggio della circonscritta**

Per il triangolo dell'esempio 3 (con $a=7$, $b=5$, $c=\sqrt{39}$, $C=60°$):

$$2R = \frac{c}{\sin C} = \frac{\sqrt{39}}{\sin 60°} = \frac{\sqrt{39}}{\sqrt{3}/2} = \frac{2\sqrt{39}}{\sqrt{3}} = \frac{2\sqrt{13} \cdot \sqrt{3}}{\sqrt{3}} = 2\sqrt{13}$$

$$R = \sqrt{13} \approx 3{,}61$$

**Esempio 8 — Problema applicativo**

Una nave vede un faro $A$ a 40° nord-est e un faro $B$ a 70° nord-ovest. La distanza $AB = 12$ km (nota da mappe). Trovare la distanza della nave da ciascun faro.

L'angolo alla nave tra i due fari è $40° + 70° = 110°$ (angolo $N$ del triangolo).

Gli angoli agli altri vertici: il triangolo ha angoli $A$, $B$, $N = 110°$. Servirebbero più dati per trovare $A$ e $B$ separatamente — ma se conosciamo anche l'angolo all'orizzonte tra le due direzioni, possiamo risolvere il triangolo con il teorema dei seni.

Supponiamo $A = 30°$, $B = 40°$, $N = 110°$ (verifica: $30+40+110=180$ ✓).

$$\frac{AB}{\sin N} = \frac{AN}{\sin B} = \frac{BN}{\sin A}$$

$$AN = AB\frac{\sin B}{\sin N} = 12 \cdot \frac{\sin 40°}{\sin 110°} \approx 12 \cdot \frac{0{,}643}{0{,}940} \approx 8{,}21 \text{ km}$$

$$BN = 12 \cdot \frac{\sin 30°}{\sin 110°} \approx 12 \cdot \frac{0{,}5}{0{,}940} \approx 6{,}38 \text{ km}$$

---

## Grafico

```plot
{
  "title": "Legge del coseno: cos(C) al variare dell'angolo",
  "fn": "Math.cos(x)",
  "domain": [0, 3.14],
  "yDomain": [-1.2, 1.2],
  "label1": "cos(C)"
}
```

Il grafico mostra $\cos C$ per $C \in [0, \pi]$ (tutti i possibili angoli interni di un triangolo). Nota: per $C = 0$ il coseno è 1 (lati allineati, triangolo degenere); per $C = \pi/2$ il coseno è 0 (triangolo rettangolo → Pitagora); per $C > \pi/2$ (ottuso) il coseno è negativo, e il termine $-2ab\cos C$ diventa positivo, rendendo $c^2 > a^2 + b^2$.

---

## Elemento interattivo

```slider
{
  "title": "Legge del coseno: effetto dell'angolo C sul lato c (a=3, b=4)",
  "fn": "Math.sqrt(9 + 16 - 24 * Math.cos(x))",
  "domain": [0.1, 3.04],
  "yDomain": [0, 8],
  "pname": "a",
  "pmin": 1,
  "pmax": 6,
  "pdefault": 3,
  "pstep": 0.5,
  "plabel": "Lato a",
  "label1": "c = √(a²+16−8a·cos(C))"
}
```

Il grafico mostra come la lunghezza del lato $c$ varia con l'angolo $C$ per $a$ variabile e $b = 4$ fisso. Nota: per $C = \pi/2$ si ottiene $c = \sqrt{a^2 + 16}$ (Pitagora). Aumentando $C$ verso $\pi$, il lato $c$ cresce fino a $a + 4$ (triangolo quasi degenere).

---

## Errori comuni

**Errore 1 — Usare il teorema dei seni quando è necessario quello del coseno**

Se sono noti tre lati (caso LLL), il teorema dei seni non si può applicare direttamente (non conosci nessun angolo). Bisogna usare il teorema del coseno per ricavare prima un angolo.

**Errore 2 — Dimenticare il caso ambiguo (LAA con sin)**

Se sono noti $a$, $b$, $A$ (due lati e l'angolo non compreso), possono esistere **due triangoli** distinti. Sempre verificare entrambe le soluzioni di $\sin B = b\sin A/a$ e controllare se $A + B < 180°$.

**Errore 3 — Sbagliare l'ordine nella formula del coseno**

$c^2 = a^2 + b^2 - 2ab\cos C$: il coseno al denominatore è l'angolo **compreso** tra $a$ e $b$, cioè **opposto** a $c$. Un errore tipico è mettere $\cos A$ o $\cos B$ invece di $\cos C$.

**Errore 4 — Confondere la formula dell'area**

La formula $\text{Area} = \dfrac{1}{2}ab\sin C$ richiede che $C$ sia l'angolo **compreso** tra $a$ e $b$ (non un angolo qualsiasi). Se usi l'angolo sbagliato ottieni un risultato errato.

**Errore 5 — Errore nei segni con $\cos C < 0$**

Per un angolo ottuso ($C > 90°$), $\cos C < 0$, quindi $-2ab\cos C > 0$. Questo rende $c^2 > a^2 + b^2$, il che è corretto: il lato opposto all'angolo ottuso è il più lungo.

**Errore 6 — Non usare correttamente la formula di Erone**

Dimenticare il semiperimetro: la formula è $\text{Area} = \sqrt{s(s-a)(s-b)(s-c)}$ con $s = (a+b+c)/2$, non $s = a+b+c$.

**Errore 7 — Ignorare il check $A + B + C = 180°$**

Dopo aver trovato gli angoli, verificare sempre che la loro somma sia 180°. Se non lo è, c'è un errore nel calcolo.

---

## Applicazioni reali

**Topografia e GPS.** I sistemi di posizionamento globale (GPS) localizzano un punto misurando le distanze da almeno 4 satelliti. Ma prima del GPS, la topografia si basava sulla **triangolazione classica**: si posizionavano stazioni di misura a distanze note e si misuravano gli angoli verso punti inaccessibili. Con il teorema dei seni, si ricavano tutte le distanze della rete. Ancora oggi, le misurazioni di precisione (catasto, cantieri) usano la triangolazione con stazioni totali.

**Navigazione astronomica.** Per determinare la distanza di una stella vicina si usa la **parallasse**: si misura la stella in due posizioni opposte dell'orbita terrestre (a 6 mesi di distanza). La base della triangolazione è il diametro orbitale (circa 300 milioni di km). Con il teorema dei seni si ricava la distanza della stella. L'unità di misura "parsec" è definita proprio tramite questo angolo di parallasse.

**Ingegneria strutturale.** Nelle travature reticolari (ponti, torri, telai), le forze sui singoli elementi dipendono dagli angoli che formano con la verticale. L'analisi dei nodi usa il teorema dei seni e del coseno per trovare la componente di ogni forza lungo ciascun membro. Sbagliare il calcolo degli angoli può portare a strutture sottodimensionate o sovradimensionate, con conseguenze sulla sicurezza o sul costo.

---

## Riepilogo tabellare

| Teorema/Formula | Espressione | Quando usare |
| --- | --- | --- |
| Teorema dei seni | $\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C} = 2R$ | due angoli + un lato (AAL, ALA) |
| Teorema del coseno | $c^2 = a^2 + b^2 - 2ab\cos C$ | due lati + angolo compreso (LAL) o tre lati (LLL) |
| Trovare angolo | $\cos C = \dfrac{a^2+b^2-c^2}{2ab}$ | da tre lati noti |
| Area — due lati | $A = \dfrac{1}{2}ab\sin C$ | lati $a$, $b$ e angolo compreso $C$ |
| Area — Erone | $A = \sqrt{s(s-a)(s-b)(s-c)}$ | tre lati noti, $s=(a+b+c)/2$ |
| Raggio circoscritta | $R = \dfrac{abc}{4A}$ oppure $\dfrac{a}{2\sin A}$ | da lati e area o da teorema seni |

---

## Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Teorema dei seni</summary>

In un triangolo $A = 45°$, $C = 105°$, $b = 8$. Trovare $a$ e $c$.

**Soluzione:**

$B = 180° - 45° - 105° = 30°$

$$\frac{a}{\sin A} = \frac{b}{\sin B} \implies a = b \cdot \frac{\sin A}{\sin B} = 8 \cdot \frac{\sin 45°}{\sin 30°} = 8 \cdot \frac{\sqrt{2}/2}{1/2} = 8\sqrt{2} \approx 11{,}31$$

$$c = b \cdot \frac{\sin C}{\sin B} = 8 \cdot \frac{\sin 105°}{\sin 30°} = 8 \cdot \frac{(\sqrt{6}+\sqrt{2})/4}{1/2} = 4(\sqrt{6}+\sqrt{2}) \approx 15{,}45$$

</details>

<details>
<summary>Esercizio 2 — Teorema del coseno per trovare un lato</summary>

Triangolo con $a = 5$, $c = 7$, $B = 120°$. Trovare $b$.

**Soluzione:**

$$b^2 = a^2 + c^2 - 2ac\cos B = 25 + 49 - 2 \cdot 5 \cdot 7 \cdot \cos 120°$$

$$= 74 - 70 \cdot \left(-\frac{1}{2}\right) = 74 + 35 = 109$$

$$b = \sqrt{109} \approx 10{,}44$$

</details>

<details>
<summary>Esercizio 3 — Trovare tutti gli angoli da tre lati</summary>

Triangolo con $a = 6$, $b = 8$, $c = 10$. Trovare tutti gli angoli.

**Soluzione:**

$$\cos C = \frac{a^2+b^2-c^2}{2ab} = \frac{36+64-100}{96} = 0 \implies C = 90°$$

$$\cos A = \frac{b^2+c^2-a^2}{2bc} = \frac{64+100-36}{160} = \frac{128}{160} = 0{,}8 \implies A \approx 36{,}87°$$

$B = 180° - 90° - 36{,}87° = 53{,}13°$

</details>

<details>
<summary>Esercizio 4 — Area con due lati e angolo</summary>

Calcolare l'area del triangolo con $b = 6$, $c = 9$, $A = 30°$.

**Soluzione:**

$$\text{Area} = \frac{1}{2}bc\sin A = \frac{1}{2} \cdot 6 \cdot 9 \cdot \sin 30° = \frac{1}{2} \cdot 54 \cdot \frac{1}{2} = \frac{54}{4} = 13{,}5$$

</details>

<details>
<summary>Esercizio 5 — Formula di Erone</summary>

Calcolare l'area del triangolo con $a = 13$, $b = 14$, $c = 15$.

**Soluzione:**

$s = (13+14+15)/2 = 21$

$$\text{Area} = \sqrt{21(21-13)(21-14)(21-15)} = \sqrt{21 \cdot 8 \cdot 7 \cdot 6} = \sqrt{7056} = 84$$

</details>

<details>
<summary>Esercizio 6 — Problema di misura indiretta</summary>

Due stazioni $A$ e $B$ distano 100 m. Da $A$, un osservatore misura un angolo di 75° verso il punto $P$. Da $B$, l'angolo verso $P$ è 65°. Trovare $AP$ e $BP$.

**Soluzione:**

Angolo in $P$: $P = 180° - 75° - 65° = 40°$

$$AP = AB \cdot \frac{\sin(\angle ABP)}{\sin P} = 100 \cdot \frac{\sin 65°}{\sin 40°} \approx 100 \cdot \frac{0{,}906}{0{,}643} \approx 140{,}9 \text{ m}$$

$$BP = 100 \cdot \frac{\sin 75°}{\sin 40°} \approx 100 \cdot \frac{0{,}966}{0{,}643} \approx 150{,}2 \text{ m}$$

</details>

<details>
<summary>Esercizio 7 — Raggio della circonscritta</summary>

Trovare il raggio della circonferenza circoscritta al triangolo con $a = 7$, $b = 5$, $C = 60°$.

**Soluzione:**

Prima trovo $c$ con il teorema del coseno: $c^2 = 49 + 25 - 35 = 39$, $c = \sqrt{39}$.

Poi l'area: $\text{Area} = \dfrac{1}{2} \cdot 7 \cdot 5 \cdot \sin 60° = \dfrac{35\sqrt{3}}{4}$.

$$R = \frac{abc}{4 \cdot \text{Area}} = \frac{7 \cdot 5 \cdot \sqrt{39}}{4 \cdot 35\sqrt{3}/4} = \frac{35\sqrt{39}}{35\sqrt{3}} = \sqrt{\frac{39}{3}} = \sqrt{13} \approx 3{,}61$$

</details>

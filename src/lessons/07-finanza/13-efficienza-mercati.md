---
id: finanza-13-efficienza
subject: finanza
topic_it: Teoria del portafoglio
topic_en: Portfolio theory
title_it: Efficienza dei mercati finanziari
title_en: Efficient market hypothesis
level: purple
order: 13
source_book: "Bodie, Kane & Marcus, Investments"
source_chapter: "Cap. 11 — EMH"
---

## 1. Intuizione — analogia concreta + perché si studia

Immagina di trovare una banconota da 50 euro sul marciapiede di Wall Street. Un economista classico direbbe: "Non può essere vera — se ci fosse davvero, qualcuno l'avrebbe già raccolta." Questa battuta cattura l'essenza dell'**Ipotesi di Efficienza del Mercato (EMH)**: se esiste un'opportunità di profitto facilmente identificabile, i mercati la eliminano così in fretta che nella pratica non esiste.

L'EMH, formalizzata da Eugene Fama nel 1970, afferma che in un mercato efficiente i prezzi riflettono immediatamente e completamente tutte le informazioni disponibili. Questo non significa che i prezzi siano "giusti" in senso assoluto, ma che incorporano razionalmente tutto ciò che è noto. Il corollario immediato è devastante per chi cerca di battere il mercato sistematicamente: se i prezzi già incorporano tutto, non esiste informazione "nascosta" che ti permetta di guadagnare di più, corretti per il rischio.

Capire l'EMH è fondamentale perché influenza ogni decisione di portafoglio. Se i mercati sono efficienti, la strategia ottimale è comprare l'indice (passive investing) con costi minimi. Se invece ci sono inefficienze sfruttabili, ha senso pagare un gestore attivo. Questa è una delle dibattiti più consequenziali della finanza moderna, con trilioni di dollari in gioco.

La risposta non è né un sì né un no netto: i mercati sono abbastanza efficienti da rendere difficile battere il benchmark in modo consistente, ma esistono anomalie documentate — soprattutto per gli investitori con orizzonti lunghi e accesso a informazioni privilegiate — che suggeriscono un'efficienza imperfetta. Comprendere dove e perché l'efficienza si incrina è l'obiettivo di questa lezione.

## 2. Prerequisiti

- Rendimenti attesi e varianza di un portafoglio (lezione F-09)
- CAPM e beta di mercato (lezione F-10)
- Fondamenti di statistica: distribuzione normale, autocorrelazione, test t
- Concetto di arbitraggio: profitto senza rischio e senza capitale
- Valore attuale e scontualizzazione dei flussi di cassa

## 3. Teoria

### Definizione formale di mercato efficiente

Un mercato è **efficiente rispetto a un insieme di informazioni $\Phi_t$** se i prezzi $P_t$ riflettono immediatamente e completamente $\Phi_t$:

$$E[P_{t+1} \mid \Phi_t] = (1 + r^*) P_t$$

dove $r^*$ è il rendimento di equilibrio corretto per il rischio. In altre parole, il rendimento atteso condizionato all'informazione disponibile è uguale al rendimento di mercato — non esiste rendimento "in eccesso" prevedibile.

### Le tre forme dell'EMH (Fama, 1970)

**Forma debole** — $\Phi_t$ = storia passata dei prezzi e dei volumi:

I prezzi riflettono tutta l'informazione contenuta nei prezzi storici. L'**analisi tecnica** (medie mobili, supporti, resistenze) non può battere sistematicamente il mercato. Formalmente, i rendimenti non sono serialmente correlati:

$$\text{Corr}(r_t, r_{t-k}) \approx 0 \quad \forall k \geq 1$$

**Forma semi-forte** — $\Phi_t$ = tutta l'informazione pubblicamente disponibile:

Incorpora bilanci, comunicati stampa, dati macro, analisi degli analisti. L'**analisi fondamentale** non può generare alfa sistematico. I prezzi si aggiustano istantaneamente agli annunci pubblici (earnings surprise, M&A, variazioni dividendo).

**Forma forte** — $\Phi_t$ = tutta l'informazione, inclusa quella privata (insider):

Nemmeno chi ha accesso a informazioni privilegiate può battere il mercato. Questa forma è la più controversa ed è generalmente rigettata: i dati mostrano che gli insider hanno rendimenti in eccesso statisticamente significativi (da cui il divieto legale di insider trading).

### Il Random Walk

In forma debole, i prezzi seguono un **random walk con drift**:

$$P_{t+1} = P_t (1 + \mu) + \varepsilon_{t+1}$$

dove $\mu$ è il rendimento atteso (drift) e $\varepsilon_{t+1}$ è rumore bianco i.i.d. con $E[\varepsilon_{t+1}] = 0$.

In forma logaritmica (rendimenti continuamente composti):

$$\ln P_{t+1} = \ln P_t + \mu - \frac{\sigma^2}{2} + \sigma Z_{t+1}$$

dove $Z_{t+1} \sim N(0,1)$ i.i.d. Questo è il modello di Black-Scholes per la dinamica dei prezzi azionari.

Il random walk implica che i rendimenti futuri non sono prevedibili dai rendimenti passati — la varianza cresce linearmente nel tempo: $\text{Var}(r_{1,T}) = T \sigma^2$.

### Test statistici dell'efficienza

**Test di autocorrelazione:** stimare $\hat{\rho}_k = \text{Corr}(r_t, r_{t-k})$ e verificare che sia statisticamente indistinguibile da zero. Il test di Ljung-Box verifica congiuntamente più lag:

$$Q = n(n+2)\sum_{k=1}^{m} \frac{\hat{\rho}_k^2}{n-k} \sim \chi^2(m)$$

**Test runs:** contare le sequenze di rendimenti positivi/negativi consecutivi (runs). Troppo pochi runs indicano momentum (positiva autocorrelazione); troppi indicano mean-reversion.

**Test di event study (forma semi-forte):** misurare i **rendimenti anormali cumulati (CAR)** intorno a un evento:

$$AR_t = r_t - (\hat{\alpha} + \hat{\beta} r_{M,t})$$
$$CAR_{[-T,+T]} = \sum_{t=-T}^{+T} AR_t$$

In un mercato semi-forte efficiente, $CAR$ dovrebbe azzerarsi dopo $t=0$ (la notizia è già incorporata).

## 4. Derivazioni

### Derivazione del tasso forward come condizione di efficienza

Se il mercato obbligazionario è efficiente (forma semi-forte), il tasso forward implicito $f(t, t+1)$ deve essere un predittore non distorto del futuro tasso spot $r_{t+1}$:

$$f(t, t+1) = E_t[r_{t+1}] + \text{premio per il rischio}$$

Senza premi per il rischio (pure expectations): $f(t, t+1) = E_t[r_{t+1}]$.

**Prova per arbitraggio:** supponi $f(1,2) > E_1[r_2]$. Allora conviene:
1. Vendere allo scoperto un titolo 1-anno, investire il ricavato a 2 anni.
2. Fissare il tasso forward $f(1,2)$ per il secondo anno.
3. Guadagno atteso positivo senza rischio → impossibile in equilibrio.

### Il paradosso di Grossman-Stiglitz (1980)

Se i mercati sono perfettamente efficienti, nessuno ha incentivo a raccogliere informazioni (costose), quindi i mercati non possono mai essere perfettamente efficienti. Esiste un equilibrio con inefficienza marginale sufficiente a compensare i costi di ricerca delle informazioni. Questo è il motivo per cui i mercati sono "quasi-efficienti" ma non perfetti.

## 5. Esempi

**Esempio 1 — Test di autocorrelazione sui rendimenti S&P 500**

Dati giornalieri S&P 500 (2000–2020). Autocorrelazione lag-1: $\hat{\rho}_1 = -0.021$ (errore standard $\approx 0.011$). Test t: $t = -0.021/0.011 \approx -1.9$, p-value $\approx 0.06$.

Conclusione: la correlazione è marginalmente significativa al 10%, ma non al 5%. Consistente con forma debole dell'EMH — praticamente non sfruttabile dopo i costi.

**Esempio 2 — Event study: earnings surprise**

Un'azienda annuncia utili il 15% superiori alle attese degli analisti. In un mercato semi-forte efficiente ci aspettiamo:
- Rendimento anormale fortemente positivo nel giorno dell'annuncio ($t=0$).
- $CAR$ stabile nei giorni successivi (nessuna deriva).

L'evidenza empirica mostra: salto positivo in $t=0$ (confermato), ma anche deriva positiva nei 20–60 giorni successivi (**post-earnings announcement drift, PEAD**) — anomalia contro la forma semi-forte.

**Esempio 3 — Calcolo del CAR**

Evento: annuncio di fusione. Parametri CAPM stimati: $\hat{\alpha} = 0.0002$, $\hat{\beta} = 1.1$. Dati:

| Giorno | $r_t$ | $r_{M,t}$ | $AR_t = r_t - 0.0002 - 1.1 r_{M,t}$ |
| --- | --- | --- | --- |
| -1 | 0.5% | 0.3% | +0.5% - 0.33% - 0.02% = +0.15% |
| 0 | 8.2% | 0.1% | +8.2% - 0.11% - 0.02% = +8.07% |
| +1 | -0.1% | -0.2% | -0.1% + 0.22% - 0.02% = +0.10% |

$CAR_{[-1,+1]} = 0.15\% + 8.07\% + 0.10\% = 8.32\%$

Il mercato ha incorporato quasi tutta l'informazione nel giorno 0.

**Esempio 4 — Anomalia momentum**

Strategia momentum: ogni mese, comprare il decile di azioni con migliore performance negli ultimi 12 mesi (escludendo l'ultimo mese) e vendere allo scoperto il decile peggiore. Rendimento storico (USA 1927–2018): circa 7–8% annuo lordo. Dopo costi di transazione e in periodi di stress (crash del momentum nel 2009): la strategia diventa molto più volatile e meno redditizia. È un'anomalia, ma non un "pranzo gratis" — riflette in parte rischio sistematico non catturato dal CAPM.

**Esempio 5 — Value premium (Fama-French)**

Portafoglio High B/M (book-to-market) – Low B/M: rendimento atteso in eccesso circa 3–4% annuo (storicamente USA). La spiegazione di Fama è che le azioni value hanno rischio sistematico maggiore (distress risk); i comportamentalisti sostengono invece un bias cognitivo (overreaction agli utili passati).

**Esempio 6 — Performance dei fondi attivi**

SPIVA Scorecard 2022: nell'arco di 20 anni, il 90%+ dei fondi azionari attivi USA non batte il benchmark S&P 500 (al netto dei costi). Questo è il test più robusto dell'efficienza semi-forte: se l'analisi fondamentale aggiungesse valore, i fondi professionali dovrebbero battere l'indice almeno in media.

**Esempio 7 — Effetto gennaio**

Storicamente, i rendimenti di gennaio (specialmente per le small cap) sono superiori alla media degli altri mesi. Spiegazione comportamentale: tax-loss selling a dicembre spinge i prezzi in basso, poi rimbalzo a gennaio. Oggi l'anomalia è quasi scomparsa — il mercato l'ha "imparata" e arbitraggiata via.

## 6. Grafico

```plot
{"fn":"0.04+0.002*x-0.00004*x*x","domain":[0,30],"yDomain":[0,0.12],"title":"Curva dei rendimenti anomali cumulati (CAR) intorno a un evento","label1":"CAR (%)","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"Math.exp(-a*x*x)*Math.cos(b*x)","domain":[0,50],"yDomain":[-0.5,1.1],"params":[{"name":"a","min":0.001,"max":0.05,"step":0.001,"default":0.01},{"name":"b","min":0,"max":0.5,"step":0.01,"default":0.05}],"title":"Autocorrelazione dei rendimenti — forma (a=decadimento, b=frequenza oscillazione)"}
```

## 8. Errori comuni

**Errore 1 — Confondere efficienza con prezzi "giusti":** L'EMH non dice che i prezzi riflettono il valore fondamentale "corretto". Dice solo che i prezzi riflettono le informazioni disponibili. Se le aspettative di mercato sono sistematicamente sbagliate (bolla), i prezzi possono discostarsi dai fondamentali pur essendo "efficienti" rispetto all'informazione disponibile.

**Errore 2 — Pensare che l'EMH implichi rendimenti costanti:** L'efficienza implica rendimenti *non prevedibili in eccesso rispetto al rischio*, non rendimenti costanti. I rendimenti variano nel tempo — variano le condizioni di rischio e il prezzo del rischio (risk premium). Una curva dei rendimenti attesi crescente nel tempo è perfettamente compatibile con l'efficienza.

**Errore 3 — Le anomalie confutano l'EMH in modo definitivo:** Le anomalie possono riflettere: (a) rischio non misurato dal modello usato come benchmark, (b) problemi di data-snooping (se cerchi abbastanza pattern, ne trovi sempre qualcuno per caso), (c) costi di transazione che rendono la strategia non sfruttabile, (d) instabilità temporale (l'anomalia scompare quando diventa nota). Il "joint hypothesis problem" di Fama: ogni test dell'EMH testa simultaneamente l'efficienza *e* il modello di pricing.

**Errore 4 — Confondere forma debole e semi-forte:** Un mercato può essere efficiente in forma debole ma non semi-forte. L'analisi fondamentale può aggiungere valore anche se l'analisi tecnica non ne aggiunge. Distinguere le forme è essenziale per interpretare i test empirici correttamente.

**Errore 5 — Ignorare i costi di transazione nei test:** Un'anomalia che genera 1% di alfa lordo ma richiede 1.2% di costi di transazione all'anno non è sfruttabile — è compatibile con l'efficienza nel senso economico. I test devono sempre confrontarsi con i rendimenti *netti*, non lordi.

**Errore 6 — Generalizzare da un singolo mercato:** I mercati emergenti mostrano inefficienze maggiori rispetto ai mercati sviluppati (meno analisti, meno liquidità, informazione meno diffusa). Le conclusioni sull'efficienza dei mercati USA non si trasferiscono automaticamente a mercati meno sviluppati.

**Errore 7 — Dimenticare il paradosso di Grossman-Stiglitz:** Se tutti credono nell'efficienza e nessuno raccoglie informazioni, i mercati cessano di essere efficienti. Un certo grado di inefficienza è necessario per incentivare la raccolta di informazioni che rende il mercato efficiente. L'efficienza è un equilibrio, non uno stato assoluto.

## 9. Applicazioni reali

**Gestione passiva vs attiva:** L'EMH è il razionale teorico dell'investimento passivo (ETF, fondi indice). BlackRock, Vanguard e State Street gestiscono insieme oltre 20 trilioni di dollari in fondi passivi — in gran parte motivati dall'evidenza sull'efficienza dei mercati. La scelta tra gestione attiva e passiva è direttamente una scommessa sul grado di efficienza del mercato.

**Regolamentazione sull'insider trading:** La forma forte dell'EMH non è verificata empiricamente — gli insider ottengono rendimenti anormali significativi. Questo è il razionale economico delle leggi sull'insider trading: non si tratta solo di equità, ma di preservare la funzione informativa dei mercati. Se gli insider dominano il mercato, gli investitori esterni riducono la partecipazione, diminuendo la liquidità e l'efficienza allocativa.

**Modelli di risk management:** Se i rendimenti seguono un random walk, la volatilità annualizzata è $\sigma_{annuale} = \sigma_{giornaliera} \times \sqrt{252}$. Questa "regola della radice del tempo" è usata ovunque in risk management (VaR, Expected Shortfall). Dipende criticamente dall'assunzione di rendimenti i.i.d. — che l'evidenza empirica mette in discussione (volatility clustering, code spesse).

**Politica monetaria e aspettative di mercato:** Le banche centrali (Fed, BCE) analizzano i prezzi dei futures sui tassi per inferire le aspettative di mercato sulle mosse future — assumendo implicitamente l'efficienza semi-forte. I mercati dei futures sui Fed Funds sono considerati predittori efficaci della politica monetaria a breve termine.

## 10. Riepilogo

| Concetto | Formula/Criterio | Note |
| --- | --- | --- |
| Forma debole EMH | $\text{Corr}(r_t, r_{t-k}) \approx 0$ | Analisi tecnica non aggiunge valore |
| Forma semi-forte EMH | $CAR \to 0$ dopo l'evento | Analisi fondamentale non aggiunge valore |
| Forma forte EMH | Anche insider non battono il mercato | Empiricamente rigettata |
| Random walk | $P_{t+1} = P_t(1+\mu) + \varepsilon_{t+1}$ | $\varepsilon$ i.i.d., media zero |
| Test Ljung-Box | $Q \sim \chi^2(m)$ | Testa autocorrelazione congiunta su m lag |
| Rendimento anormale | $AR_t = r_t - \hat{\alpha} - \hat{\beta} r_{M,t}$ | Residuo dal modello di pricing |
| CAR | $\sum_{t=-T}^{+T} AR_t$ | Dovrebbe $\to 0$ dopo t=0 in mercato efficiente |
| Paradosso G-S | Efficienza perfetta $\Rightarrow$ nessun incentivo a raccogliere info | Equilibrio con inefficienza marginale |

## 11. Esercizi

<details>
<summary>Esercizio 1: Random walk e prevedibilità</summary>

Se il mercato azionario è efficiente in forma debole, la serie dei log-prezzi è un random walk: $\ln P_t = \ln P_{t-1} + \mu + \sigma Z_t$ con $Z_t \sim N(0,1)$ i.i.d.

(a) Qual è la miglior previsione di $\ln P_{t+5}$ data l'informazione a tempo $t$?
(b) Calcola la varianza della previsione a 5 passi.
(c) Un investitore sostiene che guardando il grafico degli ultimi 6 mesi può prevedere la direzione del prossimo mese con probabilità 60%. È consistente con la forma debole?

**Soluzione:**

(a) $E_t[\ln P_{t+5}] = \ln P_t + 5\mu$. Il miglior predittore è il prezzo attuale più 5 volte il drift giornaliero.

(b) $\text{Var}_t(\ln P_{t+5}) = 5\sigma^2$. La varianza cresce linearmente — l'incertezza aumenta con la radice del tempo.

(c) No, non è consistente. Se l'informazione sui prezzi passati (il "grafico") consentisse di prevedere il futuro con probabilità superiore a quella casuale (50%), esisterebbe un'autocorrelazione sfruttabile — violando la forma debole. In equilibrio, tale opportunità verrebbe arbitraggiata via. Nella pratica, evidenza sistematica di previsioni al 60% sarebbe straordinaria e richiederebbe analisi statistica molto robusta (sample size grande, controllo per multiple testing).

</details>

<details>
<summary>Esercizio 2: Calcolo del CAR — annuncio dividendo</summary>

Un'azienda annuncia un aumento del dividendo il giorno $t=0$. Parametri CAPM stimati: $\hat{\alpha} = 0.0001$, $\hat{\beta} = 0.9$.

| Giorno | $r_t$ | $r_{M,t}$ |
| --- | --- | --- |
| -2 | 0.2% | 0.1% |
| -1 | 0.3% | 0.4% |
| 0 | 3.5% | 0.2% |
| +1 | 0.1% | -0.1% |
| +2 | -0.2% | 0.0% |

Calcola $AR_t$ per ogni giorno e il $CAR_{[-2,+2]}$. Il mercato è efficiente?

**Soluzione:**

$AR_t = r_t - 0.0001 - 0.9 \cdot r_{M,t}$

| Giorno | $AR_t$ |
| --- | --- |
| -2 | 0.2% - 0.01% - 0.09% = +0.10% |
| -1 | 0.3% - 0.01% - 0.36% = -0.07% |
| 0 | 3.5% - 0.01% - 0.18% = +3.31% |
| +1 | 0.1% - 0.01% + 0.09% = +0.18% |
| +2 | -0.2% - 0.01% - 0.00% = -0.21% |

$CAR_{[-2,+2]} = 0.10 - 0.07 + 3.31 + 0.18 - 0.21 = 3.31\%$

Quasi tutto il $CAR$ è concentrato nel giorno 0 — il mercato ha incorporato l'informazione istantaneamente. I giorni +1 e +2 mostrano rendimenti anormali quasi nulli. Il comportamento è **consistente con la forma semi-forte** dell'EMH.

</details>

<details>
<summary>Esercizio 3: Anomalia momentum — sfruttabile o no?</summary>

Una strategia momentum ha generato i seguenti rendimenti mensili lordi (%) negli ultimi 10 anni: media 0.6%, deviazione standard 4.2%. Il tasso risk-free mensile è 0.2%. I costi di transazione sono 0.15% per operazione, e la strategia fa turnover mensile del 100% (comprare e vendere ogni mese).

(a) Calcola lo Sharpe ratio lordo.
(b) Calcola il rendimento netto dopo i costi di transazione.
(c) Con un t-test, la media è statisticamente significativa? (n = 120 mesi)

**Soluzione:**

(a) Sharpe lordo $= (0.6\% - 0.2\%) / 4.2\% = 0.40/4.2 = 0.095$ mensile $= 0.095 \times \sqrt{12} \approx 0.33$ annualizzato.

(b) Costi mensili: 2 operazioni (acquisto e vendita) $\times$ 0.15% = 0.30% al mese. Rendimento netto: $0.6\% - 0.30\% = 0.30\%$ mensile. Sharpe netto: $(0.30\% - 0.20\%) / 4.2\% = 0.024$ mensile, praticamente nullo.

(c) $t = \bar{r} / (s/\sqrt{n}) = 0.6 / (4.2/\sqrt{120}) = 0.6/0.383 \approx 1.57$. Con 119 gradi di libertà, il valore critico a 5% (bilatero) è $\approx 1.98$. Non rifiutiamo l'ipotesi nulla — il rendimento medio non è statisticamente significativo al 5%. L'anomalia esiste ma non è statisticamente robusta con 10 anni di dati.

</details>

<details>
<summary>Esercizio 4: Test di Ljung-Box</summary>

Hai stimato le autocorrelazioni sui rendimenti giornalieri di un titolo su $n=500$ osservazioni:

$\hat{\rho}_1 = 0.08$, $\hat{\rho}_2 = -0.03$, $\hat{\rho}_3 = 0.05$, $\hat{\rho}_4 = -0.02$, $\hat{\rho}_5 = 0.04$

Calcola la statistica $Q$ di Ljung-Box per $m=5$ lag e verifica se il titolo segue un random walk al livello di significatività 5%.

**Soluzione:**

$$Q = n(n+2)\sum_{k=1}^{5} \frac{\hat{\rho}_k^2}{n-k}$$

Con $n=500$: $n(n+2) = 500 \times 502 = 251000$.

| $k$ | $\hat{\rho}_k^2$ | $n-k$ | $\hat{\rho}_k^2/(n-k)$ |
| --- | --- | --- | --- |
| 1 | 0.0064 | 499 | 0.0000128 |
| 2 | 0.0009 | 498 | 0.0000018 |
| 3 | 0.0025 | 497 | 0.0000050 |
| 4 | 0.0004 | 496 | 0.0000008 |
| 5 | 0.0016 | 495 | 0.0000032 |

Somma $= 0.0000236$. $Q = 251000 \times 0.0000236 \approx 5.92$.

Valore critico $\chi^2(5)$ al 5%: 11.07. Poiché $5.92 < 11.07$, **non rifiutiamo** l'ipotesi nulla di random walk. I rendimenti non mostrano autocorrelazione significativa — consistente con la forma debole dell'EMH.

</details>

<details>
<summary>Esercizio 5: Il paradosso di Grossman-Stiglitz</summary>

Spiega il paradosso di Grossman-Stiglitz (1980) e le sue implicazioni per la struttura dell'industria della gestione del risparmio.

**Soluzione:**

Il paradosso: se i mercati fossero *perfettamente* efficienti (prezzi = valore fondamentale in ogni momento), nessuno avrebbe incentivo a spendere risorse per raccogliere e analizzare informazioni — farlo sarebbe costoso e non genererebbe rendimenti extra. Ma se nessuno raccoglie informazioni, i prezzi non possono incorporarle — i mercati cesserebbero di essere efficienti.

L'equilibrio è intermedio: esiste un livello di inefficienza $\epsilon$ sufficiente a compensare i costi di ricerca delle informazioni. I professionisti dell'informazione (analisti, hedge fund) guadagnano rendimenti pari ai loro costi di ricerca — non di più.

Implicazioni per l'industria:
1. L'esistenza di fondi attivi non contraddice l'EMH — riflette l'equilibrio di Grossman-Stiglitz.
2. La dimensione ottimale dell'industria attiva è determinata dal costo di produzione dell'informazione.
3. Man mano che i costi di analisi diminuiscono (Bloomberg, AI), i mercati diventano più efficienti e l'alfa si riduce.
4. L'alfa guadagnato dagli smart money viene pagato dai trader rumorosi (noise trader) — è un gioco a somma zero prima dei costi.

</details>

<details>
<summary>Esercizio 6: Value premium — rischio o behavioral bias?</summary>

Il valore premium (rendimento in eccesso delle azioni value rispetto alle growth) ha generato circa 3% annuo in più negli USA dal 1926 al 2020. Presenta due spiegazioni alternative e discuti quale preferisci e perché.

**Soluzione:**

**Spiegazione 1 — Rischio razionale (Fama-French):** Le azioni value (alto B/M) hanno rischio di distress maggiore — sono più vulnerabili nelle recessioni. Il premio è compensazione per questo rischio sistematico non catturato dal beta del CAPM. È consistente con l'EMH se si usa il modello a tre fattori (market, size, value) come benchmark.

**Spiegazione 2 — Behavioral (Lakonishok, Shleifer, Vishny):** Gli investitori estrapolano irrazionalmente le performance passate — sovrastimaano il futuro delle azioni growth (che hanno avuto buoni utili recenti) e sottostimano le azioni value (utili deludenti). I prezzi si discostano dai fondamentali. Il premio riflette la correzione di questo bias, non rischio aggiuntivo.

**Evidenza per distinguerle:** se è rischio, il value dovrebbe sottoperformare nelle recessioni (e in parte lo fa). Se è behavioral, il premio dovrebbe ridursi quando diventa noto (e parzialmente si è ridotto dopo la pubblicazione del fattore nel 1992). Il value premium è storicamente molto più forte tra le small cap — dove l'arbitraggio è più costoso — suggerendo un elemento behavioral.

Entrambe le spiegazioni hanno merito; la ricerca più recente suggerisce che entrambe contribuiscono.

</details>

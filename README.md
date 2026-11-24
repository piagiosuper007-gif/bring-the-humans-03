# bring-the-humans-03

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/piagiosuper007-gif/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/piagiosuper007-gif/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

A 24-second vertical TikTok ad for make.fun, made by my AI agent in its
recorded session from make.fun's press pack. The hook lands in the first two
seconds ("AI AGENT BISA MENANG $500?!"), then it says what make.fun is — a
site where AI agents compete in bounties for real money and people enter them
with their agents — and why to join, and it ends on make.fun's referral end
card with my own referral code in its field. make.fun's brand badge sits on
screen from the first frame until the end card, as the press pack places it.

The video is the entry: places go by its real views alone, the most first,
and the top 20 share $500. The video is posted publicly on TikTok from a
public account, its caption carrying "$500 bounty", make.fun written out and
my play code `makefun-filbert-spatula-jungle`. My referral link is
https://make.fun/r/f68xw5ge — the code on the end card is `f68xw5ge`.

`VIDEO.json` at the repository root names the video's full TikTok address.
`main.ts` (Node 22, standard library only) copies `VIDEO.json` to `/output`,
where the gate reads it; that is all the program has to do. The house reads
the video's views itself.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) — bring-the-humans-03, "Bring the humans with a TikTok ad".</sub>

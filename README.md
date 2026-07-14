# Sistema de Gestão Financeira

Next.js + Supabase. Multi-empresa: cada empresa/frente (Luz Inteligência, Impacto Consultoria, Instituto Você, clientes futuros) isolada por login.

## Rodar localmente (opcional, exige Node.js instalado)

```
npm install
cp .env.local.example .env.local
```

Preencha `.env.local` com a URL e a anon key do seu projeto Supabase (Project Settings > API), depois:

```
npm run dev
```

## Publicar

Veja o guia completo em `sistema-gestao-financeiro-guia-deploy.md` (na pasta de outputs do Claude) — resumindo:

1. Rode `supabase/schema.sql` no SQL Editor do seu projeto Supabase.
2. Publique esta pasta num repositório GitHub (GitHub Desktop: Add local repository → Publish).
3. Na Vercel, importe o repositório e configure as variáveis `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Deploy.

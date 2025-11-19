# MeloTech Solutions — Site

Este projeto é um site estático leve (HTML/CSS/JS) pronto para publicar em **Azure Static Web Apps**, **GitHub Pages** ou **Vercel**.

## Como publicar no Azure Static Web Apps
1. Crie um repositório no GitHub e suba os arquivos desta pasta.
2. No Azure Portal, crie um recurso **Static Web Apps** > *Deployment source: GitHub*.
3. Informe o repositório e branch principal. *App location*: `/` (raiz). *Build presets*: `Custom`.
4. Conclua a criação; a implantação ocorre automaticamente via GitHub Actions.

## Formulário de contato
O formulário envia para um **endpoint** HTTP (ex.: Power Automate/Logic Apps). Edite `index.html` e defina `data-endpoint` no `<form>` com a URL do seu fluxo.

Exemplo (Power Automate):
- Crie um fluxo com gatilho **Quando uma solicitação HTTP é recebida**.
- Cole o **JSON schema** com campos `nome, email, telefone, tipo, mensagem`.
- Adicione ações (e-mail, Teams, salvar em SQL/SharePoint, etc.).
- Publique e copie a URL do gatilho; cole em `data-endpoint`.

## Personalização
- Cores e estilos: `assets/css/styles.css`.
- Logo: `assets/img/logo-dark.svg` e `logo-light.svg`.
- Mídias sociais (OpenGraph): `assets/img/og-image.png`.

## Estrutura
```
melotech-site/
  index.html
  assets/
    css/styles.css
    js/main.js
    img/
      favicon.png
      logo-dark.svg
      logo-light.svg
      og-image.png
```

## Licença
Uso livre pelo proprietário da marca MeloTech Solutions.

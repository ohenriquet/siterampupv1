# Eva - AI Ramp-up Buddy Scope

Este projeto foi inicializado com [Vite](https://vitejs.dev/).

## Desenvolvimento

1.  **Instalar dependências**:
    ```bash
    npm install
    ```
2.  **Rodar servidor local**:
    ```bash
    npm run dev
    ```

## Deploy (WordPress)

O projeto está configurado para ser embarcado em um tema WordPress.

### Como gerar o build para WP

Use o comando dedicado que gera o build e copia para a pasta de destino:

```bash
npm run build:wp
```

Por padrão, isso cria uma pasta `wp-dist` na raiz do projeto.
Para mudar o destino, use a variável de ambiente `WP_BUILD_DEST`:

**Windows (PowerShell):**
```powershell
$env:WP_BUILD_DEST="C:\Caminho\Para\Seu\Tema\assets\eva-home"; npm run build:wp
```

### Estrutura dos Arquivos

O build vai gerar:
- `manifest.json`: Mapa de arquivos gerados pelo Vite.
- `assets/`: Pasta contendo JS e CSS (com hashes).
- `logos/`, `cases/`, etc: Arquivos estáticos.
- `index.html`: Entry point (HTML).

### Integração com WordPress (PHP)

O WordPress deve:
1.  Ler o arquivo `manifest.json`.
2.  Encontrar a entrada `index.html`.
3.  Enfileirar o CSS listado em `css`.
4.  Enfileirar o arquivo JS principal listado em `file` (como module).
5.  Injetar `<base href="...">` para corrigir caminhos relativos de imagens.

Exemplo de estrutura no servidor:
```
/wp-content/themes/seu-tema/assets/eva-home/
  ├── manifest.json
  ├── assets/
  │   ├── index-XXXX.js
  │   └── index-YYYY.css
  └── logos/
      └── cubo.png
```

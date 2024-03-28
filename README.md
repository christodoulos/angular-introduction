# Εισαγωγή στο Angular Framework

## Βήμα 1: Απλή δέσμευση χαρακτηριστικών (one way binding)

- Χρήση του placeholder `{{ <atribute_name > }}` για τη δεσμευση του χαρακτηριστικού `attribute_name` στο template του component.
- Αν το χαρακτηριστικό της κλάσης είναι αντικείμενο τότε χρησιμοποιούμε τη γνωστή σύνταξη `{{ <object_name>.<attribute_name> }}`.

## Βήμα 0: Προετοιμασία και βασικές ενέργειες

- Εγκατάσταση του Angular CLI

  ```bash
  npm install -g @angular/cli@latest
  ```

- Δημιουργία ενός νέου Angular Project

  ```bash
  ng new angular-introduction --standalone --skip-tests
  ```

- Επεμβάσεις στο αρχείο `ts.config.json`

  ```json
  {
  ...
  "compilerOptions": {
      ...
      "baseUrl": "./",
      "strict": false,
      ...
  }
  ...
  }
  ```

- Εκκίνηση του Angular Project

  ```bash
  ❯ ng serve
  Initial chunk files | Names         | Raw size
  polyfills.js        | polyfills     | 83.60 kB |
  main.js             | main          |  1.67 kB |
  styles.css          | styles        | 95 bytes |

                      | Initial total | 85.36 kB

  Application bundle generation complete. [1.241 seconds]

  Watch mode enabled. Watching for file changes...
  ➜  Local:   http://localhost:4200/
  ➜  press h + enter to show help
  ```

- Η εφαρμογή είναι διαθέσιμη στη διεύθυνση `http://localhost:4200/`

- Δημιουργία online repository στο GitHub (`angular-introduction`) και αποστολή του κώδικα

  ```bash
  git remote add origin git@github.com:christodoulos/angular-introduction.git
  git push -u origin main
  ```

- Δημιουργία του repository `<username>.github.io` αν δεν υπάρχει ήδη.

- Προσθήκη δυνατότητας deployment στις σελίδες gh-pages του GitHub

  ```bash
  ng add angular-cli-ghpages
  ```

- Προσθήκη του _deploy_ script στο αρχείο `package.json`

  ```json
  {
  ...
  "scripts": {
      ...
      "deploy": "ng deploy --base-href=https://<username>.github.io/angular-introduction/"
  }
  ...
  }
  ```

- Αποστολή της εφαρμογής στις σελίδες gh-pages του GitHub

  ```bash
  npm run deploy
  ```

- Η εφαρμογή είναι διαθέσιμη στη διεύθυνση `https://<username>.github.io/angular-introduction/`

- Ενεργοποίηση του GitHub Pages για το repository `<username>.github.io/angular-introduction`

- Η εφαρμογή είναι διαθέσιμη στη διεύθυνση `https://<username>.github.io/angular-introduction/`

- Εγκατάσταση του bootstrap

  ```bash
  npm install bootstrap
  ```

- Επεξεργασία του αρχείου `angular.json`

  ```json
  {
  ...
  "styles": [
      "src/styles.css",
      "node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  ...
  }
  ```

- **Επανεκκίνηση του Angular Project** μετά από κάθε αλλαγή στο αρχείο `angular.json` είναι απαραίτητο να εκκινηθεί ξανά το Angular Project (^C και ξανά `ng serve`)

- Τοπική εγκατάσταση του `prettier` και δημιουργία του αρχείου `.prettierrc`

  ```bash
  npm install --save-dev prettier
  ```

  ```json
  {
    "overrides": [
      {
        "files": "*.html",
        "options": {
          "parser": "angular"
        }
      }
    ]
  }
  ```

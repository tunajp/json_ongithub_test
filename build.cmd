:miniserver build
node node_modules\traceur\traceur --out tmp\miniserver_app.compiled.js utils\miniserver\app.js
type node_modules\traceur\bin\traceur.js tmp\miniserver_app.compiled.js > utils\miniserver\application.js


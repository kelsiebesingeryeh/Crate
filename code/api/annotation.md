JSON files to change (easier to comment here):
  - src/config/database.json - will need to add test database
  - src/config/params.json
    - we might set up params for product categories (tops, bottoms, shoes, etc) and styles as enumerated values rather than strings
  - package.json - add jest & supertest

Files to change (commented in file):
- src/modules/product/model.js

- src/modules/subscription/model.js
- src/modules/subscription/mutations.js
<!-- - src/modules/subscription/resolvers.js -->
<!-- - src/modules/subscription/types.js -->

<!-- - src/modules/user/resolvers.js -->


<!-- - src/modules/product/query.js -->
<!-- - src/modules/product/resolvers.js -->
<!-- - src/modules/product/types.js -->



- src/seeders/product.js

Files to add:
- src/migrations/* - we will need migrations to add additional columns to the product and subscription tables

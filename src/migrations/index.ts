import * as migration_20260322_233106_initial from './20260322_233106_initial';
import * as migration_20260330_025641_add_name_role_to_users_table from './20260330_025641_add_name_role_to_users_table';
import * as migration_20260330_030600_add_categories_table from './20260330_030600_add_categories_table';
import * as migration_20260330_045321_add_authors_table from './20260330_045321_add_authors_table';

export const migrations = [
  {
    up: migration_20260322_233106_initial.up,
    down: migration_20260322_233106_initial.down,
    name: '20260322_233106_initial',
  },
  {
    up: migration_20260330_025641_add_name_role_to_users_table.up,
    down: migration_20260330_025641_add_name_role_to_users_table.down,
    name: '20260330_025641_add_name_role_to_users_table',
  },
  {
    up: migration_20260330_030600_add_categories_table.up,
    down: migration_20260330_030600_add_categories_table.down,
    name: '20260330_030600_add_categories_table',
  },
  {
    up: migration_20260330_045321_add_authors_table.up,
    down: migration_20260330_045321_add_authors_table.down,
    name: '20260330_045321_add_authors_table'
  },
];
